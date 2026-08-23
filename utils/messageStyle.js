import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "Digix Crew",
        body: "ð“†© ðƒð¢ð ð¢ð­ðšð¥ ð‚ð«ðžð° ðŸðŸ’ðŸ‘ ð“†ª",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}