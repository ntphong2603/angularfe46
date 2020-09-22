import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { Buoi1Component } from './buoi1/buoi1.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    Buoi1Component,
    FooterComponent,
    ContentsComponent,
    SideBarComponent, //các componet sử dụng (lẫn nhau) trong module này
  ],
  imports: [BrowserModule], //Nơi để impport các module khác vào module này

  providers: [],
  bootstrap: [AppComponent], //Nơi chứa component sử dụng trong index.html
})
export class AppModule {}
