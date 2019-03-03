import React from 'react';

export const User = (props) => {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h1>The User Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>User Name:{props.username}</p>
						<br></br>
						<p>User Age:{props.userAge}</p>
					</div>
				</div>
			</div>
		);
	}

//  username={this.props.user.name} userAge={this.props.user.age}
