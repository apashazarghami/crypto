import React from "react";
//styles
import styles from "./Loading.module.css";
//asset
import loading from "../assets/loading.gif";

const Loading = () => {
    return(
        <div className={styles.container}>
            <img src={loading} alt="loading" />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading;