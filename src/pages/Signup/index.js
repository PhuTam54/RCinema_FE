




function Signup() {
    return (
    
      <>
      <div id="t3-mainbody" className="t3-mainbody">
        <div className="container">
          <div className="row">
            {/* MAIN CONTENT */}
            <div id="t3-content" className="t3-content col-sm-12">
              <div id="system-message-container"></div>
              <div className="page-registration page-registration__">
                <div className="page_header">
                  <h2>
                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                      User
                    </span>{" "}
                    <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                      registration
                    </span>
                  </h2>
                </div>
                <form
                  id="member-registration"
                  action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php/user-registration?task=registration.register"
                  method="post"
                  className="form-horizontal"
                >
                  <fieldset>
                    <div className="control-group">
                      <div className="control-label">
                        <span className="spacer">
                          <span className="before" />
                          <span className="text">
                            <label id="jform_spacer-lbl" className="">
                              <strong className="red">*</strong> Required field
                            </label>
                          </span>
                          <span className="after" />
                        </span>{" "}
                      </div>
                      <div className="controls"></div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_name-lbl"
                          htmlFor="jform_name"
                          className="hasPopover required"
                          title="Name"
                          data-content="Enter your full name."
                        >
                          Name<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[name]"
                          id="jform_name"
                          defaultValue=""
                          className="required"
                          size={30}
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_username-lbl"
                          htmlFor="jform_username"
                          className="hasPopover required"
                          title="Username"
                          data-content="Enter your desired username."
                        >
                          Username<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[username]"
                          id="jform_username"
                          defaultValue=""
                          className="validate-username required"
                          size={30}
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_password1-lbl"
                          htmlFor="jform_password1"
                          className="hasPopover required"
                          title="Password"
                          data-content="Enter your desired password."
                        >
                          Password<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="password"
                          name="jform[password1]"
                          id="jform_password1"
                          defaultValue=""
                          autoComplete="off"
                          className="validate-password required"
                          size={30}
                          maxLength={99}
                          required=""
                          aria-required="true"
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_password2-lbl"
                          htmlFor="jform_password2"
                          className="hasPopover required"
                          title="Confirm Password"
                          data-content="Confirm your password."
                        >
                          Confirm Password<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="password"
                          name="jform[password2]"
                          id="jform_password2"
                          defaultValue=""
                          autoComplete="off"
                          className="validate-password required"
                          size={30}
                          maxLength={99}
                          required=""
                          aria-required="true"
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_email1-lbl"
                          htmlFor="jform_email1"
                          className="hasPopover required"
                          title="Email Address"
                          data-content="Enter your email address."
                        >
                          Email Address<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="email"
                          name="jform[email1]"
                          className="validate-email required"
                          id="jform_email1"
                          defaultValue=""
                          size={30}
                          autoComplete="email"
                          required=""
                          aria-required="true"
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_email2-lbl"
                          htmlFor="jform_email2"
                          className="hasPopover required"
                          title="Confirm Email Address"
                          data-content="Confirm your email address."
                        >
                          Confirm Email Address<span className="star">&nbsp;*</span>
                        </label>
                      </div>
                      <div className="controls">
                        <input
                          type="email"
                          name="jform[email2]"
                          className="validate-email required"
                          id="jform_email2"
                          defaultValue=""
                          size={30}
                          required=""
                          aria-required="true"
                        />{" "}
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_address1-lbl"
                          htmlFor="jform_profile_address1"
                          className="hasPopover"
                          title="Address 1"
                          data-content="If required, please fill this field."
                        >
                          Address 1
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][address1]"
                          id="jform_profile_address1"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_address2-lbl"
                          htmlFor="jform_profile_address2"
                          className="hasPopover"
                          title="Address 2"
                          data-content="If required, please fill this field."
                        >
                          Address 2
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][address2]"
                          id="jform_profile_address2"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_city-lbl"
                          htmlFor="jform_profile_city"
                          className="hasPopover"
                          title="City"
                          data-content="If required, please fill this field."
                        >
                          City
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][city]"
                          id="jform_profile_city"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_region-lbl"
                          htmlFor="jform_profile_region"
                          className="hasPopover"
                          title="Region"
                          data-content="If required, please fill this field."
                        >
                          Region
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][region]"
                          id="jform_profile_region"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_country-lbl"
                          htmlFor="jform_profile_country"
                          className="hasPopover"
                          title="Country"
                          data-content="If required, please fill this field."
                        >
                          Country
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][country]"
                          id="jform_profile_country"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_postal_code-lbl"
                          htmlFor="jform_profile_postal_code"
                          className="hasPopover"
                          title="Postal/ZIP Code"
                          data-content="If required, please fill this field."
                        >
                          Postal/ZIP Code
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][postal_code]"
                          id="jform_profile_postal_code"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_phone-lbl"
                          htmlFor="jform_profile_phone"
                          className="hasPopover"
                          title="Phone"
                          data-content="If required, please fill this field."
                        >
                          Phone
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="tel"
                          name="jform[profile][phone]"
                          id="jform_profile_phone"
                          defaultValue=""
                          size={30}
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_website-lbl"
                          htmlFor="jform_profile_website"
                          className="hasPopover"
                          title="Website"
                          data-content="If required, please fill this field."
                        >
                          Website
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="url"
                          name="jform[profile][website]"
                          id="jform_profile_website"
                          defaultValue=""
                          size={30}
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_favoritebook-lbl"
                          htmlFor="jform_profile_favoritebook"
                          className="hasPopover"
                          title="Favourite Book"
                          data-content="If required, please fill this field."
                        >
                          Favourite Book
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <input
                          type="text"
                          name="jform[profile][favoritebook]"
                          id="jform_profile_favoritebook"
                          defaultValue=""
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_aboutme-lbl"
                          htmlFor="jform_profile_aboutme"
                          className="hasPopover"
                          title="About Me"
                          data-content="If required, please fill this field."
                        >
                          About Me
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <textarea
                          name="jform[profile][aboutme]"
                          id="jform_profile_aboutme"
                          cols={30}
                          rows={5}
                          defaultValue={""}
                        />{" "}
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label"></div>
                    </div>
                    <div className="controls">
                      The date of birth entered should use the format
                      Year-Month-Day, ie 0000-00-00
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_dob-lbl"
                          htmlFor="jform_profile_dob"
                          className="hasPopover"
                          title="Date of Birth"
                          data-content="If required, please fill this field."
                        >
                          Date of Birth
                        </label>
                        <span className="optional">(optional)</span>
                      </div>
                      <div className="controls">
                        <div className="field-calendar">
                          <div className="input-append">
                            <input
                              type="text"
                              id="jform_profile_dob"
                              name="jform[profile][dob]"
                              defaultValue=""
                              data-alt-value=""
                              autoComplete="off"
                            />
                            <button
                              type="button"
                              className="btn btn-secondary"
                              id="jform_profile_dob_btn"
                              data-inputfield="jform_profile_dob"
                              data-dayformat="%Y-%m-%d"
                              data-button="jform_profile_dob_btn"
                              data-firstday={0}
                              data-weekend="0,6"
                              data-today-btn={1}
                              data-week-numbers={1}
                              data-show-time={0}
                              data-show-others={1}
                              data-time-24={24}
                              data-only-months-nav={0}
                              title="Open the calendar"
                            >
                              <span className="icon-calendar" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label
                          id="jform_profile_tos-lbl"
                          htmlFor="jform_profile_tos"
                          className="hasTooltip required"
                          title="Terms of Service<br />Please read the Terms of Service. You will not be able to register if you do not agree with them."
                        >
                          Terms of Service<span className="star">&nbsp;*</span>
                        </label>{" "}
                      </div>
                      <div className="controls">
                        <fieldset
                          id="jform_profile_tos"
                          className="radio"
                          required=""
                          aria-required="true"
                        >
                          <input
                            type="radio"
                            id="jform_profile_tos0"
                            name="jform[profile][tos]"
                            defaultValue={1}
                            required=""
                            aria-required="true"
                          />{" "}
                          <label htmlFor="jform_profile_tos0">Agree </label>
                          <input
                            type="radio"
                            id="jform_profile_tos1"
                            name="jform[profile][tos]"
                            defaultValue={0}
                            defaultChecked="checked"
                            required=""
                            aria-required="true"
                          />{" "}
                          <label htmlFor="jform_profile_tos1">No </label>
                        </fieldset>
                      </div>
                    </div>
                  </fieldset>
                  <div className="controls">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <a
                      className="btn btn-primary cancel"
                      href="../index.html"
                      title="Cancel"
                    >
                      Cancel
                    </a>
                  </div>
                  <input type="hidden" name="option" defaultValue="com_users" />
                  <input
                    type="hidden"
                    name="task"
                    defaultValue="registration.register"
                  />
                  <input
                    type="hidden"
                    name="d7858be5c8b2162e7e726f1d4d40fccb"
                    defaultValue={1}
                  />{" "}
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

export default Signup;
