function update(msg, model) {
    switch (msg.type) {
        case MSGS.LOCATION:
            return {...model, location: msg.value};
        case MSGS.ADD:
            if (!model.location) {return model;}
            return {...model, locations: [ ...model.locatons, {location: model.location, temp: model.temp, high: model.high, low: model.low},],
             location: "",
             temp: "",
             high: "",
             low: "",
            };
        case MSGS.DELETE:
            return { ...model, location: "", temp: "", high: "", low: "" };
        default:
            return { ...model };
    }
}

module.exports = update;