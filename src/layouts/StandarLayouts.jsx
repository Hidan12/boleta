import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const StandarLayouts = ()=>{
    return(
        <div className="h-full">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export {StandarLayouts}