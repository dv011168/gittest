import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SortableList from './sortable-list';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import '../assets/css/news.css'



var d1 = '';
var d2 = '';
var d3 = '';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[
                {
                    aid:'11',
                    title:'我是新闻111'
                },
                {
                    aid:'22',
                    title:'我是新闻222'
                },
                {
                    aid:'33',
                    title:'我是新闻333'
                },
                {
                    aid:'44',
                    title:'我是新闻444'
                },
            ],
            
            items: ["div1","div2","div3"],

            
            sorts: [
                
                {id:"div1",sort:'3',col:'red'},
                {id:"div2",sort:'1',col:'green'},
                {id:"div3",sort:'2',col:'yellow'}
            ]
        };
    }
    
    componentDidMount = () =>{
        // this.setState({
        //     lisa : (d1 + d2 +d3)
        // })
    }

    // dd = (evt) =>{
    //     evt.oldIndex;  // element's old index within parent
    //     evt.newIndex;  // element's new index within parent
    // }

    render() {
        // const items = this.state.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));
        
        var divitem = [];
        // const li = this.state.sorts.map((value,key)=>{
        //     if(value.sort === '1'){
        //         d1 = "<div style={{backgroundColor:'red',width:'100px'}}>你好1div</div>";
                
        //         // divitem.push(d1);
        //     }else if(value.sort === '2'){
        //         d2 = "<div style={{backgroundColor:'green',width:'100px'}}>你好2div</div>";
        //         // divitem.push(d2);
        //     }else{
        //         d3 = "<div style={{backgroundColor:'yellow',width:'100px'}}>你好3div</div>";
        //         // divitem.push(d3);
        //     }
            
        // })
        // divitem.push(d1);
        // divitem.push(d2);
        // divitem.push(d3);

        // console.log(divitem);
        return (
            <div className="app">
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                            <li key={key}>
                                <Link to={`/content/${value.aid}`}>{value.title}</Link>
                            </li>)
                        })
                    }
                </ul>

                
                <Sortable tag="ul" className="uls" 
                    options={{
                        group: 'shared',
                        disabled :false,
                        // handle: ".my-handle",
                        onUpdate:(/**Event*/evt) =>{               
                            var itemEl = evt.item;  // dragged HTMLElement      
                            // console.log(itemEl);
                            // console.log("原序号"+evt.oldIndex);
                            // console.log("当前序号"+evt.newIndex);
                            this.setState({
                                lisa:'niaho'+evt.oldIndex
                            })           
                        },

                        onEnd: (evt) => {
                            // var ieel = evt.from;
                            let it = [];
                            var id_arr = ''
                            for(var i=0, len=evt.from.children.length;i<len;i++){
                                // id_arr +=','+ evt.from.children[i].getAttribute('drag-id');
                                it.push(evt.from.children[i].getAttribute('drag-id'));
                                // this.state.sorts.push(evt.from.children[i].getAttribute('drag-id'));
                            }
                            // id_arr = id_arr.substr(1);
                            // console.log(it);
                            this.setState({
                                items:it
                            })
                        }
                
                    }}
                >
                    {
                        
                        this.state.sorts.map((value,key)=>{
                            // if(value.sort ==='1'){
                            //    return  <li drag-id={value.id} key={key}><div>你好{value.id}</div></li>
                            // }else if(value.sort === '2'){
                                return( 
                                    <li drag-id={value.id} key={key}>
                                        <div style={{backgroundColor:value.col}}>你好{value.id}</div>
                                    </li>
                                )
                            // }else{
                                // return <li drag-id={value.id} key={key}><div style={{backgroundColor:'yellow'}}>你好{value.id}</div></li>
                            // }

                        })
                    }
                    {/* <li drag-id="div1"><div>你好1div</div></li> 
                    <li drag-id="div2"><div style={{backgroundColor:'green'}}>你好2div</div></li>
                    <li drag-id="div3"><div style={{backgroundColor:'yellow'}}>你好3div</div></li>  */}
                </Sortable>

                

                {/* <div id="div1" style={{backgroundColor:'red',width:'100px'}}>你好1div</div>
                <div id="div2" style={{backgroundColor:'green',width:'100px'}}>你好2div</div>
                <div id="div3" style={{backgroundColor:'yellow',width:'100px'}}>你好3div</div> */}

                {this.state.items.map((value,key)=>{
                    // <div id={value.id} style={{backgroundColor:'red',width:'100px'}}>你好{value}</div>
                   return <div id={value} key={key} style={{backgroundColor:'red',width:'100px'}}>你好{value}</div>
                })}
            </div>
        );
    }
}

export default News;