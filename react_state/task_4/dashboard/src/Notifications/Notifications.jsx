import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

class Notifications extends React.PureComponent {
  render() {
    const { notifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              id={n.id}
              type={n.type}
              value={n.value}
              html={n.html}
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
