import React, { useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}
const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log(data);
    }

    const onError = (error) => {
        console.log(error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes,
        {
            // cacheTime: 5000, // 5초 동안 데이터를 캐싱함
            // staleTime: 30000, // 30초 동안 stale data를 보여줌
            // refetchOnMount: true, // mount 시 자동으로 쿼리를 실행하는가?
            // refetchOnWindowFocus: false, // 브라우저 창이 focus 시 자동으로 쿼리를 실행하는가?
            // refetchInterval: refetchTime, // 2초마다 자동으로 query를 실행함
            // refetchIntervalInBackground: false // 백그라운드에서도 자동으로 query를 실행함
            // enabled: false
            onSuccess,
            onError,
            select: (data) => {
                const superHeroNames = data.data.map((hero) => hero.name)
                return superHeroNames
            }
        },
    )

    console.log({ isLoading, isFetching })

    if (isLoading || isFetching) return <h2>Loading...</h2>

    if (isError) return <h2>{error.message}</h2>
    return (
        <div>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch heroes</button>
            {/* {data?.data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>
            })} */}
            {
                data.map((heroName, idx) => {
                    return <div key={idx}>{heroName}</div>
                })
            }
        </div>
    );
};

export default RQSuperHeroes;