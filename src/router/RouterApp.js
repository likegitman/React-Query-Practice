import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/Hom';
import RQSuperHeroes from '../components/RQSuperHeroes';
import SuperHeroes from '../components/SuperHeroes';

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/super-heroes' element={<SuperHeroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
        </Routes>
    );
};

export default RouterApp;