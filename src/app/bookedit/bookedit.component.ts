import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrl: './bookedit.component.css'
})
export class BookeditComponent implements OnInit{
  @Input() bookdata: any = {BookName:'',BookSummary:''};
  id: number=0;

  constructor(public rest:MyserviceService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get("id");
    if(paramId!==null && paramId!==undefined){
      this.id=+paramId;
    }
    this.rest.getbookdetail(this.id).subscribe((data:{})=>{
      console.log(data);
      this.bookdata = data;
    });
  }

  updateProduct():void{
    this.rest.editbookdetails(this.id,this.bookdata).subscribe((result)=>{
      this.router.navigate(['/bookdetail/'+this.id])
    },(err)=>{
      console.log(err);
    });
  }
}
