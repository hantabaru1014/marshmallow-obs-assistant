const builder = require('electron-builder');
const fs = require('fs');
const packagejson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

builder.build({
  config: {
    'appId': `com.github.hantabaru1014.${packagejson.name}`,
    'win': {
      'target': 'portable',//portable, zip
      'icon': 'static/icon256.png',
    },
  },
});