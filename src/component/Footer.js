import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';

function Footer() {
  document.getElementsByClassName('widget_nav_menu').onclick=function(){
    document.getElementsByClassName('widget_nav_menu').classList.add('open');
  }
  const{lan} =useContext(CartContext);
  return (
    <>
    {
      lan==='ENG'?
      (
        <footer
        id="colophon"
        class="site-footer navbar-light text-md-left"
        role="contentinfo"
      >
        <div class="container newsletter-subscribe mb-3 mb-sm-5">
          <div class="row">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <div class="footer-logo">
                <a href="/en/">
                  <img
                    src="https://properties-emaar-com.azureedge.net/wp-content/themes/emaar/inc/assets/images/emaar-logo.svg"
                    alt="Emaar Properties PJSC"
                    title="Emaar Properties PJSC"
                    width="100"
                    height="25"
                  />
                </a>
              </div>
              <div class="footer-social-icons">
                <ul class="social-media-icons-sections mb-3">
                  <li class="social-media-icon">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/pages/Emaar-Dubai/1427542120816087"
                      title=""
                      ><i class="fab fa-facebook-square"></i
                    ></a>
                  </li>
                  <li class="social-media-icon">
                    <a
                      target="_blank"
                      href="https://twitter.com/emaardubai"
                      title=""
                      ><i class="fa-brands fa-x-twitter"></i
                    ></a>
                  </li>
                  <li class="social-media-icon">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/c/Emaardubai"
                      title=""
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li class="social-media-icon">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/emaardubai/"
                      title="Follow us on Instagram"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li class="social-media-icon">
                    <a
                      target="_blank"
                      href="https://ae.linkedin.com/company/emaar-properties"
                      title=""
                      ><i class="fab fa-linkedin"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="col-lg-5 d-flex justify-content-lg-end">
              <div
                class="gf_browser_chrome gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework"
                data-form-theme="legacy"
                data-form-index="0"
                id="gform_wrapper_2"
              >
                <div id="gf_2" class="gform_anchor" tabindex="-1"></div>
                <form
                  method="post"
                  enctype="multipart/form-data"
                  target="gform_ajax_frame_2"
                  id="gform_2"
                  action="/en/#gf_2"
                  data-formid="2"
                  autocomplete="off"
                >
                  <div class="gform-body gform_body">
                    <ul
                      id="gform_fields_2"
                      class="gform_fields top_label form_sublabel_below description_below"
                    >
                      <li
                        id="field_2_1"
                        class="gfield gfield--type-email gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label gfield_visibility_visible"
                        data-js-reload="field_2_1"
                      >
                        <label
                          class="gfield_label gform-field-label"
                          for="input_2_1"
                          >Email<span class="gfield_required"
                            ><span
                              class="gfield_required gfield_required_asterisk"
                              >*</span
                            ></span
                          ></label
                        >
                        <div class="ginput_container ginput_container_email">
                          <input
                            autocomplete="off"
                            name="input_1"
                            id="input_2_1"
                            type="text"
                            value=""
                            class="large"
                            placeholder="Enter email"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </li>
                      <li
                        id="field_2_2"
                        class="gfield gfield--type-captcha gfield--width-full field_sublabel_below gfield--no-description field_description_below hidden_label gfield_visibility_visible"
                        data-js-reload="field_2_2"
                      >
                        <label
                          class="gfield_label gform-field-label"
                          for="input_2_2"
                          >CAPTCHA</label
                        >
                        <div
                          id="input_2_2"
                          class="ginput_container ginput_recaptcha"
                          data-sitekey="6LdgogIiAAAAALMaty597CSm2TxzFnDj_2DTS5UM"
                          data-theme="light"
                          data-tabindex="-1"
                          data-size="invisible"
                          data-badge="bottomright"
                        ></div>
                      </li>
                    </ul>
                  </div>
                  <div class="gform_footer top_label">
                    <input
                      type="submit"
                      id="gform_submit_button_2"
                      class="gform_button button"
                      value="Subscribe"
                      onclick='if(window["gf_submitting_2"]){return false;}  window["gf_submitting_2"]=true;  '
                      onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_2"]){return false;} window["gf_submitting_2"]=true;  jQuery("#gform_2").trigger("submit",[true]); }'
                    />
                    <input
                      type="hidden"
                      name="gform_ajax"
                      value="form_id=2&amp;title=&amp;description=&amp;tabindex=0"
                    />
                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="is_submit_2"
                      value="1"
                    />
                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="gform_submit"
                      value="2"
                    />

                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="gform_unique_id"
                      value=""
                    />
                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="state_2"
                      value="WyJbXSIsImY5YzY4NDExNGRhNmFjYWNmZjYxYzNiMGQzOGQ0YjVlIl0="
                    />
                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="gform_target_page_number_2"
                      id="gform_target_page_number_2"
                      value="0"
                    />
                    <input
                      type="hidden"
                      class="gform_hidden"
                      name="gform_source_page_number_2"
                      id="gform_source_page_number_2"
                      value="1"
                    />
                    <input type="hidden" name="gform_field_values" value="" />
                  </div>
                </form>
              </div>
              <iframe
                className=' hidden w-0 hover:'
                src="about:blank"
                name="gform_ajax_frame_2"
                id="gform_ajax_frame_2"
                title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
              ></iframe>
            </div> */}
          </div>
          <hr class="mt-3 mt-sm-5 d-none d-lg-block" />
        </div>
        <div id="footer-widget" class="row m-0 bg-light">
          <div class="container">
            <div class="row">
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list1"
              >
                <section
                  id="nav_menu-4"
                  class="widget widget_nav_menu nav-accordion"
                >
                  <p class="widget-title">About EMAAR</p>
                  <div class="menu-footer-menu-about-emaar-container">
                    <ul id="menu-footer-menu-about-emaar" class="menu">
                      <li
                        id="menu-item-58277"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58277"
                      >
                        <a href="https://properties.emaar.com/en/about-emaar/"
                          >Who We Are</a
                        >
                      </li>
                      <li
                        id="menu-item-58279"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58279"
                      >
                        <a href="https://properties.emaar.com/en/contact-us/"
                          >Contact Us</a
                        >
                      </li>
                      <li
                        id="menu-item-804"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-804"
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://emaarsales.my.salesforce-sites.com/wecare?type=1&#038;from=vKteIARjY%2baJ2b6JsyhkZiLs7M%2b5KD0y%2fXUow0DFmQ0%3d"
                          >We Care</a
                        >
                      </li>
                      <li
                        id="menu-item-58280"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58280"
                      >
                        <a href="https://properties.emaar.com/en/faq/">FAQ</a>
                      </li>
                      <li
                        id="menu-item-4892"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4892"
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://emhm.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/"
                          >Careers</a
                        >
                      </li>
                      <li
                        id="menu-item-58285"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58285"
                      >
                        <a
                          href="https://properties.emaar.com/en/whistleblower-line/"
                          >Whistleblower Line</a
                        >
                      </li>
                      <li
                        id="menu-item-303495"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-303495"
                      >
                        <a
                          href="https://properties.emaar.com/en/investor-relations/"
                          >Investor Relations</a
                        >
                      </li>
                      <li
                        id="menu-item-303496"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-303496"
                      >
                        <a
                          href="https://properties.emaar.com/en/press-release-listing/"
                          >Press Releases</a
                        >
                      </li>
                      <li
                        id="menu-item-303497"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-303497"
                      >
                        <a href="https://properties.emaar.com/en/blog/"
                          >Emaar Properties Blog</a
                        >
                      </li>
                      <li
                        id="menu-item-303499"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-303499"
                      >
                        <a
                          href="https://properties.emaar.com/en/mortgage-calculator/"
                          >Mortgage Calculator</a
                        >
                      </li>
                      <li
                        id="menu-item-303500"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-303500"
                      >
                        <a href="https://properties.emaar.com/en/gift-scams/"
                          >Gifts &#038; Scam Disclaimer</a
                        >
                      </li>
                      <li
                        id="menu-item-364809"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-364809"
                      >
                        <a
                          href="https://properties.emaar.com/en/emaar-sustainability/"
                          >Emaar Sustainability</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list2"
              >
                <section
                  id="nav_menu-2"
                  class="widget widget_nav_menu nav-accordion"
                >
                  <p class="widget-title">Communities</p>
                  <div class="menu-footer-communities-container">
                    <ul id="menu-footer-communities" class="menu">
                      <li
                        id="menu-item-367684"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-367684"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/the-oasis/"
                          >The Oasis</a
                        >
                      </li>
                      <li
                        id="menu-item-58239"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58239"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/downtown-dubai/"
                          >Downtown Dubai</a
                        >
                      </li>
                      <li
                        id="menu-item-58249"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58249"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/dubai-marina/"
                          >Dubai Marina</a
                        >
                      </li>
                      <li
                        id="menu-item-58250"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58250"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/dubai-hills-estate/"
                          >Dubai Hills Estate</a
                        >
                      </li>
                      <li
                        id="menu-item-58251"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58251"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/dubai-creek-harbour/"
                          >Dubai Creek Harbour</a
                        >
                      </li>
                      <li
                        id="menu-item-58252"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58252"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/arabian-ranches-iii/"
                          >Arabian Ranches III</a
                        >
                      </li>
                      <li
                        id="menu-item-58253"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58253"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/the-valley/"
                          >The Valley</a
                        >
                      </li>
                      <li
                        id="menu-item-58254"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58254"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/emaar-south/"
                          >Emaar South</a
                        >
                      </li>
                      <li
                        id="menu-item-58255"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58255"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/arabian-ranches/"
                          >Arabian Ranches</a
                        >
                      </li>
                      <li
                        id="menu-item-58256"
                        class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58256"
                      >
                        <a
                          href="https://properties.emaar.com/en/our-communities/emaar-beachfront/"
                          >Emaar Beachfront</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list3"
              >
                <section
                  id="latest_properties_widget-2"
                  class="widget widget_nav_menu nav-accordion"
                >
                  <p class="widget-title">Latest Launch</p>
                  <div class="menu-footer-latest-launch-container">
                    <ul id="menu-footer-latest-launch" class="menu">
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/address-marjan/"
                          title="Address Residences"
                          >Address Residences</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/park-gate/"
                          title="Park Gate"
                          >Park Gate</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/avonlea/"
                          title="Avonlea"
                          >Avonlea</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/bayline/"
                          title="Bayline"
                          >Bayline</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/club-drive/"
                          title="Club Drive"
                          >Club Drive</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/alana/"
                          title="Alana"
                          >Alana</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/parkside-views-residence/"
                          title="Parkside Views Residence"
                          >Parkside Views Residence</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/nima/"
                          title="Nima"
                          >Nima</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/clearpoint/"
                          title="Clearpoint"
                          >Clearpoint</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/properties/greenside-residence/"
                          title="Greenside Residence"
                          >Greenside Residence</a
                        >
                      </li>
                      <li>
                        <a href="/en/property-search/">View All Properties</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list4"
              >
                <section
                  id="nav_menu-9"
                  class="widget widget_nav_menu nav-accordion nav-accordion"
                >
                  <p class="widget-title">Emaar International</p>
                  <div class="menu-footer-emaar-international-container">
                    <ul id="menu-footer-emaar-international" class="menu">
                      <li
                        id="menu-item-58132"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58132"
                      >
                        <a href="https://sa.emaar.com/">KSA</a>
                      </li>
                      <li
                        id="menu-item-58127"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58127"
                      >
                        <a href="https://in.emaar.com/en/">India</a>
                      </li>
                      <li
                        id="menu-item-58128"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58128"
                      >
                        <a href="https://pk.emaar.com/en/">Pakistan</a>
                      </li>
                      <li
                        id="menu-item-58129"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58129"
                      >
                        <a href="https://www.emaarmisr.com/en/">Egypt</a>
                      </li>
                      <li
                        id="menu-item-58133"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58133"
                      >
                        <a href="https://tr.emaar.com/en/">Turkey</a>
                      </li>
                      <li
                        id="menu-item-58131"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58131"
                      >
                        <a href="https://ma.emaar.com/en/">Morocco</a>
                      </li>
                      <li
                        id="menu-item-113658"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-113658"
                      >
                        <a href="https://www.dubaiemaar.cn/">China</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list5"
              >
                <section
                  id="nav_menu-8"
                  class="widget widget_nav_menu nav-accordion nav-accordion"
                >
                  <p class="widget-title">Emaar Entertainment</p>
                  <div class="menu-footer-emaar-entertainment-container">
                    <ul id="menu-footer-emaar-entertainment" class="menu">
                      <li
                        id="menu-item-58138"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58138"
                      >
                        <a href="https://www.burjkhalifa.ae/en/index.aspx"
                          >Burj Khalifa</a
                        >
                      </li>
                      <li
                        id="menu-item-58140"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58140"
                      >
                        <a href="https://www.reelcinemas.ae/en/"
                          >Reel Cinemas</a
                        >
                      </li>
                      <li
                        id="menu-item-58141"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58141"
                      >
                        <a href="https://www.dubaiopera.com/">Dubai Opera</a>
                      </li>
                      <li
                        id="menu-item-58142"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58142"
                      >
                        <a href="https://www.dubaiicerink.com/"
                          >Dubai Ice Rink</a
                        >
                      </li>
                      <li
                        id="menu-item-58143"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58143"
                      >
                        <a href="https://dubai.kidzania.com/en-ae">KidZania</a>
                      </li>
                      <li
                        id="menu-item-152551"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-152551"
                      >
                        <a href="https://www.skyviewsdubai.com/"
                          >Sky Views Dubai</a
                        >
                      </li>
                      <li
                        id="menu-item-311807"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-311807"
                      >
                        <a
                          href="https://www.thedubaiaquarium.com/we-care-contact-us"
                          >Dubai Aquarium</a
                        >
                      </li>
                      <li
                        id="menu-item-376149"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376149"
                      >
                        <a
                          href="https://properties.emaar.com/en/other-emaar-businesses/emaar-entertainment/"
                          >View All</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list6"
              >
                <section
                  id="nav_menu-7"
                  class="widget widget_nav_menu nav-accordion nav-accordion"
                >
                  <p class="widget-title">Emaar Malls</p>
                  <div class="menu-footer-emaar-malls-container">
                    <ul id="menu-footer-emaar-malls" class="menu">
                      <li
                        id="menu-item-58148"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58148"
                      >
                        <a href="https://thedubaimall.com/">Dubai Mall</a>
                      </li>
                      <li
                        id="menu-item-58149"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58149"
                      >
                        <a href="https://www.dubaimarinamall.com/"
                          >Dubai Marina Mall</a
                        >
                      </li>
                      <li
                        id="menu-item-312213"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-312213"
                      >
                        <a href="https://www.dubaihillsmall.ae/"
                          >Dubai Hills Mall</a
                        >
                      </li>
                      <li
                        id="menu-item-58150"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58150"
                      >
                        <a href="https://www.goldanddiamondpark.com/"
                          >Gold and Diamond Park</a
                        >
                      </li>
                      <li
                        id="menu-item-58151"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58151"
                      >
                        <a href="https://www.soukalbahar.ae/">Souk Al Bahar</a>
                      </li>
                      <li
                        id="menu-item-58152"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58152"
                      >
                        <a href="https://www.thespringssouk.com/"
                          >The Springs Souk</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list7"
              >
                <section
                  id="nav_menu-6"
                  class="widget widget_nav_menu nav-accordion nav-accordion"
                >
                  <p class="widget-title">Emaar Hospitality</p>
                  <div class="menu-footer-emaar-hospitality-container">
                    <ul id="menu-footer-emaar-hospitality" class="menu">
                      <li
                        id="menu-item-58153"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58153"
                      >
                        <a href="https://www.addresshotels.com/en"
                          >Address Hotels + Resorts</a
                        >
                      </li>
                      <li
                        id="menu-item-58154"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58154"
                      >
                        <a href="https://www.vidahotels.com/en/"
                          >Vida Hotels and Resorts</a
                        >
                      </li>
                      <li
                        id="menu-item-58156"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58156"
                      >
                        <a href="https://www.armanihoteldubai.com/"
                          >Armani Hotel Dubai</a
                        >
                      </li>
                      <li
                        id="menu-item-58155"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58155"
                      >
                        <a href="https://www.alalameinhotel.com/en/"
                          >Al Alamein Hotel Egypt</a
                        >
                      </li>
                      <li
                        id="menu-item-63059"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-63059"
                      >
                        <a href="https://www.rovehotels.com/">Rove Hotels</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 col-lg-3 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list8"
              >
                <section
                  id="nav_menu-5"
                  class="widget widget_nav_menu nav-accordion nav-accordion"
                >
                  <p class="widget-title">Emaar Leisure Group</p>
                  <div class="menu-footer-emaar-leisure-group-container">
                    <ul id="menu-footer-emaar-leisure-group" class="menu">
                      <li
                        id="menu-item-58157"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58157"
                      >
                        <a href="https://www.poloclubdubai.com/"
                          >Dubai Polo &#038; Equestrian Club</a
                        >
                      </li>
                      <li
                        id="menu-item-58158"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58158"
                      >
                        <a href="https://www.arabianranchesgolfclub.com/"
                          >Arabian Ranches Golf Club</a
                        >
                      </li>
                      <li
                        id="menu-item-58159"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58159"
                      >
                        <a href="https://www.dubaihillsgolfclub.com/"
                          >Dubai Hills Golf Club</a
                        >
                      </li>
                      <li
                        id="menu-item-58160"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58160"
                      >
                        <a href="https://www.dubaimarinayachtclub.com/"
                          >Dubai Marina Yacht Club</a
                        >
                      </li>
                      <li
                        id="menu-item-127100"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-127100"
                      >
                        <a href="https://www.creekmarinayachtclub.com/"
                          >Creek Marina Yacht Club</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div
                class="col-12 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
                id="footer-list-trandung"
              >
                <section
                  id="trending_searches_widget-3"
                  class="widget widget_trending_searches_widget nav-accordion"
                >
                  <p class="widget-title">Trending Searches</p>
                  <div class="trending-menus">
                    <ul class="menu">
                      <li>
                        <a
                          href="https://properties.emaar.com/en/apartments-for-sale-in-dubai/"
                          title="Apartments for Sale in Dubai"
                          >Apartments for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/apartments-for-sale-in-dubai/1-bedroom-apartments/"
                          title="1 Bedroom Apartments for Sale in Dubai"
                          >1 Bedroom Apartments for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/apartments-for-sale-in-dubai/2-bedroom-apartments/"
                          title="2 Bedroom Apartments for Sale in Dubai"
                          >2 Bedroom Apartments for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/apartments-for-sale-in-dubai/3-bedroom-apartments/"
                          title="3 Bedroom Apartments for Sale in Dubai"
                          >3 Bedroom Apartments for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/villa-for-sale-in-dubai/"
                          title="Villas for Sale in Dubai"
                          >Villas for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/villa-for-sale-in-dubai/3-bedroom-villa/"
                          title="3 Bedroom Villas for Sale in Dubai"
                          >3 Bedroom Villas for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/villa-for-sale-in-dubai/4-bedroom-villa/"
                          title="4 Bedroom Villas for Sale in Dubai"
                          >4 Bedroom Villas for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/villa-for-sale-in-dubai/5-bedroom-villa/"
                          title="5 Bedroom Villas for Sale in Dubai"
                          >5 Bedroom Villas for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/townhouse-for-sale-dubai/"
                          title="Townhouses for Sale in Dubai"
                          >Townhouses for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/penthouse-for-sale-dubai/"
                          title="Penthouse for Sale in Dubai"
                          >Penthouse for Sale in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/property-investment-dubai/"
                          title="Property investment in Dubai"
                          >Property investment in Dubai</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://properties.emaar.com/en/off-plan-projects/"
                          title="Off-Plan Projects in Dubai"
                          >Off-Plan Projects in Dubai</a
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div
          class="footer-bottom text-lg-center text-md-center legal-menu-block"
        >
          <div class="container">
            <div class="menu-legal-menu-container">
              <ul id="menu-legal-menu" class="menu">
                <li
                  id="menu-item-58505"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58505"
                >
                  <a href="https://properties.emaar.com/en/privacy-policy/"
                    >Privacy Policy</a
                  >
                </li>
                <li
                  id="menu-item-58506"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58506"
                >
                  <a
                    href="https://properties.emaar.com/en/terms-and-conditions/"
                    >Emaar Properties Terms &#038; Conditions</a
                  >
                </li>
                <li
                  id="menu-item-25262"
                  class="country-lang-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-25262"
                >
                  <a
                    href="https://properties.emaar.com/en/choose-country-language/"
                    >Country and Language</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
      ):
      (
        <></>
      )
    }
    </>

  )
}

export default Footer
