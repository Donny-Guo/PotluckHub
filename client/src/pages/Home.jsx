import "./styles/Home.css"
import Logo from "../assets/meal.png"
import Footer from "../components/Footer.jsx"
import FeatureCard from "../components/FeatureCard.jsx"

const Home = () => {
    return (
        <div className="home-page">
            <header className="header-section">
                <div className="left-section">
                    <div>
                        <img src={Logo} alt="logo.png" className="logo-image" />
                    </div>
                    <div>
                        <h2 className="app-title">
                            PotluckHub
                        </h2>
                    </div>
                </div>

                <div className="right-section">
                    <button>
                        Log in
                    </button>

                    <button>
                        Sign up
                    </button>
                </div>
            </header>

            <div className="body-section">
                <h1 className="slogan">
                    Plan perfect potlucks,
                    every time
                </h1>

                <p className="sub-slogan">
                    Coordinate dishes, track RSVPs, and share recipes with your community. No more duplicate dishes or forgotten plates.
                </p>

                <div>
                    <button>
                        Get started free &rarr;
                    </button>
                </div>

                <div className="feature-section">
                    <FeatureCard featureName="Events" />
                    <FeatureCard featureName="Dishes" />
                    <FeatureCard featureName="Recipes" />
                </div>

            </div>

            

            <div style={{height: "200px"}}></div>

            <Footer />

        </div>
    )
}

export default Home