const express = require('express');
const cors = require('cors');
const path = require('path')
const cookieParser = require('cookie-parser'); 
const authRouter = require('./Router/authRouter');
const mobileRouter = require('./Router/mobileRouter');
const laptopRouter = require('./Router/laptopRouter');
const tabletRouter = require('./Router/tabletRouter');
const feedbackRouter = require('./Router/feedbackRouter');
const blogRouter = require('./Router/blogRouter');
const adminRoute = require('./Router/adminRouter');
const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}
));
app.use(cookieParser());
app.use(express.json())
app.use('/api/v1/img',express.static(path.join(__dirname, 'Upload')))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/mobile',mobileRouter)
app.use('/api/v1/laptop',laptopRouter)
app.use('/api/v1/tablet',tabletRouter)
app.use('/api/v1/blog',blogRouter)
app.use('/api/v1/feedback',feedbackRouter)
app.use('/api/v1/admin',adminRoute)

module.exports = app;