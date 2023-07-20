import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey', standalone: true })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    en: { name: 'English' },
    ru: { name: 'Русский' },
    uz: { name: 'O`zbekcha' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
