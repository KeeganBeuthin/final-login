let jsonData;

fetch('http://localhost:9000/transaction')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    
    console.log(jsonData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

