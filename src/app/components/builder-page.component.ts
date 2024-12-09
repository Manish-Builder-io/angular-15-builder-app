import { Component, Input, OnInit } from "@angular/core";
import {
  fetchOneEntry,
  BuilderContent,
  isPreviewing,
} from "@builder.io/sdk-angular";
import { environment } from "../../environments/environment";
import { CUSTOM_COMPONENTS } from "../builder-registry";

type CustomComponent = {
  name: string;
  component: any;
};

@Component({
  selector: "app-builder-page",
  template: `
    <ng-container *ngIf="content || isPreviewing; else notFound">
      <builder-content
        [model]="model"
        [content]="content"
        [apiKey]="apiKey"
        [customComponents]="customComponents"
      ></builder-content>
    </ng-container>

    <ng-template #notFound>
      <div>404 - Content not found</div>
    </ng-template>
  `,
})
export class BuilderPage implements OnInit {
  isPreviewing = isPreviewing();

  @Input() model: string = "page";

  apiKey: string = environment.builderApiKey;

  content: BuilderContent | null = null;

  customComponents: CustomComponent[] = CUSTOM_COMPONENTS;

  async ngOnInit(): Promise<void> {
    const urlPath: string = window.location.pathname || "/";

    const builderContent: BuilderContent | null = await fetchOneEntry({
      model: this.model,
      apiKey: this.apiKey,
      userAttributes: {
        urlPath,
      },
    });

    if (!builderContent) {
      return;
    }

    this.content = builderContent;
  }
}
