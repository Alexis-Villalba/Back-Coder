import { request, response } from "express";
import joi from "joi";

export const checkLogin = async (req = request, res = response, next) => {
  try {

    const schema = joi.object({
      email: joi.string().email().required().messages({
        "string.email": "Tiene que ser un email",
        "any.required": "El email es obligatorio"
      }),
      password: joi.string().min(3).required().messages({
        "string.min": "Tiene que tener al menos 3 caracteres",
        "any.required": "El password es obligatorio"
      })
    }) 

    const { error } = schema.validate(req.body)
    if( error ) {
      return res.status(400).json({error: error.details[0].message})
    }

    next();
    
  } catch (error) {
    console.log(`Erro: ${error.message}`);
    res.status(500).json({ status: "error", message: "Error interno del servidor" });
  }
}