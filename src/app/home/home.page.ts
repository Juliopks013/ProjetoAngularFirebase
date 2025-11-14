import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { APIService } from '../services/api.services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  articles: any;

  constructor(
    public apiService: APIService
  ){
    this.carregarNoticias();
   }

  carregarNoticias(){
    this.apiService.get('top-headlines?country=us&apiKey=20f59a56e8e3454296ace63f237f9089').subscribe((noticias)=>{
      this.articles = noticias.articles;
      console.log(this.articles);
    });
  }

}
