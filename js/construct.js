function processUserSymbol(userSymbol) {
  var input = userSymbol.substr(0, userSymbol.length);
  console.log('connecting to system 07B12008-4975-4C5A-8424-282A7BC95D35');
  console.log('Connected');
  console.log('Logging in as SEINU')
  console.log('Sending "' + input + '" to SEINU@07B12008-4975-4C5A-8424-282A7BC95D35');
  console.log('Recieving data');
  console.log('Recieved data to output'); 
  var output = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  console.log('Recieved "' + output + '"')
  return output;
}