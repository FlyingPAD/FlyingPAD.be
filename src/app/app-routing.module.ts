import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/main/not-found/not-found.component';
import { ScriptListComponent } from './components/main/script-list/script-list.component';
import { SourceListComponent } from './components/main/source-list/source-list.component';
import { ToolListComponent } from './components/main/tool-list/tool-list.component';
import { ChordWheelComponent } from './components/tools/chord-wheel/chord-wheel.component';
import { IntroComponent } from './components/scripts/lvla/intro/intro.component';
import { KeyRefComponent } from './components/scripts/lvla/key-ref/key-ref.component';
import { NotesComponent } from './components/scripts/lvla/notes/notes.component';
import { NotesTradComponent } from './components/scripts/lvla/notes-trad/notes-trad.component';
import { PulsationComponent } from './components/scripts/lvla/pulsation/pulsation.component';
import { TimeValuesAComponent } from './components/scripts/lvla/time-values-a/time-values-a.component';
import { MelodyComponent } from './components/scripts/lvla/melody/melody.component';
import { MetricsAComponent } from './components/scripts/lvla/metrics-a/metrics-a.component';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { MetronomeComponent } from './components/tools/metronome/metronome.component';

const routes: Routes = 
[
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  // ----------------------------------------------------------------------- Main Pages
  { path : 'home', component : HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'not-found', component: NotFoundComponent },
  { path : 'script-list', component : ScriptListComponent},
  { path : 'source-list', component : SourceListComponent},
  { path : 'tool-list', component : ToolListComponent},
  // ----------------------------------------------------------------------- Scripts
  { path : 'intro', component : IntroComponent},
  { path : 'key-ref', component : KeyRefComponent},
  { path : 'melody', component : MelodyComponent},
  { path : 'metrics-a', component : MetricsAComponent},
  { path : 'notes', component : NotesComponent},
  { path : 'notes-trad', component : NotesTradComponent},
  { path : 'pulsation', component : PulsationComponent},
  { path : 'time-values-a', component : TimeValuesAComponent},
  // ----------------------------------------------------------------------- Tools
  { path : 'chord-wheel', component : ChordWheelComponent},
  { path : 'metronome', component : MetronomeComponent},
  // ----------------------------------------------------------------------- 
  { path : "**", redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
