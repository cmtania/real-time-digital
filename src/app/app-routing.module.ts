import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalClockComponent } from 'src/features/digital-clock/digital-clock.component';

const routes: Routes = [
  { path: 'home', component: DigitalClockComponent },
  { path: '',redirectTo: '/home',pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
