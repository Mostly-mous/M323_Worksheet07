const hh = require("hyperscript-helpers");
const { h } = require("virtual-dom");
const {MSGS} = require("./model.js");

const { div, button, input, table, thead, tbody, tr, th, td } = hh(h);

function view(dispatch, model) {
    const btnStyleB = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 tounded w-30";
    const btnStyleR = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 tounded w-30";

    return div({ className: "flex flex-col gap-4 p-4" }, [
        div({ className: "flex gap-2" }, [
            input({
                type: "text",
                placeholder: "Enter location...",
                value: model.location,
                oninput: (e) => dispatch({ type: MSGS.LOCATION, value: e.target.value }),
                className: "border p-2",
            }),
            button({ className: btnStyleB, onclick: () => dispatch({ type: MSGS.ADD }) }, "Add"),
        ]),

        div({ className: "flex flex-col gap-4 items-center max-w-auto"}, [
            table({ className: "table-auto border-collapse border border-gray-400"}, [
                thead([
                    tr([
                        th({ className: "border px-4 p-2 w-auto min-w-30"}, "Location"),
                        th({ className: "border px-4 p-2 w-auto min-w-30"}, "Temp"),
                        th({ className: "border px-4 p-2 w-auto min-w-30"}, "Low"),
                        th({ className: "border px-4 p-2 w-auto min-w-30"}, "High"),
                        th({ className: "border px-4 p-2 w-auto min-w-30"}, ""),
                    ]),
                ]),
                tbody([
                    ...model.locations.map((location, index) =>
                        tr({ key: index }, [
                            td({ className: "border px-4 py-2 max-w-auto min-w-30"}, location.location),
                            td({ className: "border px-4 py-2 max-w-auto min-w-30"}, location.temp),
                            td({ className: "border px-4 py-2 max-w-auto min-w-30"}, location.low),
                            td({ className: "border px-4 py-2 max-w-auto min-w-30"}, location.high),
                            td({ className: "border px-4 py-2 max-w-auto min-w-30"}, [
                                button({ className: btnStyleR, onclick: () => dispatch({type: MSGS.DELETE, index }) }, "Delete"),
                            ]),
                        ])
                    ),
                ]),
            ]),
        ]),
    ]);
}

module.exports = view;