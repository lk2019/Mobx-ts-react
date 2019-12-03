import {observer, inject} from 'mobx-react';
import * as React from 'react';
import "src/style/AppRuler.css"
import IRulerIcon from "./RulerIcon"
import { Iruler } from 'src/model'

interface IRRuler {
  ruler?: Iruler  //  这里比较关键 ？表示可或缺，如果没有就会报错。
}


@inject("ruler")
@observer
class IRuler extends React.Component <IRRuler,{}>{
  public render() {
    const {width} = this.props.ruler!

    let margin=0
    return (
      <div className="Ruler">{width.map((value,index) => {
        margin=margin+value
        return <IRulerIcon margin={margin} key={index} index={index} value={value}/>
      })}
        
      </div>
    );
  }
}

export default IRuler;
