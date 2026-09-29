const { poolPromise } = require('./db.js');

async function fixDB() {
  try {
    const pool = await poolPromise;
    console.log("Altering ImageList.ImageData to VARBINARY(MAX)...");
    await pool.request().query(`ALTER TABLE ImageList ALTER COLUMN ImageData VARBINARY(MAX)`);
    
    console.log("Altering ImageList.ImageName to VARCHAR(150)...");
    await pool.request().query(`ALTER TABLE ImageList ALTER COLUMN ImageName VARCHAR(150)`);
    
    console.log("Done!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

fixDB();
