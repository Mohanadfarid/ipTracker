import React from "react";
import styles from "./InfoContainer.module.css";
const InfoContainer = ({ state }) => {
  const ipDetails = state.data;
  return (
    <div className={styles.container1}>
      {state.isLoading ? (
        "loading..."
      ) : (
        <>
          <div className={styles.item}>
            <span>IP ADDRESS</span>
            <br />
            {ipDetails.ip}
          </div>

          <div className={styles.item}>
            <span>LOCATION</span>
            <br />
            {`${ipDetails.city} ,${ipDetails.country}`}
          </div>

          <div className={styles.item}>
            <span>TIMEZONE</span>
            <br />
            {ipDetails.timezone}
          </div>

          <div className={styles.item}>
            <span>ISP</span>
            <br />
            {ipDetails.isp}
          </div>
        </>
      )}
    </div>
  );
};

export default InfoContainer;
