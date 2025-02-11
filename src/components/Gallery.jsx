import React from "react";
import PropTypes from "prop-types";
import LightGallery from "lightgallery/react/Lightgallery.es5.mjs";
import lgThumbnail from "lightgallery/plugins/thumbnail/lg-thumbnail.es5.mjs";
import lgZoom from "lightgallery/plugins/zoom/lg-zoom.es5.mjs";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

/* js con los array de las galerias. */
import estadio from "../data/albunEstadio";
import senderismo from "../data/albunSendero";

// Función para cargar las imágenes según la categoría
const getImagesByCategory = (category) => {
  switch (category) {
    /* mediante el switch redirijimos al array estadio o senderismo segun la categoria seleccionada */
    case "estadio":
      return estadio;
    case "senderismo":
      return senderismo;

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
          mode: "lg-fade", 
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
