import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const notifications = (title, message, type) => {
    return (
        store.addNotification({
          title,
          message,
          type,
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          width: 400,
          dismiss: {
            duration: 3000,
            onScreen: true,
            showIcon: true
          }
        })
      )
}
export default notifications;