const { poolPromise } = require('./db.js');
poolPromise.then(pool => pool.request().query("SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ImageList'"))
  .then(res => {
    console.log("ImageList:", res.recordset);
    return poolPromise.then(pool => pool.request().query("SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'DishMaster'"));
  })
  .then(res => {
    console.log("DishMaster:", res.recordset);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
