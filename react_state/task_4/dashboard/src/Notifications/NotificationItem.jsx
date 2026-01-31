import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ id, type, value, html, markAsRead }) {
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
  markAsRead: () => {},
};
