import parallax from '~/assets/images copy/parallax/parallax.jpg';
import parallax1 from '~/assets/images copy/parallax/parallax1.jpg';
import parallax2 from '~/assets/images copy/parallax/parallax2.jpg';
import parallax3 from '~/assets/images copy/parallax/parallax3.jpg';
import partner1 from '~/assets/images copy/partners/partner1.jpg';
import partner2 from '~/assets/images copy/partners/partner2.jpg';
import partner3 from '~/assets/images copy/partners/partner3.jpg';
import partner4 from '~/assets/images copy/partners/partner4.jpg';
import partner5 from '~/assets/images copy/partners/partner5.jpg';
import partner6 from '~/assets/images copy/partners/partner6.jpg';
import pageimg1 from '~/assets/images copy/pages/page1-img1.jpg';
import pageimg2 from '~/assets/images copy/pages/page1-img2.jpg';
import pageimg3 from '~/assets/images copy/pages/page1-img3.jpg';
import pageimg4 from '~/assets/images copy/pages/page1-img4.jpg';
import pageimg5 from '~/assets/images copy/pages/page1-img5.jpg';
import pageimg6 from '~/assets/images copy/pages/page1-img6.jpg';
import pageimg7 from '~/assets/images copy/pages/page1-img7.jpg';
import pageimg8 from '~/assets/images copy/pages/page1-img8.jpg';
import { useState, useEffect } from 'react';
import * as jwtService from '~/services/jwtService';

function Home() {
    const [dataFromApi, setDataFromApi] = useState([]);

    useEffect(() => {
        jwtService
            .callApi()
            .then((data) => {
                setDataFromApi(data);
            })
            .catch((error) => console.error(error));
    }, dataFromApi);

    console.log('Data from API: ', dataFromApi);

    return (
        <>
            <div id="t3-top" className="t3-top t3-sl t3-sl-top">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable center custom">
                            <div className="module_container">
                                <div
                                    id="mod_tm_parallax_298"
                                    className="parallax-container mod_tm_parallax__center custom"
                                >
                                    <div className="mod_tm_parallax">
                                        <img src={parallax} alt="Banner" />
                                    </div>
                                    <div className="parallax-content">
                                        <div className="container">
                                            <div className="row">
                                                <h4>
                                                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                        Hurry
                                                    </span>
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                        Up!
                                                    </span>
                                                    <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                                        Season
                                                    </span>
                                                    <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                                        sale!
                                                    </span>
                                                </h4>
                                                <h1>
                                                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                        Save
                                                    </span>
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                        up
                                                    </span>
                                                    <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                                        to
                                                    </span>
                                                    <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                                        75%!
                                                    </span>
                                                </h1>
                                                <div className="moduletable col-sm-12">
                                                    <div className="module_container">
                                                        <div
                                                            className="mod-newsflash-adv type1 mod-newsflash-adv__ cols-4"
                                                            id="module_297"
                                                        >
                                                            <div className="row">
                                                                <article
                                                                    className="col-sm-3 item item_num0 item__module"
                                                                    id="item_204"
                                                                >
                                                                    <div className="item_content">
                                                                        <i class="fa-solid fa-shop"></i>
                                                                        {/* Item title */}
                                                                        <h3 className="item_title item_title__">
                                                                            <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                                                                Shops
                                                                            </span>
                                                                        </h3>
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">300 Brands</div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-3 item item_num1 item__module"
                                                                    id="item_205"
                                                                >
                                                                    <div className="item_content">
                                                                        <i class="fa-solid fa-bowl-food"></i>
                                                                        {/* Item title */}
                                                                        <h3 className="item_title item_title__">
                                                                            <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                                                                Food
                                                                            </span>
                                                                        </h3>
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            Suit Every Taste
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-3 item item_num2 item__module"
                                                                    id="item_206"
                                                                >
                                                                    <div className="item_content">
                                                                        <i class="fa-solid fa-gamepad"></i>
                                                                        {/* Item title */}
                                                                        <h3 className="item_title item_title__">
                                                                            <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                                                                Playground
                                                                            </span>
                                                                        </h3>
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            Choose What You Love
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-3 item item_num3 item__module lastItem"
                                                                    id="item_207"
                                                                >
                                                                    <div className="item_content">
                                                                        <i class="fa-solid fa-spa"></i>
                                                                        {/* Item title */}
                                                                        <h3 className="item_title item_title__">
                                                                            <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                                                                Services
                                                                            </span>
                                                                        </h3>
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            For Your Needs
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header id="t3-header" className="t3-header">
                <div className="t3-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="moduletable type1 col-sm-3">
                                <div className="module_container">
                                    <div className="mod_custom mod_custom__type1">
                                        Shopping Gallery Open
                                        <br />
                                        10:00 am - 10:00 pm
                                    </div>
                                </div>
                            </div>
                            <div className="moduletable col-sm-9">
                                <div className="module_container">
                                    <div className="acymailing_module" id="acymailing_module_formAcymailing97901">
                                        <div className="acymailing_fulldiv" id="acymailing_fulldiv_formAcymailing97901">
                                            <form
                                                id="formAcymailing97901"
                                                action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php"
                                                method="post"
                                                name="formAcymailing97901"
                                            >
                                                <div className="acymailing_module_form">
                                                    <div className="acymailing_introtext">
                                                        SUBSCRIBE TO OUR MAILING LIST FOR EXCLUSIVE OFFERS &amp;
                                                        VOUCHERS!
                                                    </div>
                                                    <div className="acymailing_form">
                                                        <p
                                                            className="onefield fieldacyemail"
                                                            id="field_email_formAcymailing97901"
                                                        >
                                                            <span className="acyfield_email acy_requiredField">
                                                                <input
                                                                    id="user_email_formAcymailing97901"
                                                                    className="inputbox"
                                                                    type="email"
                                                                    name="user[email]"
                                                                    placeholder="Enter Your Email"
                                                                    required=""
                                                                />
                                                            </span>
                                                        </p>
                                                        <p className="acysubbuttons">
                                                            <button
                                                                className="button subbutton btn btn-primary"
                                                                type="submit"
                                                                value="subscribe"
                                                                name="Submit"
                                                            >
                                                                subscribe
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <input type="hidden" name="ajax" defaultValue={0} />
                                                    <input type="hidden" name="acy_source" defaultValue="module_296" />
                                                    <input type="hidden" name="ctrl" defaultValue="sub" />
                                                    <input type="hidden" name="task" defaultValue="notask" />
                                                    <input
                                                        type="hidden"
                                                        name="redirect"
                                                        defaultValue="https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="redirectunsub"
                                                        defaultValue="https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F"
                                                    />
                                                    <input type="hidden" name="option" defaultValue="com_acymailing" />
                                                    <input type="hidden" name="hiddenlists" defaultValue={1} />
                                                    <input
                                                        type="hidden"
                                                        name="acyformname"
                                                        defaultValue="formAcymailing97901"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {dataFromApi.map((data) => {
                return <h1>Data from API: {data.name}</h1>;
            })}

            <div className="position-1 wrap t3-sl t3-sl-1">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable type1 right">
                            <div className="module_container">
                                <div className="page_header">
                                    <h2 className="moduleTitle type2 center">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            SPECIAL
                                        </span>
                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                            OFFERS
                                        </span>
                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                            &amp;
                                        </span>
                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                            DISCOUNTS
                                        </span>
                                    </h2>
                                </div>
                                <div
                                    id="mod_tm_parallax_294"
                                    className="parallax-container mod_tm_parallax__type1 right"
                                >
                                    <div className="mod_tm_parallax">
                                        <img src={parallax1} alt="" />
                                    </div>
                                    <div className="parallax-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="moduletable col-sm-6 col-sm-offset-6">
                                                    <div className="module_container">
                                                        <div className="page_header">
                                                            <h4 className="moduleTitle linearicons-bowling-pins">
                                                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                                    ENTERTAINMENT
                                                                </span>
                                                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                                    ZONE
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            className="mod-newsflash-adv mod-newsflash-adv__ cols-3"
                                                            id="module_293"
                                                        >
                                                            <div className="pretext">
                                                                Leisure and entertainment take center stage at Cube
                                                                shopping mall. In addition to the huge number of popular
                                                                stores inside, we have entertainment and dining zones
                                                                where you can have some rest.
                                                            </div>
                                                            <div className="row">
                                                                <article
                                                                    className="col-sm-4 item item_num0 item__module"
                                                                    id="item_201"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>City Bowling</li>
                                                                                <li>Karaoke City Hall</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num1 item__module"
                                                                    id="item_202"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Lazer Maze</li>
                                                                                <li>Movies Cinema 5D</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num2 item__module lastItem"
                                                                    id="item_203"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Cinema "Planeta Kino"</li>
                                                                                <li>Family Skating rink</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                            </div>
                                                            <div className="clearfix" />
                                                            <div className="mod-newsflash-adv_custom-link">
                                                                <a
                                                                    className="btn btn-info"
                                                                    href="index.php/about-us.html"
                                                                >
                                                                    learn more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-2 wrap t3-sl t3-sl-2">
                <div className="container">
                    <div className="row">
                        <div className="moduletable center col-sm-8 col-sm-offset-2">
                            <div className="module_container">
                                <div className="page_header">
                                    <h3 className="moduleTitle type1 color2">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            Hurry
                                        </span>
                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                            Up!
                                        </span>
                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                            Grand
                                        </span>
                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                            Opening
                                        </span>
                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                            Party
                                        </span>
                                    </h3>
                                </div>
                                <div className="mod-article-single mod-article-single__center" id="module_292">
                                    <div className="item__module" id="item_200">
                                        {/* Item Title */}
                                        <h4 className="item-title">
                                            <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                Lounge
                                            </span>
                                            <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                Bar
                                            </span>
                                            <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                on
                                            </span>
                                            <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                the
                                            </span>
                                            <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                Top
                                            </span>
                                            <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                                Floor
                                            </span>
                                        </h4>
                                        {/* Intro Text */}
                                        <div className="item_introtext">
                                            <p>
                                                With Cube shopping mall, you will have the best shopping experience one
                                                can imagine. In addition to the huge number of popular stores inside, we
                                                have entertainment and dining zones where you can have some rest.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mod-newsflash-adv_custom-link">
                                        <a className="btn" href="index.php/contact-us.html">
                                            I Want to come
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-3 wrap t3-sl t3-sl-3">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable type2 left">
                            <div className="module_container">
                                <div
                                    id="mod_tm_parallax_291"
                                    className="parallax-container mod_tm_parallax__type2 left"
                                >
                                    <div className="mod_tm_parallax">
                                        <img src={parallax2} alt="" />
                                    </div>
                                    <div className="parallax-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="moduletable custom col-sm-5">
                                                    <div className="module_container">
                                                        <div className="page_header">
                                                            <h4 className="moduleTitle linearicons-bag2">
                                                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                                    FASHION
                                                                </span>
                                                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                                    ZONE
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            className="mod-newsflash-adv mod-newsflash-adv__custom cols-3"
                                                            id="module_290"
                                                        >
                                                            <div className="pretext">
                                                                Women’s, men’s and children’s fashion, accesories,
                                                                shoes, jewellery and more are in the Fashion Zone .
                                                                Enjoy smart, stylish shopping at Cube shopping mall.
                                                                Endless discoveries await with over 800 stores.
                                                            </div>
                                                            <div className="row">
                                                                <article
                                                                    className="col-sm-4 item item_num0 item__module"
                                                                    id="item_199"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Fashion</li>
                                                                                <li>Shoes</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num1 item__module"
                                                                    id="item_198"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Accessories</li>
                                                                                <li>Kids</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num2 item__module lastItem"
                                                                    id="item_197"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Electronics &amp; Household</li>
                                                                                <li>Sport &amp; Hobbies</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                            </div>
                                                            <div className="clearfix" />
                                                            <div className="mod-newsflash-adv_custom-link">
                                                                <a
                                                                    className="btn btn-info"
                                                                    href="index.php/about-us.html"
                                                                >
                                                                    learn more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-4 wrap t3-sl t3-sl-4">
                <div className="container">
                    <div className="row">
                        <div className="moduletable center col-sm-12">
                            <div className="module_container">
                                <div className="page_header">
                                    <h2 className="moduleTitle type1">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            OUR
                                        </span>
                                        <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                            PARTNERS
                                        </span>
                                    </h2>
                                </div>
                                <div className="mod-newsflash-adv mod-newsflash-adv__center cols-6" id="module_289">
                                    <div className="pretext">THEY BRING IDEA INTO REALITY</div>
                                    <div className="row">
                                        <article className="col-sm-2 item item_num0 item__module" id="item_191">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner1} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-2 item item_num1 item__module" id="item_192">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner2} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-2 item item_num2 item__module" id="item_193">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner3} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-2 item item_num3 item__module" id="item_194">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner4} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-2 item item_num4 item__module" id="item_195">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner5} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article
                                            className="col-sm-2 item item_num5 item__module lastItem"
                                            id="item_196"
                                        >
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <img src={partner6} alt="" />
                                                </figure>
                                                {/* Item title */}
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-5 wrap t3-sl t3-sl-5">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable type3 right">
                            <div className="module_container">
                                <div
                                    id="mod_tm_parallax_288"
                                    className="parallax-container mod_tm_parallax__type3 right"
                                >
                                    <div className="mod_tm_parallax">
                                        <img src={parallax3} alt="" />
                                    </div>
                                    <div className="parallax-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="moduletable col-sm-5 col-sm-offset-6">
                                                    <div className="module_container">
                                                        <div className="page_header">
                                                            <h4 className="moduleTitle linearicons-pizza">
                                                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                                    RESTAURANT
                                                                </span>
                                                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                                    &amp;
                                                                </span>
                                                                <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                                    CAFE
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            className="mod-newsflash-adv mod-newsflash-adv__ cols-3"
                                                            id="module_287"
                                                        >
                                                            <div className="pretext">
                                                                Love Food, Love Cube. With a wide variety of cuisines
                                                                and dining options, Cube shopping mall may well be the
                                                                ultimate foodie haven.
                                                            </div>
                                                            <div className="row">
                                                                <article
                                                                    className="col-sm-4 item item_num0 item__module"
                                                                    id="item_188"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Business Lunches</li>
                                                                                <li>Varenyky</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num1 item__module"
                                                                    id="item_189"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Pizza</li>
                                                                                <li>Sushi</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                                <article
                                                                    className="col-sm-4 item item_num2 item__module lastItem"
                                                                    id="item_190"
                                                                >
                                                                    <div className="item_content">
                                                                        {/* Item title */}
                                                                        {/* Introtext */}
                                                                        <div className="item_introtext">
                                                                            <ul className="list">
                                                                                <li>Cafes</li>
                                                                                <li>Ice cream</li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* Read More link */}
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </article>
                                                            </div>
                                                            <div className="clearfix" />
                                                            <div className="mod-newsflash-adv_custom-link">
                                                                <a
                                                                    className="btn btn-info"
                                                                    href="index.php/about-us.html"
                                                                >
                                                                    learn more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-6 wrap t3-sl t3-sl-6">
                <div className="container">
                    <div className="row">
                        <div className="moduletable center col-sm-12">
                            <div className="module_container">
                                <div className="page_header">
                                    <h2 className="moduleTitle type1">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            PROMOTIONS
                                        </span>
                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                            &amp;
                                        </span>
                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                            EVENTS
                                        </span>
                                    </h2>
                                </div>
                                <div className="mod-newsflash-adv mod-newsflash-adv__center cols-4" id="module_286">
                                    <div className="pretext">WHAT NOT TO MISS TODAY</div>
                                    <div className="row">
                                        <article className="col-sm-3 item item_num0 item__module" id="item_180">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/180-crazy-bowling-night.html">
                                                        <img src={pageimg1} alt="" />
                                                        <figcaption>Playground</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/180-crazy-bowling-night.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            CRAZY
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            BOWLING
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            NIGHT
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-3 item item_num1 item__module" id="item_181">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/181-free-cupcakes-for-your-coffee.html">
                                                        <img src={pageimg2} alt="" />
                                                        <figcaption>Food</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/181-free-cupcakes-for-your-coffee.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            FREE
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            CUPCAKES
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                            FOR
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half" />
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                            YOUR
                                                        </span>
                                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                                            COFFEE
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-3 item item_num2 item__module" id="item_182">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/182-shopping-fever-save-up-to-75.html">
                                                        <img src={pageimg3} alt="" />
                                                        <figcaption>Shops</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/182-shopping-fever-save-up-to-75.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            SHOPPING
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            FEVER:
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half" />
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_first_half">
                                                            SAVE
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                            UP
                                                        </span>
                                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half">
                                                            TO
                                                        </span>
                                                        <span className="item_title_part_6 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            75%
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-3 item item_num3 item__module" id="item_183">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/183-rollerdrome-family-skate-center.html">
                                                        <img src={pageimg4} alt="" />
                                                        <figcaption>Services</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/183-rollerdrome-family-skate-center.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            ROLLERDROME
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            FAMILY
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half" />
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                            SKATE
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            CENTER
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                    </div>
                                    <div className="row">
                                        <article className="col-sm-3 item item_num4 item__module" id="item_184">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/184-new-kids-playground-opening.html">
                                                        <img src={pageimg5} alt="" />
                                                        <figcaption>Playground</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/184-new-kids-playground-opening.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            NEW
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            KIDS
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                            PLAYGROUND
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half" />
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            OPENING!
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-3 item item_num5 item__module" id="item_185">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/185-bring-friends-save-on-popcorn.html">
                                                        <img src={pageimg6} alt="" />
                                                        <figcaption>Food</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/185-bring-friends-save-on-popcorn.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            BRING
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            FRIENDS
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half" />
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_first_half">
                                                            &amp;
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                            SAVE
                                                        </span>
                                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half">
                                                            ON
                                                        </span>
                                                        <span className="item_title_part_6 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            POPCORN
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-3 item item_num6 item__module" id="item_186">
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/186-pizza-for-big-company.html">
                                                        <img src={pageimg7} alt="" />
                                                        <figcaption>Food</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/186-pizza-for-big-company.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            Pizza
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            for
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                                            big
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                                            company
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article
                                            className="col-sm-3 item item_num7 item__module lastItem"
                                            id="item_187"
                                        >
                                            <div className="item_content">
                                                {/* Intro Image */}
                                                <figure className="item_img img-intro img-intro__none">
                                                    <a href="index.php/76-home/promotions-events/187-big-active-sport-sale.html">
                                                        <img src={pageimg8} alt="" />
                                                        <figcaption>Services</figcaption>
                                                    </a>
                                                </figure>
                                                {/* Item title */}
                                                <h5 className="item_title item_title__center">
                                                    <a href="index.php/76-home/promotions-events/187-big-active-sport-sale.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            Big
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            active
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                            &amp;
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                            sport
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half" />
                                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                                            sale!
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext" />
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-7 wrap t3-sl t3-sl-7">
                <div className="container">
                    <div className="row">
                        <div className="moduletable col-sm-12">
                            <div className="module_container">
                                <div className="page_header">
                                    <h3 className="moduleTitle center">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            NEWS
                                        </span>
                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                            &amp;
                                        </span>
                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                            EVENTS
                                        </span>
                                    </h3>
                                </div>
                                <div className="mod-newsflash-adv blog mod-newsflash-adv__ cols-3" id="module_285">
                                    <div className="row">
                                        <article className="col-sm-4 item item_num0 item__module" id="item_12">
                                            <time dateTime="2018-06-21 07:10" className="item_published">
                                                <span>21</span>
                                                Jun
                                            </time>
                                            <div className="item_content">
                                                {/* Item title */}
                                                <h5 className="item_title item_title__">
                                                    <a href="index.php/14-blog/recent/12-join-the-coolest-kids-club.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            Join
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            The
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                            Coolest
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                            Kids
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            Club!
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>
                                                        If you have children 12 years old or younger, you can sign them
                                                        up for Cube Mall Kids Club! Receive exclusive offers and
                                                        discounts from participating stores and advance notice to
                                                        special events.
                                                    </p>
                                                </div>
                                                {/* Read More link */}
                                                <a
                                                    className="btn btn-info readmore"
                                                    href="index.php/14-blog/recent/12-join-the-coolest-kids-club.html"
                                                >
                                                    <span>learn more</span>
                                                </a>
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-4 item item_num1 item__module" id="item_13">
                                            <time dateTime="2018-06-21 07:10" className="item_published">
                                                <span>21</span>
                                                Jun
                                            </time>
                                            <div className="item_content">
                                                {/* Item title */}
                                                <h5 className="item_title item_title__">
                                                    <a href="index.php/15-blog/latest/13-coffee-bewering-masterclass.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            Coffee
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            Bewering
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            Masterclass
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>
                                                        This event will satisfy true coffee fans. Visit the coolest
                                                        masterclass of the season, and learn how to make the tastiest
                                                        coffee drinks together with our bartenders. Good mood and aroma
                                                        drinks guaranteed!
                                                    </p>
                                                </div>
                                                {/* Read More link */}
                                                <a
                                                    className="btn btn-info readmore"
                                                    href="index.php/15-blog/latest/13-coffee-bewering-masterclass.html"
                                                >
                                                    <span>learn more</span>
                                                </a>
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-4 item item_num2 item__module lastItem" id="item_14">
                                            <time dateTime="2018-06-21 07:10" className="item_published">
                                                <span>21</span>
                                                Jun
                                            </time>
                                            <div className="item_content">
                                                {/* Item title */}
                                                <h5 className="item_title item_title__">
                                                    <a href="index.php/49-blog/upcoming-events/14-a-book-at-the-little-free-library.html">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            A
                                                        </span>
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                            Book
                                                        </span>
                                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                            at
                                                        </span>
                                                        <span className="item_title_part_3 item_title_part_even item_title_part_first_half">
                                                            the
                                                        </span>
                                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                            Little
                                                        </span>
                                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half">
                                                            Free
                                                        </span>
                                                        <span className="item_title_part_6 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                            Library
                                                        </span>
                                                    </a>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>
                                                        As part of our continuous support of literacy initiatives and
                                                        civic engagement, Cube Mall now features Little Free Library
                                                        stations at the Concierge Center and by Rainbow Valley
                                                        Playground.
                                                    </p>
                                                </div>
                                                {/* Read More link */}
                                                <a
                                                    className="btn btn-info readmore"
                                                    href="index.php/49-blog/upcoming-events/14-a-book-at-the-little-free-library.html"
                                                >
                                                    <span>learn more</span>
                                                </a>
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map wrap t3-sl t3-sl-map">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable">
                            <div className="module_container">
                                <div id="mod_tm_google_map_269" className="mod_tm_google_map mod_tm_google_map__">
                                    <div className="map_preloader">
                                        <svg
                                            width={84}
                                            height={84}
                                            viewBox="0 0 44 44"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="#fff"
                                        >
                                            <g fill="none" fillRule="evenodd" strokeWidth={2}>
                                                <circle cx={22} cy={22} r={1}>
                                                    <animate
                                                        attributeName="r"
                                                        begin="0s"
                                                        dur="1.8s"
                                                        values="1; 20"
                                                        calcMode="spline"
                                                        keyTimes="0; 1"
                                                        keySplines="0.165, 0.84, 0.44, 1"
                                                        repeatCount="indefinite"
                                                    />
                                                    <animate
                                                        attributeName="stroke-opacity"
                                                        begin="0s"
                                                        dur="1.8s"
                                                        values="1; 0"
                                                        calcMode="spline"
                                                        keyTimes="0; 1"
                                                        keySplines="0.3, 0.61, 0.355, 1"
                                                        repeatCount="indefinite"
                                                    />
                                                </circle>
                                                <circle cx={22} cy={22} r={1}>
                                                    <animate
                                                        attributeName="r"
                                                        begin="-0.9s"
                                                        dur="1.8s"
                                                        values="1; 20"
                                                        calcMode="spline"
                                                        keyTimes="0; 1"
                                                        keySplines="0.165, 0.84, 0.44, 1"
                                                        repeatCount="indefinite"
                                                    />
                                                    <animate
                                                        attributeName="stroke-opacity"
                                                        begin="-0.9s"
                                                        dur="1.8s"
                                                        values="1; 0"
                                                        calcMode="spline"
                                                        keyTimes="0; 1"
                                                        keySplines="0.3, 0.61, 0.355, 1"
                                                        repeatCount="indefinite"
                                                    />
                                                </circle>
                                            </g>
                                        </svg>
                                    </div>
                                    <div
                                        className="rd-google-map rd-google-map__model"
                                        data-zoom={13}
                                        data-y="40.643180"
                                        data-x="-73.9874068"
                                        data-marker="images/gmap_marker.png"
                                        data-marker-active="images/gmap_marker_active.png"
                                        style={{ height: 337 }}
                                    >
                                        <ul className="map_locations">
                                            <li data-y="40.643180" data-x="-73.9874068">
                                                <div className="desc">
                                                    <p>2130 Fulton Street San Diego, CA 94117-1080 USA</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
