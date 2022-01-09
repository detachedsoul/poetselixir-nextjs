import Link from 'next/link';

const SignUp = () => {
    return (
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
    )
}

export default SignUp;