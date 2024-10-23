const fs = require("fs");
const path = require("path");

// Ruta de las carpetas de imágenes
const estadioFolder = path.join(
  __dirname,
  "public",
  "GgaleriaAlbunFoto",
  "estadio"
);
const senderismoFolder = path.join(
  __dirname,
  "public",
  "GgaleriaAlbunFoto",
  "senderismo"
);

// Función para leer las imágenes en una carpeta y devolver una matriz de rutas
function getImages(folderPath) {
  const files = fs.readdirSync(folderPath); // Lee el contenido de la carpeta
  const imageFiles = files.filter((file) => {
    // Filtra solo los archivos de imagen (puedes ajustar esto según los tipos de archivos de imagen que tengas)
    return /\.(jpg|jpeg|png|gif)$/i.test(file);
  });
  // Devuelve la ruta completa de cada archivo de imagen
  return imageFiles.map((file) => path.join(folderPath, file));
}

// Obtiene las imágenes de las carpetas y las exporta
module.exports = {
  estadioImages: getImages(estadioFolder),
  senderismoImages: getImages(senderismoFolder),
};
