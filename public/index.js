//class to import image with preset color and fontsize
class App extends React.Component {
// on submit response
	onSubmit = async (event) => {
		event.preventDefault();
		const response = await axios.get('/flag');
		alert(response.data);
	}
//different styles like color and fontsize defined
	render() {
		var style = {
	      color: 'white',
	      fontSize: 150,
	      textAlign: 'center',
	      cursor: 'pointer',
	    };
		return(
			<div>
			//image is imported
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
