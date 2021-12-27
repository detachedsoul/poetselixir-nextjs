import AdminDetails from "./admin/_adminDetails";
import Link from "next/link";

const Admin = () => {
    return (

        <div className="py-12">

            <div className="border-b border-gray-400 pb-4">

                <div className="flex items-center gap-2 flex-wrap px-4 lg:px-12">

                    <Link href="/">
                        <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                            Home
                        </a>
                    </Link>

                    <i className="fr fi-rr-angle-small-right relative top-[0.3rem] text-blue-600"></i>

                    Admin

                </div>

            </div>

            <div className="py-8 px-4 lg:px-12 md:w-4/5 lg:w-3/5">

                <h1 className="header text-4xl">
                    Poet's Elixir Admins
                </h1>

                <p className="mt-2">
                    Here are the wonderful admins that help keep <Link href="/"><a className="text-blue-800 hover:underline hover:underline-offset-[3px] hover:decoration-blue-900 active:underline active:underline-offset-[3px] active:decoration-blue-900">Poet's Elixir</a></Link> up and running.
                </p>

            </div>

            <AdminDetails />

        </div>
    );
}
 
export default Admin;