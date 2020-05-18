import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './hello.component';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbAccordionModule, NbIconModule, NbTreeGridModule, NbCardModule, NbSelectModule ,NbCheckboxModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports:      [ 
    RouterModule.forRoot(routes), 
    NbThemeModule.forRoot(), 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    NbLayoutModule, 
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbTreeGridModule, 
    NbAccordionModule, 
    NbIconModule, 
    NbEvaIconsModule,
    NbCheckboxModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
