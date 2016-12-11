import React from "react";

import {VillageInfo} from "./village-info";
import {IntroSection, ImageWithComment} from "../../common/common-comp";

require("./village.scss");

export class Village extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    componentWillMount(){
        this.updateStateByVillage(this.props.village);
    }

    handleDetailListItemClick(evt, num) {
        this.setState({"selectedItem": this.state.selectedList[num], "isDropdown":false});
    }

    handleIntroBtnClick(evt, key) {
        this.setState({
            "selectedList": VillageInfo[this.props.village].list[key],
            "selectedItem": VillageInfo[this.props.village].list[key][0]
        });
    }

    componentWillReceiveProps(nextProps) {
        this.updateStateByVillage(nextProps.village);
    }

    updateStateByVillage(v) {
        let list = [];
        console.log(VillageInfo[v].list);
        for (let key in VillageInfo[v].list) {
            //double check if key exists in object
            if (VillageInfo[v].list.hasOwnProperty(key)) {
                list.push(key);
            }
        }
        this.setState({
            "selectedVillageName": v,
            "selectedVillage": VillageInfo[v],
            "list": list,
            "selectedList": VillageInfo[v].list[list[0]],
            "selectedItem": VillageInfo[v].list[list[0]][0],
            "isDropdown": false,
        });
    }


    render() {
        return (
            <div>
                <section>
                    <IntroSection  introTitle={this.state.selectedVillageName} introContent={this.state.selectedVillage.intro}/>
                    <ul className="intro-btn-list">
                        {
                            this.state.list.length > 1 ? this.state.list.map((key, i)=> {
                                return (
                                    // 吃、住...
                                    <a tabIndex="1" className="intro-btn" key={i}
                                       onClick={(evt)=>this.handleIntroBtnClick(evt,key)}>{this.state.list[i]}</a>
                                )
                            }) : ""
                        }
                    </ul>
                </section>
                <section className="intro-detail-section">
                    <ul className={
                           `intro-detail-list  +
                           ${this.state.isDropdown?"intro-detail-list_show":"intro-detail-list_hide"}`
                        }>
                        <li className={
                               `intro-detail-list__dropdown-item  +
                               ${this.state.isDropdown?"intro-detail-list__dropdown-item_show":"intro-detail-list__dropdown-item_hide"}`
                            }
                            onClick={()=>{
                                this.setState({"isDropdown": !this.state.isDropdown});
                            }}>
                            －
                        </li>
                        {this.state.selectedList.map((item, i)=> {
                                return (
                                    //tabIndex : 為了讓<li>有focus屬性
                                    //店家名等等
                                    <li className={
                                           `intro-detail-list__item  +
                                           ${this.state.isDropdown?"intro-detail-list__item_show":"intro-detail-list__item_hide"}`
                                        }
                                        style={{color: this.state.selectedItem.name==item.name?'#00329B':'white'}}
                                        key={i}
                                        onClick={(evt)=>this.handleDetailListItemClick(evt,i)}>{item.name}</li>
                                )
                            }
                        )}
                    </ul>
                    <div className="intro-detail-img">
                        <ImageWithComment imgArr={this.state.selectedItem.imgArr}/>
                    </div>
                </section>
            </div>
        )
    }

}