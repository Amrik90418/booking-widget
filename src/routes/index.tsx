import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import Listing from "../pages/listing";
import { text } from "stream/consumers";
import Bookingpage from "../pages/booking";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element = {<PublicLayout /> }>
                <Route path="/" element= { <Listing /> }> </Route>
                <Route path="/bookingpage" element= { <Bookingpage /> }> </Route>

            </Route>
        </Routes>
        // <text>amrik</text>
    )
}
export default  AppRouter; 