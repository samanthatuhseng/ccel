import React, { Fragment, Component } from 'react';
import Filter from './filter';
import List from './list';
import { decodeEntities } from '@wordpress/html-entities';

const objectTypeOptions = [
	{ value: 'learning outcome', label: 'Learning Outcome' },
	{ value: 'lesson', label: 'Lesson' },
];

export default class CCELFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: [],
			objectType: objectTypeOptions[0],
		};
	}

	// get the filtered results list based on selected first and second dropdown
	getFilteredList(url) {
		this.getData(url, (response) => {
			response = response.map((so) => {
				return {
					value: so.ID,
					label: decodeEntities(so.post_title),
					link: ubc_ccel.site_url + '?p=' + so.ID,
					tags: so.tags,
				};
			});

			this.setState({
				content: response,
			});
		});
	}

	getData(url, callback) {
		fetch(url)
			.then((res) => res.json())
			.then((response) => callback(response));
	}

	render() {
		return (
			<Fragment>
				<Filter
					objectType={this.state.objectType}
					objectTypeOptions={objectTypeOptions}
					setObjectType={(value) => {
						this.setState({
							objectType: value,
						});
					}}
					getData={this.getData.bind(this)}
					getFilteredList={this.getFilteredList.bind(this)}
				/>
				<List
					content={this.state.content}
					objectType={this.state.objectType}
					objectTypeOptions={objectTypeOptions}
				/>
			</Fragment>
		);
	}
}
