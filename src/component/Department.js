import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Advertising from '../assets/Advertising.jpg'
import Commercial from '../assets/Commercial.jpg'
import commers from '../assets/E-commers.jpg'
import Engineering from '../assets/Engineering.jpg'
import Marketing from '../assets/Marketing.jpg'
import Technical from '../assets/Technical.jpg'
import { CartContext } from '../context/CartContext'
const Data=[
    {
      titleAR:'التسويق والتطوير العقاري',
      titleEN:'Marketing and Real Estate Investment',
      pro: [{title:'Buying and selling real estate',
      description: 'Emaarak is a leading company in buying and selling all types of real estate with its innovative methods and services and extending its experience from the year of establishment in 1996 to today. We provide support in the buying and selling of various properties, discuss all available offers, ensure the integrity of contracts, and secure the deal effectively, in the event that the customer wishes to reinvest the property. We also offer all available options'
    },
    {title:'Real estate rental department',
      description:' Most real estate companies avoid working with rent because it is complicated and thorny, but this matter differs with Emaarak because it has all the qualifications and experience to work in the field of real estate rental, and we also have a work program that was designed specifically for this purpose. Therefore, we excel in this real estate specialty and we own huge numbers of properties, whether residential or commercial. Or industrial. What also distinguishes us is that we are the only ones who have leased agricultural properties'
},
{title:'Real estate management',
      description:'Emaarak seeks to be the first in Iraq in managing various properties and has a clear strategy and is literally the best among companies in terms of the number and types of services provided, as it suits all properties and customer requirements, including providing a detailed monthly report on the population in the case of a residential property, and in the case of a commercial property it also provides a monthly report on Commercial activity in two details It also provides several reports on surrounding rental prices, problems and maintenance, and the prices of similar and nearby properties Proposing expansion and development if there is an available real estate opportunity, providing a quick rental service and collecting dues from the lessors on time, working to manage the risks that may encounter the property in the long term, and also providing annual suggestions for reinvesting the property that are better in terms of return and service life of the property.'
},
{title:'Reviving real estate',
      description: 'The term may be strange, but this term was invented by Emaarak, and it includes abandoned or essentially uninvested properties, such as commercial, residential, agricultural plots, or abandoned buildings alike. The reasons are due to the owner’s lack of full time, his weak financial resources, or limited investment thinking. We have all solutions, starting from financial financing to... Restoration in exchange for rent, investment consultations, or bringing in investors. All of these solutions and more can be found in one place, Emaarak.'
},
{title:'Study and analyze the real estate market',
      description:'Emaarak is the leader in analyzing the real estate market. Analysis is one of our procedures through which we aim to understand and evaluate the state of the real estate market in a specific area to provide a clear vision to investors. The analyzes are based on actual market prices, accurate numbers, patterns of demand and supply, and economic and political factors that affect the market. We provide our clients with... Each analysis process has a special folder on future expectations issued exclusively by Emaark regarding population growth and the expected expansion of cities according to data from government departments and major investors and according to our experiences extending since 1996.'
},
{title:'Special real estate services',
      description:' All the real estate services that are provided in the world may not meet the requirements of a customer or a specific property in a special case. Therefore, we have allocated a special department in Emaarak that provides special and distinguished real estate services so that it is treated as a unique case, and special guidance and support are provided and the special obstacles that our clients may face are overcome.'
}
      ],
      proAR: [{title:'بيع وشراء العقارات',
      description:' إعمارك هي شركة رائده في بيع وشراء كافة أنواع العقارات بطرقها المبتكرة وخدماتها وامتداد خبراتها من سنة التأسيس ١٩٩٦ إلى اليوم حيث نوفر المساندة في عمليات بيع وشراء العقارات المختلفة ومناقشة جميع العروض المتاحة والتأكد من سلامة العقود وتأمين الصفقة بشكل فعال وفي حال رغب الزبون في إعادة استثمار العقار نحن أيضا نقدم كافة الخيارات المتاحة تتجنب معظم الشركات العقارية العمل بالإيجار لكونه معقد وشائك ولكن هذا الأمر يختلف مع إعمارك لكونها تمتلك جميع المؤهلات والخبرات للعمل في مجال إيجار العقارات وأيضا نمتلك برنامج عمل تم تصميمه خصيصا لهذا الغرض لذلك أنا نبرع في هذا التخصص العقاري ونمتلك أعدادا هائلة من العقارات سواء كانت سكنية تجارية أو صناعية وما يميزنا أيضا أننا الوحيدون لدينا عقارات زراعية مستأجرة'
    },
    {title:'إدارة العقارات',
      description:' إعمارك تسعى لتكون الأولى على مستوى العراق في إدارة العقارات المختلفة ولديها استراتيجية واضحة وهي الأفضل بين الشركات حرفيا من ناحية عدد وأنواع الخدمات المقدمة حيث تناسب جميع العقارات ومتطلبات العملاء بضمنها تقدم تقرير شهري مفصل عن السكان في حال العقار سكني وفي حالة تجاري تقدم تقرير شهري أيضا عن النشاط التجاري بشكل تفصلين وتقدم أيضا عده تقارير عن أسعار الايجارات المحيطة وعن المشاكل والصيانة وعن اسعار العقارات المشابهة والقريبة واقتراح التوسيع والتطوير في حالة وجود فرصة عقارية متاحه وتقدم خدمة الايجار السريع واستحصال المستحقات من المؤجرين في الوقت المحدد وتعمل على إدارة المخاطر التي قد تصادف العقار على المدى الطويل وايضا تقدم اقتراحات سنوية في اعادة استثمار العقار تكون افضل من ناحية العائد والعمر الخدمي للعقار'
},
{title:'احياء العقارات',
      description:' قد يكون المصطلح غريبا لكن هذا المصطلح من ابتكار إعمارك وهو يتضمن العقارات المتروكة او الغير مستثمره أساسا كالقطع التجارية السكنية الزراعية او البنايات المهجورة على حد سواء وترجع الاسباب الى عدم تفرغ المالك او ضعف موارده الماليه او محدودية الفكر الاستثماري ولدينا كل الحلول ابتداء من التمويل المالي الى اعادة الترميم مقابل الايجار او الاستشارات الاستثمارية او جلب مستثمري كل هذا الحلول واكثر تجدونها في مكان واحد إعمارك'
},
{title:'دراسة وتحليل السوق العقاري',
      description:'إعمارك هي الرائدة في تحليل السوق العقاري والتحليل هو احد اجرائاتنا ونهدف من خلاله الى فهما وتقييم حالة سوق العقارات في منطقة معينة لتقديم رؤية واضحة الى المستثمرين تستند التحليلات الى اسعار السوق الفعلية وبالارقام الدقيقة وأنماط الطلب والعرض، والعوامل الاقتصادية والسياسية التي تؤثر على السوق ونرفق لعملائنا في كل عملية تحليل مجلد خاص بالتوقعات المستقبلية الصادر حصرا من إعمارك بالنمو السكاني والتمدد المتوقع للمدن وفق المعطيات من دوائر الحكومة والمستثمرين الكبار ووفق خبراتنا الممتدة من عام ١٩٩٦'
},
{title:'الخدمات العقارية الخاصة',
      description:'كل ما يتم تقديمة في العالم من خدمات عقارية من الممكن ان لا تلبي متطلبات زبون او عقارا معينا بحالة خاصة لذلك خصصنا قسما خاصا في إعمارك يقدم خدمات عقارية خاصة ومميزه بحيث يتم التعامل معه كحالة فريده ويتم تقديم الارشادات والاسناد الخاص وتجاوز العقبات الخاصة التي قد تواجه عملاؤنا'
},
      ],
      id: '1',
      image: Marketing
    },
    
    {
      titleAR:'التصاميم والاستشارات الهندسية',
      titleEN:'Engineering Consulting',
      pro: [{title:'Design',
      description: 'Emaark provides all design services in an integrated manner and details all its electrical and mechanical related matters, whether it is the interior design represented by cutting and divisions, the selection and distribution of furniture, or the external design represented by the facades, corridors, and external and internal gardens.All of these services are provided to you by Emaarak in the design department with high precision and a futuristic vision that suits your desires'
    },
    {title:'Implementation',
      description:'Emaark is distinguished by its high-level engineering and technical staff, who often possess the highest scientific skills in various specializations related to the implementation of various projects, starting from homes, commercial and residential projects, ending with cities according to the plans, which in turn also audit and amend in the event of possible errors in the plans before the beginning of the implementation phase. Actual and is keen to implement projects with utmost precision and only the required engineering designs'
},
{title:'Supervision',
      description:'Supervision is the final essential touch in order to complete projects with the best quality standards and international specifications. Therefore, Emaarak is interested in this part and thus has provided all its capabilities in gathering a distinguished and integrated work team in supervision that possesses cumulative expertise and practical experiences because the supervision stage is a realistic stage.'
},
{title:'Managing huge projects',
      description: 'It is not possible to advance and accomplish huge work with a weak manager. Emaarak fully believes in leaders and has joint work contracts with project managers at different levels. We start with managers who have a professor’s degree in the specialty with 40 years of practical experience, going down to managers at the beginning of their careers who possess the highest administrative capabilities and academic qualifications in the field. Their professional stage, where we allocate the required work team to each project, and thus I actually put the right person in the right place and at the right time as well.'
},
{title:'Structural analysis and design for mega projects',
      description:'There are special languages ​​that only a few master, including the language of structural analysis and design, which is the language of precise numbers, data, and fixed outputs. Emaarak’s engineers are not only fluent in this language, but also master it and are in harmony with it.They have extensive experience and international certificates in this precise field. We have a proven track record and great achievements, and our previous projects are living evidence.'
},
{title:'Study of projects',
      description:'Studying the projects presented by Emaar is an important step in the process of planning and implementing any project. The project study aims to analyze the feasibility and success of the proposed project before starting its implementation. This study includes many important aspects that must be taken into consideration, including defining the project objectives and the extent to which they can be achieved, market analysis, cost and return study, potential risk study, time planning and resources. The study is prepared. In order to estimate the feasibility of the project and determine whether it is worth investing or not, as this can reduce risks, improve decisions, and increase the chances of success. Therefore, the project study is an important tool for business owners to evaluate and analyze the project before embarking on its implementation, and to build a strong business plan to achieve success and achieve the desired goals. Thus, we provide a clear, realistic vision for the beneficiaries'
}
      ],
      proAR: [{title:'التصميم',
      description:'  تقدم إعمارك جميع خدمات التصميم وبشكل متكامل وتفصيل جميع متعلقاتها الكهربائية والميكانيكية سواء كان التصميم الداخلي المتمثل بالتقطيع والتقسيمات أو اختيار وتوزيع الأثاث أو التصميم الخارجي المتمثل بالواجهات والممرات والحدائق الخارجية والداخلية كل هذه الخدمات تقدمها لكم إعمارك في قسم التصميم بدقة عالية ورؤية مستقبلة تناسب رغباتكم'
    },
    {title:'التنفيذ ',
      description:' تتميز إعمارك بكوادرها الهندسية والفنية رفيعة المستوى التي غالبا ما تكون تمتلك أعلى المهارات العلمية في مختلف الاختصاصات المتعلقة في تنفيذ المشاريع المختلفة ابتداء من المنازل والمشاريع التجارية والسكنية انتهاء بالمدن وفق المخططات والتي بدورها أيضا تقوم بالتدقيق والتعديل في حال وجود أخطاء محتملة في المخططات قبل بداية مرحلة التنفيذ الفعلي وتحرص على تنفيذ المشاريع بدقة متناهية وفقط التصاميم الهندسية المطلوبة'
},
{title:'الإشراف',
      description:' إن الإشراف هو اللمسة الجوهرية الأخيرة من أجل إنجاز المشاريع بأفضل معايير الجودة والمحددات العالمية لذلك تهتم إعمارك بهذا الجزء وبذلك وفرت كل إمكانياتها في جمع فريق عمل مميز ومتكامل في الإشراف يمتلك خبرات تراكمية وتجارب عملية لكون مرحلة الإشراف هي مرحلة واقعية'
},
{title:'إدارة المشاريع الضخمة',
      description:'لا يمكن التقدم وإنجاز عمل ضخم بمدير ضعيف أن إعمارك مؤمنة تماما بالقادة ولديها عقود عمل مشترك مع مديري مشاريع بمستويات مختلفة حيت نبدا بمديرين يمتلكون شهادة بروفيسور في الاختصاص مع خبرة عملية ٤٠ سنة نزول الى مديرين في بداية حياتهم المهنية الذين يمتلكون اعلى القدرات الادارية والمؤهلات العلمية في مرحلتهم المهنيه حيث نخصص لكل مشروع فريق العمل المطلوب وبذلك أنا فعليا نضع الشخص المناسب في المكان المناسب وفي التوقيت المناسب ايضا٥- تحليل وتصميم انشائي للمشاريع الضخمة: هناك لغات خاصة لا يتقنها الا قليلون من ضمنها لغة التحليل والتصميم الانشائي هي لغة الارقام الدقيقة والمعطيات والمخرجات الثابتة مهندسو إعمارك لا يجيدون هذا اللغه فحسب انما يتقنونها ومتناغمين معهاانهم يمتلكون خبرات واسعة وشهادات عالمية في هذا المجال الدقيق واننا نمتلك سجلا حافلا وإنجازات كبيرة ومشاريعنا السابقة شواهد حية'
},
{title:'دراسة المشاريع',
      description:' دراسة المشاريع المقدمة من إعمارك تعتبر خطوة مهمة في عملية تخطيط وتنفيذ أي مشروع. تهدف دراسة المشروع إلى تحليل مدى جدوى ونجاح المشروع المقترح قبل بدء تنفيذه تشمل هذه الدراسة العديد من الجوانب المهمة التي يجب أخذها في الاعتبار ومنها تحديد أهداف المشروع ومدى إمكانية تحقيقها، تحليل السوق دراسة التكاليف والعائدات، دراسة المخاطر المحتملة، التخطيط الزمني والموارد، يتم إعداد الدراسة من أجل تقدير جدوى المشروع وتحديد ما إذا كان يستحق الاستثمار أم لا حيث بذلك يمكن تقليل المخاطر وتحسين القرارات وزيادة فرص النجاح. لذا تعد دراسة المشروع أداة مهمة لمالكي الأعمال لتقييم وتحليل المشروع قبل الشروع في تنفيذه، وبناء خطة عمل قوية لتحقيق النجاح وتحقيق الأهداف المرجوة. وبذلك نقدم رؤية واقعية واضحة المعالم للجهات المستفيدة'
},
      ],
      id: '2',
      image: Engineering
    },
    {
      titleAR:'الوساطة العامة',
      titleEN:'General Mediation',
      pro: [{title:'Public transportation sector',
      description: ' Transportation services are the main part of international companies in achieving their vital operations and meeting basic customers. Therefore, Emaarak has made its mark in this field, providing land, sea, air, and express mail services as well, as it begins with planning, coordination, and ensuring the proper organization of transportation, storage, and distribution at the main time to reduce costs. Expanding its scope, transportation services and services facilitate the corporate chain of companies for greater success and excellence in their field'
    },
    {title:'General trade sector',
      description:'The trade sector is a large proportion of the economy and Emaarak is aware of the importance of this market, so it owns a wide range of companies and company brands. It also focuses on importing, which includes importing various goods of various types that are distinctive to them in the local area. It can also prepare all the requirements of investment projects for industrial construction and various service projects. Including construction materials'
},
{title:'Labor sector',
      description:'Simply put, all economic nights depend on the labor force, which is the first and last driver of the economic magazine. Through these indicators, Emaarak focused on this saddle, as it signed with a wide range of local and foreign talents and deactivated manual work in various fields, including the delicate fields that require skill and experience. High, as we seek to provide specialized labor cadres in several fields and accomplish a number of efforts in searching for expertise in searching for the basic determinants of quality.'
},
{title:'Heavy machinery sector',
      description: 'We have often explained in projects that it is a reason for development, and again, the lack of capabilities required for Emaarak has saved effort in this aspect, as it owns a large corner of various major companies such as vehicles, bulldozers, patents, various models, construction equipment, etc.... It is still independent of freedom. We do not provide all offers, whether rent, purchase, or specifying a percentage of the work. Using effective and modern means helps increase the number, and reduces the time and human effort required, to ensure the efficiency and continuity of work.'
},
{title:'Various services sector',
      description:' Special services vary and multiply according to customer requirements. Emaarak is adept at meeting special requests in various fields, and has wide-ranging local and regional partnerships in various fields. Therefore, the private services sector works with high efficiency for customers’ rapid and changing demands and new challenges, as we provide a wide range of services, whether services Accounting, independent, financial and management consulting Marketing and advertising, insurance, general maintenance, government follow-up, hosting events, health care, innovative scientific research, training and skills updating services. We do not just provide a service, but rather choose the best for the most appropriate and the best among all proposals.'
}
      ],
      proAR: [{title:'قطاع النقل العام',
      description:' تعتبر خدمات النقل والخدمات اللوجستية حاسمة للشركات العالمية في تحقيق كفاءة عملياتها وتلبية احتياجات العملاء لذلك وضعت إعمارك بصمتها في هذا المجال الحيوي حيت تقدم خدمات النقل البري، البحري، الجوي، والبريد السريع أيضا حيث نبدأ بالتخطيط والتنسيق لضمان العمليات فالتنظيم السليم للنقل والتخزين والتوزيع بالوقت المحدد يؤدي إلى تقليل التكاليف وزيادة الكفاءة وبالتالي، فإن خدمات النقل والخدمات اللوجستية تسهل سلسلة العمليات للشركات لتحقيق المزيد من النجاح والتميز في مجالها'
    },
    {title:'قطاع التجاره العامة ',
      description:'يشكل قطاع التجارة نسبة كبيرة في الاقتصاد وإعمارك مدركة أهمية هذا القطاع لذلك تمتلك مجموعة واسعة من الشركات والعلامات التجارية داخل الشركة وركزت أيضا على الاستيراد والذي يشمل استيراد البضائع والمنتجات المتنوعة من مختلف البلدان وتوزيعها في السوق المحلية وتقوم أيضا بتجهيز كافة متطلبات المشاريع الاستثمارية والشركات الصناعية والمشاريع الخدمية المختلفة بما في ذلك المواد الإنشائية'
},
{title:'قطاع اليد العاملة',
      description:'ببساطة تعتمد جميع القطاعات الاقتصادية على اليد العاملة وهي المحرك الأول والأخير للعجلة الاقتصادية ومن خلال هذا المعطيات ركزت إعمارك على هذا القطاع حيث تم التوقيع مع مجموعة واسعة من الكوادر المحلية والأجنبية والشركات المختصة في توفير اليد العاملة في مختلف المجالات بما فيها المجالات الدقيقة التي تحتاج إلى مهارة وخبرة عالية حيث استطعنا تقديم كوادر عمالة متخصصة في عدة مجالات وتم إنجاز عده مشاريع في الوقت المحدد وفق محددات الجود المطلوبة'
},
{title:'قطاع الاليات الثقيلة',
      description:'غالبا التلكؤ الحاصل في المشاريع يكون سبب التمويل المالي ومن زاوية أخرى عدم توفر الآليات اللازمة إعمارك وفرت الجهد في هذا الجانب حيث تمتلك عددا كبيرا من الآليات والمعدات الثقيلة والمتوسطة المختلفة كالمركبات والجرافات الحفارات الرافعات العادلات المتنوعة قوالب ومعدات البناء إلى اخر... وتكون الأجور حسب التفاوض نوفر جميع العروض سواء الإيجار، الشراء أو احتساب نسبة من العمل يساعد استخدام الآليات المناسبة والحديثة على زيادة الإنتاجية، وتقليل الوقت والجهد البشري المطلوب، وتحسين كفاءة واستمرارية العمل'
},
{title:'قطاع الخدمات المختلفه ',
      description:'تتنوع وتتعدد الخدمات الخاصة حسب متطلبات العملاء أن إعمارك بارعة في تلبية الطلبات الخاصة في مختلف المجالات لكونها تمتلك شراكات محلية وإقليمية واسعة النطاق في مختلف المجالات يتطلب قطاع الخدمات الخاصة مرونة وكفاءة عالية لتلبية متطلبات العملاء السريعة والمتغيرة والتحديات الجديدة حيث نقدم مجموعة واسعة من الخدمات سواء كانت خدمات محاسبية، قانونية، استشارات مالية وإدارية، التسويق والإعلان، التأمين، الصيانة العامة، المتابعة الحكومية، الاستضافة والفعاليات، الرعاية الصحية، الخدمات البيئية الأبحاث والتطوير، خدمات التدريب وتحديث المهارات نحن لا نوفر فقط الخدمة إنما نختار لعملائنا لأنسب والأفضل بين جميع العروض'
},
      ],
      id: '3',
      image: Technical
    },
    {
      titleAR:'الوكلات التجارية',
      titleEN:'Commercial Agencies',
      
      id: '4',
      image: Commercial
    },
    {
      titleAR:' الدعاية والاعلان',
      titleEN:'Advertising',
      id: '5',
      image: Advertising
    },
    {
      titleAR:'الحلول التقنية',
      titleEN:'Technical Solutions',
      id: '6',
      image: Technical
    }
  ]

function Department() {
    const { id } =useParams();
    const{lan} =useContext(CartContext);
    const Department= Data.filter(e=> e.id===id);
    console.log(Department)
  return (
    <div>
      {
        lan==='ENG'?
        (
          Department.map((item)=>{
            return <div className=' my-4 containers'>
                  <h2 className=' text-center  my-4'>{item.titleEN}</h2>
                  {
                        item?.pro?.map((i)=> {
                              return <div className=' text-center mt-4'>
                                    <div className='mt-4'><h3 className=' text-center'>{i.title}</h3></div>
                                    <div className='text-center px-3'><p>{i.description}</p></div>
                                    
                                    <div className='mt-30px text-center'>
  <img src={item.image} className='mx-auto max-h-[900px]' alt={item.titleEN} />
  <div className='p-0 mt-4 bg-transparent border-t-0 rounded-sm flex items-center justify-center'>
  <a href='#' className='w-[200px] block border border-[#232323] rounded-sm bg-[#fff] text-[#232323] text-12px font-bold px-15px py-13px uppercase m-0 text-center transition duration-300 hover:bg-[#071C35] hover:text-[#fff]'>
    Contact Us
  </a>
</div>

</div>

                              </div>
                        })
                  }
                  </div>
          })
        ):
        (
            Department.map((item)=>{
                  return <div className=' my-4 containers'>
                        <h2 className=' text-center  my-4'>{item.titleAR}</h2>
                        {
                              item?.proAR?.map((i)=> {
                                    return <div className=' text-center mt-4'>
                                          <div className='mt-4'><h3 className=' text-center'>{i.title}</h3></div>
                                          <div className='text-center px-3 text-[16px]'><p>{i.description}</p></div>
                                          
                                          <div className='mt-30px text-center'>
        <img src={item.image} className='mx-auto max-h-[900px]' alt={item.titleAR} />
        <div className='p-0 mt-4 bg-transparent border-t-0 rounded-sm flex items-center justify-center'>
        <a href='#' className='w-[200px] block border border-[#232323] rounded-sm bg-[#fff] text-[#232323] text-12px font-bold px-15px py-13px uppercase m-0 text-center transition duration-300 hover:bg-[#071C35] hover:text-[#fff]'>
          تواصل معنا
        </a>
      </div>
      
      </div>
      
                                    </div>
                              })
                        }
                        </div>
                })
        )
      }
    </div>
    
    
  )
}

export default Department