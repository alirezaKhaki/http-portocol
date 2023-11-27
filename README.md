# HTTP Protocol Demonstration using Node.js Express TypeScript

This repository contains a simple Node.js Express TypeScript project that demonstrates how the HTTP protocol works. This project is intended for educational purposes and can be used as a starting point to learn about HTTP and web servers.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Prerequisites

Before you begin, ensure that you have the following software installed on your computer:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

Follow these steps to get started with the project:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/alirezaKhaki/http-portocol
   ```

2. Navigate to the project directory:
   ```bash
   cd http-protocol
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   npm start
   ```
   Your server should now be running on port 3000. You can access it in your web browser at http://localhost:3000.

## Project Structure

The project structure is organized as follows:

- `app.ts`: The main TypeScript file that sets up the Express server and handles HTTP requests.
- `tsconfig.json`: TypeScript configuration file.
- `dist/`: Directory where compiled JavaScript files are stored.
- `node_modules/`: Directory where project dependencies are installed.
- `package.json` and `package-lock.json`: Node.js project configuration files.

## Usage

The project demonstrates a basic HTTP server using Express. The server responds to HTTP GET requests on the root path (`/`) with a simple "Hello, HTTP!" message. You can modify the `app.ts` file to add more routes and customize the server behavior as needed.

## Testing

You can test the HTTP server by opening a web browser and navigating to `http://localhost:3000` or by using tools like `curl` or `httpie` to make HTTP requests to the server.

To test with `curl`, you can run the following command in your terminal:

```bash
curl http://localhost:3000
```
