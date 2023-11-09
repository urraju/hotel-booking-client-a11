import { useLoaderData } from "react-router-dom";
import Details from "../Details/Details";

const DateTime = () => {
    const data = useLoaderData()
    return(
        <div>
             {/* <div>
                {data.map(item => <Details key={item_id} datee={item}/>)}
            </div>  */}
        </div>
    )}
export default DateTime;