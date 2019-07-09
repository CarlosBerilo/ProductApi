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
const uriMongoProductApi = "mongodb+srv://AdminUser:126459@clusterteste-bwcmx.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uriMongoProductApi, {useNewUrlParser:true});

// Registrar models usando require-dir
requireDir('./src/models');

// Definindo Rota
app.use('/api', require('./src/routes'));

// Ouvindo a porta 'process.env.PORT' padrão do heroku ou a porta 3001 
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("Servidor funcionando.");
});






