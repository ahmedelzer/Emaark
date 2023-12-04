import React from 'react';
import { FiX } from 'react-icons/fi';
//link
import { Link } from 'react-router-dom';
const CategoryNavMobile = ({setcatNavMobile,data, lan ,setLan}) => {
  return(
     <div className='w-full h-full bg-[#071C35] p-8 '>
      <div onClick={()=>setcatNavMobile(false)}
       className='flex justify-end mb-8 cursor-pointer'>
        <FiX className='text-3xl text-white'/> 
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category,index)=>{
        return <Link to={`products/${index}`} 
        className=' uppercase font-medium text-white'
      key={category.id} onClick={()=>setcatNavMobile(false)}>{category.titleAR}</Link>
      })}
      {lan==='ENG'?(<div
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
                                  <span class="wpml-ls-native">ENG</span></a
                                >
    
                                <ul class="wpml-ls-sub-menu" >
                                  <li
                                    class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ar"
                                    onClick={()=> setLan('AR')}
                                  >
                                    <a  class="wpml-ls-link">
                                      <span class="wpml-ls-native" lang="ar"
                                        >العربيه</span
                                      ></a
                                    >
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            
                          </div>):
                          (
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
                                  <span class="wpml-ls-native">العربيه</span></a
                                >
    
                                <ul class="wpml-ls-sub-menu" >
                                  <li
                                    class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ar"
                                    onClick={()=> setLan('ENG')}
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
                          )}
      </div>
      </div>
  )
    };

export default CategoryNavMobile;
