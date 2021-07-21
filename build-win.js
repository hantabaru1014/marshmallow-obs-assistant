const builder = require('electron-builder');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const packagejson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

function packToZip(){
  const outZipPath = path.join(__dirname, 'dist', `${packagejson.name}_v${packagejson.version}.zip`);
  const output = fs.createWriteStream(outZipPath);
  const archive = archiver('zip');
  archive.pipe(output);

  const exeName = `${packagejson.name} ${packagejson.version}.exe`;
  archive.file(path.join('dist', exeName), { name: exeName });
  const staticDirPath = 'static';
  const staticFileNames = ['ReadMe.txt', 'licenses.txt'];
  for (const fileName of staticFileNames){
    archive.file(path.join(staticDirPath, fileName), { name: fileName });
  }

  archive.finalize();
}

builder.build({
  config: {
    'appId': `com.github.hantabaru1014.${packagejson.name}`,
    'win': {
      'target': 'portable',//portable, zip
      'icon': 'static/icon256.png',
    },
    'files': [
      '**/*',
      '!static',
      '!dl-marshmallow.*',
      '!build-*.js'
    ]
  },
}).then(() => {
  setTimeout(packToZip, 3*1000);
});
