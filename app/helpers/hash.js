const bcrypt = require('bcryptjs');

const hassPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

const comparePassword = (password, hassPassword) => {
    return bcrypt.compareSync(password, hassPassword);
}

module.exports = {
    hassPassword,
    comparePassword
};