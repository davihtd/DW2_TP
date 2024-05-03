import datos from "../data/data.json" with{type:"json"}
import { docente } from "./docente.js"
//console.log(datos)
const tableBody = document.querySelector('#cuerpo-tabla')

function addData(){
  tableBody.innerHTML = ''

    datos.map((item)=>{
        const fila = document.createElement('tr')
        const celdas = `<td>${item.name}</td>
        <td>${item.last}</td>
        <td>${item.email}</td>
        <td>${item.tell}</td>
        <td>${item.date}</td>
        <td>
        <div>
        <button type="submit" class="btn btn-primary">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button type="submit" class="btn btn-warning">
      <i class="fa-solid fa-trash"></i>
      </button>
        </div>
        </td>
        `
        fila.innerHTML = celdas
        tableBody.append(fila)
    })
}
function loadData(event){
  event.preventDefault()
 // console.log("funciona")
  let id = datos.at(-1).id + 1
  let name = document.getElementById('name').value
  let last = document.getElementById('last').value
  let email = document.getElementById('email').value
  let tell = document.getElementById('tell').value
  let date = document.getElementById('date').value
  
  datos.push(new docente(id,name,last,email,tell,date))
  document.getElementById('form-doct').reset()
  addData()
}
  addData()
document.getElementById('form-doct').addEventListener('submit', loadData)