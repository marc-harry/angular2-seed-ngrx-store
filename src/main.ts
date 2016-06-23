import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {provideStore} from '@ngrx/store';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {App} from './app/app';

import {rootReducer} from './app/reducers';
import {APP_SERVICES} from './app/services';
import { APP_ROUTER_PROVIDERS } from './routes';

bootstrap(App, [
  ...HTTP_PROVIDERS,
  ...ROUTER_DIRECTIVES,  
  APP_ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provideStore(rootReducer),
  ...APP_SERVICES,
])
.catch(err => console.error(err));
