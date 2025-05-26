import { useState } from "react";
import logo from "../../assets/images/logos/logo.webp"
import "./burguerMenu.css"

const BurguerMenu = ({close})=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="absolute z-50 w-[100vw] h-[120vh] bg-[#006EB7] flex flex-col items-center animate-moveLeft">
            <div className="w-[90%] mt-10 flex items-center justify-between">
                <picture className="w-[130px]">
                    <img className="w-full" src={logo} alt="" />
                </picture>
                <div className="flex justify-end">
                    <button onClick={()=> close()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className="w-[90%] border-b-1 border-gray-100">
                <div className="mb-2 mt-16">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 512 512">
                        <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
                    </svg>
                </div>

            </div>
            
            <div className="w-[90%] border-b-1 border-gray-100">
                <div className="mt-6 flex flex-col gap-y-3">
                    <span className="text-white text-[15px] font-bold">Conciertos</span>
                    <span className="text-white text-[15px] font-bold">Teatro</span>
                    <span className="text-white text-[15px] font-bold">Deportes</span>
                    <div className="relative inline-block text-left mb-4">
                    <button
                        onClick={toggleDropdown}
                        className=""
                    >
                        <span className=" text-white text-[15px] font-bold flex items-center">
                            Mas
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="white" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </span>
                    </button>

                    {isOpen && (
                        <div className="absolute mt-2 w-28">
                        <ul className="bg-[#006EB7]">
                            <li className="text-white text-[12px] border-gray-600 border-t border-b text-md font-bold">Familiar</li>
                            <li className="text-white text-[12px] border-gray-600 border-t border-b text-md font-bold">Festivales</li>
                            <li className="text-white text-[12px] border-gray-600 border-t border-b text-md font-bold">Foros</li>
                            <li className="text-white text-[12px] border-gray-600 border-t border-b text-md font-bold">Museos</li>
                            <li className="text-white text-[12px] border-gray-600 border-t border-b text-md font-bold">Experiencias</li>
                        </ul>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            <div className="w-[90%] border-b-1 border-gray-100">
                <div className="mt-6 mb-4 flex flex-col gap-y-3">
					<span className="text-white text-[15px] font-bold">Bono Regalo</span>
                    <span className="text-white text-[15px] font-bold">Pásala</span>
                    <span className="text-white text-[15px] font-bold">Contáctanos</span>
				</div>
            </div>
            
            <div className="w-[90%]">
				<div className="mt-6"></div>
				<picture className="w-[90px]">
					<img className="w-[60px] object-cover" src="https://tuboleta.com/sites/default/files/styles/menu_logo/public/2024-07/Logo---Tuboleta-Pass.png?itok=qQSFUSUD" alt="" />
				</picture>
            </div>

        </div>
    )
}

export default BurguerMenu