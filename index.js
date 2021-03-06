const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { usuario } = require('./src/usuario')
const { admins } = require('./src/admins')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const porno = JSON.parse(fs.readFileSync('./database/json/porno1.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const cr = 'ZERO TWO\n' 
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const axios = require("axios");
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const line = '║';
const espaco = ' ';
const line1 = '╔';
const line2 = ' ';
const line3 = '╠';
const line4 = '╚';
const line5 = '╝';
const line17 = 'http://bit.ly/31DwnL7';
const line18 = 'https://bit.ly/3mdFFqz';
const line19 = 'http://bit.ly/3skMUOT';
const canal = 'http://bit.ly/3sD8OOt';
const ban = 'ꪶ͢𝐁Λ͢η'; 
const insta = 'http://bit.ly/3dtBTH8';
const instapro = 'https://bit.ly/32ihRJ7';
const instaname = '𝐈𝐍𝐒𝐓Λ͢♛:';
const insta2 = 'https://bit.ly/32ihRJ7';
const insta3 = 'http://bit.ly/3dtBTH8';
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'darkbot'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ban\n' // Nama kamu
            + 'ORG:Lexa;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=554891428604:+55 48 91428604\n' //Nomor whatsapp kamu
            + 'END:VCARD'
const ngonsol = JSON.parse(fs.readFileSync('./database/6/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol            
prefix = '!','.','#'
blocked = []
limitawal = '999999999'


/*********** LOAD FILE ***********/
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antibucin = JSON.parse(fs.readFileSync('./database/group/antibucin.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Pera Ae')
	})
	client.on('open', () => {
		success('2', 'BOT LENDARIO ESTA ON')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	
	//**** ANTI-FAKE *****
	
	client.on('group-participants-update', async (anu) => {
	  	if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55) && !num.split('@')[0].startsWith(351) && !num.split('@')[0].startsWith(1)) {
					client.sendMessage(mdata.id, ' ⛹️⛹️ Somente números do Brasil, dos EUA e de Portugal são aceitos aqui. 🏌️', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 2000)
			 }
		}
       	}
	
	})		
		
	
	//*** FUNCTION WELCOME ****
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `┏━━━━━━━━━━━━━━━━━━━━
┃─────〘𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾 〙────
┃━━━━━━━━━━━━━━━━━━━━
┠⊷ 𝙽𝙾𝙼𝙴: ${num.split('@')[0]}
┠⊷ 𝙽𝙾𝙼𝙴: ${mdata.subject}
┠⊷ Lᴇɪᴀ ᴀs ʀᴇɢʀᴀs ᴘʀᴀ ɴᴀ̃ᴏ sᴇʀ
┠⊷ ʙᴀɴɪᴅᴏ! 
┠⊷ Mᴇᴜ ᴄʀɪᴀᴅᴏʀ:
┠⊷ wa.me//554891428604
┗━━━━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Menos 1 😔... @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
	     }
	})
	

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[nameReq] != undefined ? client.contacts[nameReq].vname || client.contacts[nameReq].notify : undefined

			mess = {
					wait: '⚡Calma ae lendario trabalhando⚡',
					success: 'Pronto',
					levelon: '*leveling* *ativado*',
					leveloff: '*leveling* *desativado*',
					levelnoton: ' *leveling não ativado*',
					levelnol: '*ERROR* °-°',
					error: {
				stick: 'Não deu pra converter a foto/video na figurinha parsa, A vida e triste',
				Iv: 'Link invalido'
				},
				only: {
					group: 'Este comando so pode ser usado nos grupos maninho',
					premium: `Ei {pushname2} Só usuarios PREMIUMS podem usar este comando*`,
					mod: 'ESTE PEDIDO É ESPECÍFICO PARA O MODERADOR DO lendario*',
					benned: 'Você foi banido, contate o dono para te desbanir',
					ownerG: 'Só o RIQUE pode usar esse comando meu mano',
					ownerB: 'Só o RIQUE  pode usar esse comando meu mano',
					userB: `──「 LISTA 」──\nOlá ${pushname} !\nVocê não esta registrado como amigo do meu dono então pessa para ele te adicionar como amigo\n\n──「 ⚡Super Xandão⚡ 」──`,
					admin: 'Este comando só pode ser usado por administradores de grupo!',
					Badmin: 'Este comando so pode ser usado quando o lendario se torna ADM do grupo parsa',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["554891428604@s.whatsapp.net","552182230081@s.whatsapp.net","554891428604@s.whatsapp.net","5521971646956@s.whatsapp.net"] // Recoloque o seu numero
			const mod = [ownerNumber,"554891428604@s.whatsapp.net","552182230081@s.whatsapp.net","554891428604@s.whatsapp.net","5521971646956@s.whatsapp.net"]// Moderador do bot
			const adminbotnumber = ["554891428604@s.whatsapp.net","552182230081@s.whatsapp.net","554891428604@s.whatsapp.net","5521971646956@s.whatsapp.net"]// admin bot numero
			const frendsowner = ["554891428604@s.whatsapp.net","552182230081@s.whatsapp.net","554891428604@s.whatsapp.net","5521971646956@s.whatsapp.net"]// amigo do criador 
			const premium = ["554891428604@s.whatsapp.net","552182230081@s.whatsapp.net","554891428604@s.whatsapp.net","5521971646956@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
			const isAntiFake = isGroup ? antifake.includes(from) : false
	                const isAntiBucin = isGroup ? antibucin.includes(from) : false
	    	        const isAnime = isGroup ? anime.includes(from) : false
	    	        const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			let palavrasANA = [
				{
					original: 'NETFLIX',
					embaralhada: 'TFLIXNE',
					dica: 'APLICATIVO'
				},
				{
					original: 'YOUTUBE',
					embaralhada: 'TUBEYOU',
					dica: 'APLICATIVO'
				},
				{
					original: 'PORTUGAL',
					embaralhada: 'TUGALPOR',
					dica: 'PAÍS'
				},
				{
					original: 'PISTOLA',
					embaralhada: 'TOPISLA',
					dica: 'OBJETO'
				},
		
				{
					original: 'CAMARÃO',
					embaralhada: 'MARÃOCA',
					dica: 'COMIDA'
				},
				{
					original: 'HIDRANTE',
					embaralhada: 'TEHDIRAN',
					dica: 'OBJETO'
				},
				{
					original: 'FOGUETE',
					embaralhada: 'TEFOGUE',
					dica: 'OBJETO'
				},
				{
					original: 'SKATE',
					embaralhada: 'TEASK',
					dica: 'OBJETO'
				},
				{
					original: 'MACACO',
					embaralhada: 'CACOMA',
					dica: 'ANIMAL'
				},
				{
					original: 'LASANHA',
					embaralhada: 'NHASALA',
					dica: 'COMIDA'
				},
				{
					original: 'PASTEL',
					embaralhada: 'PATELS',
					dica: 'COMIDA'
				},
				{
					original: 'COXINHA',
					embaralhada: 'XICONHA',
					dica: 'COMIDA'
				},
				{
					original: 'BICICLETA',
					embaralhada: 'CIBITACLE',
					dica: 'OBJETO'
				},
				{
					original: 'INSTAGRAM',
					embaralhada: 'TAGRAMINS',
					dica: 'APLICATIVO'
				},
				{
					original: 'WHATSAPP',
					embaralhada: 'TSWHAAPP',
					dica: 'APLICATIVO'
				},
				{
					original: 'HIDRANTE',
					embaralhada: 'TEHDIRAN',
					dica: 'OBJETO'
				},
				{
					original: 'CELULAR',
					embaralhada: 'CELARLU',
					dica: 'OBJETO'
				},
				{
					original: 'NOTEBOOK',
					embaralhada: 'TENOBOOK',
					dica: 'OBJETO'
				},
				{
					original: 'COMPUTADOR',
					embaralhada: 'PUCOMDORTA',
					dica: 'OBJETO'
				},
				{
					original: 'LANTERNA',
					embaralhada: 'TERLANNA',
					dica: 'OBJETO'
				},
				{
					original: 'CACHORRO',
					embaralhada: 'CAORROCHO',
					dica: 'ANIMAL'
				},
				{
					original: 'DESENTUPIDOR',
					embaralhada: 'SENDETUDORPI',
					dica: 'OBJETO'
				},
				{
					original: 'TOMATE',
					embaralhada: 'ATEMOT',
					dica: 'ALIMENTO'
				},
				{
					original: 'SAXOFONE',
					embaralhada: 'ASXOEOFN',
					dica: 'INSTRUMENTO MUSICAL'
				},
				{
					original: 'CAZAQUISTÃO',
					embaralhada: 'ZAACQIUSÃOT',
					dica: 'PAÍS'
				},
				{
					original: 'CROÁCIA',
					embaralhada: 'CRCÁOAI',
					dica: 'PAÍS'
				},
				{
					original: 'HUNGRIA',
					embaralhada: 'UHGINRA',
					dica: 'PAÍS'
				},
				{
					original: 'MEGAFONE',
					embaralhada: 'MOEFGNEA',
					dica: 'OBJETO'
				},
				{
					original: 'CINTURA',
					embaralhada: 'RCIANUT',
					dica: 'CORPO HUMANO'
				},
				{
					original: 'ABDÔMEN',
					embaralhada: 'MBÔDENA',
					dica: 'CORPO HUMANO'
				},
				{
					original: 'TANGERINA',
					embaralhada: 'RITAANGNE',
					dica: 'ALIMENTO'
				}
			]
		//JOGO DO ANAGRAMA
			if(isGroup && fs.existsSync(`./lindy/anagrama-${from}.json`)){
			console.log(budy)
				let dataAnagrama = JSON.parse(fs.readFileSync(`./lindy/anagrama-${from}.json`))
			   if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
		
				if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns @${sender.replace('@s.whatsapp.net', '')}🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./lindy/anagrama-${from}.json`)
		setTimeout(async() => {
		  await  fs.writeFileSync(`./lindy/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
			let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lindy/anagrama-${from}.json`))
			client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
		`, MessageType.text)                 
		}, 5000)
			}}
			if (budy.includes("https://m.kwai.me/")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador do grupo, e o bot  não vai te remover')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 ANTI-KWAIII DETECTADO 」\n${sender.split("@")[0]} voce sera expulso*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 0)
	}
        if (budy.includes("https://s.kwai.app/s/")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador do grupo, os bot não grupo ')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 SPAM DETECTADO 」\n${sender.split("@")[0]} vou remover por postar links kwai *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		
		}, 0)
	}
			if (budy.includes("https://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador do grupo, e o bot  não vai te remover')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		
		}, 0)
			}
		       
			//FUNÇÃO PRO BOT FALAR 
  		 								
				if (messagesC.includes("rique")){
			client.updatePresence(from, Presence.composing)
			reply("OPA , ESSE É O CRIADOR BOT LENDARIO")
	}	
					
							if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./src/audio/bot.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	
		     }	
								
		if (budy.toLowerCase().includes("@554891428604")){
					if (!isGroup) return
					client.updatePresence(from, Presence.composing)
					reply('e ai o que ser quer como o meu dono ?')
				    }
			

		//FUNÇÃO PRO BOT FALAR ACABOU
		
			
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
   
        	colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
// comando com o prefixo//	
					
					// comando dos Admins//
					
					case 'antilink':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiBucin) return reply('anti-link está ativo ')

						antibucin.push(from)

						fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))

						

						client.sendMessage(from,` Atenção a todos participante do grupo (*ANTI-LINK*) está ativo no grupo, qualquer tipo link sera banido do grupo!!! `, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiBucin) return reply('O modo Anti-Link foi desativado')

						var ini = antibucin.indexOf(from)


						antibucin.splice(ini, 1)

						fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))

						reply('Desativando anti-link com sucesso neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break
					
					
					case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
              
					
				break
					
					case 'nomegp':
                 if (!isGroup) return reply(`Este comando só pode ser usado em grupos`)
		             if (args.length < 1) return reply (`o nome do grupo é: *${groupName}*`)
		           break

					 case 'level':
		case 'level1':			
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome : ${sem}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
					case 'fechar':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo Fechado pelo administrador  @${nomor.split("@s.whatsapp.net")[0]}\n  *Só Adms Podem mandar mensagem*`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
				 
			
                case 'abrir':
               
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo Aberto pelo administrador  @${sender.split("@")[0]}\n  *todos os participantes pode enviar mensagens*`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessa
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				case 'lvl':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de nivel  já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply('use lvl 1 para on ativar parar desativar lvl 1 off')
					}
					break
					
					case 'regras':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
					
					case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`ok , Chefe foto dessa pessoal foi clonada no bot. @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
                
					break
					
					case 'nivel':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'tiradm':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'adiciona':
			        case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man \n ex: 554891843177')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
					
					case 'ban':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja remover!')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break
					
				case 'remover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer remover!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'esse filha da puta não cumpriu as regras foi removido :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					
					                                case 'linkdogrupo':
                                        if (!isGroup) return reply(mess.only.group)
                                     
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'sair':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
					case 'totaladm':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
				case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Já esta ativo.')
					welkom.push(from)
				    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
				    reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
					} else {
					reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
					}
                                      break
					
					
					
				// FIIIIIM //

						// COMANDO PARA O DONO //
					
					case 'comunicado':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(12)}`})
						}
						
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ COMUNICADO ]\n\n${body.slice(12)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
					
					case 'limpar':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(`Chat do bot limpo com sucesso!`)
					break
					
					case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					
					}
					break
					
					
	// FIIIIIM //
					
					
					// cases menus , logod , temas , etc... //
					
					
		          case 'usuario':
                          case 'usuário':
			  case 'usuarios':
			  case 'users':
			
			if (!isGroup) return reply(`Este comando só pode ser usado em grupos`)
cuImg = await getBuffer (`https://image.flaticon.com/icons/png/512/306/306232.png`)
client.sendMessage(from, cuImg, image, {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": "Menu do Usuario",}}}, caption: usuario(prefix, sender)})
					break	
					
					
                 case 'adm':	
			  case 'adms':
			  case 'admins':
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isGroup) return reply(`Este comando só pode ser usado em grupos`)
cuImg = await getBuffer (`https://img.icons8.com/bubbles/2x/admin-settings-male.png`)
client.sendMessage(from, cuImg, image, {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": "Menu Admins",}}}, caption: admins(prefix, sender)})
					break
					
				  case 'menu':
	                         case 'ajuda':
			         case 'help':
		let palavrasAleatorias = [
'sexo',
'sua mãe é minha',
'gay',
			]
	            	uptime = process.uptime ()
                    putagg = fs.readFileSync('./src/image/menu.jpeg')
                    client.sendMessage(from, putagg, image, {quoted: mek, caption: help(prefix, sender, pushname, time, palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)])})
                    break
					
					
					// FIIIIIM //
					
					
					// CASE DO USUARIO //
					
					
			case 'ping':
                case 'velocidade':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Velocidade do bot: *${latensi.toFixed(4)} _Segundos_\nTipo do bot: *Termux Somente*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
					
						case 'listonline':
				if (!isGroup) return reply(mess.only.group)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let onli = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, '`[Usuario Online]:\n' + onli.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek, contextInfo: { mentionedJid: onli } })
				
					break
					
					
					case 'ler':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
					
					case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('simi é pica tio')
					reply(anu)
					break
					
					case 'wa.me':
		        case 'meunumero':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*⚡BOT LENDARIO⚡ NO CONTROLE*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
                  
					
					case 'rick':
                    client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    client.sendMessage(from, 'Ctt do meu dono ai, respeita o pv dele',MessageType.text, { quoted: mek} )
                    break
					
					case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
				
				break
					
					case 'voz':
					if (args.length < 1) return client.sendMessage(from, 'Ox, cade o codigo da liguagem mn? \n Exemplo: *voz pt palavra', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto vey?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 100
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
               break
					case 'converte':
					if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					
					case 'meme':
				 data = fs.readFileSync('./src/image/api.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'APi criador por Rique o lendario')
				break
					
					
					case 'frases':
				 data = fs.readFileSync('./src/image/frases.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, { caption: 'APi criador por Rique o lendario', quoted: mek })
					await limitAdd(sender) 	
				break
					
				      case 'musica':
					  if (args.length < 1) return reply('Cᴀᴅᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ ᴍᴜ́sɪᴄᴀ?')
                reply('🔎Pʀᴏᴄᴜʀᴀɴᴅᴏ ᴍᴜ́sɪᴄᴀ..🔎')
                const play = body.slice(8)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=italumaster`)
                 infomp3 = `┏━━━━━━━━━━━━━━━━━━━━
┃   〘ᴍᴜsɪᴄᴀ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ!!! 〙
┃━━━━━━━━━━━━━━━━━━━
┠⊷\nᴛɪᴛᴜʟᴏ: 
┠⊷ ${anu.result.title}\

┠⊷  \n𝚄𝚛𝚕:
┠⊷ ${anu.result.source}
┠⊷\nTᴀᴍᴀɴʜᴏ: ${anu.result.size}\

┠⊷\nᴘᴏʀ ғᴀᴠᴏʀ ᴇsᴘᴇʀᴇ ᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴇʀ ᴄᴏɴᴄʟᴜɪᴅᴏ!!!
 
┏━━━━━━━━━━━━━━━━━━━━
┠⊷ Mᴇᴜ ᴄʀɪᴀᴅᴏʀ:
┠⊷ wa.me/554891843177
┠⊷ Cᴏᴘʏʀɪɢʜᴛ ® Bᴏᴛ ᴏ Lᴇɴᴅᴀʀɪᴏ 2021 
┗━━━━━━━━━━━━━━━━━━━━`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                if (anu.error) return reply( mess.error.again)
					break
					case 'figurinha':
				case 'fig':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Armaria vey deu erro aqui mn, tenta mais tarde ae.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas **figurinha* ou marque uma imagem que já foi enviada`)
					}
					break
				
					
					// FIIIIIM //
					
					// API DE DOWNLOAD  //
					
					case 'yts': 
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(4)}&apikey=rique2021`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Uploader : 
Nama Channel : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verified : ${i.uploader.verified}
Video :
Nama Video : ${i.video.title}
Url : ${i.video.url}
Durasi : ${i.video.duration}
Deskripsi : ${i.video.snippet}
Tanggal Upload : ${i.video.upload_date}
Views : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
}
client.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break
					
					// COMANDO PARa O JOGO //
					case 'anagrama':
						if(!isGroup) return reply('comando apenas para grupos')
					  const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
					  if(!isGroupAdmins) return reply('comando apenas para admins')
				   if(args.length == 0) return reply('use #anagrama ativar para ativar o jogo do anagrama\npara desativar user #anagrama desativar')
						if (args.join(' ') === 'ativar') {
							if(fs.existsSync(`./lindy/anagrama-${from}.json`)) {
							  let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lindy/anagrama-${from}.json`))
							  reply(`o jogo já foi iniciado neste grupo:
				  palavra: ${dataAnagrama2.embaralhada}
				  dica: ${dataAnagrama2.dica}
				  `)} else {
					  fs.writeFileSync(`./lindy/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
					  client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
				  `,  MessageType.text)
				  }                  
						} else if (args.join(' ') ==='desativar') {
						  if(!fs.existsSync(`./lindy/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				  fs.unlinkSync(`./lindy/anagrama-${from}.json`)
				  reply("desativado com sucesso")
						}
					break
					
					
					
					
					
                               // FIIIIIM //
					}
			
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Eita Mano , o comando não registrado', color(sender.split('@')[0]))
					}
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
 
		 		  
starts()
