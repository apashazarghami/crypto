import React from "react";
//styles
import styles from "./Coins.module.css";
//function
import { fixedNumber } from "../helper/functions";

const Coins = ({ coinInformation }) => {
    const { image, id, name, symbol, current_price, price_change_percentage_24h, market_cap} = coinInformation;
    return(
        <div className={styles.container}>
            <img src={image} alt={id} />
            <h3>{name}</h3>
            <p>{symbol}</p>
            <p>${current_price}</p>
            <p className={price_change_percentage_24h < 0 ? styles.decrease : styles.increase}>{fixedNumber(price_change_percentage_24h)}</p>
            <p>{market_cap}</p>
        </div>
    )
}

export default Coins;