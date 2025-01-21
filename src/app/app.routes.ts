import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { CompoundsComponent } from './components/compounds/compounds.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompoundDetailComponent } from './components/compound-detail/compound-detail.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'developers/:id', component: DeveloperDetailComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/:id', component: PropertyDetailComponent },
  { path: 'compounds', component: CompoundsComponent },
  { path: 'compounds/:id', component: CompoundDetailComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: NotFoundComponent },
];
