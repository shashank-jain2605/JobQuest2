import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "please provide company"],
      maxLength: 20,
    },
    position: {
      type: String,
      required: [true, "please provide position"],
      maxLength: 100,
    },
    status: {
      type: String,
      required: [true, "please provide status"],
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      minLength: 3,
      maxLength: 20,
      trim: true,
      default: "My city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
