import {view} from "./view.js";
import {update} from "./update.js";
import {app} from "./app.js";
import { initModel } from "./model.js";


// The root node of the app (the div with id="app" in index.html)
const rootNode = document.getElementById("app");

// Start the app
app(initModel, update, view, rootNode);