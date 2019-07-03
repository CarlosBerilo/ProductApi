// importar gerenciador de rotas
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

/** 
 * Configurações da aplicação
 */

// Executa a função express().
const app = express();
// Permitir receber dados json
app.use(express.json());
// Gerancimento acesso externo.
app.use(cors());
// Conectando com o banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/data_api', { useNewUrlParser: true });
// Registrar models usando require-dir
requireDir('./src/models');

// Definindo Rota
app.use('/api', require('./src/routes'));

// Ouvindo a porta 3001 do navegador 
app.listen(3001);





