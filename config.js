const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6EFxhBiA#wv6on1iwoO7unt4UXruMfOd7_wO3WbX0LFcghISe_to", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:gJCQBQJpLEfKkRVeuozBGKvUfjDfsmAP@shortline.proxy.rlwy.net:33187",  //ඔයාගෙ mongoDb url එක    
AUTO_REACT: process.env.AUTO_REACT || "true", // Enable/disable auto reaction (true/false)
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true", // Enable/disable auto voice messages (true/false)
AUTO_STICKER: process.env.AUTO_STICKER || "true", // Enable/disable auto sticker rea (true/false)
AUTO_REPLY: process.env.AUTO_REPLY || "true", // Enable/disable auto reply feature (true/false)
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // Enable/disable auto read status (true/false)
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
ALWAYSONLINE: process.env.ALWAYSONLINE || "true",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
READ_MESSAGE: process.env.READ_MESSAGE || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
WELCOME: process.env.WELCOME || "true",  
};
 
