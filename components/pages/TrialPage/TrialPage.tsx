import React from "react";
import styles from "./trialpage.module.scss";
import { Button } from "antd";
import Image from "next/image";
const TrialSingupPage = () => {
  return (
    <div className={styles.trial_page}>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Image
            src="/assets/images/logo.svg"
            width={50}
            height={50}
            alt="Yoord Pro"
            objectFit="cover"
          />
          <span>Yoord Pro</span>
        </div>
        <Button shape="round">Sign in</Button>
      </header>
    </div>
  );
};

export default TrialSingupPage;
