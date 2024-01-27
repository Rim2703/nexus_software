import React from 'react'
import styles from '../style'
import { internship } from '../constants/index'
import InternshipCard from './InternshipCard'

const Cards = () => {
    return (
        <section id='internships' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className=' absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Internships
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>

                {internship.map((card) => (
                    <InternshipCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Cards