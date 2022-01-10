import Link from 'next/link';
import CategoryPost from './category/_categoryPost';

const CategoryComponent = ({ category }) => {
    return (
        <div className="py-12">

            <div className="border-b border-gray-400 pb-4">

                <div className="capitalize flex items-center gap-1 flex-wrap px-4 xs:px-8 lg:px-12">

                    <Link href="/">
                        <a className="text-blue-600 hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                            Home
                        </a>
                    </Link>

                    <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                    <span className="text-blue-600 cursor-pointer hover:underline hover:underline-offset-[3px] hover:decoration-blue-600 active:underline active:underline-offset-[3px] active:decoration-blue-600">
                        Category
                    </span>

                    <i className="fr fi-rr-angle-small-right relative top-[0.25rem] text-blue-600"></i>

                    {category.map(category => category.categoryName)}

                </div>

            </div>

            <div className="pt-8 px-4 xs:px-8 sm:px-6 semi:px-4 lg:px-12 md:w-4/5 lg:w-3/5">

                <h1 className="capitalize header text-4xl">
                    {category.map(category => category.categoryName)}
                </h1>

                <p className="mt-2">
                    {category.map(category => category.desc)}
                </p>

            </div>

            <main className="pt-4 pb-8">

                <CategoryPost category={category} />

            </main>

        </div>
    );
}

export default CategoryComponent;