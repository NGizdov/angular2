import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { FamilyComponent } from './family.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
      FamilyComponent
  ]
})
export class FamilyModule {}