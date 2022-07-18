import { images, imgSlideshow, selectedImg, imgGallery } from "./gallery.js";

// VARIABLES
let localStorageKey = "Image Gallery";
let photoUploaded;
const btnCRUDOpen = document.querySelector("#openCRUDModal");
const savePhoto = document.getElementById("savePhoto")
const modalCRUDCreate = new bootstrap.Modal('#openCRUDModal')
const CRUDForm = document.querySelector("form")
const CRUDName = document.getElementById("crudName")
const CRUDSize = document.getElementById("crudSize")
let inputFile = document.querySelector('input[type=file]');
// const myBlob = inputFile.files[0];
let photoId = images.length;
let gallery = document.querySelector("#gallery")
const slideshowImg = document.getElementById("imgSlideshow")


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
    photoUploaded = new Photos(CRUDName.value, CRUDSize.value, formatDate, photoId);
    images.push(photoUploaded);

    localStorage.setItem(localStorageKey, JSON.stringify(photoUploaded))
  } catch (error) {
    console.log(error)
  }
}

function AddFile() {
  try {
    // let photoInfoRetrieved = JSON.stringify(localStorage.getItem(localStorageKey))
    let imgContainer = document.createElement("div")
    imgContainer.setAttribute("class", "column")
    gallery.append(imgContainer)
    console.log(imgContainer)

    const myBlob = inputFile.files[0];
    const myB64 = blobToBase64(myBlob);
    console.log(myB64)
    let img = document.createElement("img")
    img.src = `data:image/png;base64,${myB64} `
    imgContainer.append(img)
    console.log(myB64)
  } catch (error) {
    console.log(error)
  }
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