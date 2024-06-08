import React from 'react'

const Text = ({x}) => {
  return (
    <>
      <div className='w-full text-white justify-center flex'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex mt-9 lg:mt-2 gap-3 flex-col'>
                            <div className='flex gap-3 text-start justify-start items-center'>
                                <div className='w-[15px] h-[15px] bg-white rounded-full'></div>
                                <p className='sm:text-2xl text-lg font-[600] font-monst text-white'>{x.name}</p>
                            </div>
                            <div className={`font-monst ${x.className}`}>
                                <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                    {x.details}
                                </p>
                                <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                    {x.detalis2}
                                </p>
                                <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                    {x.details3}
                                </p>
                                <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                    {x.details4}
                                </p>
                             
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Text
