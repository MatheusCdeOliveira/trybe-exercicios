const validationRating = (req, res, next) => {
  const { rating } = req.body.description; 

  if (!Number.isInteger(rating) || !(rating >= 1 && rating < 6)) {
  return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = {
  validationRating,
};