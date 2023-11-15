const archiver = require('archiver');
const fs = require('fs');

function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve());
    archive.finalize();
  });
}
const sourceDir = __dirname+'/files'
const outPath = __dirname+'/files.gz'
zipDirectory(sourceDir,outPath)