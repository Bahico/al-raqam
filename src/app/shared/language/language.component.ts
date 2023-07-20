import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subject, takeUntil} from "rxjs";
import {SessionStorageService} from "ngx-webstorage";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NgClass, NgForOf} from "@angular/common";
import {LANGUAGES} from "../language.enum";
import {LanguageService} from "./language.service";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FindLanguageFromKeyPipe} from "./find-language-from-key.pipe";

@Component({
  selector: 'language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss'],
  standalone: true,
  imports: [
    NzDropDownModule,
    NgClass,
    NzButtonModule,
    NgForOf,
    FindLanguageFromKeyPipe
  ],
  providers: [LanguageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent implements AfterViewInit, OnDestroy, OnInit {
  readonly languages = LANGUAGES;
  sessionStorageLang: string;
  private readonly destroy$ = new Subject<void>();

  constructor(
    public langService: LanguageService,
    private readonly translateService: TranslateService,
    private readonly cdr: ChangeDetectorRef,
    private readonly sessionStorageService: SessionStorageService,
  ) {
  }

  ngOnInit(): void {
    this.sessionStorageLang = this.sessionStorageService.retrieve('locale');
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeLanguage(languageKey: string): void {
    this.langService.currentLang = languageKey;
    this.langService.change(languageKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.langService.currentLang = languageKey));
  }

}
