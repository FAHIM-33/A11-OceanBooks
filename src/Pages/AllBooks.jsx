import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { FaFilter } from 'react-icons/fa';
import { useState } from "react";



const AllBooks = () => {
    const axios = useAxios()
    const queryClient = useQueryClient()
    const [isAvailableOnly, setIsAvailableOnly] = useState(false)

    async function getAllBooks() {
        let res = await axios.get('/api/v1/all-books')
        return res.data
    }

    function handleFilter(arr) {
        const newarr = arr.filter(obj => obj.qty > 0)
        queryClient.setQueryData(['AllData'], newarr)
        setIsAvailableOnly(true)
    }



    let { data, isLoading, refetch } = useQuery({
        queryKey: ['AllData'],
        queryFn: getAllBooks
    })
    if (isLoading) { return <Loading></Loading> }


    return (
        <section className="cont">
            <h2><span className="text-crim">All</span> Books</h2>

            <div className="flex justify-end mb-8 text-xl">
                <button
                    onClick={() => handleFilter(data)}
                    className="border border-high p-2 rounded-bl-xl hover:scale-105 duration-150 flex active:scale-95 items-center">
                    <FaFilter className="text-3xl text-high"></FaFilter><span>Available only</span>
                </button>
            </div>
            {isAvailableOnly && <p className="text-center pb-4 text-3xl text-red-600">Shoing Available only</p>}
            <section className="grid grid-cols-2 gap-8">
                {
                    data.map(obj => <Card
                        key={obj._id}
                        data={obj}
                        refetch={refetch}
                    >
                        <Link to={`/update/${obj._id}`}>
                            <button className='btn mx-auto block bg-crim w-full py-2 text-white text-xl'>Update</button>
                        </Link>
                    </Card>)
                }
            </section>
        </section>
    );
};

export default AllBooks;