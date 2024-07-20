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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_42_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxZdnduRVAzdTFyTU1kRmNkMEZSaFowUlRuWkcrdTVrNUtJL01nR0RzOEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpET0pHU3lHVHp5UjZuUGY5VXlIUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTRjODE4NzMtNTg4Yy00Zjc0LWJmNGQtNjg4YzYwYTNmNTRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE1MCxcbiAgICAgIDk3LFxuICAgICAgMTMsXG4gICAgICA2MCxcbiAgICAgIDI1MyxcbiAgICAgIDExMyxcbiAgICAgIDIyNSxcbiAgICAgIDYwLFxuICAgICAgNjgsXG4gICAgICAyMjIsXG4gICAgICA4MCxcbiAgICAgIDc0LFxuICAgICAgMTYzLFxuICAgICAgMTc5LFxuICAgICAgMjQ5LFxuICAgICAgMTYzLFxuICAgICAgNjYsXG4gICAgICAyMzgsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDYzLFxuICAgICAgMTA4LFxuICAgICAgOTMsXG4gICAgICA4MCxcbiAgICAgIDc3LFxuICAgICAgMjMwLFxuICAgICAgMjM2LFxuICAgICAgMjE1LFxuICAgICAgNDMsXG4gICAgICAxNTksXG4gICAgICA3NixcbiAgICAgIDE0NSxcbiAgICAgIDE2MyxcbiAgICAgIDExMyxcbiAgICAgIDIwNSxcbiAgICAgIDE3NSxcbiAgICAgIDE0MCxcbiAgICAgIDE1NyxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015dzJPWUpFTmE0N2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnJrSG9YeGhjSnIrSitnYVFBczgzMHhPZ2pZcUNYY3BVM3Azb0pFaStsMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyYjB1YUw3dklUOGY0eExLYkZRMWN3T09rNVVrUVFhRGlhelJoaGJxNWZTZmFiQ0ZJMEduZEZSalJzckdxUjFud2NSNXBuT01yYjYwdm4zVEMxbUpBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5TFZxN2VBZHhacVhTSnFqTVNOZUZtZTlraC9COHN2YWFpK3VJbVAvaTVPYUxzb1JtZWhlUnVENkhQcEQvcGxVMEV6ZkJnQWs2QTlaZUxCc2lDeW5CQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5MjQ0Njg1MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjI0OTM5Nzc1NjE0NjozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkyNDQ2ODUwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ1Nzc1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVnYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWdiLmpzb24iOiAie1wia2V5RGF0YVwiOlwib2lVNjlHYkdTNU9MbWpreWNOYW8rcllpeUZkdnBGUDcyQndjVDZRczFtND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjMxMjc2NjIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NTc0NjI4NzhcIn0iCn0="  // PUT your SESSION_ID 


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
