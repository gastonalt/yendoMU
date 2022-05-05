import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  signUpForm: FormGroup;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passwordRegex = '"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"';

  constructor(private fb: FormBuilder,
              public alertController: AlertController,
              private router: Router,
              private authService: AuthService) {}

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern(this.emailRegex)],
      contrasena:['', Validators.required, Validators.pattern(this.passwordRegex)],
    });
  }

  navigateLogin(){
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  navigateSignUp(){
    this.router.navigate(['/signup'], {replaceUrl: true});
  }

  iniciarSesion(){
    const email = this.signUpForm.controls.email.value;
    const contrasena = this.signUpForm.controls.contrasena.value;
    this.authService.login(email, contrasena).subscribe((res: any)=>{
      localStorage.setItem('token', res.token);
      this.router.navigate(['/f/t/tab1'], {replaceUrl: true});
    },()=>{
      this.presentAlert('Usuario o contraseña inválido');
    });
  }

}
