import express, { Request, Response } from "express";
import path from "path";

// Create an Express application
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Define a route to handle GET requests
app.get("/get", (req: Request, res: Response) => {
  res.send("This is a GET request.");
});

// Define a route to handle POST requests
app.post("/post", (req: Request, res: Response) => {
  res.send("This is a POST request.");
});

// Define a route to handle PUT requests
app.put("/put", (req: Request, res: Response) => {
  res.send("This is a PUT request.");
});

// Define a route to handle DELETE requests
app.delete("/delete", (req: Request, res: Response) => {
  res.send("This is a DELETE request.");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
