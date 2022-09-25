import { Link } from 'react-router-dom';
function HomeMid() {
    return (
        <>
        <section id="slider">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="upload/sonytv.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-light">First slide label</h5>
                                        <p className="text-light">Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="upload/samsung.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-light">Secong slide label</h5>
                                        <p className="text-light">Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="upload/mitv.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-light">Third slide label</h5>
                                        <p className="text-light">Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="products">
            <div className="container">
                <div className="row text-center">
                    <h2 className="text-center">Products</h2>
                    <div class="col-md-3 card-body">
                    <img src="upload/sonybravia.jpg" alt=""/>
                    <p className="fw-bold text-start">SonySmart TV</p>
                    <p className="fw-bold text-start">Rs 35000</p>
                    <p className="fw-bold text-start">HD 42 inch LED</p>
                    <Link to="/products" className="btn btn-secondary">More Products</Link>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/samsungtv.jpg" alt=""/>
                    <p className="fw-bold text-start">SamsungUltra</p>
                    <p className="fw-bold text-start">Rs 30000</p>
                    <p className="fw-bold text-start">HD 42 inch LED</p>
                    <Link to="/products" className="btn btn-secondary">More Products</Link>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/sonytv.jpg" alt=""/>
                    <p className="fw-bold text-start">Sony5009 TV</p>
                    <p className="fw-bold text-start">Rs 30000</p>
                    <p className="fw-bold text-start">HD 42 inch LED</p>
                    <Link to="/products" className="btn btn-secondary">More Products</Link>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/mitv.png" alt=""/>
                    <p className="fw-bold text-start">MITV7s HD</p>
                    <p className="fw-bold text-start">Rs 30000</p>
                    <p className="fw-bold text-start">HD 42 inch LED</p>
                    <Link to="/products" className="btn btn-secondary">More Products</Link>
                </div> 
                </div>
            </div>
        </section>

        <section id="testi">
        <div class="container">
            <div class="row text-center">
                <h2>What customers say about us</h2>
                <div class="col-md-3 card-body">
                    <img src="upload/user-4.jpg" alt=""/>
                    <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea, quam beatae porro eveniet optio in ratione amet quos ipsum dolore quibusdam? Inventore minus id voluptatibus nam nobis doloribus fugit!</p>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/user-5.jpg" alt=""/>
                    <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea, quam beatae porro eveniet optio in ratione amet quos ipsum dolore quibusdam? Inventore minus id voluptatibus nam nobis doloribus fugit!</p>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/user-3.png" alt=""/>
                    <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea, quam beatae porro eveniet optio in ratione amet quos ipsum dolore quibusdam? Inventore minus id voluptatibus nam nobis doloribus fugit!</p>
                </div>
                <div class="col-md-3 card-body">
                    <img src="upload/user-2.png" alt=""/>
                    <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea, quam beatae porro eveniet optio in ratione amet quos ipsum dolore quibusdam? Inventore minus id voluptatibus nam nobis doloribus fugit!</p>
                </div>
            </div>
        </div>
    </section>
            
            <section>
            <footer className="container">
                {/* <p className="float-end"><Link to="/homemid">To Top</Link></p> */}
                <p className='text-center'>© 2022-2023 eShop, Inc.Terms<Link to="/">Privacy</Link></p>
            </footer>
            </section>

        </>

    );
}

export default HomeMid;