let listContact = ["Mario Lopez", "Frank Charizard", "Camila Gualjoco", "Sara Jerez"];

function addContact(fullName){
    listContact.push(fullName);
}

function delContact(fullName){
    const indice = listContact.indexOf(fullName)
     if (indice !== -1){
        listContact.splice(indice, 1);
     } else{
        console.log("Ese no esta");
     }
}

function printContact(){
    console.log("Contact List")
     for (let contact of listContact){
        console.log(contact);
     }
}

 addContact("Karen Sein");

 delContact("Mario Lopez");

 printContact();