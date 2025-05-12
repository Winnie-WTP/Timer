const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 444,
        height: 600,
        frame: false, // Remove the default frame (custom title bar)
        transparent: true, // Make the window transparent for custom shapes
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false // Don't use node integration in renderer
        }
    });

    win.loadFile('index.html');

    // Handle minimize window request
    ipcMain.on('minimize-window', () => {
        win.minimize(); // Minimize the window
    });

    // Handle close window request
    ipcMain.on('close-window', () => {
        win.close(); // Close the window
    });
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
