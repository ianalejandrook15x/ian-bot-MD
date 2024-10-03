let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `> *Hola si quieres unir a `IanBot-MD` a tus grupos deberás cumplir con los requisitos* 🌙

> `Requisito 1`: *El grupo en el que va a unir al bot debe de tener un `mínimo de 25 miembros` dado que si no cumple con esta petición el bot no será otorgado*  

> `Requisito 2`: *Deberá de compartir el link del canal del Bot para seguir creciendo la comunidad del Bot*    *Link*: `https://whatsapp.com/channel/0029VaogOkQ3gvWhofzhKH10`

> `Requisito 3`: *Para una función mejor del Bot ( Opcional*) *dar administración al bot para que pueda cumplir con las siguientes tareas: `anti link, anti bot, anti spam, kick, entre otras funciones`*

> `Requisito 4`: *Si no desea compartir el link del canal del Bot deberá dejar una estrella en el repositorio del Bot para obtener más confianza al utilizarlo* 

> https://github.com/ianalejandrook15x/ian-bot-MD

> `Requisito 5`: *No hacer Spam con el bot si se presenta este caso se mes dará de baja al bot por favor respete las reglas* 

> Tҽαɱ Sԋιɳιɳɠ Mσσɳ 🌙

> Pσɯҽɾҽԃ Bყ ιαɳαʅҽʝαɳԃɾσσƙ15x` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `Pσɯҽɾҽԃ Bყ ιαɳαʅҽʝαɳԃɾσσƙ15x`,
body: `Rҽɠʅαʂ`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/hnvd.jpg', 
sourceUrl: 'https://ianalejandrook15x.godaddysites.com/'}}},
{ quoted: fkontak})
}
handler.tags = ['REGLAS'] 
handler.help = ['ianreglas', 'reglas'] 
handler.command = ['reglas', 'ianreglas', 'requisitos', 'botreglas']
export default handler
