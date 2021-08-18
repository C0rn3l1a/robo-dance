import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'robo-dance';
  stars: any[] = [];

  constructor() {
    for(let i = 0; i < Math.floor(10 + Math.random() * 50); i++) {
      let x = Math.floor(50 + (Math.random() * (window.innerWidth - 100)));
      let y = Math.floor(50 + (Math.random() * (window.innerHeight - 100)));
      let radius = Math.floor(3 + Math.random() * 7);
      this.stars.push({
        left: `${x}px`,
        top: `${y}px`,
        'border-radius': `${radius}px`,
        width: `${radius}px`,
        height: `${radius}px`,
      });
    }
  }

}
