import React, { useEffect, useState } from 'react'


function Footer() {
  const [lan, setlan] = useState('EG')
  useEffect(() => {
    setlan(window.localStorage.getItem('lan'))
  }, [])
  console.log(window.localStorage.getItem('lan'))
  return (
   
    <footer
    id="colophon"
    class="site-footer navbar-light text-md-left"
    role="contentinfo"
  >
    <div class="container newsletter-subscribe mb-3 mb-sm-5">
      <div class="row">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <div class="footer-logo">
            <a href="/ar/">
              <img
                src="https://properties-emaar-com.azureedge.net/wp-content/themes/emaar/inc/assets/images/Emaar_Ar_logo.png"
                alt="Emaar Properties PJSC"
                title="Emaar Properties PJSC"
                width="100"
                height="28"
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
        <div class="col-lg-5 d-flex justify-content-lg-end">
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
              action="/ar/#gf_2"
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
                      >البريد الالكتروني
                      <span class="gfield_required"
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
                        placeholder="أدخل بريدك الإلكتروني"
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
                  value="الاشتراك"
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
            
            
            style={{display:'none', width:'0px', height:'0px'}}
            src="about:blank"
            name="gform_ajax_frame_2"
            id="gform_ajax_frame_2"
            title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
          ></iframe>
          
        </div>
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
              <p class="widget-title">حول إعمار</p>
              <div class="menu-footer-menu-about-emaar-ar-container">
                <ul id="menu-footer-menu-about-emaar-ar" class="menu">
                  <li
                    id="menu-item-58287"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58287"
                  >
                    <a href="https://properties.emaar.com/ar/about-emaar/"
                      >من نحن</a
                    >
                  </li>
                  <li
                    id="menu-item-374984"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-374984"
                  >
                    <a
                      href="https://properties.emaar.com/ar/emaar-sustainability/"
                      >الاستدامة في إعمار</a
                    >
                  </li>
                  <li
                    id="menu-item-309843"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309843"
                  >
                    <a href="https://properties.emaar.com/ar/contact-us/"
                      >اتصل بنا</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-364814"
                  >
                    <a
                      href="https://properties.emaar.com/ar/emaar-sustainability/"
                      >الاستدامة في إعمار</a
                    >
                  </li>
                  <li
                    id="menu-item-885"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-885"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://emaarsales.my.salesforce-sites.com/wecare?type=1&#038;from=vKteIARjY%2baJ2b6JsyhkZiLs7M%2b5KD0y%2fXUow0DFmQ0%3d"
                      >نحن نهتمّ</a
                    >
                  </li>
                  <li
                    id="menu-item-58494"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58494"
                  >
                    <a href="https://properties.emaar.com/ar/faq/"
                      >أسئلة متكرّرة</a
                    >
                  </li>
                  <li
                    id="menu-item-4946"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4946"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://emhm.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/"
                      >وظائف</a
                    >
                  </li>
                  <li
                    id="menu-item-235483"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-235483"
                  >
                    <a
                      href="https://properties.emaar.com/ar/whistleblower-line/"
                      >الإبلاغ عن مسائل خاصة</a
                    >
                  </li>
                  <li
                    id="menu-item-309852"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309852"
                  >
                    <a
                      href="https://properties.emaar.com/ar/investor-relations/emaar-properties-pjsc/"
                      >علاقات المستثمرين</a
                    >
                  </li>
                  <li
                    id="menu-item-303518"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-303518"
                  >
                    <a
                      href="https://properties.emaar.com/ar/press-release-listing/"
                      >نشرات صحفية</a
                    >
                  </li>
                  <li
                    id="menu-item-309854"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309854"
                  >
                    <a href="https://properties.emaar.com/ar/blog/"
                      >المدونة</a
                    >
                  </li>
                  <li
                    id="menu-item-309855"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309855"
                  >
                    <a
                      href="https://properties.emaar.com/ar/mortgage-calculator/"
                      >أداة حساب الرهن العقاري</a
                    >
                  </li>
                  <li
                    id="menu-item-309856"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309856"
                  >
                    <a href="https://properties.emaar.com/ar/gift-scams/"
                      >إخلاء مسؤولية</a
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
              <p class="widget-title">مجتمعات</p>
              <div class="menu-footer-communities-ar-container">
                <ul id="menu-footer-communities-ar" class="menu">
                  <li
                    id="menu-item-367687"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-367687"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/the-oasis/"
                      >ذا أويسيس</a
                    >
                  </li>
                  <li
                    id="menu-item-58311"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58311"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/downtown-dubai/"
                      >وسط مدينة دبي</a
                    >
                  </li>
                  <li
                    id="menu-item-58312"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58312"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/dubai-marina/"
                      >مرسى دبي</a
                    >
                  </li>
                  <li
                    id="menu-item-58313"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58313"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/dubai-hills-estate/"
                      >دبي هيلز استيت</a
                    >
                  </li>
                  <li
                    id="menu-item-58314"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58314"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/dubai-creek-harbour/"
                      >ميناء خور دبي</a
                    >
                  </li>
                  <li
                    id="menu-item-58315"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58315"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/arabian-ranches-iii/"
                      >المرابع العربية 3</a
                    >
                  </li>
                  <li
                    id="menu-item-58316"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58316"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/the-valley/"
                      >ذا فالي</a
                    >
                  </li>
                  <li
                    id="menu-item-58317"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58317"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/emaar-south/"
                      >إعمار الجنوب</a
                    >
                  </li>
                  <li
                    id="menu-item-58318"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58318"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/arabian-ranches/"
                      >المرابع العربية</a
                    >
                  </li>
                  <li
                    id="menu-item-58319"
                    class="menu-item menu-item-type-post_type menu-item-object-communities menu-item-58319"
                  >
                    <a
                      href="https://properties.emaar.com/ar/our-communities/emaar-beachfront/"
                      >إعمار بيتشفرونت</a
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
              <p class="widget-title">أحدث المشاريع</p>
              <div class="menu-footer-latest-launch-container">
                <ul id="menu-footer-latest-launch" class="menu">
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/address-marjan/"
                      title="عنوان السكن"
                      >عنوان السكن</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/park-gate/"
                      title="بوابة بارك"
                      >بوابة بارك</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/avonlea/"
                      title="إيفونلي"
                      >إيفونلي</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/bayline/"
                      title="باي لاين"
                      >باي لاين</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/club-drive/"
                      title="كلوب درايف"
                      >كلوب درايف</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/alana/"
                      title="الانا"
                      >الانا</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/parkside-views-residence/"
                      title="مناظر باركسايد"
                      >مناظر باركسايد</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/nima/"
                      title="نعمة"
                      >نعمة</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/clearpoint/"
                      title="كلير بوينت"
                      >كلير بوينت</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://properties.emaar.com/ar/properties/greenside-residence/"
                      title="مساكن جرينسايد"
                      >مساكن جرينسايد</a
                    >
                  </li>
                  <li>
                    <a href="/ar/property-search/">عرض جميع العقارات </a>
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
              <p class="widget-title">إعمار العالمية</p>
              <div class="menu-footer-emaar-international-ar-container">
                <ul id="menu-footer-emaar-international-ar" class="menu">
                  <li
                    id="menu-item-58210"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58210"
                  >
                    <a href="https://in.emaar.com/en/">الهند</a>
                  </li>
                  <li
                    id="menu-item-58212"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58212"
                  >
                    <a href="https://pk.emaar.com/en/">باكستان</a>
                  </li>
                  <li
                    id="menu-item-58214"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58214"
                  >
                    <a href="https://www.emaarmisr.com/ar/">مصر</a>
                  </li>
                  <li
                    id="menu-item-58215"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58215"
                  >
                    <a href="https://ma.emaar.com/ar/">المغرب</a>
                  </li>
                  <li
                    id="menu-item-58216"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58216"
                  >
                    <a href="https://sa.emaar.com/ar/"
                      >المملكة العربية السعودية</a
                    >
                  </li>
                  <li
                    id="menu-item-58217"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58217"
                  >
                    <a href="https://tr.emaar.com/ar/">تركيا</a>
                  </li>
                  <li
                    id="menu-item-113661"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-113661"
                  >
                    <a href="https://www.dubaiemaar.cn/">الصين</a>
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
              <p class="widget-title">إعمار للترفيه</p>
              <div class="menu-footer-emaar-entertainment-ar-container">
                <ul id="menu-footer-emaar-entertainment-ar" class="menu">
                  <li
                    id="menu-item-58189"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58189"
                  >
                    <a href="https://www.burjkhalifa.ae/ar/index.aspx"
                      >برج خليفة</a
                    >
                  </li>
                  <li
                    id="menu-item-58192"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58192"
                  >
                    <a href="https://www.reelcinemas.ae/en/">ريل سينما</a>
                  </li>
                  <li
                    id="menu-item-58193"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58193"
                  >
                    <a href="https://www.dubaiopera.com/ar">دبي أوبرا</a>
                  </li>
                  <li
                    id="menu-item-58194"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58194"
                  >
                    <a href="https://www.dubaiicerink.com/"
                      >حلبة دبي للتزلّج</a
                    >
                  </li>
                  <li
                    id="menu-item-58195"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58195"
                  >
                    <a href="https://dubai.kidzania.com/en-ae"
                      >كيدزانيا دبي</a
                    >
                  </li>
                  <li
                    id="menu-item-376156"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376156"
                  >
                    <a href="https://www.skyviewsdubai.com/ar/"
                      >سكاي فيوز</a
                    >
                  </li>
                  <li
                    id="menu-item-312212"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-312212"
                  >
                    <a
                      href="https://www.thedubaiaquarium.com/we-care-contact-us"
                      >دبي أكواريوم</a
                    >
                  </li>
                  <li
                    id="menu-item-376157"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376157"
                  >
                    <a
                      href="https://properties.emaar.com/ar/other-emaar-businesses/emaar-entertainment/"
                      >مشاهدة الكل</a
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
              <p class="widget-title">إعمار مولز</p>
              <div
                class="menu-footer-emaar-malls-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-container"
              >
                <ul
                  id="menu-footer-emaar-malls-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9"
                  class="menu"
                >
                  <li
                    id="menu-item-58304"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58304"
                  >
                    <a href="https://thedubaimall.com/">دبي مول</a>
                  </li>
                  <li
                    id="menu-item-58305"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58305"
                  >
                    <a href="https://www.dubaimarinamall.com/"
                      >دبي مارينا مول</a
                    >
                  </li>
                  <li
                    id="menu-item-312214"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-312214"
                  >
                    <a href="https://www.dubaihillsmall.ae/ar/"
                      >دبي هيلز مول</a
                    >
                  </li>
                  <li
                    id="menu-item-58306"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58306"
                  >
                    <a href="https://www.goldanddiamondpark.com/"
                      >مجمّع الذهب والألماس</a
                    >
                  </li>
                  <li
                    id="menu-item-58307"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58307"
                  >
                    <a href="https://www.soukalbahar.ae/">سوق البحار</a>
                  </li>
                  <li
                    id="menu-item-58308"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58308"
                  >
                    <a href="https://www.thespringssouk.com/"
                      >سوق الينابيع</a
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
              <p class="widget-title">إعمار للضيافة</p>
              <div class="menu-footer-emaar-hospitality-ar-container">
                <ul id="menu-footer-emaar-hospitality-ar" class="menu">
                  <li
                    id="menu-item-58200"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58200"
                  >
                    <a href="https://www.addresshotels.com/ar/"
                      >العنوان للفنادق والمنتجعات</a
                    >
                  </li>
                  <li
                    id="menu-item-58201"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58201"
                  >
                    <a href="https://www.vidahotels.com/ar/"
                      >فيدا للفنادق والمنتجعات</a
                    >
                  </li>
                  <li
                    id="menu-item-58203"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58203"
                  >
                    <a
                      href="https://www.armanihotels.com/ar/hotels/armani-hotel-dubai/"
                      >فندق أرماني دبي</a
                    >
                  </li>
                  <li
                    id="menu-item-58202"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58202"
                  >
                    <a href="https://www.alalameinhotel.com/ar/"
                      >فندق العلمين مصر</a
                    >
                  </li>
                  <li
                    id="menu-item-63064"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-63064"
                  >
                    <a href="https://www.rovehotels.com/ar/">روڤ للفنادق</a>
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
              <p class="widget-title">مجموعة إعمار للنوادي الترفيهية</p>
              <div class="menu-footer-emaar-leisure-group-ar-container">
                <ul id="menu-footer-emaar-leisure-group-ar" class="menu">
                  <li
                    id="menu-item-58222"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58222"
                  >
                    <a href="https://www.poloclubdubai.com/"
                      >نادي دبي للبولو والفروسية</a
                    >
                  </li>
                  <li
                    id="menu-item-58225"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58225"
                  >
                    <a href="https://www.arabianranchesgolfclub.com/"
                      >نادي المرابع العربية للجولف</a
                    >
                  </li>
                  <li
                    id="menu-item-58226"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58226"
                  >
                    <a href="https://www.dubaihillsgolfclub.com/"
                      >نادي دبي هيلز للجولف</a
                    >
                  </li>
                  <li
                    id="menu-item-58227"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-58227"
                  >
                    <a href="https://www.dubaimarinayachtclub.com/"
                      >نادي مرسى دبي لليخوت</a
                    >
                  </li>
                  <li
                    id="menu-item-127101"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-127101"
                  >
                    <a href="https://www.creekmarinayachtclub.com/"
                      >نادي كريك مارينا لليخوت</a
                    >
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div
            class="col-12 mb-lg-5 mb-lg-5 mb-sm-0 footer-nav-menu"
            id="footer-list-trandung"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="footer-bottom text-lg-center text-md-center legal-menu-block"
    >
      <div class="container">
        <div class="menu-legal-menu-ar-container">
          <ul id="menu-legal-menu-ar" class="menu">
            <li
              id="menu-item-58507"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58507"
            >
              <a href="https://properties.emaar.com/ar/privacy-policy/"
                >سياسة الخصوصية</a
              >
            </li>
            <li
              id="menu-item-205815"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-205815"
            >
              <a
                href="https://properties.emaar.com/ar/terms-and-conditions/"
                >الشروط والأحكام</a
              >
            </li>
            <li
              id="menu-item-25485"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25485"
            >
              <a
                href="https://properties.emaar.com/en/choose-country-language/"
                >البلد واللغة</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homepage-sticky-search d-lg-none noBg">
      <div class="row">
        <div class="col-6 pr-2">
          <a
            href="#"
            class="btn btn-ghost footer-search-prop-btn w-100"
            data-toggle="modal"
            data-target="#prop-search-mobileform-modal"
            >البحث</a
          >
        </div>
        <div class="col-6 pl-2">
          <a
            href="#"
            class="btn btn-blue get-touch-btn w-100"
            data-toggle="modal"
            data-target="#registerModal"
            data-formname="Get in Touch"
            >تواصل معنا</a
          >
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer
