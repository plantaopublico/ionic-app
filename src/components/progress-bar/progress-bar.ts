import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;

  constructor() {
    window.setTimeout(() => {
      this.progress = 2;
    }, 1000)
  }

}
