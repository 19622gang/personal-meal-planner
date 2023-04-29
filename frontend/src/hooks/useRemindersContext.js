import { RemindersContext } from "../context/ReminderContext";
import { useContext } from 'react'

export const useReminderContext = () => {
    const context = useContext(RemindersContext)

    // checking if it is invoked in the
    // specified component tree

    if (!context) {
        throw Error('useRemindersContext must be used inside a RemindersContext Provider ')
    }

    return context
}