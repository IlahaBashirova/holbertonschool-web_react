import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;

    const textColor =
      type === "urgent"
        ? "text-[var(--urgent-notification-item)]"
        : "text-[var(--default-notification-item)]";

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={textColor}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={textColor}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
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
