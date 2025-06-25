require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const PORT = process.env.PORT || 5001;

app.use(express.json());

// Route: /get-jam3?mufrad=وَلَد
app.get('/get-jam3', async (req, res) => {
  const mufradWord = req.query.mufrad;

  if (!mufradWord) {
    return res.status(400).json({ error: 'يُرجى توفير كلمة مفرد' });
  }

  try {
    await client.connect();
    const db = client.db('arabic_words');
    const collection = db.collection('words');

    // Query using Arabic key
    const result = await collection.findOne({ "مفرد": mufradWord });

    if (!result) {
      return res.status(404).json({ message: 'الكلمة غير موجودة' });
    }

    res.json({ جمع: result["جمع"] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطأ في الخادم' });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
