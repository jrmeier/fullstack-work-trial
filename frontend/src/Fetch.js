import { useContext } from "react"
import { AppContext } from "./AppContext"
import { UserTable } from './UserTable'


export const Fetch = () => {
    const { existingUsers, fetchExistingUsers, fetchExistingUsersStatus } = useContext(AppContext)
    
    return <>
        <button onClick={fetchExistingUsers}>
            Fetch
        </button>
        <UserTable users={existingUsers} loading={fetchExistingUsersStatus === 'loading'}/>
    </>
}