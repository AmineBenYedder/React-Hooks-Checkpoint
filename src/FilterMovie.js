const FilterMovie=({SetInput})=>{
    return(
        <>
        <input className="search" type="search" placeholder="Search..." onChange={(event)=>SetInput(event.target.value)} />
        </>

    )
}
export default FilterMovie