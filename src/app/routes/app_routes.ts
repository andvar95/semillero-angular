import {RouterModule, Routes} from '@angular/router';
import {CursosComponent} from '../cursos/cursos.component';
import {VideosComponent} from '../videos/videos.component';
import {IntegrantesComponent} from '../integrantes/integrantes.component';
import {MenuComponent} from '../menu/menu.component';
import {DetalleCursoComponent} from '../detalle-curso/detalle-curso.component';
import {EjemplosPipesComponent} from '../ejemplos-pipes/ejemplos-pipes.component';
import {TemplateFormsComponent} from '../formularios/template-forms/template-forms.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  // { path: 'curso/:id', component: DetalleCursoComponent },
  { path: 'curso', component: DetalleCursoComponent },
  { path: 'template-forms', component: TemplateFormsComponent },
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
