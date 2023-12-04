import { useState } from "react";
import ReactModal from "react-modal";


const AddMovie=({addnewMovie})=>{
    
    const[show,SetShow]=useState(false)
    const[name,SetName]=useState("")
    const[date,SetDate]=useState("")
    const[image,SetImage]=useState("")
    const[type,SetType]=useState("")
    const[season,SetSeason]=useState("")
    const[rating,SetRating]=useState("")
    const[description,SetDescription]=useState("")

    const handleShow=()=>{
            SetShow(!show)
    }

    const addMovie=()=>{
        let newMovie ={id:Math.random(),name,date,image,type,season,rating,description}
        addnewMovie(newMovie)
        handleShow()
    }
    return(
        <>
        <button onClick={handleShow} style={{backgroundColor:"green",color:'white',width:'300px'}}>Add movie</button>
        <ReactModal isOpen={show} className="modal" >
            <h2>WANT TO ADD A NEW MOVIE ?</h2>
            <h2>مرحبا بيك </h2>
            <form className="formadd">
                <label>MOVIE NAME</label>
                <input 
                type="text" 
                name="name"
                onChange={(event)=>SetName(event. target.value)}
                ></input>
                <br/>
                <label>MOVIE RELEASE DATE</label>
                <input 
                type="date" 
                name="date"
                onChange={ (event)=>SetDate (event. target.value)}
                ></input>
                <br/>
                <label>MOVIE IMAGE</label>
                <input 
                type="url" 
                name="image"
                onChange={(event)=>SetImage (event. target.value)}
                ></input>
                <br/>
                <label>MOVIE TYPE</label>
                <input 
                type="text" 
                name="type"
                onChange={(event)=>SetType(event. target.value)}

                ></input>
                <br/>
                <label>MOVIE SEASON</label>
                <input 
                type="number" 
                name="season"
                onChange={(event)=>SetSeason (event. target.value)}

                ></input>
                <br/>
                <label>MOVIE RATING</label>
                <input 
                type="number" 
                name="rating"
                onChange={(event)=>SetRating(event. target.value)}

                ></input>
                <br/>
                <label>MOVIE SUMMARY</label>
                <textarea 
                type="text"
                name="description"
                required
                onChange={(event)=>SetDescription(event. target.value)}

                />
            </form>
            <br/>
            <button className="SubmitButton" onClick={addMovie}>SUBMIT</button>
             <button onClick={handleShow}>CLOSE</button>
        </ReactModal>
        </>
    )
}
export default AddMovie;