import useSuperHeroesData, { useAddSuperHeroData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const RQSuperHeroes = () => {

    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log(data);
    }

    const onError = (error) => {
        console.log(error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    const { mutate: addHero } = useAddSuperHeroData()

    const handleAddHeroClicked = () => {
        console.log({ name, alterEgo })
        const hero = { name, alterEgo }
        addHero(hero)
        setName('')
        setAlterEgo('')
    }

    if (isLoading || isFetching) return <h2>Loading...</h2>

    if (isError) return <h2>{error.message}</h2>

    return (
        <div>
            <h2>RQ Super Heroes Page</h2>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={(e) => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClicked}>Add Hero</button>
            </div>
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