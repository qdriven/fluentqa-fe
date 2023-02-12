
import React from "react";

export class MoreShoopingList extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        console.log(props)
        this.state ={shopping: props.shopping}
    }
    
    render() {
        return (
            <div id = "shoppinglist">
                <h1>Shopping List:{this.props.shopping}</h1>
                 <ul>
                    <li>L1</li>
                    <li>L2</li>
                    <li>L3</li>
                    <li>{this.props.shopping}</li>
                 </ul>
            </div>
        )
    }
}

export default MoreShoopingList