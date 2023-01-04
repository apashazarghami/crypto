import React, { createContext, useEffect, useState } from "react";
//API
import getCoins from "../service/api";

export const CoinsContext = createContext();

const CoinsContextProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setCoins(await getCoins());
        }
        fetchAPI();
    })
    return(
        <CoinsContext.Provider value={coins}>
            {children}
        </CoinsContext.Provider>
    )
}

export default CoinsContextProvider;