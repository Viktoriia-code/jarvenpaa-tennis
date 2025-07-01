import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { galleryImage } from '../types/galleryImage';

const GalleryComponent = ({ images }: { images: galleryImage[] }) => {
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
