import mongoose from "mongoose";

const ProjectSchmea = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["not started", "in progres", "completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

export default mongoose.model("Project", ProjectSchmea);
