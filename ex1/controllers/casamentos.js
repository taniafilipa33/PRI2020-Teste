var mongoose = require("mongoose");
var Casamentos = require("../models/casamentos");

// Devolve a lista de casamentos
module.exports.list = () => {
  return Casamentos.find().exec();
};

//devolve um casamento dado um id
module.exports.lookUp = (id) => {
  return Casamentos.find({ _id: id }).exec();
};

//devolve casamentos de um nome
module.exports.porNome = (nome) => {
  return Casamentos.find({ title: { $regex: nome } }).exec();
};

//devolve casamentos de um nome
module.exports.porData = (data) => {
  return Casamentos.find({ date: { $regex: data } }).exec();
};

//devolve casamentos de um nome
module.exports.noivos = (data) => {
  return Casamentos.find({ date: { $regex: "^([0-9][0-9]:).*(c.c)$" } });
};
