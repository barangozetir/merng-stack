import mongoose from "mongoose";

const ClientSchmea = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export default mongoose.model("Client", ClientSchmea);
