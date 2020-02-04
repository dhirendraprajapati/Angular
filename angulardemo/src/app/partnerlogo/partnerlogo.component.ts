import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerlogo',
  templateUrl: './partnerlogo.component.html',
  styleUrls: ['./partnerlogo.component.css']
})
export class PartnerlogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imgMargin="margin-left: 50px;";

  logImages: any = [
    {"link":"https://aftermarket.zf.com/go/en/aftermarket-portal/about-zf-aftermarket/about-us/our-brands/zf/",
     "image": "../../assets/images/zflogo.png"
    },
    {"link":"https://aftermarket.zf.com/go/en/lemfoerder/home/",
     "image": "../../assets/images/lemforder.png"
    },
    {"link":"https://aftermarket.zf.com/go/en/sachs/home/",
     "image": "../../assets/images/sachs.png"
    },
    {"link":"https://www.trwaftermarket.com/en/",
     "image": "../../assets/images/trw.png"
    },
    {"link":"https://aftermarket.zf.com/go/en/boge/home/?forceLanguage=en",
     "image": "../../assets/images/boge.png"
    }
  ]
}
