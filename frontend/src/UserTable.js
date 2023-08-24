import { useState, useEffect, useContext } from 'react'
import './UserTable.css'
import { AppContext } from './AppContext';


export const UserTable = ({ users, handleSave, loading = false }) => {
    const [fadeOut, setFadeOut] = useState(false);
    const { notification, showNotification, setShowNotification, setNotification} = useContext(AppContext)
    console.log({notification})

    useEffect(() => {
        if (showNotification) {
            const fadeTimer = setTimeout(() => {
                setFadeOut(true); // Start the fade-out process
            }, 2500); // Start fading out after 2.5 seconds

            const hideTimer = setTimeout(() => {
                setShowNotification(false);
                setNotification("")
                
                setFadeOut(false); // Reset fade-out state for next notification
            }, 3000); // Completely hide after 3 seconds

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [showNotification, setShowNotification, setNotification]);


    if (loading) {
        return <div className="loader-container"><div className="loader"></div></div>;
    }

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