import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const successNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="alert-content">
        <h1 className="alert-heading success">Success</h1>
        <p className="alert-msg">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="alert-content">
        <h1 className="alert-heading error">Error</h1>
        <p className="alert-msg">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <MdWarning className="icon warning" />
      <div className="alert-content">
        <h1 className="alert-heading warning">Warning</h1>
        <p className="alert-msg">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <MdInfo className="icon info" />
      <div className="alert-content">
        <h1 className="alert-heading info">Info</h1>
        <p className="alert-msg">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="bg">
      <h1 className="heading">Alert Notifications</h1>
      {successNotification()}
      {errorNotification()}
      {warningNotification()}
      {infoNotification()}
    </div>
  )
}

export default AlertNotifications
