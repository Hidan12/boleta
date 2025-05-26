import "./home.css";
import { useEffect, useState } from "react";
import ban1 from "../../assets/images/banner 2.png.webp"
import ban2 from "../../assets/images/banner-breakfast.png.webp"
import ban3 from "../../assets/images/WhatsApp Image 2024-10-31 at 4.07.57 PM.jpeg.webp"
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearEvent } from "../../store/action/eventAction";


const CardGrid = ({img, name, place, city, date})=>{
  return(
    <NavLink to={`/detail/${encodeURIComponent(name)}`}>
      <div className="w-full h-full mt-7 bg-gray-100 flex flex-col items-center">
          <picture className="w-[90%] h-[60%] pt-2">
            <img className="w-full h-full object-cover" src={img} alt="" />
          </picture>
          <div className="w-[90%] h-[40%] flex flex-col">
            <h3 className="mt-1 text-[12px] font-bold">{name}</h3>
            <div className="text-sm text-gray-400">
            <span>
              {place}
            </span>
            </div>
            <div className="text-sm text-gray-400">
            <span>
              {city}
            </span>
          </div>
          
          </div>
          <div className="w-[90%] text-sm text-end pb-1 font-bold text-blue-500 mb-1">
            <span>{date}</span>
          </div>

      </div>
    </NavLink>
    
  )
}


const Home = ()=>{
    const urlEvent = import.meta.env.VITE_API_URL_EVENTS
    const dispatch = useDispatch()
    const [banner, setBanner] = useState({})
    const [events, setEvent] = useState([])
    const [eventsFirst, setEventFrist] = useState([])
    const [eventGrid, setEventGrid] = useState([])
    
    useEffect(()=>{
      const peticion = async ()=>{
        const prueba = await axios.get(urlEvent)
        setBanner(prueba.data.banner[0])
        setEvent(prueba.data.events)
        setEventFrist( d => d = prueba.data.events[0])
        setEventGrid(d => d = prueba.data.events.slice(1, prueba.data.events.length))
        window.scrollTo(0, 0);
      }
      peticion()
      dispatch(clearEvent())
    },[])
    return(
    <main className="w-full flex flex-col justify-center items-center min-h-screen"> 
      <div className="w-[94%] bg-gray-100 h-[40vw] mt-7 flex items-center justify-center">
        <picture className="w-[92%] h-[80%]">
          {banner != "" && <img className="w-full h-full object-cover" src={banner.img} alt="" />}
        </picture>
      </div>
      
      <section className="w-[94%]">
        <h2 className="font-bold text-[2.286rem] mt-3">Destacados</h2>
        {
          events.length > 0 &&
          <NavLink to={`/detail/${encodeURIComponent(eventsFirst.title)}`}>
            <div className="w-full mt-7 bg-gray-100 h-[120vw] flex flex-col justify-center items-center">
              <picture className="w-[90%] h-[74%]">
                <img className="w-full h-full object-cover" src={eventsFirst.img} alt="" />
              </picture>
              <div className="w-[90%] h-[25%]">
                <h3 className="mt-2 text-[12px] font-bold">{eventsFirst.title}</h3>
                <div className="text-sm text-gray-400">
                <span>
                  {eventsFirst.place}
                </span>
                </div>
                <div className="text-sm text-gray-400">
                <span>
                  {eventsFirst.city}
                </span>
              </div>
              <div className="text-sm text-end font-bold text-blue-600">
                <span>{eventsFirst.date}</span>
              </div>
              </div>

            </div>
          </NavLink>
           
        }
        
      </section>  
      
      <div className="w-[94%] grid grid-cols-2 mt-4 gap-4">
        {events.length > 0 && eventGrid.map((e, k) => (<CardGrid img={e.img} name={e.title} place={e.place} city={e.city} date={e.date} key={k}/>)) }

      </div>

      <div className="w-[94%] mt-20 mb-10 flex flex-col">
        <picture className="w-full">
          <img className="w-full object-contain" src={ban1} alt="" />
        </picture>
        <picture className="mt-5">
          <img className="w-full object-contain" src={ban2} alt="" />
        </picture>
        <picture className="mt-5">
          <img className="w-full object-contain" src={ban3} alt="" />
        </picture>
      </div>
        
    </main>
    )
}
export default Home