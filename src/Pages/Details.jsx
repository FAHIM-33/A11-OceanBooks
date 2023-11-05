import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { BiCategoryAlt, BiSolidStar, BiStar } from 'react-icons/bi';
import Rating from "react-rating";
import Loading from "../Components/Loading";

const Details = () => {
    let { id } = useParams()

    const axios = useAxios()

    const getSingleBook = async () => {
        let res = await axios.get(`/api/v1/Abook/${id}`)
        return res.data
    }

    const { data, isLoading } = useQuery({
        queryKey: ['details'],
        queryFn: getSingleBook
    })
    if (isLoading) { return <Loading></Loading> }

    const { img, name, authorName, category, rating, description, qty } = data


    return (
        <section className="max-w-7xl mx-auto my-8">
            <div className='bg-fadegray flex rounded-md overflow-hidden'>
                <div className=''>
                    <img src={img} className='h-[90vh] block object-cover' alt="img of books" />
                </div>
                <div className='relative flex-1 flex flex-col justify-center p-4'>
                    {/* <div className='flex-1'></div> */}
                    <p className='mb-8 rounded-sm w-fit bg-high text-white font-bold px-4 py-1'><BiCategoryAlt className='inline-flex mr-1 text-crim text-xl'></BiCategoryAlt>{category}</p>
                    <p className='text-4xl font-semibold border-l-2 border-crim pl-1'>{name}</p>
                    <p className='mb-4 text-sm mt-2'>by <span className='font-medium text-2xl'> {authorName}</span></p>
                    <p className="font-medium">Quantity: {qty}</p>
                    <div className="mt-8 flex flex-col items-center w-fit">
                        <Rating
                            className='text-3xl text-crim'
                            readonly
                            initialRating={rating}
                            emptySymbol={<span className="icon-text"><BiStar></BiStar></span>}
                            fullSymbol={<BiSolidStar className=''></BiSolidStar>}
                        />
                        <p className="">{rating} out of 5</p>

                    </div>
                    <div className="mt-12">
                        <p className="text-2xl font-semibold">Plot:</p>
                        <p>{description.slice(0, 200)}<span className="text-crim">...Read more</span></p>
                    </div>
                    <button disabled={qty == 0 ? true : false} className="btn bg-crim py-3 mt-8 text-xl block mx-auto text-white w-4/5">Borrow</button>
                    

                </div>
            </div>
        </section>
    );
};

export default Details;