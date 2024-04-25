import Joi from "joi";

const createArtikelValidation = Joi.object({
  judul: Joi.string().max(100).required(),
  poin: Joi.string().max(100).required(),
  konten: Joi.string().required(),
  image_url: Joi.string().required(),
});

const getArtikelValidation = Joi.string().required();

const updateArtikelValidation = Joi.object({
  judul: Joi.string().max(100).required(),
  poin: Joi.string().max(100).required(),
  konten: Joi.string().required(),
  image_url: Joi.string().required(),
});

export {
  createArtikelValidation,
  getArtikelValidation,
  updateArtikelValidation,
};