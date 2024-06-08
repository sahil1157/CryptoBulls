import React, { useState } from 'react';
import '../../src/index.css';

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
        <div className='flex flex-col gap-4 lg:pt-[8vh] font-monst justify-center items-center'>
            {ques.map((x, ind) => (
                <div
                    key={ind}
                    onClick={() => toggleAnswer(ind)}
                    className='lg:w-[480px] xl:w-[560px] justify-center w-full items-center h-full md:p-2 text-white rounded-xl bg-[#0F101E] border-[1px] border-black cursor-pointer'
                >
                    <div className='w-full h-full justify-center items-center flex flex-col p-2'>
                        <div className='flex h-[100%] w-full justify-between items-center gap-3'>
                            <div className='flex w-full flex-row gap-5 items-center'>
                                <div>
                                    <div className='gradient-border w-8 h-8 sm:w-[40px] sm:h-[40px] flex items-center justify-center'>
                                        <p className='text-white text-sm md:text-lg font-bold'>{x.number}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center h-full flex-col'>
                                    <p className='font-[500] text-[10px] sm:text-[18px]'>{x.ques}</p>
                                    <div className='md:block hidden'>
                                        {activeIndex === ind && (
                                            <div className='transition-all w-full'>
                                                <p className='text-[14px] text-[#BDBDBD] font-[400]'>{x.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex h-fit px-2'>
                                {activeIndex === ind ? (
                                    <p className='text-white font-[700] text-[16px]'>-</p>
                                ) : (
                                    <p className='text-white font-[700] text-[16px]'>+</p>
                                )}
                            </div>
                        </div>
                        <div className='md:hidden block'>
                            {activeIndex === ind && (
                                <div className='transition-all p-2'>
                                    <p className='text-[10px] text-[#BDBDBD] font-[400]'>{x.answer}</p>
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