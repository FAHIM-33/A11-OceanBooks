import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { FaFilter } from 'react-icons/fa';

const AllBooks = () => {

    const axios = useAxios()

    async function getAllBooks() {
        let res = await axios.get('/api/v1/all-books')
        return res.data
    }

    let { data, isLoading } = useQuery({
        queryKey: ['AllData'],
        queryFn: getAllBooks
    })

    if (isLoading) { return <Loading></Loading> }


    return (
        <section className="cont">
            <h2><span className="text-crim">All</span> Books</h2>
            <div className=" brr">
                <FaFilter></FaFilter>
            </div>
            <section className="grid grid-cols-2 gap-8">
                {
                    data.map(obj => <Card
                        key={obj._id}
                        data={obj}
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