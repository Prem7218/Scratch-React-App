const div = document.querySelector('div');
const heading = React.createElement("h1", {className: "heading"}, "Welcome to React scratch application");
const root = ReactDOM.createRoot(div);
root.render(heading);