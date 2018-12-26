var katzDeliLine = [];
function takeANumber (katzDeliLine, newCustomer) {
  katzDeliLine.push(`${newCustomer}`);
  return (`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`);
  }
  
  
  function nowServing (katzDeliLine) {
    
    if (katzDeliLine.length === 0) {
      return ("There is nobody waiting to be served!")
    }else{
      return (`Currently serving ${katzDeliLine.shift()}.`);
    }
  }
  
  var nameOnLine = [];
  function currentLine (katzDeliLine) {
    if (katzDeliLine.length === 0){
      return ("The line is currently empty.")
    }else{
      var i = 0;
      while (katzDeliLine.length >  i){
      nameOnLine.push([i+1]+`. `  + katzDeliLine[i]);
    i++;
        }
        return (`The line is currently:` + nameOnLine);
    }
  }
  
  
  
  
  var line = [];
  var ticketNumber = 1;
  function takeANumber(line){
    line.push(ticketNumber);
    return (`Welcome! You're ticket number #${ticketNumber++}.`);
  }
  
  takeANumber(line) // "Welcome! You're ticket number #1" [1]
  takeANumber(line) // "Welcome! You're ticket number #2" [1, 2]
  
  nowServing(line) // "Currently serving #1" [2]
  nowServing(line) // "Currently serving #2" []
  
  takeANumber(line) // "Welcome! You're ticket number #3" [3]
  
  
  
  
  