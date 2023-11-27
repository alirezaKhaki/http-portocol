import express, { Request, Response } from "express";
import path from "path";

// Create an Express application
const app = express();
const port = 3000;

// Use middleware to parse JSON and urlencoded request bodies
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Define a route to handle GET requests
app.get("/get", (req: Request, res: Response) => {
  const data = req.query.data;
  res.send(`Response from GET request: ${data}`);
});

// Define a route to handle POST requests
app.post("/post", (req: Request, res: Response) => {
  const data = req.body;
  console.log("Data from POST request:", data);
  res.json({ response: data });
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
