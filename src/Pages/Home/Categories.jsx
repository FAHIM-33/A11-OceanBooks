import { Link } from "react-router-dom";


const Categories = () => {
    const catagories = [
        {
            name: 'History',
            img: 'https://i.ibb.co/zRb1Bhf/history.jpg'
        },
        {
            name: 'Fiction',
            img: 'https://i.ibb.co/bWTHrRG/fiction.jpg'
        },
        {
            name: 'Mystery',
            img: 'https://i.ibb.co/1J9hPmk/mystery.jpg'
        },
        {
            name: 'Sci-Fi',
            img: 'https://i.ibb.co/bNCqVBZ/mystery.webp'
        },
    ]

    return (
        <section className="cont">
            <h2 className="mb-8">Categories</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    catagories.map((obj, i) => <div
                        key={i}
                        className=" bg-fadegray rounded-md overflow-hidden"
                    >
                        <img src={obj.img} className="h-48 rounded-md object-cover w-full" alt="" />
                        <p className="text-xl my-2 font-bold text-center">{obj.name}</p>
                        <Link to={`/category/${obj.name}`}>
                            <button className="btn mb-2 bg-crim text-white w-4/5 mx-auto block py-2">Select</button>
                        </Link>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Categories;