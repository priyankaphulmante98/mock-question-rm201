MOCK-10
1] Readfile and Readfilesync difference?
In fs. readFile() method, we can read a file in a non-blocking asynchronous way, but in fs. readFileSync() method, we can read files in a synchronous way, i.e. we are telling node. js to block other parallel process and do the current file reading process.





2] Blocking and non-blocking?
Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn't block execution. Or as Node. js docs puts it, blocking is when the execution of additional JavaScript in the Node. js process must wait until a non-JavaScript operation completes.

3] How to create a web server without express? Write some basic Routes.
We use the http module to call createServer() method. Basically, this method accepts a function with the NodeJS request response objects. This function is the request listener and NodeJS will call this function for every incoming request. We also implement the request listener function where we extract the req
Link⇒ https://progressivecoder.com/how-to-implement-nodejs-routing-without-express
4] What is he difference between common JS and EJS module?
ES modules are the standard for JavaScript, while CommonJS is the default in Node. js. The ES module format was created to standardize the JavaScript module system. It has become the standard format for encapsulating JavaScript code for reuse.

CommonJS modules are a popular way to modularize JavaScript code. They allow you to export and import modules using the export and import keywords, respectively. 
ES Modules are a newer way to modularize JavaScript code. Unlike CommonJS modules, which rely on exports and imports, ES Modules use the module keyword.



5] What is JWT and what we can achieve with that?
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
Why Use JWT?
In short, JWTs are used as a secure way to authenticate users and share information.
Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.
Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same.
# advantages⇒
JWT is a stateless authentication mechanism as the user state is never saved in the database. As JWTs are self-contained, all the necessary information is there, reducing the need of going back and forward to the database. With JWT we don't need to query database to authenticate the user for every api call.

Why used ⇒ 
To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to your backend API. API Gateway validates the token on behalf of your API, so you don't have to add any code in your API to process the authentication.






       
6] What should we do with the password of a user before storing it into DB?


