import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    statusOptions,
    status,
    changeInputValues,
    clearValues,
    createjob,
    editJob,
  } = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} ${value}`);

    changeInputValues({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
    }
    console.log("create job");
    if (!isEditing) {
      editJob();
      return;
    }

    createjob();
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        {showAlert && <Alert />}

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChange}
          />

          {/* job type */}

          <FormRowSelect
            labelText="job type"
            value={jobType}
            handleChange={handleChange}
            list={jobTypeOptions}
            name="jobType"
          />

          <FormRowSelect
            labelText="job status"
            value={status}
            handleChange={handleChange}
            list={statusOptions}
            name="status"
          />

          {/* buttons */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              type="clear"
              className="btn btn-block clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
