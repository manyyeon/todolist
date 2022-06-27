// 리듀서들ㅇㄹ 통합할 때, index.js에서 리듀서들을 합쳐준다.

import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({ todos });

export default rootReducer;
