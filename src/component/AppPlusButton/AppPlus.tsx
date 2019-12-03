import { observer , inject } from 'mobx-react';
import * as React from 'react';
import { IPlusButton } from 'model'
import { Icon } from "antd"
import { default as  AppDialog } from 'components/AppDialog'
import AppPlusButtonType from "./AppPlusButtonType"

interface IplusButton{
    plusButton? : IPlusButton
    left?:boolean
    right?:boolean
}

@inject("plusButton")
@observer
export default class AppPlus extends React.Component<IplusButton,{}>{

    public constructor(props:any){
        super(props)
        this.increaseleft=this.increaseleft.bind(this);
        this.increaseright=this.increaseright.bind(this);
    }
    public increaseleft = () => {
        AppDialog.open(<AppPlusButtonType plusButton={this.props.plusButton!} type='left'/>,{title:"新增左侧按钮"});
    }

    public increaseright = () => {
        AppDialog.open(<AppPlusButtonType plusButton={this.props.plusButton!} type='right' />,{title:"新增左侧按钮"});
    }

    public renderleft(){
        return (
            <div className="app-leftplus" onClick={this.increaseleft}>
                <Icon type="plus-circle" style={{float:'left',transform: 'translateY(20%)'}}/>
                <div style={{float:'left'}}>新增左侧按钮</div> 
            </div>

        )
    }

    public renderright(){
        return (
            <div className="app-rightplus" onClick={this.increaseright}>
                <Icon type="plus-circle" style={{float:'right',transform: 'translateY(20%)'}}/>
                <div style={{float:'right'}}>新增右侧按钮</div>  
            </div>

        )
    }

    public render(){
        const left = this.props.left || false 
        const right = this.props.right || false
        return (
        <React.Fragment>
            {left ?this.renderleft():<React.Fragment/>}
            {right ?this.renderright():<React.Fragment/>}
        </React.Fragment>
        )
    }
}