import React from 'react';
import CheckSuccess from '../assets/check-success.png'
import IconPlan from '../assets/Free.png'

export default function CardPlan({title,price,features,isSelect}) {
    return (
        <div className={`bg-white rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
            isSelect ? "border-red-500" : "border-gray-300"
          }`}>
            <div className='space-y-5 flex flex-col items-center justify-center'>
                <img src={IconPlan} alt='check' className='h-24 w-24' />
                <h3 className='font-bold'>{title}</h3>
                <div className='space-y-2 '>
                    {features.map((val,index) => {
                        return (
                            <div key={index} className=' flex flex-row space-x-2 items-center mr-2'>
                                <img src={CheckSuccess} alt='' className='w-3 h-2'/>
                                <div>{val}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-8'>
                <div className='text-center mb-3'>{price}</div>
                <button className= 'border rounded-full py-1 px-10 border-red-500'>Select</button>
            </div>
        </div>
        
    )
}