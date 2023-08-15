import React from "react";
import styles from "./styles.module.scss";
import TopSection from "./top_section";

import ProfileNavbar from "comp/navbar";

export default function DashboardView() {
  return (
    <div className={styles.container}>
      <ProfileNavbar />
      <TopSection />
    </div>
  );
}
