import useSuperHeroesData from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom'

const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log(data);
    }

    const onError = (error) => {
        console.log(error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    console.log({ isLoading, isFetching })

    if (isLoading || isFetching) return <h2>Loading...</h2>

    if (isError) return <h2>{error.message}</h2>
    return (
        <div>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch heroes</button>
            {data?.data.map((hero) => {
                return <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
            })}
            {/* {
                data.map((heroName, idx) => {
                    return <div key={idx}>{heroName}</div>
                })
            } */}
        </div>
    );
};

export default RQSuperHeroes;