import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";

const AddBooks = () => {
    const axios = useAxios()


    function handleAdd(e) {
        e.preventDefault()
        let form = e.target;
        let name = form.name.value;
        let select = document.getElementById("select-category")
        let category = select.value
        let authorName = form.authorName.value
        let img = form.url.value
        let rating = form.rating.value
        let discription = form.discription.value
        let qty = form.qty.value
        
        qty*=1
        rating*=1

        let toastID = toast.loading("Adding book...")

        const book = {
            name,
            category,
            authorName,
            img,
            rating,
            discription,
            qty,
        }
        console.log(book)

        axios.post('/api/v1/addBook', book)
            .then(res => {
                console.log(res.data)
                toast.success("Added succesfully",{id: toastID})
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to add book", {id: toastID})
            })

    }

    return (
        <div className="pb-12">
            <h2 className="text-4xl text-center mt-12 font-semibold text-high">Add new <span className="text-crim">Book</span></h2>
            <form onSubmit={handleAdd} className="border border-low lg:p-4 bg-background rounded-lg m-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Book name:</label>
                        <br />
                        <input type="text" placeholder="Book Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Author Name:</label>
                        <br />
                        <input type="text" placeholder="Author Name" name="authorName" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="url">Image URL:</label>
                        <br />
                        <input type="text" placeholder="URL" name="url" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="qty">Quantity:</label>
                        <br />
                        <input type="text" placeholder="00" name="qty" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="select-category">Category/Genre:</label>
                        <br />
                        <select className="p-4 w-full bg-fadegray rounded-md" id="select-category">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Mystery">Mystery</option>
                        </select>

                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="rating">Rating:</label>
                        <br />
                        <input type="text" placeholder="4.5" name="rating" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="discription">Short discription:</label>
                        <br />
                        <textarea name="discription" placeholder="Write short discription" className="w-full h-32 bg-fadegray p-3 rounded-md"></textarea>
                    </div>


                </div>
                <input type="submit" value="Add Book" className="bg-crim text-white btn py-3 block w-1/2 mx-auto text-lg font-medium my-4 " />
            </form>
        </div>
    );
};

export default AddBooks;