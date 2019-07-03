const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Criando a Rotas
routes.get("/", (req,res)=> {    
    return res.send("Projeto Products API.");
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

// Retorno da pagina
module.exports = routes;