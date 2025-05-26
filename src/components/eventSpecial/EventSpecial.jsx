import { useDispatch } from "react-redux"
import { eventPage } from "../../store/action/eventAction"
import { NavLink } from "react-router-dom"

const EventSpecial = ({info})=>{
    const dispatch = useDispatch()
    const handlerPay = (event)=>{
        dispatch(eventPage(event))
    }    
    return (
        <div className={`w-full relative flex flex-col justify-center items-center`}>
            <div className="absolute inset-0 z-[-10] w-full h-full">
                <img className="w-full h-full object-cover" src={info.style.backgroundImage} alt=""/>
            </div>
            <picture className="w-[95%] mt-10 mb-14">
                <img className="w-full object-cover" src={info.imgBanner} alt="" />
            </picture>
            <div className="w-[85%] grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex flex-col">
                            <span className="flex w-[80%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#be9005" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <span className={`font-bold text-${info.style.titleColor}`}>Lugar:</span>
                            </span>
                            <span className={`text-${info.style.titleColor} pl-[25px]`}>
                                {info.subData.place}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="flex w-[80%]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="#be9005">
                                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z">
                                    </path>
                                </svg>
                                <span className={`font-bold text-${info.style.titleColor}`}>Fecha</span>
                            </span>
                            <span className={`text-${info.style.titleColor} pl-[25px]`}>
                                {info.subData.date}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#be9005" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                </svg>
                                <span className={`font-bold text-${info.style.titleColor}`}>Hora:</span>
                            </span>
                            <span className={`text-${info.style.titleColor} pl-[25px]`}>
                                {info.subData.hour}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#be9005" className="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                                </svg>
                                <span className={`font-bold text-${info.style.titleColor}`}>Apertura de puertas:</span>
                            </span>
                            <span className={`text-${info.style.titleColor} pl-[25px]`} >
                                {info.subData.openDor}
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#be9005" className="bi bi-person-check" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                </svg>
                                <span className={`font-bold text-${info.style.titleColor}`}>Edad minima:</span>
                            </span>
                            <span className={`text-${info.style.titleColor} pl-[25px]`}>{info.subData.age}</span>
                        </div>

            </div>
            <div className="flex flex-col items-center mt-9 w-[85%]">
                <NavLink to={`/pay`} onClick={handlerPay(info)}>
                    <button className="text-lg text-white font-bold py-1 px-4 bg-[#006EB7] rounded-[5px]">Comprar</button>
                </NavLink>
            </div>
            
            <div className="mt-12 mb-5 w-[85%] flex flex-col">
                <h4 className={`text-${info.style.titleColor} text-2xl font-bold`}>Etapas de ventas</h4>
                <div className="mt-10 gap-x-3 w-full">
                    <img className="w-full object-cover" src={info.pictursAndInfo.image} alt="" />
                    <img className="w-full object-cover" src={info.pictursAndInfo.imageInfo} alt="" />
                </div>
            </div>
        </div>
    )
}
export default EventSpecial