import { text } from "stream/consumers";
import Tilebox from "../../layouts/tiles";


const Listing = () => {
    return (
        <div className="prio-list">
            <div className="prio-products-list-row prio-app-product-grid prio-products-col-4">
                <Tilebox />
                <Tilebox />
                <Tilebox />
                <Tilebox />
            </div>
        </div>
  
    )
} 
export default Listing;