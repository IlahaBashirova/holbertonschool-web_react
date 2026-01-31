import React from "react";
import PropTypes from "prop-types";
import closebtn from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

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

    // ✅ Task 5: bounce ONLY when drawer is closed AND there are notifications
    const bounceTitle = notifications.length > 0 && displayDrawer === false;

    return (
      <>
        {/* ✅ Title always visible, top-right */}
        <div
          className={[
            "fixed top-2 right-3 z-50 text-right cursor-pointer",
            bounceTitle ? "animate-bounce" : "",
          ].join(" ")}
        >
          <p>Your notifications</p>
        </div>

        {/* ✅ Drawer */}
        {displayDrawer && (
          <div
            className={[
              // Desktop
              "fixed top-10 right-3 z-40 w-[25%] min-w-[320px]",
              "border border-dashed border-[var(--main-color)] bg-white",
              "p-4",
              // Mobile/tablet < 912px => full screen
              "max-[912px]:inset-0 max-[912px]:w-full max-[912px]:h-full",
              "max-[912px]:border-0 max-[912px]:p-3",
            ].join(" ")}
          >
            {notifications.length > 0 ? (
              <>
                <p className="mb-3">Here is the list of notifications</p>

                <button
                  type="button"
                  aria-label="Close"
                  className="absolute top-2 right-2 border-0 bg-transparent cursor-pointer"
                  onClick={() => console.log("Close button has been clicked")}
                >
                  <img src={closebtn} alt="Close" className="h-4 w-4" />
                </button>

                <ul className="list-disc pl-5 max-[912px]:list-none max-[912px]:pl-0">
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
              // ✅ Empty state (must match exact text in tests)
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
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: true,
  notifications: [],
};

export default Notifications;
