import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/mint" className={styles.link}>
              Mint
            </Link>
            <Link href="/stake" className={styles.link}>
              Stake
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
            <Link href="https://shynz.net/launchpad/app-launchpad/" className={styles.link}>
              App Launchpad
            </Link>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
        </div>
      </nav>
    </div>
  );
}