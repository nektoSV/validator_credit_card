export function validatorCards(value) {
  let sum = 0;

  for (let i = 0; i < value.length - 1; i += 1) {
    if (i % 2 === 0) {
      sum += Number(value[i]);
      
    } else {
      let actionIntermediate  = Number(value[i]) * 2;
      actionIntermediate = String(actionIntermediate);

      if (actionIntermediate.length > 1) {
        for (let k = 0; k < actionIntermediate.length; k += 1) {
          sum += Number(actionIntermediate[k]);
        }
      } else {
        sum += Number(actionIntermediate);
      }      
    }
  }

  const result = (10 - (sum % 10)) === Number(value.slice(-1));
  
  return result;
}