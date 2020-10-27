import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-app';
  closeCovidInfoPanel = !!localStorage.getItem('covidPanel') || false;
  collapse() {
    this.closeCovidInfoPanel = true;
    localStorage.setItem('covidPanel', 'true');
  }
}


