import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AveragePipe } from './average.pipe';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AveragePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
