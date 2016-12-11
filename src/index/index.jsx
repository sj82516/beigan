import React from "react";

import {IntroSection, ImageWithComment} from "../common/common-comp";
import {Img} from "../common/common-class";

require('./index.scss');

export class Index extends React.Component {
    render() {
        return (
            <div>
                    <iframe className="beigan-google-map" width="100%" height="450" frameborder="0" frameborder="0"
                            scrolling="no" marginheight="0" marginwidth="0"
                            src="https://www.google.com/maps/embed/v1/place?q=%E5%8C%97%E7%AB%BF%E9%84%89&key=AIzaSyB_AX6djGBXMEIyWJ1RygTkjMhGhdatwaQ"></iframe>

                <IntroSection introTitle="說明" introContent="由北竿役男紀錄服役期間所認識的北竿"/>
                <IntroSection introTitle="特色" introContent="馬祖三項特色<br/>海鮮・高粱・藍眼淚"/>
                <div className="specialty">
                    <div className="specialty-column">
                        <h2 className="specialty-column__title">海鮮</h2>
                        <h4 className="specialty-column__intro">
                            著名的有淡菜，還有竹盛、佛手都很美味，大火快炒、煮湯或是用烤的都很好吃<br/>
                            另外還有特別的魚麵，將魚肉混進麵粉裡頭做成的麵條，相當特別

                        </h4>
                        <ImageWithComment imgArr={[
                            new Img('http://media.dodocook.com/user_upload/recipe/3/79/82/recipe_0037982_600_fit_0050135.jpg',`淡菜,煮湯快炒都不錯吃 <br/> <a target="_blank" href="http://media.dodocook.com/user_upload/recipe/3/79/82/recipe_0037982_600_fit_0050135.jpg">圖片來源</a>`),
                            new Img('http://pic.pimg.tw/carol218/4a28bae2ce17d.jpg','竹虫聖(ㄕㄥˋ)，海鮮中我覺得最好吃的，塔香快炒很讚<br/><a target="_blank" href="http://pic.pimg.tw/carol218/4a28bae2ce17d.jpg">圖片來源</a>')
                        ]}/>
                    </div>
                    <div className="specialty-column">
                        <h2 className="specialty-column__title">高粱酒</h2>
                        <h4 className="specialty-column__intro">
                            除了金門，馬祖也盛產高粱，其中比較常看本地人喝東涌陳高或是元尊陳高<br/>
                            當地料理也有融入酒的元素，如老酒麵線與酒糟料理，值得一試。
                        </h4>
                        <ImageWithComment imgArr={[
                            new Img('http://www.p9.com.tw/Upload/FTBImages/product/102y/10203/20130327_5230_500.jpg','元尊陳高<br/><a target="_blank" href="http://www.p9.com.tw/Upload/FTBImages/product/102y/10203/20130327_5230_500.jpg">圖片來源</a>'),
                        ]}/>
                    </div>
                    <div className="specialty-column">
                        <h2 className="specialty-column__title">藍眼淚</h2>
                        <h4 className="specialty-column__intro">
                            馬祖最大的自然景觀賣點，正常來說季節是在4~10月之間<br/>
                            主要是螢光藻受刺激發出的生物螢光，如果剛好量大時，用肉眼看相當震撼<br/>
                        </h4>
                        <ImageWithComment imgArr={[
                            new Img('http://static.ettoday.net/images/207/d207779.jpg','因為在夜間拍攝需要專業相機長曝才看得到，<br/>我找了一張跟肉眼跟比較相似的照片，' +
                             '基本上是接近岸邊會亮一帶，但這也要等到爆量才有，不是天天遇得到。<a target="_blank" href="http://static.ettoday.net/images/207/d207779.jpg">圖片來源</a>')
                        ]}/>
                    </div>
                </div>
            </div>
        )
    }
}