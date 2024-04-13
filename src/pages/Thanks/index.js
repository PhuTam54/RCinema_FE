import del1 from '~/assets/images/movie/movie-bg-proceed.jpg';
import logo from '~/assets/images/logo/logo.png';
import React, { useState, useEffect } from 'react';

function Thanks() {
    const movie = JSON.parse(localStorage.getItem('movie')) ?? {};
    const order = JSON.parse(localStorage.getItem('order')) ?? {};
    const selectedFoods = JSON.parse(localStorage.getItem('selectedFoods')) ?? [];
    const selectedSeatName = JSON.parse(localStorage.getItem('selectedSeatName')) ?? [];
    const VAT = JSON.parse(localStorage.getItem('VAT')) ?? 0;
    const amountAfterVAT = JSON.parse(localStorage.getItem('amountAfterVAT')) ?? 0;
    let ticketsPrice = JSON.parse(localStorage.getItem('totalPrice')) ?? 0;
    let foodsPrice = JSON.parse(localStorage.getItem('foodsPrice')) ?? 0;
    const startTime = (localStorage.getItem('startTime')) ?? '';
    const startDate = (localStorage.getItem('startDate')) ?? '';

    setTimeout(() => {
        localStorage.removeItem('movie');
        localStorage.removeItem('show');
        localStorage.removeItem('selectedSeats');
        localStorage.removeItem('selectedFoods');
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('foodsPrice');
        localStorage.removeItem('orderCode');
        localStorage.removeItem('order');
        localStorage.removeItem('VAT');
        localStorage.removeItem('amountAfterVAT');
        localStorage.removeItem('startTime');
        localStorage.removeItem('startDate');
    }, 1000 * 10);

    return (
        <>
            <section
                className="details-banner hero-area bg_img seat-plan-banner"
                style={{ backgroundImage: `url(${del1})` }}
            >
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">Thank You</h3>
                            <div className="tags">
                                <span href="#0">
                                    We confirm that your payment has been successfully processed and tickets have been
                                    booked. A detailed confirmation email will be sent to you shortly, including ticket
                                    details.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-title bg-one">
                <div className="container"></div>
            </section>

            <div className="col-lg-4" style={{ margin: 'auto', marginBottom: 100, marginTop: 100 }}>
                <div className="booking-summery bg-one">
                    <h4 className="title"> cinema ticket</h4>
                    <ul>
                                    <li>
                                        <h6 className="subtitle">{movie.title}</h6>
                                        <span className="info">English-2d</span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>Time</span>
                                            <span>Seats</span>
                                        </h6>
                                        <div className="info">
                                            <span>
                                                {startDate}, {startTime}
                                            </span>
                                            <div>{selectedSeatName.join(', ')}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Tickets Price</span>
                                            <span>${ticketsPrice}</span>
                                        </h6>
                                    </li>
                                </ul>
                                <ul className="side-shape">
                                    <li>
                                        <h6 className="subtitle">
                                            <span>combos</span>
                                            <span>${foodsPrice}</span>
                                        </h6>
                                        <span className="info">
                                            {order &&
                                                order.orderFoods &&
                                                order.orderFoods?.map((orderFood, index) => (
                                                    <div key={index}>
                                                        <span>
                                                            {orderFood.qty} x{' '}
                                                            {
                                                                selectedFoods.find(
                                                                    (food) => food.id === orderFood.food_Id,
                                                                )?.name
                                                            }
                                                        </span>
                                                        <br></br>
                                                    </div>
                                                ))}
                                        </span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>food &amp; bevarage</span>
                                        </h6>
                                        {/* <span className="info">
                                            {order.orderFoods.map((orderFood) => (
                                                <span>{orderFood.qty} x {orderFood.food.name}</span>
                                            ))}
                                        </span> */}
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className="info">
                                            <span>Total price</span>
                                            <span>${order && order.final_Total}</span>
                                        </span>
                                        <span className="info">
                                            <span>vat</span>
                                            <span>${VAT}</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle">
                                    <span>Amount Payable</span>
                                    <span>${amountAfterVAT}</span>
                                </h6>
                    <hr />
                    <div>
                        <p>Thank you for choosing our services. We appreciate your trust in our products.</p>
                        <p style={{ color: 'red' }}>NOTE: Please present your bill at the ticket counter.</p>
                        <span>--QR Code-- </span>
                    </div>
                </div>
                <div className="text-center" style={{ marginTop: 20 }}>
                    <a className="custom-button" style={{ width: 185 }} href="" download="bill.pdf">
                        Download Bill
                    </a>
                </div>
            </div>
        </>
    );
}

export default Thanks;
