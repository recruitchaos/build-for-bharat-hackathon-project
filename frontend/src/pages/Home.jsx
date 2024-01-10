import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { MarqueeText } from "../components/MarqueeText";
import { Trending } from "../components/Trending";

export const Home = () => {
    return (
        <section className="px-4 py-4">
            <Navbar />
            <hr />
            <br />
            <MarqueeText />
            <br />
            <Hero />
            <br /> <br />
            <br />
            <Trending />
        </section>
    )
}