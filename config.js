const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237692446850";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_42_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKaHNQaVBvN1pWWDQzOGdabWhXcDdBcTMyc3ljN243S0NpR3BwU2VJMnlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBbERsdFVzVlFDbXYzR2ExSlZJV21RXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0NjUwZWQwLTUzYzktNDIxYS1iNzhmLTg5MDU1NzY3NGE5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICA5NCxcbiAgICAgIDIxNCxcbiAgICAgIDcsXG4gICAgICA2NCxcbiAgICAgIDE4MyxcbiAgICAgIDE0NixcbiAgICAgIDE1MyxcbiAgICAgIDQ4LFxuICAgICAgNzAsXG4gICAgICAxNTUsXG4gICAgICA5MixcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgMTk5LFxuICAgICAgMjM2LFxuICAgICAgMTMwLFxuICAgICAgMCxcbiAgICAgIDE0OSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgNTEsXG4gICAgICA0NCxcbiAgICAgIDQ2LFxuICAgICAgOTksXG4gICAgICA2MyxcbiAgICAgIDE5OCxcbiAgICAgIDExMixcbiAgICAgIDk1LFxuICAgICAgNTMsXG4gICAgICAxMzUsXG4gICAgICA3NSxcbiAgICAgIDIyNyxcbiAgICAgIDM3LFxuICAgICAgMTIzLFxuICAgICAgMTY0LFxuICAgICAgMjE1LFxuICAgICAgMTUsXG4gICAgICAxMTMsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMjgzSXNLRVBMRzQ3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQyeC9PMExpTE5RRi9xaGZJZEUvVWJRaWtvK3lBUnFPM3MyVFRVUy9IbUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV2poZTZJOTlMSkVVN21BM3pTTFFGMUg5VkxuY3d5WFFrN0F6VjB6UUIveTJjRVhpN3dUd0RORUhrb1haMnJtMktHSEl4RVFMWDBWT0EzUUFQZXY3Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid09mQU0xSmNOYlAyS1pxZnY0ZE1zemp0dmN6NFpxSVlxYTV2T093WkZVTCtPTGd0T0JmN0lBQTA5VURMRUJMWmUxSDB1eTdpV3hIOGNQZFV2ZytIQ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTI0NDY4NTA6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMjQ5Mzk3NzU2MTQ2Ojk4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkyNDQ2ODUwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjk1NzMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUV2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaRUdpZVlMR1hrWkRzNVd1UWU3YWdENzVIb0RjZTYrdUh5WjY1TnZkckwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MDg5MzgzNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIwMzA1MjQyMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1FeC5qc29uIjogIntcImtleURhdGFcIjpcImsrZ0F6ZjNZK1MvQ0p4aWR6b1dlMjJOb2EyNlhUcTNkU3oxNEw5TUpUMnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcwODkzODM0OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMzA5NzYzOTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvQnJJRy9xaTlMQyszSmh5emIrTGtsNDl3TGxDZXl0ZzZNM0J1RllqMjVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MDg5MzgzNDksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIzMDk4MTU1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Monsieur Richy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
