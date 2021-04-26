import { UserModel } from "./userModel";

export interface TokenModel{
    token:string
    expiration:string
    user:UserModel
}