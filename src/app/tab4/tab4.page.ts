import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user = {
    nombre: 'Gastón Altamirano',
    username: 'gastonalt',
    ppic: 'https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/120134162_1671596756329200_2000907525780244270_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wbF114R9MIgAX-HWYDa&_nc_ht=scontent.fros2-1.fna&oh=00_AT-F1hvEWt-vZJ-2yGKL140Mo666bWCXlZFxwwF3-1DH2A&oe=6272C048'
  };

  constructor(private router: Router) { }

  navigateReservasActivas(){
    this.router.navigate(['/reservas-activas'])
  }

  editarPerfil(){
    this.router.navigate(['/editar-perfil'], {
      replaceUrl: true,
      state: {
        user: this.user
      }
    });
  }

  ngOnInit() {
  }

}
