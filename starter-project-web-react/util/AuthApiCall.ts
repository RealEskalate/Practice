import axios from "axios"

type User = {
    fullname: string,
    email: string,
    password: string,
  }

type Credentials = {            
    email: string,
    password: string            
}

async function Signin(credentials: Credentials|any){
    try {
        const result = await axios.post(`${process.env.API_BASE_URL}/auth/login`,credentials) 
        return result
    } catch (error: any) {
        return null
    }

}

async function Signup(user: User): Promise<boolean> {
    try {                
        const result = await axios.post(`${process.env.API_BASE_URL}/user`,{fullName: user.fullname, email: user.email, password: user.password})
        if(result.status === 201 || result.status == 200){
          return true
        }else{
          return false
        }

    } catch (error) {
        return false
    }
}

export default {Signin, Signup}