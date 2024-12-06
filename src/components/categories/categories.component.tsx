import { useEffect, useState } from 'react';
import './categories.styles.css';
import '../../types/category.types';
import Category from '../../types/category.types';

let mockCategory: Category[] = [
  {
    id: '1',
    name: 'sneakers',
    displayName: 'Tênis',
    imageUrl: 'https://imgcentauro-a.akamaihd.net/1366x1366/98140351.jpg',
  },
  {
    id: '2',
    name: 'jackets',
    displayName: 'Jaquetas',
    imageUrl: 'https://imgcentauro-a.akamaihd.net/1366x1366/98140351.jpg',
  },
];

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(mockCategory);
  }, [mockCategory]);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <img src={category.imageUrl} alt="" />
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
