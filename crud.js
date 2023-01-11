function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const obj = {
        name,
        email
    }
    
    axios.post("https://crudcrud.com/api/57d33382265c4203874b69f3e756c450/appointmentData",obj)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const data=axios.get("https://crudcrud.com/api/57d33382265c4203874b69f3e756c450/appointmentData")
    .then((response)=>{
        console.log(response)
        
        for(var i=0;i<response.length;i++){
            showNewUserOnScreen(response.data)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(data)
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
   
   

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
}

//Edit User

function editUserDetails(email, name){

    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
   
      deleteUser(email)
 }

// deleteUser('abc@gmail.com')

function deleteUser(Id){
    
                removeUserFromScreen(Id);
            }
            function removeUserFromScreen(Id){
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(Id);

                
                if(childNodeToBeDeleted) {
                    axios.delete(`https://crudcrud.com/api/57d33382265c4203874b69f3e756c450/appointmentData/${Id}`)
                    .then(removeFromScreen(Id))
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            }
            function removeFromScreen(Id){
                
                let parent = document.getElementById("listOfUsers");
                let toBeRemove = document.getElementById(Id);
                
                parent.removeChild(toBeRemove);
            }