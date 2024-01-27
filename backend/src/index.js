const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Connect to MongoDB (make sure you have MongoDB installed and running)
mongoose.connect("mongodb+srv://Rimsha:RimAtlas@cluster0.ij9mujl.mongodb.net/nexus-software", {
    useNewUrlParser: true
})
    .then(() => console.log("Mongodb is Connected"))
    .catch(err => console.log(err))
    
// Define a Contact schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(express.json());

// Route to handle form submissions
app.post('/api/submit-contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Save the contact information to the database
    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
