import React, { useContext, useState } from 'react'
import "../index.css"
import { CartContext } from '../context/CartContext';
import Advertising from '../assets/Advertising.jpg'
import Commercial from '../assets/Commercial.jpg'
import commers from '../assets/E-commers.jpg'
import Engineering from '../assets/Engineering.jpg'
import Marketing from '../assets/Marketing.jpg'
import Technical from '../assets/Technical.jpg'
import main from '../assets/main.jpg'
import { Link } from 'react-router-dom';

const Menu=[
    {
      titleAR:'التسويق والتطوير العقاري',
      titleEN:'Marketing and Real Estate Investment',
      id: '1',
      img: Marketing
    },
    {
      titleAR:'التصاميم والاستشارات الهندسية',
      titleEN:'Engineering Consulting',
      id: '2'
      ,
      img: Engineering
    },
    {
      titleAR:'الوساطة العامة',
      titleEN:'General Mediation',
      id: '3'
      ,
      img: commers
    },
    {
      titleAR:'الوكلات التجارية',
      titleEN:'Commercial Agencies',
      id: '4',
      img: Commercial
    },
    {
      titleAR:' الدعاية والاعلان',
      titleEN:'Advertising',
      id: '5',
      img: Advertising
    },
    {
      titleAR:'الحلول التقنية',
      titleEN:'Technical Solutions',
      id: '6',
      img: Technical
    }
  ]
function Home() {
  const{lan} =useContext(CartContext);

return (
    <>
    {
        lan==='ENG'?
        (
            <div className=''>
                <img className=' rounded-sm w-full h-[600px]' src={main} alt='Emaark'/>
            <div className=' text-[22px] mt-12 mb-4 px-4'>Unparalleled services</div>
            <div className='px-4 text-[15px]'><p>
            Welcome to Emaark, where we have been keen since 1996 to provide the best services and products in various sectors. What distinguishes us is our strong commitment to providing high-quality customized services and dedication to achieving customer satisfaction. We believe that partnership with our customers is the key to joint success, and all of this requires a harmonious team. We work with a team. Qualified and professional with extensive experience in their fields and always striving for innovation and development.
                </p></div>
                <div class="slider new-promotions-slider row containers mt-5">
                    {
                        Menu.map((item)=>{
                            return (
                                <div class="col-12 col-md-6">
                <div class="new-promotions-block">
                  <div class="row new-promotions-block-content">
                    <div class="col-12 col-lg-12">
                      <Link
                      to={`/Department/${item.id}`}
                      title={item.titleEN}
                      >
                        <img
                        class="w-100 lazyload w-[440px] h-[385px]"
                          src={item.img}
                          alt={item.titleEN}
                          title={item.titleEN}
                        />
                      </Link>
                      <h2 class="text-center">{item.titleEN}</h2>
                      <div className="text-center promotion-btn">
  <Link
    to={`/Department/${item.id}`}
    title={item.titleEN}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
  >
    Try it Now
  </Link>
</div>
                    </div>
                  </div>
                </div>
              </div>
                            )
                        })

                    }
              
              </div>
            </div>
        ):
        (
            <div className=''>
                <img className=' rounded-sm w-full h-[600px]' src={main} alt='اعمارك'/>
            <div className=' text-[22px] my-12 px-4 text-right'>خدمات لا مثيل لها</div>
            <div className='px-4 text-[15px] text-right'><p>
            أهلا بكم في إعمارك حيث نحرص منذ 1996 على تقديم أفضل الخدمات والمنتجات في مختلف القطاعات ما يميزنا هو التزامنا القوي بتقديم خدمات مخصصة عالية الجودة والتفاني في تحقيق رضا العملاء نحن نؤمن بأن الشراكة مع عملائنا هي المفتاح للنجاح المشترك وكل ذلك يتطلب فريق متناغم نحن نعمل مع فريق مؤهل ومحترف يمتلك خبرة واسعة في مجالاتهم ويسعون دائما للابتكار والتطوير.
                </p></div>
                <div class="slider new-promotions-slider row containers mt-5">
                    {
                        Menu.map((item)=>{
                            return (
                                <div class="col-12 col-md-6">
                <div class="new-promotions-block">
                  <div class="row  mb-4">
                    <div class="col-12 col-lg-12">
                      <Link
                      to={`/Department/${item.id}`}
                      title={item.titleAR}
                      >
                        <img
                          class="w-100 lazyload w-[440px] h-[385px]"
                          src={item.img}
                          alt={item.titleAR}
                          title={item.titleAR}
                        />
                      </Link>
                      <h2 class="text-center">{item.titleAR}</h2>
                      <div class="text-center promotion-btn">
                      <Link
                      to={`/Department/${item.id}`}
                      title={item.titleAR}
                      className="bg-blue-500 m-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                      >
                          جربها الان
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            )
                        })

                    }
              
              </div>
            </div>
        )
    }
    </>
    
   
)
}
export default Home
