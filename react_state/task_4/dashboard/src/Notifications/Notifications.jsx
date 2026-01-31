import React from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

class Notifications extends React.PureComponent {
  render() {
    const { notifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              id={notif.id}
              type={notif.type}
              value={notif.value}
              html={notif.html}
              markAsRead={markNotificationAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  notifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;
