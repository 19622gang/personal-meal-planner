import { useState } from "react"
import { useReminderContext } from "../hooks/useRemindersContext"

const ReminderForm = () => {

    const { dispatch } = useReminderContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reminder = {title, load, reps}

        const response = await fetch('/api/reminders', {
            method: 'POST',
            body: JSON.stringify(reminder),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New reminder added', json)
            dispatch({type: "CREATE_REMINDER", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Reminder</h3>

            <label>Reminder Title:</label>
            <input 
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />
            <label>Load (in kg):</label>
            <input 
                type = "number"
                onChange = {(e) => setLoad(e.target.value)}
                value = {load}
            />
            <label>Reps:</label>
            <input 
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <button>Add Reminder</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ReminderForm