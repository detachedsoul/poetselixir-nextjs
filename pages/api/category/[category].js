import { categoryApi } from '../../../categoryApi';

export default function handler({ query: { category } }, res) {
    const getCategory = categoryApi.filter(categories => categories.categoryName === category);

    if (getCategory.length > 0) {
      res.status(200).json(getCategory);
    } else {
      res.status(404).json({message: `${category} was not found on this server!`});
    }
}
