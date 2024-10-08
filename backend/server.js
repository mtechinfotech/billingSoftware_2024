require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const partnersRoute = require('./routes/partners')
const invoicesRoute = require('./routes/invoices')
const itemsRoute = require('./routes/items')
const salesreturnRoute = require('./routes/salesReturn')
const PurchaseReturnRoute = require('./routes/PurchaseReturn')
const PurchaseRoute = require('./routes/Purchase')




const cors = require('cors');

// express app
const app = express();

// middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    })


// app routes
app.use('/api/partners', partnersRoute)  
app.use('/api/invoices', invoicesRoute)    
app.use('/api/items', itemsRoute)  
app.use('/api/salesreturn', salesreturnRoute) 
app.use('/api/purchasereturn', PurchaseReturnRoute)  
app.use('/api/purchase', PurchaseRoute)  




// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000!')
        })
    })
    .catch((error) => {
        console.log(error);
    })


