function peopleWithAgeDrink(old) {
    //return old <= 13 ? 'drink toddy' : old <= 17 ? "drink coke" : (old <= 18 || old <= 20) ? "drink beer" : "drink whisky"
    if (old <= 13 ) {
      return 'drink toddy';
    } else if (old <= 17 ) {
      return 'drink coke';
    } else if (old <= 18 || old <= 20 ) {
      return 'drink beer';
    } else {
      return 'drink whisky';
    }
  };