const modal =document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


// Modal open function 
const openModal = () => {


    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlauactive")
};
// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
