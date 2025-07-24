//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349169324243";
global.owner = process.env.OWNER_NUMBER || "2349169324243";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"mAQtFy95mNWQr5RJQDJd6SDC4wEnMO/IhZ33SptHamA="},"public":{"type":"Buffer","data":"pWiik7IM4hyflH7L8ix+kilrM4xjPnBMPDBqXJ9A33g="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GNNp8XdFNnjOxUD0jXW8LHs2Xn8Ew3KYlb1+3yAPk0M="},"public":{"type":"Buffer","data":"7kJSXwa6/ebLWzFwnJ2rCOH1bk7I4rapCGOgjiwFCjM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4Mgwpvz8SybD8Gfxxpt48IFAxnPrAKPXeCgOihznEUs="},"public":{"type":"Buffer","data":"2FROArjGh9F7H2Z4jKq02r+vgFvcd/2pfUCDqGW36VU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aMEUfM4ZsG63XJfi8BTeQa+TqYiO2jB5WEGA3i5622o="},"public":{"type":"Buffer","data":"pPCTJ4zvmjx8aLFSvlYKQAcjcWtIsSMvZ3n691elHzk="}},"signature":{"type":"Buffer","data":"bbRAsqpIdp7TRhgj6OfAuul/m7BQdimnCDHTFIXWh2YwSNOEd7arqncVmr6YsPm3q5b+U3ZPTpp64nkFcMRMiQ=="},"keyId":1},"registrationId":113,"advSecretKey":"xCeZrYa5tE8u1Yhm48F7dVqNaJZ6DB1UDyXvjD7RIlM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"BP_HyI7vTIuMoASeUCdj4g","phoneId":"bd45fa11-bdc2-4483-a45c-d81e6dd88d35","identityId":{"type":"Buffer","data":"IOBzD4XL7NDzB4NC0TO1MCXVPyU="},"registered":true,"backupToken":{"type":"Buffer","data":"z80q9aVBLQcbNwzAf2F0gFYjFVU="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2349169324243:11@s.whatsapp.net","lid":"37976721625104:11@lid"},"account":{"details":"CPi+2skCENOPicQGGAEgACgA","accountSignatureKey":"EaEHDrA8KDE61XuJEW3961bO14P8/3UEb+CAOBNLHxs=","accountSignature":"2UwkbYHsUDjdXNUnsGSxWMLJ8R/vw8WvGHoVohx/JXPex8qHK8G9aoNHyOSgyd/xHY3EvaQ/hwz7ymRtVRZmDg==","deviceSignature":"2caqNIyFGMyGcw7YQYSfAx5nIf7lY+rbmdY4pV7UhiNFX3iUyyOIb5JWJFtKwhrOBdsY32VZ+vz6XhTJ8TTfgw=="},"signalIdentities":[{"identifier":{"name":"2349169324243:11@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRGhBw6wPCgxOtV7iRFt/etWzteD/P91BG/ggDgTSx8b"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IBQ=="},"lastAccountSyncTimestamp":1753368540,"lastPropHash":"3gPUJk","preKeys":{"private":{"type":"Buffer","data":"ABJB9TGnKQFzRmIRU6ikfnwceCGnH2L96jsP4rMvX0w="},"public":{"type":"Buffer","data":"W4N4fZKawMUOQRBkL3LdgRPsBiX8BC2m2h43Z+DiS1E="}},"senderKeys":{},"timestamp":"2025-07-24T14:49:05.563Z"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
