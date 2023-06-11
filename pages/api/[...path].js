import { proxy } from "../../server/proxy";



export default (req, res) => {
  return new Promise((resolve, reject) => {
    // removes the api prefix from url
    
  

   


  
    /**
     * if an error occurs in the proxy, we will reject the promise.
     * it is so important. if you don't reject the promise,
     * you're facing the stalled requests issue.
     */
    proxy.once("error", reject);

    proxy.web(req, res);
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};