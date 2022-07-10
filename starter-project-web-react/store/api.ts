import { createAction } from "@reduxjs/toolkit";
interface apiCallBeganPayloadTypep {  url :string, method:string, onSuccess:string, data:object, onStart:string, onFailed:string, headers:object }
export const apiCallBegan = createAction<apiCallBeganPayloadTypep, string>('apiCallBegan');
export const apiCallFailed = createAction<any, string>('apiCallFailed')
export const apiCallSuccess = createAction<object, string>('apiCallSucess')

