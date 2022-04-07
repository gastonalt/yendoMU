import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  @Input() user;

  constructor(private router: Router) { }

  editarPerfil(){
    this.router.navigate(['/editar-perfil'], {
      replaceUrl: true,
      state: {
        user: this.user
      }
    });
  }

  ngOnInit() {}

}
