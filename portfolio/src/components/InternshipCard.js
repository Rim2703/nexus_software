
const InternshipCard = ({ content, name, img }) => (

    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img src={img} alt="double_quotes" className="w-[100%] h-[100%] object-contain" />

        <div className="flex flex-row mt-4">
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
                    {name}
                </h4>
            </div>
        </div>

        <p className="font-poppins font-normal text-[12px] leading-[24px] text-dimWhite mt-2">
            {content}
        </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScyww3ggX1gwjbg7TtD8SxijbPa57Jb6zjqE2_En0tDqD6oqg/viewform" target="_blank">
            <button type='button' className={` py-2 w-42 rounded-br-full px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary  outline-none mt-4`}>Apply Now</button>
        </a>
    </div>
);


export default InternshipCard;