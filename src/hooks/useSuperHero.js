import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHero = (heroId) => {
    return (
        useQuery(["super-hero", heroId], () => fetchSuperHero(heroId))
    );
};

export default useSuperHero;