import { authKey } from "@/constants/auth.key"
import { setLocalStorage,getLocalStorage } from "@/utils/local-storage"
import { decodedToken } from "../../utils/jwt"

export const storeUserInfo=(accessToken:string)=>{
 
      return setLocalStorage(authKey,accessToken)
}


export const getUSerInfo=()=>{
      const authToken=getLocalStorage(authKey)
      console.log(authToken)
      if(authToken){
            const decodedData=decodedToken(authToken)
            console.log(decodedData)

      }
}