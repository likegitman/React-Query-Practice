import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchColors = (pageNum) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`)
}

const PaginatedQueriesPage = () => {
    const [pageNum, setPageNum] = useState(1)
    const { isLoading, isError, isFetching, error, data } = useQuery(['colors', pageNum], () => fetchColors(pageNum), {
        keepPreviousData: true
    })
    if (isLoading || isFetching) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>
    return (
        <>
            <div>
                {data?.data.map((color) => {
                    return (<div key={color.id}><h2> {color.id}. {color.label}</h2></div>)
                })}
            </div>
            <div>
                <button onClick={() => setPageNum((page) => page - 1)} disabled={pageNum === 1}>Prev page</button>
                <button onClick={() => setPageNum((page) => page + 1)} disabled={pageNum === 4}>Next page</button>
            </div>
        </>
    );
};

export default PaginatedQueriesPage;