import { Link } from "react-router-dom";

function IncreaseSale() {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark pt-3 pb-3">
                    <div className="col-md-8 text-white text-center">
                        <h3>Want to See more Product</h3>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Link to='/services'><button className="btn btn-primary">Check out now!</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncreaseSale;