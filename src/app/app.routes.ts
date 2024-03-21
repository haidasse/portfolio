import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [

{path:"tech",component:SectionComponent},
{path:"home", component:HomeComponent},
{path:"projects",component:ProjectsComponent}
];
