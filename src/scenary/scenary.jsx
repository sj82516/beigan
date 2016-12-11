import React from "react";
import {Village} from "./village/village";

require('./scenary.scss');

export class Scenary extends React.Component {
    villages = ['塘岐', '後沃', '芹壁', '橋仔', '白沙', '坂里'];
    constructor(props) {
        super(props);
        this.state = {
            "village": "塘岐",
            "svg": `<svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 821.15 439.81"><title>beigan_map</title><polygon points="61.11 213.91 209.94 308.26 209.94 370.71 130.22 439.81 33.22 419.88 0 380.02 22.59 241.83 61.11 213.91" style="fill:#e2e217"/><polygon points="660.38 182.7 653.73 221.28 639.12 322.88 692.27 354.77 685.62 395.96 777.3 378.69 777.3 329.52 821.15 233.86 742.76 147.49 660.38 182.7" style="fill:#f98673"/><polygon points="228.33 49.68 290.22 315.24 209.94 277.7 209.94 308.26 61.11 213.91 114.27 175.39 193.99 58.46 228.33 49.68" style="fill:#11d3ce"/><polygon points="422.54 0 437.15 161.44 264.64 205.5 228.33 49.68 422.54 0" style="fill:#e57b51"/><polygon points="290.22 315.24 312.25 325.54 515.55 276.95 437.15 161.44 264.64 205.5 290.22 315.24" style="fill:#f476be"/><polygon points="422.54 0 528.83 19.93 598.77 58.52 437.15 161.44 422.54 0" style="fill:#257ce5"/><polygon points="619.19 215.25 515.55 276.95 437.15 161.44 598.77 58.52 644.43 83.71 639.12 167.73 660.38 178.36 653.73 221.28 619.19 215.25" style="fill:#7ad816"/><path d="M83.71,341.15s25.79-120.52,92-147.79l23,20.55S158.2,221.11,115,341.15H83.71Z" style="fill:#fff"/><path d="M185.48,221.11s127.73-11.84,189.69,36l8-29.23s-50.74-38.11-197.69-38v31.23h0Z" style="fill:#fff"/><path d="M332.74,87.14S230.11,114,185.48,189.89v31.23s78.76-99.64,153.92-104.24Z" style="fill:#fff"/><path d="M576.45,192.89s-83.83,83.49-193.28,66.21V227.88s68.6,24.17,163.94-45.42Z" style="fill:#fff"/><path d="M339.4,88.63s25.3,21.72,71.18,0c49.35-23.35,29.68-30.13,78.82-39l0.78,31.14a77.54,77.54,0,0,0-29.32,6.31c-14.26,6.32-26.17,26.2-55.13,31.2-21.29,3.7-44.52,2.6-66.32-1.4V88.63h0Z" style="fill:#fff"/><path d="M583.52,92.28c-2.61-15.67-71.14-21.73-93.12-10.36l4.22-32.46s123.7-2,115.64,46.17c-7.49,44.74-46,10.7-63.16,36.92s20.81,35.2,20.81,35.2L547.1,182.47s-43.35-9.66-31.56-45.25c0,0,.25-23.41,29.9-30S585.39,103.51,583.52,92.28Z" style="fill:#fff"/><path d="M717.68,261.46s-43.43-58.38-141.23-68.57l-8.54-25.15s113.91,10.68,168.5,70Z" style="fill:#fff"/><polygon points="382.15 190.26 509.71 190.26 481.81 95.05 456.56 142.66 437.96 53.88 382.15 190.26" style="fill:#054908"/><path d="M403.78,118.54s-9.27,30,18.76,35.59,36.82,54.25-23.76,89.36l-8.68-7.06s32.89-19.9,30.07-43.55-21.25-27.82-30.07-31.45-18.19-25.74-11.63-40.9Z" style="fill:#fff"/><circle id="白沙" cx="99.32" cy="341.15" r="15.61" style="fill:#2d2d2d"/><circle id="坂里" cx="185.48" cy="205.5" r="15.61" style="fill:#2d2d2d"/><circle id="上村" cx="383.17" cy="243.49" r="15.61" style="fill:#565611"/><circle id="塘岐" cx="562.72" cy="182.46" r="15.61" style="fill:#2d2d2d"/><circle id="後沃" cx="730.14" cy="252.04" r="15.61" style="fill:#2d2d2d"/><circle id="橋仔" cx="489.4" cy="65.29" r="15.61" style="fill:#2d2d2d"/><circle id="芹壁" cx="332.74" cy="102.75" r="15.61" style="fill:#2d2d2d"/><text transform="translate(332.74 287)" style="font-size:17px;fill:#070701;font-family:Lantinghei TC;font-weight:700">只有加油站....</text></svg>`
        }
    }

    componentDidMount() {
        this.setVillageColor(this.state.village);
        this.setVillageClick();
    }

    handleVillageSelect(evt, v) {
        this.setState({"village": v});
        this.setVillageColor(v);
    }

    setVillageClick(){
        let that = this;
        this.villages.map((v)=>{
            (function(v, that){
                console.log(v);
                document.getElementById(v).addEventListener('click', (evt)=> {
                    console.log(evt);
                    that.handleVillageSelect(evt, v);
                }, false);
            })(v, that);
        })
    }

    setVillageColor(village) {
        this.villages.map((v)=> {
            let that = this;
            document.getElementById(v).style.fill = '2d2d2d';
            if (v == village) {
                document.getElementById(v).style.fill = 'red';
            }
        });
    }

    render() {
        return (
            <div className="scenary-section">
                <div className="local-map">
                    <div dangerouslySetInnerHTML={{__html:this.state.svg}} className="local-map-img"/>
                    <ul className="local-map-nav">
                        {
                            this.villages.map((v)=>{
                                return(
                                    <li key={v}
                                        className="local-map-nav__item" onClick={(evt)=>this.handleVillageSelect(evt, v)}
                                        style={{ color: this.state.village==v?'black':''}}
                                    >{v}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Village village={this.state.village}/>
            </div>
        )
    }
}