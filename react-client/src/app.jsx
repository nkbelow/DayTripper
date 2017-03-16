import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import MapView from './components/map.jsx';
import EventList from './components/event-list.jsx';

var dummyData = [
	{
	eventTitle: 'Breakfast',
	eventDescription: 'Eat',
	business: 'McDonalds',
	eventHours: '10AM - 11AM',
	phone: '415-111-1111',
	address: '111 Street St San Francisco, CA 94102',
	longitude: 31.45,
	latitude: 34.45
	},

	{
	eventTitle: 'Afternoon',
	eventDescription: 'Rest!',
	business: 'Some cafe',
	eventHours: '1PM - 2PM',
	phone: '415-111-2222',
	address: '222 Holly St San Francisco, CA 94102',
	longitude: 38.45,
	latitude: 88.45
	},

	{
	eventTitle: 'Clubbing',
	eventDescription: 'Turn up',
	business: 'Temple',
	eventHours: '9AM - 2AM',
	phone: '415-333-4444',
	address: '333 Street St San Francisco, CA 94106',
	longitude: 77.45,
	latitude: 89.45
	}
]

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: dummyData
		}
	}

	render () {
		return (
			<div>
				<h1>DAY TRIPPER</h1>
				<Search />
				<MapView />
				<EventList events={this.state.events}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));