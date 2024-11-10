import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import authLoginReducer from "@/auth/auth.slice";
import loginReducer from "@/auth/login/login.slice";

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["authLogin", "login"],
};

const rootReducer = combineReducers({
  authLogin: authLoginReducer,
  login: loginReducer,
});

export { rootPersistConfig, rootReducer };
