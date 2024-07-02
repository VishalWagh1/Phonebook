// Function to show contacts from localStorage
function showList() {
    let list = localStorage.getItem("phonebook");
    if (list == null) {
        contactObj = [];
    } else {
        contactObj = JSON.parse(list);
    }
    let html = "";
    ContactObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text" style="white-space: break-spaces;"> ${element.contact}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Contact</button>
            </div>
        </div>`;
    });
    let listElm = document.getElementById("phonebook");
    if (ContactObj.length != 0) {
        listElm.innerHTML = html;
    } else {
        listElm.innerHTML = `Nothing to show! Use "Add a contact" section above to add contact.`;
    }
}
