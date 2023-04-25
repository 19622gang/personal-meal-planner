const ReminderDetails = ( {reminder} ) => {
    return (
        <div className="reminder-details">
            <h4>{reminder.title}</h4>
            <p><strong>Load (kg): </strong>{reminder.load}</p>
            <p><strong>Reps : </strong>{reminder.reps}</p>
            <p>{reminder.createdAt}</p>
        </div>
    )
}

export default ReminderDetails