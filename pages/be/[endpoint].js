
export default  function reRoute(req, res) {
  console.log(req)
    const  endpoint  = req.query;
  const values = req.body.values


  const options={        
    method: "Post",
    headers: {'Content-Type': 'application/json', 'credentials': 'include',
    },
    body: JSON.stringify(values)
}
console.log(options)
const response =  fetch(`http://localhost:9000/${endpoint}`, options)
  
    // Extract the data from the response
    const data =  json.stringify(response);
  
console.log(response)
    if(!data){
        return <div> Loading...</div>
    }

  
    return res.status(200).json(data)
  };