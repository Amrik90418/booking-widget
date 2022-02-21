// import { text } from "stream/consumers"; 
import { useNavigate } from "react-router-dom";
import { Tileimg } from "../../assets/images";
  function  Tilebox () {
    let navigate = useNavigate();
    const redirect = () => {
        navigate('/bookingpage')
    }
    return (
        
        <div className="prio-products-col" onClick={redirect} >
            <div className="prio-product-box">    
                <div className="image-container ">
                    <div className="image-container-inner">
                        <img src={ Tileimg }  alt="Tileimg" />
                    </div>
                </div>
                <div className="prio-product-info-wrapper">
                        <h4 className="">Booking All Age ticket</h4>
                        <div className="prio-duration-price cfx">
                            <span className="prio-duration">Duration: 2 hours</span>
                            <div className="prio-product-price ">
                                <span className="prio-price-from">From</span>
                                <div className="prio-price-span">
                                    EUR 20.00
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Tilebox;