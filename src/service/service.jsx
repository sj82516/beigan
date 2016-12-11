import React from "react";
import {Link} from "react-router";

import {ServiceSection, DataSection} from "../common/common-comp";
import {Img} from "../common/common-class";
import {ServiceData, IntroData} from "./service-data"

require("./service.scss");

export class Service extends React.Component {
    constructor(props) {
        super(props);
        let list = [];
        for (let key in ServiceData) {
            //double check if key exists in object
            if (ServiceData.hasOwnProperty(key)) {
                list.push(key);
            }
        }
        console.log(list);
        this.state = {"serviceData": ServiceData, "introData": IntroData, "list": list}
    }

    render() {
        return (
            <div className="service">
                <div className="service-section-anchor-list">
                    <a href="/service#社會役" className="service-section-anchor-list__item">社</a>
                    <a href="/service#教育役" className="service-section-anchor-list__item">教</a>
                    <a href="/service#觀光役" className="service-section-anchor-list__item">觀</a>
                    <a href="/service#行政役" className="service-section-anchor-list__item">行</a>
                    <a href="/service#醫療役" className="service-section-anchor-list__item">醫</a>
                    <a href="/service#top" className="service-section-anchor-list__item">Top</a>
                </div>
                <a name="top"/>
                <section>
                    <DataSection data={this.state.introData}/>
                </section>
                <div>
                    {
                        this.state.list.map((title)=> {
                            return (<div key={title}>
                                <a name={title}/>
                                <ServiceSection title={title} titleColor={this.state.serviceData[title].titleColor}
                                                content={this.state.serviceData[title].content}
                                                imgArr={this.state.serviceData[title].imgArr}
                                                style={{"marginBottom":"20px"}}
                                /></div>)
                        })
                    }
                </div>
            </div>
        )
    }
}