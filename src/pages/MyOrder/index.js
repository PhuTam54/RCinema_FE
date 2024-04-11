import footer from "~/assets/images/banner/banner09.jpg";
import sidebanner from "~/assets/images/sports/sports04.jpg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyOrder() {
    const getTokenData = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = token.split('.')[1];
            const decodedToken = atob(tokenData);
            const tokenObject = JSON.parse(decodedToken);
            return tokenObject;
        }
        return null;
    };

    const userId = getTokenData().userId;

    const [orders, setOrders] = useState([]);
    const [selectedShowId, setSelectedShowId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showData, setShowData] = useState(null); 
    const [movieData, setMovieData] = useState(null);
    const [roomData, setRoomData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [ordersPerPage] = useState(5);
    useEffect(() => {
        axios
            .get(`https://localhost:7168/api/v1/Orders/userId?userId=${userId}`)
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedShowId) {
            // Gọi API khi selectedShowId thay đổi
            axios
                .get(`https://localhost:7168/api/v1/Shows/id?id=${selectedShowId}`)
                .then((response) => {
                    setShowData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching show data:', error);
                });
        }
    }, [selectedShowId]);
    useEffect(() => {
        if (showData) {
            // Gọi API để lấy thông tin về phim
            axios
                .get(`https://localhost:7168/api/v1/Movies/id?id=${showData.movie_Id}`)
                .then((response) => {
                    setMovieData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching movie data:', error);
                });
    
          
            axios
                .get(`https://localhost:7168/api/v1/Rooms/id?id=${showData.room_Id}`)
                .then((response) => {
                    setRoomData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching room data:', error);
                });
        }
    }, [showData]);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleEditClick = (showId) => {
        setSelectedShowId(showId); 
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        setSelectedShowId(null); 
        setShowModal(false); 
        setShowData(null); 
    };
    const indexOfLastOrder = currentPage * ordersPerPage;
    // Tính index của đơn hàng đầu tiên trên mỗi trang
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    // Cắt ra mảng đơn hàng cho từng trang
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    return (
        <>
            {/* Modal */}
            {showModal && showData && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div style={{width: 800, height: 500,padding: 30, paddingLeft: 70, paddingRight: 70}} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h6 style={{marginTop: 30}} className="select_you_seats">Details</h6>
                        <div style={{marginTop: 30}}>
                            <h5 style={{color: "black",marginBottom: 10}}>Show details</h5>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th style={{textAlign: "center"}}>Movie</th>
                                    <th style={{textAlign: "center"}}>Time</th>
                                    <th style={{textAlign: "center"}}>Date</th>
                                    <th>Room</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{showData.id}</td>
                                    <td style={{textAlign: "center"}}>
                                        <img style={{ width: 100 }} src={movieData ? movieData.movie_Image : ''}  />
                                          <br /> 
                                        {movieData ? movieData.title : ''}</td>
                                    <td style={{textAlign: "center"}}>{new Date(showData.start_Date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</td>
                                    <td style={{textAlign: "center"}}>
                                        {new Date(showData.start_Date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </td>
                                    <td>{roomData ? roomData.name : ''}</td>
                                </tr>
                                

                                </tbody>
                            </table>
                        </div>
                        <button className="close-button" onClick={handleCloseModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}

            <section className="details-banner hero-area bg_img">
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content">
                            <h3 className="title">My Order</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="book-section bg-one"></section>

            <div className="ticket-plan-section padding-bottom padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 mb-5 mb-lg-0">
                            <ul className="seat-plan-wrapper bg-five">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th style={{color: "white"}}>ID</th>
                                            <th style={{color: "white"}}>Final Total</th>
                                            <th style={{color: "white"}}>Show ID</th>
                                            <th style={{color: "white"}}>Payment </th>
                                            <th style={{color: "white", textAlign: "center"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={index}>
                                                <td style={{color: "white"}}>{order.id}</td>
                                                <td style={{color: "white"}}>${order.final_Total}</td>
                                                <td style={{color: "white"}}>{order.show_Id}</td>
                                                <td style={{color: "white"}}>{order.payment_Method}</td>
                                                <td style={{color: "white", textAlign: "center"}}>
                                                    <button className="custom-button" style={{width: 100}} onClick={() => handleEditClick(order.show_Id)}>
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                               
                            </ul>
                            <div style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="pagination">
                                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
                                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <a onClick={() => paginate(i + 1)} href="#0" className="page-link">{i + 1}</a>
                                        </li>
                                    ))}
                                </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-10">
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img
                                            src={sidebanner}
                                            alt="banner"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyOrder;
