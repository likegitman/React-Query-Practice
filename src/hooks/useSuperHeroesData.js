import { request } from '../utils/axios-utils';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchSuperHeroes = () => {
    return request({ url: '/superheroes' })
}

const addSuperHero = (hero) => {
    return request({ url: '/superheroes', method: 'post', data: hero })
}

const useSuperHeroesData = (onSuccess, onError) => {
    return (
        useQuery('super-heroes', fetchSuperHeroes,
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
                // select: (data) => {
                //     const superHeroNames = data.data.map((hero) => hero.name)
                //     return superHeroNames
                // }
            },
        )
    );
};

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        // queryClient.invalidateQueries('super-heroes')
        // queryClient.setQueryData('super-heroes', (oldQueryData) => {
        // return {
        // ...oldQueryData,
        // data: [...oldQueryData.data, data.data]
        // }
        // })
        // }
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            const previousHeroData = queryClient.getQueryData('super-heroes')
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data,
                    { id: oldQueryData?.data?.length + 1, ...newHero }]
                }
            })
            return {
                previousHeroData
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes')
        }

    })
}

export default useSuperHeroesData;