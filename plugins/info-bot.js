import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🍂 ¡Hola! Soy Ian, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^English$/i.test(m.text)) {
conn.reply(m.chat, `*The first one to speak is gay*`, m, rcanal, )
}
/*if (/^/Corin$/i.test(m.text)) {
conn.reply(m.chat, `_*Hola buscas algun servidor con precios bajeos ? Te presento a CorinPLus un servicio hosting confiable y de buena calidad, entre por aqui https://dash.corinplus.com_*`, m, rcanal, )
}*/
if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá*`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes*`, m, rcanal, )
}
return !0;
};
export default handler;
