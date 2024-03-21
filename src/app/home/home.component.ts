import { MatGridListModule } from '@angular/material/grid-list';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatCommonModule} from '@angular/material/core';
import { SectionComponent } from '../section/section.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCommonModule,
    MatCardModule,
    MatGridListModule,
    SectionComponent,
    ProjectsComponent,
     ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
