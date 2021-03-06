/*
Copyright 2018 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import * as actions from './actionTypes';

// allows the two select drops (for mobile and large screens) to toggle in sync
export const toggleMainNavigation = toggled => {
  return {
    type: actions.TOGGLE_MAIN_NAVIGATION,
    payload: {
      toggled,
    },
  };
};
// sets whether or not the welcome panel was viewed (that giant welcome to devhub container)e
export const setWelcomePanelViewed = viewed => {
  return {
    type: actions.SET_WELCOME_PANEL_VIEWED,
    payload: {
      viewed,
    },
  };
};
