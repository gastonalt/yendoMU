import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passwordRegex = '"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"';

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern(this.emailRegex)],
      repetirEmail: ['', Validators.required, Validators.pattern(this.emailRegex)],
      tipoDni: ['', Validators.required],
      nroDni: ['', Validators.required],
      usuario: ['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      contrasena:['', Validators.required, Validators.pattern(this.passwordRegex)],
      repetirContrasena:['', Validators.required, Validators.pattern(this.passwordRegex)],
    });
  }
  crearCuenta(){
    if(
      this.signUpForm.controls.email.value !== '' &&
      this.signUpForm.controls.repetirEmail.value !== '' &&
      this.signUpForm.controls.tipoDni.value !== '' &&
      this.signUpForm.controls.nroDni.value !== '' &&
      this.signUpForm.controls.usuario.value !== '' &&
      this.signUpForm.controls.nombres.value !== '' &&
      this.signUpForm.controls.apellidos.value !== '' &&
      this.signUpForm.controls.contrasena.value !== '' &&
      this.signUpForm.controls.repetirContrasena.value !== ''
    ){
      if(this.signUpForm.controls.email.value === this.signUpForm.controls.repetirEmail.value
      && this.signUpForm.controls.contrasena.value === this.signUpForm.controls.repetirContrasena.value){
        //llamo al servicio para crear un usuario
      }
    }
  }

}
