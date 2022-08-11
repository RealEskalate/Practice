import axios from "axios"

const API_BASE_URL = "https://blog-app-backend.onrender.com/api"

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
        const result = await axios.post(`${API_BASE_URL}/auth/login`,credentials) 
        return result
    } catch (error: any) {
        return null
    }

}

async function Signup(user: User): Promise<boolean> {
    try {                
        const result = await axios.post(`${API_BASE_URL}/user`,{fullName: user.fullname, email: user.email, password: user.password})
        if(result.status === 201 || result.status == 200){
          return true
        }else{
          return false
        }

    } catch (error:any) {
        return false
    }
}

async function UpdateUser(user: any, id: any, access_token: any){
  try {        
              
      const result = await axios.patch(`${API_BASE_URL}/user/${id}`,user,{ headers: { Authorization: 'Bearer ' + access_token }})
      if(result.status === 201 || result.status == 200){
        return result
      }else{
        return null
      }
  } catch (error) {
      return null
  }
}
async function ResetPassword(email: any){
 const access_token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwic3ViIjoiNjI3ZGYyOTMyNzdjMmI3N2UxMTAwYzA1IiwiaWF0IjoxNjUyODU5NTk4LCJleHAiOjE2NTI4NjMxOTh9.5caBB9L_dlAJtV4k_0vTiUi7KL-l1zUMpAuQ9SlPFDI'
  try {                
      const result = await axios.get(`${API_BASE_URL}/user/all`, 
      { headers: { Authorization: access_token }})
      if (result.status == 201 || result.status === 200){
        for (let i = 0; i < result.data.length; i++){
          if (result.data[i].email === email){
              return result.data[i]
          }
        }
      }
      else{
        return null
      }
      
  } catch (error) {
      return null
  }
}

async function GetUserDetail(id: string, access_token: string) {

    try {
        const res = await axios.get(
          `${API_BASE_URL}/user/${id}`,
          { headers: { Authorization: 'Bearer ' + access_token } }
        )
  
        if (res.status === 200) {
          const user = { name: res.data.fullName, email: res.data.email }
          return user
        }else{
            return null
        }
      } catch (error: any) {            
        return null
      }
}
export default {Signin, Signup, GetUserDetail, UpdateUser, ResetPassword}