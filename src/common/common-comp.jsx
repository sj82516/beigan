import React from "react";

require("./common-comp.scss");

//介紹區塊
export class IntroSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            /* dangerouslySetInnerHTML:跳脫字元，可以將原本的string 轉為 html格式
            *  backgroundImage之所以放在這裡是因為sass-loader讀取url會錯誤 */
            <section className="intro-section">
                <div className="intro-title" data-first={this.props.introTitle.charAt(0)}
                     data-second={this.props.introTitle.charAt(1)} style={{backgroundImage: "url('./assets/frame.png')"}}/>
                <div className="intro-content" dangerouslySetInnerHTML={{__html:this.props.introContent}}></div>
            </section>
        )
    }
}

//照片滾動區塊
export class ImageWithComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"imgArr": props.imgArr, "curr": 0, "len": props.imgArr.length};
    }

    componentDidMount() {
        if (this.state.len > 1) {
            this.imgChnagClk = setInterval(()=> {
                this.setState({"curr": ((this.state.curr + 1) % this.state.len)});
            }, 2000);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.imgArr != this.state.imgArr || nextState.curr!=this.state.curr){
            console.log("should update");
            return true;
        }
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({"imgArr": nextProps.imgArr, "curr": 0, "len": nextProps.imgArr.length});
        console.log(this.imgChnagClk);
        if (nextProps.imgArr.length > 1) {
            if(this.imgChnagClk == undefined) {
                this.imgChnagClk = setInterval(()=> {
                    this.setState({"curr": ((this.state.curr + 1) % this.state.len)});
                    console.log(this.state);
                }, 2000);
            }
        }else{
            clearInterval(this.imgChnagClk);
            this.imgChnagClk = undefined;
        }
    }

    componentWillUnmount() {
        clearInterval(this.imgChnagClk);
    }

    render() {
        if (this.state.len > 0) {
            return (
                <div className="img-with-comment">
                    <div className="img-with-comment__img" ref="img-with-comment__img"
                         title={this.state.imgArr[this.state.curr].title}
                         style={{"backgroundImage":"url("+this.state.imgArr[this.state.curr].src+")", "height":this.state.height>400?400:this.state.height}}
                    >
                        <ul className="img-with-comment__dot-list">
                            {this.state.imgArr.map((_, i)=> {
                                return (
                                    <li key={i}
                                        className={
                                       `img-with-comment__dot
                                       ${this.state.curr==i?"img-with-comment__dot_active":""}`
                                    }
                                    >・</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="img-with-comment__comment" dangerouslySetInnerHTML={{'__html': this.state.imgArr[this.state.curr].comment}}>
                    </div>
                </div>
            )
        } else {
            return (
                <div>No Image Error</div>
            )
        }
    }
}

//役男資料區塊
export class ServiceSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": props.title,
            "titleColor": props.titleColor,
            "content": props.content,
            "imgArr": props.imgArr
        }
    }

    render() {
        return (
            <div className="service-section">
                <div className="service-section__left">
                    <h2 className="service-section__title"
                        style={{"color":this.state.titleColor, "borderColor":this.state.titleColor}}>{this.state.title}</h2>
                    <h4 className="service-section__content"
                        dangerouslySetInnerHTML={{"__html":this.state.content}}></h4>
                </div>
                <div className="service-section__imgArr">
                    <ImageWithComment imgArr={this.state.imgArr}/>
                </div>
            </div>
        )
    }
}

//資料彙整區塊
export class DataSection extends React.Component {
    constructor(props) {
        super(props);
        let list = [];
        for (let key in props.data.list) {
            //double check if key exists in object
            if (props.data.list.hasOwnProperty(key)) {
                list.push(key);
            }
        }
        this.state = {"data": props.data, "list": list};
    }

    render() {
        return (
            <section className="data-section">
                <h1 className="data-section__title">{ this.state.data.title }</h1>
                {
                    this.state.list.map((title, i)=> {
                        return (
                            <div key={i}>
                                <h2 className="data-section__content-title">{ this.state.data.list[title].title}</h2>
                                <h4 className="data-section__content"
                                    dangerouslySetInnerHTML={{"__html": this.state.data.list[title].content}}/>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}