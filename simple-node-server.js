const http = require("http");

// Define the HTML template
const renderHTML = (path) => {
  if (path === "/") {
    return `
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <input disabled onchange="handleChange()" />
      <button onclick="handleClick()">AAAAAAAAAAAAA</button>
    </div>
    <script>
      const input = document.querySelector("input");
      input.onchange = handleChange
      function handleChange(e) {
        console.log(e.target.value);
      }

      document.querySelector("button").onclick = handleClick;
      async function handleClick() {
        await fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input.value),
        });
      }
    </script>
  </body>
</html>

        `;
  }
};

// Create the server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Process data once fully received
    req.on("end", () => {
      console.log(body);
    });
  }

  const path = req.url;

  // Set the response headers
  res.writeHead(200, { "Content-Type": "text/html" });

  // Serve the HTML
  res.end(renderHTML(path));
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
