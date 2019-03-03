import React from 'react';

export const Main = (props) => {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h1>The Main Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button
							className="btn btn-primary"
							onClick={() => props.changeUsername()}
						>Change the Username</button>
                        <br></br>
                        <button
							className="btn btn-primary"
							onClick={() => props.changeAge()}
						>Change the UserAge</button>
					</div>
				</div>
			</div>
		);
	}



//  changeUsername={() => this.props.promeniIme('Putin')} changeAge={() => this.props.promeniGodine(62)}