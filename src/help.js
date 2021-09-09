const help = (prefix, sender, pushname, time, frasealeatoria) => {

	return ` 
┏━━━━━━━━━━━━━━━━━━━━
┃─────〘 LENDARIO 〙────
┃━━━━━━━━━━━━━━━━━━━━
┠⊷ nome: ${pushname}
┠⊷ numéro wa.me/${sender.split("@")[0]}   
┠⊷ tempo ativo: ${kyun(uptime)}
┠⊷ Velocidade: ${process.uptime()}  
┠⊷ Data e hora: ${time}   
┠⊷ frase: ${frasealeatoria}
┗━━━━━━━━━━━━━━━━━━━━  
 ┏━━━━━━━━━━━━━━━━━━━━
 ┃─────〘 MENU 〙─────
 ┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━          
┠⊷ ${prefix}admins                    
┠⊷ ${prefix}tema
┠⊷ ${prefix}logo
┠⊷ ${prefix}usuario        
┠⊷ ${prefix}Dono1                           
┠⊷ ${prefix}novidades
┠⊷ ${prefix}diversao
┠⊷ ${prefix}botfalar
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃─────〘 RIQUE O Lendario 〙─────
┃──〘 ⚡Menu Organizado⚡ 〙──
┗━━━━━━━━━━━━━━━━━━━━ 

      `
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var Horas = Math.floor(seconds / (60*60));
  var Minutos = Math.floor(seconds % (60*60) / 60);
  var Segundos = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(Horas)} Horas ${pad(Minutos)} Minutos ${pad(Segundos)} Segundos`
}
}
exports.help = help
