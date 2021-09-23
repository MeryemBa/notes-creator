import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Descendant } from 'slate'

export type CustomElement = { type: 'paragraph'; children: CustomText[] }
export type CustomText = { text: string }
export type note = {
	id: string
	content: Descendant[]
}
export interface NotesState {
	notes: note[]
}
const initialState: NotesState = {
	notes: [
		{
			id: 'first_note',
			content: [
				{
					type: 'paragraph',
					children: [{ text: 'A First note is alerady writing.' }],
				},
			],
		},
	],
}
export const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<note>) => {
			state.notes.push(action.payload)
		},
	},
})
export const { addNote } = notesSlice.actions
export const selectNotes = (state: RootState) => state.notes.notes
export default notesSlice.reducer
