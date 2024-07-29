
let handler = async (m, { conn, command }) => {
let gps = `*◜💙 GRUPOS OFICIALES 💙◞*

🚩 ${packname} 
${gp1}

 *◜🤍 COLABORACIONES 🤍◞*

🌸 ${colab1}
${gp2}

🌸 ${colab2}
${gp3}

🌸 ${colab3}
${gp4}

🌸 ${namecomu}
${comunidad1}

🌸 ${namecomu2}
${comunidad2}

 *◜🌸 CANALES OFICIALES 🌸◞*

🍭 ${namechannel}
${channel}

🍭 ${namechannel2}
${channel2}`

await m.react(emojis) 

await conn.sendFile(m.chat, imagen2, 'nino.jpg', gps, fkontak, null, rcanal)}

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposIan|linkre|iangp|gpIan|gruposofc|gruposoficiales$/i
handler.register = true

export default handler
