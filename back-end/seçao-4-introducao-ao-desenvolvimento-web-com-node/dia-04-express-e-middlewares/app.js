const express = require('express');
const path = require('path');
const { readFile } = require('./utils/readfile');
// const { writeFile } = require('./utils/writefile');
const { validationCreated } = require('./validations/validationCreatedAt');
const { validationDescription } = require('./validations/validationDescription');
const { validationName } = require('./validations/validationName');
const { validationPrice } = require('./validations/validationPrice');
const { validationRating } = require('./validations/validationRating');
const generateToken = require('./utils/generateCrypto');
const { authentication } = require('./middlewares/auth');

const app = express();

app.use(express.json());

const pathName = path.resolve(__dirname, './locations.json');

app.get('/', async (_req, res) => {
  try {
    const data = await readFile(pathName);
    res.status(200).json(data);
  } catch (err) {
    console.error(`deu ruim: ${err.message}`);
  }
});

// app.post('/activities', async (req, res) => {
//   try {
//     const { name, price, description: { rating, difficulty, createdAt } } = req.body;
//     const locations = await readFile(pathName);
//     const newLocation = {
//       name,
//       price,
//       description: {
//         rating,
//         difficulty,
//         createdAt,
//       },
//     };
//     const allLocations = [...locations, newLocation];
//     await writeFile(pathName, allLocations);
//     res.status(201).json(newLocation);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

app.post('/activities',
 authentication,
 validationName,
 validationPrice,
 validationDescription,
 validationCreated,
 validationRating,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body; 
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = app;