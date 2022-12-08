// src/app.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

// 🚀 Exercício 1
// Crie uma função de leitura do JSON com o modulo fs.

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (err) {
    console.error(`O arquivo não pode ser lido: ${err}`);
  }
};

// 🚀 Exercício 2
// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

app.get('/movies/:id', async (req, res) => {
   const { id } = req.params;
   try {
    const movies = await readFile();
    const movie = movies.find((movieItem) => movieItem.id === Number(id));
    res.status(200).json(movie);
   } catch (err) {
    res.status(500).send({ message: err.message });
   }
});

// 🚀 Exercício 3
// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

app.get('/movies', async (_req, res) => {
  try {
   const movies = await readFile();
   res.status(200).json(movies);
  } catch (err) {
   res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 4
// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;
    const newMovie = {
      id: movies.length + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
   res.status(201).json(newMovie);
  } catch (err) {
   res.status(500).send({ message: err.message });
  }
});

module.exports = {
  app };