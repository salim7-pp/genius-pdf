const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('pdfw', { saveFile: (name, data) => ipcRenderer.invoke('save-file', name, data) });
