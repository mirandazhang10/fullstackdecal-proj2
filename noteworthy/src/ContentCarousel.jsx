import flyer1 from './assets/imgs/promo/WelcomeBackSp2024.png'
import flyer2 from './assets/imgs/promo/NWShowFlyerF23.png'
import flyer3 from './assets/imgs/promo/RoadHeistBankTrip.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ContentCarousel() {
  return (
    <Carousel width="300px" autoPlay="true" interval="10000" infiniteLoop="true">
      <div>
        <img 
            src={flyer1}
        />
      </div>
      <div>
        <img 
            src={flyer2}
        />
      </div>
      <div>
        <img 
            src={flyer3}
        />
      </div>
    </Carousel>
  );
}

export default ContentCarousel;