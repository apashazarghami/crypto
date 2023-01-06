import React from "react";
import { Link } from "react-router-dom";
//styles
import styles from "./Coins.module.css";
//function
import { fixedNumber } from "../helper/functions";

const Coins = ({ coinInformation }) => {
    const { image, id, name, symbol, current_price, price_change_percentage_24h, market_cap} = coinInformation;
    return(
        <div className={styles.container}>
            <Link to={`${id}`}><img src={image} alt={id} /></Link>
            <Link to={`${id}`}><h3>{name}</h3></Link>
            <p>{symbol}</p>
            <p>${current_price}</p>
            <p className={price_change_percentage_24h < 0 ? styles.decrease : styles.increase}>{fixedNumber(price_change_percentage_24h)}</p>
            <p>{market_cap}</p>
        </div>
    )
}

export default Coins;