import {  useState } from "react"
import {Link, useNavigate} from "react-router-dom"
//import { Navigate } from 'react-router-dom'
import "./signup.css"
//import axios from "axios"
 const Signup=()=>{
    //const navigate = useNavigate()
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")
    //const [time,setTime]=useState("")
    let user=JSON.parse(localStorage.getItem('head')) || []
    
    const handalSubmit=()=>{
        //e.preventDefault()
           const payload={
               name:name,
               email:email,
               pass:pass
              
           }
           user.push(payload)
           localStorage.setItem('head',JSON.stringify(user))
           localStorage.setItem('userName',name)
           navigate('/')
    }
    


    return (
        <div className="cont">
            <div className="navbar">  
            
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/register">Signup</Link>
            
      
           </div>
           <div className="sign">
               
              <div className="left" style={{backgroundColor:"white"}}>
                   
                   <div className="inside"  >
                   <h1>Signup</h1>
                   <input className="inp"  type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/><br/>
                   <input className="inp"   type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                   <input className="inp"   type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
        
                   <button onClick={handalSubmit} type="submit" style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"2px solid white",borderRadius:"8px",cursor:"pointer"}} >Sing up</button>
                  
                   </div>
                   <p>If you already have an account then</p>
                   <Link style={{color:"blue"}} to="/">Login here</Link>
                   
              </div>

              

           </div>
    </div>
    )
}
export default Signup