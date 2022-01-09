import Link from 'next/link';

const SignIn = () => {
    return (
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

                        <label className="flex items-center cursor-pointer" htmlFor="rememberMe">
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
    )
}

export default SignIn;