#   Referensi   : https://github.com/nedssoft/sequelize-with-postgres-tutorial

#   Content     : Sequelize setup, configuration, migration and seeding.

#   Requirement       
#   -   install NodeJS
#   -   instsall NPM atau YARN

#   Step:
#   -   npm install sequelize sequelize-cli pg pg-hstore atau npm install -g sequelize-cli
#   -   touch .sequelizerc
#   -   copy to .sequilezerc
        const path = require('path')

        module.exports = {
            config: path.resolve('./database/config', 'config.js'),
            'models-path': path.resolve('./database/models'),
            'seeders-path': path.resolve('./database/seeders'),
            'migrations-path': path.resolve('./database/migrations'),
        }
#   -   sequelize init (tahap ini akan otomatis mengenerate struktur folder database sesuai .sequilezerc)
#   -   edit database/config/config.js. Copy :
        require('dotenv').config()

        module.exports = {
            development: {
                url: process.env.DEV_DATABASE_URL,
                dialect: 'postgres',
            },
            test: {
                url: process.env.TEST_DATABASE_URL,
                dialect: 'postgres',
            },
            production: {
                url: process.env.DATABASE_URL,
                dialect: 'postgres',
            },
        }
#   -   contoh connection string postgreSQL ==> postgres://<db_user>:<db_password>@127.0.0.1:5432/dev_db
#   -   buat file .env di root untuk mendefinisikan variable variable. Contoh:
        DATABASE_URL=
        DEV_DATABASE_URL=postgres://db_user:db_password@127.0.0.1:5432/dev_db
        TEST_DATABASE_URL=postgres://db_user:db_password@127.0.0.1:5432/test_db

#   -   CREATING MODEL with cli: (ini akan otomatis membuat file di /database/migrations and database/models)
        sequelize model:generate --name User --attributes name:string,email:string
        (Note, ensure there's no space between --attributes definition).

#   -   edit models/index.js. Copy:
        const fs = require('fs');
        const path = require('path');
        const Sequelize = require('sequelize');
        const envConfigs =  require('../config/config');

        const basename = path.basename(__filename);
        const env = process.env.NODE_ENV || 'development';
        const config = envConfigs[env];
        const db = {};

        let sequelize;
        if (config.url) {
        sequelize = new Sequelize(config.url, config);
        } else {
        sequelize = new Sequelize(config.database, config.username, config.password, config);
        }

        fs
        .readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = sequelize['import'](path.join(__dirname, file));
            db[model.name] = model;
        });

        Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
        });

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        module.exports = db;

#   -   SEQUILEZE CLI : sequileze --help
#   -   MIGRATION : 
        sequelize db:migrate
        sequelize db:migrate:all
        sequelize db:migrate:undo
        sequelize db:migrate:undo:all

#   -   SEEDING :
        sequelize seed:generate --name default-user-group
        sequelize db:seed
        sequelize db:seed:all
        sequelize db:seed:undo
        sequelize db:seed:undo:all

#   -   Full Documentation : https://sequelize.org/master/manual/migrations.html#installing-the-cli   

#   Query get action pada setiap menu : 
    select
        mg.menu_group_id,
        mg.menu_group_name_var,
        x.menu_id, 
        m.menu_name_var, 
        m.url_var, 
        m.icon_var, 
        x.action_id, 
        ta.action_name_var 
    from (
        select 
            tr.user_group_id, 
            ug.user_group_name_var, 
            (json_array_elements((data_json ->> 'roles')::json) ->> 'menu')::INT as menu_id, 
            (json_array_elements((json_array_elements((data_json ->> 'roles')::json) ->> 'action')::json) ->> 'id')::INT as action_id 
        from public.t_role tr 
        left join public.t_user_group ug on ug.user_group_id = tr.user_group_id 
        where ug.user_group_id = 1 -- sesuai user group saat login user
    ) x
    left join public.t_menu m on m.menu_id = x.menu_id 
    left join public.t_action ta on ta.action_id = x.action_id
    left join public.t_menu_group mg on mg.menu_group_id = m.menu_group_id
    order by 
        x.user_group_id,
        mg.menu_group_order_int,
        x.menu_id


#   Informasi:
#   -   sequelize is the sequelize library itself.
#   -   sequelize-cli is a package that enables us interact with the database through sequelize from the CLI.
#   -   pg short for postgres is a Postgres client for Node.js
#   -   pg-hstore is a node package for serializing and deserializing JSON data to hstore format.