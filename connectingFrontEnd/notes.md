## using import syntax
specify "type": "module" in package.json of backend. It will tell Javascript to assemble all files as a module instead of common JS.

Make some routes to get data. 

## Now the first thing in frontend to consider is how to make the application.

Maybe with vite, CRA, parcel, different bundlers, toolchains!
Toolchains help to bundle all JS files to HTML, CSS, JS that the browser will understand. 

React provides ease of access, wherein we don't need to use things like document.getElementById etc.

Nowadays we use netlify, vercel to deploy, hence, we don't see what distribution is provided etc.
CI/CD is available nowadays.

We will do a overview of how legacy work is done wrt to this.



## axios
npm i axios.  

WOrk can be done with fetch as well, but axios gives over the top additional functionalities and it written specially for web requests.  

One of the reasons, we don't need to parse the JSON data that we receive

Read up more on it.  

## CORS error

while requesting from frontend to server, it may throws a CORS block error

Eg to understand: 
You won't allow anyone into your house, You allow mom, dad, bhai/behan, basically whomsoevers origin is this house is allowed to enter. 
But if theres a salesman, you won't allow him to enter.

Koi bhi aaake data nai leke jaa sakta.

Your server may get requests in thousands, but you shouldn't allow everyone, why? SImply because it will increase your bill.

Difference in URL and even different PORT is different origin.
For origin to be same, url and port needs to be same.

### Solution for these origin issues:  
-  Tell your backend engineer to whitelist your url and port. He may mark a *, depending upon use case. * means to allow everyone.
-  proxies.

## Proxy

proxies in CRA : In package.json add a proxy and specify server url

proxies in Vite: In config, vite.config.js

```js
export default defineConfig ({
    server: {
        proxy: {
            '/api': 'http://localhost:3000' // prepends /api in any request with this url. Not just prepend but also applies a proxy on the server that the request is coming from this url itself. So now the server is going to think that the request if from the same origin.
        },
    },
})
```

## Bad practice.

People when not using services like netlify, vercel etc.

They push this backend folder on the server, digital ocean etc.
And also push the whole react app inside it.

What they do is:
-  build the frontend. this gives a dist folder
-  put this dist/ in the backend/
-  use a middleware in server.js to serve static assets.
   ```app.use(express.static('dist'))```  

Now your server url will be serving your react app as a static asset. Technically, this is not a react app, just a HTML CSS JS.

But what has happened here is that, you have saved some server costs. No need for different CI/CD pipeline. Saved on DevOps cost. You have mixed backend and frontend engineers' work.

But, problem is, changes from the backend are okay, but changes from the frontend won't propogate.

you will have to build the frontend again. Replace it back into the backend folder 'dist/'. Restart the server again.

Such work should not be done. Backend and Frontend needs to be segregated.  
