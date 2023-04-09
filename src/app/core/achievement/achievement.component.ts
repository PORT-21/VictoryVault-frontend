import { Component, Input } from '@angular/core';

@Component({
  selector: 'achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
    @Input() title?: string;
    @Input() description?: string;
    @Input() src?: string;
}
