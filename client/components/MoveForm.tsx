import { useState } from 'react'

export default function MoveForm() {
  // UseStates to allow for form inputs changes
  const [newName, setNewName] = useState('')
  const [newLevel, setNewLevel] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value)
  }

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLevel(e.target.value)
  }

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input onChange={handleNameChange} id="name"></input>
        <label htmlFor="level">Level</label>
        <input onChange={handleLevelChange} id="level"></input>
        <label htmlFor="synonyms">Synonyms</label>
        <input id="synonyms"></input>
        <label htmlFor="translation">Translation</label>
        <input id="translation"></input>
        <label htmlFor="move_type">Move Type</label>
        <input id="move_type"></input>
        <label htmlFor="rueda_type">Rueda Sign</label>
        <input id="rueda_type"></input>
        <label htmlFor="starts_with">Starts with</label>
        <input id="starts_with"></input>
        <label htmlFor="contains">Contains</label>
        <input id="contains"></input>
        <label htmlFor="based_on">Based on</label>
        <input id="based_on"></input>
        <label htmlFor="similar_to">Similar to</label>
        <input id="similar_to"></input>
        <label htmlFor="bar_counts">Bar counts</label>
        <input id="bar_counts"></input>
        <label htmlFor="variations">Variations</label>
        <input id="variations"></input>
        <label htmlFor="instructions_for_follower">
          Instructions for Follower
        </label>
        <input id="instructions_for_follower"></input>
        <label htmlFor="instructions_for_lead">Instructions for Lead</label>
        <input id="instructions_for_lead"></input>
        <label htmlFor="source">Video Source</label>
        <input id="source"></input>
      </form>
    </>
  )
}
