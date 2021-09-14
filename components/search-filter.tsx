//Search Component
function Search({handleSearch}) {
    const onChange=(event: any) => {
        handleSearch(event.target.value);
    }
return (
    <div className="flex flex-column justify-center items-center">
    <div className="relative w-full">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    </span>
    <input className="w-full h-10 text-sm rounded-md pl-10 placeholder-transparent::placeholder font-sans" type="text" onChange={onChange} placeholder="Type Name/ IATA/ City/ Country..."/>
    </div>
    </div>
    )
}

export default Search;