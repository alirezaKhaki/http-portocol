import express, { Request, Response } from "express";

// Create an Express application
const app = express();
const port = 3000;

// Define a route to handle GET requests
app.get("/", (req: Request, res: Response) => {
  res.send("This is a GET request.");
});

// Define a route to handle POST requests
app.post("/", (req: Request, res: Response) => {
  res.send("This is a POST request.");
});

// Define a route to handle PUT requests
app.put("/", (req: Request, res: Response) => {
  res.send("This is a PUT request.");
});

// Define a route to handle DELETE requests
app.delete("/", (req: Request, res: Response) => {
  res.send("This is a DELETE request.");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
