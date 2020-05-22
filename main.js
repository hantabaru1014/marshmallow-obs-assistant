const {app, BrowserWindow, Menu, shell} = require('electron')
const path = require('path')
const windowStateKeeper = require('electron-window-state');
const Store = require('electron-store');

let mainWindow;
const store = new Store({
  defaults: {
    url: 'https://marshmallow-qa.com/messages/personal',
    imagePath: ''
  }
});

const isMac = process.platform === 'darwin';
const menuTemplate = [
  ...(isMac ? [{role: 'appMenu'}] : []),
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' },
      {
        label: 'Settings',
        click: () => {
          shell.openPath(store.path);
        }
      }
    ]
  },
  {role: 'viewMenu'},
  {
    label: 'Help',
    submenu: [
      {
        label: 'Version '+app.getVersion()
      },
      {
        label: 'About',
        click: () => {
          shell.openExternal('https://github.com/hantabaru1014/marshmallow-obs-assistant');
        }
      }
    ]
  }
];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

function createWindow () {
  // Create the browser window.
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });
  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
  })
  mainWindowState.manage(mainWindow);

  // open marshmallow
  mainWindow.loadURL(store.get('url'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  let dirPath = path.resolve('.');
  if (process.env.PORTABLE_EXECUTABLE_DIR){//electron-builder target = portable
    dirPath = process.env.PORTABLE_EXECUTABLE_DIR;
  }
  const defaultSavePath = path.join(dirPath, 'dl-marshmallow.png');//__dirname, process.env.INIT_CWD, 
  mainWindow.webContents.session.on('will-download', (event, item, webContents) => {
    let path = store.get('imagePath');
    if (!path){
      path = defaultSavePath;
    }
    item.setSavePath(path);
    console.log(item.getSavePath());
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})
