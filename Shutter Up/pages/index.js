import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../data/SliderData";

export default function Home() {
    return (
        <main>
            <Head>
                <title>Shutter Up</title>
                <meta name="description" content="Shutter Up - Photograhy Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <Hero heading="Shutter Up" message="I capture moments in nature and keep them alive." button="Book" />
            </section>
            <section id="gallery">
                <Slider sliderData={SliderData} />
            </section>
            <section id="instagram">
                <Instagram />
            </section>
            <section id="contact">
                <Contact heading="Let's work together" />
            </section>
        </main>
    );
}
