import Notecontext from './Notecontext';
import { useState, useEffect } from 'react';

const NoteState = (props) => {
    const initialState = [];
    const [Products, setProducts] = useState(initialState);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products/');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <Notecontext.Provider value={Products}>
            {props.children}
        </Notecontext.Provider>
    );
};

export default NoteState;
