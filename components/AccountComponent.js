import Link from 'next/link';
import SignIn from './account/_signIn';
import SignUp from './account/_signUp';

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

                <SignIn />

                <div className="border-b border-gray-600 border-dotted sm:hidden h-1"></div>

                <SignUp />

            </div>

        </div>
    );
}

export default AccountComponent;