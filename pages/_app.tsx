import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Guapcoinx } from "@thirdweb-dev/chains";
import { Navbar } from "../components/Navbar";

// This is the chain your dApp will work on.
const activeChain = "Guapcoinx";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Guapcoinx}>
      <Component {...pageProps} />
      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>


  );
}

export default MyApp;
