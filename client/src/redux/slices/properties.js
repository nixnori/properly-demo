import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProperties = createAsyncThunk("content/fetchProperties", async (thunkAPI) => {
	const res = await axios.get("http://localhost:8000/properties");
	return res.data.payload.properties;
});

export const PropertiesSlice = createSlice({
	name: "properties",
	initialState: {
		properties: [],
		status: "idle",
		error: null,
	},
	extraReducers: {
		[fetchProperties.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchProperties.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.properties = action.payload;
		},
		[fetchProperties.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error;
		},
	},
});

export default PropertiesSlice.reducer;
