import React from 'react';
import styles from './Catalog.module.css'
import CatalogItem from "./CatalogItem";

const Catalog = (props) => {

    let catalogElement = props.catalogItems
        .map( element => <CatalogItem
            id={props.id}
            image={props.image}
            name={props.name}
            description={props.description}
            price={props.price}
        /> )

    return (
       <div>
           <h1></h1>
           <CatalogItem catalogItem1={props.catalogItem1}/>
           <CatalogItem catalogItem2={props.catalogItem2}/>
           <CatalogItem catalogItem3={props.catalogItem3}/>
       </div>
    );
};

export default Catalog;