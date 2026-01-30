import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;

    const colorClass =
      type === "urgent"
        ? "text-[color:var(--urgent-notification-item)]"
        : "text-[color:var(--default-notification-item)]";

    const baseClass =
      "cursor-pointer " +
      colorClass +
      " max-[912px]:text-xl max-[912px]:border-b max-[912px]:border-gray-300 max-[912px]:py-4";

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={baseClass}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={baseClass}
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
  html: PropTypes.shape({ __html: PropTypes.string }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
