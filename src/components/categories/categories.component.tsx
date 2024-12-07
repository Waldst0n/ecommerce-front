import { useEffect, useState } from 'react';

// types
import Category from '../../types/category.types';

// Components
import CategoryItem from '../category-item/categoryItem.component';

// Css
import './categories.styles.css';

// database
import mockCategory from '../../data/data';

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
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
