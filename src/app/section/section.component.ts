import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import the MatCardModule from the correct module
import { MatFormFieldModule } from '@angular/material/form-field'; // Import the MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import the MatInputModule
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { MatButtonModule } from '@angular/material/button'; // Import the MatButtonModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import the MatCheckboxModule
import { MatTabsModule } from '@angular/material/tabs'; // Import the MatTabsModule
import {MatGridListModule} from '@angular/material/grid-list'
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule
  ], // Add MatCardModule to the imports array
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
  }

}
