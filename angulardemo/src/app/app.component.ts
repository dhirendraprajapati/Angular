import { HeaderService } from './appServices/header.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  pageName:string;

  constructor(private router:Router, private _header:HeaderService){
    this.router.events.subscribe((event:RouterEvent) => {
      if(event instanceof NavigationEnd){
        var lastIndex = window.location.pathname.lastIndexOf('/')+1;
        this.pageName = window.location.pathname.substring(lastIndex);
        //console.log(lastIndex);
        //console.log(this.pageName);
        
        if(this.pageName=='de')
        {
          this.pageName='';
        }
        this._header.pageName.next(this.pageName);

        if(window.location.pathname.match('/de/') || window.location.pathname=='/de'){
          this._header.selectedlang.next('de');
          console.log('de');
        }
        else{
          this._header.selectedlang.next('en');
          console.log('en');
        }
      }
    })
  }
}
