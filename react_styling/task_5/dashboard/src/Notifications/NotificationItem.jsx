import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;

    const colorClass =
      type === "urgent"
        ? "text-[color:var(--urgent-notification-item)]"
        : "text-[color:var(--default-notification-item)]";

    // ✅ Task 4: borders + padding on smaller screens
    const liClass = [
      colorClass,
      "cursor-pointer",
      "max-[912px]:border-b max-[912px]:border-gray-300",
      "max-[912px]:px-3 max-[912px]:py-4", // 12px padding on mobile/tablet
      "max-[912px]:text-lg max-[520px]:text-base",
    ].join(" ");

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={liClass}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={liClass}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
