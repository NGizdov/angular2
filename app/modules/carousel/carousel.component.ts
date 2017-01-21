import {Component} from '@angular/core'

@Component({
    selector: 'carousel-custom',
    templateUrl: 'app/modules/carousel/carousel.template.html'
})
export class CarouselComponent {
  private myInterval:number = 5000;
  private noWrapSlides:boolean = false;
  private slides:any[] = [];
  private activeSlideIndex: number = 0;
 
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
 
  private addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }
 
  private selectSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}