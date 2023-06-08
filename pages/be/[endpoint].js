
export default async (req, res, values) => {
    const  endpoint  = req.query;
  const values = req.body.values
  console.log('in use')

  const options={        
    method: "Post",
    headers: {'Content-Type': 'application/json', 'credentials': 'include',},
    body: JSON.stringify(values)
}
console.log('in use')
const response =await fetch(`http://localhost:9000/${endpoint}`, options)
  
    // Extract the data from the response
    const data = await response.json();
  
    // Send the data back to the client
    res.json(data);
  };