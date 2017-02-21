import { GithubService } from './github.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiListItemComponent } from './ui-list-item/ui-list-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReposListComponent } from './repos-list/repos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UiListComponent,
    UiListItemComponent,
    UsersListComponent,
    ReposListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
