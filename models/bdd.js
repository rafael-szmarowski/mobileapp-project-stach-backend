var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(process.env.BDD_CONNECT,
    options,
    function(err) {
    console.log(err);
});