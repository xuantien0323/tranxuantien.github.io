function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
  
    
    resultElement.textContent = '';
    errorElement.textContent = '';
  
    
    if (num1 === '' || num2 === '') {
      errorElement.textContent = 'Both inputs must be filled.';
      return;
    }
  
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
  
    if (operation === '/' && n2 === 0) {
      errorElement.textContent = 'Cannot divide by zero.';
      return;
    }
  
    
    let result;
    switch (operation) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      default:
        errorElement.textContent = 'Invalid operation.';
      return;
    } 
  
  
    resultElement.textContent = `Result: ${result}`;
  }
  