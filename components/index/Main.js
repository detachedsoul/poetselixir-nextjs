import RandomCategoryPosts from "./sub_components/_randomCategoryPosts";
import RecentPosts from "./sub_components/_recentPosts";

const Main = () => {
    return (
        <main className="py-12">
            
            <RecentPosts />

            <span className="text-center grid place-items-center text-3xl pt-16 pb-24 px-4">
                Discover More In . . .
            </span>

            <RandomCategoryPosts />

        </main>
    );
}
 
export default Main;