import Job from "../models/Job.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new Error("Enter all required details");
  }

  req.body.createdBy = req.user.userId;

  // create job
  const job = await Job.create(req.body);

  // response
  res.status(200).json({ job });
};
const deleteJob = async (req, res) => {
  console.log(req.params);
  res.send("delete job");
};
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
