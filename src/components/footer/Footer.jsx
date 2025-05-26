import logo from "../../assets/images/logos/logo.webp"
const Footer = ()=>{
    return(
        <footer className="w-full flex flex-col justify-center items-center bg-[#006EB7]">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-[94%] mt-[5rem]">
                    <picture className="w-[215px]">
                        <img className="w-[215px] object-cover" src={logo} alt="" />
                    </picture>
                </div>
                
                <div className="w-[94%] mt-10">
                    <h3 className="text-white font-semibold mb-2">Descarga Tuboleta Pass</h3>
                    <div className="flex w-full">
                        <img className="w-[143px] mr-2" src="https://tuboleta.com/sites/default/files/inline-images/Group.png" alt="" />
                        <img className="w-[143px]" src="https://tuboleta.com/sites/default/files/inline-images/Group%20%281%29.png" alt="" />
                    </div>
                </div>

                <div className="w-[94%] mt-9">
                    <div className="border-l-1 border-gray-200">
                        <div className="pl-5">
                            <span className="font-bold text-2xl text-gray-100">Tuboleta</span>
                            <div className="mt-1.5">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    <span className="text-[#B2D3E9] text-lg ml-1">Ticket Fast S.A.S</span>
                                </div>
                                <span className="text-[#B2D3E9] text-lg">Nit 900.569.193-0</span>
                                
                            </div>
                            <div className="mt-2.5">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-headset" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                                    </svg>
                                    <span className="text-white font-bold text-lg ml-1">Call Center</span>
                                </div>
                            </div>
                            <div className="mt-2.5 flex">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-youtube" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                    </svg>
                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                                    </svg>
                                </div>
                                <div className="mb-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 320 512">
                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="w-[94%] mt-9 flex gap-x-20">
                    <div className="border-l-1 border-gray-200 flex flex-col">
                        <span className="ml-1.5 mb-2.5 text-white font-bold text-md">Categorías</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Conciertos</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Teatro</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Deportes</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Festivales</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Familiar</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Foros</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Experiencias</span>
                    </div>
                    <div >
                        <div className="border-l-1 border-gray-200 flex flex-col">
                            <span className="ml-1.5 mb-2.5 text-white font-bold text-md">Ayuda</span>
                            <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Contáctanos - PQRS</span>
                            <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Tuboleta Pass</span>
                            <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Puntos de venta</span>
                            <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Tuboleta Te cuenta</span>
                        </div>
                    </div>
                </div>

                <div className="w-[94%] mt-9">
                    <div className="border-l-1 border-gray-200 flex flex-col">
                        <span className="ml-1.5 mb-2.5 text-white font-bold text-md">Legal</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px] w-[25vw]">Política de privacidad</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">Terminos de uso</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">SAGRILAFT Y PTEE</span>
                        <span className="text-[#B2D3E9] ml-1.5 text-[12px]">SIC</span>
                    </div>
                </div>

                <div className="w-[94%] mt-9">
                    <p className="text-white w-[50%] text-lg">© 2024 Tuboleta ®. Reservados todos los derechos. Versión 7.23.01.A317</p>
                </div>
            
            
            </div>
        </footer>
    )
}
export default Footer