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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348143433515";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_18_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlrVno5QnRVNytrNXhzVUZKTDBQbTBkeXZiYytEU1VsVSt2bmhLajdPblU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkw5RXpkQzAzUUl5RFVoUWdpT05zZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGU5MDJjMDItMGRjOS00M2IzLTkzMjMtODNkNGIwYjIwYWRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDEyNSxcbiAgICAgIDExNCxcbiAgICAgIDIzNixcbiAgICAgIDEwNixcbiAgICAgIDExMyxcbiAgICAgIDg1LFxuICAgICAgMTIsXG4gICAgICAzNCxcbiAgICAgIDE0MSxcbiAgICAgIDUzLFxuICAgICAgODAsXG4gICAgICAxNjAsXG4gICAgICA3NyxcbiAgICAgIDEyMyxcbiAgICAgIDExNixcbiAgICAgIDY1LFxuICAgICAgMjE1LFxuICAgICAgMTkwLFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA0OSxcbiAgICAgIDIyNixcbiAgICAgIDE1NCxcbiAgICAgIDMxLFxuICAgICAgMjM0LFxuICAgICAgMTUwLFxuICAgICAgMTY2LFxuICAgICAgMTAzLFxuICAgICAgMjAyLFxuICAgICAgMTg1LFxuICAgICAgMTk5LFxuICAgICAgNzcsXG4gICAgICAzMSxcbiAgICAgIDEzMCxcbiAgICAgIDI0NCxcbiAgICAgIDYxLFxuICAgICAgMTQ3LFxuICAgICAgMCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKWFpUU1FHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzNDMzNTE1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUYWxrLXdpdGhjZGVlcVwiLFxuICAgIFwibGlkXCI6IFwiMTUzMzAwNzg3ODE4NjU2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEMvdEkwTkVMWDFpclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2YXRYdUZtdVJ0KzV3enA2Mk8yODlaOEZKcHlReHBBMjQyVHdKaWFSckU4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVMK1QzRGcxbS9WZmNQUU1JZEJneVhtc0tHV0RPODBFRVdNblBZaFloM3BwZ3ZRdmR4MWRJcFdpL0J3QWM0OGZYOEx6a2pFa3lncFFzQ05TcnN5ZkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldiNStsU25lSU5lNmxoOUpoWHlvZEdCVHJsZkhKcUpxdjhsUjVWWkpJMmZ5Uk9BWjBVSHZYOVNMQ2kwV0gySzdwNXFBL1p0MWJpdFJEMFN6NlVNUmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDM0MzM1MTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NDM1MTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
