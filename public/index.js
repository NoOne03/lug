class App extends React.Component {

	onSubmit = async (event) => {
		event.preventDefault();
		const response = await axios.get('/flag');
		alert(response.data);
	}

	render() {
		var style = {
	      color: 'white',
	      fontSize: 150,
	      textAlign: 'center',
	      cursor: 'pointer',
	    };
		return(
			<div>
				<img src="./photo.jpg" />
				<button style={style} type="submit" onClick={this.onSubmit}>Click Here to Join LUG!</button>
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<App />
	</div>
	, document.getElementById('root')
);