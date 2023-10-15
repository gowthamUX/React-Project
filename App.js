const heading = React.createElement(
    "div",{id:'parent1'}, 
    [React.createElement(
        "div",
        {id: "child1"}),
         [React.createElement("h1",{},"h1 tag"), React.createElement("h1",{},"h2 tag")]   ,
        ], React.createElement(
            "div",
            {id: "child2"}),
             [React.createElement("h1",{},"h3 tag"), React.createElement("h1",{},"h24tag")]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);