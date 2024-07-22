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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_28_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsV3pNTnFYSGg4MDBXaXFSckRZaTJnQjhsTHBWK3lmaC9UQktSU1U2ZVNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1MzM3MjE5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0M0MUQ0RkU2ODhDM0Q4QTJFNjc0RDM1ODdDRTdGRkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjIyNTA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjUzMzcyMTkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NjZCREQxM0Y4NzFCMDFFMUJGNTFEM0E4MTU1RUQ0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2MjI1MDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTMzNzIxOTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3MkQ5QjA2Nzk0MTQ0MTMzRURGRjI5QTE2Qjc1NTAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTYyMjUxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlMkZJSlp4elNCT1pjRkpVVTE4Q21BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4MTg0MjdjLWY3NTYtNGI1YS1iZGYxLTM1YWU2ZmU1MTlkM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNjgsXG4gICAgICAxNjUsXG4gICAgICA5NixcbiAgICAgIDE1NyxcbiAgICAgIDYsXG4gICAgICA2LFxuICAgICAgOTksXG4gICAgICA4MSxcbiAgICAgIDIwLFxuICAgICAgMTM4LFxuICAgICAgMjMxLFxuICAgICAgMTk3LFxuICAgICAgMjQwLFxuICAgICAgMTY2LFxuICAgICAgODYsXG4gICAgICAxODIsXG4gICAgICAyMTksXG4gICAgICA1NCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTg2LFxuICAgICAgOTcsXG4gICAgICA0NixcbiAgICAgIDEzOCxcbiAgICAgIDE0MCxcbiAgICAgIDczLFxuICAgICAgMjAzLFxuICAgICAgMTk4LFxuICAgICAgMTQ3LFxuICAgICAgMTQzLFxuICAgICAgMTcyLFxuICAgICAgMjQ4LFxuICAgICAgMjA3LFxuICAgICAgMjE3LFxuICAgICAgMTcsXG4gICAgICAwLFxuICAgICAgMjMzLFxuICAgICAgMTA3LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFFDNEFFS1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1MzM3MjE5MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0NTY2MTkxMjY5OTM6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hBbkZBUTViLzN0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4Wm9zaG13VTQrdkdTQU9oVGdNMGN1dTJsbmMwTThzWGFOVlRVQ2dTWkJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm82Nk1tUXIwbDl0MlpqSll4MXRvWE5VU3VYTjdTNVJsQWN5UWg2YWVtK2t2MFR4VXBDaGQ1c3M2cis1TzJVOWlFaDBGZFFrc1NOb1VGSlVnU3kyb0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlAyVXA1dkUwNFNqcGx3ZVM4T05VdzROc1hmUlVQUlJNTjAvWVB4NEFjVXplY1FBTHFUYklodGtJTE11dmpzalJZak96TWJDU05uK1ZSNitSYlYyMkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1MzM3MjE5MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MjI1MDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
