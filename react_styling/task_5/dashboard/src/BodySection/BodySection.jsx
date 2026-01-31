import React from "react";
import PropTypes from "prop-types";

export default function BodySection({ title, children }) {
  return (
    <section className="px-12 py-8">
      <h2 className="mb-2 font-bold">{title}</h2>
      {children}
    </section>
  );
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
