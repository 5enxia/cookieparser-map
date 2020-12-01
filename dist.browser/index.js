export default function (cookie = '') {
    const parsedCookie = new Map();
    cookie.split('; ').forEach((value) => {
        const splited = value.split("=");
        parsedCookie.set(splited[0], splited[1]);
    });
    return parsedCookie;
}
