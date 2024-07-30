
let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🌸 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• Ianalejandrook15x
🌸 *Rol:* Propietario 👑
🚩 *Número:* ${creador}
✨️ *GitHub:* https://github.com/ianalejandrook15x

⁖❤️꙰  *Colaboradores:*

• Miguel
🌸 *Rol:* Colaborador 🐉
🚩 *Número:* Wa.me/543876631319
✨️ *GitHub:* https://github.com/ianalejandrook15x

• Camila
🌸 *Rol:* Animadora 🌺
🚩 *Número:* Wa.me/543876432321
✨️ *GitHub:* https://github.com/ianalejandrook15x

• Bautista
🌸 *Rol:* Participante
🚩 *Número:* Wa.me/543876576152
✨️ *GitHub:* https://github.com/ianalejandrook15x

• Carlos
🌸 *Rol:* Colaborador 😎
🚩 *Número:* Wa.me/50240874961
✨️ *GitHub:* https://github.com/ianalejandrook15x

• Dilan
🌸 *Rol:* Inspector de Rangos 🎃
🚩 *Número:* Wa.me/543876636841
✨️ *GitHub:* https://github.com/ianalejandrook15x

• Bitel
🌸 *Rol:* El Señor de la Nochee 🦇
🚩 *Número:* Wa.me/51925730477
✨️ *GitHub:* https://github.com/ianalejandrook15x`
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
