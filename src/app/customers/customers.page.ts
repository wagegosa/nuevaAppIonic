import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];
  permission: boolean;
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getUsers().subscribe(res => {
      this.permission = true;
      console.log("Res: ", res)
      this.users = res;
    });
  }
  // Configuración para rutas en un button
  GoToHome(){

    this.router.navigate(['/home'])

  }
  getUsers(){
    return this.http
    .get("/assets/files/customers.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}
