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
        {data?.map((category)=>{
        return <Link to={`Department/${category.id}`} 
        title={lan==='AR'?`${category.titleAR}`:`${category.titleEN}`}
        className=' uppercase font-medium text-white'
      key={category.id} onClick={()=>setcatNavMobile(false)}>{lan==='AR'?category.titleAR:category.titleEN}</Link>
      })}
      </div>
      </div>
  )
    };

export default CategoryNavMobile;
