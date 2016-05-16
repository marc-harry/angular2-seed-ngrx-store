import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provideStore} from '@ngrx/store';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {App} from './app/app';

import {selectedRepo, repos} from './app/reducers';
import {APP_SERVICES} from './app/services';

bootstrap(App, [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provideStore({selectedRepo, repos}),
  ...APP_SERVICES,
])
.catch(err => console.error(err));
