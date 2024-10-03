import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (!text) {
        return conn.reply(m.chat, '𝗤𝘂𝗲 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝗾𝘂𝗲 𝗯𝘂𝘀𝗾𝘂𝗲  𝗙𝘂𝘁𝗮𝗿𝗼 𝗕𝗼𝘁', m);
    }

    await m.react('⏳');
    let res = await yts(text);
    let play = res.videos[0];

    if (!play) {
        throw `Error: Vídeo no encontrado`;
    }

    let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

    let txt = '```𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚜```\n';
    txt += '╭━─━─━─━─≪✠≫─━─━─━─━╮\n';
    txt += `> *Tιƚυʅσ* : _${title}_\n`;
    
    txt += `> *Cɾҽαԃσ* : _${ago}_\n`;
    
    txt += `> *Dυɾαƈισɳ* : _${timestamp}_\n`;
    
    txt += `> *Vιʂιƚαʂ* : _${views.toLocaleString()}_\n`;
    
    txt += `> *Lιɳƙ* : _https://www.youtube.com/watch?v=${videoId}_\n`;
    
    txt += '┗─══──━══─| ✠ |─══━─═──┛ \n';
    txt += '☁ 𝐅𝐮𝐭𝐚𝐫𝐨 𝐁𝐨𝐭 ☁';

    await conn.sendButton2(m.chat, txt, '. ', thumbnail, [
        ['MP3', `${usedPrefix}ytmp3 ${url}`],
        ['MP3DOC', `${usedPrefix}ytmp3doc ${url}`],
        ['MP4', `${usedPrefix}ytmp4 ${url}`], 
        ['MP4DOC', `${usedPrefix}ytmp4doc ${url}`]
        ], null, [['Canal', 'https://whatsapp.com/channel/0029ValIBdM2f3EI1tGGQ93S']], m);

    await m.react('✅');
};

handler.help = ['buscador'];
handler.tags = ['downloader'] 
handler.command = ['buscador',];

export default handler;
