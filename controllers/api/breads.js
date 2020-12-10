const Bread = require('../../models/bread')

module.exports = {
    index, 
    show,
    create,
    update,
    delete: deleteBread
  }

function index(req,res){
    Bread.find({})
    .then((bread)=>{
        res.status(200).json(bread)
    })
  }

function show(req,res){
      
}
function create(req,res){
      
}
function update(req,res){
      
}
function deleteBread(req,res){
      
}