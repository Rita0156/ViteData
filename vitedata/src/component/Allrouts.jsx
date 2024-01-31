import { Route, Routes } from "react-router-dom"
import Homepage from "./Home"
import Signup from "./Signup"
import LoginFun from "./Login"
import About from "./About"
import HeadAndTail from "./HeadTail"


const AllRoutes=()=>{
     return (
        <Routes>
            <Route path="home" element={<Homepage/>}/>
            <Route path="signup" element={<Signup/>} />
            <Route path="/" element={<LoginFun/>}/>
            <Route path="about" element={<About/>} />
            <Route path="head" element={<HeadAndTail/>}/>
        </Routes>
     )
}
export default AllRoutes