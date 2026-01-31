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

    // ✅ Task 5: bounce ONLY when there are notifications AND the drawer is closed
    const shouldBounce = notifications.length > 0 && displayDrawer === false;

    return (
      <>
        {/* ✅ Title must exist always (drawer open or closed) */}
        <div
          className={[
            "notifications-title",
            "fixed top-2 right-4 z-50",
            shouldBounce ? "animate-bounce" : "",
            // nice on small screens
            "max-[912px]:left-0 max-[912px]:right-0 max-[912px]:text-center",
          ].join(" ")}
        >
          <p className="text-sm font-medium">Your notifications</p>
        </div>

        {displayDrawer && (
          <div
            className={[
              "notifications",
              "fixed right-4 top-10 z-40",
              "w-1/4",
              "border-2 border-dashed border-[var(--main-color)]",
              "p-4 bg-white",
              // ✅ responsive (Task 4): full width/height on small screens,
              // BUT keep panel BELOW the title (top-10)
              "max-[912px]:left-0 max-[912px]:right-0",
              "max-[912px]:w-full",
              "max-[912px]:h-[calc(100vh-2.5rem)]",
              "max-[912px]:p-3",
            ].join(" ")}
          >
            {notifications.length > 0 ? (
              <>
                <p className="mb-2 font-medium">Here is the list of notifications</p>

                <button
                  type="button"
                  aria-label="Close"
                  className="absolute top-2 right-2 cursor-pointer border-none bg-transparent"
                  onClick={() => console.log("Close button has been clicked")}
                >
                  <img src={closebtn} alt="Close" className="h-4 w-4" />
                </button>

                <ul
                  className={[
                    // Desktop: bullets like the screenshot
                    "list-disc pl-6",
                    // Mobile/tablet: remove bullets + spacing
                    "max-[912px]:list-none max-[912px]:pl-0",
                  ].join(" ")}
                >
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
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
