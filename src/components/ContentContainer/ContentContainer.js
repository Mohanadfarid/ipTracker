import React, { useState } from "react";
import styles from "./ContentContainer.module.css";
import InfoContainer from "./InfoContainer/InfoContainer";
import { useDispatch, useSelector } from "react-redux";
import { getLocationDetails } from "../../store/ipDetailsSlice";


const ContentContainer = () => {
  const state=useSelector((state)=>state.ipDetails)
  const dispatch=useDispatch()
  const [ipValue, setipValue] = useState("");

  const submitHandller = async (e) => {
    e.preventDefault();
    dispatch(getLocationDetails(ipValue))
      setipValue('')
    }
  

  const changeHandeller = (e) => {
    setipValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>IP Address Tracker</h1>

      <form onSubmit={submitHandller}>
        <div className={styles.formControl}>
        <span className={`${styles.error}`}> {state.error}</span>
          <input
            onChange={changeHandeller}
            className={styles.searchBar}
            placeholder="Search for any IP address or domain"
            type="text"
            value={ipValue}
          />
          <button>{">"}</button>
        </div>
      </form>

      <InfoContainer state={state} />
    </div>
  );
};

export default ContentContainer;
