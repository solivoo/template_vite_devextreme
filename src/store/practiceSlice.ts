import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface PracticeState {
  reduxCount: number;
  /** Texto del TextBox (sincronizado con Redux) */
  draft: string;
}

const initialState: PracticeState = {
  reduxCount: 0,
  draft: '',
};

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    incrementReduxCount(state) {
      state.reduxCount += 1;
    },
    setDraft(state, action: PayloadAction<string>) {
      state.draft = action.payload;
    },
  },
});

export const { incrementReduxCount, setDraft } = practiceSlice.actions;
