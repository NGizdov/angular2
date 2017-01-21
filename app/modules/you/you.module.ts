import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { YouComponent } from './you.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
      YouComponent
  ]
})
export class YouModule {}