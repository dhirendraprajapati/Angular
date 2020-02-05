import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      {prefix: "./assets/translate/menu/", suffix: ".json"},
      {prefix: "./assets/translate/howitworks/", suffix: ".json"},
      {prefix: "./assets/translate/brands/", suffix: ".json"},
      {prefix: "./assets/translate/home/", suffix: ".json"},
      {prefix: "./assets/translate/rewards/", suffix: ".json"},
      {prefix: "./assets/translate/faq/", suffix: ".json"},
      {prefix: "./assets/translate/register/", suffix: ".json"},
      {prefix: "./assets/translate/login/", suffix: ".json"}
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  exports: [
    HttpClientModule,
    TranslateModule
  ]
})
export class LangTranslateModule { }
