import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from "@ngrx/router-store";
import { diceInputReducer } from './dice-input.reducer';



export const reducers: ActionReducerMap<{ }> = {
    diceInput: diceInputReducer
};

export const selectRouter = createFeatureSelector<fromRouter.RouterReducerState<any>>('router');

export const {
    selectCurrentRoute,
    selectQueryParams,    // select the current route query params
    selectRouteParams,    // select the current route params
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);
