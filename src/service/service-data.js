/**
 * Created by zhengyuanjie on 2016/11/21.
 */
import {Img} from "../common/common-class";

export const IntroData = {
    "title": "資料彙整區",
    "list": [
        {
            "title": "・關於薪資",
            "content": `以下數字來自本子，會有細微出入，剛出成功嶺會先給一筆:4308，下個月初(當月1號入帳)會先給本俸：6070，接著會有退伙食費(以社會役為例):3055元。
                    前半年每個月的薪水約為(本俸＋伙食費＋離島加給):10069~11413元，服役半年後加薪600約為:11943元。<br/>
                    也可以上役政署官網 <a target="_blank" href="http://www.nca.gov.tw/web/pg_payquery.php" alt="役男薪水">查詢役男薪水</a>`
        },{
            "title": "・關於補助",
            "content":`交通補助三個月補助一趟回家機票的一半，立榮航空飛往松山單程約 1900元，所以也就補助約1900元。`
        },
        {
            "title": "・生活開銷",
            "content":`食物基本上台北物價*1.5，雞腿便當約110元上下，其他的物價小貴但和台灣差不了太多，生活用品可以去營站(北竿郵局旁)買；<br/>
            如果加上回家機票與開銷，整體來說就是月光族`
        }
    ]
};

export const ServiceData = {
    "社會役": {
        "titleColor": "green",
        "content": `
            <h2 class="service-section__content_b">・工作地點</h2>
            <h4>老人活動中心</h4>
            <h2 class="service-section__content_b">・工作內容</h2>
            <h4>清潔人員：掃地拖地清廁所；遇到有人過世需要幫忙摺紙錢(特殊任務)，其他基本上都是體力活</h4>
            <h2 class="service-section__content_b">・忙碌程度</h2>
            <h4>大致上都是輕鬆的，沒有人過世的話... 建議有個讀書計畫，可以看很多書</h4>
            <h2 class="service-section__content_b">・積假與放假</h2>
            <h4>原則上三個月放一次，一次約兩週，積假方式主要是值班，可以做自己的事</h4>
        `,
        "imgArr": [
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所"),
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所2")
        ]
    },
    "教育役": {
        "titleColor": "orange",
        "content": `
            <h2 class="service-section__content_b">・工作地點</h2>
            <h4>坂里國小、中山國中(於芹壁)、塘岐國小</h4>
            <h2 class="service-section__content_b">・工作內容</h2>
            <h4>除草、清潔，基本上就是工友，有時會被奇怪的老師或是主任抓去打雜</h4>
            <h2 class="service-section__content_b">・忙碌程度</h2>
            <h4>有點忙，基本上就是看老師與主任的ㄎㄅ程度</h4>
            <h2 class="service-section__content_b">・積假與放假</h2>
            <h4>原則上三個月放一次，一次約兩週，積假方式主要是留校掃地，每日累積一小時，偶爾假日留守</h4>
            <h2 class="service-section__content_b">・其他</h2>
            <h4>全馬祖唯一有管幹的役別！加薪六千可以考慮，工作量就看當期的其他教育役男的水準... 不好說XD；另外學校伙食不錯，中午晚餐都有提供。</h4>
        `,
        "imgArr": [
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所")
        ]
    },
    "行政役": {
        "titleColor": "orange",
        "content": `
            <h2 class="service-section__content_b">・工作地點</h2>
            <h4>北竿鄉公所</h4>
            <h2 class="service-section__content_b">・工作內容</h2>
            <h4>坐著接電話(很涼，一天不超過十通)，或是其他打雜事件，基本上非常涼</h4>
            <h2 class="service-section__content_b">・忙碌程度</h2>
            <h4>就很涼阿</h4>
            <h2 class="service-section__content_b">・積假與放假</h2>
            <h4>原則上三個月放一次，一次約兩週，積假方式不太固定，主要看行政課承辦人安排</h4>
        `,
        "imgArr": [
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所"),
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所2")
        ]
    },
    "觀光役": {
        "titleColor": "orange",
        "content": `
            <h2 class="service-section__content_b">・工作地點</h2>
            <h4>戰爭和平公園</h4>
            <h2 class="service-section__content_b">・工作內容</h2>
            <h4>顧戰爭和平公園</h4>
            <h2 class="service-section__content_b">・忙碌程度</h2>
            <h4>很涼，主管不在上班還可以用電腦</h4>
            <h2 class="service-section__content_b">・積假與放假</h2>
            <h4>因為是觀光景點，所以一到日都要值班，所以積假速度神快，放假役男自己協調</h4>
        `,
        "imgArr": [
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所"),
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所2")
        ]
    },
    "醫療役": {
        "titleColor": "orange",
        "content": `
            <h2 class="service-section__content_b">・工作地點</h2>
            <h4>北竿衛生所</h4>
            <h2 class="service-section__content_b">・工作內容</h2>
            <h4>協助掛號與坐櫃檯</h4>
            <h2 class="service-section__content_b">・忙碌程度</h2>
            <h4>沒有很忙的樣子</h4>
            <h2 class="service-section__content_b">・積假與放假</h2>
            <h4>排班制，晚上需要有人守夜班，積架速度也很快，放假役男協調</h4>
        `,
        "imgArr": [
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所"),
            new Img("http://img05.tooopen.com/images/20150925/tooopen_sy_143684733881.jpg", "工作場所2")
        ]
    }

};