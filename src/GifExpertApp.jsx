import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory);
        //console.log(newCategory);

        setCategories([newCategory, ...categories]);
  }
    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory
                //setCategories = { setCategories } 
                //onNewCategory = {(value) => ondAddCategory(value)}          
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}ht
                        category={category}
                    />
                )
                )
            }
        </>
    )
}