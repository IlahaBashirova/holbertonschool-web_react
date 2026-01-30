import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  const rowClass = isHeader
    ? "bg-[var(--color-table-header)] opacity-[0.66]"
    : "bg-[var(--color-table-rows)] opacity-[0.45]";

  const thClass = "border border-gray-400 pl-2";
  const tdClass = "border border-gray-400 pl-2";

  return (
    <tr className={rowClass}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={thClass}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={{ width: "70%" }} className={thClass}>
              {textFirstCell}
            </th>
            <th className={thClass}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={tdClass}>{textFirstCell}</td>
          <td className={tdClass}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
