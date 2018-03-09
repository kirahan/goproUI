

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const {ipcMain} = require('electron')




let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Gopro预览',
        // frame: false,
        // transparent: true,
        // resizable:false,
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.


let controls

function controlsWindow() {
    ctl = new BrowserWindow({
        width:1280,
        height:720,
        title:'setting',
    })

    ctl.loadURL(url.format({
        pathname: path.join(__dirname, 'controls.html'),
        protocol: 'file:',
        slashes: true
    }))

}


app.on('ready', function () {
    createWindow()
    controlsWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})


//handshake
var main_event_id =0
ipcMain.on('main_handshake',(event,arg) =>{
    main_event_id = event
    event.sender.send('background_handshake','hello this is main.js')
})

// play video
ipcMain.on('danmu_listener',(event,arg) =>{
    console.log('open danmu')
    danmuwindow()
})



