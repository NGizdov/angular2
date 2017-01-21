import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AppService {
  private isNavBarHoveredSource = new Subject<boolean>();

  // Observable boolean streams  
  public isNavBarHovered = this.isNavBarHoveredSource.asObservable();

  // Service message commands
  toggleNavBar(showNavBar: boolean) {
    this.isNavBarHoveredSource.next(showNavBar);
  }
}