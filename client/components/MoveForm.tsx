import { useState } from 'react'

export default function MoveForm() {
  // UseStates to allow for form inputs changes
  const [formValues, setFormValues] = useState({
    name: '',
    level: '',
    synonyms: '',
    translation: '',
    moveType: '',
    ruedaType: '',
    startsWith: '',
    contains: '',
    basedOn: '',
    similarTo: '',
    barCounts: '',
    variations: '',
    instructionsForFollower: '',
    instructionsForLead: '',
    source: '',
  })

  // One handleChange to rule them all!
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={formValues.name}
          id="name"
        ></input>
        <label htmlFor="level">Level</label>
        <input
          name="level"
          onChange={handleChange}
          value={formValues.level}
          id="level"
        ></input>
        <label htmlFor="synonyms">Synonyms</label>
        <input
          name="synonyms"
          onChange={handleChange}
          value={formValues.synonyms}
          id="synonyms"
        ></input>
        <label htmlFor="translation">Translation</label>
        <input
          name="translation"
          onChange={handleChange}
          value={formValues.translation}
          id="translation"
        ></input>
        <label htmlFor="move_type">Move Type</label>
        <input
          name="moveType"
          onChange={handleChange}
          value={formValues.moveType}
          id="move_type"
        ></input>
        <label htmlFor="rueda_type">Rueda Sign</label>
        <input
          name="ruedaType"
          onChange={handleChange}
          value={formValues.ruedaType}
          id="rueda_type"
        ></input>
        <label htmlFor="starts_with">Starts with</label>
        <input
          name="startsWith"
          onChange={handleChange}
          value={formValues.startsWith}
          id="starts_with"
        ></input>
        <label htmlFor="contains">Contains</label>
        <input
          name="contains"
          onChange={handleChange}
          value={formValues.contains}
          id="contains"
        ></input>
        <label htmlFor="based_on">Based on</label>
        <input
          name="basedOn"
          onChange={handleChange}
          value={formValues.basedOn}
          id="based_on"
        ></input>
        <label htmlFor="similar_to">Similar to</label>
        <input
          name="similarTo"
          onChange={handleChange}
          value={formValues.similarTo}
          id="similar_to"
        ></input>
        <label htmlFor="bar_counts">Bar counts</label>
        <input
          name="barCounts"
          onChange={handleChange}
          value={formValues.barCounts}
          id="bar_counts"
        ></input>
        <label htmlFor="variations">Variations</label>
        <input
          name="variations"
          onChange={handleChange}
          value={formValues.variations}
          id="variations"
        ></input>
        <label htmlFor="instructions_for_follower">
          Instructions for Follower
        </label>
        <input
          name="instructionsForFollower"
          onChange={handleChange}
          value={formValues.instructionsForFollower}
          id="instructions_for_follower"
        ></input>
        <label htmlFor="instructions_for_lead">Instructions for Lead</label>
        <input
          name="instructionsForLead"
          onChange={handleChange}
          value={formValues.instructionsForLead}
          id="instructions_for_lead"
        ></input>
        <label htmlFor="source">Video Source</label>
        <input
          name="source"
          onChange={handleChange}
          value={formValues.source}
          id="source"
        ></input>
      </form>
    </>
  )
}
