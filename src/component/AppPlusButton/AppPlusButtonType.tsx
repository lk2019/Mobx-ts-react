import { observer , inject } from 'mobx-react';
import * as React from 'react';
import { IPlusButton ,Button} from 'model'
import { AppForm } from 'components/AppForm'
import { AppFormMenu,AppAction } from 'components/AppMenu'
import { default as  AppDialog } from 'components/AppDialog'

interface IplusButton{
    plusButton? : IPlusButton
    type?:'left'|'right'
}



export default class AppPlusButtonType extends React.Component<IplusButton,{}>{
    constructor(props:any){
        super(props)
        this.handleInputChange=this.handleInputChange.bind(this)
    }

    state = {
        button : [] as Button
    }

    handleInputChange = (e:any) => {
        const { button } = this.state
        const target = e.target;
        button[target.name]=target.value
    }
    saveRole =  () =>{
        this.props.plusButton!.plus(this.props.type,this.state.button)
        this.close()
   }

   close = async () =>{
       await AppDialog.close();
   }
   refForm = React.createRef<AppForm>();
    public render(){
        
        return (
            <div className="app-dialog-form-container">
            <div className="app-dialog-form">
        <form style={{display:'flex',flexDirection:'column'}}>
          <label style={{display:'flex'}}> <div style={{width:100}}>width:</div><input className="ant-input app-input" name="width"  onChange={this.handleInputChange} /></label>
          <label style={{display:'flex'}}> <div style={{width:100}}>actionCode:</div><input className="ant-input app-input" name="actionCode"  onChange={this.handleInputChange} /></label>
          <label style={{display:'flex'}}> <div style={{width:100}}>type:</div><input className="ant-input app-input" name="type"  onChange={this.handleInputChange} /></label>
          <label style={{display:'flex'}}> <div style={{width:100}}>title:</div><input className="ant-input app-input" name="title"  onChange={this.handleInputChange} /></label>
          <label style={{display:'flex'}}> <div style={{width:100}}>className:</div><input className="ant-input app-input" name="className"  onChange={this.handleInputChange} /></label>
        </form>
            </div>
            <AppFormMenu>
                <AppAction title="保存" type="primary" action={()=>this.saveRole()}/>
                <AppAction title="取消" action={()=> this.close()}/>
            </AppFormMenu>
        </div>
        )
    }
}