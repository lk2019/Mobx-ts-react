import * as React from 'react';

interface IProps {
	width?: number;
	actionCode?: string;
	type?: 'primary' | 'default'|'dangerous';
	action?: () => void;
	title?: string;
	clickType?:boolean;
}
export default class extends React.Component<IProps> {
	state={
		clickType:this.props.clickType||true
	}
	changeClickType=(type:boolean)=>{
		this.setState({clickType:type})
	}
	renderButton = () => {
		let {clickType} = this.state
		// if(!hasPermission(this.props.actionCode)) return <React.Fragment/>
		return <span className="app-button"
			data-type = {this.props.type||'default'}
			style={{ width: this.props.width || 100 }}
			onClick={() => { clickType&&this.props.action && this.props.action() }}>
			{this.props.title || ''}
		</span>
	}

	render() {
		return this.renderButton()
	}
}