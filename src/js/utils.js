export async function getImageNaturalDimensions(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const image = await createImageBitmap(blob);
    console.log(image, "dßßß");
    return {
      width: image.width,
      height: image.height,
    };
  } catch (error) {
    console.error("Error al obtener las dimensiones de la imagen:", error);
    return { width: 0, height: 0 }; // Devolver dimensiones predeterminadas en caso de error
  }
}
