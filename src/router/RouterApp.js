import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/Hom';
import RQSuperHeroPage from '../components/RQSuperHeroPage';
import RQSuperHeroes from '../components/RQSuperHeroes';
import SuperHeroes from '../components/SuperHeroes';
import ParallelQueriesPage from '../components/ParallelQueriesPage';
import DynamicParallelPage from '../components/DynamicParallelPage';
import DependentQueriesPage from '../components/DependentQueriesPage';
import PaginatedQueriesPage from '../components/PaginatedQueriesPage';
import InfiniteQueriesPage from '../components/InfiniteQueriesPage';

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/super-heroes' element={<SuperHeroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage />} />
            <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
            <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1, 3]} />} />
            <Route path='/rq-dependent' element={<DependentQueriesPage email='momlin@example.com' />} />
            <Route path='/rq-paginated' element={<PaginatedQueriesPage />} />
            <Route path='/rq-infinite' element={<InfiniteQueriesPage />} />
        </Routes>
    );
};

export default RouterApp;