
let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• Ianalejandrook15x
🍟 *Rol:* Propietario
🚩 *Número:* ${creador}
✨️ *GitHub:* https://github.com/ianalejandrook15x

⁖❤️꙰  *Colaboradores:*

• ArizzVal
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/5215610314499
✨️ *GitHub:* https://github.com/ArizzVal

• elrebelde21
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/573147616444
✨️ *GitHub:* https://github.com/elrebelde21

• AzamiJs
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/5214434703586
✨️ *GitHub:* https://github.com/AzamiJs

• Alba070503
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/59169082575
✨️ *GitHub:* https://github.com/Alba070503

• Shrkbadboy
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/573218138672
✨️ *GitHub:* https://github.com/shrkbadboy`
await conn.sendFile(m.chat, icons, 'nino.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
