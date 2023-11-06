import { useContext } from "react";
import "./modalStyle.js"
import { MdCancel } from 'react-icons/md';
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import useAxios from "../../Hooks/useAxios.jsx";
import { DateTime } from "luxon";

const Modal = ({ data, setOpen }) => {
    const axios = useAxios()
    const { user } = useContext(AuthContext)

    function dateFormat(date) {
        return DateTime.fromISO(date).toLocaleString({
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }


    function handleBorrow(e) {
        e.preventDefault()
        let inputDate = e.target.returnDate.value
        let returnDate = dateFormat(inputDate)
        let today = DateTime.now().toString().split('T')[0]

        let borrowDate = dateFormat(today)

        console.log(returnDate)
        console.log(borrowDate)


        axios.post(`/api/v1/borrow-book/${data.id}`)


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
                        <input readOnly defaultValue={user.displayName} type="text" placeholder="Book Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Email:</label>
                        <br />
                        <input defaultValue={user.email} type="text" placeholder="Book Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label className="text-2xl" htmlFor="returnDate">Return Date:</label>
                        <br />
                        <input type="date" placeholder="" name="returnDate" className="" />
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

export default Modal;