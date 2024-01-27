import React from 'react'
import styles, { layout } from '../style'
import faq from '../assets/faqs.jpg'

const FAQ = () => {
    return (
        <section id='faq' className={layout.section}>
            <div className={layout.sectionImgReverse}>
                <img src={faq} alt="faq" className=' w-[90%] h[100%] relative z-[5] object-cover rounded-bl-extraLarge rounded-tr-extraLarge' />

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            </div>

            <div className={`${layout.sectionInfo} `}>
                <div className='feedback-card'>
                    <div className=' relative  text-white  rounded-xl m-[15px]'>
                        <input type="checkbox" id='input1' className=' absolute peer opacity-0' />
                        <label htmlFor='input1' className=' font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>How to apply for internships?</label>
                        <div className=' absolute top-[15px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <ion-icon name="arrow-down"></ion-icon>
                        </div>
                        <div className='max-h-0 overflow-hidden  peer-checked:max-h-full' >
                            <p className=' text-white p-[20px]'>To apply for upcoming batch of internship you need to fill the interest form in the specific domain, after that you will directly receive the selection certificate from us if selected.</p>
                        </div>
                    </div>
                </div>

                <div className='feedback-card'>
                    <div className=' relative  text-white  rounded-xl m-[15px]'>
                        <input type="checkbox" id='input2' className=' absolute peer opacity-0' />
                        <label htmlFor='input2' className=' font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'> Who can apply for the internship?</label>
                        <div className=' absolute top-[15px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <ion-icon name="arrow-down"></ion-icon>
                        </div>
                        <div className='max-h-0 overflow-hidden  peer-checked:max-h-full' >
                            <p className=' text-white p-[20px]'> Our internships are open to students and freshers looking to kickstart their careers. Gain valuable industry exposure and earn five certifications to boost your resume.</p>
                        </div>
                    </div>
                </div>

                <div className='feedback-card'>
                    <div className=' relative  text-white  rounded-xl m-[15px]'>
                        <input type="checkbox" id='input3' className=' absolute peer opacity-0' />
                        <label htmlFor='input3' className=' font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'> What products does Nexus offer?</label>
                        <div className=' absolute top-[15px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <ion-icon name="arrow-down"></ion-icon>
                        </div>
                        <div className='max-h-0 overflow-hidden  peer-checked:max-h-full' >
                            <p className=' text-white p-[20px]'> Nexus offers a diverse range of digital solutions, including websites, E-Commerce platforms, educational websites, career-enriching internships, business consulting, and expert design services. Elevate your online presence with our tailored and versatile approach, unlocking growth and success for your business.</p>
                        </div>
                    </div>
                </div>

                <div className='feedback-card'>
                    <div className=' relative  text-white  rounded-xl m-[15px]'>
                        <input type="checkbox" id='input4' className=' absolute peer opacity-0' />
                        <label htmlFor='input4' className=' font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>What are the benefits of the Nexus Internship?</label>
                        <div className=' absolute top-[15px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <ion-icon name="arrow-down"></ion-icon>
                        </div>
                        <div className='max-h-0 overflow-hidden  peer-checked:max-h-full' >
                            <p className=' text-white p-[20px]'> Our internship offers industry exposure and hands-on experience with client-level projects. Stand out as a top performer and you may secure a full-time opportunity at Nexus, kickstarting your professional journey.</p>
                        </div>
                    </div>
                </div>

                <div className='feedback-card'>
                    <div className=' relative  text-white  rounded-xl m-[15px]'>
                        <input type="checkbox" id='input5' className=' absolute peer opacity-0' />
                        <label htmlFor='input5' className=' font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>How does Nexus Info help businesses grow?</label>
                        <div className=' absolute top-[15px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <ion-icon name="arrow-down"></ion-icon>
                        </div>
                        <div className='max-h-0 overflow-hidden  peer-checked:max-h-full' >
                            <p className="text-white p-[20px]"> Websites are powerful tools to generate digital leads and build trust with customers. Nexus is here to guide you in creating a strong online presence that fuels business growth.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FAQ