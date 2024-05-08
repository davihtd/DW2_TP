import { docente } from "./docente.js"
import { materia } from "./docente.js"
import { cargaDeDatos } from "./server.js"
//console.log(datos)
let datos = []
const tableBody = document.querySelector('#cuerpo-tabla-doct')

function addData() {
  datos = JSON.parse(localStorage.getItem("datos"))
  tableBody.innerHTML = ''

  datos.map((item) => {
    const fila = document.createElement('tr')
    const celdas = `<td>${item.name}</td>
        <td>${item.last}</td>
        <td>${item.email}</td>
        <td>${item.tell}</td>
        <td>${item.date}</td>
        <tr>
        <td>
        <div>
        <button type="submit" class="btn btn-primary" onclick = "showDoctModal(${item.id})">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button type="submit" class="btn btn-warning">
      <i class="fa-solid fa-trash" onclick ="belleteData(${item.id})"></i>
      </button>
        </div>
        </td>
        `
    fila.innerHTML = celdas
    tableBody.append(fila)
  })
}
function loadData(event) {
  event.preventDefault() 
  // console.log("funciona")
  let id = datos.at(-1).id + 1
  let name = document.getElementById('name').value
  let last = document.getElementById('last').value
  let email = document.getElementById('email').value
  let tell = document.getElementById('tell').value
  let date = document.getElementById('date').value

  let newMateria = new materia(null, null, null, null, null, null);

  datos.push(new docente(id, name, last, email, tell, date, newMateria));

  document.getElementById('form-doct').reset()
  localStorage.setItem("datos", JSON.stringify(datos))
  addData()
  location.reload();

}

window.belleteData = (id) => {
  let index = datos.findIndex((item) => item.id == id)//
  let validar = confirm(`Estas seguro de que quiere elimina el dato ${datos[index].id}?`)
  if (validar) {
    datos.splice(index, 1)
    localStorage.setItem("datos", JSON.stringify(datos))
    addData()
    location.reload();

  }
}

const myModalDocente = new bootstrap.Modal(document.getElementById('modal-docente'))

let docenteId = null;

window.showDoctModal = (id) => {
  docenteId = id
  let index = datos.findIndex((item) => item.id == docenteId)
  document.getElementById('name-modal').value = datos[index].name
  document.getElementById('last-modal').value = datos[index].last
  document.getElementById('email-modal').value = datos[index].email
  document.getElementById('tell-modal').value = datos[index].tell
  document.getElementById('date-modal').value = datos[index].date
  myModalDocente.show()
}

function actualizarDatos(event) {
  event.preventDefault()
  let index = datos.findIndex((item) => item.id == docenteId)

  datos[index].name = document.getElementById('name-modal').value
  datos[index].last = document.getElementById('last-modal').value
  datos[index].email = document.getElementById('email-modal').value
   datos[index].tell = document.getElementById('tell-modal').value
  datos[index].date = document.getElementById('date-modal').value

  localStorage.setItem("datos", JSON.stringify(datos))
  addData()
  myModalDocente.hide()

}
cargaDeDatos()
addData()
document.getElementById('form-doct').addEventListener('submit', loadData)
document.getElementById('form-modal-docente').addEventListener('submit', actualizarDatos)