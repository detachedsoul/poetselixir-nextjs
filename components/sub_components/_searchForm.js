const SearchForm = () => {
    return (
        <form className="search-form-container flex w-[90%] [top:115%] absolute left-[5%] rounded-lg lg:w-auto lg:static group transition-all ease-linear delay-500 [transform:translateY(-10rem)] lg:translate-y-0 [transform-origin:0_0]" method="get">

            <label className="w-full bg-white rounded-l-lg" htmlFor="searchInput">
                <input className="appearance-none rounded-none w-full bg-white rounded-l-lg focus:outline-none py-1.5 px-4 hover:ring-2 hover:ring-main-color/10 hover:ring-offset-2 hover:ring-offset-white focus:ring-2 focus:ring-main-color/10 focus:ring-offset-2 focus:ring-offset-slate-50 hover:py-1 focus:py-1 transition-all ease-linear delay-100 border border-gray-300" type="search" id="searchInput" placeholder="Search" name="search-input" />
            </label>

            <button className="bg-main-color text-white py-0.5 pb-[0.1rem] px-4  rounded-r-lg group-hover:py-1 group-focus:py-1 group-focus-within:py-1 group-focus-within:px-3.5 group-hover:px-3.5 group-focus:px-3.5 transition-all ease-linear delay-100" type="submit" aria-label="Click to search">
                <i className="fr fi-rr-search relative top-[0.2rem]"></i>
            </button>

        </form>
    );
}
 
export default SearchForm;