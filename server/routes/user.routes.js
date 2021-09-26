const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);



  // RH
  app.get(
    "/api/test/rh",
    [authJwt.verifyToken, authJwt.isRH],
    controller.rhBoard
  );

  //PP
  app.get(
    "/api/test/pp",
    [authJwt.verifyToken, authJwt.isPP],
    controller.ppBoard
  );


   // client
    app.get(
      "/api/test/client",
      [authJwt.verifyToken, authJwt.isClient],
      controller.clientBoard
    );

  //Admin
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
