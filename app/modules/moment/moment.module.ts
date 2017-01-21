import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MomentComponent } from './moment.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
      MomentComponent
  ]
})
export class MomentModule {}