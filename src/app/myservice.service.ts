import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BookTab{
  BookId:number;
  BookName:string;
  BookSummary:string;
}
const endpoint = 'http://localhost:57391/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  insertbook(product:any):Observable<any>{
    return this.http.post(endpoint + 'postwebapitab',product);
  }

  getbookdetails():Observable<any>{
    return this.http.get<BookTab>(endpoint + 'getwebapitabs');
  }

  deletebookdetails(id:number):Observable<any>{
    return this.http.delete<BookTab>(endpoint + 'deletewebapitab/'+id);
  }

  getbookdetail(id:number):Observable<any>{
    return this.http.get<BookTab>(endpoint+'getwebapitab/'+id);
  }

  editbookdetails(id:number,product:BookTab):Observable<any>{
    return this.http.put<BookTab>(endpoint+'putwebapitab/'+id,product);
  }
}
