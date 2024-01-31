//import { Link } from "react-router-dom"
import "./nav.css"
import {Link, useNavigate} from "react-router-dom"
const Navbar=()=>{
    let navigate=useNavigate()
    function handalLogout() {
        alert("loging out")
         navigate('/')
    }
    return (
        <div className="nav">
            <div id="lnk">
            <Link to="/home" className="lnk">Home</Link>
            <Link to="/about" className="lnk">About</Link>
            <Link to="/head" className="lnk">Head & Tail</Link>
            </div>
            <div>
                <button onClick={handalLogout} id="btn">Logout</button>
            </div>
        </div>
    )
}
export default Navbar