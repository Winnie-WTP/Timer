const { contextBridge, ipcRenderer } = require('electron');

// Expose the ipcRenderer to the renderer process securely
contextBridge.exposeInMainWorld('electron', {
    closeWindow: () => ipcRenderer.send('close-window'),
    minimizeWindow: () => ipcRenderer.send('minimize-window')
});
