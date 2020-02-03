import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="Contact">
				<img
					className="avatar"
					src={
						this.props.avatar == '' ? (
							'https://www.drupal.org/files/issues/default-avatar.png'
						) : (
							this.props.avatar
						)
					}
				/>

				<div className="status">
					<div className="name">{this.props.name}</div>
					<div>
						<div className="statusLight">
							<div className={this.props.online ? 'status-online' : 'status-offline'} />
							<div className="status-text">{this.props.online ? 'Online' : 'Offline'}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
