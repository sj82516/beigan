export class Item {
    constructor(name, intro, imgArr) {
        this.name = name;
        this.intro = intro;
        this.imgArr = imgArr;
    }
}

export class Img {
    constructor(src, comment, title){
        this.src = src;
        this.comment = comment;
        //set title for seo
        this.title = title;
    }
}