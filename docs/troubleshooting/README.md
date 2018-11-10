# Troubleshooting

## Angular/CLI

### Issue

- browser doesn't reflect the file changes:
`$ ng serve`

### Solution

- `$ sudo ng serve`
- try to run a non [flatpak](https://www.flatpak.org/) app
- or if VS Code shows: [Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc) (better solution)
  - `$ sudo nano /etc/sysctl.conf`
  - Add `fs.inotify.max_user_watches=40000` to the end of the file. The current project has about 35k files.
  - `$ sudo sysctl -p`


***

## Karma

### Issue

```
ERROR [launcher]: Cannot start Chrome
    Can not find the binary google-chrome
    Please set env variable CHROME_BIN
```

### Solution

- `$ export CHROME_BIN=/usr/bin/chromium-browser`

***

## GitKraken

### Issue

```
$ gitkraken 
Node started time: 1539796004814
libgnome-keyring.so.0: cannot open shared object file: No such file or directory
Error: libgnome-keyring.so.0: cannot open shared object file: No such file or directory
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:166:20)
    at Object.Module._extensions..node (module.js:671:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:180:18)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:504:12)
    at Function.Module._load (module.js:496:3)
    at Module.require (module.js:586:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/usr/share/gitkraken/resources/app.asar/node_modules/keytar/lib/keytar.js:4:12)
    at Object.<anonymous> (/usr/share/gitkraken/resources/app.asar/node_modules/keytar/lib/keytar.js:58:4)
```

### Solution

- `$ sudo apt install libgnome-keyring-common libgnome-keyring-dev`
- [Source](https://superuser.com/questions/1233459/error-running-gitkraken-even-though-dependencies-installed)
