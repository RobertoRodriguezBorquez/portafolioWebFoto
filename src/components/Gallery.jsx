import React from "react";
import PropTypes from "prop-types";
import LightGallery from "lightgallery/react/Lightgallery.es5.mjs";
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5.mjs';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.es5.mjs';

import 'lightgallery/css/lg-thumbnail.css';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// Función para cargar las imágenes según la categoría
const getImagesByCategory = (category) => {
  switch (category) {
    case "estadio":
      return [
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-16.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-2.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-3.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-4.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-5.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-6.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-7.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-8.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-9.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-10.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-11.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-12.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-13.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-14.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-15.webp",
          alt: "La Ruca",
        },
        {
          src: "/GgaleriaAlbunFoto/estadio/img-estadio-1.webp",
          alt: "La Ruca",
        },
      ];
    case "senderismo":
      return [
        
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-1.webp",
          alt: "Senderismo",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-2.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-3.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-4.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-5.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-6.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-7.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-8.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-9.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-10.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-11.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-12.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-13.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-14.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-15.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-16.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-17.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-18.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-20.webp",
          alt: "Senderismo ",
        },
        {
          src: "/GgaleriaAlbunFoto/senderismo/img-senderismo-21.webp",
          alt: "Senderismo ",
        },
      ];
    default:
      console.warn("Categoría inválida. Galería vacía.");
      return [];
  }
};

export function Gallery({ category }) {
  const images = getImagesByCategory(category);

  const onInit = () => {
    console.log("lightGallery ha sido inicializado");
  };

  return (
    <div className="gallery-container">
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        mobileSettings={{
          controls: false,
          showCloseIcon: true,
          download: false,
          rotate: true,
          mode: 'lg-fade', // Asegúrate de que el modo esté configurado correctamente
          enableSwipe: true, // Habilita el desplazamiento en móviles
          enableDrag: true, // Habilita el arrastre en móviles
        }}
        elementClassNames="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 m-8"
        onInit={onInit} // Se usa el evento onInit para inicializar la galería
      >
        {images.map((image, index) => (
          <a
            href={image.src}
            key={index}
            className="relative block overflow-hidden rounded-xl aspect-square"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img
              alt={image.alt}
              src={image.src}
              className="object-cover rounded-lg w-full h-full"
              style={{
                display: "block",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

Gallery.propTypes = {
  category: PropTypes.string.isRequired, // Validación de tipo para 'category'
};
