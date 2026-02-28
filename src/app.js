const createElement = require("virtual-dom/create-element");
const {diff, patch } = require ("virtual-dom");
const MSGS = require("./model.js");


function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    async function dispatch(msg) {
        if (msg.type === MSGS.ADD) {
            if(!model.location) return;
            try {
                const weather = await fetchWeatherInfo(model.location);

                dispatch({
                    type: MSGS.LOAD_WEATHER,
                    payload: {
                        location: model.location,
                        temp: weather.temp,
                        high: weather.high,
                        low: weather.low
                    }
                });
            } catch (error) {
                console.error(error);
            }
            return;
        }
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }
}

module.exports = app;