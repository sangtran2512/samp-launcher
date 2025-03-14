const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win; 

const createWindow = () => {
    win = new BrowserWindow({  
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false
        },
        transparent: true,
        frame: false
    });

    win.loadFile('index.html');
};

app.whenReady().then(createWindow);

ipcMain.on('minimize', () => {
    if (win) win.minimize();
});

ipcMain.on('close', () => {
    if (win) win.close();
});
