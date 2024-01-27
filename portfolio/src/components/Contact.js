import React, { useState } from 'react'
import contact from '../assets/contact.jpg'
import styles, { layout } from '../style'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            // Set the form data back to the initial state
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });

        } catch (error) {
            console.error('Error submitting contact form:', error);
        }
    };

    return (
        <section id='contact' className={layout.section}>
            <div className={layout.sectionImgReverse}>
                <img src={contact} alt="contact" className=' w-[600px] h-[100%] relative z-[5]' />
            </div>

            <div className={layout.sectionInfo}>
                <div className=' absolute w-40 h-40 bg-blue-gradient rounded-full z-0 right-28 animate-ping' />
                <div className='mt-5 relative z-10'>
                    <form className=' flex flex-col space-y-4' onSubmit={handleSubmit}>
                        <div className=' flex justify-between'>
                            <input type="text" placeholder='First Name' className=' ring-1 ring-gray-300 w-full rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-teal-200 mr-3'
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required />

                            <input type="text" placeholder='Last Name' className=' ring-1 ring-gray-300 w-full rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-teal-200'
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required />
                        </div>

                        <div>
                            <input type="email" placeholder='Email' className=' ring-1 ring-gray-300 w-full rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-teal-200'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                        </div>

                        <div>
                            <textarea rows={4} placeholder='Message' className=' ring-1 ring-gray-300 w-full rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-teal-200'
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type='submit' className=' inline-block self-end bg-blue-gradient font-poppins font-medium text-primary  outline-none rounded-lg px-6 py-2 uppercase text-sm'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact