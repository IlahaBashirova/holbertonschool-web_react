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

    return (
      <div className="w-full min-[913px]:w-1/4 min-[913px]:ml-auto">
        {/* Title should stay right-aligned */}
        <div className="notifications-title text-right">
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div
            className={
              "notifications relative border-2 border-dashed border-[var(--main-color)] p-[6px]" +
              " max-[912px]:fixed max-[912px]:inset-0 max-[912px]:w-screen max-[912px]:h-screen" +
              " max-[912px]:bg-white max-[912px]:z-50 max-[912px]:p-6"
            }
          >
            {notifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>

                <button
                  className="absolute top-[10px] right-[10px] border-none bg-transparent cursor-pointer"
                  onClick={() => console.log("Close button has been clicked")}
                  aria-label="Close"
                >
                  <img src={closebtn} alt="Close" />
                </button>

                {/* bullets + spacing; more padding on mobile */}
                <ul className="mt-4 list-disc pl-6 max-[912px]:mt-8 max-[912px]:pl-8 space-y-2">
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
              <p className="mt-4 max-[912px]:mt-8">No new notification for now</p>
            )}
          </div>
        )}
      </div>
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
