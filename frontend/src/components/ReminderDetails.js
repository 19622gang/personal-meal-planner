import { useReminderContext } from "../hooks/useRemindersContext"

const ReminderDetails = ( {reminder} ) => {
    const { dispatch } = useReminderContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/reminders/' + reminder._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_REMINDER', payload: json})
        }
    }
    
    return (
        <div className="reminder-details">
            <h4>{reminder.title}</h4>
            <p><strong>Load (kg): </strong>{reminder.load}</p>
            <p><strong>Reps : </strong>{reminder.reps}</p>
            <p>{reminder.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ReminderDetails