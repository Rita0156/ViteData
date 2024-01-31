//import { application, json } from "express"
import React, { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import "./signup.css"
 const LoginFun=()=>{
     const [email,setEmail]=useState("")
     const [pass,setPass]=useState("")
    
     //const navigate = useNavigate()
     const navigate=useNavigate()
     const [isAuth,setAuth]=useState(false)
     let user=JSON.parse(localStorage.getItem('head'))||[]
     const handalSubmit=()=>{
        //e.preventDefault()
            const payload={
                email:email,
                pass:pass
            }
            let f=false
            for(let i=0; i<user.length; i++){
                if(user[i].email==payload.email && user[i].pass==payload.pass){
                    f=true
                    localStorage.setItem('userName',user[i].name)
                    break
                }
            }
            console.log(payload,f,user)
            if(f){
                
                alert("login successfull")
                    navigate("/home")
            }
          

            //navigate('/login', { replace: true });
         
     }
     
    return (
        <div style={{marginTop:"20px"}}>
           
           
           
            <div className="left">
            
            <div className="inside"  >
              <h2>Login</h2>
            <input  type="email"  placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input  type="password"  onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
            <button onClick={handalSubmit}  style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"2px solid white",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
            
           </div>
           <p>If you don't have create your an account here </p>
            <Link style={{color:"blue"}} to="/signup">Signup here</Link>
            </div>
            
          
        </div>
    )
}
export default LoginFun