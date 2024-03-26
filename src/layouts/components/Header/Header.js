




function Header() {
    return (
        <div className="mainnav-wrapper stuck-container">
        <div className="container">
          <div className="row">
            { /* LOGO */}
            <div className="col-sm-4">
              <div className="logo">
                <div className="logo-text">
                  <a href="/" title="cube">
                    <span>cube</span>
                  </a>
                  <small className="site-slogan">shopping &amp; entertainmet</small>
                </div>
              </div>
            </div>
            { /* LOGO */}
            <div className="col-sm-8">
              <nav id="t3-mainnav" className="navbar navbar-mainmenu t3-mainnav">
                <div className="t3-mainnav-wrapper">
                  { /* Brand and toggle get grouped for better mobile display */}
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".t3-navbar-collapse"
                    >
                      <i className="fa fa-bars" />
                      Home
                    </button>
                  </div>
                  <div className="t3-navbar t3-navbar-collapse navbar-collapse collapse">
                    <div
                      className="t3-megamenu animate fading"
                      data-duration={400}
                      data-responsive="true"
                    >
                      <ul
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                        className="nav navbar-nav level0"
                      >
                        <li
                          itemProp="name"
                          className="current active mega-align-left"
                          data-id={101}
                          data-level={1}
                          data-alignsub="left"
                        >
                          <a
                            itemProp="url"
                            className="fullwidth"
                            href="index-2.html"
                            data-target="#"
                          >
                            Home
                          </a>
                        </li>
                        <li itemProp="name" data-id={584} data-level={1}>
                          <a
                            itemProp="url"
                            className=""
                            href="/aboutus"
                            data-target="#"
                          >
                            About Us
                          </a>
                        </li>
                        <li
                          itemProp="name"
                          className="dropdown mega"
                          data-id={751}
                          data-level={1}
                        >
                          <span
                            className="dropdown-toggle separator"
                            data-target="#"
                            data-toggle="dropdown"
                          >
                            Departments
                            <em className="caret" />
                          </span>
                          <div className="nav-child dropdown-menu mega-dropdown-menu">
                            <div className="mega-dropdown-inner">
                              <div className="row">
                                <div
                                  className="col-xs-12 mega-col-nav"
                                  data-width={12}
                                >
                                  <div className="mega-inner">
                                    <ul
                                      itemScope=""
                                      itemType="http://www.schema.org/SiteNavigationElement"
                                      className="mega-nav level1"
                                    >
                                      <li
                                        itemProp="name"
                                        data-id={781}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="/cinema"
                                          data-target="#"
                                        >
                                          Cinema
                                        </a>
                                      </li>
                                      <li
                                        itemProp="name"
                                        data-id={782}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="/entertainment"
                                          data-target="#"
                                        >
                                          Entertainment
                                        </a>
                                      </li>
                                      <li
                                        itemProp="name"
                                        data-id={783}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="/shopping"
                                          data-target="#"
                                        >
                                          Shopping
                                        </a>
                                      </li>
                                      <li
                                        itemProp="name"
                                        data-id={784}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="/dinning"
                                          data-target="#"
                                        >
                                          Dinning
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          itemProp="name"
                          className="dropdown mega"
                          data-id={335}
                          data-level={1}
                        >
                          <span
                            className="dropdown-toggle separator"
                            data-target="#"
                            data-toggle="dropdown"
                          >
                            Pages
                            <em className="caret" />
                          </span>
                          <div className="nav-child dropdown-menu mega-dropdown-menu">
                            <div className="mega-dropdown-inner">
                              <div className="row">
                                <div
                                  className="col-xs-12 mega-col-nav"
                                  data-width={12}
                                >
                                  <div className="mega-inner">
                                    <ul
                                      itemScope=""
                                      itemType="http://www.schema.org/SiteNavigationElement"
                                      className="mega-nav level1"
                                    >
                                      
                                      <li
                                        itemProp="name"
                                        data-id={136}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="index.php/pages/our-team.html"
                                          data-target="#"
                                        >
                                          Our team
                                        </a>
                                      </li>
                                      <li
                                        itemProp="name"
                                        data-id={747}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="index.php/pages/single-team.html"
                                          data-target="#"
                                        >
                                          Single Team
                                        </a>
                                      </li>
                                      <li
                                        itemProp="name"
                                        data-id={135}
                                        data-level={2}
                                      >
                                        <a
                                          itemProp="url"
                                          className=""
                                          href="index.php/pages/history.html"
                                          data-target="#"
                                        >
                                          History
                                        </a>
                                      </li>
                                      
                                      
                                      
                                      
                                     
                                      
                                      
                                     
                                      
                                  
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li itemProp="name" data-id={203} data-level={1}>
                          <a
                            itemProp="url"
                            className="gallery"
                            href="/gallery"
                            data-target="#"
                          >
                            Gallery
                          </a>
                        </li>
                        <li itemProp="name" data-id={142} data-level={1}>
                          <a
                            itemProp="url"
                            className=""
                            href="/contactus"
                            data-target="#"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li
                          itemProp="name"
                          className="dropdown mega menu-login mega-align-right"
                          data-id={622}
                          data-level={1}
                          data-class="menu-login"
                          data-alignsub="right"
                          data-xicon="icon fa fa-user"
                        >
                          <span
                            className="menu-login-form dropdown-toggle separator"
                            data-target="#"
                            data-toggle="dropdown"
                          >
                            <span className="icon fa fa-user" /> Login
                            <em className="caret" />
                          </span>
                          <div
                            className="nav-child dropdown-menu mega-dropdown-menu"
                            style={{ width: 330 }}
                            data-width={330}
                          >
                            <div className="mega-dropdown-inner">
                              <div className="row">
                                <div
                                  className="col-xs-12 mega-col-nav"
                                  data-width={12}
                                >
                                  <div className="mega-inner">
                                    <ul
                                      itemScope=""
                                      itemType="http://www.schema.org/SiteNavigationElement"
                                      className="mega-nav level1"
                                    >
                                      <li
                                        itemProp="name"
                                        className="mega mega-group notitle"
                                        data-id={623}
                                        data-level={2}
                                        data-group={1}
                                        data-class="notitle"
                                      >
                                        <a
                                          itemProp="url"
                                          className="dropdown-header mega-group-title"
                                          href="#"
                                          data-target="#"
                                        >
                                          Login or register
                                        </a>
                                        <div className="nav-child mega-group-ct">
                                          <div className="mega-dropdown-inner">
                                            <div className="row">
                                              <div
                                                className="col-xs-12 mega-col-module"
                                                data-width={12}
                                                data-position={252}
                                              >
                                                <div className="mega-inner">
                                                  <div className="moduletable login_megamenu">
                                                    <div className="module_container">
                                                      <div className="mod_login_wrapper">
                                                        <noindex>
                                                          <div className="jlslogin">
                                                            <div className="slogin-clear" />
                                                            <form
                                                              action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php"
                                                              method="post"
                                                              id="login-form"
                                                            >
                                                              <fieldset className="userdata">
                                                                <div id="form-login-username">
                                                                  <label htmlFor="modlgn-username">
                                                                    Username
                                                                  </label>
                                                                  <input
                                                                    id="modlgn-username"
                                                                    type="text"
                                                                    name="username"
                                                                    className="inputbox"
                                                                    size={18}
                                                                    placeholder="Username"
                                                                  />
                                                                </div>
                                                                <div id="form-login-password">
                                                                  <label htmlFor="modlgn-passwd">
                                                                    Password
                                                                  </label>
                                                                  <input
                                                                    id="modlgn-passwd"
                                                                    type="password"
                                                                    name="password"
                                                                    className="inputbox"
                                                                    size={18}
                                                                    placeholder="Password"
                                                                  />
                                                                </div>
                                                                <div id="form-login-remember">
                                                                  <label htmlFor="modlgn-remember">
                                                                    <input
                                                                      id="modlgn-remember"
                                                                      type="checkbox"
                                                                      name="remember"
                                                                      className="inputbox"
                                                                      defaultValue="yes"
                                                                    />
                                                                    Remember Me
                                                                  </label>
                                                                </div>
                                                                <div className="slogin-clear" />
                                                                <input
                                                                  type="submit"
                                                                  name="Submit"
                                                                  className="btn button"
                                                                  defaultValue="Log in"
                                                                />
                                                                <input
                                                                  type="hidden"
                                                                  name="option"
                                                                  defaultValue="com_users"
                                                                />
                                                                <input
                                                                  type="hidden"
                                                                  name="task"
                                                                  defaultValue="user.login"
                                                                />
                                                                <input
                                                                  type="hidden"
                                                                  name="return"
                                                                  defaultValue="aHR0cHM6Ly9saXZlZGVtbzAwLWpvb21sYS50ZW1wbGF0ZS1oZWxwLmNvbS9qb29tbGFfcHJvZC0xNjQ1NC8="
                                                                />
                                                                <input
                                                                  type="hidden"
                                                                  name="d7858be5c8b2162e7e726f1d4d40fccb"
                                                                  defaultValue={1}
                                                                />
                                                              </fieldset>
                                                              <ul className="ul-jlslogin">
                                                                <li>
                                                                  <a
                                                                    rel="nofollow"
                                                                    href="/resetpass"
                                                                  >
                                                                    Forgot your
                                                                    password?
                                                                  </a>
                                                                </li>
                                                                <li>
                                                                  <a
                                                                    rel="nofollow"
                                                                    href="index.php/username-reminder-request.html"
                                                                  >
                                                                    Forgot your
                                                                    username?
                                                                  </a>
                                                                </li>
                                                                <li>
                                                                  <a
                                                                    rel="nofollow"
                                                                    href="/signup"
                                                                  >
                                                                    Create an account
                                                                  </a>
                                                                </li>
                                                              </ul>
                                                            </form>
                                                            <div
                                                              id="slogin-buttons"
                                                              className="slogin-buttons slogin-default"
                                                            >
                                                              <a
                                                                rel="nofollow"
                                                                className="btn linkfacebookslogin"
                                                                title="Facebook"
                                                                href="https://www.facebook.com/v2.12/dialog/oauth?client_id=1770184923308057&redirect_uri=https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F%3Foption%3Dcom_slogin%26task%3Dcheck%26plugin%3Dfacebook&response_type=code"
                                                              >
                                                                <span className="facebookslogin slogin-ico" />
                                                                <span className="text-socbtn">
                                                                  Facebook
                                                                </span>
                                                              </a>
                                                              <a
                                                                rel="nofollow"
                                                                className="btn linkgoogleslogin"
                                                                title="Google"
                                                                href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F%3Foption%3Dcom_slogin%26task%3Dcheck%26plugin%3Dgoogle&client_id=4ea43331a8b16c6ddb33685fc03635a8&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"
                                                              >
                                                                <span className="googleslogin slogin-ico" />
                                                                <span className="text-socbtn">
                                                                  Google
                                                                </span>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </noindex>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Header;
