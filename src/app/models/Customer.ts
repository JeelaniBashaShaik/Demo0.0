import { SuccessfulCheckOuts } from './SuccessfulCheckOuts';
import { Address } from './address';

export class Customer{
    fullName:string;
    displayName:string;
    password:string;
    email:string;
    cart:Array<string>=[];
    checkOutsDone:Array<SuccessfulCheckOuts>=[];
    phoneNumber:Number;
    viewedItems:Array<string>=[];
    wishList:Array<string>=[];
    address:Array<Address>=[];
}