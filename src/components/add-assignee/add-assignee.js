import React from 'react';
import './add-assignee.module.scss';
import AddAsigneeOperator from './add-assignee-operator';

const AddAssignee = () => {
  const { useGetCourseLinkDetails } = AddAsigneeOperator,
  observeCourseLinkDetails = useGetCourseLinkDetails(1);

  return (
    <div className="add-assignee-container">
      <h1>Add Assignee</h1>
    </div>
  );
};

AddAssignee.propTypes = {};

AddAssignee.defaultProps = {};

export default AddAssignee;
