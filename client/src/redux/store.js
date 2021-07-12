import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./slices/properties";

export const store = configureStore({
	reducer: {
		properties: propertiesReducer,
	},
});
