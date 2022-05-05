export class Persona{

  idPersona: number;
  username: string;
  nombres: string;
  tipoDni: string;
  nroDni: number;
  apellidos: string;
  email: string;
  password: string;

constructor($username: string , $nombres: string , $tipoDni: string , $nroDni: number ,
            $apellidos: string , $email: string , $password: string ) {
  this.username = $username;
  this.nombres = $nombres;
  this.tipoDni = $tipoDni;
  this.nroDni = $nroDni;
  this.apellidos = $apellidos;
  this.email = $email;
  this.password = $password;
}

}
