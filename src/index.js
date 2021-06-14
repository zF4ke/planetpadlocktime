require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(cors());
app.enable('trust proxy');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    res.render('index');
});

app.use('/passos', require('./routes/passos'))
app.use('/alimetrica', require('./routes/alimetrica'))
app.use('/binariosequencial', require('./routes/binariosequencial'))