





function Login() {
    return (
      <>
      <div id="t3-mainbody" className="t3-mainbody">
        <div className="container">
          <div className="row">
            {/* MAIN CONTENT */}
            <div id="t3-content" className="t3-content col-sm-12">
              <div id="system-message-container"></div>
              <div className="page-login page-login__">
                <div className="page_header">
                  <h2>
                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                      Login
                    </span>{" "}
                    <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                      form
                    </span>
                  </h2>
                </div>
                <form
                  action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php/login-form?task=user.login"
                  method="post"
                  id="login-form"
                  noValidate=""
                >
                  <fieldset className="">
                    <div className="control-group">
                      <div className="controls">
                        <div className="input-prepend">
                          <span className="add-on">
                            <i className="fa fa-user hasTooltip" title="Username" />
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            defaultValue=""
                            className="validate-username required"
                            size={25}
                            required=""
                            aria-required="true"
                            autofocus=""
                            placeholder="Username"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="controls">
                        <div className="input-prepend">
                          <span className="add-on">
                            <i className="fa fa-lock hasTooltip" title="Password" />
                          </span>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            defaultValue=""
                            className="validate-password required"
                            size={25}
                            maxLength={99}
                            required=""
                            aria-required="true"
                            placeholder="Password"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="controls">
                        <button type="submit" className="btn btn-primary login">
                          Log in
                        </button>
                        <a
                          className="btn btn-primary register"
                          href="user-registration.html"
                        >
                          Don't have an account?
                        </a>
                      </div>
                    </div>
                    <div className="control-group remember">
                      <div className="controls">
                        <br />
                        <p>
                          <input
                            id="remember"
                            type="checkbox"
                            name="remember"
                            className="inputbox"
                            defaultValue="yes"
                          />
                          <label htmlFor="remember">Remember me</label>
                        </p>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="return"
                      defaultValue="aHR0cHM6Ly9saXZlZGVtbzAwLWpvb21sYS50ZW1wbGF0ZS1oZWxwLmNvbS9qb29tbGFfcHJvZC0xNjQ1NC9pbmRleC5waHAvZm9ydW0vd2VsY29tZS1tYXQvMS13ZWxjb21lLXRvLWt1bmVuYQ=="
                    />
                    <input
                      type="hidden"
                      name="d7858be5c8b2162e7e726f1d4d40fccb"
                      defaultValue={1}
                    />{" "}
                  </fieldset>
                  <a href="username-reminder-request.html">Forgot your username?</a>{" "}
                  /<a href="password-reset.html">Forgot your password?</a>
                </form>
              </div>
            </div>
            {/* //MAIN CONTENT */}
          </div>
        </div>
      </div>
      <div id="fixed-sidebar-left">
        <div className="moduletable  ">
          <div className="module_container"></div>
        </div>
      </div>
      <div id="fixed-sidebar-right"></div>
    </>
    
      

    );
}

export default Login;
