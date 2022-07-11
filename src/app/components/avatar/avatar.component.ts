import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/Persona';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  @Input() user:Persona;
  imgURL = "";

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/persona/profileImage',
    itemAlias: 'image',
    headers: [{ name: 'auth-token', value: localStorage.getItem('token') }]
  });

  constructor(private uploadService: FileUploadService, private router: Router, private alertController: AlertController) { }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      this.user.imgURL = status;
    };
  }

}
