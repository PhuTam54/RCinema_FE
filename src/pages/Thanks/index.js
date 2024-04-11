import del1 from '~/assets/images/movie/movie-bg-proceed.jpg';
import logo from '~/assets/images/logo/logo.png';
import React, { useState, useEffect } from 'react';

function Thanks() {
    const movie = JSON.parse(localStorage.getItem('movie')) ?? {};
    const order = JSON.parse(localStorage.getItem('order'));

    const [ticketsPrice, setTicketsPrice] = useState(0);
    const [ticketsNumber, setTicketsNumber] = useState(0);
    const [foodsPrice, setFoodsPrice] = useState(0);
    const [VAT, setVAT] = useState(0);
    const [amountAfterVAT, setAmountAfterVAT] = useState(0);

    setTimeout(() => {
        localStorage.removeItem('selectedSeats');
        localStorage.removeItem('orderCode');
        localStorage.removeItem('show');
        localStorage.removeItem('movie');
        localStorage.removeItem('order');
    }, 1000 * 300);

    useEffect(() => {
        let priceTickets = 0;
        let priceFoods = 0;
        order.tickets.map((ticket) => (priceTickets += ticket.price));
        setTicketsPrice(priceTickets);
        setTicketsNumber(order.tickets.length);
        order.orderFoods.map((food) => (priceFoods += food.price * (food.qty || 1)));
        setFoodsPrice(priceFoods);
        if (order.final_Total > 50) {
            setVAT(parseFloat((0.1 * order.final_Total).toFixed(2)));
        } else if (order.final_Total > 10) {
            setVAT(parseFloat((0.05 * order.final_Total).toFixed(2)));
        } else {
            setVAT(parseFloat((0.01 * order.final_Total).toFixed(2)));
        }
        setAmountAfterVAT(priceTickets + priceFoods + VAT);
    }, []);

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
                                <span>City Walk</span>
                                <span>{ticketsNumber}</span>
                            </h6>
                            <div className="info">
                                <span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span>
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
                                    order.orderFoods.map((orderFood, index) => (
                                        <div key={index}>
                                            <span>
                                                {orderFood.qty} x {orderFood.food_Id}
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
                                <span>price</span>
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
