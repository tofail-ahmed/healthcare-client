import { authKey } from "@/constants/auth.key"
import { setLocalStorage,getLocalStorage, removeLocalStorage } from "@/utils/local-storage"
import { decodedToken } from "../../utils/jwt"

export const storeUserInfo=(accessToken:string)=>{
 
      return setLocalStorage(authKey,accessToken)
}


export const getUSerInfo=()=>{
      const authToken=getLocalStorage(authKey)
      // console.log(authToken)
      if(authToken){
            const decodedData:any=decodedToken(authToken)
            // console.log(decodedData)
            return {
                  ...decodedData,
                  role:decodedData?.role.toLowerCase()
            }

      }
}

export const isLoggedIn=()=>{
      const authToken=getLocalStorage(authKey);
      if(authToken){
            return !!authToken;
      }
}

export const removeUser=()=>{
      return removeLocalStorage(authKey)
}