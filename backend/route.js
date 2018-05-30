const authCtrl=require('./controllers/auth');
const connectionCtrl = require('./controllers/connection');


module.exports = (app)=>{

  app.post('/api/login', authCtrl.login);
  app.post('/api/connection', connectionCtrl.insert);
  // app.post('/user',cors(corsOptions), ctrl.insert);
  // app.get('/user',cors(corsOptions), ctrl.get);
  // app.delete('/user/:id',cors(corsOptions), ctrl.delete);
  // app.put('/user/:id',cors(corsOptions), ctrl.update);
  // app.put('/user/ping/:time',cors(corsOptions), function (req, res) {
  //   pingInterval = req.params.time * 1000;
  //   if (timer) {
  //     clearInterval(timer);
  //     timer = setInterval(polling, pingInterval);
  //   }
  //   res.json(pingInterval / 1000);
  // });
  // app.put('/user/fetch/:time',cors(corsOptions), function (req, res) {
  //   fetchInterval = req.params.time;
  //   res.json(fetchInterval);
  // });
  // app.get('/user/ping',cors(corsOptions), function (req, res) {
  //   res.json(pingInterval / 1000);
  // });
  // app.get('/user/fetch',cors(corsOptions), function (req, res) {
  //   res.json(fetchInterval);
  // });
  
}