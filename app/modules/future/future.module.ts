import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { FutureComponent } from './future.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
      FutureComponent
  ]
})
export class FutureModule {}