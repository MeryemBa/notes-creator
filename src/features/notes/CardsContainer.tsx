import React from 'react'
import { useAppSelector } from '../../store/hooks'
import Column from './ColumnContainer'
import Card from './Card'
import { selectNotes, note } from '../../store/notesSlice'

interface ShowNotesProps {}

const CardsContainer: React.FC<ShowNotesProps> = () => {
	const notes = useAppSelector(selectNotes)
	return (
		<div className="notes-container">
			<Column id="column1">
				{notes.map(({ id, content }: note) => {
					return <Card key={id} id={id} paragraphes={content} />
				})}
			</Column>
			<Column id="column2" />
			<Column id="column3" />
			<Column id="column4" />
		</div>
	)
}

export default CardsContainer
