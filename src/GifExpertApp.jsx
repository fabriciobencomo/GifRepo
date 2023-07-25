import { useState } from "react";
import { GifGrid, AddCategory } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (NewCategory) => {
        if(categories.includes(NewCategory)) return
        setCategories([NewCategory,...categories])
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={e => onAddCategory(e)}/>
            { 
                categories.map( (category) => {
                    return <GifGrid key={category} category={category} />
                })
            }
        </>
    )
}