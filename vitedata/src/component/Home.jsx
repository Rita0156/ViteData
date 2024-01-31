import "./home.css"
import Navbar from "./Navbar"
const Homepage=()=>{
    let user=JSON.parse(localStorage.getItem('head'))||[]
   let userName= localStorage.getItem('userName')
    console.log(user.email,"email");
    return (
       <div>
        <Navbar/>
        <div className="home">
            <h1>Home Content</h1>
            <h2>Welcom {userName} </h2>
        </div>
       </div>
    )
}

export default Homepage