import React from "react";
import CourseListRow from "./CourseListRow";

class CourseList extends React.Component {
  static defaultProps = {
    courses: [],
  };

  render() {
    const { courses } = this.props;

    return (
      <div className="w-4/5 mx-auto">
        <table id="CourseList" className="w-full border-collapse">
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow
              isHeader={true}
              textFirstCell="Course name"
              textSecondCell="Credit"
            />
          </thead>

          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />
              ))
            ) : (
              <CourseListRow isHeader={true} textFirstCell="No course available yet" />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CourseList;
