const ApiKey = "573936788845952";

const ApiSecretKey = "3D4WQcR225djQ201VtaztuixsZM";

const url = "https://api.cloudinary.com/v1_1/dcatl0oqj/image/upload";

export async function uploadImage(formData) {
  console.log(formData, "==>> formData");
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const { secure_url } = await response.json();

  return secure_url;

  // .then((response) => {
  //   return response.text();
  // })
  // .then((data) => {
  //   document.getElementById("data").innerHTML += data;
  // })
  // .catch((error) => {
  //   console.log(error, "==>> error");
  // });
}
