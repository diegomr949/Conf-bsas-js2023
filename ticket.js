function updateTotal() {
    const cantidadInput = document.getElementById('cantidad');
    const categoriaSelect = document.getElementById('categoria');
    const totalSpan = document.getElementById('total');

    

    const cantidad = parseInt(cantidadInput.value) || 0;
    const categoria = categoriaSelect.value;


  //Descuentos:
    let descuento = 0;
    if (categoria === 'Estudiante') {
      descuento = 0.8; //estudiantes
    } else if (categoria === 'Trainee') {
      descuento = 0.5; //trainees
    } else if (categoria === 'Junior') {
      descuento = 0.15; //juniors
    }



  //Calculo
    const precioUnitario = 200; 
    const precioTotal = cantidad * precioUnitario * (1 - descuento);

    totalSpan.textContent = precioTotal.toFixed(2); 
  }

  //Funcion:
  function showSummary() {
    const totalSpan = document.getElementById('total');
    const precioTotal = totalSpan.textContent;

    alert('\nTotal a pagar: $' + precioTotal);//alerta con el total a pagar
  }