import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'
import SectionTitle from '../Components/SectionTItles/SectionTitle';
const Category = () => {
    return (
        <section>

            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"Order Online"}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
               // loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mb-24 auto"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className="text-4xl uppercase text-center -mt-16 text-white">dessert</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;