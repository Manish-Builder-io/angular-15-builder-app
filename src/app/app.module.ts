import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { Counter } from "./components/counter.component";
import { Content } from "@builder.io/sdk-angular";
import { BuilderPage } from "./components/builder-page.component";
import { AppComponent } from "./app.component";
import { BuilderBlock } from '@builder.io/sdk-angular';

@NgModule({
    declarations: [
        AppComponent,
        Counter,
        BuilderPage
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Content
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
