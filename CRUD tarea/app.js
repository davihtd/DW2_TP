console.log("logeando");
// Agrega un evento de clic al botón de editar
const editBtns = document.querySelectorAll('button[data-bs-toggle="modal"]');
editBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const nombre = btn.getAttribute('data-nombre');
    const apellido = btn.getAttribute('data-apellido');
    const email = btn.getAttribute('data-email');
    const telefono = btn.getAttribute('data-telefono');
    const fecha = btn.getAttribute('data-fecha');

    // Carga los datos en el formulario de edición
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-name').value = nombre;
    document.getElementById('edit-last').value = apellido;
    document.getElementById('edit-email').value = email;
    document.getElementById('edit-tell').value = telefono;
    document.getElementById('edit-date').value = fecha;
  });
});

// Agrega un evento de clic al botón de guardar cambios
document.getElementById('edit-btn').addEventListener('click', () => {
  const id = document.getElementById('edit-id').value;
  const nombre = document.getElementById('edit-name').value;
  const apellido = document.getElementById('edit-last').value;
  const email = document.getElementById('edit-email').value;
  const telefono = document.getElementById('edit-tell').value;
  const fecha = document.getElementById('edit-date').value;

  // Realiza una llamada AJAX para guardar los cambios
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `/api/docentes/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Actualiza la tabla con los nuevos datos
      const row = document.querySelector(`tr[data-rowid="${id}"]`);
      row.children[1].textContent = nombre;
      row.children[2].textContent = apellido;
      row.children[3].textContent = email;
      row.children[4].textContent = telefono;
      row.children[5].textContent = fecha;

      // Cierra el modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
      modal.hide();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.onerror = () => console.error('Error en la solicitud');
  xhr.send(JSON.stringify({ nombre, apellido, email, telefono, fecha }));
});