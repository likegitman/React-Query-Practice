import React from 'react';
import { useParams } from 'react-router-dom'
import useSuperHero from '../hooks/useSuperHeroData';

const RQSuperHeroPage = () => {
    const { heroId } = useParams();
    const { isLoading, data, isError, error } = useSuperHero(heroId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>{data.data.name}</h2>
            <p>{data.data.alterEgo}</p>
        </div>
    );
};

export default RQSuperHeroPage