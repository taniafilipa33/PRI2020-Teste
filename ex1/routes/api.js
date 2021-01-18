var express = require("express");
var router = express.Router();
var Casamentos = require("../controllers/casamentos");

/* GET: lista de alunos */
router.get("/casamentos", function (req, res) {
  Casamentos.list()
    .then((dados) => res.jsonp(dados))
    .catch((erro) => res.status(500).jsonp(erro));
});

router.get("/casamentos?nome=" + /[a-zA-Z]*/, function (req, res) {
  var split = req.url.split("nome=")[1];
  //console.log("pooo");
  Casamentos.porNome(split)
    .then((dados) => res.jsonp(dados))
    .catch((erro) => {
      res.render("error", { error: erro });
    });
});

router.get("/casamentos?ano=" + /[0-90-90-90-9]/, function (req, res) {
  var split = req.url.split("ano=")[1];
  //console.log("pooo");
  Casamentos.porAno(split)
    .then((dados) => res.jsonp(dados))
    .catch((erro) => {
      res.render("error", { error: erro });
    });
});

router.get("/casamentos/:id", function (req, res) {
  Casamentos.lookUp(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((erro) => {
      res.render("error", { error: erro });
    });
});

router.get("/casamentos/noivos", function (req, res) {
  Casamentos.noivos(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((erro) => {
      res.render("error", { error: erro });
    });
});

module.exports = router;
