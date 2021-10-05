const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 500,
        titleBarStyle: 'hidden',
        alwaysOnTop: true,
        webPreferences: {
          nodeIntegration: true
        }
    })

    win.loadURL('http://localhost:3000')

    win.webContents.openDevTools();

    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

app.whenReady().then(() => {
    createWindow()
})