import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.thumbnail}
            title=""
            alt=""
            className="thumbnail"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{ width: "150px", margin: "10px", cursor: "pointer" }}
          />
        ))}
      </div>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        plugins={[Captions]}
        slides={images.map((img) => ({
          src: img.full,
          title: img.title,
          description: img.description,
        }))}
      />
    </>
  );
};

export default ImageGallery;
