const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('alimetrica')
})

module.exports = router