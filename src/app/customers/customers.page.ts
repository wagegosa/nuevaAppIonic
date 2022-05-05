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
  searchedUser: any;
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getUsers().subscribe(res => {
      this.permission = true;
      console.log("Res: ", res)
      this.users = res;
      this.searchedUser = this.users;
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
  searchCustomers(event){
    const text = event.target.value;
    this.searchedUser = this.users;
    // Validamos que no llegue null
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any) =>{
        // Busca sin importar si es en mayuscula o minuscula
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
        // console.log(event);
      });
    }
  }

  doRefresh(event) {
    this.getUsers();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
