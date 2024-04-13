import { authKey } from "@/constants/auth.key"
import { setLocalStorage } from "@/utils/local-storage"

export const storeUserInfo=(accessToken:string)=>{
 
      return setLocalStorage(authKey,accessToken)
}