import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  name = '';
  font = 'Arial';
  size = 28;
  alignment = 'left';
  fonts = ['Arial', 'Garamond', 'Times New Roman'];
  alignments = ['left', 'center', 'right'];
}
