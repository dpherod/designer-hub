import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeComponent} from './design-hub/home/home.component';
import {EmploymentBoardComponent} from './design-hub/employment-board/employment-board.component';
import {FireProtectionComponent} from './design-hub/fire-protection/fire-protection.component';
import {FireAlarmComponent} from './design-hub/fire-alarm/fire-alarm.component';
import {PlumbingComponent} from './design-hub/plumbing/plumbing.component';
import {ElectricalComponent} from './design-hub/electrical/electrical.component';
import {MechanicalComponent} from './design-hub/mechanical/mechanical.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AboutUsComponent} from './shared/about-us/about-us.component';
import {JoinComponent} from './shared/join/join.component';
import {RegisterComponent} from './auth/register/register.component';
import { AddTestimonialComponent } from './design-hub/add-testimonial/add-testimonial.component';
import { FireProtectionRfpComponent } from './design-hub/fire-protection/fire-protection-rfp/fire-protection-rfp.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-testimonial', component: AddTestimonialComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'join', component: JoinComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'employment-board', component: EmploymentBoardComponent},
  {path: 'fire-protection', component: FireProtectionComponent},
  {path: 'fire-protection-rfp', component: FireProtectionRfpComponent},
  {path: 'fire-alarm', component: FireAlarmComponent},
  {path: 'plumbing', component: PlumbingComponent},
  {path: 'electrical', component: ElectricalComponent},
  {path: 'mechanical', component: MechanicalComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EmploymentBoardComponent,
    FireProtectionComponent,
    FireAlarmComponent,
    PlumbingComponent,
    ElectricalComponent,
    MechanicalComponent,
    NotFoundComponent,
    AboutUsComponent,
    JoinComponent,
    RegisterComponent,
    AddTestimonialComponent,
    FireProtectionRfpComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
