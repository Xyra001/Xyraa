const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("./lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎 」
> ➟ *Name* : ${pushname !== undefined ? pushname : '-'}
> ➟ *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> ➟ *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 」
> ➟ *Creator* : ${ownerName}
> ➟ *Bot Name* : ${botName}
> ➟ *Time* : ${jam}
> ➟ *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}simplemenu
> ➟ ${prefix}infobot
> ➟ ${prefix}donate
> ➟ ${prefix}dashboard
> ➟ ${prefix}owner
> ➟ ${prefix}cekdrive
> ➟ ${prefix}cekbandwidth
> ➟ ${prefix}cekpremium
> ➟ ${prefix}listpremium
> ➟ ${prefix}listsewa
> ➟ ${prefix}speed
> ➟ ${prefix}runtime
> ➟ ${prefix}listbahasa
╰─────────────────✧
╭─「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐃 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}toanime
> ➟ ${prefix}differentme
> ➟ ${prefix}differentme2
> ➟ ${prefix}diffusion
> ➟ ${prefix}txt2img
> ➟ ${prefix}aiscene
> ➟ ${prefix}remini
> ➟ ${prefix}hdr
> ➟ ${prefix}nobg
> ➟ ${prefix}removebg
> ➟ ${prefix}resize
> ➟ ${prefix}ssweb
> ➟ ${prefix}ssweb2
> ➟ ${prefix}sticker
> ➟ ${prefix}stickerwm
> ➟ ${prefix}smeme
> ➟ ${prefix}toimg
> ➟ ${prefix}tourl
> ➟ ${prefix}tovideo
> ➟ ${prefix}tomp3
> ➟ ${prefix}toaudio
> ➟ ${prefix}tovn
> ➟ ${prefix}toptv
> ➟ ${prefix}readvo
> ➟ ${prefix}ttp
> ➟ ${prefix}attp
> ➟ ${prefix}qc
> ➟ ${prefix}emojimix
> ➟ ${prefix}ai
> ➟ ${prefix}aiimg
> ➟ ${prefix}aidraw
> ➟ ${prefix}chatgpt
> ➟ ${prefix}nuliskiri
> ➟ ${prefix}nuliskanan
> ➟ ${prefix}foliokiri
> ➟ ${prefix}foliokanan
> ➟ ${prefix}say
> ➟ ${prefix}translate
╰─────────────────✧
╭─「 𝐕𝐎𝐈𝐂𝐄 𝐂𝐇𝐀𝐍𝐆𝐄𝐑 」
> ➟ ${prefix}bass
> ➟ ${prefix}deep
> ➟ ${prefix}fast
> ➟ ${prefix}slow
> ➟ ${prefix}smooth
> ➟ ${prefix}fat
> ➟ ${prefix}earrape
> ➟ ${prefix}blown
> ➟ ${prefix}nightcore
> ➟ ${prefix}tupai
> ➟ ${prefix}robot
> ➟ ${prefix}reverse
╰─────────────────✧
╭─「 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}anonymouschat
> ➟ ${prefix}start
> ➟ ${prefix}next
> ➟ ${prefix}stop
> ➟ ${prefix}sendprofile
> ➟ ${prefix}menfess
> ➟ ${prefix}confess
> ➟ ${prefix}balasmenfess
> ➟ ${prefix}tolakmenfess
> ➟ ${prefix}stopmenfess
╰─────────────────✧
╭─「 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}list
> ➟ ${prefix}addlist
> ➟ ${prefix}dellist
> ➟ ${prefix}update
> ➟ ${prefix}jeda
> ➟ ${prefix}tambah
> ➟ ${prefix}kurang
> ➟ ${prefix}kali
> ➟ ${prefix}bagi
> ➟ ${prefix}delsetdone
> ➟ ${prefix}changedone
> ➟ ${prefix}setdone
> ➟ ${prefix}delsetproses
> ➟ ${prefix}changeproses
> ➟ ${prefix}setproses
> ➟ ${prefix}proses < reply chat >
> ➟ ${prefix}done < reply chat >
╰─────────────────✧
╭─「 𝐑𝐏𝐆 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}inventory
> ➟ ${prefix}mining
> ➟ ${prefix}buy
> ➟ ${prefix}sell
> ➟ ${prefix}heal
> ➟ ${prefix}hunt
> ➟ ${prefix}adventure
> ➟ ${prefix}luckyday
> ➟ ${prefix}killslime
> ➟ ${prefix}killgoblin
> ➟ ${prefix}killdevil
> ➟ ${prefix}killbehemoth
> ➟ ${prefix}killdemon
> ➟ ${prefix}killdemonking
> ➟ ${prefix}joinrpg
> ➟ ${prefix}sellikan
> ➟ ${prefix}sellbesi
> ➟ ${prefix}sellemas
> ➟ ${prefix}jelajah
> ➟ ${prefix}mancing
> ➟ ${prefix}jualikan
> ➟ ${prefix}jualcoal
> ➟ ${prefix}jualstone
> ➟ ${prefix}jualingot
> ➟ ${prefix}jualkayu
> ➟ ${prefix}jualbahankimia
> ➟ ${prefix}lebur
> ➟ ${prefix}nebang
> ➟ ${prefix}goplanet
> ➟ ${prefix}ojek
╰─────────────────✧
╭─「 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}caklontong
> ➟ ${prefix}tebakgambar
> ➟ ${prefix}tebakkata
> ➟ ${prefix}tebakgame
> ➟ ${prefix}tebakbendera
> ➟ ${prefix}tebakkalimat
> ➟ ${prefix}tebaksiapa
> ➟ ${prefix}tebakkimia
> ➟ ${prefix}tebaklirik
> ➟ ${prefix}tebaktebakan
> ➟ ${prefix}tekateki
> ➟ ${prefix}susunkata
> ➟ ${prefix}tictactoe
> ➟ ${prefix}delttt
> ➟ ${prefix}casino
> ➟ ${prefix}delcasino
╰─────────────────✧
╭─「 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}autoaigc
> ➟ ${prefix}afk
> ➟ ${prefix}welcome
> ➟ ${prefix}left
> ➟ ${prefix}pppanjanggc
> ➟ ${prefix}opentime
> ➟ ${prefix}closetime
> ➟ ${prefix}setopen
> ➟ ${prefix}changesetopen
> ➟ ${prefix}delsetopen
> ➟ ${prefix}setclose
> ➟ ${prefix}changesetclose
> ➟ ${prefix}delsetclose
> ➟ ${prefix}setwelcome
> ➟ ${prefix}changewelcome
> ➟ ${prefix}delsetwelcome
> ➟ ${prefix}setleft
> ➟ ${prefix}changeleft
> ➟ ${prefix}delsetleft
> ➟ ${prefix}linkgc
> ➟ ${prefix}setppgc
> ➟ ${prefix}setppgc2
> ➟ ${prefix}setnamegc
> ➟ ${prefix}setdesc
> ➟ ${prefix}autodlgc
> ➟ ${prefix}antilink
> ➟ ${prefix}antilinktt
> ➟ ${prefix}kickme
> ➟ ${prefix}mute
> ➟ ${prefix}open
> ➟ ${prefix}close
> ➟ ${prefix}add
> ➟ ${prefix}kick
> ➟ ${prefix}promote
> ➟ ${prefix}demote
> ➟ ${prefix}revoke
> ➟ ${prefix}hidetag
> ➟ ${prefix}checksewa
╰─────────────────✧
╭─「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}play
> ➟ ${prefix}ytmp3
> ➟ ${prefix}ytmp4
> ➟ ${prefix}ytv
> ➟ ${prefix}ytv2
> ➟ ${prefix}spotify
> ➟ ${prefix}spotifydl
> ➟ ${prefix}instagram
> ➟ ${prefix}ig
> ➟ ${prefix}ig2
> ➟ ${prefix}ig3
> ➟ ${prefix}igphoto
> ➟ ${prefix}igvideo
> ➟ ${prefix}igreels
> ➟ ${prefix}twitter
> ➟ ${prefix}tiktok
> ➟ ${prefix}tiktokslide
> ➟ ${prefix}tiktoksearch
> ➟ ${prefix}tiktokaudio
> ➟ ${prefix}mediafire
> ➟ ${prefix}gitclone
> ➟ ${prefix}fbdl
> ➟ ${prefix}fb2
> ➟ ${prefix}fb3
> ➟ ${prefix}fb4
> ➟ ${prefix}gdrive
╰─────────────────✧
╭─「 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}spotifysearch
> ➟ ${prefix}lk21
> ➟ ${prefix}jarak
> ➟ ${prefix}bukalapak
> ➟ ${prefix}apk
> ➟ ${prefix}google
> ➟ ${prefix}ytsearch
> ➟ ${prefix}grupwa
> ➟ ${prefix}pinterest
> ➟ ${prefix}lirik
> ➟ ${prefix}infogempa
> ➟ ${prefix}komikusearch
╰─────────────────✧
╭─「 𝐑𝐀𝐍𝐃𝐎𝐌 𝐀𝐍𝐈𝐌𝐄 」
> ➟ ${prefix}akira
> ➟ ${prefix}akiyama
> ➟ ${prefix}ana
> ➟ ${prefix}asuna
> ➟ ${prefix}ayuzawa
> ➟ ${prefix}boruto
> ➟ ${prefix}chitanda
> ➟ ${prefix}deidara
> ➟ ${prefix}elaina
> ➟ ${prefix}emilia
> ➟ ${prefix}erza
> ➟ ${prefix}fanart
> ➟ ${prefix}genshin
> ➟ ${prefix}gremory
> ➟ ${prefix}hestia
> ➟ ${prefix}hinata
> ➟ ${prefix}husbu
> ➟ ${prefix}icon
> ➟ ${prefix}inori
> ➟ ${prefix}isuzu
> ➟ ${prefix}itachi
> ➟ ${prefix}itori
> ➟ ${prefix}kaga
> ➟ ${prefix}kagura
> ➟ ${prefix}kaguya
> ➟ ${prefix}kakasih
> ➟ ${prefix}kaneki
> ➟ ${prefix}kaori
> ➟ ${prefix}keneki
> ➟ ${prefix}kosaki
> ➟ ${prefix}kotori
> ➟ ${prefix}kuriyama
> ➟ ${prefix}kuroha
> ➟ ${prefix}kurumi
> ➟ ${prefix}loli
> ➟ ${prefix}madara
> ➟ ${prefix}megumin
> ➟ ${prefix}menus
> ➟ ${prefix}mikasa
> ➟ ${prefix}miku
> ➟ ${prefix}minato
> ➟ ${prefix}naruto
> ➟ ${prefix}natsukawa
> ➟ ${prefix}nezuko
> ➟ ${prefix}nishimiya
> ➟ ${prefix}onepiece
> ➟ ${prefix}pokemon
> ➟ ${prefix}rem
> ➟ ${prefix}rize
> ➟ ${prefix}sagiri
> ➟ ${prefix}sakura
> ➟ ${prefix}sasuke
> ➟ ${prefix}shina
> ➟ ${prefix}shinka
> ➟ ${prefix}shizuka
> ➟ ${prefix}shota
> ➟ ${prefix}simp
> ➟ ${prefix}tomori
> ➟ ${prefix}toukachan
> ➟ ${prefix}tsunade
> ➟ ${prefix}yatogami
> ➟ ${prefix}yuki
╰─────────────────✧
╭─「 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}waifu
> ➟ ${prefix}ppcp
> ➟ ${prefix}cosplay
> ➟ ${prefix}cecan
> ➟ ${prefix}cogan
> ➟ ${prefix}meme
> ➟ ${prefix}memeindo
> ➟ ${prefix}darkjokes
╰─────────────────✧
╭─「 𝐑𝐀𝐌𝐃𝐎𝐌 𝐐𝐔𝐎𝐓𝐄𝐒 」
> ➟ ${prefix}quotesdilan
> ➟ ${prefix}quotesbucin
> ➟ ${prefix}quotesjawa
> ➟ ${prefix}quotesanime
> ➟ ${prefix}galau
> ➟ ${prefix}podcast
> ➟ ${prefix}sadpodcast
> ➟ ${prefix}speak
> ➟ ${prefix}aivoice
> ➟ ${prefix}simivoice
╰─────────────────✧
╭─「 𝐂𝐄𝐖𝐄𝐊 𝐀𝐒𝐈𝐀 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}lisa
> ➟ ${prefix}rose
> ➟ ${prefix}jiso
> ➟ ${prefix}jenny
> ➟ ${prefix}indonesia
> ➟ ${prefix}japan
> ➟ ${prefix}china
> ➟ ${prefix}malaysia
> ➟ ${prefix}vietnam
> ➟ ${prefix}korea
> ➟ ${prefix}thailand
╰─────────────────✧
╭─「 𝐂𝐎𝐖𝐎𝐊 𝐀𝐒𝐈𝐀 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}suga
> ➟ ${prefix}wuyifan
> ➟ ${prefix}parkchanyeol
> ➟ ${prefix}ohsehun
> ➟ ${prefix}luhan
> ➟ ${prefix}kimtaehyung
> ➟ ${prefix}kimsoek
> ➟ ${prefix}kimnanjoon
> ➟ ${prefix}kimjunmyeon
> ➟ ${prefix}kimjong
> ➟ ${prefix}kimjondae
> ➟ ${prefix}jungkook
> ➟ ${prefix}jimin
> ➟ ${prefix}jhope
> ➟ ${prefix}huangzitao
> ➟ ${prefix}dohkyungsoo
> ➟ ${prefix}baekhyung
╰─────────────────✧
╭─「 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}balance
> ➟ ${prefix}limit
> ➟ ${prefix}buylimit
> ➟ ${prefix}buyglimit
> ➟ ${prefix}transfer
> ➟ ${prefix}toplocal
> ➟ ${prefix}topglobal
╰─────────────────✧
╭─「 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}pushkontak
> ➟ ${prefix}jpm
> ➟ ${prefix}banuser
> ➟ ${prefix}unbanuser
> ➟ ${prefix}listban
> ➟ ${prefix}self
> ➟ ${prefix}public
> ➟ ${prefix}setppbot
> ➟ ${prefix}setppbot2
> ➟ ${prefix}listgc
> ➟ ${prefix}joingc
> ➟ ${prefix}creategc
> ➟ ${prefix}leavegc
> ➟ ${prefix}broadcast
> ➟ ${prefix}bcimg
> ➟ ${prefix}bcstik
> ➟ ${prefix}bcvn
> ➟ ${prefix}bcvideo
> ➟ ${prefix}bcsewa
> ➟ ${prefix}addpremium
> ➟ ${prefix}delpremium
> ➟ ${prefix}addsewa
> ➟ ${prefix}delsewa
> ➟ ${prefix}blok
> ➟ ${prefix}unblok
> ➟ ${prefix}listblok
> ➟ ${prefix}autoaipc
> ➟ ${prefix}autoread
> ➟ ${prefix}autobio
> ➟ ${prefix}antidelete
> ➟ ${prefix}antiviewonce
> ➟ ${prefix}autorespond
> ➟ ${prefix}anticall
> ➟ ${prefix}autoblok212
> ➟ ${prefix}resetlimit
╰─────────────────✧
╭─「 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}addstik
> ➟ ${prefix}addvn
> ➟ ${prefix}addimg
> ➟ ${prefix}addvid
> ➟ ${prefix}liststik
> ➟ ${prefix}listvn
> ➟ ${prefix}listimg
> ➟ ${prefix}listvid
> ➟ ${prefix}sampah
> ➟ ${prefix}delsampah
> ➟ ${prefix}sampah2
> ➟ ${prefix}delsampah2
╰─────────────────✧
╭─「 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}asupan
> ➟ ${prefix}bocil
> ➟ ${prefix}santuy
> ➟ ${prefix}ukhty
> ➟ ${prefix}chika
> ➟ ${prefix}delvira
> ➟ ${prefix}ayu
> ➟ ${prefix}bunga
> ➟ ${prefix}aura
> ➟ ${prefix}nisa
> ➟ ${prefix}ziva
> ➟ ${prefix}yana
> ➟ ${prefix}viona
> ➟ ${prefix}syania
> ➟ ${prefix}riri
> ➟ ${prefix}syifa
> ➟ ${prefix}mama_gina
> ➟ ${prefix}alcakenya
> ➟ ${prefix}mangayutri
> ➟ ${prefix}rikagusriani
> ➟ ${prefix}geayubi
> ➟ ${prefix}syifa
╰─────────────────✧
╭─「 𝐑𝐀𝐍𝐃𝐎𝐌 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 」
> ➟ ${prefix}patrick
> ➟ ${prefix}sponsbob
> ➟ ${prefix}kawan-sponsbob
> ➟ ${prefix}dino-kuning
> ➟ ${prefix}manusia-lidi
> ➟ ${prefix}popoci
> ➟ ${prefix}awoawo
> ➟ ${prefix}chat
> ➟ ${prefix}dbfly
> ➟ ${prefix}doge
> ➟ ${prefix}gojosatoru
> ➟ ${prefix}hope-boy
> ➟ ${prefix}jisoo
> ➟ ${prefix}kr-robot
> ➟ ${prefix}kucing
> ➟ ${prefix}lonte
> ➟ ${prefix}menjamet
> ➟ ${prefix}meow
> ➟ ${prefix}nicholas
> ➟ ${prefix}tyni
╰─────────────────✧
╭─「 𝐒𝐓𝐀𝐋𝐊𝐈𝐍𝐆 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}ttstalk
> ➟ ${prefix}igstalk
> ➟ ${prefix}mlstalk
> ➟ ${prefix}ffstalk
╰─────────────────✧
╭─「 𝐈𝐌𝐀𝐆𝐄 𝐄𝐅𝐅𝐄𝐂𝐓 」
> ➟${prefix}differentme
> ➟ ${prefix}differentme2
> ➟ ${prefix}toanime
> ➟ ${prefix}aiscene
> ➟ ${prefix}remini
> ➟ ${prefix}hdr
> ➟ ${prefix}wasted
> ➟ ${prefix}beautiful
> ➟ ${prefix}fire
> ➟ ${prefix}wanted
> ➟ ${prefix}rip
> ➟ ${prefix}jail
> ➟ ${prefix}triggered
> ➟ ${prefix}brazzers
> ➟ ${prefix}gay
> ➟ ${prefix}postig
╰─────────────────✧
╭─「 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}apakah
> ➟ ${prefix}kapankah
> ➟ ${prefix}bisakah
> ➟ ${prefix}bagaimanakah
> ➟ ${prefix}rate
> ➟ ${prefix}gantengcek
> ➟ ${prefix}cekganteng
> ➟ ${prefix}cantikcek
> ➟ ${prefix}cekcantik
> ➟ ${prefix}sangecek
> ➟ ${prefix}ceksange
> ➟ ${prefix}gaycek
> ➟ ${prefix}cekgay
> ➟ ${prefix}lesbicek
> ➟ ${prefix}ceklesbi
> ➟ ${prefix}wangy
╰─────────────────✧
╭─「 𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}kisahnabi
> ➟ ${prefix}asmaulhusna
> ➟ ${prefix}listsurah
> ➟ ${prefix}listsurah
> ➟ ${prefix}randomquran
> ➟ ${prefix}randomquran2
> ➟ ${prefix}quranaudio
> ➟ ${prefix}alquranaudio
╰─────────────────✧
╭─「 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}juna
> ➟ ${prefix}santet
> ➟ ${prefix}bugs
> ➟ ${prefix}buglinkpc
> ➟ ${prefix}buglinkgc <id>
> ➟ ${prefix}docugc <id>
> ➟ ${prefix}troligc <id>
> ➟ ${prefix}spams
╰─────────────────✧
╭─「 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}baka
> ➟ ${prefix}smug
> ➟ ${prefix}neko_sfw
> ➟ ${prefix}hentai_gif
> ➟ ${prefix}spank
> ➟ ${prefix}blowjob
> ➟ ${prefix}cumarts
> ➟ ${prefix}eroyuri
> ➟ ${prefix}eroneko
> ➟ ${prefix}erokemonomimi
> ➟ ${prefix}erokitsune
> ➟ ${prefix}ero
> ➟ ${prefix}feet
> ➟ ${prefix}erofeet
> ➟ ${prefix}feetgif
> ➟ ${prefix}femdom
> ➟ ${prefix}futanari
> ➟ ${prefix}hentai
> ➟ ${prefix}holoero
> ➟ ${prefix}holo
> ➟ ${prefix}keta
> ➟ ${prefix}kitsune
> ➟ ${prefix}kemonomimi
> ➟ ${prefix}pussyart
> ➟ ${prefix}pussywankgif
> ➟ ${prefix}girl_solo
> ➟ ${prefix}girl_solo_gif
> ➟ ${prefix}tits
> ➟ ${prefix}trap
> ➟ ${prefix}yuri
> ➟ ${prefix}avatar2
> ➟ ${prefix}anal
> ➟ ${prefix}bj
> ➟ ${prefix}classic
> ➟ ${prefix}cumsluts
> ➟ ${prefix}kuni
> ➟ ${prefix}lesbian
> ➟ ${prefix}neko
> ➟ ${prefix}neko_gif
> ➟ ${prefix}ahegao
> ➟ ${prefix}bdsm
> ➟ ${prefix}cuckold
> ➟ ${prefix}cum
> ➟ ${prefix}foot
> ➟ ${prefix}gangbang
> ➟ ${prefix}glasses
> ➟ ${prefix}jahy
> ➟ ${prefix}masturbation
> ➟ ${prefix}nsfw_neko
> ➟ ${prefix}orgy
> ➟ ${prefix}panties
> ➟ ${prefix}tentacles
> ➟ ${prefix}thighs
> ➟ ${prefix}zettai
╰─────────────────✧
╭─「 𝐓𝐄𝐗𝐓𝐏𝐑𝐎 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}halloween2
> ➟ ${prefix}horror
> ➟ ${prefix}game8bit
> ➟ ${prefix}layered
> ➟ ${prefix}glitch2
> ➟ ${prefix}coolg
> ➟ ${prefix}coolwg
> ➟ ${prefix}realistic
> ➟ ${prefix}space3d
> ➟ ${prefix}gtiktok
> ➟ ${prefix}stone
> ➟ ${prefix}marvel
> ➟ ${prefix}pornhub
> ➟ ${prefix}avengers
> ➟ ${prefix}metalr
> ➟ ${prefix}metalg
> ➟ ${prefix}metalg2
> ➟ ${prefix}lion
> ➟ ${prefix}wolf_bw
> ➟ ${prefix}wolf_g
> ➟ ${prefix}ninja
> ➟ ${prefix}3dsteel
> ➟ ${prefix}horror2
> ➟ ${prefix}lava
> ➟ ${prefix}bagel
> ➟ ${prefix}blackpink
> ➟ ${prefix}rainbow2
> ➟ ${prefix}water_pipe
> ➟ ${prefix}halloween
> ➟ ${prefix}sketch
> ➟ ${prefix}sircuit
> ➟ ${prefix}discovery
> ➟ ${prefix}metallic2
> ➟ ${prefix}fiction
> ➟ ${prefix}demon
> ➟ ${prefix}transformer
> ➟ ${prefix}berry
> ➟ ${prefix}thunder
> ➟ ${prefix}3dstone
> ➟ ${prefix}magma
> ➟ ${prefix}neon
> ➟ ${prefix}glitch
> ➟ ${prefix}harry_potter
> ➟ ${prefix}embossed
> ➟ ${prefix}broken
> ➟ ${prefix}papercut
> ➟ ${prefix}gradient
> ➟ ${prefix}glossy
> ➟ ${prefix}watercolor
> ➟ ${prefix}multicolor
> ➟ ${prefix}neon_devil
> ➟ ${prefix}underwater
> ➟${prefix}bear
> ➟ ${prefix}wonderfulg
> ➟ ${prefix}christmas
> ➟ ${prefix}neon_light
> ➟ ${prefix}snow
> ➟ ${prefix}cloudsky
> ➟ ${prefix}luxury2
> ➟ ${prefix}gradient2
> ➟ ${prefix}summer
> ➟ ${prefix}writing
> ➟ ${prefix}engraved
> ➟ ${prefix}summery
> ➟ ${prefix}3dglue
> ➟ ${prefix}metaldark
> ➟ ${prefix}neonlight
> ➟ ${prefix}oscar
> ➟ ${prefix}minion
> ➟ ${prefix}holographic
> ➟ ${prefix}purple
> ➟ ${prefix}glossyb
> ➟ ${prefix}deluxe2
> ➟ ${prefix}glossyc
> ➟ ${prefix}fabric
> ➟ ${prefix}neonc
> ➟ ${prefix}newyear
> ➟ ${prefix}newyear2
> ➟ ${prefix}xmas
> ➟ ${prefix}metals
> ➟ ${prefix}blood
> ➟ ${prefix}darkg
> ➟ ${prefix}joker
> ➟ ${prefix}wicker
> ➟ ${prefix}natural
> ➟ ${prefix}firework
> ➟ ${prefix}skeleton
> ➟ ${prefix}balloon
> ➟ ${prefix}balloon2
> ➟ ${prefix}balloon3
> ➟ ${prefix}balloon4
> ➟ ${prefix}balloon5
> ➟ ${prefix}balloon6
> ➟ ${prefix}balloon7
> ➟ ${prefix}steel
> ➟ ${prefix}gloss
> ➟ ${prefix}denim
> ➟ ${prefix}decorate
> ➟ ${prefix}decorate2
> ➟ ${prefix}peridot
> ➟ ${prefix}rock
> ➟ ${prefix}glass
> ➟ ${prefix}glass2
> ➟ ${prefix}glass3
> ➟ ${prefix}glass4
> ➟ ${prefix}glass5
> ➟ ${prefix}glass6
> ➟ ${prefix}glass7
> ➟ ${prefix}glass8
> ➟ ${prefix}captain_as2
> ➟ ${prefix}robot
> ➟ ${prefix}equalizer
> ➟ ${prefix}toxic
> ➟ ${prefix}sparkling
> ➟ ${prefix}sparkling2
> ➟ ${prefix}sparkling3
> ➟ ${prefix}sparkling4
> ➟ ${prefix}sparkling5
> ➟ ${prefix}sparkling6
> ➟ ${prefix}sparkling7
> ➟ ${prefix}decorative
> ➟ ${prefix}chocolate
> ➟ ${prefix}strawberry
> ➟ ${prefix}koifish
> ➟ ${prefix}bread
> ➟ ${prefix}matrix
> ➟ ${prefix}blood2
> ➟ ${prefix}neonligth2
> ➟ ${prefix}thunder2
> ➟ ${prefix}3dbox
> ➟ ${prefix}neon2
> ➟ ${prefix}roadw
> ➟ ${prefix}bokeh
> ➟ ${prefix}gneon
> ➟ ${prefix}advanced
> ➟ ${prefix}dropwater
> ➟ ${prefix}wall
> ➟ ${prefix}chrismast
> ➟ ${prefix}honey
> ➟ ${prefix}drug
> ➟ ${prefix}marble
> ➟ ${prefix}marble2
> ➟ ${prefix}ice
> ➟ ${prefix}juice
> ➟ ${prefix}rusty
> ➟ ${prefix}abstra
> ➟ ${prefix}biscuit
> ➟ ${prefix}wood
> ➟ ${prefix}scifi
> ➟ ${prefix}metalr
> ➟ ${prefix}purpleg
> ➟ ${prefix}shiny
> ➟ ${prefix}jewelry
> ➟ ${prefix}jewelry2
> ➟ ${prefix}jewelry3
> ➟ ${prefix}jewelry4
> ➟ ${prefix}jewelry5
> ➟ ${prefix}jewelry6
> ➟ ${prefix}jewelry7
> ➟ ${prefix}jewelry8
> ➟ ${prefix}metalh
> ➟ ${prefix}golden
> ➟ ${prefix}glitter
> ➟ ${prefix}glitter2
> ➟ ${prefix}glitter3
> ➟ ${prefix}glitter4
> ➟ ${prefix}glitter5
> ➟ ${prefix}glitter6
> ➟ ${prefix}glitter7
> ➟ ${prefix}metale
> ➟ ${prefix}carbon
> ➟ ${prefix}candy
> ➟ ${prefix}metalb
> ➟ ${prefix}gemb
> ➟ ${prefix}3dchrome
> ➟ ${prefix}metalb2
> ➟ ${prefix}metalg
╰─────────────────✧
╭─「 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐘 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}typography-flower
> ➟ ${prefix}under-flower
> ➟ ${prefix}bevel-text
> ➟ ${prefix}silk-text
> ➟ ${prefix}smoke-typography
> ➟ ${prefix}carvedwood
> ➟ ${prefix}scary-cemetery
> ➟ ${prefix}royallook
> ➟ ${prefix}coffeecup2
> ➟ ${prefix}illuminated
> ➟ ${prefix}harry-potter2
> ➟ ${prefix}woodblack
> ➟ ${prefix}butterfly-reflection
> ➟ ${prefix}watermelon
> ➟ ${prefix}striking
> ➟ ${prefix}metallicglow
> ➟ ${prefix}rainbow-text
> ➟ ${prefix}birthday-cake
> ➟ ${prefix}embroidery
> ➟ ${prefix}crisp
> ➟ ${prefix}flaming
> ➟ ${prefix}furtext
> ➟ ${prefix}nightsky
> ➟ ${prefix}glow-rainbow
> ➟ ${prefix}gradient-avatar
> ➟ ${prefix}white-cube
> ➟ ${prefix}honey-text
> ➟ ${prefix}vintage-style
> ➟ ${prefix}glowing-3d
> ➟ ${prefix}army-camouflage
> ➟ ${prefix}graffiti-cover
> ➟ ${prefix}rainbow-shine
> ➟ ${prefix}smoky-neon
> ➟ ${prefix}quotes-underfall
> ➟ ${prefix}vector-nature
> ➟ ${prefix}yellow-rose
> ➟ ${prefix}love-text
> ➟ ${prefix}underwater-ocean
> ➟ ${prefix}nature-text
> ➟ ${prefix}wolf-metal
> ➟ ${prefix}summer-text
> ➟ ${prefix}wooden-board
> ➟ ${prefix}quote-wood
> ➟ ${prefix}quotes-undergrass
> ➟ ${prefix}naruto-banner
> ➟ ${prefix}love-message
> ➟ ${prefix}textoncup2
> ➟ ${prefix}burn-paper
> ➟ ${prefix}smoke
> ➟ ${prefix}romantic-messages
> ➟ ${prefix}shadow-sky
> ➟ ${prefix}text-cup
> ➟ ${prefix}coffecup
> ➟ ${prefix}battlegrounds-logo
> ➟ ${prefix}battlefield4
> ➟ ${prefix}text-8bit
╰─────────────────✧
╭─「 𝐄𝐏𝐇𝐎𝐓𝐎 360 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}1917text
> ➟ ${prefix}angelwing
> ➟ ${prefix}announofwin
> ➟ ${prefix}birthdaycake
> ➟ ${prefix}capercut
> ➟ ${prefix}cardhalloween
> ➟ ${prefix}christmascard
> ➟ ${prefix}christmasseason
> ➟ ${prefix}covergamepubg
> ➟ ${prefix}covergraffiti
> ➟ ${prefix}dragonfire
> ➟ ${prefix}embroider
> ➟ ${prefix}fabrictext
> ➟ ${prefix}facebookgold
> ➟ ${prefix}facebooksilver
> ➟ ${prefix}funnyanimations
> ➟ ${prefix}funnyhalloween
> ➟ ${prefix}galaxybat
> ➟ ${prefix}galaxywallpaper
> ➟ ${prefix}generalexam
> ➟ ${prefix}glowingtext
> ➟ ${prefix}graffiti3d
> ➟ ${prefix}graffititext
> ➟ ${prefix}graffititext2
> ➟ ${prefix}graffititext3
> ➟ ${prefix}greetingcardvideo
> ➟ ${prefix}halloweenbats
> ➟ ${prefix}heartcup
> ➟ ${prefix}heartflashlight
> ➟ ${prefix}horrorletter
> ➟ ${prefix}icetext
> ➟ ${prefix}instagramgold
> ➟ ${prefix}instagramsilver
> ➟ ${prefix}lightningpubg
> ➟ ${prefix}lovecard
> ➟ ${prefix}lovelycute
> ➟ ${prefix}masteryavatar
> ➟ ${prefix}merrycard
> ➟ ${prefix}messagecoffee
> ➟ ${prefix}metalstar
> ➟ ${prefix}milkcake
> ➟ ${prefix}moderngold
> ➟ ${prefix}moderngold2
> ➟ ${prefix}modengold3
> ➟ ${prefix}moderngoldsilver
> ➟ ${prefix}nameonheart
> ➟ ${prefix}noeltext
> ➟ ${prefix}projectyasuo
> ➟ ${prefix}pubgbirthday
> ➟ ${prefix}pubgglicthvideo
> ➟ ${prefix}pubgmascotlogo
> ➟ ${prefix}puppycute
> ➟ ${prefix}realembroidery
> ➟ ${prefix}retrotext
> ➟ ${prefix}rosebirthday
> ➟ ${prefix}snowontext
> ➟ ${prefix}starsnight
> ➟ ${prefix}summerbeach
> ➟ ${prefix}sunglightshadow
> ➟ ${prefix}textcakes
> ➟ ${prefix}texthalloween
> ➟ ${prefix}textonglass
> ➟ ${prefix}textsky
> ➟ ${prefix}thundertext
> ➟ ${prefix}twittergold
> ➟ ${prefix}twittersilver
> ➟ ${prefix}viettel
> ➟ ${prefix}vintagetelevision
> ➟ ${prefix}watercolor2
> ➟ ${prefix}womansday
> ➟ ${prefix}writeblood
> ➟ ${prefix}writegalaxy
> ➟ ${prefix}writehorror
> ➟ ${prefix}youtubegold
> ➟ ${prefix}youtubesilver
> ➟ ${prefix}zombie3d
╰─────────────────✧
╭─「 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 」
> ➟ ${prefix}avataroverwatch
> ➟ ${prefix}logoaccording
> ➟ ${prefix}mascotstyle
> ➟ ${prefix}letterlogos
> ➟ ${prefix}bannerofpubg
> ➟ ${prefix}bannerofapex
> ➟ ${prefix}bannerofoverwatch
> ➟ ${prefix}banneroffreefire
> ➟ ${prefix}gunlogogaming
> ➟ ${prefix}pencilsketch
> ➟ ${prefix}companylogo
> ➟ ${prefix}companylogo2
> ➟ ${prefix}teamlogo
> ➟ ${prefix}bannerofaov
> ➟ ${prefix}fbgamepubgcover
> ➟ ${prefix}banneroflol
> ➟ ${prefix}anonymous
> ➟ ${prefix}metalmascot
> ➟ ${prefix}blueneon
> ➟ ${prefix}coverbannerlol
> ➟ ${prefix}pubglogomaker
> ➟ ${prefix}colorfulpubg
> ➟ ${prefix}astronotspace
> ➟ ${prefix}wallpaperaov
> ➟ ${prefix}maketeamlogo
> ➟ ${prefix}circlemascotteam
> ➟ ${prefix}wallpaperml
> ➟ ${prefix}dragonballfb
> ➟ ${prefix}effect3donbeach
> ➟ ${prefix}cutegirlgamer
╰─────────────────✧

`
}

exports.simpleMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭─「 🚥 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}allmenu
> ☁ ${prefix}mainmenu
> ☁ ${prefix}convertmenu
> ☁ ${prefix}voicechanger
> ☁ ${prefix}anonymousmenu
> ☁ ${prefix}storemenu
> ☁ ${prefix}rpgmenu
> ☁ ${prefix}gamemenu
> ☁ ${prefix}groupmenu
> ☁ ${prefix}downloadmenu
> ☁ ${prefix}searchmenu
> ☁ ${prefix}randomanime
> ☁ ${prefix}randommenu
> ☁ ${prefix}randomquotes
> ☁ ${prefix}cewekasiamenu
> ☁ ${prefix}cowokasiamenu
> ☁ ${prefix}balancemenu
> ☁ ${prefix}baileysmenu
> ☁ ${prefix}ownermenu
> ☁ ${prefix}storagemenu
> ☁ ${prefix}asupanmenu
> ☁ ${prefix}randomsticker
> ☁ ${prefix}stalkingmenu
> ☁ ${prefix}imageeffect
> ☁ ${prefix}funmenu
> ☁ ${prefix}islammenu
> ☁ ${prefix}bugmenu
> ☁ ${prefix}nsfwmenu
> ☁ ${prefix}textpromenu
> ☁ ${prefix}photooxymenu
> ☁ ${prefix}ephoto360menu
> ☁ ${prefix}logomenu
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.mainMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「╭─「 🚥 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}simplemenu
> ☁ ${prefix}infobot
> ☁ ${prefix}donate
> ☁ ${prefix}dashboard
> ☁ ${prefix}owner
> ☁ ${prefix}cekdrive
> ☁ ${prefix}cekbandwidth
> ☁ ${prefix}cekpremium
> ☁ ${prefix}listpremium
> ☁ ${prefix}listsewa
> ☁ ${prefix}speed
> ☁ ${prefix}runtime
> ☁ ${prefix}listbahasa
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.convertMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭─「 🚥 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐃 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}toanime
> ☁ ${prefix}differentme
> ☁ ${prefix}differentme2
> ☁ ${prefix}diffusion
> ☁ ${prefix}txt2img
> ☁ ${prefix}aiscene
> ☁ ${prefix}remini
> ☁ ${prefix}hdr
> ☁ ${prefix}nobg
> ☁ ${prefix}removebg
> ☁ ${prefix}resize
> ☁ ${prefix}ssweb
> ☁ ${prefix}ssweb2
> ☁ ${prefix}sticker
> ☁ ${prefix}stickerwm
> ☁ ${prefix}smeme
> ☁ ${prefix}toimg
> ☁ ${prefix}tourl
> ☁ ${prefix}tovideo
> ☁ ${prefix}tomp3
> ☁ ${prefix}toaudio
> ☁ ${prefix}tovn
> ☁ ${prefix}toptv
> ☁ ${prefix}readvo
> ☁ ${prefix}ttp
> ☁ ${prefix}attp
> ☁ ${prefix}qc
> ☁ ${prefix}emojimix
> ☁ ${prefix}ai
> ☁ ${prefix}aiimg
> ☁ ${prefix}aidraw
> ☁ ${prefix}chatgpt
> ☁ ${prefix}nuliskiri
> ☁ ${prefix}nuliskanan
> ☁ ${prefix}foliokiri
> ☁ ${prefix}foliokanan
> ☁ ${prefix}say
> ☁ ${prefix}translate
╰─────────────────✧
*POWERED BY ${ownerName}*

`
}
exports.anonymousMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}anonymouschat
> ☁ ${prefix}start
> ☁ ${prefix}next
> ☁ ${prefix}stop
> ☁ ${prefix}sendprofile
> ☁ ${prefix}menfess
> ☁ ${prefix}confess
> ☁ ${prefix}balasmenfess
> ☁ ${prefix}tolakmenfess
> ☁ ${prefix}stopmenfess
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.voiceChanger = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭─「 🚥 𝐕𝐎𝐈𝐂𝐄 𝐂𝐇𝐀𝐍𝐆𝐄𝐑 」
> ☁ ${prefix}bass
> ☁ ${prefix}deep
> ☁ ${prefix}fast
> ☁ ${prefix}slow
> ☁ ${prefix}smooth
> ☁ ${prefix}fat
> ☁ ${prefix}earrape
> ☁ ${prefix}blown
> ☁ ${prefix}nightcore
> ☁ ${prefix}tupai
> ☁ ${prefix}robot
> ☁ ${prefix}reverse
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.storeMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}list
> ☁ ${prefix}addlist
> ☁ ${prefix}dellist
> ☁ ${prefix}update
> ☁ ${prefix}jeda
> ☁ ${prefix}tambah
> ☁ ${prefix}kurang
> ☁ ${prefix}kali
> ☁ ${prefix}bagi
> ☁ ${prefix}delsetdone
> ☁ ${prefix}changedone
> ☁ ${prefix}setdone
> ☁ ${prefix}delsetproses
> ☁ ${prefix}changeproses
> ☁ ${prefix}setproses
> ☁ ${prefix}proses < reply chat >
> ☁ ${prefix}done < reply chat >
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.rpgMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐑𝐏𝐆 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}inventory
> ☁ ${prefix}mining
> ☁ ${prefix}buy
> ☁ ${prefix}sell
> ☁ ${prefix}heal
> ☁ ${prefix}hunt
> ☁ ${prefix}adventure
> ☁ ${prefix}luckyday
> ☁ ${prefix}killslime
> ☁ ${prefix}killgoblin
> ☁ ${prefix}killdevil
> ☁ ${prefix}killbehemoth
> ☁ ${prefix}killdemon
> ☁ ${prefix}killdemonking
> ☁ ${prefix}joinrpg
> ☁ ${prefix}sellikan
> ☁ ${prefix}sellbesi
> ☁ ${prefix}sellemas
> ☁ ${prefix}jelajah
> ☁ ${prefix}mancing
> ☁ ${prefix}jualikan
> ☁ ${prefix}jualcoal
> ☁ ${prefix}jualstone
> ☁ ${prefix}jualingot
> ☁ ${prefix}jualkayu
> ☁ ${prefix}jualbahankimia
> ☁ ${prefix}lebur
> ☁ ${prefix}nebang
> ☁ ${prefix}goplanet
> ☁ ${prefix}ojek
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.gameMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}caklontong
> ☁ ${prefix}tebakgambar
> ☁ ${prefix}tebakkata
> ☁ ${prefix}tebakgame
> ☁ ${prefix}tebakbendera
> ☁ ${prefix}tebakkalimat
> ☁ ${prefix}tebaksiapa
> ☁ ${prefix}tebakkimia
> ☁ ${prefix}tebaklirik
> ☁ ${prefix}tebaktebakan
> ☁ ${prefix}tekateki
> ☁ ${prefix}susunkata
> ☁ ${prefix}tictactoe
> ☁ ${prefix}delttt
> ☁ ${prefix}casino
> ☁ ${prefix}delcasino
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.groupMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}autoaigc
> ☁ ${prefix}afk
> ☁ ${prefix}welcome
> ☁ ${prefix}left
> ☁ ${prefix}pppanjanggc
> ☁ ${prefix}opentime
> ☁ ${prefix}closetime
> ☁ ${prefix}setopen
> ☁ ${prefix}changesetopen
> ☁ ${prefix}delsetopen
> ☁ ${prefix}setclose
> ☁ ${prefix}changesetclose
> ☁ ${prefix}delsetclose
> ☁ ${prefix}setwelcome
> ☁ ${prefix}changewelcome
> ☁ ${prefix}delsetwelcome
> ☁ ${prefix}setleft
> ☁ ${prefix}changeleft
> ☁ ${prefix}delsetleft
> ☁ ${prefix}linkgc
> ☁ ${prefix}setppgc
> ☁ ${prefix}setppgc2
> ☁ ${prefix}setnamegc
> ☁ ${prefix}setdesc
> ☁ ${prefix}autodlgc
> ☁ ${prefix}antilink
> ☁ ${prefix}antilinktt
> ☁ ${prefix}kickme
> ☁ ${prefix}mute
> ☁ ${prefix}open
> ☁ ${prefix}close
> ☁ ${prefix}add
> ☁ ${prefix}kick
> ☁ ${prefix}promote
> ☁ ${prefix}demote
> ☁ ${prefix}revoke
> ☁ ${prefix}hidetag
> ☁ ${prefix}checksewa
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.downloadMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}play
> ☁ ${prefix}ytmp3
> ☁ ${prefix}ytmp4
> ☁ ${prefix}ytv
> ☁ ${prefix}ytv2
> ☁ ${prefix}spotify
> ☁ ${prefix}spotifydl
> ☁ ${prefix}instagram
> ☁ ${prefix}ig
> ☁ ${prefix}ig2
> ☁ ${prefix}ig3
> ☁ ${prefix}igphoto
> ☁ ${prefix}igvideo
> ☁ ${prefix}igreels
> ☁ ${prefix}twitter
> ☁ ${prefix}tiktok
> ☁ ${prefix}tiktokslide
> ☁ ${prefix}tiktoksearch
> ☁ ${prefix}tiktokaudio
> ☁ ${prefix}mediafire
> ☁ ${prefix}gitclone
> ☁ ${prefix}fbdl
> ☁ ${prefix}fb2
> ☁ ${prefix}fb3
> ☁ ${prefix}fb4
> ☁ ${prefix}gdrive
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.searchMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}spotifysearch
> ☁ ${prefix}lk21
> ☁ ${prefix}jarak
> ☁ ${prefix}bukalapak
> ☁ ${prefix}apk
> ☁ ${prefix}google
> ☁ ${prefix}ytsearch
> ☁ ${prefix}grupwa
> ☁ ${prefix}pinterest
> ☁ ${prefix}lirik
> ☁ ${prefix}infogempa
> ☁ ${prefix}komikusearch
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.randomAnime = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭─「 🚥 𝐑𝐀𝐍𝐃𝐎𝐌 𝐀𝐍𝐈𝐌𝐄 」
> ☁ ${prefix}akira
> ☁ ${prefix}akiyama
> ☁ ${prefix}ana
> ☁ ${prefix}asuna
> ☁ ${prefix}ayuzawa
> ☁ ${prefix}boruto
> ☁ ${prefix}chitanda
> ☁ ${prefix}deidara
> ☁ ${prefix}elaina
> ☁ ${prefix}emilia
> ☁ ${prefix}erza
> ☁ ${prefix}fanart
> ☁ ${prefix}genshin
> ☁ ${prefix}gremory
> ☁ ${prefix}hestia
> ☁ ${prefix}hinata
> ☁ ${prefix}husbu
> ☁ ${prefix}icon
> ☁ ${prefix}inori
> ☁ ${prefix}isuzu
> ☁ ${prefix}itachi
> ☁ ${prefix}itori
> ☁ ${prefix}kaga
> ☁ ${prefix}kagura
> ☁ ${prefix}kaguya
> ☁ ${prefix}kakasih
> ☁ ${prefix}kaneki
> ☁ ${prefix}kaori
> ☁ ${prefix}keneki
> ☁ ${prefix}kosaki
> ☁ ${prefix}kotori
> ☁ ${prefix}kuriyama
> ☁ ${prefix}kuroha
> ☁ ${prefix}kurumi
> ☁ ${prefix}loli
> ☁ ${prefix}madara
> ☁ ${prefix}megumin
> ☁ ${prefix}menus
> ☁ ${prefix}mikasa
> ☁ ${prefix}miku
> ☁ ${prefix}minato
> ☁ ${prefix}naruto
> ☁ ${prefix}natsukawa
> ☁ ${prefix}nezuko
> ☁ ${prefix}nishimiya
> ☁ ${prefix}onepiece
> ☁ ${prefix}pokemon
> ☁ ${prefix}rem
> ☁ ${prefix}rize
> ☁ ${prefix}sagiri
> ☁ ${prefix}sakura
> ☁ ${prefix}sasuke
> ☁ ${prefix}shina
> ☁ ${prefix}shinka
> ☁ ${prefix}shizuka
> ☁ ${prefix}shota
> ☁ ${prefix}simp
> ☁ ${prefix}tomori
> ☁ ${prefix}toukachan
> ☁ ${prefix}tsunade
> ☁ ${prefix}yatogami
> ☁ ${prefix}yuki
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.randomMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}waifu
> ☁ ${prefix}ppcp
> ☁ ${prefix}cosplay
> ☁ ${prefix}cecan
> ☁ ${prefix}cogan
> ☁ ${prefix}meme
> ☁ ${prefix}memeindo
> ☁ ${prefix}darkjokes
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.randomQuotes = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐑𝐀𝐌𝐃𝐎𝐌 𝐐𝐔𝐎𝐓𝐄𝐒 」
> ☁ ${prefix}quotesdilan
> ☁ ${prefix}quotesbucin
> ☁ ${prefix}quotesjawa
> ☁ ${prefix}quotesanime
> ☁ ${prefix}galau
> ☁ ${prefix}podcast
> ☁ ${prefix}sadpodcast
> ☁ ${prefix}speak
> ☁ ${prefix}aivoice
> ☁ ${prefix}simivoice
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.cewekMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐂𝐄𝐖𝐄𝐊 𝐀𝐒𝐈𝐀 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}lisa
> ☁ ${prefix}rose
> ☁ ${prefix}jiso
> ☁ ${prefix}jenny
> ☁ ${prefix}indonesia
> ☁ ${prefix}japan
> ☁ ${prefix}china
> ☁ ${prefix}malaysia
> ☁ ${prefix}vietnam
> ☁ ${prefix}korea
> ☁ ${prefix}thailand
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.cowokMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐂𝐎𝐖𝐎𝐊 𝐀𝐒𝐈𝐀 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}suga
> ☁ ${prefix}wuyifan
> ☁ ${prefix}parkchanyeol
> ☁ ${prefix}ohsehun
> ☁ ${prefix}luhan
> ☁ ${prefix}kimtaehyung
> ☁ ${prefix}kimsoek
> ☁ ${prefix}kimnanjoon
> ☁ ${prefix}kimjunmyeon
> ☁ ${prefix}kimjong
> ☁ ${prefix}kimjondae
> ☁ ${prefix}jungkook
> ☁ ${prefix}jimin
> ☁ ${prefix}jhope
> ☁ ${prefix}huangzitao
> ☁ ${prefix}dohkyungsoo
> ☁ ${prefix}baekhyung
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.balanceMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}balance
> ☁ ${prefix}limit
> ☁ ${prefix}buylimit
> ☁ ${prefix}buyglimit
> ☁ ${prefix}transfer
> ☁ ${prefix}toplocal
> ☁ ${prefix}topglobal
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.ownerMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}pushkontak
> ☁ ${prefix}jpm
> ☁ ${prefix}banuser
> ☁ ${prefix}unbanuser
> ☁ ${prefix}listban
> ☁ ${prefix}self
> ☁ ${prefix}public
> ☁ ${prefix}setppbot
> ☁ ${prefix}setppbot2
> ☁ ${prefix}listgc
> ☁ ${prefix}joingc
> ☁ ${prefix}creategc
> ☁ ${prefix}leavegc
> ☁ ${prefix}broadcast
> ☁ ${prefix}bcimg
> ☁ ${prefix}bcstik
> ☁ ${prefix}bcvn
> ☁ ${prefix}bcvideo
> ☁ ${prefix}bcsewa
> ☁ ${prefix}addpremium
> ☁ ${prefix}delpremium
> ☁ ${prefix}addsewa
> ☁ ${prefix}delsewa
> ☁ ${prefix}blok
> ☁ ${prefix}unblok
> ☁ ${prefix}listblok
> ☁ ${prefix}autoaipc
> ☁ ${prefix}autoread
> ☁ ${prefix}autobio
> ☁ ${prefix}antidelete
> ☁ ${prefix}antiviewonce
> ☁ ${prefix}autorespond
> ☁ ${prefix}anticall
> ☁ ${prefix}autoblok212
> ☁ ${prefix}resetlimit
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.storageMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}addstik
> ☁ ${prefix}addvn
> ☁ ${prefix}addimg
> ☁ ${prefix}addvid
> ☁ ${prefix}liststik
> ☁ ${prefix}listvn
> ☁ ${prefix}listimg
> ☁ ${prefix}listvid
> ☁ ${prefix}sampah
> ☁ ${prefix}delsampah
> ☁ ${prefix}sampah2
> ☁ ${prefix}delsampah2
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.asupanMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}asupan
> ☁ ${prefix}bocil
> ☁ ${prefix}santuy
> ☁ ${prefix}ukhty
> ☁ ${prefix}chika
> ☁ ${prefix}delvira
> ☁ ${prefix}ayu
> ☁ ${prefix}bunga
> ☁ ${prefix}aura
> ☁ ${prefix}nisa
> ☁ ${prefix}ziva
> ☁ ${prefix}yana
> ☁ ${prefix}viona
> ☁ ${prefix}syania
> ☁ ${prefix}riri
> ☁ ${prefix}syifa
> ☁ ${prefix}mama_gina
> ☁ ${prefix}alcakenya
> ☁ ${prefix}mangayutri
> ☁ ${prefix}rikagusriani
> ☁ ${prefix}geayubi
> ☁ ${prefix}syifa
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.randomSticker = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐑𝐀𝐍𝐃𝐎𝐌 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 」
> ☁ ${prefix}patrick
> ☁ ${prefix}sponsbob
> ☁ ${prefix}kawan-sponsbob
> ☁ ${prefix}dino-kuning
> ☁ ${prefix}manusia-lidi
> ☁ ${prefix}popoci
> ☁ ${prefix}awoawo
> ☁ ${prefix}chat
> ☁ ${prefix}dbfly
> ☁ ${prefix}doge
> ☁ ${prefix}gojosatoru
> ☁ ${prefix}hope-boy
> ☁ ${prefix}jisoo
> ☁ ${prefix}kr-robot
> ☁ ${prefix}kucing
> ☁ ${prefix}lonte
> ☁ ${prefix}menjamet
> ☁ ${prefix}meow
> ☁ ${prefix}nicholas
> ☁ ${prefix}tyni
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.stalkingMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐒𝐓𝐀𝐋𝐊𝐈𝐍𝐆 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}ttstalk
> ☁ ${prefix}igstalk
> ☁ ${prefix}mlstalk
> ☁ ${prefix}ffstalk
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.imageEffect = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐃 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}toanime
> ☁ ${prefix}differentme
> ☁ ${prefix}differentme2
> ☁ ${prefix}diffusion
> ☁ ${prefix}txt2img
> ☁ ${prefix}aiscene
> ☁ ${prefix}remini
> ☁ ${prefix}hdr
> ☁ ${prefix}nobg
> ☁ ${prefix}removebg
> ☁ ${prefix}resize
> ☁ ${prefix}ssweb
> ☁ ${prefix}ssweb2
> ☁ ${prefix}sticker
> ☁ ${prefix}stickerwm
> ☁ ${prefix}smeme
> ☁ ${prefix}toimg
> ☁ ${prefix}tourl
> ☁ ${prefix}tovideo
> ☁ ${prefix}tomp3
> ☁ ${prefix}toaudio
> ☁ ${prefix}tovn
> ☁ ${prefix}toptv
> ☁ ${prefix}readvo
> ☁ ${prefix}ttp
> ☁ ${prefix}attp
> ☁ ${prefix}qc
> ☁ ${prefix}emojimix
> ☁ ${prefix}ai
> ☁ ${prefix}aiimg
> ☁ ${prefix}aidraw
> ☁ ${prefix}chatgpt
> ☁ ${prefix}nuliskiri
> ☁ ${prefix}nuliskanan
> ☁ ${prefix}foliokiri
> ☁ ${prefix}foliokanan
> ☁ ${prefix}say
> ☁ ${prefix}translate
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.funMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}apakah
> ☁ ${prefix}kapankah
> ☁ ${prefix}bisakah
> ☁ ${prefix}bagaimanakah
> ☁ ${prefix}rate
> ☁ ${prefix}gantengcek
> ☁ ${prefix}cekganteng
> ☁ ${prefix}cantikcek
> ☁ ${prefix}cekcantik
> ☁ ${prefix}sangecek
> ☁ ${prefix}ceksange
> ☁ ${prefix}gaycek
> ☁ ${prefix}cekgay
> ☁ ${prefix}lesbicek
> ☁ ${prefix}ceklesbi
> ☁ ${prefix}wangy
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.islamMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}kisahnabi
> ☁ ${prefix}asmaulhusna
> ☁ ${prefix}listsurah
> ☁ ${prefix}listsurah
> ☁ ${prefix}randomquran
> ☁ ${prefix}randomquran2
> ☁ ${prefix}quranaudio
> ☁ ${prefix}alquranaudio
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.bugMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}juna
> ☁ ${prefix}santet
> ☁ ${prefix}bugs
> ☁ ${prefix}buglinkpc
> ☁ ${prefix}buglinkgc <id>
> ☁ ${prefix}docugc <id>
> ☁ ${prefix}troligc <id>
> ☁ ${prefix}spams
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.nsfwMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╰─────────────────✧
╭─「 🚥 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}baka
> ☁ ${prefix}smug
> ☁ ${prefix}neko_sfw
> ☁ ${prefix}hentai_gif
> ☁ ${prefix}spank
> ☁ ${prefix}blowjob
> ☁ ${prefix}cumarts
> ☁ ${prefix}eroyuri
> ☁ ${prefix}eroneko
> ☁ ${prefix}erokemonomimi
> ☁ ${prefix}erokitsune
> ☁ ${prefix}ero
> ☁ ${prefix}feet
> ☁ ${prefix}erofeet
> ☁ ${prefix}feetgif
> ☁ ${prefix}femdom
> ☁ ${prefix}futanari
> ☁ ${prefix}hentai
> ☁ ${prefix}holoero
> ☁ ${prefix}holo
> ☁ ${prefix}keta
> ☁ ${prefix}kitsune
> ☁ ${prefix}kemonomimi
> ☁ ${prefix}pussyart
> ☁ ${prefix}pussywankgif
> ☁ ${prefix}girl_solo
> ☁ ${prefix}girl_solo_gif
> ☁ ${prefix}tits
> ☁ ${prefix}trap
> ☁ ${prefix}yuri
> ☁ ${prefix}avatar2
> ☁ ${prefix}anal
> ☁ ${prefix}bj
> ☁ ${prefix}classic
> ☁ ${prefix}cumsluts
> ☁ ${prefix}kuni
> ☁ ${prefix}lesbian
> ☁ ${prefix}neko
> ☁ ${prefix}neko_gif
> ☁ ${prefix}ahegao
> ☁ ${prefix}bdsm
> ☁ ${prefix}cuckold
> ☁ ${prefix}cum
> ☁ ${prefix}foot
> ☁ ${prefix}gangbang
> ☁ ${prefix}glasses
> ☁ ${prefix}jahy
> ☁ ${prefix}masturbation
> ☁ ${prefix}nsfw_neko
> ☁ ${prefix}orgy
> ☁ ${prefix}panties
> ☁ ${prefix}tentacles
> ☁ ${prefix}thighs
> ☁ ${prefix}zettai
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.textproMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐓𝐄𝐗𝐓𝐏𝐑𝐎 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}halloween2
> ☁ ${prefix}horror
> ☁ ${prefix}game8bit
> ☁ ${prefix}layered
> ☁ ${prefix}glitch2
> ☁ ${prefix}coolg
> ☁ ${prefix}coolwg
> ☁ ${prefix}realistic
> ☁ ${prefix}space3d
> ☁ ${prefix}gtiktok
> ☁ ${prefix}stone
> ☁ ${prefix}marvel
> ☁ ${prefix}pornhub
> ☁ ${prefix}avengers
> ☁ ${prefix}metalr
> ☁ ${prefix}metalg
> ☁ ${prefix}metalg2
> ☁ ${prefix}lion
> ☁ ${prefix}wolf_bw
> ☁ ${prefix}wolf_g
> ☁ ${prefix}ninja
> ☁ ${prefix}3dsteel
> ☁ ${prefix}horror2
> ☁ ${prefix}lava
> ☁ ${prefix}bagel
> ☁ ${prefix}blackpink
> ☁ ${prefix}rainbow2
> ☁ ${prefix}water_pipe
> ☁ ${prefix}halloween
> ☁ ${prefix}sketch
> ☁ ${prefix}sircuit
> ☁ ${prefix}discovery
> ☁ ${prefix}metallic2
> ☁ ${prefix}fiction
> ☁ ${prefix}demon
> ☁ ${prefix}transformer
> ☁ ${prefix}berry
> ☁ ${prefix}thunder
> ☁ ${prefix}3dstone
> ☁ ${prefix}magma
> ☁ ${prefix}neon
> ☁ ${prefix}glitch
> ☁ ${prefix}harry_potter
> ☁ ${prefix}embossed
> ☁ ${prefix}broken
> ☁ ${prefix}papercut
> ☁ ${prefix}gradient
> ☁ ${prefix}glossy
> ☁ ${prefix}watercolor
> ☁ ${prefix}multicolor
> ☁ ${prefix}neon_devil
> ☁ ${prefix}underwater
> ☁ ${prefix}bear
> ☁ ${prefix}wonderfulg
> ☁ ${prefix}christmas
> ☁ ${prefix}neon_light
> ☁ ${prefix}snow
> ☁ ${prefix}cloudsky
> ☁ ${prefix}luxury2
> ☁ ${prefix}gradient2
> ☁ ${prefix}summer
> ☁ ${prefix}writing
> ☁ ${prefix}engraved
> ☁ ${prefix}summery
> ☁ ${prefix}3dglue
> ☁ ${prefix}metaldark
> ☁ ${prefix}neonlight
> ☁ ${prefix}oscar
> ☁ ${prefix}minion
> ☁ ${prefix}holographic
> ☁ ${prefix}purple
> ☁ ${prefix}glossyb
> ☁ ${prefix}deluxe2
> ☁ ${prefix}glossyc
> ☁ ${prefix}fabric
> ☁ ${prefix}neonc
> ☁ ${prefix}newyear
> ☁ ${prefix}newyear2
> ☁ ${prefix}xmas
> ☁ ${prefix}metals
> ☁ ${prefix}blood
> ☁ ${prefix}darkg
> ☁ ${prefix}joker
> ☁ ${prefix}wicker
> ☁ ${prefix}natural
> ☁ ${prefix}firework
> ☁ ${prefix}skeleton
> ☁ ${prefix}balloon
> ☁ ${prefix}balloon2
> ☁ ${prefix}balloon3
> ☁ ${prefix}balloon4
> ☁ ${prefix}balloon5
> ☁ ${prefix}balloon6
> ☁ ${prefix}balloon7
> ☁ ${prefix}steel
> ☁ ${prefix}gloss
> ☁ ${prefix}denim
> ☁ ${prefix}decorate
> ☁ ${prefix}decorate2
> ☁ ${prefix}peridot
> ☁ ${prefix}rock
> ☁ ${prefix}glass
> ☁ ${prefix}glass2
> ☁ ${prefix}glass3
> ☁ ${prefix}glass4
> ☁ ${prefix}glass5
> ☁ ${prefix}glass6
> ☁ ${prefix}glass7
> ☁ ${prefix}glass8
> ☁ ${prefix}captain_as2
> ☁ ${prefix}robot
> ☁ ${prefix}equalizer
> ☁ ${prefix}toxic
> ☁ ${prefix}sparkling
> ☁ ${prefix}sparkling2
> ☁ ${prefix}sparkling3
> ☁ ${prefix}sparkling4
> ☁ ${prefix}sparkling5
> ☁ ${prefix}sparkling6
> ☁ ${prefix}sparkling7
> ☁ ${prefix}decorative
> ☁ ${prefix}chocolate
> ☁ ${prefix}strawberry
> ☁ ${prefix}koifish
> ☁ ${prefix}bread
> ☁ ${prefix}matrix
> ☁ ${prefix}blood2
> ☁ ${prefix}neonligth2
> ☁ ${prefix}thunder2
> ☁ ${prefix}3dbox
> ☁ ${prefix}neon2
> ☁ ${prefix}roadw
> ☁ ${prefix}bokeh
> ☁ ${prefix}gneon
> ☁ ${prefix}advanced
> ☁ ${prefix}dropwater
> ☁ ${prefix}wall
> ☁ ${prefix}chrismast
> ☁ ${prefix}honey
> ☁ ${prefix}drug
> ☁ ${prefix}marble
> ☁ ${prefix}marble2
> ☁ ${prefix}ice
> ☁ ${prefix}juice
> ☁ ${prefix}rusty
> ☁ ${prefix}abstra
> ☁ ${prefix}biscuit
> ☁ ${prefix}wood
> ☁ ${prefix}scifi
> ☁ ${prefix}metalr
> ☁ ${prefix}purpleg
> ☁ ${prefix}shiny
> ☁ ${prefix}jewelry
> ☁ ${prefix}jewelry2
> ☁ ${prefix}jewelry3
> ☁ ${prefix}jewelry4
> ☁ ${prefix}jewelry5
> ☁ ${prefix}jewelry6
> ☁ ${prefix}jewelry7
> ☁ ${prefix}jewelry8
> ☁ ${prefix}metalh
> ☁ ${prefix}golden
> ☁ ${prefix}glitter
> ☁ ${prefix}glitter2
> ☁ ${prefix}glitter3
> ☁ ${prefix}glitter4
> ☁ ${prefix}glitter5
> ☁ ${prefix}glitter6
> ☁ ${prefix}glitter7
> ☁ ${prefix}metale
> ☁ ${prefix}carbon
> ☁ ${prefix}candy
> ☁ ${prefix}metalb
> ☁ ${prefix}gemb
> ☁ ${prefix}3dchrome
> ☁ ${prefix}metalb2
> ☁ ${prefix}metalg
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.photooxyMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐘 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}typography-flower
> ☁ ${prefix}under-flower
> ☁ ${prefix}bevel-text
> ☁ ${prefix}silk-text
> ☁ ${prefix}smoke-typography
> ☁ ${prefix}carvedwood
> ☁ ${prefix}scary-cemetery
> ☁ ${prefix}royallook
> ☁ ${prefix}coffeecup2
> ☁ ${prefix}illuminated
> ☁ ${prefix}harry-potter2
> ☁ ${prefix}woodblack
> ☁ ${prefix}butterfly-reflection
> ☁ ${prefix}watermelon
> ☁ ${prefix}striking
> ☁ ${prefix}metallicglow
> ☁ ${prefix}rainbow-text
> ☁ ${prefix}birthday-cake
> ☁ ${prefix}embroidery
> ☁ ${prefix}crisp
> ☁ ${prefix}flaming
> ☁ ${prefix}furtext
> ☁ ${prefix}nightsky
> ☁ ${prefix}glow-rainbow
> ☁ ${prefix}gradient-avatar
> ☁ ${prefix}white-cube
> ☁ ${prefix}honey-text
> ☁ ${prefix}vintage-style
> ☁ ${prefix}glowing-3d
> ☁ ${prefix}army-camouflage
> ☁ ${prefix}graffiti-cover
> ☁ ${prefix}rainbow-shine
> ☁ ${prefix}smoky-neon
> ☁ ${prefix}quotes-underfall
> ☁ ${prefix}vector-nature
> ☁ ${prefix}yellow-rose
> ☁ ${prefix}love-text
> ☁ ${prefix}underwater-ocean
> ☁ ${prefix}nature-text
> ☁ ${prefix}wolf-metal
> ☁ ${prefix}summer-text
> ☁ ${prefix}wooden-board
> ☁ ${prefix}quote-wood
> ☁ ${prefix}quotes-undergrass
> ☁ ${prefix}naruto-banner
> ☁ ${prefix}love-message
> ☁ ${prefix}textoncup2
> ☁ ${prefix}burn-paper
> ☁ ${prefix}smoke
> ☁ ${prefix}romantic-messages
> ☁ ${prefix}shadow-sky
> ☁ ${prefix}text-cup
> ☁ ${prefix}coffecup
> ☁ ${prefix}battlegrounds-logo
> ☁ ${prefix}battlefield4
> ☁ ${prefix}text-8bit
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.ephotoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐄𝐏𝐇𝐎𝐓𝐎 360 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}1917text
> ☁ ${prefix}angelwing
> ☁ ${prefix}announofwin
> ☁ ${prefix}birthdaycake
> ☁ ${prefix}capercut
> ☁ ${prefix}cardhalloween
> ☁ ${prefix}christmascard
> ☁ ${prefix}christmasseason
> ☁ ${prefix}covergamepubg
> ☁ ${prefix}covergraffiti
> ☁ ${prefix}dragonfire
> ☁ ${prefix}embroider
> ☁ ${prefix}fabrictext
> ☁ ${prefix}facebookgold
> ☁ ${prefix}facebooksilver
> ☁ ${prefix}funnyanimations
> ☁ ${prefix}funnyhalloween
> ☁ ${prefix}galaxybat
> ☁ ${prefix}galaxywallpaper
> ☁ ${prefix}generalexam
> ☁ ${prefix}glowingtext
> ☁ ${prefix}graffiti3d
> ☁ ${prefix}graffititext
> ☁ ${prefix}graffititext2
> ☁ ${prefix}graffititext3
> ☁ ${prefix}greetingcardvideo
> ☁ ${prefix}halloweenbats
> ☁ ${prefix}heartcup
> ☁ ${prefix}heartflashlight
> ☁ ${prefix}horrorletter
> ☁ ${prefix}icetext
> ☁ ${prefix}instagramgold
> ☁ ${prefix}instagramsilver
> ☁ ${prefix}lightningpubg
> ☁ ${prefix}lovecard
> ☁ ${prefix}lovelycute
> ☁ ${prefix}masteryavatar
> ☁ ${prefix}merrycard
> ☁ ${prefix}messagecoffee
> ☁ ${prefix}metalstar
> ☁ ${prefix}milkcake
> ☁ ${prefix}moderngold
> ☁ ${prefix}moderngold2
> ☁ ${prefix}modengold3
> ☁ ${prefix}moderngoldsilver
> ☁ ${prefix}nameonheart
> ☁ ${prefix}noeltext
> ☁ ${prefix}projectyasuo
> ☁ ${prefix}pubgbirthday
> ☁ ${prefix}pubgglicthvideo
> ☁ ${prefix}pubgmascotlogo
> ☁ ${prefix}puppycute
> ☁ ${prefix}realembroidery
> ☁ ${prefix}retrotext
> ☁ ${prefix}rosebirthday
> ☁ ${prefix}snowontext
> ☁ ${prefix}starsnight
> ☁ ${prefix}summerbeach
> ☁ ${prefix}sunglightshadow
> ☁ ${prefix}textcakes
> ☁ ${prefix}texthalloween
> ☁ ${prefix}textonglass
> ☁ ${prefix}textsky
> ☁ ${prefix}thundertext
> ☁ ${prefix}twittergold
> ☁ ${prefix}twittersilver
> ☁ ${prefix}viettel
> ☁ ${prefix}vintagetelevision
> ☁ ${prefix}watercolor2
> ☁ ${prefix}womansday
> ☁ ${prefix}writeblood
> ☁ ${prefix}writegalaxy
> ☁ ${prefix}writehorror
> ☁ ${prefix}youtubegold
> ☁ ${prefix}youtubesilver
> ☁ ${prefix}zombie3d
╰─────────────────✧
*POWERED BY ${ownerName}*
`
}
exports.logoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Halo👋  ${pushname !== undefined ? pushname : 'Kak'}
╭─「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎🌀 」
> 🐣 *Name* : ${pushname !== undefined ? pushname : '-'}
> 🐣 *Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
> 🐣 *Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╰─────────────────✧
╭─「 📚 BOT 𝐈𝐍𝐅𝐎 📚 」
> 🐣 *Creator* : ${ownerName}
> 🐣 *Bot Name* : ${botName}
> 🐣 *Time* : ${jam}
> 🐣 *Runtime* : ${runtime(process.uptime())}
╰─────────────────✧
╭─「 🚥 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 」
> ☁ ${prefix}avataroverwatch
> ☁ ${prefix}logoaccording
> ☁ ${prefix}mascotstyle
> ☁ ${prefix}letterlogos
> ☁ ${prefix}bannerofpubg
> ☁ ${prefix}bannerofapex
> ☁ ${prefix}bannerofoverwatch
> ☁ ${prefix}banneroffreefire
> ☁ ${prefix}gunlogogaming
> ☁ ${prefix}pencilsketch
> ☁ ${prefix}companylogo
> ☁ ${prefix}companylogo2
> ☁ ${prefix}teamlogo
> ☁ ${prefix}bannerofaov
> ☁ ${prefix}fbgamepubgcover
> ☁ ${prefix}banneroflol
> ☁ ${prefix}anonymous
> ☁ ${prefix}metalmascot
> ☁ ${prefix}blueneon
> ☁ ${prefix}coverbannerlol
> ☁ ${prefix}pubglogomaker
> ☁ ${prefix}colorfulpubg
> ☁ ${prefix}astronotspace
> ☁ ${prefix}wallpaperaov
> ☁ ${prefix}maketeamlogo
> ☁ ${prefix}circlemascotteam
> ☁ ${prefix}wallpaperml
> ☁ ${prefix}dragonballfb
> ☁ ${prefix}effect3donbeach
> ☁ ${prefix}cutegirlgamer
╰─────────────────✧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2024 ${ownerName}

`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `_*SEWA? CHAT .owner*`