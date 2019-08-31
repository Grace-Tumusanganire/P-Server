import express from "express";
const app = express();
app.use(express.json());
import authRoutes from "./routes/auth";

app.use(authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
