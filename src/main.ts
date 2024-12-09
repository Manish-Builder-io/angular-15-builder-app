import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { builderDevTools } from "@builder.io/dev-tools/angular";
import { AppModule } from "./app/app.module";
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

builderDevTools().catch((err: Error) =>
    console.error("Error starting dev tools:", err)
  );