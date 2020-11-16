import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<{ }>>('root reducer');


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        StoreModule.forRoot(REDUCER_TOKEN, { }),
        EffectsModule.forRoot(
            [
            ]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [
        {
            provide: REDUCER_TOKEN,
            useValue: reducers
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
