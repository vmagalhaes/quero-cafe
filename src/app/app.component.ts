import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private coffeeSource = new BehaviorSubject({ contato: null, key: '' });
  currentContato = this.coffeeSource.asObservable();
  audio: HTMLAudioElement;

  title = 'coffee-randomizer';
  loadingSize = '0%';
  choosen: String;
  people: String[] = [
    "Victor",
    "Jéssica",
    "Jéssica",
    "Jéssica",
    "Jéssica",
    "Jéssica",
    "Jéssica",
    "Jéssica",
    "Edinilton",
    "Maurício",
    "Akira",
    "Nilson",
    "Danilo",
    "Ailton",
    "Antônio"
  ];

  ngOnInit() {

  }

  sort() {
    this.audio = document.createElement("audio");
    this.audio.src = "assets/piao-do-bau-com-musica.mp3";
    this.audio.volume = 0.06;
    this.audio.play();

    const elem = document.getElementById("progress-bar");
    let width = 1;

    const frame = () => {
      if (width >= 100) {
        clearInterval(id);
        console.log(Math.floor(Math.random() * this.people.length))
        this.choosen = this.people[Math.floor(Math.random() * this.people.length)];
        this.audio.pause();

        const audioCoffee = document.createElement("audio");
        audioCoffee.src = "assets/quero-cafe-mp3cut.mp3";
        audioCoffee.volume = 0.08;
        audioCoffee.play();
      } else {
        width++;
        elem.style.width = width + '%';
        this.loadingSize = width + '%';

        if (width >= 95) {
          this.audio.volume -= 0.01;
        }
      }
    }

    let id = setInterval(frame, 105);
  }
}
