{/* <div className="parent">
    <div className="child">
        <h1>This is an h1 tag</h1>
        <h2>This is an h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {className: "parent"}, 
    [React.createElement("div", {className: "child1"}, 
        [React.createElement("h1", {className: "heading1"}, "This is an h1 tag"),
        React.createElement("h2", {className: "heading2"}, "This is an h2 tag")]
    ),
    React.createElement("div", {className: "child2"}, 
        [React.createElement("h1", {className: "heading1"}, "This is an h1 tag"),
        React.createElement("h2", {className: "heading2"}, "This is an h2 tag")]
    )] 
)

const heading = React.createElement("h1", { id: "heading", className: "heading_cls"}, "Hello from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent); 