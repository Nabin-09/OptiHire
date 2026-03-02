import axios from 'axios'


export async function register({username , email , password}){

try{
    const response = axios.post('http://localhost:5000/api/auth/register' , {
        username , email , password
    } , {
        withCredentials : true
    })
        return response.data;
    }catch(err){
        console.log(`axios error : ${err}`)
    }
}

export async function login({email, password}){
     try{
        const response = await axios.post('http://localhost:5000/api/auth/login' , {
            email , password
        }, {
            withCredentials : true
        });

        return response;
     }catch(err){
        console.log(`Axios error : ${err}`)
     }
}