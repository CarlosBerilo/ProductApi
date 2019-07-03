// Definição do Schema (os campos e seus valores do objeto)
// Mapeamento para banco de dados
const mondoose = require("mongoose");
const mondoosePaginate = require('mongoose-paginate');

const ProductSchema = new mondoose.Schema({
   title: {  type:String , required: true },
   description: {  type:String , required: true },
   url: {  type:String , required: true },
   createdAt: {  type:Date , default: Date.now, },
});
ProductSchema.plugin(mondoosePaginate);
mondoose.model('Product', ProductSchema);