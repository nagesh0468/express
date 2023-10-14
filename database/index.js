const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nagesh:Nagesh0468@cluster0.coh18yo.mongodb.net/nageshpractice?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('connected to database')
} );
mongoose.connection.on('disconnected', () =>{
    console.log('disconnected from database')
});
mongoose.connection.on('error', () => {
    console.log('error connecting to database', error)
})