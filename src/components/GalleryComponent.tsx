import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const GalleryComponent = () => {
  const images = [
    { src: '/images/Tournaments/Näyttökuva 2023-8-13 kello 17.29.51.png', width: 610, height: 700, title: 'Virpi ja Anna' },
    { src: '/images/Tournaments/Näyttökuva 2023-8-13 kello 17.29.59.png', width: 674, height: 1064, title: 'Lauri ja Sampo' },
    { src: '/images/Tournaments/Näyttökuva 2023-8-13 kello 17.29.38.png', width: 734, height: 1078, title: 'Antti ja Noel' },
    { src: '/images/Tournaments/Näyttökuva 2023-8-13 kello 17.30.09.png', width: 1044, height: 918, title: 'Tomi/Heini ja Raija/Martti' },
  ];

  return (
    <div>
      <Gallery withCaption>
        <div className="flex flex-wrap gap-5 flex-row">
        {images.map((image, index) => (
          <Item
            key={index}
            original={image.src}
            width={image.width}
            height={image.height}
            caption={image.title}
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                src={image.src}
                alt={image.title}
                className="cursor-pointer h-[300px]"
                onClick={open}
              />
            )}
          </Item>
        ))}
        </div>
      </Gallery>
    </div>
  );
};

export default GalleryComponent;
