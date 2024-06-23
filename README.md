# STEPS TO CREATE SMART-SHOP PRODUCTS API  
## 1. INSTALLING TOOLS  
I first created a folder named Products-Rest-Api,  
opened a terminal on that folder and run the following commands 
- npm init -y 
- npm install express  
- npm install bodyParser  
- npm install pg
- npm install dotenv
- npm install nodemon  
## 2. CONFIGURATION
After installing the above tools, i opened visual studioo code and clicked on package.json file to configure nodemone.

<code>*"type":"module"*  
"start":"nodemon index.js"
</code>  
## CREATING END POITS  
 I created index.js which was to act like the heart of the project.  
 i then imported express and create simple end points to see if everything was working as i expected.  
 <code> 
 
 app.get("/products",(request,response)=>{
response.send("products")
 })
 
 </code>



