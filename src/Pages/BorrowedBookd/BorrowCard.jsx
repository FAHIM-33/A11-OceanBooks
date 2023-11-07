import pt from 'prop-types'
import { useEffect, useState } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import useAxios from '../../Hooks/useAxios';
import Loading from '../../Components/Loading';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const BorrowCard = ({ borrowData, refetch }) => {
    const { _id, productID, returnDate, borrowDate } = borrowData
    const axios = useAxios()
    const [data, setData] = useState()


    useEffect(() => {
        axios.get(`/api/v1/Abook/${productID}`)
            .then(res => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [axios, productID])


    // 
    function decreaseQTY(borrowedBookID, quantity) {
        let toastID = toast.loading("Returning Book...")
        axios.patch('/api/v1/update-quantity/?operation=increase', { qty: quantity, productID: borrowedBookID })
            .then(res => {
                console.log("Entered Patch of increase")
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    axios.delete(`/api/v1/return-borrowed/${_id}`)
                        .then(res => {
                            console.log("Delete entered..")
                            if (res.data.deletedCount > 0) {
                                toast.success("Returned Book Successfully", { id: toastID })
                                refetch()
                            }
                        })
                        .catch(() => {
                            toast.error("Returned, But coultn't delete form borrowed")
                        })
                }

            })
            .catch(() => {
                toast.error("Failed to return", { id: toastID })
            })

    }

    if (!data) { return <Loading></Loading> }

    const { img, name, category, } = data

    return (
        <div className='bg-fadegray flex rounded-bl-lg overflow-hidden'>
            <div className='w-6/12'>
                {/* <img src={img} className='h-[500px] w-full block object-cover' alt="img of books" /> */}
                <img src='' className='h-[500px] w-full block object-cover' alt="img of books" />
            </div>
            <div className='relative flex-1 flex flex-col justify-center p-4'>
                <div className='flex-1'></div>
                <p className='text-2xl font-semibold border-l-2 border-crim pl-1'>{name}</p>
                <p className='mb-4 text-sm mt-2 text-low'>Borrowed : {borrowDate}</p>
                <p className="mb-8 font-medium">Return at: <span className='font-medium text-crim text-lg'> {returnDate}</span></p>
                <div className='flex-1'></div>

                <Link to={`/read/${productID}`}>
                    <button className='btn mx-auto block bg-white mb-4 w-full py-2 text-crim text-xl'>Read</button>
                </Link>

                <button
                    className='btn mx-auto block bg-crim w-full py-2 text-white text-xl'
                    onClick={() => decreaseQTY(productID, data.qty)}
                >Return</button>


                <p className='absolute top-0 right-0 rounded-bl-md bg-high text-background font-bold px-4 py-1'><BiCategoryAlt className='inline-flex mr-1 text-crim text-xl'></BiCategoryAlt>{category}</p>
            </div>

        </div>
    );
};
BorrowCard.propTypes = {
    borrowData: pt.object,
    refetch: pt.func,
}
export default BorrowCard;