const { check, validationResult } = require("express-validator");

const userValidator = [
  check("username")
  .exists()
  .withMessage(() => "El campo Name es obligatorio.")
  .trim()
  .escape()
  .toUpperCase()
  .isLength({ min: 3, max: 50 })
  .withMessage(() => "El campo debe tener entre 3 y 50 caracteres."),
  check("name")
    .exists()
    .withMessage(() => "El campo Name es obligatorio.")
    .trim()
    .escape()
    .toUpperCase()
    .isLength({ min: 3, max: 50 })
    .withMessage(() => "El campo debe tener entre 3 y 50 caracteres."),
  check("lastname")
    .exists()
    .withMessage(() => "El campo Name es obligatorio.")
    .trim()
    .escape()
    .toUpperCase()
    .isLength({ min: 3, max: 50 })
    .withMessage(() => "El campo debe tener entre 3 y 50 caracteres."),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

module.exports = {
  userValidator,
  validate,
};
