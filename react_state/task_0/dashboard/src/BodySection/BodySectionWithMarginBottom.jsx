import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";

export default function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className="mb-10">
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
