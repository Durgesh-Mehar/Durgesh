var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById("filter")
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem); 
//Filter Item
filter.addEventListener("keyup",filterItems);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').Value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items 
function filterItems(e){
   // convert text to lowercase
   var text = e.target.value.toLowerCase();
   //Get lis
   var items = itemsList .getElementsByTagName("li");
   //Convert to an Array
   Array.from(items).forEach(function(item){
      var itemName = item.fristChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
         items.style.display = "block"
      }else{
         item.style.display = "none"
      }
   })
}
