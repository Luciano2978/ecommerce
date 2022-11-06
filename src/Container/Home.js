import "../Assets/css/Home.css"


export default function Home(){




    return(       
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active img-fluid w-100 h-25 d-inline-block"  data-bs-interval="10000">
                        <img src="" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item img-fluid w-100 h-25 d-inline-block" data-bs-interval="10000">
                        <img src="" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}