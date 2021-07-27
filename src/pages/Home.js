import React from 'react'
import { Carousel } from 'react-bootstrap'

import AppFrame from '../components/AppFrame.js/AppFrame'
import CustomerActions from '../components/CustomersActions/CustomerActions'

const Home = ({history}) => {


    

    const handlerClick = () => {
        history.push('/customers')
    }

    return (
        <div className="_home">
            <div className="app-frame">
                        <AppFrame header="Home" 
                            body={
                                <div>
                                    <CustomerActions>
                                        <button onClick={handlerClick} className="btn btn-dark">
                                                Listado de clientes
                                        </button>
                                    </CustomerActions>    

                                </div>
                        }>
                </AppFrame>
            </div>
            <main className="_layout">
            <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="imgs"
                        src="https://www.duna.cl/media/2013/07/empresas2.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="imgs"
                        src="https://auren.com/ar/wp-content/uploads/2020/08/shutterstock_1038115942-scaled-1.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="imgs"
                        src="https://www.emagister.com/es/albums/9/3/2/3/9/xxl_cropped_0ea1b8249759053c021627eadabfd9ce.jpg "
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </main>
        </div>
    )
}

export default Home
