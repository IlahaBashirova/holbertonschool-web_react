import React from "react";
import closebtn from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    const bounceClass =
      notifications.length > 0 && !displayDrawer ? "animate-bounce" : "";

    return (
      <>
        <div
          className={
            "fixed right-6 top-6 z-50 text-right max-[912px]:static max-[912px]:mt-6 max-[912px]:text-center " +
            bounceClass
          }
        >
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div
            className="
              notifications fixed right-6 top-16 z-50 w-[25%]
              border-2 border-dashed border-[var(--main-color)] bg-white p-[6px]
              max-[912px]:inset-0 max-[912px]:w-full max-[912px]:h-full max-[912px]:p-12
            "
          >
            {notifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>

                <button
                  className="absolute right-3 top-3 border-none bg-transparent cursor-pointer"
                  onClick={() => console.log("Close button has been clicked")}
                  aria-label="Close"
                >
                  <img src={closebtn} alt="Close" className="h-4 w-4" />
                </button>

                <ul className="mt-3 list-disc pl-6 max-[912px]:list-none max-[912px]:pl-0">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: true,
  notifications: [],
};

export default Notifications;
