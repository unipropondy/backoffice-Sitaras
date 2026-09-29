const { poolPromise } = require('./db.js');
poolPromise.then(pool => pool.request().query("sp_help 'ImageList'"))
  .then(res => {
    console.log(JSON.stringify(res.recordsets[1], null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
