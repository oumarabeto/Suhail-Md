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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_31_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidVBUNXBLN24vbzhuSDFZMyswQ08ya3o5dHFpd0RvQnh2eU5rUUlKYVlRbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTMzNzIxOTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNCRkFCNkVBRUNFRDQ0NjY0NjkwMUE2NjkzNkM1RkIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ2NDI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1MzM3MjE5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUFBOUIxQzZBRkRGMEUwNDhGODY2OEE3QzAzMUUwRDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDY0Mjc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZOMjdQMm42UlFPclpkamUxM0h2UGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTNmYjI4MmYtMmRmOC00MDhkLTgyYWEtNTI2YWNiZjE3MWYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDEyNyxcbiAgICAgIDQxLFxuICAgICAgMTgzLFxuICAgICAgMTE4LFxuICAgICAgMTQ5LFxuICAgICAgNTAsXG4gICAgICA5NyxcbiAgICAgIDUxLFxuICAgICAgMTQxLFxuICAgICAgMTUyLFxuICAgICAgMzgsXG4gICAgICAyNDAsXG4gICAgICAyMTksXG4gICAgICAxOTQsXG4gICAgICAxOTMsXG4gICAgICAyNDMsXG4gICAgICAxNDYsXG4gICAgICAxNzMsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTI0LFxuICAgICAgMjQ1LFxuICAgICAgODgsXG4gICAgICA0OSxcbiAgICAgIDc1LFxuICAgICAgMTIzLFxuICAgICAgMjUzLFxuICAgICAgODYsXG4gICAgICAxNTMsXG4gICAgICAyMzcsXG4gICAgICAxNjUsXG4gICAgICAyMjgsXG4gICAgICA0LFxuICAgICAgMTQxLFxuICAgICAgMTUyLFxuICAgICAgMTUzLFxuICAgICAgMzAsXG4gICAgICAyMjEsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWDF3dndHRU16cjdiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhWODNIeGRtbllHMUxSajF0TE9yd2wzTm5CQWk2cnR0SGtWYW84cjNSaWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicXFFWHpSMjR1bUxYbFpVVWlDUXc1aUdpQlR2bzRCWDREZnpwVk4zbmg1YlRUcWVML21yWWU4RnQ1bHV3Y0V5bStrbTJOVmNKaUI1N2o1dUQwY2dzQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnVNeWVnS3BZTEdEb1NoNUozY1hzeFc2MXBhYkdpT3ZZdjV0YXJTd1hZV2hjTGlKM3A2MUhsOGZqUTJTRDEzdEhIelhjWlIyRHFNZGVEc2VnMWM1akE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTMzNzIxOTM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCZXRvbWl4IHNob3BcIixcbiAgICBcImxpZFwiOiBcIjEzNDU2NjE5MTI2OTkzOjEyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjUzMzcyMTkzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2NDI3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdjYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2NhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUZJdGtWMGpRVmtzMmRsVTNvM0VUaDFZV1FVMU1yU1RvRWd2RGwxQkh1bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcxNzU1OTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjQyNzg5NjlcIn0iCn0="  // PUT your SESSION_ID 


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
