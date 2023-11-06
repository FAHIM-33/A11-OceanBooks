import { useContext } from "react";
import { MdCancel } from 'react-icons/md';
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import useAxios from "../../Hooks/useAxios.jsx";
import { DateTime } from "luxon";
import pt from 'prop-types'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Modal = ({ data, setOpen, refetch }) => {
    const axios = useAxios()
    const { user } = useContext(AuthContext)
    const nav = useNavigate()

    function dateFormat(date) {
        return DateTime.fromISO(date).toLocaleString({
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }

    function decreaseQTY(id, quantity) {
        axios.patch('/api/v1/update-quantity/?operation=decrease', { qty: quantity, productID: id })
            .then(() => {
                // console.log(res.data)
                refetch()
            })
            .catch(() => {
                console.log('Failed Patch')
            })
    }


    function handleBorrow(e) {
        e.preventDefault()
        let inputDate = e.target.returnDate.value
        let returnDate = dateFormat(inputDate)
        let today = DateTime.now().toString().split('T')[0]
        setOpen(false)
        let borrowDate = dateFormat(today)

        const body = {
            productID: data._id,
            borrowDate,
            returnDate,
            email: user.email,
            Name: user.displayName
        }

        let toastID = toast.loading("Borrowing Book...")

        axios.post('/api/v1/borrow-book', body)
            .then(res => {
                if (res?.data?.acknowledged) {
                    nav(-1)
                    decreaseQTY(data._id, data.qty)
                    toast.success("Borrowed Successfully", { id: toastID })
                }
            })
            .catch(() => {
                toast.error("Couldn't borrow", { id: toastID })
            })


    }

    // Event listners:
    let modal = document.getElementById('borrow-modal')
    window.onclick = (e) => {
        if (e.target == modal) {
            setOpen(false)
        }
    }

    return (

        <div className="bg-background lg:p-4 mt-12 rounded-lg m-4 w-1/2 mx-auto relative">
            <h2 className="text-4xl text-center font-semibold text-high">Borrow <span className="text-crim">Book</span></h2>
            <form onSubmit={handleBorrow} className="  ">
                <div className="grid grid-cols-1">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input readOnly defaultValue={user.displayName} type="text" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Email:</label>
                        <br />
                        <input defaultValue={user.email} type="text" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label className="text-2xl" htmlFor="returnDate">Return Date:</label>
                        <br />
                        <input type="date" placeholder="" name="returnDate" required className="" />
                    </div>

                </div>
                <input type="submit" value="Submit" className="bg-crim text-white btn py-3 block w-1/2 mx-auto text-lg font-medium my-4 " />
            </form>
            <span onClick={() => setOpen(false)}>
                <MdCancel className="text-2xl hover:text-red-700 absolute top-2 right-2"></MdCancel>
            </span>
        </div>
    );
};

Modal.propTypes = {
    data: pt.object,
    setOpen: pt.func,
    refetch: pt.func,
}
export default Modal;