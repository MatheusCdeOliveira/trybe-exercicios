const validateProperty = (property, res, propertyMessage) => {
    if (!property) {
      return res.status(400).json({ message: `O campo ${propertyMessage} é obrigatório` });
    }
};

const validationDescription = (req, res, next) => {
  const { description } = req.body; 
  return validateProperty(description, res, 'description')
  || validateProperty(description.rating, res, 'rating')
  || validateProperty(description.difficulty, res, 'difficulty')
  || validateProperty(description.createdAt, res, 'createdAt')
  || next();
};

module.exports = {
  validationDescription,
};