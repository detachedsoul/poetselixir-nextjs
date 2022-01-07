const HeroContainer = () => {
    return (
        <div className="bg-hero-bg text-white grid place-content-center bg-fixed bg-cover bg-center min-h-[70vh] py-8 px-4 xs:px-8">

            <div className="flex flex-col gap-4 lg:w-[70%] lg:ml-4">
                
                <blockquote>
                    <p>
                        <i className="fas fa-quote-left pr-2"></i>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate distinctio vitae ut incidunt placeat nihil. Numquam obcaecati cum corporis vero sint, commodi fugiat amet beatae nesciunt illum tenetur? Minima, quae.
                        <i className="fas fa-quote-right pl-2"></i>
                    </p>
                </blockquote>

                <cite className="not-italic font-pacifico font-thin tracking-wide">
                    &mdash; Wisdom Ojimah
                </cite>

            </div>

        </div>
    );
}
 
export default HeroContainer;