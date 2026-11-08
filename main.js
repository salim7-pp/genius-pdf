// Genius PDF — Développé par Salim Bouzenad
const { app, BrowserWindow, ipcMain, dialog, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 420, minHeight: 500,
    title: 'Genius PDF', icon: path.join(__dirname, '..', 'assets', 'icon.png'),
    backgroundColor: '#F1F2F6', autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

ipcMain.handle('save-file', async (event, name, data) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const r = await dialog.showSaveDialog(win, { title: 'حفظ الملف', defaultPath: path.join(app.getPath('downloads'), name) });
  if (r.canceled || !r.filePath) return null;
  fs.writeFileSync(r.filePath, Buffer.from(data));
  return r.filePath;
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
