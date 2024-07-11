import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { BookviewallComponent } from './bookviewall/bookviewall.component';
import { BookwithidComponent } from './bookwithid/bookwithid.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { HomeComponent } from './home/home.component';
import { PagefirstComponent } from './pagefirst/pagefirst.component';

const routes: Routes = [
  {path:'bookadd',component:InsertComponent},
  {path:'allview',component:BookviewallComponent},
  {path:'bookdetail/:id',component:BookwithidComponent},
  {path:'bedit/:id',component:BookeditComponent},
  {path:'',component:HomeComponent},
  {path:'first',component:PagefirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
