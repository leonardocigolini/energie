import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PageModule } from './page/page.module';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { ContattiComponent} from './page/contatti/contatti.component';
import { PrivacyComponent} from './page/privacy/privacy.component';
import { ArticleListComponent} from './article/article-list/article-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'chisiamo', component: ChiSiamoComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'articoli', component: ArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), PageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
