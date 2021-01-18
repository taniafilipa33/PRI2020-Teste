var express = require("express");
var router = express.Router();
var axios = require("axios");
var token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4NzI1MSwiZXhwIjoxNjExMDE2MDUxfQ.VHepO68V-Wa3IMdqcFmDAONeTsp_9Ev4KV52FlpKw6_3J7eBNTV93yOfXnmIQNv_n0BSAJbu89fWjW0bATHqFgBO5ooGVraCtAfpBRA5V0B6ohOSVZ-nzgv00hgCIBdaJB0d-zt8bos5eVP3Fp4HBQaQvaSw5gH9x9ZTdhYoP4iUNbZAHPTRk9tu2fuzmFdpNhDGEB0NjAROiC_JfkVmJYghsR6YCS4lh5FyFBbKpjKPfG0EnUZ5vlzjuqfNnpr8KjrH8ZgEkRE2lhNdIiF5WAr6FeSMuPwZmTjooCnB427cc0Zn--x8Wcb-VCHGBgKcQw4ADWTt2aar665lpIcccg";

// GET clav-api.di.uminho.pt/v2/classes
router.get("/", function (req, res) {
  axios
    .get("http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=" + token)
    .then((classes) => res.render("paginaclasses", { classes: classes }))
    .catch((erro) => {
      console.log(erro);
      res.render("error", res.status(500).jsonp(erro));
    });
});

// GET clav-api.di.uminho.pt/v2/classes
router.get("/classes/:id", function (req, res) {
  axios
    .get(
      "http://clav-api.di.uminho.pt/v2/classes/" +
        req.params.id +
        "token=" +
        token
    )
    .then((classes) => res.render("paginaclass", { element: classes }))
    .catch((erro) => {
      console.log(erro);
      res.render("error", res.status(500).jsonp(erro));
    });
});

// GET clav-api.di.uminho.pt/v2/classes
router.get("/class/:id", function (req, res) {
  axios
    .get(
      "http://clav-api.di.uminho.pt/v2/classes/" +
        req.params.id +
        "/descendencia&token=" +
        token
    )
    .then((classes) => res.render("descend", { element: classes }))
    .catch((erro) => {
      console.log(erro);
      res.render("error", res.status(500).jsonp(erro));
    });
});

module.exports = router;
