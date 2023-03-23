import React from 'react';
import FirstScreen from "./Components/First Screen/FirstScreen";
import Catalog from "./Components/Catalog/Catalog";

const Main = (props) => {
    return (
        <div>
            <FirstScreen/>
            <Catalog catalogItems={props.catalogItems}/>
        </div>
    );
};

export default Main;