import "./styles/FeatureCard.css"
import DishImg from "../assets/dish.png"
import EventImg from "../assets/calendar.png"
import RecipeImg from "../assets/sharing.png"

const features = {
    "Dishes": {
        img: DishImg,
        title: "Claim Dishes",
        description: "Browse the recipe library and claim what you'll bring. See what others are bringing in real-time."
    },
    "Events": {
        img: EventImg,
        title: "Create Events",
        description: "Set up potluck gatherings with date, time, and location. Invite guests and track RSVPs effortlessly."
    },
    "Recipes": {
        img: RecipeImg,
        title: "Share Recipes",
        description: "Build a shared recipe library with your community. Rate and review dishes after each event."
    }
}
export default function FeatureCard({ featureName = "Event" }) {
    const feature = features[featureName]

    return (
        <div className="card">
            <img src={feature.img} alt={feature.title} className="feature-img"/>
            <h3>
                {feature.title}
            </h3>
            <p>
                {feature.description}
            </p>
        </div>
    )
}