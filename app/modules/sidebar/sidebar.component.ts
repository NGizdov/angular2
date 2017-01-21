import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'sidebar',
    templateUrl: 'app/modules/sidebar/sidebar.template.html'
})
export class SidebarComponent {
    private isHovered: boolean = false;
    private items: Array<SidebarItem> = [
        { title: "Рожден Ден", iconClass: "icon-bd", navigationUrl: "bd" },
        { title: "ТИ", iconClass: "icon-you", navigationUrl: "you" },
        { title: "Семейството", iconClass: "icon-family", navigationUrl: "family" },
        { title: "Моментът", iconClass: "icon-moment", navigationUrl: "moment" },
        { title: "Какво ни очаква", iconClass: "icon-future", navigationUrl: "future" }
    ]

    constructor(private _appService: AppService, private _router: Router) {}

    private isHover(over: boolean) {
        this.isHovered = over;
        this._appService.toggleNavBar(this.isHovered);
    }

    private goHome() {
        this._router.navigateByUrl('home');
    }
    private goTo(item: SidebarItem) {
        this._router.navigateByUrl(item.navigationUrl);
    }
}

interface SidebarItem {
    title: string;
    iconClass: string;
    navigationUrl: string
}