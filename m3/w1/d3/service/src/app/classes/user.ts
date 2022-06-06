import { Iuser } from "../interface/iuser";

export class User implements Iuser {
  name: string;
  lastname: string;
  gender: string;
  id: number;

  constructor(name:string, lastname:string, gender:string){
    this.id = Math.floor(Math.random() * 100)
    this.name = name
    this.lastname = lastname
    this.gender = gender
  }

}
