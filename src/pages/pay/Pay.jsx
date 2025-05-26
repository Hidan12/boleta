import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import pse from "../../assets/images/pse-forma.jpg"
import visa from "../../assets/images/visa.webp"
const formatoMiles = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" });

import React from 'react';

function Modal({ total, onClose}) {
  const [metodoPago, setMetodoPago] = useState('');
  const urlsPago = {
    pse: `tuboleta/${total}`,
    tarjeta: `tuboleta/${total}`,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">Total: {formatoMiles.format(total)}</h2>

        <form>
          <div className="mb-4">
            <label className="flex items-center gap-3 mb-2 cursor-pointer">
              <input
                type="radio"
                name="metodoPago"
                value="pse"
                checked={metodoPago === 'pse'}
                onChange={(e) => setMetodoPago(e.target.value)}
              />
                <img className="w-[30px]" src={pse} alt="" />
              PSE
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="metodoPago"
                value="tarjeta"
                checked={metodoPago === 'tarjeta'}
                onChange={(e) => setMetodoPago(e.target.value)}
              />
              <img className="w-[30px]" src={visa} alt="" />
              Tarjeta de Crédito
            </label>
          </div>

          <a
            href={urlsPago[metodoPago] || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center py-2 rounded-xl text-white ${
              metodoPago
                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed pointer-events-none'
            }`}
          >
            Comprar
          </a>
        </form>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 hover:underline block mx-auto"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}


const Pay = ()=>{
    const {eventInfo} = useSelector(state => state.reducerEvent)
    const [quantities, setQuantities] = useState({});
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (id, value) => {
        setQuantities(prev => ({ ...prev, [id]: Number(value) }));
    };

    const total = eventInfo.table.reduce((acc, item) => {
        const cantidad = quantities[item.id] || 0;
        const precio = item.precioDescuento || item.precio;
        return acc + cantidad * precio;
    }, 0);
    return(
        <div className="w-full flex flex-col items-center bg-white">
            {
            eventInfo.title 
                && 
            <div className="w-[95%] flex flex-col">
                <div className="mt-5">
                    <picture className="w-[180px]">
                        <img className="w-full h-[16rem] object-contain" src={eventInfo.imgPay} alt="" />
                    </picture>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold text-[20px] text-[#0d6efd]">{eventInfo.title}</h3>
                </div>
                <div className="mt-1">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#0d6efd">
                            <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z">
                            </path>
                        </svg>
                        <span className="font-semibold text-[16px] text-[#0d6efd] pl-1">{eventInfo.subData.date}</span>
                    </div>
                    <div className="flex items-center mt-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                        <span className="font-semibold text-[16px] text-[#0d6efd] pl-1">{eventInfo.subData.hour}</span>
                    </div>
                    <div className="flex items-center mt-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-map" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                        </svg>
                        <span className="font-semibold text-[16px] text-[#0d6efd] pl-1">{eventInfo.subData.place}</span>
                    </div>
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-[17px] text-[#0d6efd]">¿Cuántas entradas quieres?</span>
                    <span className="text-[17px] text-[#0d6efd]">Por favor, indica el número de entradas que deseas para cada categoría. El número de boletas se limita a 10 entradas por cliente para esta función.</span>
                </div>
                <div className="mt-3">
                    <table className="table-auto w-full text-left mb-7">
                        <thead>
                            <tr>
                                <th className="border-b border-[#0d6efd] py-1 px-1 text-[#0d6efd]">Categoría de asiento</th>
                                <th className="border-b border-[#0d6efd] py-1 px-1 text-[#0d6efd]">Cantidad</th>
                                <th className="border-b border-[#0d6efd] py-1 px-1 text-[#0d6efd]">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventInfo.table.map((d) => (
                                <tr key={d.id} className="border-b border-[#0d6efd] py-1">
                                <td className="px-1 text-[#0d6efd]">{d.localidad}</td>
                                <td className="px-1 text-black">
                                    {d?.cantidad ? (
                                    <select className="w-[15vw] border" value={quantities[d.id] || 0} onChange={e => handleChange(d.id, e.target.value)}>
                                        {[...Array(10)].map((_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                    ) : (
                                    <span className="font-bold text-red-600">Agotado</span>
                                    )}
                                </td>
                                <td className="px-1 flex flex-col">
                                    {d.precioDescuento ? (
                                    <div>
                                        <p className="text-slate-400 line-through text-[14px]">{formatoMiles.format(d.precio)}</p>
                                        <p className="text-green-700 font-bold text-[18px]">{formatoMiles.format(d.precioDescuento)}</p>
                                    </div>
                                    ) : (
                                    <div>
                                        <p className="text-green-700 font-bold text-[18px]">{formatoMiles.format(d.precio)}</p>
                                    </div>
                                    )}
                                </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td><span className="text-[#0d6efd] font-bold text-[16px]">Total</span></td>
                                <td colSpan={2}><span className="text-[#0d6efd] font-bold text-[16px]">{formatoMiles.format(total)}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="bg-[#ffa900] text-white font-bold text-2xl px-2 py-1 rounded-[5px] mb-12" onClick={() => setMostrarModal(true)}>Metodo de pago</button>
                    {mostrarModal && <Modal onClose={() => setMostrarModal(false)} total={total}/>}
                </div>
            </div> 
            }
        </div>
    )
}

export {Pay}