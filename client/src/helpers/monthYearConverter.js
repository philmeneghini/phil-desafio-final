function convertSlashToHifen(monthYear) {
  return monthYear.replace('/', '-');
}

function convertTextToNumber(monthYear) {
  if (monthYear.includes('Jan')) {
    return monthYear.replace('Jan', '01');
  } else if (monthYear.includes('Fev')) {
    return monthYear.replace('Fev', '02');
  } else if (monthYear.includes('Mar')) {
    return monthYear.replace('Mar', '03');
  } else if (monthYear.includes('Abr')) {
    return monthYear.replace('Abr', '04');
  } else if (monthYear.includes('Mai')) {
    return monthYear.replace('Mai', '05');
  } else if (monthYear.includes('Jun')) {
    return monthYear.replace('Jun', '06');
  } else if (monthYear.includes('Jul')) {
    return monthYear.replace('Jul', '07');
  } else if (monthYear.includes('Ago')) {
    return monthYear.replace('Ago', '08');
  } else if (monthYear.includes('Set')) {
    return monthYear.replace('Set', '09');
  } else if (monthYear.includes('Out')) {
    return monthYear.replace('Out', '10');
  } else if (monthYear.includes('Nov')) {
    return monthYear.replace('Nov', '11');
  } else if (monthYear.includes('Dez')) {
    return monthYear.replace('Dez', '12');
  }
}

function reverseDate(monthYear) {
  const aux = monthYear.split('-');
  return aux[1] + '-' + aux[0];
}

function searchDate(monthYear) {
  const converted1 = convertSlashToHifen(monthYear);
  const converted2 = convertTextToNumber(converted1);
  const converted3 = reverseDate(converted2);
  console.log(converted3);
  return converted3;
}

export { searchDate };
