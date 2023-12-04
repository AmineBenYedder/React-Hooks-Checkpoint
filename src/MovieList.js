import MovieCard from "./MovieCard";

const MovieList =({movies,input})=> {
    return(
        <>
        <div style={{display:"flex", alignItems:"center",flexDirection: "column", justifyContent: "space-around",flexWrap:"wrap"}}>
            {
            movies.filter((el)=>el.name.toUpperCase().includes(input.toUpperCase()))
            .map((el)=>
            <MovieCard el={el}/>
            )
            }
        </div>

        </>
        
    );
}
export default MovieList