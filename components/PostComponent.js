import PostContent from './post/_postContent';
import PostSideBar from './post/_postSideBar';

const PostComponent = ({ data }) => {
    return (
        <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:px-12">

            <PostContent post={data} />
            <PostSideBar />

        </div>
    );
}

export default PostComponent;