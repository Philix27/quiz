import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { SectionTitle } from "comp/section_title";
import { formatWalletAddress } from "utils/helper";
import { Button } from "comp/button";
import router from "next/router";
import ProfileNavbar from "comp/navbar";

import { TransHistoryReduxType } from "redux/store";
import { useAppSelector } from "redux/hooks";

export default function HistoryView() {
  const app_store = useAppSelector(TransHistoryReduxType);

  const [showAddBenModal, setShowAddBenModal] = useState(false);
  const [balances, setBalances] = useState();

  return (
    <div className={styles.container}>
      <ProfileNavbar />
      <div className={styles.title_section}>{SectionTitle("History")}</div>
      <div className={styles.inner_container}>
        <div className={styles.section}>
          <p className={styles.title}>From</p>
          <p className={styles.title}>Amount</p>
          <p className={styles.value}>To</p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>0x223</p>
          <p className={styles.title}>20,000 cUSD</p>
          <p className={styles.value}>0x223</p>
          {/* <div className={styles.value}>{formatWalletAddress(address!)}</div> */}
        </div>
      </div>
    </div>
  );
}
