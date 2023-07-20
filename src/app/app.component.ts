import {Component, OnInit} from '@angular/core';
import {SIDEBAR_MENUS} from "./app-sidebar-menus";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  readonly menus = SIDEBAR_MENUS;
  constructor(
    private readonly translateService: TranslateService,
    private readonly titleService: Title,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.registerOnLanguageChange()
  }

  private registerOnLanguageChange(): void {
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.updateTitle();
    });
  }

  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'global.title';
    }
    this.translateService.get(pageTitle).subscribe(title => this.titleService.setTitle(title));
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
}
