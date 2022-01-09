import { categoryApi } from '../../../categoryApi';

export default function handler(req, res) {
    res.status(200).json(categoryApi);
}
