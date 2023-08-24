import { useContext, useEffect, useState } from "react";
import { UserTable } from './UserTable'
import { AppContext } from "./AppContext";

export const Save = ({id}) => {
    const { newUsers,  saveUser } = useContext(AppContext)
    const [user, setNewUser] = useState()

    useEffect(() => {
        const foundUser = newUsers.find((x) => String(x.id) === String(id))
        setNewUser(foundUser)
    },[newUsers, setNewUser,id])


    return (
    <>
    <UserTable users={[user]} handleSave={()=>saveUser(user)} />
    </>
    )
}