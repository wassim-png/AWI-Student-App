import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Enregistre la locale française
registerLocaleData(localeFr);

bootstrapApplication(App);
