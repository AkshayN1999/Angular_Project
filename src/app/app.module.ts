import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BookviewallComponent } from './bookviewall/bookviewall.component';
import { BookwithidComponent } from './bookwithid/bookwithid.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { HomeComponent } from './home/home.component';
import { PagefirstComponent } from './pagefirst/pagefirst.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    BookviewallComponent,
    BookwithidComponent,
    BookeditComponent,
    HomeComponent,
    PagefirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
