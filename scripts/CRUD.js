const btnCRUDOpen = document.querySelector("#openCRUDModal");
const saveAlert = document.getElementById("saveAlert")


saveAlert.addEventListener("click", () => {
    Swal.fire({
        title: '¿Todos los datos correctos?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Descartar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Cambios descartados', '', 'info')
        }
      })
})