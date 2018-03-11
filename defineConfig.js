const config = {
    cfg_viewMode: true,
    cfg_lang: '"ko"',
    cfg_math: false,
    cfg_script_more_info: true,
    cfg_unknownbtn: false,
    cfg_customkeyboard: false,
    cfg_multilangs: true,
    cfg_useplugin: false,
    cfg_usetalk: true,
    cfg_usegenie: true,
    cfg_useoption: true,
/*
    cfg_isapp: false,
    cfg_isweb: isWep,
    cfg_android: isWep true,
    cfg_ios: false,
    cfg_recordane: (cfg_android || cfg_ios) && false,
*/
};

config.cfg_debug = process.env.NODE_ENV !== "production";
config.cfg_dist = process.env.NODE_ENV === "production";
config.cfg_editMode = !config.cfg_viewMode;
config.cfg_systemkeyboard = !config.cfg_customkeyboard;

module.exports = config;
