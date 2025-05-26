import { useRef, useState } from "react";
import './filter.css'
const FilterSelect = ()=>{
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    
    const inputRef = useRef(null);

    const showCalendary = () => {
        if (inputRef.current) {
        if (inputRef.current.showPicker) {
            inputRef.current.showPicker();
        } else {
            inputRef.current.focus();
        }
        }
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    return(
        <div className="w-[94%] z-40 bg-white px-2  absolute mt-10 flex justify-center">            
            <div className="w-full  flex flex-col items-center py-10 gap-y-4 tess">
                <div className="w-[90%] h-12 border-2 border-gray-200 flex items-center">
                    <span className="px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F18D1D" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </span>
                    <input type="text" name="" id="" placeholder="Ciudad" value={city} className="w-[90%] h-12 text-gray-400 outline-none  pointer-events-none"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6a7282" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <select name="" id="" onChange={handleCityChange} className="absolute opacity-0 w-[85%] h-12 outline-none">
                        <option value="All" className="first-option" data-select2-id="2">Ciudad</option>
                        <option value="Barranquilla">Barranquilla</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Bucaramanga">Bucaramanga</option>
                        <option value="Buga">Buga</option>
                        <option value="Cali">Cali</option>
                        <option value="Cartagena">Cartagena</option>
                        <option value="Cúcuta">Cúcuta</option>
                        <option value="Ibagué">Ibagué</option>
                        <option value="Manizales">Manizales</option>
                        <option value="Medellín">Medellín</option>
                        <option value="Neiva">Neiva</option>
                        <option value="Palmira">Palmira</option>
                        <option value="29107">Pamplona</option>
                        <option value="Pasto">Pasto</option>
                        <option value="Pereira">Pereira</option>
                        <option value="Popayán">Popayán</option>
                        <option value="Puerto Colombia">Puerto Colombia</option>
                        <option value="Rionegro">Rionegro</option>
                        <option value="Santa Marta">Santa Marta</option>
                        <option value="Tocancipá">Tocancipá</option>
                        <option value="Valledupar">Valledupar</option>
                    </select>
                </div>

                <div className="w-[90%] border-2 border-gray-200 flex items-center">
                    <span className="px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#F18D1D" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                        </svg>
                    </span>
                    <input type="text" name="" id="" placeholder="Ciudad" value={category} className="w-[90%] h-12 outline-none pointer-events-none text-gray-400"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6a7282" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <select name="" id="" onChange={handleCategoryChange} className="absolute opacity-0 w-[85%] h-12 outline-none">
                        <option value="All" className="first-option" >Categoría</option>
                        <option value="Conciertos">Conciertos</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Experiencias">Experiencias</option>
                        <option value="Familia">Familia</option>
                        <option value="Foros, Seminarios y Congresos">Foros, Seminarios y Congresos</option>
                        <option value="Museo y Exposiciones">Museo y Exposiciones</option>
                        <option value="Teatro">Teatro</option>
                    </select>
                </div>

                <div className="w-[90%] border-2 border-gray-200 flex items-center">
                    <div className="relative w-full flex justify-center items-center">
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#F18D1D">
                                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z">
                                </path>
                            </svg>
                        </span>
                        <input type="text" placeholder="Fecha" value={date} onChange={() => {}} className="w-[90%] h-12 outline-none  pointer-events-none"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6a7282" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <div className="absolute h-full w-full opacity-0">
                            <input type="date" ref={inputRef} value={date} onClick={showCalendary} onChange={handleDateChange} className="w-full h-full"/>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FilterSelect