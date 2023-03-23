import React from "react";
import styles from "./CatalogItem.module.css"

const CatalogItem = (props) => {

    return (
        <div>

            <div className={styles.CatalogItem}>
                <div className={styles.image}></div>
                <div className={styles.wrapper}>
                    <div className={styles.name}>{props.catalogItems.name}</div>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.price}>{props.price}</div>
                    <div className={styles.button}>
                        <button>Order</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CatalogItem