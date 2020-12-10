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
      Bread.findById(req.params.id)
      .then((bread)=>{
        res.status(200).json(bread)
      })
}

function create(req,res){
    Bread.create(req.body)
    .then((bread)=>{
        res.status(201).json(bread)
    })
      
}
function update(req,res){
      
}
function deleteBread(req,res){
      
}