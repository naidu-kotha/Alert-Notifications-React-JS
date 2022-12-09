import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="content">{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
