let listContact = [
  {
    id: "5",
    nombre: "Lolo",
    apellido: "Perez",
    telefono: "5555555",
    ubicaciones: {
      ciudad: "trulalalan",
      direccion: "Barrio Tusna",
    },
  },
  {
    id: "6",
    nombre: "Po",
    apellido: "Tubbie",
    telefono: "66666",
    ubicaciones: {
      ciudad: "El Mas alla",
      direccion: "Al lado de gargantua",
    },
  },
];

const menu = () => {
  while (true) {
    let opt = prompt(
      "Que desea hacer? 1. Agregar, 2. Borrar, 3. Editar, 4. Mostrar, 5. Salir"
    );

    switch (opt) {
      case "1":
        addContact();
        break;

      case "2":
        delContact();
        break;

      case "3":
        editContact();
        break;

      case "4":
        printContact();
        break;

      // case "5":
      //   default:
    }
  }
};

function addContact() {
  let id = prompt("DNI: ");
  let nombre = prompt("Nombre: ");
  let apellido = prompt("Apellido: ");
  let telefono = prompt("Telefono: ");
  let ciudad = prompt("Ciudad: ");
  let direccion = prompt("Direccion: ");
  let ex = "";
  for (var i = 0; i < listContact.length; i++) {
    if (id == listContact[i].id) {
      ex = "si";
      break;
    } else {
      ex = "no";
    }
  }
  if (ex == "si") {
    alert("El wey ya existe nmms");
  } else {
    let obj = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      ubicaciones: {
        ciudad: ciudad,
        direccion: direccion,

        // "id": id,
        // "nombre": nombre,
        // "apellido": apellido,
        // "telefono": telefono,
        // "ubicaciones": {
        //   "ciudad": ciudad,
        //   "direccion": direccion,
      },
    };
    listContact.push(obj);
    listContact.sort();
    alert("Se agrego bien");
    console.log(listContact);
  }
}

function delContact() {
  listContact.sort();
  let id = prompt("DNI del contacto que desea borrar: ");
  let ex = "";
  let index = "";
  for (var i = 0; i < listContact.length; i++) {
    if (id === listContact[i].id) {
      ex = "si";
      index = i;
      break;
    } else {
      ex = "no";
    }
  }
  if (ex == "no") {
    alert("Este wey no existe");
  } else {
    listContact.splice(index, 1);
    listContact.sort();
    alert("Lo borramos");
  }
}

//EDITAR CONTACTO
function editContact() {
  listContact.sort();
  let id = prompt("DNI del contacto que desea editar: ");
  let ex = "";
  let index = "";
  for (var i = 0; i < listContact.length; i++) {
    if (id === listContact[i].id) {
      ex = "si";
      index = i;
      break;
    } else {
      ex = "no";
    }
  }
  if (ex == "no") {
    alert("Este wey no existe");
  } else {
    let modify = prompt(
      "Que dato vas a modificar? 1. Nombre, 2. Apellido, 3. Telefono, 4. Ciudad, 5. Direccion"
    );
    if (modify == 1) {
      let nombre = prompt("Cambiar nombre: ");
      if (nombre != "") {
        listContact[index].nombre = nombre;
        alert("Se modifico el nombre: " + nombre);
      } else {
        alert("Campo vacio");
      }
    } else if (modify == 2) {
      let apellido = prompt("Cambiar apellido: ");
      if (apellido != "") {
        listContact[index].apellido = apellido;
        alert("Se modifico el apellido: " + apellido);
      } else {
        alert("Campo vacio");
      }
    } else if (modify == 3) {
      let telefono = prompt("Cambiar telefono: ");
      if (telefono != "") {
        listContact[index].telefono = telefono;
        alert("Se modifico el telefono: " + telefono);
      } else {
        alert("Campo vacio");
      }
    } else if (modify == 4) {
      let ciudad = prompt("Cambiar ciudad: ");
      if (ciudad != "") {
        listContact[index].ciudad = ciudad;
        alert("Se modifico el ciudad: " + ciudad);
        direccion;
      } else {
        alert("Campo vacio");
      }
    } else if (modify == 5) {
      let direccion = prompt("Cambiar direccion: ");
      if (direccion != "") {
        listContact[index].direccion = direccion;
        alert("Se modifico el direccion: " + direccion);
      } else {
        alert("Campo vacio");
      }
    }
    listContact.sort();
    console.log(listContact);
    alert("Lo editamos");
  }
}

function printContact() {
  let i = "";
  listContact.forEach(function (elemento, indice) {
    console.table(indice + 1 + " - " + JSON.stringify(elemento));
    i++;
    let last = listContact.length;
    if (i < last) {
      console.log(
        "--------------------------------------------------------------------------------------"
      );
    }
  });
  listContact.sort();
  console.log(listContact);
}

console.log(listContact);
menu();
