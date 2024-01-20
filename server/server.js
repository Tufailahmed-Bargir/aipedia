import express from 'express';
import pg from 'pg'
const app = express();

app.use(express.json())
const db=new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'aipedia',
    password:'123456',
    port:5432

})

// Routes
app.get('/api',async (req, res) => {

    
  res.send('Hello, world!');
});

app.post('/',async (req, res) => {
  try{
    const recivedData = req.body;
    console.log(recivedData);
  res.send(recivedData)
  }catch(e){
    console.error('error found'+e.message);
  }

});

app.get('/send',async (req, res) => {

    try{
        const client = await db.connect();
        console.log('database connected');
    }catch(e){
        console.error('error connecting'+e.message);
    }

    try{
        const query  = await db.query('insert into login_users (email,password) values($1,$2)',['user2','pass22']);
        console.log('data stored success');
    }catch(e){
        console.error('error connecting'+e.message);
    }
  res.send('Hello, world!');
});

// Start the server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
