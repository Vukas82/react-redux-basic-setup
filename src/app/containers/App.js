import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Main } from '../components/Main';
import { setName, setAge } from '../actions/userActions';
// import { setName, setAge } from '../actions/userActions';

// changeUsername={() => this.props.promeniIme('Putin')} changeAge={() => this.props.promeniGodine(12)}
//  username={this.props.user.name} userAge={this.props.user.age}

class App extends Component {
	render() {
		return (
			<div className="container">
				<Main changeUsername={() => this.props.setName('Putin')} changeAge={() => this.props.setAge(12)} />
				<User username={this.props.user.name} userAge={this.props.user.age} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
	math: state.math,
});

const mapDispatchToProps = dispatch => ({
	setName: (name) => {
		dispatch(setName(name));
	},
	setAge: (age) => {
		dispatch(setAge(age));
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
