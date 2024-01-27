import React from 'react'
import styles from '../style'
import img1 from '../assets/img7.jpeg'
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 text-white`}>
                    <span >welcome to</span>
                </div>

                <div className=' flex flow-row justify-between items-center w-full'>
                    <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-gradient'>Nexus &nbsp;
                        <span >software</span>
                    </h1>

                    <div className=' ss:flex hidden md:mr-4 mr-0'>
                     <a href="#internships"><GetStarted /></a>   
                    </div>
                </div>
                <h1 className=' font-poppins font-semibold ss:text-[40px] text-[22px] text-white ss:leading-[100px] leading-[75px] w-full'>
                    Think.Code.Develop
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-3`}> Provide Internship Training Programs that offers Professional Development. These programs offer a range of
                    technical tasks and educational materials, fostering and environment conducive to upskilling students.
                    By offering hands-on experience and comprehensive resources.
                </p>
            </div>

            <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={img1} alt="img" className=' w-[100%] h-[100%] relative z-[5]' />
            </div>
           
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>

        </section>
    )
}

export default Hero