import { Component,OnInit } from '@angular/core';
import { MyserviceService,BookTab } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookviewall',
  templateUrl: './bookviewall.component.html',
  styleUrl: './bookviewall.component.css'
})
export class BookviewallComponent implements OnInit{
  getdata:BookTab[] = [];

  constructor(
    public details:MyserviceService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.getallbooktabs();
  }
  getallbooktabs():void{
    this.details.getbookdetails().subscribe((resp:any)=>{
      this.getdata = resp;
    });
  }

  delete(id:number):void{
    this.details.deletebookdetails(id).subscribe(()=>{
      this.getallbooktabs();
    },(err)=>{
      console.log(err);
    });
  }
}
