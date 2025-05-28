import "../styles/home.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="first-section">
        <div className="cta-content">
          <h2>IWB</h2>
          <p>Transforming e-waste into opportunities across Southern Africa.</p>
          <div className="cta-buttons">
            <Link to="/login" className="btn-primary glow">
              Sign In
            </Link>
            <Link to="/signup" className="btn-secondary glow">
              Register
            </Link>
          </div>
        </div>

        <div className="media-container">
          <img
            src="/images/pic02.jpg"
            alt="Hero Visual"
            className="hero-image"
          />
        </div>
      </section>

      <section className="first-section">
        <div className="media-container">
          <img src="/images/pic04.jpg" width={500} height={400} alt="Photo" className="imagee"/>
        </div>

        <div className="cta-content">
          <h2>Personal Computers</h2>
          <p>High-quality laptops for you.</p>
          <button className="shop-btn">
            <Link
              to="/inventory"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Shop Now
            </Link>
          </button>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h3>250+</h3>
          <p>Laptops in Stock</p>
        </div>
        <div className="stat-box">
          <h3>30-Day</h3>
          <p>Warranty</p>
        </div>
        <div className="stat-box">
          <h3>1000+</h3>
          <p>Satisfied Customers</p>
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-card row-reverse">
          <div className="image-placeholder2">
            <img
              src="/images/pic05.jpg"
              width={500}
              height={400} 
              alt="Photo"
            />
          </div>
          <div className="inventory-cta">
            <h4>Inventory</h4>
            <p>Checkout our latest arrivals in stock</p>
            <div className="inventory-btn">
              <Link to="/inventory">View Inventory</Link>
            </div>
          </div>
        </div>
        </section>
      <Footer />
    </div>
  );
};

export default HomePage;