import React, { useContext, useState } from "react";
//styles
import styles from "./Landing.module.css";
//context
import { CoinsContext } from "../../context/CoinsContextProvider";
//components
import Loading from "../Loading";
import Coins from "../Coins";

const Landing = () => {
    const coins = useContext(CoinsContext);
    const [searchCoins, setSearchCoins] = useState("");
    return(
        <div className={styles.container}>
            <div>
                <input type="text" value={searchCoins} placeholder="Search coin" onChange={event => setSearchCoins(event.target.value)} />
            </div>
            <div>
                {
                    coins.length ?
                    coins.map(coin => coin.name.toLowerCase().includes(searchCoins.toLowerCase()) && <Coins key={coin.id} coinInformation={coin} />) :
                    <Loading />
                }
            </div>
        </div>
    )
}

export default Landing;