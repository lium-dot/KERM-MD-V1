/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const _0x23394e=_0x306d;(function(_0x3325f8,_0x10f2fb){const _0x6985e1=_0x306d,_0x9668d5=_0x3325f8();while(!![]){try{const _0x1dd7fa=parseInt(_0x6985e1(0xaa))/0x1*(parseInt(_0x6985e1(0xbf))/0x2)+-parseInt(_0x6985e1(0xb7))/0x3*(-parseInt(_0x6985e1(0xbd))/0x4)+-parseInt(_0x6985e1(0xc4))/0x5+-parseInt(_0x6985e1(0xbc))/0x6*(-parseInt(_0x6985e1(0xc9))/0x7)+parseInt(_0x6985e1(0xab))/0x8+parseInt(_0x6985e1(0xb9))/0x9+-parseInt(_0x6985e1(0xa5))/0xa;if(_0x1dd7fa===_0x10f2fb)break;else _0x9668d5['push'](_0x9668d5['shift']());}catch(_0x4085df){_0x9668d5['push'](_0x9668d5['shift']());}}}(_0x46db,0xdcffa));const {cmd}=require('../command'),axios=require('axios'),fs=require('fs'),path=require(_0x23394e(0xad)),AdmZip=require(_0x23394e(0xa8));function _0x306d(_0x206188,_0x3f3f8a){const _0x46db80=_0x46db();return _0x306d=function(_0x306d4b,_0x1059c4){_0x306d4b=_0x306d4b-0x9f;let _0x1d28c6=_0x46db80[_0x306d4b];return _0x1d28c6;},_0x306d(_0x206188,_0x3f3f8a);}cmd({'pattern':_0x23394e(0xa0),'alias':[_0x23394e(0xc6),'sync'],'react':'🔄','desc':'Update\x20the\x20bot\x20to\x20the\x20latest\x20version.','category':_0x23394e(0xb6),'filename':__filename},async(_0x2f42ed,_0xf65f6b,_0x42b29f,{from:_0x2dc00f,reply:_0x33b9fc,sender:_0x172d97,isOwner:_0xa49f7e})=>{const _0x35f3d2=_0x23394e;if(!_0xa49f7e)return _0x33b9fc(_0x35f3d2(0xba));try{await _0x33b9fc('```🔍\x20Checking\x20for\x20KERM-MD\x20updates...```\x0a');const {data:_0x1258fc}=await axios[_0x35f3d2(0xaf)](_0x35f3d2(0xa7)),_0x190d17=_0x1258fc[_0x35f3d2(0xc3)];let _0x429064='unknown';try{const _0x303e5b=require(_0x35f3d2(0xc2));_0x429064=_0x303e5b['commitHash']||_0x35f3d2(0xca);}catch(_0x38ee37){console[_0x35f3d2(0xc0)]('Error\x20reading\x20package.json:',_0x38ee37);}if(_0x190d17===_0x429064)return _0x33b9fc(_0x35f3d2(0xac));await _0x33b9fc(_0x35f3d2(0xa1));const _0x4a7e72=path['join'](__dirname,'latest.zip'),{data:_0x99182c}=await axios[_0x35f3d2(0xaf)]('https://github.com/Kgtech-cmr/KERM-MD-V1/archive/main.zip',{'responseType':_0x35f3d2(0xb1)});fs[_0x35f3d2(0xb5)](_0x4a7e72,_0x99182c),await _0x33b9fc('```📦\x20Extracting\x20the\x20latest\x20code...```\x0a');const _0x74484=path[_0x35f3d2(0xb0)](__dirname,_0x35f3d2(0xb4)),_0x4249ba=new AdmZip(_0x4a7e72);_0x4249ba['extractAllTo'](_0x74484,!![]),await _0x33b9fc(_0x35f3d2(0xa4));const _0x552090=path['join'](_0x74484,_0x35f3d2(0xbb)),_0x3c64ef=path[_0x35f3d2(0xb0)](__dirname,'..');copyFolderSync(_0x552090,_0x3c64ef),fs['unlinkSync'](_0x4a7e72),fs[_0x35f3d2(0xb8)](_0x74484,{'recursive':!![],'force':!![]});const _0x200872=path[_0x35f3d2(0xb0)](__dirname,_0x35f3d2(0xc2)),_0x448791=require(_0x200872);_0x448791[_0x35f3d2(0xbe)]=_0x190d17,fs[_0x35f3d2(0xb5)](_0x200872,JSON[_0x35f3d2(0xc8)](_0x448791,null,0x2)),await _0x33b9fc(_0x35f3d2(0xa2)),process['exit'](0x0);}catch(_0x5b3921){console[_0x35f3d2(0xc0)](_0x35f3d2(0xb2),_0x5b3921),_0x33b9fc('❌\x20Update\x20failed.\x20Please\x20try\x20manually.');}});function _0x46db(){const _0x4057c0=['131094UhKZDN','rmSync','12496653GWtgxi','This\x20command\x20is\x20only\x20for\x20the\x20bot\x20owner.','KERM-MD-V1-main','6vZBMob','56gTigWY','commitHash','93538DKuzJO','error','Skipping\x20','../package.json','sha','1582015GoWdup','readdirSync','upgrade','log','stringify','602539OqlvFM','unknown','config.js','existsSync','mkdirSync','update','```Kerm\x20Md\x20Bot\x20Updating...🚀```\x0a','```🔄\x20Restarting\x20the\x20bot\x20to\x20apply\x20updates...```\x0a','isDirectory','```🔄\x20Replacing\x20files...```\x0a','25157060BWgeed','app.json','https://api.github.com/repos/Kgtech-cmr/KERM-MD-V1/commits/main','adm-zip','lstatSync','1Lfhhgu','12833472FLIkYZ','```✅\x20Your\x20KERM-MD\x20bot\x20is\x20already\x20up-to-date!```\x0a','path','\x20to\x20preserve\x20custom\x20settings.','get','join','arraybuffer','Update\x20error:','copyFileSync','latest','writeFileSync','misc'];_0x46db=function(){return _0x4057c0;};return _0x46db();}function copyFolderSync(_0xd448a9,_0x39d9fa){const _0x496963=_0x23394e;!fs[_0x496963(0xcc)](_0x39d9fa)&&fs[_0x496963(0x9f)](_0x39d9fa,{'recursive':!![]});const _0x161f01=fs[_0x496963(0xc5)](_0xd448a9);for(const _0x2d2a03 of _0x161f01){const _0x57877b=path[_0x496963(0xb0)](_0xd448a9,_0x2d2a03),_0x116374=path[_0x496963(0xb0)](_0x39d9fa,_0x2d2a03);if(_0x2d2a03===_0x496963(0xcb)||_0x2d2a03===_0x496963(0xa6)){console[_0x496963(0xc7)](_0x496963(0xc1)+_0x2d2a03+_0x496963(0xae));continue;}fs[_0x496963(0xa9)](_0x57877b)[_0x496963(0xa3)]()?copyFolderSync(_0x57877b,_0x116374):fs[_0x496963(0xb3)](_0x57877b,_0x116374);}}