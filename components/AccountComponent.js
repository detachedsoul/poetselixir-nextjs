import { useRef } from 'react';
import Link from 'next/link';

const AccountComponent = () => {
    return (
        <div className="py-12">

            <div className="border-b border-gray-400 pb-4">

                <div className="flex items-center gap-1 flex-wrap px-4 xs:px-8 lg:px-12">

                    <Link href="/">
                        <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                            Home
                        </a>
                    </Link>

                    <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                    Account

                </div>

            </div>

            <div className="py-8 px-4 grid gap-12 items-start xs:px-8 sm:px-6 lg:px-12 sm:grid-cols-12">

                <div className="grid gap-6 sm:col-span-6">
                    
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

                            <label className="account-label" htmlFor="signInUsername">
                                <span className="pl-2.5 pr-2 b">
                                    <i className="fr fi-rr-user relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="text" name="username" placeholder="Username" id="signInUsername" />
                            </label>

                            <label className="account-label" htmlFor="signInPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-lock relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="password" name="password" placeholder="Password" id="signInPassword" />
                            </label>

                            <div className="col-span-12 flex justify-between flex-wrap gap-4">

                                <label className="flex items-center" htmlFor="rememberMe">
                                    <input className="form-checkbox input-checkbox" type="checkbox" id="rememberMe" />

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

                        <button className="form-btn" type="submit">
                            <i className="fr fi-rr-sign-in relative top-1"></i>
                            Sing In
                        </button>

                    </form>

                </div>

                <div className="border-b border-gray-600 border-dotted sm:hidden h-1"></div>

                <div className="grid gap-6 pb-8 sm:col-span-6">
                    
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

                            <label className="account-label span-2" htmlFor="firstName">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-edit relative top-[0.2rem]"></i>
                                </span>

                                <input className="account-input" type="text" placeholder="First name" id="firstName" />
                            </label>

                            <label className="account-label span-2" htmlFor="lastName">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-edit relative top-[0.2rem]"></i>
                                </span>

                                <input className="account-input" type="text" name="lastname" placeholder="Last name" id="lastName" />
                            </label>

                            <label className="account-label span-2" htmlFor="signUpUsername">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-user relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="text" name="signUpUsername" placeholder="Username" id="signUpUsername" />
                            </label>

                            <label className="account-label span-2" htmlFor="email">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-envelope relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="email" name="email" placeholder="Email" id="email" />
                            </label>

                            <label className="account-label span-2" htmlFor="SignUpPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-unlock relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="password" name="SignUpPassword" placeholder="Password" id="SignUpPassword" />
                            </label>

                            <label className="account-label span-2" htmlFor="confirmPassword">
                                <span className="pl-2.5 pr-2">
                                    <i className="fr fi-rr-lock relative top-0.5"></i>
                                </span>

                                <input className="account-input" type="password" name="confirmPassword" placeholder="Comfirm password" id="confirmPassword" />
                            </label>

                        </div>

                        <button className="form-btn" type="submit">
                            <i className="fr fi-rr-paper-plane relative top-1"></i>
                            Sing Up
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AccountComponent;