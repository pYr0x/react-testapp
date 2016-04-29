import CanReact from 'can-react/can-react';
import Map from 'can/map/';
import 'can/map/define/';
import renderer from './hello-world.jsx';


export const ViewModel = Map.extend({
	define: {
		message: {
			value: 'Hello'
		},
		firstname: {
			value: "World!"
		},
		liked: {
			value: false
		}
	}
});

export default CanReact.createClass({
	name: 'HelloWorld',
	ViewModel,
	changeMessage: function(str){
		this.state.attr('firstname', str);
	},
	render: function() {
		return renderer(this);
	}
});