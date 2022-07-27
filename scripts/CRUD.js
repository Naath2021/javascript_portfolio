import { images, selectedImg, overlay, imgGallery } from "./gallery.js";


// Variables
let localStorageKey = "Image Gallery";
let photoUploaded;
const savePhoto = document.getElementById("savePhoto");
const inputFile = document.querySelector('input[type=file]');
const photoId = images.length;
let gallery = document.querySelector("#gallery");
let deleteBtn = document.querySelector("#deleteBtn");
let img = gallery.querySelectorAll(".img");
const modalEdit = new bootstrap.Modal(document.getElementById('modalEdit'))
const modalCreate = new bootstrap.Modal(document.getElementById('modalCreate'))
let myB64;

// DATE
const date = new Date();
let formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

localStorage.setItem(localStorageKey, JSON.stringify(images))

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

// Event Delete image
deleteBtn.addEventListener("click", () => {
  deleteFromDOM()
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


// Delete Image From Node Parent "div" 
function deleteFromDOM() {
  try {
    overlay.style.opacity = 0
    overlay.style.visibility = "hidden"

    img[selectedImg].remove()

  } catch (error) {
    console.log(error)
  }
}

// Get and parse object saved in localStorage
function getFromLocalStorage(key) {
  let convertJSONToObj = localStorage.getItem(key)
  return JSON.parse(convertJSONToObj)
}

// Delete img from storage
function deleteFromStorage(key, index) {
  try {
    localStorage.removeItem(index)
    images.splice(index, 1)
    console.log(images)
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



export { Photos, formatDate, localStorageKey }