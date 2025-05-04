const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Email form submission
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Handle errors properly
    
    // For now, just log and return success
    console.log('New subscriber:', email);
    res.json({ success: true, message: 'Thank you for subscribing!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 