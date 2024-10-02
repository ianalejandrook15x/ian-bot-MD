/*
「 ✧ 」TODOS DERECHOS RESERVADOS POR EL AUTOR:
- GabrielVz (@glytglobal)
*/

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*「 ⚘ 」ESCRIBA EL NOMBRE DE LO QUE QUIERA BUSCAR*\n*EJEMPLO:*\n> ${usedPrefix + command} yt-search`, m, rcanal)

try {

conn.reply(m.chat, `「 ⚘ 」BUSCANDO RESULTADO DE:\n> *${text}`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons, 
sourceUrl: channel }}})

let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()

if (!objects.length) return conn.reply(m.chat, `「 ⚘ 」 NO SE ENCONTRO RESULTADOS PARA:\n> *${text}*`, m, fake)

let txt = objects.map(({ package: pkg }) => {
return `「 RESULTADO 」

✦ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pkg.name}
✦ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: V${pkg.version}
✦ 𝐄𝐧𝐥𝐚𝐜𝐞: ${pkg.links.npm}
✦ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧: ${pkg.description}
\n\n----------`
}).join`\n\n`

await conn.reply(m.chat, txt, m, fake)
await m.react(done)
} catch {
await conn.reply(m.chat, '「 ⚘ 」OCURRIO UN ERROR', m, fake)
await m.react(error)
}}

handler.help = ['npmjs']
handler.tags = ['buscador']
handler.command = ['npmjs']
handler.register = true
export default handler;
