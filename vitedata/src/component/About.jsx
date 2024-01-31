import Navbar from './Navbar';
import "./about.css"
const About=()=>{
    let user=JSON.parse(localStorage.getItem('head'))||[]
    let userName= localStorage.getItem('userName')
    return (
       <div>
         <Navbar/>
         <div className="about">
            <h1>
                About {userName}
            </h1>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo, atque beatae soluta libero reiciendis quaerat omnis amet error ipsa adipisci. Minus ullam voluptatibus corrupti eveniet, eum harum inventore assumenda.
           </p>
        </div>
       </div>
    )
}

export default About