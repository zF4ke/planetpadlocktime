const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('passos')
})

module.exports = router