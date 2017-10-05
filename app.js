// ===== MODULES ===============================================================
import express from 'express';
import bodyParser from 'body-parser';

// ===== ROUTES ================================================================
import webhooks from './routes/webhooks';
// ===== MESSENGER =============================================================
import ThreadSetup from './messenger-api-helpers/thread-setup';

const app = express();

/* ----------  Parsers  ---------- */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* =============================================
   =           Basic Configuration             =
   ============================================= */

app.get('/', function(req, res){
     res.send("Welcome to Travel Chatbot");
});

app.use('/webhook', webhooks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Page Not Found - Verify URL');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send('error')
});


/* ----------  Messenger setup  ---------- */

//ThreadSetup.setDomainWhitelisting();
ThreadSetup.setPersistentMenu();
//ThreadSetup.setGetStarted();

/* =============================================
   =                 Port Setup                =
   ============================================= */

//app.listen(app.get('port'), () => {
//  console.log('Node app is running on port', app.get('port'));
//});

module.exports = app; // eslint-disable-line
