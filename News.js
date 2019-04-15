import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SortableList from './sortable-list';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import '../assets/css/news.css'

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
            
            items: ['你好', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
           
        };
    }
    
    componentDidMount = () =>{

    }

    // dd = (evt) =>{
    //     evt.oldIndex;  // element's old index within parent
    //     evt.newIndex;  // element's new index within parent
    // }

    render() {
        const items = this.state.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));
        return (
            <div>
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
                    onUpdate: function (/**Event*/evt) {
                      
                        var itemEl = evt.item;  // dragged HTMLElement
                        // + indexes from onEnd
                        // console.log(itemEl);
                        console.log(itemEl);
                        console.log("原序号"+evt.oldIndex);
                        console.log("当前序号"+evt.newIndex); 
                        // alert(JSON.stringify(itemEl));
                    },

                
                }}

                
                // Defaults to "div" 
                >
                   <li><div>你好1div</div></li> 
                   <li><div style={{backgroundColor:'green'}}>你好2div</div></li>
                   <li><div style={{backgroundColor:'yellow'}}>你好3div</div></li>
                </Sortable>
            

                <div style={{backgroundColor:'red',width:'100px'}}>你好1div</div>
                <div style={{backgroundColor:'green',width:'100px'}}>你好2div</div>
                <div style={{backgroundColor:'yellow',width:'100px'}}>你好3div</div>
            </div>
        );
    }
}

export default News;