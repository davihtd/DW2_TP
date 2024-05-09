import { docente } from "./docente.js"
import { materia } from "./docente.js"
import { cargaDeDatos } from "./server.js"

let datos = []
const tableBody = document.querySelector('#cuerpo-tabla-mate')

function addMateData() {
    datos = JSON.parse(localStorage.getItem("datos"))
    tableBody.innerHTML = ''

    datos.map((item) => {
        const fila = document.createElement('tr')
        const celdas = `<td>${item.materia.mateName}</td>
          <td>${item.materia.carreid}</td>
          <td>${item.materia.mateCodi}</td>
          <td>${item.materia.mateAnho}</td>
          </tr>
          <td>
          <div>
          <button type="submit" class="btn btn-primary" onclick = "showMateModal(${item.id})">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
          </div>
          </td>
          `
        fila.innerHTML = celdas
        tableBody.append(fila)
    })
}

function loadMateData(event) {
    event.preventDefault()
    let idDoct = document.getElementById('id-docente').value

    let docente = datos.find((item) => item.id == idDoct)

    if (docente) {

        let idmt = datos.at(-1).id + 1
        let carreid = document.getElementById('carreid').value
        let mateName = document.getElementById('mateName').value
        let mateCodi = document.getElementById('mateCodi').value
        let mateAnho = document.getElementById('mateAnho').value

        docente.materia = new materia(idmt, carreid, idDoct, mateName, mateCodi, mateAnho)

        document.getElementById('form-mate').reset()
        localStorage.setItem("datos", JSON.stringify(datos))
        
        addMateData()
        location.reload();
    } else {
        console.log("No")
    }
}

const myModalMateria = new bootstrap.Modal(document.getElementById('modal-mate'))

let docenteId = null;

window.showMateModal = (id) => {
    docenteId = id
    let index = datos.findIndex((item) => item.id == id)
    document.getElementById('carreid-modal').value = datos[index].materia.carreid
    document.getElementById('mateName-modal').value = datos[index].materia.mateName
    document.getElementById('mateCodi-modal').value = datos[index].materia.mateCodi
    document.getElementById('mateAnho-modal').value = datos[index].materia.mateAnho
    myModalMateria.show()
}

function actualizarDatosMate(event) {
    event.preventDefault()
    let index = datos.findIndex((item) => item.id == docenteId)

      datos[index].materia.carreid  = document.getElementById('carreid-modal').value
      datos[index].materia.mateName  = document.getElementById('mateName-modal').value
      datos[index].materia.mateCodi  = document.getElementById('mateCodi-modal').value
      datos[index].materia.mateAnho  = document.getElementById('mateAnho-modal').value

    localStorage.setItem("datos", JSON.stringify(datos))
    addMateData()
    myModalMateria.hide()

}

cargaDeDatos()
addMateData()

document.getElementById('form-mate-modal').addEventListener('submit', actualizarDatosMate)
document.getElementById('form-mate').addEventListener('submit', loadMateData)