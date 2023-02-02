import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { MenuLAComponent } from './components/core/menu-l-a/menu-l-a.component';
import { MenuRAComponent } from './components/core/menu-r-a/menu-r-a.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { NotFoundComponent } from './components/main/not-found/not-found.component';
import { ScriptListComponent } from './components/main/script-list/script-list.component';
import { SourceListComponent } from './components/main/source-list/source-list.component';
import { ToolListComponent } from './components/main/tool-list/tool-list.component';
import { AIntervallesComponent } from './components/scripts/lvlb/a-intervalles/a-intervalles.component';
import { AQqoqcpComponent } from './components/scripts/lvlb/a-qqoqcp/a-qqoqcp.component';
import { BackScriptsComponent } from './components/core/back-scripts/back-scripts.component';
import { QQOQCPMusiqueComponent } from './components/scripts/lvlb/q-q-o-q-c-p-musique/q-q-o-q-c-p-musique.component';
import { ChordWheelComponent } from './components/tools/chord-wheel/chord-wheel.component';
import { BackToolsComponent } from './components/core/back-tools/back-tools.component';
import { NotesComponent } from './components/scripts/lvla/notes/notes.component';
import { IntroComponent } from './components/scripts/lvla/intro/intro.component';
import { KeyRefComponent } from './components/scripts/lvla/key-ref/key-ref.component';
import { NotesTradComponent } from './components/scripts/lvla/notes-trad/notes-trad.component';
import { PulsationComponent } from './components/scripts/lvla/pulsation/pulsation.component';
import { TimeValuesAComponent } from './components/scripts/lvla/time-values-a/time-values-a.component';
import { MelodyComponent } from './components/scripts/lvla/melody/melody.component';
import { MetricsAComponent } from './components/scripts/lvla/metrics-a/metrics-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuLAComponent,
    MenuRAComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ScriptListComponent,
    SourceListComponent,
    ToolListComponent,
    AIntervallesComponent,
    AQqoqcpComponent,
    BackScriptsComponent,
    QQOQCPMusiqueComponent,
    ChordWheelComponent,
    BackToolsComponent,
    NotesComponent,
    IntroComponent,
    KeyRefComponent,
    NotesTradComponent,
    PulsationComponent,
    TimeValuesAComponent,
    MelodyComponent,
    MetricsAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
