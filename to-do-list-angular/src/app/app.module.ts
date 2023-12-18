import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component'; // Import your TodoListComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent, // Add TodoListComponent to the declarations array
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports array
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
