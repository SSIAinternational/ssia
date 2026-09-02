const inputPhoto = document.getElementById("photo");
const previewImg = document.getElementById("preview-img");

inputPhoto.addEventListener("change", () => {
  if (inputPhoto.files && inputPhoto.files[0]) {
    previewImg.src = URL.createObjectURL(inputPhoto.files[0]);
  }
});
