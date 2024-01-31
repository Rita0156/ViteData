import { useEffect, useState } from "react";
import "./head.css";
import Navbar from './Navbar';
var data=[""]
//var allData=[]
const HeadAndTail=()=>{
    
    const [allData,setAlldata]=useState(data)
    const [isSubmit,setSubmit]=useState(false)
    let user=JSON.parse(localStorage.getItem('head'))||[]
    let userName= localStorage.getItem('userName')
     const handalChange=(e)=>{
        // allData.push(e.target.value)
        data.push(e.target.value)
        
     }
     
    // const handalSubmit=()=>{
    //    setAlldata(data)
    // }
    const handalReset=()=>{
        data=['']
           setAlldata(data)
           //allData=[]
    }
    useEffect(()=>{
        if(isSubmit){
            setAlldata(data)
            setSubmit(false)
        }
    },[isSubmit])
    console.log(data,allData)
     
    return (
        <div>
            <Navbar/>
            <div id="main">
            <div className="main">
                <h1>Play Head & Tail {userName} </h1>
            </div>
            <div id="select">
                <label >Select option :</label><br/>
                <select onChange={handalChange} name="" id="">
                    <option value="">Select value</option>
                    <option value="H">H</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div>
                 <button onClick={()=>{
                    setSubmit(true)
                 }}>Submil</button>
                <button onClick={handalReset}>Reset</button>
            </div>
            <div>
                {allData.length>0 && allData.map((item)=>(
                    <h3>{item}</h3>
                ))}
            </div>
        </div>
        </div>
    )
}
export default HeadAndTail