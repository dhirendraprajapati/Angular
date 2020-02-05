import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {
  
  constructor(public translate:TranslateService, private _header:HeaderService) { 
    //console.log(this._header.selectedlang);
  }

  ngOnInit() {
  }

}
