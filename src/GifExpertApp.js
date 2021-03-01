import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Power Rangers', 'Samurai Jack', 'Anime'];

    const [ categories, setCategories ] = useState(['welcome']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Love'] );
    // };

    return (
        <Fragment>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( (category, index) => {
                        console.log('category received:', category)
                        return <GifGrid
                                key={index}
                                category={category}/>
                    })
                }
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;