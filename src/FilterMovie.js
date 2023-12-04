const FilterMovie=(SetInput)=>{
    return(
        <>
        <input onChange={(event)=>SetInput(event.target.value)} />
        </>

    )
}
export default FilterMovie