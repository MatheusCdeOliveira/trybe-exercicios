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

// 🚀 Exercício 5
// Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const { movie, price } = req.body;
   const editedMovie = movies.find((movieItem) => movieItem.id === Number(id));
    editedMovie.id = Number(id);
    editedMovie.movie = movie;
    editedMovie.price = price;
   const updatedMovie = JSON.stringify([...movies]);
    await fs.writeFile(moviesPath, updatedMovie);
   res.status(200).json(editedMovie);
  } catch (err) {
   res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 6
// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const movieIndex = movies.findIndex((movieItem) => movieItem.id === Number(id));
    movies.splice(movieIndex, 1);
    const updatedMovies = JSON.stringify(movies);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = {
  app };