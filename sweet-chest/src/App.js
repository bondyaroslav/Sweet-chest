import React from "react";
import Main from "./Main";

function App(props) {
    return (
        <div className="App">
            <Main catalogItems={props.catalogItems}/>
        </div>
    );
}

export default App;
