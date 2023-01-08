import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//style
import styles from "./CoinInformation.module.css";
//context
import { CoinsContext } from "../../context/CoinsContextProvider";
//function
import { fixedNumber } from "../../helper/functions";

const CoinInformation = () => {
    const coinId = useParams();
    const coins = useContext(CoinsContext);
    const coin = coins.find(coin => coin.id === coinId.id);
    const { image, name, symbol, current_price, market_cap, market_cap_rank, total_volume, high_24h, low_24h, price_change_24h, price_change_percentage_24h, market_cap_change_24h, market_cap_change_percentage_24h } = coin;
    return(
        <div className={styles.container} style={{color: "white"}}>
            <div className={styles.header}>
                <img src={image} alt={name} />
                <h3>{`${name} (${symbol})`}</h3>
            </div>
            <div className={styles.details}>
                <div>
                    <h3>Price</h3>
                    <p>${current_price.toLocaleString()}</p>
                </div>
                <div>
                    <h3>Market cap</h3>
                    <p>{`${market_cap.toLocaleString()} (${market_cap_rank}th)`}</p>
                </div>
                <div>
                    <h3>Total volume</h3>
                    <p>{total_volume.toLocaleString()}</p>
                </div>
                <div>
                    <h3>High & low price</h3>
                    <p><span className={high_24h < current_price ? styles.decrease : styles.increase}>${high_24h.toLocaleString()}</span><span className={low_24h < current_price ? styles.decrease : styles.increase}>${low_24h.toLocaleString()}</span></p>
                </div>
                <div>
                    <h3>Price change</h3>
                    <p className={price_change_percentage_24h < 0 ? styles.decrease : styles.increase}>{`$${fixedNumber(price_change_24h).toLocaleString()} (${fixedNumber(price_change_percentage_24h)}%)`}</p>
                </div>
                <div>
                    <h3>Market cap change</h3>
                    <p  className={market_cap_change_24h < 0 ? styles.decrease : styles.increase}>{`${fixedNumber(market_cap_change_24h).toLocaleString()} (${fixedNumber(market_cap_change_percentage_24h)}%)`}</p>
                </div>
            </div>
            <Link to="/">Home page</Link>
        </div>
    )
}

export default CoinInformation;