import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Es un Secreto Plan B*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `*⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒═══ ${vs} ═══⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒*

🌸 ${mid.smsYT1}
» ${yt_play[0].title}
⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒⭒─ׄ─ׅ─ׄ─⭒─ׄ
🌸 ${mid.smsYT15}
» ${yt_play[0].ago}
⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒⭒─ׄ─ׅ─ׄ─⭒─ׄ
🌸 ${mid.smsYT5}
» ${secondString(yt_play[0].duration.seconds)}
⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒⭒─ׄ─ׅ─ׄ─⭒─ׄ
🌸  ${mid.smsYT10}
» ${MilesNumber(yt_play[0].views)}
⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒⭒─ׄ─ׅ─ׄ─⭒─ׄ
🌸  ${mid.smsYT2}
» ${yt_play[0].author.name}
⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒⭒─ׄ─ׅ─ׄ─⭒─ׄ
🌸 ${mid.smsYT4}
» ${yt_play[0].url}

*⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒═══ ${vs} ═══⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒*`.trim()

let listSections = [];             
listSections.push({
title: comienzo + ' 📡 𝗧𝗜𝗣𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ' + fin,
rows: [{ header: "🌸 𝗔𝗨𝗗𝗜𝗢 (Opcion 1)", title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, /*{ header: "🌸 𝗔𝗨𝗗𝗜𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{ header: "🌸 𝗔𝗨𝗗𝗜𝗢   𝗗𝗢𝗖", title: "", id: `${usedPrefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "🌸 𝗩𝗜𝗗𝗘𝗢 (Opcion 1)", title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
/*{ header: "🌸 𝗩𝗜𝗗𝗘𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{header: "🌸 𝗩𝗜𝗗𝗘𝗢   𝗗𝗢𝗖", title: "", id: `${usedPrefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});

/*listSections.push({
  text: `*Eʟɪɢᴀ ǫᴜᴇ ᴠᴀ ʜᴀᴄᴇʀ ᴄᴏɴ  ${text}*`,
  footer: global.wm,
  title: `${htki} *☁ Dᴇsᴄᴀʀɢᴀs* ${htka}`,
  buttonText: `🍄 Eʟɪɢɪʀ 🍄`,
  sections
}) */

await conn.sendList(m.chat, `*Eʟɪɢᴀ ǫᴜᴇ ᴠᴀ ʜᴀᴄᴇʀ ᴄᴏɴ  ${text}*`, `\n${htki} *☁ Dᴇsᴄᴀʀɢᴀs* ${htka}`, `🍄 Eʟɪɢɪʀ 🍄`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }
