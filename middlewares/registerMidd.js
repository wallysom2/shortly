import Joi from 'joi';

export async function registerMidd(req, res, next){
  const validacao = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
  });
  const { error } = validacao.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map(e => e.message);
    return res.status(400).json({
      error: errors
    });
  }

  try {
    const {email} = req.body;
    const user = await connection.query(`
    SELECT * FROM users 
    WHERE email=$1
  `, [email]);

  return user.rows[0];
    
    if(user){
      return res.status(422).send({
        message: 'Email ja cadastrado'
      });
    }

    next();

  } catch (error) {
    console.log(error);
    res.sendStatus(422);
  }
}

export default registerMidd;