showList();

//if user adds a contact, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let firstName = document.getElementById("addFirstName");
    let lastName = document.getElementById("addLastName");
    let contact = document.getElementById("addContact");
    let contactlist = localStorage.getItem("phonebook");

    if(firstName.value== "" || lastName.value=="" || contact.value=="")

    {
        alert("Please enter Name and Contact");
        return false;
    }

    if (contactlist == null) {
        ContactObj = [];
    } else {
        ContactObj = JSON.parse(contactlist);
    }
    let myObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        contact: contact.value
    }
    
    ContactObj.push(myObj);
    localStorage.setItem("phonebook", JSON.stringify(ContactObj));
    fistName.value= "";
    lastName.value= "";
    contact.value ="";

    showList();
}
);

// Function to show contacts from localStorage
function showList() {
    let list = localStorage.getItem("phonebook");
    if (list == null) {
        ContactObj = [];
    } else {
        ContactObj = JSON.parse(list);
    }
    let html = "";
    ContactObj.forEach(function(element, index) {
        html+=`
        <div class="noteCard  my-2 mx-2 card" style="width: 150rem;">
            <div class="card-body ">
                <div class=" d-flex">
                    <h5 class="card-title  text-left " >${element.firstName}</h5>
                    <span>&nbsp;</span>
                    <h5 class="card-title  text-left " >${element.lastName}</h5>
                    <div  style="padding-left: 750px;">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="showMore()" style="width: 1rem;"></button>
                    </div>
                </div>
                <div id="dropdownContent" class=" mt-3" >
                    <p class="card-text" style="white-space: break-spaces; width: 400px;">${element.contact}</p>
                    <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" style="width:9rem">Delete</button>
                </div>
            </div>
        </div>`;
    });
    let listElm = document.getElementById("phonebook");
    if (ContactObj.length != 0) {
        listElm.innerHTML = html;
    } else{
        listElm.innerHTML = `Nothing to show! Use "Add a contact" section above to add contact.`;
    }
}

//Function to delete a contact
function deleteNote(index) {

let list = localStorage.getItem("phonebook");
if(list == null) {
    ContactObj = [];
} else {
    ContactObj = JSON.parse(list);
}

ContactObj.splice(index, 1);
localStorage.setItem("phonebook", JSON.stringify(ContactObj));
showList();
}

//search in contact list 
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value;

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    })
})

function showMore() {
    var showContent = document.getElementById("dropdownContent");
    if(showContent.style.display==="block"){
        showContent.style.display="none";
    }
    else
    {
        showContent.style.display= "block";
    }
}