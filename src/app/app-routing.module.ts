import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { UnitAddComponent } from './unit/unit-add/unit-add.component';
import { UnitEditComponent } from './unit/unit-edit/unit-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: UnitListComponent },
  { path: 'add', component: UnitAddComponent },
  { path: 'edit/:id', component: UnitEditComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
