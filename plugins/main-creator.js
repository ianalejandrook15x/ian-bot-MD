let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ιαɳαʅҽʝαɳԃɾσσƙ15x;;\nFN:ιαɳαʅҽʝαɳԃɾσσƙ15x⁩\nORG:ιαɳαʅҽʝαɳԃɾσσƙ15x\nTITLE:\nitem1.TEL;waid=5493876639332:5493876639332\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:Hσʅα ɱҽ ʅʅαɱσ Iαɳ ყ ʂσყ ԃυҽñσ ԃҽ ʅσʂ ρɾσყҽƈƚσʂ Fυƚαɾσ-Bσƚ - IαɳBσƚ-MD, ƚαɱႦιéɳ ʂσყ Mσԃҽɾαԃσɾ ԃҽ CσɾιɳPʅυʂ-Hσʂƚ 🌙\nX-WA-BIZ-NAME:Ian\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Iαɳαʅҽʝαɳԃɾσσƙ15x⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
