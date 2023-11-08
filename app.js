// const heading = React.createElement("h1", {"id": "heading"}, "Hellow form React");
// const parent = React.createElement("div",
//     {id: "parent"},
//     React.createElement("div", {id: "child"},
//     React.createElement("h1", {id: "heading"}, "Hello form react")
//     )
// )
// const parent = React.createElement("div",
//     {id: "parent"},
//     React.createElement("div", {id: "child"},
//     [React.createElement("h1", {key: "heading", id: "heading"}, "Hello form react"), 
//      React.createElement("p", {key: "paragraph"}, "I'm Paragraph")
//     ]
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement("div",
        {id: "parent"},
        React.createElement("div", {id: "child"},
        [React.createElement("h1", {key:"heading" ,id: "heading"}, "hello from the React!!"), 
         React.createElement("p", {key: "paragraph",}, "this is the paragraph")
        ]
        ) 
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
