import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  @Input() user:Persona;
  imgURL = "";

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

}
