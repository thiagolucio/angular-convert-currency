import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // @ViewChild(AppComponent, {static: true}) translate: AppComponent;
  // @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;
  // constructor(private router: Router) {}

  constructor(public translate: TranslateService) {
    translate.addLangs(['pt', 'en' ]);
    translate.setDefaultLang('pt');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  ngOnInit() {}

}
