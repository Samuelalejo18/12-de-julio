import axios from 'axios';

//Get
//async function request() {
  //  const response = await axios({
    //    method: 'get',
      //  url: '/https://jsonplaceholder.typicode.com/users/',

    //});
    
//}

//request();

//Post
//async function request() {
   // const response = await axios({
     //   method: 'post',
       // url: '/https://jsonplaceholder.typicode.com/users/4',
        //data: {
          //  name: "Stiven",
            //email : "stiven@gmail.com",
      //},

    //});
    //console.log(response);
    //console.log(response.data);
//}

//request();

//Delete

async function request() {
    const response = await axios({
        method: 'delete',
        url: '/https://jsonplaceholder.typicode.com/users/4',
       
      

    });
    //console.log(response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);

}


request();

//HOMEWORK 
//CREAR FUNCIONES QUE REALICE LAS CONSULTAS CON CADA UNO DE LOS METHODS de la api jsonplaceholder
async function getAllUsers() {
    const response = await axios({
        method: 'delete',
        url: '/https://jsonplaceholder.typicode.com/users/4',
       
      

    });
    
    const user= response.data;
    return users;
}
