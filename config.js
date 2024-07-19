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
global.read_status = process.env.AUTO_READ_STATUS || "VRAI"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZMDZlNDBIMG12dGdJYkJKNUFJTnlkMnMvSTh4d2JlTHZEUmc0VTh6YVRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHZWdQWEFfUFJGS2d2eDdyX21WUHZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY5MDRjZmJkLWU3NmItNDFkOC1iYjk2LTdhOWI2ZGE4MThmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDEwMyxcbiAgICAgIDEyNyxcbiAgICAgIDE0NSxcbiAgICAgIDEwNixcbiAgICAgIDIwMSxcbiAgICAgIDcsXG4gICAgICAxNzIsXG4gICAgICAxMTYsXG4gICAgICA5MSxcbiAgICAgIDgwLFxuICAgICAgNjYsXG4gICAgICAyNDgsXG4gICAgICAyMzAsXG4gICAgICA3NyxcbiAgICAgIDcsXG4gICAgICAxOTgsXG4gICAgICAxODcsXG4gICAgICAxOTksXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDEyNCxcbiAgICAgIDUsXG4gICAgICAxNjMsXG4gICAgICAxMTEsXG4gICAgICA5MSxcbiAgICAgIDQ5LFxuICAgICAgNzcsXG4gICAgICAxMCxcbiAgICAgIDEsXG4gICAgICAzMSxcbiAgICAgIDIxNyxcbiAgICAgIDM1LFxuICAgICAgNDQsXG4gICAgICAyNDcsXG4gICAgICAyLFxuICAgICAgMTMsXG4gICAgICAxNzMsXG4gICAgICAzNixcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlQxd3Z3R0VMU2o2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4VjgzSHhkbW5ZRzFMUmoxdExPcndsM05uQkFpNnJ0dEhrVmFvOHIzUmljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpvdkcraERXK1dNTGRUd0ZwYXNkbFBrMGp3UGZqZWlBK001azg0R2VFV01yTXJZeER4c2hPckI0Z0YwNEtQQ0NiOFA3TUU4MklrOG1BOUNzaFFFa0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjh2RjhJcEVwQmxBcTJJMTRSa3V5U2gwMTJVOElkbEFRa2lVZEd3NVFlbmZoRVZQbHZLM1dLS1BOaWl2Y2crN0w4UEM5N24vREY2ME02THcvM0d5ZEFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjUzMzcyMTkzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmV0b21peCBzaG9wXCIsXG4gICAgXCJsaWRcIjogXCIxMzQ1NjYxOTEyNjk5MzoxMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1MzM3MjE5MzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODk0OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYMC5qc29uIjogIntcImtleURhdGFcIjpcInU4QUUwK0t0RlhBNUJHYjhuYnh0ZDUzZ25ncmRySGFiS2NmL3pldjdXNTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3MTc1NTkxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIzODcxNzc1N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYMS5qc29uIjogIntcImtleURhdGFcIjpcImVuTFVZOEh1QW51U3YyQVNLMU8vaGVVcVBKcEU2WXBDaWh3Z2VpMHI2eTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3MTc1NTkyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFgyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTE56Uk14cWxmaGc2WjcwU2RGUGZ6YW9VV1AyWjJndFllUGJDcXMzc3dTcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcxNzU1OTIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMjE0MzcxNzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoenVXYTBwZUQxVkFHa2cwTUpmRVptNFZWN0FsYnJwUGx4SGFGUHJRSzNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzE3NTU5MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMjE0Mzk1NDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxSkY4QjlzSHI0UDZ2VGlUSW03aVB2VzR0OWVsOFBHaVE2NktBT1A2Mmk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzE3NTU5MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYNS5qc29uIjogIntcImtleURhdGFcIjpcIkxCNm1TUjdsWS9MZU0rWXVNYTgxeUxSRnUrZGNxRVFqVG9BWkh0V0NzaUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3MTc1NTkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTM4Nzc2Mzk1MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYei5qc29uIjogIntcImtleURhdGFcIjpcImxvenZaZSt3L0xyd0RmVzkybktEbzVVZkk4WFZ6azFHUU5ybGJCOG9PbkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3MTc1NTkxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
