const settingCtrl=require('./controllers/setting');
const connectionCtrl = require('./controllers/connection');
const pingHistoryCtrl= require('./controllers/pingHistory');


module.exports = (app)=>{

  /* settings */
  // login
  app.post('/api/login', settingCtrl.login);
  // insert
  app.post('/api/setting', settingCtrl.insert);
  // update
  app.put('/api/setting', settingCtrl.update);
    // get
    app.get('/api/setting', settingCtrl.get);
  /* settings */

  /* Connection */
  // insert
  app.post('/api/connection', connectionCtrl.insert);
  
  // get single connection
  app.get('/api/connection/:id', connectionCtrl.get);
  
  // get all collections
  app.get('/api/connection', connectionCtrl.getAll);
 
 // update a connection by id
  app.put('/api/connection/:id', connectionCtrl.update);

 // delete a connection by id
  app.delete('/api/connection/:id', connectionCtrl.delete);
  /* Connection */

  /*pingHistory*/
  // get single pingHistory by connection id provided a time filter (Default = 1 hr)
  app.post('/api/pingHistory/:id',pingHistoryCtrl.get);
  /*pingHistory*/
}