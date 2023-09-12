const express = require('express');
const router = express.Router();
const User = require('../models/model_user');

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el usuario.' });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
});

// Eliminar un usuario
router.delete('/:id_user', async (req, res) => {
  try {
    const users = await User.findByIdAndRemove(req.params.id_user);
    if (!users) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.status(200).json({ message: 'El usuario se eliminó correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario.' });
  }
});

// Actualizar la información de un usuario
router.put('/:id_user', async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id_user, req.body, {
      new: true,
    });
    if (!users) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.status(200).json({ message: 'Usuario actualizado con éxito', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
});

module.exports = router;




