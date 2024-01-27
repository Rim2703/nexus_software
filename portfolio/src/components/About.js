import styles, { layout } from '../style'
import React from 'react'
import img1 from '../assets/img12.png'
import Button from './Button'

const About = () => {
    return (
        <section id='about' className={layout.section}>
            <div className={layout.sectionInfo}>
                <img src={img1} alt="" className=' w-[600px] h-[100%] relative z-[5]' />
            </div>

            <div className={`flex flex-row p-6 rounded-[20px]  "mb-6"  feature-card`}>
                <div className="flex-1 flex flex-col ml-3">
                    <h2 className={styles.heading2}>
                        We design success, <br className="sm:block hidden" /> for your future.
                    </h2>

                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        We provide dedicated training programs for Internship and comprehensive technical training
                        and support to young minds and aspiring professionals.  <br />
                        Through meticulously curated learning materials and  hands-on internships, we strive to equip
                        individuals with the necessary skills and knowledge to excel in  today's competitive job market.
                    </p>

                    <Button styles={`mt-7`} />
                </div>
            </div>
        </section>
    )
}

export default About