// Add your code here();
const  submitData =(name, email)=>{
return fetch('http://localhost:3000/users',{
method:"POST",
headers:{
    'content-type':'application/json',
    Accept:'application/json'
},
body:JSON.stringify({
    name:name,
    email,email
})
}).then(response=>response.json())
.then(data=>{
    document.querySelector('body').innerHTML = `<p>${data.id}</p>`;
})
.catch(error=>{
    document.querySelector('body').innerHTML =  `<p>${error.message}</p>`;
}); 
}