import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <Header />
            <section className="About-page">
                <h1>About Us</h1>
                <div className="Paragraph">
                <p>
                    IWB Technologies is a proudly Basotho-owned private
                    company dedicated to empowering communities across 
                    Lesotho through affordable, high-quality technology. 
                    We specialize in refurbished laptops, smartphones, and 
                    tech accessories — transforming electronic waste into economic 
                    opportunity. At IWB, innovation meets sustainability to deliver
                    reliable tech solutions that serve people and the planet.
                </p>
                </div>
            </section>
        </div>
    );
}

export default About;