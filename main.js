const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'File Handling',
    width: 1500,
    height: 800,
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startURL)

}



app.whenReady().then(createMainWindow);