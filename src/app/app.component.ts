import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'coffee-randomizer';
  loadingSize = '0%';
  choosen: String;
  people: String[] = [
    "Victor",
    "Jéssica",
    "João",
    "Edinilton",
    "Maurício",
    "Akira",
    "Nilson",
    "Danilo",
    "Ailton",
    "Antônio"
  ];

  ngOnInit() {
    let elem = document.getElementById("progress-bar");
    let width = 1;
    let frame = () => {
      if (width >= 100) {
        clearInterval(id);
        this.choosen = this.people[Math.floor(Math.random() * this.people.length)];
      } else {
        width++;
        elem.style.width = width + '%';
        this.loadingSize = width + '%';
      }
    }

    let id = setInterval(frame, 30);
  }
}
