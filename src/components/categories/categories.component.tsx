import { useEffect, useState } from 'react';

// types
import Category from '../../types/category.types';

// Components
import CategoryItem from '../category-item/categoryItem.component';

// Css
import { CategoriesContainer, CategoriesContent } from './categories.style';

// database
import mockCategory from '../../data/data';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(mockCategory);
  }, [mockCategory]);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
