let myObj = {
    name: "Ram",
    age : 24
};

let myObj_serilizd = JSON.stringify(myObj);
console.log(myObj_serilizd);

localStorage.setItem("myObj", myObj_serilizd)
console.log(localStorage)

let demyObj_serilizd = JSON.parse(localStorage.getItem("myObj"));
console.log(demyObj_serilizd);
