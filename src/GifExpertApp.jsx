import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (NewCategory) => {
        setCategories([NewCategory,...categories])
    }
    return (
        <>
            <h1>Gif Expert App</h1>
                <AddCategory onNewCategory={e => onAddCategory(e)}></AddCategory>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}