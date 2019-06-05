import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

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
        console.log(_.random(0, (this.people.length - 1)))
        this.choosen = this.people[0];
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
