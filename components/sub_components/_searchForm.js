const SearchForm = ({ active }) => {
    return (
        <form className={`search-form-container flex w-[90%] [top:115%] absolute left-[5%] rounded-lg lg:w-auto lg:static group transition-all ease-linear delay-500 ${active ? '' : '[transform:translateY(-10rem)]'} lg:translate-y-0 [transform-origin:0_0] xs:w-[70%] xs:left-[15%] md:w-1/2 md:left-1/4`} method="get">

            <label className="w-full bg-white rounded-l-lg" htmlFor="searchInput">
                <input className="appearance-none rounded-none w-full bg-white rounded-l-lg focus:outline-none py-1.5 px-4 hover:ring-1 hover:ring-main-color/30 hover:ring-offset-2 hover:ring-offset-white focus:ring-1 focus:ring-main-color/30 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all ease-linear delay-100 border border-gray-400" type="search" id="searchInput" placeholder="Search" name="search-input" title="Search" />
            </label>

            <button className="bg-main-color text-white pt-[0.3rem] pb-[0.1rem] px-3.5 rounded-r-lg transition-all ease-linear delay-100" type="submit" aria-label="Click to search" title="Click to search">
                <i className="fr fi-rr-search relative top-[0.1rem]"></i>
            </button>

        </form>
    );
}
 
export default SearchForm;