import { Link } from "react-router-dom"
import "./nav.css"
const Navbar=()=>{
    return (
        <div className="nav">
            <div id="lnk">
            <Link className="lnk">Home</Link>
            <Link className="lnk">About</Link>
            <Link className="lnk">Head & Tail</Link>
            </div>
            <div>
                <button>Logout</button>
            </div>
        </div>
    )
}
export default Navbar