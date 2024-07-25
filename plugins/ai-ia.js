import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.reply(m.chat, `🍟 *Ingrese su petición*\n🚩 *Ejemplo de uso:* ${usedPrefix + command} Como hacer un avión de papel`, m, rcanal)  
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await conn.reply(m.chat, res.gpt, m, rcanal)
await m.react(done)
} catch {
try {
//await m.react(done)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
let res = await gpt.json()
await conn.reply(m.chat, res.data, m, rcanal)
await m.react(done) 
} catch{
}}}
handler.help = ['chatgpt <texto>', 'ia <texto>']
handler.tags = ['ai']
handler.register = true
handler.estrellas = 5
handler.command = ['ia', 'chatgpt']

export default handler;
