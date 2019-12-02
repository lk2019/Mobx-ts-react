import {observer,inject} from 'mobx-react';
import * as React from 'react';
import "src/style/AppRuler.css"
import { observable, action } from 'mobx';
import { Iruler } from '../../model/Iruler'

interface RulerIndex{
    margin?:number
    ruler?: Iruler 
    index?:number
    value?:number
}
@inject("ruler")
@observer
class IRulerIcon extends React.Component<RulerIndex,{}> {

    @observable public disX=0;
    @observable public needX=this.props.margin||100;
      constructor(props:any){
          super(props);
          this.needX=this.props.ruler!.width[ this.props.index||0]||100
          this.fnDown=this.fnDown.bind(this)
      }
    @action
    public fnDown =(e:any) => {
      
      const event = e || window.event;
      const target = event.currentTarget || event.srcElement;
      const margin = this.props.margin || 0
      const value = this.props.value||0
      this.disX=event.clientX - target.offsetLeft+margin-value
      console.log(this.disX)
      document.onmousemove = this.fnMove.bind(this);
      document.onmouseup = this.fnUp.bind(this);
     }
  
    @action
    public fnMove = (e:any) => {
    const event = e|| window.event ;
    const index = this.props.index||0
    // const value = this.props.value||0
    this.needX = event.clientX-this.disX>0?event.clientX-this.disX:0;
    this.props.ruler!.set(this.needX,index)
     }
  
     @action
     public fnUp = () => {
      document.onmousemove = null;
      document.onmouseup = null;
     }
  
    public render() {
      return (
          <div className="Ruler-div" style={{left:this.props.margin}} onMouseDown={this.fnDown}>
              <div className="Ruler-data" >{this.needX}</div>
              <div className="Ruler-Icon"   >
              </div>
          </div>
      );
    }
}


export default IRulerIcon;