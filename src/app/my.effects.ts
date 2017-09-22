import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Inject, Injectable, Injector } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyEffects {

    @Effect({ dispatch: false })
    someEffect$ = this.action$
        .ofType('any')
        .do(() => console.log('$rootScope', this.$rootScope))
        .map(toPayload)
        .filter(() => false);

    get $rootScope() {
      return this.injector.get('$rootScope');
    }

    constructor(private action$: Actions, private injector: Injector) {
    }
}
