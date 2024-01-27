import React from 'react'
import styles, { layout } from '../style'
import work from '../assets/Hand Work.gif'

const Services = () => {
    return (
        <section id='services' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Services</h2>
                <p className={`${styles.paragraph} max-w-[500px] mt-5 text-[14px]`}>
                    Step into the digital marketplace with Nexus, where we specialize in creating seamless online shopping experiences that empower your business to thrive.
                    <br /> <br />
                    At <span className='text-gradient'>Nexus</span>, we go beyond design our strategic vision meets actionable plans, providing you with business strategies that pave the way for sustained growth and success. <br /> <br />
                    Additionally, we offer enriching internships, bridging the gap between academic learning and real-world success, to ignite professional growth. Choose Nexus for a comprehensive suite of services that elevate your business across the digital landscape.
                </p>
            </div>

            <div className={layout.sectionImg}>
                <img src={work} alt="img" className=' w-[500px] h-[400px] object-cover rounded-lg' />
            </div>
        </section>
    )
}

export default Services