function update(msg, model) {
    switch (msg.type) {
        case MSGS.LOCATION:
            return {...model, location: msg.value};
        case MSGS.ADD:
            if (!model.location) {return model;}
            return {...model, locations: [ ...model.locations, {location: model.location, temp: model.temp, high: model.high, low: model.low},],
             location: "",
             temp: "",
             high: "",
             low: "",
            };
        case MSGS.DELETE:
            return { ...model, location: model.locations.filter((_, i) => i!== msg.index ) };
        case MSGS.LOAD_WEATHER:
            return { ...model, locations: [ ...model.locations, msg.payload], location: "" };
        default:
            return { ...model };
    }
}

module.exports = update;