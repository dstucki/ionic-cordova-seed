Ionic-Cordova-Seed
=====================

This seed project is a starter setup with ionic, bower, gulp and cordova.

## Gulp tasks

 * `gulp setup`     # installs all cordova plugins and bower packages
 * `gulp`           # starts a server and watches file changes
 * `gulp run`       # deploy on devices
 * `gulp emulate`   # deploy on emulater/simulator

## Install

Install global npm packages
```
npm install -g cordova ionic gulp
```

Copy and edit gulp config file
```
cp gulpconfig.sample.js gulpconfig.js
edit gulpconfig.js
```

Install local npm packages
```
npm install
```

Install all cordova and bower packages
```
gulp setup
```

