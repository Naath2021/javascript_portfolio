import { images, selectedImg, overlay } from "./gallery.js";


// Variables
let localStorageKey = "Image Gallery";
let photoUploaded;
const savePhoto = document.getElementById("savePhoto");
const inputFile = document.querySelector('input[type=file]');
const photoId = images.length;
let gallery = document.querySelector("#gallery");
let deleteBtn = document.querySelector("#deleteBtn");
let img = document.getElementsByClassName("img")
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
  deleteFromStorage(localStorageKey, selectedImg)
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
    let imgToDelete = images.find(photo => {
      return photo.id == selectedImg
    })
    if (imgToDelete.id === selectedImg) {
      overlay.style.opacity = 0
      overlay.style.visibility = "hidden"
      img[imgToDelete.id].remove()
    }
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


// Sweet Alert2
// const sweetAlertSimple = (title, text, icon) => {
//   Swal.fire({
//     title: title,
//     text: text,
//     icon: icon,
//     showClass: {
//       popup: 'animate__animated animate__zoomIn'
//     },
//     hideClass: {
//       popup: 'animate__animated animate__lightSpeedOutRight'
//     }
//   })
// }

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