import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

export function Gallery({ category }) {
  // Lógica para cargar las imágenes según la categoría
  let images;
  if (category === "estadio") {
    // Cargar imágenes del álbum de estadio
    images = [
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-1.jpg",
        alt: "Flag of India",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-2.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-3.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-4.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-5.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-6.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-7.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-8.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-9.jpg",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/estadio/img-estadio-10.jpg",
        alt: "2",
      },
      // Agrega más imágenes aquí según sea necesario
    ];
  } else if (category === "senderismo") {
    // Cargar imágenes del álbum de senderismo
    images = [
      // Agrega las imágenes del álbum de senderismo aquí
      {
        src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-1.webp",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-2.webp",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-3.webp",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-4.webp",
        alt: "2",
      },
      {
        src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-5.webp",
        alt: "2",
      },
    ];
  } else {
    // Manejar caso por defecto o categoría desconocida
    console.warn("Invalid category prop. Using an empty gallery as default.");
    images = [];
  }

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="gallery-container">
      <LightGallery
         plugins={[lgZoom, ]}
         mode="lg-fade"
         pager={false}
         thumbnail={true}
         galleryId={'nature'}
         
         
         mobileSettings={{
           controls: false,
           showCloseIcon: false,
           download: false,
           rotate: false,
         }}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-8"
      >
        {images.map((image, index) => (
          <a href={image.src} key={index} className="relative block overflow-hidden rounded-xl aspect-square" style={{ position: "relative", overflow: "hidden" }}>
            <img
              alt={image.alt}
              src={image.src}
              className="object-cover rounded-lg w-full h-full"
              style={{ display: "block", transition: "transform 0.2s ease-in-out" }}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
