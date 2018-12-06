import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../node_modules/axios/dist/axios.min.js';
import { createContainer } from 'meteor/react-meteor-data';


class TableGuide extends React.Component {

    state = {
        tableGuide: null,
    }

    componentDidMount() {
        const dataUrl = '/api/groups';
        axios.get(dataUrl).then(response => {

            let tableGuideList = response.data;
            return tableGuideList


        }).then(tableGuideList => {

            this.setState({tableGuideList: tableGuideList})

            return tableGuideList;

        })
    }

    render() {


        if (!this.state.tableGuideList) {
            return (<div>loading....</div>)
        }
        else {
            return (
                <div className="table-guide">
                    {this.state.tableGuideList.map(item => {
                        return <div className="guide-element" key={item.id}>
                            <div className={`guide-ball ${item.elementClass}`}></div>
                            <h6>{item.name}</h6></div>
                    })}
                </div>
            )
        }
    }
}


class Sidebar extends React.Component {
    render() {
        if (this.props.activeElement) {
            var theElement = MomentTable.findOne(this.props.activeElement);

            return (
                <div className="col-md-2 sidebar">
                    <div className="backgroundimage">
                        <img src="/app/assets/icons/WaveTile.svg" alt=""/>
                    </div>
                    <div
                        className={`sidebar-icon ${this.props.activeElement ? theElement.className : "No-color" }`}>
                        <h4>{this.props.activeElement ? theElement.Symbol : "" }</h4>
                        <h6>{theElement.Moment_Name}</h6>
                        <div className="momento">Moments</div>



                        <p>{this.props.activeElement ? theElement.Category : "" }</p>
                    </div>
                    <div className="sidebarkey">
                        <img src="/sidebarkey.png" alt=""/>
                    </div>
                    <h4>Definition</h4>

                    <p>{theElement.Definition}</p>
                    <h4>Examples</h4>

                    <p>{theElement.Examples }</p>
                    <h4>Apps Like</h4>

                    <p>{theElement.Apps_like}</p>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

class Moment extends React.Component {

    render() {

        return (



            <div className={`moment ${this.props.elementClass}`}
                 onMouseOver={(e) => {this.props.onHover(e, this.props.name)}}><h4>{this.props.Symbol}</h4>

                <div className="momentName">{this.props.Moment_Name} </div>



            </div>
        )
    }
}

class Group extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //console.log('elements',this.props)
        return (
            <div className="group"> { this.props.elements ? this.props.elements.map(element => {
                return <Moment Symbol={element.Symbol} name={element._id} key={element._id}
                               elementClass={element.className} onHover={this.props.onHover}
                               Moment_Name={element.Moment_Name}/>
            }) : 'No moment found'
            }
            </div>
        )
    }
}


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            group1: null,
            group2: null,
            group3: null,
            group4: null,
            group5: null,
            group6: null,
            group7: null,
            group8: null,
            group9: null,
            group10: null,
            group11: null,
            group12: null,
            group13: null,
            group14: null,
            group15: null,
            group16: null,
            activeElement: null,
            groups: []
        }
    }
    state = {
        tableGuide: null,
    }

    componentDidMount() {
        const dataUrl = '/api/columns';
        axios.get(dataUrl).then(response => {

            let groupList = response.data;
            //console.log('groups',response.data)
            let groups = [];

            _.each(groupList,function(e){
                groups['group'+e.column] = groups['group'+e.column] || []
                groups['group'+e.column].push(e)
            });

            this.setState(groups);

            this.setState({
                elements: response.data
            })

            return groups


        }).then(groups => {

            const sortGroups = (elemArray) => {
                //console.log('group1',this.state.group1)
                const groupObj = {
                    group1: this.state.group1,
                    group2: this.state.group2,
                    group3: this.state.group3,
                    group4: this.state.group4,
                    group5: this.state.group5,
                    group6: this.state.group6,
                    group7: this.state.group7,
                    group8: this.state.group8,
                    group9: this.state.group9,
                    group10: this.state.group10,
                    group11: this.state.group11,
                    group12: this.state.group12,
                    group13: this.state.group13,
                    group14: this.state.group14,
                    group15: this.state.group15,
                    group16: this.state.group16,
                };
                //elemArray.map(elem => {
                //    if (elem.Id >= 0 && elem.Id <= 17) {
                //        groupObj.group1.push(elem);
                //    } else if (elem.Id >= 11 && elem.Id <= 19) {
                //        groupObj.group2.push(elem);
                //    } else if (elem.Id >= 20 && elem.Id <= 26) {
                //        groupObj.group3.push(elem);
                //    } else if (elem.Id >= 27 && elem.Id <= 35) {
                //        groupObj.group4.push(elem);
                //    } else if (elem.Id >= 36 && elem.Id <= 44) {
                //        groupObj.group5.push(elem);
                //    } else if (elem.Id >= 45 && elem.Id <= 51) {
                //        groupObj.group6.push(elem);
                //    } else if (elem.Id >= 52 && elem.Id <= 58) {
                //        groupObj.group7.push(elem);
                //    } else if (elem.Id >= 59 && elem.Id <= 65) {
                //        groupObj.group8.push(elem);
                //    } else if (elem.Id >= 66 && elem.Id <= 72) {
                //        groupObj.group9.push(elem);
                //    } else if (elem.Id >= 73 && elem.Id <= 79) {
                //        groupObj.group10.push(elem);
                //    } else if (elem.Id >= 80 && elem.Id <= 86) {
                //        groupObj.group11.push(elem);
                //    } else if (elem.Id >= 87 && elem.Id <= 93) {
                //        groupObj.group12.push(elem);
                //    } else if (elem.Id >= 94 && elem.Id <= 99) {
                //        groupObj.group13.push(elem);
                //    } else if (elem.Id >= 100 && elem.Id <= 106) {
                //        groupObj.group14.push(elem);
                //    } else if (elem.Id >= 107 && elem.Id <= 115) {
                //        groupObj.group15.push(elem);
                //    } else if (elem.Id >= 116 && elem.Id <= 125) {
                //        groupObj.group16.push(elem);
                //    }
                //});
                return groupObj
            }

            const sorted = sortGroups(this.state.elements);
            this.setState({...sorted});
        })
        //    .then(groupList =>{
        //
        //
        //
        //    //console.log('state',this.state);
        //
        //    //const dataUrl = '/api/columns';
        //    //axios.get(dataUrl).then(response => {
        //    //    //console.log('response', response);
        //    //    let returnedData = response.data;
        //    //    this.setState({
        //    //        elements: returnedData
        //    //    })
        //    //    return returnedData
        //    //})
        //
        //})
    }

    onHover = (event, key) => {
         //console.log('event', event);
         //console.log('Id', key)

        this.setState({
            activeElement: key
        })
    }



    render() {
        if (this.state.elements.length) {
            return (
                <div className="table-of-moments hidden-sm hidden-xs">
                    <div className="container">

                        <h3>Explore our Moments</h3>

                        <div className="col-sm-10">
                            <div className="moments-table">

                                <Group elements={this.state.group1} onHover={this.onHover}/>
                                <Group elements={this.state.group2} onHover={this.onHover}/>
                                <Group elements={this.state.group3} onHover={this.onHover}/>
                                <Group elements={this.state.group4} onHover={this.onHover}/>
                                <Group elements={this.state.group5} onHover={this.onHover}/>
                                <Group elements={this.state.group6} onHover={this.onHover}/>
                                <Group elements={this.state.group7} onHover={this.onHover}/>
                                <Group elements={this.state.group8} onHover={this.onHover}/>
                                <Group elements={this.state.group9} onHover={this.onHover}/>
                                <Group elements={this.state.group10} onHover={this.onHover}/>
                                <Group elements={this.state.group11} onHover={this.onHover}/>
                                <Group elements={this.state.group12} onHover={this.onHover}/>
                                <Group elements={this.state.group13} onHover={this.onHover}/>
                                <Group elements={this.state.group14} onHover={this.onHover}/>
                                <Group elements={this.state.group15} onHover={this.onHover}/>
                                <Group elements={this.state.group16} onHover={this.onHover}/>


                            </div>

                            <TableGuide></TableGuide>
                        </div>
                        <Sidebar activeElement={this.state.activeElement} elements={this.state.elements}></Sidebar>

                    </div>
                    <div className="container">

                    </div>

                </div>
            )
        } else {

            return null
        }

    }
}


export default Table;
