import { postsApi } from '../../../postsApi';

export default function handler(req, res) {
    res.status(200).json(postsApi);
}
