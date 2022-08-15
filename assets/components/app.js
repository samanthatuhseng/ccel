import React, { Fragment, Component } from 'react';
import Filter from './filter';
import List from './list';
import { decodeEntities } from '@wordpress/html-entities';

const objectTypeOptions = [
	{ value: 'learning_outcome', label: 'Learning Outcome' },
	{ value: 'lesson', label: 'Lesson' },
];

export default class CCELFilter extends Component {
	constructor(props) {
		super(props);

		this.onObjectTypeChange = this.onObjectTypeChange.bind(this);
		this.onSecondDropdownChange = this.onSecondDropdownChange.bind(this);

		this.state = {
			content: [],
			objectType: objectTypeOptions[0],
			secondDropdown: null,
		};

		this.searchParams = new URLSearchParams(window.location.search);
		this.loading = true;
	}

	componentDidMount() {
		if (this.searchParams.has('object_type')) {
			this.setState({
				objectType: objectTypeOptions.filter((option) => {
					return (
						option.value === this.searchParams.get('object_type')
					);
				})[0],
			});
		} else {
			this.setState({
				objectType: objectTypeOptions[0],
			});
			this.loading = false;
		}
	}

	// get the filtered results list based on selected first and second dropdown
	getFilteredList(url) {
		this.getData(url, (response) => {
			response = response.map((so) => {
				return {
					value: so.ID,
					label: decodeEntities(so.post_title),
					// eslint-disable-next-line camelcase, no-undef
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

	onObjectTypeChange(newSelected) {
		if (newSelected === this.state.objectType) {
			return;
		}
		this.setState({
			objectType: newSelected,
			secondDropdown: null,
			content: [],
		});

		this.searchParams.set('object_type', newSelected.value);
		this.searchParams.delete('second_dropdown');
		window.history.pushState(
			newSelected,
			'',
			window.location.pathname + '?' + this.searchParams.toString()
		);
	}

	onSecondDropdownChange(newSelected) {
		if (newSelected === this.state.secondDropdown) {
			return;
		}

		this.setState({
			secondDropdown: newSelected,
			content: [],
		});

		if (newSelected) {
			this.getFilteredList(
				(this.state.objectType === objectTypeOptions[0]
					? ubc_ccel.api_endpoint['learning-outcomes-themes']
					: ubc_ccel.api_endpoint['learning-outcomes-lessons']) +
					'/' +
					newSelected.value
			);

			this.searchParams.set('second_dropdown', newSelected.value);
			window.history.pushState(
				newSelected,
				'',
				window.location.pathname + '?' + this.searchParams.toString()
			);
		}
	}

	render() {
		return (
			<Fragment>
				<Filter
					objectType={this.state.objectType}
					objectTypeOptions={objectTypeOptions}
					setObjectType={this.onObjectTypeChange}
					secondDropdown={this.state.secondDropdown}
					setSecondDropdown={this.onSecondDropdownChange}
					getData={this.getData.bind(this)}
					searchParams={this.searchParams}
					isLoading={this.loading}
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
