import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueriesPage = ({ email }) => {
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId;
    useQuery(['channel', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })

    return (
        <div>
            DependentQueriesPage
        </div>
    );
};

export default DependentQueriesPage;