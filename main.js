const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'File Handling',
    width: 800,
    height: 600,

    webPreferences: {
      
    }
  });

  // just opens the f12 menu on startup
  mainWindow.webContents.openDevTools()

  // gets rid of the top example menu
  mainWindow.removeMenu()

  const startUrl = url.format({
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startUrl)

}



app.whenReady().then(createMainWindow);