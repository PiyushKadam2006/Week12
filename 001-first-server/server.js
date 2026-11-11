const http = require("http");
// http module -> this i only module here and other http is protocal

const server = http.createServer(); //returns instance of server
//server is crested but it will be not able to fulfill request
//anble listining to port for users request

//but abtak hamne serve ko programa nahi kara he , hame vo bhi karna hoga
server.on("request", (req, res) => {
  const pathname = req.url;

  if(pathname === "/"){
      res.write("hello world ,backkend domination ")
      res.end();
      return;
  }
  if(pathname ===  "/home"){
    res.write("home page found")
    res.end();
    return;
  }

  res.write("page not found");
  res.end();

});



server.listen(3000, () => {
  console.log("hello iam listening ");
});
//ye continuely reuqest listen kar raha he
//http://localhost:3000/  => continues loading only (on edge )


/**
 * bullet points 
*The built-in `http` module provides server creation functionality through `http.createServer()` without requiring external packages like Express.
 *
 * req` is the incoming Request from the client, and `res` is the Response sent back by the server
 * `req` is an IncomingMessage stream containing client request details (URL, headers, body), and `res` is a ServerResponse stream used to formulate and send status codes, headers, and payloads back to the client.
 * 
 * What happens in the browser if your server receives a request but forgets to call `res.end()`?
 * =>Without `res.end()`, the server never signals to the HTTP client that the response is complete. As a result, the browser continues waiting indefinitely until a network timeout occurs.
 * 
 * 
 * 
 * 
 *  

 */