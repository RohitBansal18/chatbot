/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================

// ===== MESSENGER =============================================================
import ThreadSetup from './messenger-api-helpers/thread-setup';

const app = express();

/* =============================================
   =           Basic Configuration             =
   ============================================= */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* ----------  Messenger setup  ---------- */

//ThreadSetup.setDomainWhitelisting();
//ThreadSetup.setPersistentMenu();
ThreadSetup.setGetStarted();

/* =============================================
   =                 Port Setup                =
   ============================================= */

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app; // eslint-disable-line
