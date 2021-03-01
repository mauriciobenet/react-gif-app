import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // An effect cannot be async
    useEffect( () => {
        getGifs( category )
            .then(imgs => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    });
                
            })
    }, [category]);

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3],
    //         loading: false
    //     })
    // }, 3000);

    return state; // { data:[], loading: true }
}