import React from 'react'
import '../css/loader.css'
import sports from '../images/sports.png'
import stage from '../images/stage.png'

const Loader = () => {
    return (
        <>
            <div className="image">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" id='image-container'>
                        <div class="carousel-item active" data-bs-interval="150">
                            <img src={sports} class="d-block w-100" alt="sgs" />
                        </div>
                        <div class="carousel-item" data-bs-interval="150">
                            <img src={stage} class="d-block w-100" alt="gddgd" />
                        </div>
                        <div class="carousel-item" data-bs-interval="150">
                            <img src={sports} class="d-block w-100" alt="sfs" />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="loader"></div>
        </>
    )
}

export default Loader