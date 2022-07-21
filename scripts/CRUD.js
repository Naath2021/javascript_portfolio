import { images,  } from "./gallery.js";

// CRUD stands for Create. Read. Update. Delete. Here you'll se the "C" part of it 


// Variables
let localStorageKey = "Image Gallery";
let photoUploaded;
const savePhoto = document.getElementById("savePhoto")
let inputFile = document.querySelector('input[type=file]');
let photoId = images.length;
let gallery = document.querySelector("#gallery")
let myB64;

// DATE
const date = new Date();
let formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();


// Image constructor
class Photos {
  constructor(name, size, date, id, img) {
    this.name = name;
    this.size = size;
    this.date = date;
    this.id = id;
    this.img = img
  }
}


// Event that triggers the CREATE functions
savePhoto.addEventListener("click", () => {
  createPhoto()
  AddFile()
})  


// Create photo and added to localStorage
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


// Add file to document
function AddFile() {
  try {
    // let photoInfoRetrieved = JSON.stringify(localStorage.getItem(localStorageKey))
    const myBlob = inputFile.files[0];
    myB64 = blobToBase64(myBlob).then((base64) => {

      let imgContainer = document.createElement("div")
      imgContainer.setAttribute("class", "column")
      imgContainer.innerHTML = `<img src="data:image/png;base64,${base64} " alt="${myBlob.name}" data-img-show="${photoId}">`
      gallery.append(imgContainer)
    });


  } catch (error) {
    console.log(error)
  }
}


// Convert Blob (img) to Base64
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



export {Photos, formatDate}