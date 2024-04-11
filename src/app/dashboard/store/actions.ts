import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TrendingMoviesResponse } from "../types/trending";

// export const load = createAction('[Data] Load')
// export const loadFailed = createAction('[Data] Load Failed', props<{error: any[]}>)

export const dashBoardActions = createActionGroup({
  source: 'Movie',
  events: {
    Load:emptyProps(),
    'Load Success': props<TrendingMoviesResponse>(),
    'Load Failure': props<{errors: any}>()
  }
})

