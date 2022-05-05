import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-citys',
  templateUrl: './citys.page.html',
  styleUrls: ['./citys.page.scss'],
})
export class CitysPage implements OnInit {

  citys: any = [];
  permission: boolean;

  token = localStorage.getItem('token');
  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
    
  ) { }

  ngOnInit() {
    console.log("token is: ",this.token);
    // Borra el token
    // localStorage.removeItem('token'),
    // Borra todo el localStorage
    localStorage.clear(),
    this.getCitys().subscribe(res => {
      this.permission = true;
      // console.log("Res: ", res)
      this.citys = res;
    });
  }

  getCitys(){
    return this.http
    .get("/assets/files/citys.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }
  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Ciudad  Seleccionada',
      duration: 2500,
      position: 'bottom'
    });
    toast.present()
  }
  async presentAlet1(){
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "Ciudad Borrada correctamente.",
      buttons: ["ok"]
    });
    await alert.present();
    let resul = await alert.onDidDismiss();
    console.log(resul);
  }
  async presentAlet2(){
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Esta seguro de eliminar?",
      buttons: [
        {
          text: 'Si',
          handler: () =>{
            console.log("Ciudad Eliminada");
            
          }
        },
        {
          text: 'No',
          handler: () =>{
            console.log("No, Cancelar");
            
          }
        }
      ]
    });
    await alert.present();
    let resul = await alert.onDidDismiss();
    console.log(resul);
  }
}
