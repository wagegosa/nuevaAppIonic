import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: any;
  permission: boolean;
  citys: any = [];
  name: string;
  img: string;
  description: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id: ", this.id);
    
    this.getCitys().subscribe(res => {
      this.permission = true;
      console.log("Res: ", res)
      this.citys = res;
      this.name = this.citys[this.id -1].name;
      this.img = this.citys[this.id -1].img;
      this.description = this.citys[this.id -1].description;
      // console.log("Name: ", this.name);
      
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

}
