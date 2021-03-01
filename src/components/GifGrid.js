import React, { useState, useEffect, Fragment } from 'react';
import GifGridItem from './GifGridItem';

import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // useEffect( () => {
    //     // getGifs function gets called only the first time the component is rendered if the array in the second argument is empty
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);


    return (
        <Fragment>
            {loading && <p>Loading...</p>}
            <h3>{category}</h3>
            
            <div className="card-grid">
                {/* <ol>
                    {
                        images.map( img => {
                            console.log(img);
                            return <li key={img.id}>{img.title}</li>
                        })
                    }
                </ol> */}
                {
                    images.map( img => {
                        return <GifGridItem
                                key={img.id}
                                {...img}
                                />
                    })
                }
            </div>
        </Fragment>
    )
}

export default GifGrid;