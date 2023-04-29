import { useEffect } from "react"

//components
import ReminderDetails from '../components/ReminderDetails'
import ReminderForm from '../components/ReminderForm'
import { useReminderContext } from "../hooks/useRemindersContext"

const Home = () => {
    const {reminders, dispatch} = useReminderContext()

    useEffect(()=>{
        const fetchReminders = async () => {
            const response = await fetch('/api/reminders')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_REMINDERS', payload: json})
            }
        }
        fetchReminders()
    }, [])

    return (
        <div className="home">
            <div className="reminders">
                {reminders && reminders.map((reminder) => (
                    <ReminderDetails key={reminder._id} reminder={reminder} />
                ))}
            </div>
            <ReminderForm />
        </div>
    )
}

export default Home