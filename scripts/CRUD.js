import { images, imgSlideshow, selectedImg, imgGallery } from "./gallery.js";

// VARIABLES
let localStorageKey = "Image Gallery";
let photoUploaded;
const savePhoto = document.getElementById("savePhoto")
const modalCRUDCreate = new bootstrap.Modal('#openCRUDModal')
const CRUDForm = document.querySelector("form")
// const CRUDName = document.getElementById("crudName")
// const CRUDSize = document.getElementById("crudSize")
let inputFile = document.querySelector('input[type=file]');
let photoId = images.length;
let gallery = document.querySelector("#gallery")
const slideshowImg = document.getElementById("imgSlideshow")
let myB64;

let results = ""
let option = ""

// Image object
class Photos {
  constructor(name, size, date, id, img) {
    this.name = name;
    this.size = size;
    this.date = date;
    this.id = id;
    this.img = img
  }
}

// DATE
const date = new Date();
let formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();


// EVENTS

savePhoto.addEventListener("click", async () => {
  createPhoto()
  AddFile()

})

function createPhoto() {
  try {
    const myBlob = inputFile.files[0];
    myB64 = blobToBase64(myBlob).then((base64) => {
      photoUploaded = new Photos(myBlob.name, myBlob.size, formatDate, photoId, base64);
      images.push(photoUploaded);
      localStorage.setItem(localStorageKey, JSON.stringify(images))
    });
  } catch (error) {
    console.log(error)
  }
}


function AddFile() {
  try {
    // let photoInfoRetrieved = JSON.stringify(localStorage.getItem(localStorageKey))
    const myBlob = inputFile.files[0];
    myB64 = blobToBase64(myBlob).then((base64) => {

      let imgContainer = document.createElement("div")
      imgContainer.setAttribute("class", "column")
      imgContainer.innerHTML = `<img src="data:image/png;base64,${base64} " alt="${myBlob.name}" data-img-show="${photoId}">`
    });


  } catch (error) {
    console.log(error)
  }
}

function prueba(img) {
  return img
}

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      resolve(reader.result.split(',')[1]);
      // console.log(reader.result)
    };
  });
};



export { }