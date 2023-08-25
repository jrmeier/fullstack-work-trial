import { useState, useEffect, useContext } from 'react'
import './UserTable.css'
import { AppContext } from './AppContext'


export const UserTable = ({ users = [], handleSave=null, loading = false }) => {
    const [fadeOut, setFadeOut] = useState(false)
    const { notification, showNotification, setShowNotification, setNotification} = useContext(AppContext)

    useEffect(() => {
        if (showNotification) {
            const fadeTimer = setTimeout(() => {
                setFadeOut(true) 
            }, 2500)

            const hideTimer = setTimeout(() => {
                setShowNotification(false)
                setNotification("")
                
                setFadeOut(false)
            }, 3000)

            return () => {
                clearTimeout(fadeTimer)
                clearTimeout(hideTimer)
            }
        }
    }, [showNotification, setShowNotification, setNotification])


    if (loading) {
        return <div className="loader-container"><div className="loader"></div></div>
    }
    console.log({users})

    return (<>
            {Boolean(notification) ? 
                    <div className={`notification ${fadeOut ? 'fade-out' : ''} ${notification.startsWith("Error") ? 'error' : ''}   `}>{notification}</div>
                    : ''
            }

        <table>
        <thead>
            <tr>
                {handleSave ? <td></td>: ''}
                <td>Id</td>
                <td>Name</td>
                <td>Company</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        </thead>
        <tbody>

        { users?.map((user, idx) => (
            <tr key={idx}>
                {handleSave ? <td><button onClick={()=>handleSave(user?.id)} >Save</button></td> : '' }
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.company}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
            </tr>
        )) }
        </tbody>
        </table>
        </>)
    }