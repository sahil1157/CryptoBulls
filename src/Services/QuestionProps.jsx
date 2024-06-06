import React, { useState } from 'react';
import '../../src/index.css'

const QuestionProps = () => {

    const ques = [
        {
            number: '1',
            ques: 'What is Crypto Bulls?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'
        },
        {
            number: '2',
            ques: 'How does Crypto Bulls work?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '3',
            ques: 'Is my investment with Crypto Bulls safe?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '4',
            ques: 'What is the minimum investment amount?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '5',
            ques: 'What kind of returns can I expect with Crypto Bulls?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '6',
            ques: 'Can I withdraw my investment before the two years?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '7',
            ques: 'How do I monitor the performance of my investment?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '8',
            ques: 'Are there any fees associated with investing in Crypto Bulls?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '9',
            ques: 'Are Crypto Bulls regulated?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
        {
            number: '10',
            ques: 'What happens to my investment if there are market fluctuations?',
            answer: 'Crypto Bulls is a cryptocurrency investment platform that offers a service for users looking to grow their wealth through cryptocurrency investments.'

        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className='flex flex-col font-body gap-4 font-monst justify-center items-center'>
            {ques.map((x, ind) => (
                <div key={ind} className='lg:w-[480px] xl:w-[560px] h-fit w-full p-2 text-white rounded-xl bg-[#0F101E] border-[1px] border-black'>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex h-fit justify-between gap-5'>
                            <div className='flex w-full flex-row gap-5'>
                                <div>
                                    <div className='gradient-border'>
                                        <p className='text-white text-sm md:text-lg font-bold'>{x.number}</p>
                                    </div>
                                </div>
                                <div className='flex gap- h-full flex-col'>
                                    <p className='font-[500] text-[16px]'>{x.ques}</p>
                                    <div className='md:block hidden'>
                                        {activeIndex === ind && (
                                            <div className='transition-all w-full'>
                                                <p className='text-[14px] text-[#BDBDBD] font-[400]'>{x.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => toggleAnswer(ind)} className='cursor-pointer px-2 h-fit items-center focus:outline-none'>
                                {activeIndex === ind ? (
                                    <p className='text-white font-[700] text-[16px]'>-</p>
                                ) : (
                                    <p className='text-white font-[700] text-[16px]'>+</p>
                                )}
                            </button>
                        </div>
                        <div className='md:hidden block'>
                            {activeIndex === ind && (
                                <div className='transition-all p-2'>
                                    <p className='text-[14px] text-[#BDBDBD] font-[400]'>{x.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuestionProps;
