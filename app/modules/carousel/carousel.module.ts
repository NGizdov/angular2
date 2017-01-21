import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CarouselModule } from 'ng2-bootstrap';
import { CarouselComponent } from './carousel.component';

@NgModule({
    imports: [FormsModule, CommonModule, CarouselModule.forRoot()],
    declarations: [CarouselComponent],
    bootstrap: [CarouselComponent],
    exports: [CarouselComponent]
})
export class CarouselCustomModule { }