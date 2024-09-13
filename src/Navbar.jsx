import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar(){
    return (
        <nav className="nav-container">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}