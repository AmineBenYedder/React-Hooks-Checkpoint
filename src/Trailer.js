import MovieData from "./MovieData"
import { useParams,useNavigate } from "react-router-dom"


const Trailer=()=>{
    const {IdMovie}=useParams()
    
    
    const movie=MovieData.find((el)=>el.id=== Number(IdMovie))
    console.log(movie,"movieeeeeee")
    const navigate=useNavigate()
    const redirection=()=>{ navigate("/")}
    return(
        <div>
           <iframe width="878" height="494" src={movie.trailer} title="Peaky Blinders - Season 1 | Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button  className='home' onClick={redirection} >Home</button>
        </div>
    )
}
export default Trailer