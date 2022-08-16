import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar heading="Shutter Up" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
