import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperHeroes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/superherdoes').then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((e) => {
            setError(e.message)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <h2>Loading...</h2>

    if (error) return <h2>{error}</h2>

    return (
        <div>
            <h2>Super Heroes Page</h2>
            {data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </div>
    );
};

export default SuperHeroes;