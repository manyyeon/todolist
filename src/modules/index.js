// 리듀서들ㅇㄹ 통합할 때, index.js에서 리듀서들을 합쳐준다.

import todos from "./todos";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todos });

export default rootReducer;
