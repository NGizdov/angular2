import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BdComponent } from './bd.component';
import { CarouselCustomModule } from '../carousel/carousel.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselCustomModule
  ],
  declarations: [ 
      BdComponent
  ]
})
export class BdModule {}