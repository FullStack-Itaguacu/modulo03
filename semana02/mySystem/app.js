const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

const sequelize = new Sequelize('mydb', 'postgres', 'postgres', {
  host: 'postgres',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.get('/', (req, res) => {
  res.send('API da aplicação Node.js com Express e Sequelize');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

(async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate([
    { name: 'João', email: 'joao@example.com' },
    { name: 'Maria', email: 'maria@example.com' },
  ]);
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})();
