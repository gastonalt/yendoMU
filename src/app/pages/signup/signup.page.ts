import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/models/Persona';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passwordRegex = '"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"';

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private alertController: AlertController) { }


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

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Credenciales inválidas!',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
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
        const email = this.signUpForm.controls.email.value;
        const tipoDni = this.signUpForm.controls.tipoDni.value;
        const nroDni = this.signUpForm.controls.nroDni.value;
        const usuario = this.signUpForm.controls.usuario.value;
        const nombres = this.signUpForm.controls.nombres.value;
        const apellidos = this.signUpForm.controls.apellidos.value;
        const contrasena = this.signUpForm.controls.contrasena.value;
        const persona = new Persona(usuario,nombres,tipoDni,nroDni,apellidos,email,contrasena);
        this.authService.signup(persona).subscribe((res: any)=>{
          if(res.mensaje && res.mensaje === 'Exito'){
            this.router.navigate(['f/t/tab1']);
          }
        },(err)=>{
          console.log(err);
          this.presentAlert(err.error.mensaje);
        });
      }
    }
  }

}
