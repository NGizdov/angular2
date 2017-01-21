import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppService } from './app.service';

@Component({
  selector: 'didi',
  templateUrl: 'app/app.template.html',
})
export class AppComponent {
  private isNavHovered: boolean = false;
  private isNavBarHoveredSubscription: Subscription;
  constructor(private _appService: AppService) {
    this.isNavBarHoveredSubscription = this._appService.isNavBarHovered.subscribe((isNavBarHovered) => {
      this.isNavHovered = isNavBarHovered;
    });
  }
}
