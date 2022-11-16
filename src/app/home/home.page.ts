import {Component} from '@angular/core';
import {Browser} from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  open() {
    Browser.open({
      url: 'https://www.google.com/',
      toolbarColor: '#F0F4FF',
      presentationStyle: 'fullscreen',
    });
  }

}
