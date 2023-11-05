import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { BiCategoryAlt, BiSolidStar, BiStar } from 'react-icons/bi';
import Rating from "react-rating";

const Details = () => {
    let {id} = useParams()

    const axios = useAxios()

    const getSingleBook = async () => {
        let res = await axios.get(`/api/v1/Abook/${id}`)
        return res.data
    }

    const { data, isLoading } = useQuery({
        queryKey: ['details'],
        queryFn: getSingleBook
    })

    const { img, name, authorName, category, rating } = data

    return (
        <div className='bg-fadegray flex rounded-bl-lg overflow-hidden'>
            <div className='w-6/12'>
                <img src={img} className='h-[500px] w-full block object-cover' alt="img of books" />
            </div>
            <div className='relative flex-1 flex flex-col justify-center p-4'>
                <div className='flex-1'></div>
                <p className='text-2xl font-semibold border-l-2 border-crim pl-1'>{name}</p>
                <p className='mb-8 text-sm mt-2'>by <span className='font-medium text-lg'> {authorName}</span></p>

                <Rating
                    className='text-3xl text-crim'
                    readonly
                    initialRating={rating}
                    emptySymbol={<span className="icon-text"><BiStar></BiStar></span>}
                    fullSymbol={<BiSolidStar className=''></BiSolidStar>}
                />
                <div className='flex-1'></div>
                {/* Details Button */}
                {}
                <p className='absolute top-0 right-0 rounded-bl-md bg-high text-white font-bold px-4 py-1'><BiCategoryAlt className='inline-flex mr-1 text-crim text-xl'></BiCategoryAlt>{category}</p>
            </div>

        </div>
    );
};

export default Details;