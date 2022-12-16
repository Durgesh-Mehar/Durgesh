// Local Storage
localStorage.setItem("name","Rohan");
localStorage.removeItem("name");

//session Storage
sessionStorage.setItem("name", "Dilip")
sessionStorage.setItem("name", "Ravi")
sessionStorage.setItem("Name", "Ram")
sessionStorage.removeItem("name")

// Cookie 

document.cookie = "name = Ram; expires=" + new Date(9999,0,1).toUTCString();
document.cookie = "name = Dilip; expires=" + new Date(9999,0,1).toUTCString();

console.log(document.cookie)