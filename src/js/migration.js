on("sheet:opened", function() {
    getAttrs(["pvmax","aventureMax","sheet_version"], function(values) {
        const sheet_version = parseInt(values.sheet_version) || 0;
        var attrs = {};

        // get attribute updates for each version until the sheet has completed all steps
        // NOTE: to maintain backwards compatibility with sheets predating the version attribute, all steps will be performed for new sheets
        if (sheet_version < 1) {
            attrs["sheet_version"] = 1;
            attrs["pv_max"] = values.pvmax;
            attrs["aventure_max"] = values.aventureMax;
        }
        
        /*
        * if (sheet_version < 2) {
        *     attrs["sheet_version"] = 2;
        * }
        */

        if (Object.keys(attrs).length) {
            setAttrs(attrs);
        }
    });
});