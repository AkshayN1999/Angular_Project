import { Component,OnInit } from '@angular/core';
import { MyserviceService,BookTab } from '../myservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bookwithid',
  templateUrl: './bookwithid.component.html',
  styleUrl: './bookwithid.component.css'
})
export class BookwithidComponent implements OnInit{
  book: BookTab | undefined;
  id: number = 0;

  constructor(public rest:MyserviceService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    var paramid = this.route.snapshot.paramMap.get("id");
    if(paramid!==null && paramid!==undefined){
       this.id =+ paramid;
    }

    this.rest.getbookdetail(this.id).subscribe(
      (data:BookTab)=> this.book = {...data}
    );
  }
}
