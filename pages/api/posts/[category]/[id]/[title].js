import { postsApi } from './../../../../../postsApi';

export default function handler({ query: { category, id, title } }, res) {
    const posts = postsApi.filter(post => post.category === category && post.id.toString() === id && post.title.toLowerCase() === title);

    if (posts.length > 0) {
        res.status(200).json(posts);
    } else {
        res.status(404).json({ message: `The specified post was not found!` });
    }
}
