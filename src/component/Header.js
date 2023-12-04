import React from 'react'
import  { useState } from 'react'
import Logo from '../assets/a-letter-logo-png-19.png'
import "../index.css"
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CategoryNavMobile from './CategortNavMob'
function Header() {
  const [open, setopen] =useState(false);
  const{lan,setLan} =useContext(CartContext);
const Menu=[
    {
      titleAR:'التسويق والتطوير العقاري',
      titleEN:''
    },
    {
      titleAR:' التصاميم والاستشارات الهندسية',
      titleEN:''
    },
    {
      titleAR:'الوكالات التجارية',
      titleEN:''
    },
    {
      titleAR:'الوساطة العامة',
      titleEN:''
    },
    {
      titleAR:'الحلول التقنية ',
      titleEN:''
    },
    {
      titleAR:'الدعاية والاعلان',
      titleEN:''
    }
]
window.localStorage.setItem('lan',lan);
// Menu.map((item)=>{console.log(item.titleAR)})
  return (
    <>
    
    {
      lan==="AR"?
      (

        <header
            id="masthead"
            class="site-header navbar-static-top navbar-light headerV2"
            role="banner"
          >
        <div class="container">
              <nav class="row navbar navbar-expand-lg">
                <div class="col-2 col-sm-1 col-md-1 d-lg-none hamburger-wrap order-3 cursor-pointer ">
        <FiMenu onClick={()=>setopen(true)} className=' '/>
        {/* <a href="#mobile_nav" class="hamburger-menu">
                    <span></span>
                  </a>
              {open?
              (<>
              <div class="navbar-collapse collapse show" id="main"><ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {
                  Menu.map((item,index)=>{
                    
                 {return <li class="nav-item" key={index}><a class="nav-link p-2 p-lg-3 active" aria-current="page" title={item.titleAR} href="/">{item.titleAR}</a></li>}
                 
                  })
                }
              <div
                            class="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-dropdown js-wpml-ls-legacy-dropdown"
                          >
                            <ul>
                              <li
                                tabindex="0"
                                class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-dropdown"
                              >
                                <a
                                
                                  class="js-wpml-ls-item-toggle wpml-ls-item-toggle"
                                >
                                  <span class="wpml-ls-native">العربية</span></a
                                >
    
                                <ul class="wpml-ls-sub-menu" onClick={()=> setLan('ENG')}>
                                  <li
                                    class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ar"
                                  >
                                    <a  class="wpml-ls-link">
                                      <span class="wpml-ls-native" lang="ar"
                                        >ENG</span
                                      ></a
                                    >
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            
                          </div>
              <li class="phone-tab" data-bs-toggle="tooltip">
                          <a
                            href="javascript:void(0);"
                            class="header_call instant-video-call"
                            ><i class="far fa-video"></i>
                            <span>
                              Instant Video Call
                              <span class="phone-number-dir"></span>
                            </span>
                          </a>
                        </li>
                        <li class="watsapp-tab">
                          <a
                            href="https://wa.link/u9ik8p"
                            target="_blank"
                            class="header_whatsapp"
                          >
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                          </a>
                        </li>
              </ul></div>
    
              </>):
                  (<></>)} */}
                </div>
                <div class="col-3 col-sm-3 col-md-2 col-lg-2 navbar-brand order-2">
                  <a href="">
                    <svg
                      width="100"
                      height="25"
                      viewBox="0 0 1617 321"
                      version="1.1"
                      
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill-rule="evenodd"
                      >
                        <path
                          d="M234.9,288.4 L230.1,320.2 L0.5,320.2 C10,298.2 9.4,285.8 9.4,269.9 L9.4,51.3 C9.4,35.9 10,22.4 0.5,1 L69.3,1 L224.5,1 L224.9,33.4 C220.7,31.7 217.3,30.2 214.2,28.8 C205.9,25.7 195.4,22.8 184.5,22.9 C167.1,22.9 94.1,22.9 61.7,22.9 L61.7,147.9 L205.8,147.9 L198.7,172.5 L61.7,172.5 L61.7,297.6 C88.2,297.6 172.9,297.6 191.6,297.6 C213.5,298 235.3,285.6 235.3,285.6 L234.7,288.3 C234.7,288.4 234.8,288.4 234.9,288.4 Z M580.5,320.2 C583.6,304.5 583.6,282.3 581.1,264.2 L560.7,113.8 L449.3,320.1 L428.1,320.1 L314.9,104.5 L292.9,267.5 C290.5,286.3 289.8,310.1 291.8,320.2 L252,320.2 C259.7,303.9 261.6,296.8 265.2,270 L301.2,1 L319.5,1 L451.6,252 L583.6,1 L597.4,1 L634.6,269.4 C638.3,296.1 641.1,303.8 648.5,320.2 L580.5,320.2 Z M915.8,320.2 L862.8,203.3 L756.2,203.3 L703.9,320.2 L699.4,320.2 L662.5,320.2 L662.3,320.2 C675.5,303.8 680,296.2 689.3,275.8 L812.9,1 L826.8,1 L948.4,268.1 C961.4,294.2 967.5,302.3 986.1,320.2 L915.8,320.2 Z M1249.3,320.2 L1196.3,203.3 L1089.7,203.3 L1037.4,320.2 L1033,320.2 L996,320.2 L995.8,320.2 C1009,303.8 1013.5,296.2 1022.8,275.8 L1146.4,1 L1160.3,1 L1282,268.1 C1295,294.2 1301.1,302.3 1319.7,320.2 L1249.3,320.2 Z M1551.5,320.4 C1519.6,291.3 1478.3,252.7 1426.6,191.5 C1411.8,174.2 1401.4,172 1394.7,171.6 L1394.7,269.9 C1394.7,285.7 1394.7,298.2 1403.7,320.2 L1333.5,320.2 C1343,298.2 1342.4,285.8 1342.4,269.9 L1342.4,51.1 C1342.4,35.7 1343,22.2 1333.5,0.8 L1402.3,0.8 C1449.3,0.8 1560.4,-3.4 1560.4,88.4 C1560.4,136.9 1521.9,163 1476.7,169.6 L1463.3,170.9 C1463.3,170.9 1609.9,314.2 1616.2,320.4 L1551.5,320.4 Z M1468.4,151.3 L1468.3,151.4 C1497.9,140.2 1507.9,112.1 1506.9,88.3 C1505.8,65.4 1495.5,15.6 1394.8,19.6 L1394.8,155.7 C1394.8,155.7 1451.2,158.8 1467,151.9 C1467.9,151.5 1468.4,151.3 1468.4,151.3 Z M1099.9,181 L1186,181 L1142.6,85.7 L1099.9,181 Z M766.5,181 L852.6,181 L809.2,85.7 L766.5,181 Z"
                          id="Shape"
                          fill="#ffffff"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="col-7 col-sm-8 col-lg-10 col-md-10 nav-band pl-0 order-1">
                  <div class="row">
                    <div id="main-nav" class="col-lg-6 pl-0 d-none d-lg-block">
                      <ul id="menu-top-menu" class="navbar-nav pointer-event">
                      {
                  Menu.map((item,index)=>{
                    // if(darkmode==='AR')
                  {return  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-377627"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-377627 nav-item"
                  >
                    <a
                      title={item.titleAR}
                      href="https://properties.emaar.com/en/about-emaar/"
                      class="nav-link"
                      >{item.titleAR}
                      </a
                    >
                  </li>}
                  })
                }
                      </ul>
                    </div>
                    <div
                      class="col-lg-6 d-flex nav-band-right justify-content-end align-items-center"
                    >
                      <ul>
                        <li class="lang-tab">
                          <div
                            class="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-dropdown js-wpml-ls-legacy-dropdown"
                          >
                            <ul>
                              <li
                                tabindex="0"
                                class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-dropdown"
                              >
                                <a
                                  class="js-wpml-ls-item-toggle wpml-ls-item-toggle"
                                  >
                                  
                                  <span
                                    class="wpml-ls-native">العربية</span></a
                                >
    
                                
                                    <a  class="wpml-ls-link"
                                    onClick={()=> setLan('ENG')}
                                    >
                                      <span class="wpml-ls-native" lang="ar"
                                      
                                        >ENG</span
                                      ></a
                                    >
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="wishlist-tab d-none">
                          <a href="/en/wishlist/" class="">
                            <i
                              class="far fa-heart"
                              title="Wishlist"
                              aria-hidden="true"
                            ></i>
                            <span class="wishlistCounter count"></span>
                          </a>
                        </li>
                        <li class="phone-tab" data-bs-toggle="tooltip">
                          <a
                            href="javascript:void(0);"
                            class="header_call instant-video-call"
                            ><i class="far fa-video"></i>
                            <span>
                              {'مكالمه فديو فوريه'}
                              <span class="phone-number-dir"></span>
                            </span>
                          </a>
                        </li>
                        <li class="watsapp-tab">
                          <a
                            href="https://wa.link/u9ik8p"
                            target="_blank"
                            class="header_whatsapp"
                          >
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
      ):
      (
        <header
            id="masthead"
            class="site-header navbar-static-top navbar-light"
            role="banner"
          >
        <div class="container">
              <nav class="row navbar navbar-expand-xl p-lg-0">
                <div class="col-2 col-sm-1 col-md-1 d-lg-none hamburger-wrap">
                <div onClick={()=>setopen(true)} className='text-3xl xl:hidden cursor-pointer'>
        <FiMenu/>
      </div>
      <div 
      className={`${
        open? 'left-0' : '-left-full'
        } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
        <CategoryNavMobile setcatNavMobile={setopen} data={Menu} lan={lan} setLan={setLan}/>
      </div>
                </div>
                <div class="col-1 col-sm-2 col-md-1 col-lg-2">
                  <a href="">
                    <svg
                      width="100"
                      height="25"
                      viewBox="0 0 1617 321"
                      version="1.1"
                      className='bg-[#071C35]'
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill-rule="evenodd"
                      >
                        <path
                          d="M234.9,288.4 L230.1,320.2 L0.5,320.2 C10,298.2 9.4,285.8 9.4,269.9 L9.4,51.3 C9.4,35.9 10,22.4 0.5,1 L69.3,1 L224.5,1 L224.9,33.4 C220.7,31.7 217.3,30.2 214.2,28.8 C205.9,25.7 195.4,22.8 184.5,22.9 C167.1,22.9 94.1,22.9 61.7,22.9 L61.7,147.9 L205.8,147.9 L198.7,172.5 L61.7,172.5 L61.7,297.6 C88.2,297.6 172.9,297.6 191.6,297.6 C213.5,298 235.3,285.6 235.3,285.6 L234.7,288.3 C234.7,288.4 234.8,288.4 234.9,288.4 Z M580.5,320.2 C583.6,304.5 583.6,282.3 581.1,264.2 L560.7,113.8 L449.3,320.1 L428.1,320.1 L314.9,104.5 L292.9,267.5 C290.5,286.3 289.8,310.1 291.8,320.2 L252,320.2 C259.7,303.9 261.6,296.8 265.2,270 L301.2,1 L319.5,1 L451.6,252 L583.6,1 L597.4,1 L634.6,269.4 C638.3,296.1 641.1,303.8 648.5,320.2 L580.5,320.2 Z M915.8,320.2 L862.8,203.3 L756.2,203.3 L703.9,320.2 L699.4,320.2 L662.5,320.2 L662.3,320.2 C675.5,303.8 680,296.2 689.3,275.8 L812.9,1 L826.8,1 L948.4,268.1 C961.4,294.2 967.5,302.3 986.1,320.2 L915.8,320.2 Z M1249.3,320.2 L1196.3,203.3 L1089.7,203.3 L1037.4,320.2 L1033,320.2 L996,320.2 L995.8,320.2 C1009,303.8 1013.5,296.2 1022.8,275.8 L1146.4,1 L1160.3,1 L1282,268.1 C1295,294.2 1301.1,302.3 1319.7,320.2 L1249.3,320.2 Z M1551.5,320.4 C1519.6,291.3 1478.3,252.7 1426.6,191.5 C1411.8,174.2 1401.4,172 1394.7,171.6 L1394.7,269.9 C1394.7,285.7 1394.7,298.2 1403.7,320.2 L1333.5,320.2 C1343,298.2 1342.4,285.8 1342.4,269.9 L1342.4,51.1 C1342.4,35.7 1343,22.2 1333.5,0.8 L1402.3,0.8 C1449.3,0.8 1560.4,-3.4 1560.4,88.4 C1560.4,136.9 1521.9,163 1476.7,169.6 L1463.3,170.9 C1463.3,170.9 1609.9,314.2 1616.2,320.4 L1551.5,320.4 Z M1468.4,151.3 L1468.3,151.4 C1497.9,140.2 1507.9,112.1 1506.9,88.3 C1505.8,65.4 1495.5,15.6 1394.8,19.6 L1394.8,155.7 C1394.8,155.7 1451.2,158.8 1467,151.9 C1467.9,151.5 1468.4,151.3 1468.4,151.3 Z M1099.9,181 L1186,181 L1142.6,85.7 L1099.9,181 Z M766.5,181 L852.6,181 L809.2,85.7 L766.5,181 Z"
                          id="Shape"
                          fill="#ffffff"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="col-7 col-sm-8 col-lg-10 col-md-10 nav-band pl-0">
                  <div class="row">
                    <div id="main-nav" class="col-lg-6 pl-0 d-none d-lg-block">
                      <ul id="menu-top-menu" class="navbar-nav pointer-event">
                      {
                  Menu.map((item,index)=>{
                    // if(darkmode==='AR')
                  {return  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-377627"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-377627 nav-item"
                  >
                    <a
                      title="About Us"
                      href="https://properties.emaar.com/en/about-emaar/"
                      class="nav-link"
                      >{item.titleEN}
                      </a
                    >
                  </li>}
                  })
                }
                      </ul>
                    </div>
                    <div
                      class="col-lg-6 d-flex nav-band-right justify-content-end align-items-center"
                    >
                      <ul>
                        <li class="lang-tab">
                          <div
                            class="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-dropdown js-wpml-ls-legacy-dropdown"
                          >
                            <ul>
                              <li
                              
                                tabindex="0"
                                class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-dropdown"
                              >
                                <a
                                  class="js-wpml-ls-item-toggle wpml-ls-item-toggle"
                                  >
                                  
                                  <span
                                    class="wpml-ls-native">ENG</span></a
                                >
    
                                
                                    <a  class="wpml-ls-link"
                                    onClick={()=> setLan('AR')}
                                    >
                                      <span class="wpml-ls-native" lang="ar"
                                      
                                        >العربية</span
                                      ></a
                                    >
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="wishlist-tab d-none">
                          <a href="/en/wishlist/" class="">
                            <i
                              class="far fa-heart"
                              title="Wishlist"
                              aria-hidden="true"
                            ></i>
                            <span class="wishlistCounter count"></span>
                          </a>
                        </li>
                        <li class="phone-tab" data-bs-toggle="tooltip">
                          <a
                            href="javascript:void(0);"
                            class="header_call instant-video-call"
                            ><i class="far fa-video"></i>
                            <span>
                            Instant Video Call
                              <span class="phone-number-dir"></span>
                            </span>
                          </a>
                        </li>
                        <li class="watsapp-tab">
                          <a
                            href="https://wa.link/u9ik8p"
                            target="_blank"
                            class="header_whatsapp"
                          >
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
      )
    }
    </>
  )
  }

export default Header
