import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const MyCarousel = () => {
  return (
<AwesomeSlider className="w-full h-[10rem] md:h-[30rem] lg:h-[23rem] mb-14">
  <img data-src="/banner2.webp" className="h-[10rem] md:h-[15rem]" />
  <img data-src="/banner.jpg" className="h-[10rem] md:h-[15rem]" />
  <img data-src="/banner3.jpg" className="h-[10rem] md:h-[15rem]" />
</AwesomeSlider>



  );
}

export default MyCarousel;
