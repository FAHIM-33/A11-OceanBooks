import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/Card";

const SelectedCatrgory = () => {
    const { category } = useParams()
    const axios = useAxios()

    const getBooks = async () => {
        let res = await axios.get('img.json')
        return res.data
    }

    const { data, isLoading, } = useQuery({
        queryKey: ['selectedCatagory'],
        queryFn: getBooks,
    })

    console.log(data, isLoading)

    return (
        <section className="cont">
            <h2><span className="text-crim">{category}</span> Books</h2>
            <section>
                {
                    isLoading ?
                        <div className="loader"></div>
                        :
                        data?.map((obj, i) => <Card
                            key={i}
                            data={obj}
                        >
                            
                        </Card>)

                }
            </section>
        </section>
    );
};

export default SelectedCatrgory;