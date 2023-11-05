import React from 'react';
import PropTypes from "prop-types";
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from "aphrodite";

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

function CourseList({ listCourses }) {
  return (
    <table id='CourseList' className={css(styles.list)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        )}

        {listCourses.map((course) => (
          <CourseListRow key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false} />
        ))}
      </tbody>
    </table>
  );
}

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  list: {
    border: `1px solid ${cssVars.borderTableColor}`,
    borderCollapse: "collapse",
    width: "95%",
    margin: "40px auto 0 auto",
  },
});

export default CourseList;
