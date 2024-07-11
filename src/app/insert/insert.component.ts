import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {
  @Input() productdata = {BookName:'',BookSummary:''};

  constructor(public rest: MyserviceService, private router:Router){}

  ngOnInit(): void {
    
  }

  addproduct():void{
    this.rest.insertbook(this.productdata).subscribe((result)=>{
      this.router.navigate(['/bookview']);
    },(err)=>{
      console.log(err);
    });
  }
}
