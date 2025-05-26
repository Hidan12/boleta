import { useEffect, useState } from "react"
import EventSpecial from "../../components/eventSpecial/EventSpecial"
import axios from "axios"
import EventNormal from "../../components/eventNormal/EventNormal"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearEvent } from "../../store/action/eventAction"

const Detail = ()=>{
    const urlDetail = import.meta.env.VITE_API_URL_DETAIL_EVENT
    const {title} = useParams()
    const [page, setPage] = useState({})
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{

        const carga = async()=>{

            const data = await axios.get(urlDetail,{
                params: { title }
            })
            setPage(p => p = data.data.detail)
            setLoading(l => l = !l)
            window.scrollTo(0, 0);
        }
        carga()
        dispatch(clearEvent())
    },[])
    return(
        <main className="w-full min-h-screen">
            {page?.specialPage && <EventSpecial info={page}/>}
            {page?.imgBanner && !page?.specialPage && <EventNormal info={page}/>}           
        </main>
    )
}
export default Detail