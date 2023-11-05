import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/Card";
import Loading from "../../Components/Loading";

const SelectedCatrgory = () => {
    const { category } = useParams()
    const axios = useAxios()

    const getBooks = async () => {
        let res = await axios.get(`/api/v1/all-books/?category=${category}`)
        // let res = await axios.get('/img.json')
        return res.data
    }

    const { data, isLoading, } = useQuery({
        queryKey: ['selectedCatagory'],
        queryFn: getBooks,
    })

    // console.log(data, isLoading)

    return (
        <section className="cont">
            <h2><span className="text-crim">{category}</span> Books</h2>
            {
                isLoading ?
                    // <div className="loader"></div>
                    <Loading></Loading>
                    :
                    <section className="grid grid-cols-2 gap-8">
                        {
                            data?.map((obj, i) => <Card
                                key={i}
                                data={obj}
                            >
                                <Link to={`/details/${obj._id}`}>
                                    <button className='btn mx-auto block bg-crim w-full py-2 text-white text-xl'>Details</button>
                                </Link>
                            </Card>)
                        }
                    </section>
            }

        </section>
    );
};

export default SelectedCatrgory;