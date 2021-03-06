import Link from 'next/link';

const ContactComponent = () => {
    return (
        <div className="py-12">

            <div className="border-b border-gray-400 pb-4">

                <div className="flex items-center gap-1 flex-wrap px-4 xs:px-8  lg:px-12">

                    <Link href="/">
                        <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                            Home
                        </a>
                    </Link>

                    <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                    Contact

                </div>

            </div>

            <div className="py-12 px-4 xs:px-8 sm:px-12 md:px-8 grid gap-4 md:grid-cols-12 md:items-center lg:gap-12">

                <div className="md:border-r md:border-r-gray-400 md:pr-4 md:col-span-7 lg:pr-12">

                    <h1 className="header text-xl mb-5">
                        Fill the form. It's easy.
                    </h1>

                    <form className="grid gap-4" method="post">

                        <div className="grid gap-y-3 gap-x-4 semi:grid-cols-12">

                            <label className="grid gap-1 semi:col-span-6" htmlFor="name">
                                <span>
                                    Name
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <input className="contact-input" type="text" id="name" placeholder="Name" autoComplete="off" />
                            </label>

                            <label className="grid gap-1 semi:col-span-6" htmlFor="email">
                                <span>
                                    Email
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <input className="contact-input" type="email" id="email" placeholder="Email" autoComplete="off" />
                            </label>

                            <label className="grid gap-1 semi:col-span-12" htmlFor="subject">
                                <span>
                                    Subject
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <input className="contact-input" type="text" id="subject" placeholder="Subject" autoComplete="off" />
                            </label>

                            <label className="grid gap-1 semi:col-span-12" htmlFor="messageContent">
                                <span>
                                    Message
                                    <span className="text-rose-800 relative pl-0.5 top-[0.18rem]">*</span>
                                </span>
                                <textarea className="contact-input" name="messageContent" id="messageContent" rows="5" placeholder="Message"></textarea>
                            </label>

                        </div>

                        <button className="form-btn" type="submit">
                            Send Message
                            <i className="fr fi-rr-cursor-finger relative top-1"></i>
                        </button>

                    </form>

                </div>

                <div className="hidden gap-2 md:grid md:col-span-5">

                    <h3 className="header text-2xl">
                        Let's talk about everything
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim odio iusto quidem, quo saepe nihil cumque molestiae ullam nobis, reprehenderit ex rerum non labore facere error quam ratione architecto?
                    </p>

                </div>

            </div>

        </div>
    );
}

export default ContactComponent;
