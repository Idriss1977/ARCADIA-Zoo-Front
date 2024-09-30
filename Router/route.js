export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
        this.url = url;
        this.title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
    }
}