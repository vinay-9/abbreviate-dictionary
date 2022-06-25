
const express = require('express');// Initialize App
const app = express();
const path= require('path')
  
// Assign route
app.get('/api', (req, res, next) => {
  
  res.send('Node.js Search and Filter');
});
// app.use(express.static("front_end/build"))
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './front_end/build', 'index.html'));
// });
  
// // Start server on PORT 5000


app.use(express.static(path.resolve(__dirname, "./front_end/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./front_end/build", "index.html"));
});

let PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server started! ${PORT}`);
});


    //  "npm run build --prefix front_end",
