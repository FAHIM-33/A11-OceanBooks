import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const AllBooks = () => {

    const axios = useAxios()

    async function getAllAvailable() {
        let res = await axios.get('/api/v1/all-books/?available=true')
        return res.data
    }

    let { data, isLoading } = useQuery({
        queryKey: ['AllData'],
        queryFn: getAllAvailable
    })

    if (isLoading) { return <Loading></Loading> }


    return (
        <section className="cont">
            <h2><span className="text-crim">All</span> Books</h2>
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