function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retornvarai  // Tu código:

  
    
    if(num>=100 && num<=999 || num<=-100 && num>=-999){
      return true
    } else {
      return false
    }
  
    // if(num..tostring().length ===3)return true
    //   else return false
  }     
  


module.exports = tieneTresDigitos;
