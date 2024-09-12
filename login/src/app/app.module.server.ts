import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-Server';
import { AppModule } from './app.module'; // Verifique se o caminho está correto
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
