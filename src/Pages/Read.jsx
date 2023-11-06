import { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading';

const Read = () => {
    const axios = useAxios()
    const { id } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`/api/v1/Abook/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(() => {
                toast.error("Something went Wrong")
            })
    }, [axios, id])

    if(!data){return <Loading></Loading>}

    return (
        <div className='cont'>
            <h2>{data?.name}</h2>
            <p className='mx-auto text-low font-medium w-fit pl-20'>- Written by {data?.authorName}</p>
            <p className='leading-10 mt-12 w-3/5 mx-auto'>{data?.description}</p>
        </div>
    );
};

export default Read;