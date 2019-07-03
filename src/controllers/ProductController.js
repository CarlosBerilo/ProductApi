// Acesso ao banco de dados
const mongoose = require('mongoose');
// Acesso ao modelo
const Product = mongoose.model('Product');

module.exports = {
    // Lista os Products
    async index(req, res){
        const {page=1} = req.query;
        const produts = await Product.paginate({}, {page, limit: 10});
        return res.json(produts);
    },
    // Inser Product
    async store(req, res){
         const product = await Product.create(req.body);
         return  res.json(product);
    },

    // Buscar pelo ID
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    } ,

    // Atualização 
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
     },

     // Delete
     async delete(req, res){
         await Product.findByIdAndRemove(req.params.id);
         return res.send("Excluido com sucesso.");
     }
};