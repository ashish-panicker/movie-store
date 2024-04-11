import { createActionGroup, emptyProps } from '@ngrx/store';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    Signup: emptyProps(),
    'Signup Sucess': emptyProps(),
    'Signup Failed': emptyProps(),
  },
});
