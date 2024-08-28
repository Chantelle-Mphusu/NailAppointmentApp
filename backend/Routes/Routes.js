const router = require("express").Router();
const {Create} = require('../Components/Endpoints')


router.post('/appoint', Create)


module.exports = router;