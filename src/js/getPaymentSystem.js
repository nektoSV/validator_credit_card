export function getPaymentSystem(value) {
  if(value.slice(0, 1) === '2') {
    return 'mir';
  }

  if(value.slice(0, 1) === '4') {
    return 'visa';
  }

  if(value.slice(0, 2) <= '55' && value.slice(0, 2) >= '51') {
    return 'masterCard';
  }

  if(value.slice(0, 2) === '31' || value.slice(0, 2) === '35') {
    return 'jcb';
  }

  if(value.slice(0, 2) === '60') {
    return 'discover';
  }

  if(value.slice(0, 2) === '30' || value.slice(0, 2) === '36' || value.slice(0, 2) === '38') {
    return 'dinersClub';
  }

  if(value.slice(0, 2) === '34' || value.slice(0, 2) === '37') {
    return 'americanExpress';
  }
}
