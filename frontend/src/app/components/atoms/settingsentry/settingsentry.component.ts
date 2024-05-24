import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settingsentry',
  templateUrl: './settingsentry.component.html',
  styleUrl: './settingsentry.component.scss'
})
export class SettingsentryComponent {
  @Input() name :String = 'default';
  @Input() value :String = 'default';
}
