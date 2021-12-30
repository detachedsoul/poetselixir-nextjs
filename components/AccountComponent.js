import Link from 'next/link';

const AccountComponent = () => {
    return (
        <div className="py-12">

            <div className="border-b border-gray-400 pb-4">

                <div className="flex items-center gap-1 flex-wrap px-4 lg:px-12">

                    <Link href="/">
                        <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                            Home
                        </a>
                    </Link>

                    <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                    Account

                </div>

            </div>

            <div className="py-8 px-4 grid gap-12 items-start lg:px-12 md:grid-cols-12">

                <div className="grid gap-6 md:col-span-6">
                    
                    <div className="grid gap-0.5">

                        <h2 className="header text-2xl">
                            Sign In
                        </h2>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quia minus.
                        </p>

                    </div>

                    <form className="grid gap-4">

                        <div className="grid gap-6 grid-cols-12 border-b border-gray-400 pb-4">

                            <label className="flex items-center col-span-12 border border-gray-400 transition-all ease-linear delay-200 rounded-lg ring-offset-slate-50  hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="signInUsername">
                                <span className="pl-2.5 pr-2 b">
                                    <i className="fr fi-rr-user relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="text" name="username" placeholder="Username" id="signInUsername" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="signInPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-lock relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="password" name="password" placeholder="Password" id="signInPassword" />
                            </label>

                            <div className="col-span-12 flex justify-between flex-wrap gap-4">

                                <label htmlFor="rememberMe">
                                    <input className="rounded-lg py-0.5 accent-main-color" type="checkbox" id="rememberMe" />

                                    <span className="pl-1">
                                        Remember me
                                    </span>
                                </label>

                                <Link href="/forgot-password">
                                    <a className="text-rose-800 font-semibold hover:underline hover:underline-offset-[4px] hover:decoration-rose-900">
                                        Forgot password?
                                    </a>
                                </Link>

                            </div>

                        </div>

                        <button className="flex items-center gap-1.5 bg-main-color/90 text-white border border-main-color rounded-lg py-1.5 px-3 w-max ml-auto ring-offset-slate-50 hover:bg-main-color focus:bg-main-color hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus:ring-1 focus:ring-offset-2 focus:ring-main-color/30 active:bg-main-color active:text-white active:ring-1 active:ring-offset-2 active:ring-main-color/30" type="submit">
                            <i className="fr fi-rr-sign-in relative top-1"></i>
                            Sing In
                        </button>

                    </form>

                </div>

                <div className="border-b border-gray-600 border-dotted lg:hidden h-1"></div>

                <div className="grid gap-6 pb-8 md:col-span-6">
                    
                    <div className="grid gap-0.5">

                        <h2 className="header text-2xl">
                            No account? Sign up
                        </h2>

                        <p>
                            Registration takes less than a minute but gives you added privileges.
                        </p>

                    </div>

                    <form className="grid gap-4">

                        <div className="grid gap-6 grid-cols-12">

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="firstName">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-edit relative top-[0.2rem]"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="text" name="firstname" placeholder="First name" id="firstName" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="lastName">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-edit relative top-[0.2rem]"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="text" name="lastname" placeholder="Last name" id="lastName" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="signInUsername">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-user relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="text" name="signInUsername" placeholder="Username" id="signInUsername" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="email">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-user relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="email" name="email" placeholder="Email" id="email" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="SignUpPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-lock-alt relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="password" name="SignUpPassword" placeholder="Password" id="SignUpPassword" />
                            </label>

                            <label className="flex items-center col-span-12 border border-gray-400 group transition-all ease-linear delay-200 rounded-lg lg:col-span-6 ring-offset-slate-50 hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-main-color/30" htmlFor="confirmPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-lock relative top-0.5"></i>
                                </span>

                                <input className="w-full py-1.5 pr-4 bg-white rounded-r-lg placeholder:text-gray-600 focus:outline-none" type="password" name="confirmPassword" placeholder="Comfirm password" id="confirmPassword" />
                            </label>

                        </div>

                        <button className="flex items-center gap-1.5 bg-main-color/90 text-white border border-main-color rounded-lg py-1.5 px-3 w-max ml-auto ring-offset-slate-50 hover:bg-main-color focus:bg-main-color hover:ring-1 hover:ring-offset-2 hover:ring-main-color/30 focus:ring-1 focus:ring-offset-2 focus:ring-main-color/30 active:bg-main-color active:text-white active:ring-1 active:ring-offset-2 active:ring-main-color/30" type="submit">
                            <i className="fr fi-rr-check relative top-0.5"></i>
                            Sing Up
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AccountComponent;