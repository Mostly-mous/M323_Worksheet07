const view = require('./view.js');
const update = require ('./update.js');
const app = require ('./app.js');
const { initModel } = require ('./model.js');


// The root node of the app (the div with id="app" in index.html)
const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);