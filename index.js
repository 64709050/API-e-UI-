const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/usuarios', (req, res) => {
  res.status(200).json([{id:1, nome:"João"}]);
});

app.post('/api/usuarios', (req, res) => {
  res.status(201).json({mensagem: "Criado"});
});

app.listen(3000, () => console.log("API rodando"));
