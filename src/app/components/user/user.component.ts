import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  stringInterpolation: string = 'arvind_keshri';
  placeholder_name = 'Your Name';
  two_way_data = '';

  red() {
    if (this.stringInterpolation == 'rajendra_prasad') {
      this.stringInterpolation = 'arvind_keshri';
      this.placeholder_name = 'Your_name';
    } else {
      this.stringInterpolation = 'rajendra_prasad';
      this.placeholder_name = 'Your Father Name';
    }
  }

  bindTwoWayData() {
    this.two_way_data = 'arvind';
  }
}
