import Mongoose from 'mongoose';
const tiktokSchema = Mongoose.Schema({
    url:String ,
    channel: String ,
    song: String ,
    likes: String ,
    messages:  String, 
    desc: String ,
    shares: String , 
});
//collection iside the mongoose
export default Mongoose.model('tiktokVideos',tiktokSchema);