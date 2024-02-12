import "dotenv/config";

import app from "./app";

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`🚀 Listening on ${PORT} 🚀`);
});
