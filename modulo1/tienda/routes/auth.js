const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const permission = require('../middlewares/permissions')


module.exports = router;

// crea ruta del login
router.post('/login', permission('admin'), async (req, res) => {
   // destructura el req y obtione el body
   const { body } = req;
   // consultamos el user por el mail
   const user = await sequelize.models.users.findOne({ where: { email: body.email,  }});
   // revisamos si el objeto usuario esta null o vacio
   if(!user){
    // damos respuesta que no existe el usuario con el mail ingresado
    return res.send(404).json({ data: {}, message: 'user not found' });
   }
   // si existe el usuario revisamos si el password que ingreso es igual al que esta guardado en la db
   if(!user.validPassword(body.password)){
    return res.send(401).json({ data: {}, message: 'Invalid credentials' });
   }
   // En este punto estamos totalmente validado entonces generamos un token con los datos que en tenemos con el .env
   const token = jwt.sign({userId: user.id}, process.env.JWT_SECRETKEY, {
       expiresIn: process.env.JWT_EXPIRESIN,
   });
   // respondemos un 200 con el token generado.
   return res.send(200).json({ data: { token }, message: 'Success' });
});

router.post('/signup', permission('admin'), async (req, res) => {
    const { body } = req;
    let user = await sequelize.models.users.findOne({ where: { email: body.email,  }});
    if(user){
        return res.send(404).json({ data: {}, message: 'user found' });
    }
    user = await sequelize.models.users.create({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        type: 'client',
        password: body.password,
    });
    await user.save();
    return res.json({ data: { user }, message: 'user created' });
});