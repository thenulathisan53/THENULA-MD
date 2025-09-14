const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "ring",
    alias: ["tonesaa", "ringtone"],
    desc: "Check uptime and system status",
    category: "download",
    react:"🎶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message with 100 ringtones
        const status = `*🌻${config.BOT_NAME} RINGTONE🌻*

╭━━〔*🍭${new Date().getHours() < 12 ? '🌄 සුබ උදෑසනක් 🌄' : '🌛 සුබ රාත්‍රියක් 🌛'}🍭*〕━━┈⊷
𝟏. 𝐐𝐮𝐞𝐫𝐤𝐲
𝟐. 𝐐𝐔𝐄𝐑𝐄𝐑 𝐐𝐔𝐄𝐑𝐄𝐌𝐎𝐒
𝟑. 𝐇𝐊𝟒𝟕 - 𝐐𝐮𝐞𝐫𝐲
𝟒. 𝐐𝐮𝐞𝐫𝐲-𝐬𝐦𝐬-𝐭𝐨𝐧𝐞
𝟓. 𝐐𝐮𝐞𝐫𝐢𝐝𝐚
𝟔. 𝐐𝐮𝐞𝐫𝐢𝐝𝐨
𝟕. 𝐐𝐮𝐞𝐫𝐞𝐫
𝟖. 𝐐𝐮𝐞𝐫𝐞𝐫𝐬𝐢𝐧
𝟗. 𝟖𝐛𝐢𝐭 𝐀𝐫𝐭 𝐎𝐟 𝐓𝐡𝐞𝐝𝐫𝐞𝐬𝐬
𝟏𝟎. 𝟖𝐛𝐢𝐭𝐚𝐫𝐭𝐨𝐟𝐭𝐡𝐞𝐝𝐫𝐞𝐬𝐬𝟐
𝟏𝟏. 𝐋𝐮𝐧𝐚𝐬 𝐅𝐮𝐭𝐮𝐫𝐞
𝟏𝟐. 𝐄𝐪𝐮𝐞𝐬𝐭𝐫𝐢𝐚 𝐆𝐢𝐫𝐥𝐬 𝐓𝐨𝐧𝐞
𝟏𝟑. 𝐏𝐨𝐧𝐲 𝐒𝐰𝐚𝐠
𝟏𝟒. 𝐌𝐢𝐥𝐤𝐬𝐡𝐚𝐤𝐞 𝐑𝐚𝐜𝐞
𝟏𝟓. 𝐄𝐯𝐢𝐥 𝐄𝐧𝐜𝐡𝐚𝐧𝐭𝐫𝐞𝐬𝐬
𝟏𝟔. 𝐘𝐚𝐲
𝟏𝟕. 𝐇𝐮𝐬𝐡 𝐍𝐨𝐰 𝐌𝐞𝐭𝐚𝐥 𝐍𝐨𝐰
𝟏𝟖. 𝐌𝐥𝐩 𝐘𝐚𝐲
𝟏𝟗. 𝐁𝐈𝐁𝐈𝐃𝐃𝐘-𝐁𝐎𝐎𝐏𝐘
𝟐𝟎. 𝐀𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞
𝟐𝟏. 𝐒𝐚𝐧𝐝𝐰𝐢𝐜𝐡𝐞𝐬
𝟐𝟐. 𝐅𝐫𝐢𝐞𝐧𝐝𝐬𝐡𝐢𝐩
𝟐𝟑. 𝐑𝐞𝐝𝐡𝐞𝐚𝐫𝐭 - 𝐒𝐡𝐡
𝟐𝟒. 𝐅𝐥𝐮𝐭𝐭𝐞𝐫𝐛𝐞𝐞𝐩
𝟐𝟓. 𝐍𝐮𝐫𝐬𝐞 𝐑𝐞𝐝𝐡𝐞𝐚𝐫𝐭
𝟐𝟔. 𝐂𝐫𝐲𝐬𝐭𝐚𝐥 𝐌𝐞𝐥𝐨𝐝𝐲
𝟐𝟕. 𝐌𝐢𝐝𝐧𝐢𝐠𝐡𝐭 𝐒𝐩𝐚𝐫𝐤𝐥𝐞
𝟐𝟖. 𝐇𝐚𝐫𝐦𝐨𝐧𝐲 𝐃𝐫𝐨𝐩𝐬
𝟐𝟗. 𝐒𝐭𝐚𝐫𝐥𝐢𝐠𝐡𝐭 𝐂𝐡𝐢𝐦𝐞
𝟑𝟎. 𝐓𝐰𝐢𝐥𝐢𝐠𝐡𝐭 𝐖𝐡𝐢𝐬𝐭𝐥𝐞
𝟑𝟏. 𝐑𝐚𝐢𝐧𝐛𝐨𝐰 𝐁𝐞𝐚𝐭
𝟑𝟐. 𝐒𝐮𝐧𝐬𝐞𝐭 𝐒𝐡𝐢𝐦𝐦𝐞𝐫
𝟑𝟑. 𝐌𝐨𝐨𝐧𝐥𝐢𝐭 𝐒𝐞𝐫𝐞𝐧𝐚𝐝𝐞
𝟑𝟒. 𝐆𝐚𝐥𝐚𝐱𝐲 𝐓𝐨𝐧𝐞
𝟑𝟓. 𝐂𝐞𝐥𝐞𝐬𝐭𝐢𝐚𝐥 𝐇𝐚𝐫𝐦𝐨𝐧𝐲
𝟑𝟔. 𝐃𝐚𝐰𝐧 𝐖𝐡𝐢𝐬𝐩𝐞𝐫
𝟑𝟕. 𝐒𝐭𝐚𝐫𝐝𝐮𝐬𝐭 𝐄𝐜𝐡𝐨
𝟑𝟖. 𝐌𝐲𝐬𝐭𝐢𝐜 𝐑𝐡𝐲𝐭𝐡𝐦
𝟑𝟗. 𝐒𝐨𝐥𝐚𝐫 𝐅𝐥𝐚𝐫𝐞
𝟒𝟎. 𝐋𝐮𝐧𝐚𝐫 𝐃𝐚𝐧𝐜𝐞
𝟒𝟏. 𝐂𝐨𝐬𝐦𝐢𝐜 𝐂𝐚𝐥𝐥
𝟒𝟐. 𝐄𝐭𝐡𝐞𝐫𝐞𝐚𝐥 𝐕𝐢𝐛𝐞
𝟒𝟑. 𝐏𝐫𝐢𝐬𝐦 𝐏𝐮𝐥𝐬𝐞
𝟒𝟒. 𝐍𝐞𝐛𝐮𝐥𝐚 𝐍𝐨𝐭𝐞
𝟒𝟓. 𝐎𝐫𝐛𝐢𝐭𝐚𝐥 𝐎𝐝𝐞
𝟒𝟔. 𝐒𝐩𝐚𝐫𝐤𝐥𝐞 𝐒𝐲𝐦𝐩𝐡𝐨𝐧𝐲
𝟒𝟕. 𝐆𝐥𝐨𝐰𝐢𝐧𝐠 𝐆𝐥𝐢𝐬𝐬𝐚𝐧𝐝𝐨
𝟒𝟖. 𝐑𝐚𝐝𝐢𝐚𝐧𝐭 𝐑𝐞𝐟𝐫𝐚𝐢𝐧
𝟒𝟗. 𝐒𝐡𝐢𝐦𝐦𝐞𝐫𝐢𝐧𝐠 𝐒𝐨𝐮𝐧𝐝
𝟓𝟎. 𝐀𝐮𝐫𝐨𝐫𝐚 𝐀𝐥𝐞𝐫𝐭
𝟓𝟏. 𝐂𝐨𝐦𝐞𝐭 𝐂𝐡𝐢𝐫𝐩
𝟓𝟐. 𝐌𝐞𝐭𝐞𝐨𝐫 𝐌𝐞𝐥𝐨𝐝𝐲
𝟓𝟑. 𝐒𝐭𝐞𝐥𝐥𝐚𝐫 𝐒𝐢𝐠𝐧𝐚𝐥
𝟓𝟒. 𝐏𝐥𝐚𝐧𝐞𝐭𝐚𝐫𝐲 𝐏𝐢𝐧𝐠
𝟓𝟓. 𝐎𝐜𝐞𝐚𝐧𝐢𝐜 𝐎𝐯𝐞𝐫𝐭𝐮𝐫𝐞
𝟓𝟔. 𝐖𝐚𝐯𝐞 𝐖𝐡𝐢𝐬𝐩𝐞𝐫
𝟓𝟕. 𝐓𝐢𝐝𝐚𝐥 𝐓𝐮𝐧𝐞
𝟓𝟖. 𝐂𝐨𝐫𝐚𝐥 𝐂𝐚𝐥𝐥
𝟓𝟗. 𝐒𝐞𝐚𝐬𝐡𝐞𝐥𝐥 𝐒𝐨𝐧𝐠
𝟔𝟎. 𝐁𝐫𝐞𝐞𝐳𝐞 𝐁𝐞𝐥𝐥𝐬
𝟔𝟏. 𝐖𝐢𝐧𝐝𝐲 𝐖𝐚𝐥𝐭𝐳
𝟔𝟐. 𝐒𝐭𝐨𝐫𝐦𝐲 𝐒𝐭𝐫𝐢𝐧𝐠𝐬
𝟔𝟑. 𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐓𝐡𝐞𝐦𝐞
𝟔𝟒. 𝐋𝐢𝐠𝐡𝐭𝐧𝐢𝐧𝐠 𝐋𝐮𝐥𝐥𝐚𝐛𝐲
𝟔𝟓. 𝐅𝐨𝐫𝐞𝐬𝐭 𝐅𝐚𝐧𝐭𝐚𝐬𝐲
𝟔𝟔. 𝐋𝐞𝐚𝐟𝐲 𝐋𝐲𝐫𝐢𝐜𝐬
𝟔𝟕. 𝐁𝐫𝐚𝐧𝐜𝐡 𝐁𝐞𝐚𝐭𝐬
𝟔𝟖. 𝐏𝐢𝐧𝐞 𝐏𝐮𝐥𝐬𝐞
𝟔𝟗. 𝐌𝐨𝐬𝐬𝐲 𝐌𝐨𝐭𝐢𝐟
𝟕𝟎. 𝐃𝐞𝐬𝐞𝐫𝐭 𝐃𝐫𝐞𝐚𝐦
𝟕𝟏. 𝐒𝐚𝐧𝐝𝐲 𝐒𝐞𝐫𝐞𝐧𝐚𝐝𝐞
𝟕𝟐. 𝐎𝐚𝐬𝐢𝐬 𝐎𝐩𝐮𝐬
𝟕𝟑. 𝐃𝐮𝐧𝐞 𝐃𝐢𝐭𝐭𝐲
𝟕𝟒. 𝐌𝐢𝐫𝐚𝐠𝐞 𝐌𝐮𝐬𝐢𝐜
𝟕𝟓. 𝐌𝐨𝐮𝐧𝐭𝐚𝐢𝐧 𝐌𝐞𝐥𝐨𝐝𝐲
𝟕𝟔. 𝐏𝐞𝐚𝐤 𝐏𝐢𝐩𝐞𝐬
𝟕𝟕. 𝐑𝐢𝐝𝐠𝐞 𝐑𝐡𝐲𝐭𝐡𝐦
𝟕𝟖. 𝐒𝐮𝐦𝐦𝐢𝐭 𝐒𝐨𝐮𝐧𝐝
𝟕𝟗. 𝐕𝐚𝐥𝐥𝐞𝐲 𝐕𝐢𝐛𝐞
𝟖𝟎. 𝐑𝐢𝐯𝐞𝐫 𝐑𝐢𝐟𝐟
𝟖𝟏. 𝐒𝐭𝐫𝐞𝐚𝐦 𝐒𝐲𝐦𝐩𝐡𝐨𝐧𝐲
𝟖𝟐. 𝐖𝐚𝐭𝐞𝐫𝐟𝐚𝐥𝐥 𝐖𝐡𝐢𝐬𝐭𝐥𝐞
𝟖𝟑. 𝐂𝐫𝐞𝐞𝐤 𝐂𝐡𝐢𝐦𝐞
𝟖𝟒. 𝐋𝐚𝐤𝐞 𝐋𝐮𝐥𝐥𝐚𝐛𝐲
𝟖𝟓. 𝐅𝐢𝐫𝐞𝐟𝐥𝐲 𝐅𝐥𝐮𝐭𝐞
𝟖𝟔. 𝐆𝐥𝐨𝐰𝐰𝐨𝐫𝐦 𝐆𝐥𝐞𝐞
𝟖𝟕. 𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐋𝐢𝐠𝐡𝐭
𝟖𝟖. 𝐂𝐚𝐧𝐝𝐥𝐞 𝐂𝐚𝐥𝐥
𝟖𝟗. 𝐒𝐩𝐚𝐫𝐤 𝐒𝐨𝐧𝐠
𝟗𝟎. 𝐃𝐢𝐚𝐦𝐨𝐧𝐝 𝐃𝐚𝐧𝐜𝐞
𝟗𝟏. 𝐑𝐮𝐛𝐲 𝐑𝐡𝐲𝐦𝐞
𝟗𝟐. 𝐒𝐚𝐩𝐩𝐡𝐢𝐫𝐞 𝐒𝐨𝐮𝐧𝐝
𝟗𝟑. 𝐄𝐦𝐞𝐫𝐚𝐥𝐝 𝐄𝐜𝐡𝐨
𝟗𝟒. 𝐀𝐦𝐞𝐭𝐡𝐲𝐬𝐭 𝐀𝐢𝐫
𝟗𝟓. 𝐆𝐨𝐥𝐝𝐞𝐧 𝐆𝐚𝐳𝐞
𝟗𝟔. 𝐒𝐢𝐥𝐯𝐞𝐫 𝐒𝐡𝐢𝐧𝐞
𝟗𝟕. 𝐏𝐥𝐚𝐭𝐢𝐧𝐮𝐦 𝐏𝐮𝐥𝐬𝐞
𝟗𝟖. 𝐁𝐫𝐨𝐧𝐳𝐞 𝐁𝐞𝐥𝐥
𝟗𝟗. 𝐂𝐨𝐩𝐩𝐞𝐫 𝐂𝐡𝐨𝐫𝐮𝐬
𝟏𝟎𝟎. 𝐈𝐫𝐢𝐝𝐢𝐮𝐦 𝐈𝐧𝐭𝐞𝐫𝐥𝐮𝐝𝐞
╰──────────────┈⊷
${config.FOOTER}`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/fonwut.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '> *ᴘᴏᴡᴇʀᴅ ʙʏ  ᴋᴀᴠɪᴅᴜ ʀᴀꜱᴀɴɢᴀ : )*',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error :", e);
        reply(`An error occurred: ${e.message}`);
    }
});