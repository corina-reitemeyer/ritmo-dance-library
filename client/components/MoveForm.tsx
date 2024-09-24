import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { DanceMoves } from '../../models/dance'
import { addMove } from '../apis/apiClient'

export default function MoveForm() {
  // UseStates to allow for form inputs changes
  const [formValues, setFormValues] = useState({
    name: '',
    styleId: 0,
    level: '',
    synonyms: '',
    translation: '',
    moveType: '',
    ruedaType: '',
    startsWith: '',
    contains: '',
    basedOn: '',
    similarTo: '',
    barCounts: 0,
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

  // Adding new data into the dance_moves database
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (move: DanceMoves) => addMove(move),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['dance_moves'] }),
  })

  // Handles the submit interaction when user clicks on submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addMutation.mutate({
      name: formValues.name,
      level: formValues.level,
      synonyms: formValues.synonyms,
      translation: formValues.translation,
      moveType: formValues.moveType,
      ruedaSign: formValues.ruedaType,
      startsWith: formValues.startsWith,
      contains: formValues.contains,
      basedOn: formValues.basedOn,
      similarTo: formValues.similarTo,
      barCounts: formValues.barCounts,
      variations: formValues.variations,
      instructionsForFollower: formValues.instructionsForFollower,
      instructionsForLead: formValues.instructionsForLead,
      source: formValues.source,
      style_id: formValues.styleId,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={formValues.name}
          id="name"
        ></input>
        <label htmlFor="styleId">Dance Style</label>
        <input
          name="styleId"
          type="number"
          onChange={handleChange}
          value={formValues.styleId}
          id="styleId"
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
        <label htmlFor="rueda_sign">Rueda Sign</label>
        <input
          name="ruedaSign"
          onChange={handleChange}
          value={formValues.ruedaType}
          id="rueda_sign"
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
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              barCounts: parseInt(e.target.value) || 0,
            })
          }
          id="bar_counts"
          value={formValues.barCounts}
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
        <button>Submit</button>
      </form>
    </>
  )
}
