/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-24 16:31:42
 * @desc [ Routes ]
 */

const { Router } = require('express');

const router = Router();

// default
router.get('/', (req, res) => res.status(200).json({ author: 'Mohamad Ihsan', contact: 'mohamad_ihsan100@yahoo.co.id', company: 'KATAPANDA', description: 'API untuk System Management' }));

module.exports = router;