import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { YouTubeEmbed } from 'react-social-media-embed';

function ContentCarousel() {
  const videos = [
    "https://youtu.be/n0p8MxT8AxI?si=0KKiDw4bvLQhWRxy", 
    "https://youtu.be/kW57PpibCMA?si=MNk7ZalB8x-n5l-A", 
    "https://youtu.be/X6Js9Wznqy0?si=VBsmWDpTwZ42yc8y"
  ];

  return (
    <Carousel infiniteLoop="true">
      {videos.map(videoId => (
          <div key={videoId}>
            <YouTubeEmbed url={videoId} height={600} />
          </div>
      ))}
    </Carousel>
  );
}

export default ContentCarousel;