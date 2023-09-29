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
    let opt = prompt("Que desea hacer? 1. Agregar, 2. Borrar, 3. Editar, 4. Mostrar 5.Salir");

    switch (opt) {
      case "1":
        addContact();
        break;

      case "2":
        delContact();
        break;

      case "3":
        printContact();
        break;
    }
  }
};

menu();

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



function printContact() {
  let i = "";
  listContact.forEach(function (elemento, indice, array) {
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
}
