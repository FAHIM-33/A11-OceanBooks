import { useParams } from "react-router-dom";

const Update = () => {
    let { id } = useParams()

    return (
        <div>
            <h4>Update page {id}</h4>
        </div>
    );
};

export default Update;