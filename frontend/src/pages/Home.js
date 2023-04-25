import { useEffect, useState } from "react"

//components
import ReminderDetails from '../components/ReminderDetails'
import ReminderForm from '../components/ReminderForm'

const Home = () => {
    const [reminders, setReminders] = useState(null)
    useEffect(()=>{
        const fetchReminders = async () => {
            const response = await fetch('/api/reminders')
            const json = await response.json()

            if (response.ok) {
                // update local states
                setReminders(json)
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