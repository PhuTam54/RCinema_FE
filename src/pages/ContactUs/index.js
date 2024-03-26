


function ContactUs() {
    return (
        <div id="t3-mainbody" className="t3-mainbody">
  <div className="container">
    <div className="row">
      {/* MAIN CONTENT */}
      <div id="t3-content" className="t3-content col-sm-12">
        <div id="system-message-container"></div>
        <div className="page page-contact page-contact__">
          {/* Heading */}
          <div className="page_header">
            <h2>
              <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                CONTACT
              </span>{" "}
              <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                US
              </span>
            </h2>
          </div>
          {/* CONTACT FORM */}
          <div className="row">
            {/* Address */}
            <div className="contact_details col-sm-4">
              <h5>
                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                  Address:
                </span>
              </h5>{" "}
              <div className="contact_address">
                <i className="icons-marker fa fa-home" />
                138 Atlantis Ln Kingsport Illinois 121164{" "}
              </div>
              <h5>
                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                  Phones:
                </span>
              </h5>{" "}
              <div className="contact_details_telephone">
                <i className="icons-marker fa fa-phone" />
                800-2345-6789{" "}
              </div>
              <div className="clearfix" />
              <div className="contact_details_fax">
                <i className="icons-marker fa fa-fax" />
                800-2345-6789{" "}
              </div>
              <div className="clearfix" />
              <h5>
                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                  E-mail:
                </span>
              </h5>{" "}
              <div className="contact_details_emailto">
                <i className="icons-marker fa fa-envelope" />
                <span id="cloak4b3ff7c545b6b4aaab49fe63bf5dd290">
                  This email address is being protected from spambots. You need
                  JavaScript enabled to view it.
                </span>{" "}
              </div>
              <div className="clearfix" />
              <div className="contact_vcard">
                Download information as:{" "}
                <a href="Website%20Owner54d0.vcf?format=vcf">vCard</a>
              </div>
              <div className="clearfix" />
            </div>{" "}
            <div className="col-sm-8">
              {/* Misc */}
              <div className="contact_misc">
                <h5>
                  <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                    Miscellaneous
                  </span>{" "}
                  <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                    information:
                  </span>
                </h5>
                <p>
                  Email us with any questions or inquiries or use our contact
                  data.
                </p>
              </div>
              <div id="contact_115">
                <form
                  className="mod_tm_ajax_contact_form mod_tm_ajax_contact_form_ no-edit"
                  id="contact-form_115"
                  noValidate=""
                >
                  <input
                    type="hidden"
                    id="module_id"
                    name="module_id"
                    defaultValue={115}
                  />
                  <div
                    className="mod_tm_ajax_contact_form_message"
                    id="message_115"
                  >
                    <span className="s">
                      Thank You! Your message has been sent.
                    </span>
                    <span className="e">
                      Something went wrong, please try again later.
                    </span>
                    <span className="c">
                      Please enter a correct Captcha answer.
                    </span>
                  </div>
                  <fieldset>
                    <div className="row">
                      <div className="control control-group-input span4">
                        <div className="control">
                          <input
                            type="text"
                            placeholder="Name *"
                            name="name"
                            id="name_0_115"
                            className="mod_tm_ajax_contact_form_text"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="control control-group-input span4">
                        <div className="control">
                          <input
                            type="email"
                            placeholder="Email *"
                            name="email"
                            id="email_1_115"
                            className="mod_tm_ajax_contact_form_email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="control control-group-input span4">
                        <div className="control">
                          <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            id="phone_2_115"
                            className="mod_tm_ajax_contact_form_text"
                          />
                        </div>
                      </div>
                      <div className="control control-group-input span6">
                        <div className="control">
                          <input
                            type="times"
                            placeholder="Time *"
                            name="time"
                            id="time_3_115"
                            className="mod_tm_ajax_contact_form_times timepicker_3_115"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="control control-group-input span6">
                        <div className="control">
                          <input
                            type="text"
                            placeholder="date *"
                            name="date"
                            id="date_4_115"
                            className="mod_tm_ajax_contact_form_date datepicker_4_115"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="control control-group-input span12">
                        <div className="control">
                          <textarea
                            name="message"
                            placeholder="Message *"
                            id="message_5_115"
                            className="mod_tm_ajax_contact_form_textarea"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>{" "}
                      {/* Submit Button */}
                      <div className="control control-group-button span12">
                        <div className="control">
                          <button
                            type="submit"
                            className="btn btn-primary mod_tm_ajax_contact_form_btn"
                          >
                            Send
                          </button>
                          <button
                            type="reset"
                            id="clear_115"
                            className="btn btn-primary mod_tm_ajax_contact_form_btn"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {/* MISC INFO */}
        </div>
      </div>
      {/* //MAIN CONTENT */}
    </div>
  </div>
</div>


    );
}

export default ContactUs;
