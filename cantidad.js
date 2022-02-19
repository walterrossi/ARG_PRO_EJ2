function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i <= unPeriodo.length;i++) {
      if (unPeriodo[i]>0){
      cantidad=cantidad+1;
    }
    } console.log('posicion[2] '+unPeriodo[2]);
    console.log('largo length '+unPeriodo.length);
    console.log('cantidad '+cantidad);
      return cantidad;
  }
  
  let unPeriodo=[10,-200,10,-5,0];

cantidadDeMesesConGanancia(unPeriodo);

