import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  switchLang;
  browserLang;

  constructor(private _header: HeaderService, public translate:TranslateService) { 
    this._header.selectedlang.subscribe(res =>{
      this.switchLang=res;
    })

    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang=translate.getDefaultLang();

    this.languageChanged();
    this._header.selectedlang.next(this.browserLang);
  }

  ngOnInit() {
  }

  menuItem: any=[
    {"_route":"/", "name":"Home"},
    {"_route":"howitworks", "name":"How it works"},
    {"_route":"brands", "name":"Brands"},
    {"_route":"rewards", "name":"Rewards"},
    {"_route":"faq", "name":"Frequently Asked Questions"}
  ]

  selectedLanguage(selectedLanguage){
    this._header.selectedlang.next(selectedLanguage)
  
    this.browserLang=selectedLanguage;
    this.languageChanged();
  }

  languageChanged(){
    this.translate.use(this.browserLang.match(/de|en/)? this.browserLang:'en');
  }
}
