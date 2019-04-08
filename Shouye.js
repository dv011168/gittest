import React, { Component } from 'react';

import Header from './Header'
import New10 from './News10'
import News from './News'
import axios from 'axios';
import '../assets/css/shouye.css'
import 阵列 from '../assets/images/阵列显示.png'
import 状态 from '../assets/images/状态.png'
import 统计 from '../assets/images/统计.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Z_BLOCK } from 'zlib';

const querystring = require('querystring');



/**
 * React中的组件: 解决html 标签构建应用的不足。

使用组件的好处：把公共的功能单独抽离成一个文件作为一个组件，哪里里使用哪里引入。

父子组件：组件的相互调用中，我们把调用者称为父组件，被调用者称为子组件


父子组件传值：

    父组件给子组件传值 

		    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>

		    2.子组件里面 this.props.msg          

    说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件。可以让子组件给父组件传值

    父组件主动获取子组件的数据

        1、父组件调用子组件的时候指定ref的值   <Header ref='header'></Header>      
        
        2、父组件通过this.refs.header  获取整个子组件实例 (dom（组件）加载完成以后获取)
        

        defaultProps:父子组件传值中，如果组件调用子组件的时候不给子组件传值，可以再子组件使用defaultProps定义的默认值

        propTypes :验证父组件传值的类型合法性

        都是定义在子组件里面
 */

class Shouye extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个首页组件',
            title:'首页组件',
            count:20
         };
    }

    TestKuayu = () =>{
        
        console.log("测试跨域问题！");
        axios.post('/api/t-test/getTtestById', 
        querystring.stringify({
            id: '42',
            lastName: '你好'
          })
          )
          .then(function (response) {
            console.log("打印nginx跨域："+JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    render() {
        return (
            <div className="d_body">
                
                {/* <Header title={this.state.title}/> */}
                {/* <New10 title={this.state.title} num={this.state.count}/> */}

                <h2>{this.state.msg}</h2>

                
                这是首页组件的内容

                <button onClick={this.TestKuayu}>测试跨域问题</button>

               <hr />
                
               <div className="big">
                    <div className="left_div">
                    
                     <div className="lef">
                        <div className="piTitle label">
                            <img src={阵列} className="img"></img>
                            <div className="sp">批次信息</div>
                        </div>
                    
                        <div className="ax_default">
                            <span>批次名称 ：</span>本科评估数据采集
                        </div>
                        <div className="ax_default">
                            <span>发起部门 ：</span>人事处
                        </div>
                        <div className="ax_default">
                            <span>采集周期  ：</span>2019-04-18 14:29~2019-10-21 14:30  
                        </div>
                        <div className="ax_default">
                            <span>创建时间  ：</span>2019-03-28
                        </div>
                        <div className="ax_default">
                            <span>批次描述  ：</span><textarea readOnly={true} className="ttarea" rows="4" cols="40" placeholder="详情描述"></textarea>
                        </div>
                     </div>
                     <div className="img_div">
                            <img src={状态} className="img"></img>
                            <span className="spanStatus">进行中</span>
                        </div>
                    </div>
                        
                    <div className="right_div">

                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle" >75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle" >75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle" >75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle" >75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle">75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处56</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle" style={{backgroundColor:'green'}}>75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        <div className="right_small">
                            <div className="mingcheng">
                                <span>教务处</span>
                                <span>(54)</span>
                            </div>
                            <div className="tijiao">
                                <span>已提交:</span><span>50份</span>
                                <span>耗&nbsp;&nbsp;&nbsp;时:</span><span>20小时50分</span>
                            </div>
                            <div className="completion">
                                <div className="circle">75%</div>
                                <span>完成度</span>
                            </div>
                            <div className="shenhe">
                                审核退回:<span style={{color:'red'}}>5份</span>
                                退&nbsp;回&nbsp;率:<span style={{marginLeft:'5px'}}>5%</span>
                            </div>
                        </div>
                        <hr />
                        
                        
                    </div>
               </div>
               <hr />
               <div className="down">
                    <div className="shuju">
                        {/* <img src={统计} style={{height:'20px',width:'20px'}}> </img> */}
                        <img src={统计} className="s_img"></img>
                        <span className="sp">数据统计</span>
                    </div>
                    <div>
                        <span style={{margin:'5px',fontSize:'14px'}}>部门查询：</span>  
                        <select className="s_select">
                                <option key="1">人事部</option>
                                <option key="2">教务处</option>
                                <option key="3">人事部</option>
                                <option key="4">人事部</option>
                        </select>

                        <button className="search">查询</button>
                    </div>
               </div>

               

            </div>
        );
    }
}

export default Shouye;