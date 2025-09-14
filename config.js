const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6EFxhBiA#wv6on1iwoO7unt4UXruMfOd7_wO3WbX0LFcghISe_to", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:gJCQBQJpLEfKkRVeuozBGKvUfjDfsmAP@shortline.proxy.rlwy.net:33187",  //ඔයාගෙ mongoDb url එක    
};
 
