const mongoose = require('mongoose');

// -----------------------------Connection to the database ----------//

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1); // process code 1 means failure and 0 success
    }
}

module.exports = {connectDB}