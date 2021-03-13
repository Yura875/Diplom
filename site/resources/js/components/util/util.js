export default class Util {
    static get_cookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([.$?*|{}()[]\/+^])/g, '\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static set_cookie(name, value, options = {}) {


        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    static deleteCookie(name) {
        this.set_cookie(name, "", {
            'max-age': -1
        })
    }

    static incorrect_user() {
        let today = new Date();
        today.setHours(today.getHours() + 1);
        let path=window.location.pathname.substr(1);
        Util.set_cookie("path",path, {expires: today})
        window.location = "/account";
    }

    static setDivError(id, msg) {
        const errDiv = document.getElementById(id);
        if (!errDiv) {
            return;
        }
        errDiv.className = "auth-block err-div";
        errDiv.innerHTML = msg;
    }
}
