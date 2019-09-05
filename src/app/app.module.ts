import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { UnitAddComponent } from './unit/unit-add/unit-add.component';
import { UnitEditComponent } from './unit/unit-edit/unit-edit.component';
import { UnitService } from './unit/unit.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitListComponent,
    UnitAddComponent,
    UnitEditComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
