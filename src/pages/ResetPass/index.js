





function ResetPass() {
    return (
    
      <>
  <div id="t3-mainbody" className="t3-mainbody">
    <div className="container">
      <div className="row">
        {/* MAIN CONTENT */}
        <div id="t3-content" className="t3-content col-sm-12">
          <div id="system-message-container"></div>
          <div className="page-reset page-reset__">
            <div className="page_header">
              <h2>
                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                  Password
                </span>{" "}
                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                  reset
                </span>
              </h2>
            </div>
            <form
              id="user-registration"
              action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php/password-reset?task=reset.request"
              method="post"
              className="form-horizontal"
            >
              <fieldset>
                <p>
                  Please enter the email address for your account. A
                  verification code will be sent to you. Once you have received
                  the verification code, you will be able to choose a new
                  password for your account.
                </p>
                <div className="control-group">
                  <div className="control-label">
                    <label
                      id="jform_email-lbl"
                      htmlFor="jform_email"
                      className="hasPopover required"
                      title="Email Address"
                      data-content="Please enter the email address associated with your User account.<br />A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account."
                    >
                      Email Address<span className="star">&nbsp;*</span>
                    </label>
                  </div>
                  <div className="controls">
                    <input
                      type="text"
                      name="jform[email]"
                      id="jform_email"
                      defaultValue=""
                      className="validate-username required"
                      size={30}
                      required=""
                      aria-required="true"
                    />
                  </div>
                </div>
              </fieldset>
              <div className="control-group">
                <div className="controls">
                  <button type="submit" className="btn btn-primary validate">
                    Submit
                  </button>
                </div>
              </div>
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

export default ResetPass;
