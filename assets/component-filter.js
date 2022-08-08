import React, { Component } from 'react';
import Select from 'react-select';
// import axios from 'axios';

/**
 * The Filter component.
 */

const objectTypeOptions = [
	{ value: 'learning outcome', label: 'Learning Outcome' },
	{ value: 'lesson', label: 'Lesson' },
];

export default class HomePageFilter extends Component {
	constructor(props) {
		super(props);

		this.onChangeObjectType = this.onChangeObjectType.bind(this);
		this.onChangeSecondSelected = this.onChangeSecondSelected.bind(this);

		//set the initial state of the component by assigning an object to this.state
		this.state = {
			objectType: objectTypeOptions[0],
			secondSelected: '',
			secondOptions: [],
			result: [],
			text: 'that aligns with the theme of',
		};
	}

	// dispatching an action based on state change
	componentDidUpdate(prevProps, prevState) {
		if (prevState.objectType !== this.state.objectType) {
			this.getSecondDropdownOptions();
		}

		if (prevState.secondSelected !== this.state.secondSelected) {
			this.getFilteredList();
		}
	}

	getSecondDropdownOptions() {
		// if selected value of the first dropdown is Learning Outcome then get Theme options for second dropdown
		if (this.state.objectType === objectTypeOptions[0]) {
			// eslint-disable-next-line
			this.getData(ubc_ccel.api_endpoint.all_themes, (response) => {
				response = response.map((theme) => {
					return { value: theme.id, label: theme.title.rendered };
				});
				this.setState({
					secondOptions: response,
					text: 'that aligns with the theme of',
				});
			});
		}
		// if selected value of the first dropdown is Lesson then get Learning Outcome options for second dropdown
		if (this.state.objectType === objectTypeOptions[1]) {
			this.getData(
				// eslint-disable-next-line
				ubc_ccel.api_endpoint.all_learning_outcomes,
				(response) => {
					response = response.map((lo) => {
						return { value: lo.id, label: lo.title.rendered };
					});
					this.setState({
						secondOptions: response,
						text: 'that teaches the learning objective',
					});
				}
			);
		}
	}

	getData(url, callback) {
		fetch(url)
			.then((res) => res.json())
			.then((response) => callback(response));
		// .catch((error) => console.log(error));
	}

	onChangeObjectType(e) {
		this.setState({
			objectType: e,
		});
	}

	onChangeSecondSelected(e) {
		this.setState({
			secondSelected: e,
		});
	}

	// Temporary solution to get actual links of result's list items.
	replaceSpecialChar(string) {
		return string.replace('#038;', '&');
	}

	// get the filtered results list based on selected first and second dropdown
	getFilteredList() {
		const that = this;
		this.getData(
			// eslint-disable-next-line
			(this.state.objectType === objectTypeOptions[0] ? ubc_ccel.api_endpoint['learning-outcomes-themes']: ubc_ccel.api_endpoint['learning-outcomes-lessons']) +
				'/' +
				this.state.secondSelected.value,
			(response) => {
				response = response.map((so) => {
					return {
						value: so.ID,
						label: so.post_title,
						link: that.replaceSpecialChar(so.guid),
					};
				});
				this.setState({
					result: response,
				});
			}
		);
	}

	render() {
		return (
			<div>
				<div style={{ display: 'flex' }}>
					<p>I am looking for a</p>
					<div style={{ padding: '0px 20px 0px 20px' }}>
						<Select
							required
							placeholder="Select Object Type"
							value={this.state.objectType}
							clearable={this.state.clearable}
							searchable={this.state.searchable}
							onChange={this.onChangeObjectType}
							options={objectTypeOptions}
						></Select>
					</div>
					<span>{this.state.text}</span>
					<div style={{ padding: '0px 20px 0px 20px' }}>
						<Select
							required
							placeholder="Select..."
							value={this.state.secondSelected}
							clearable={this.state.clearable}
							searchable={this.state.searchable}
							onChange={this.onChangeSecondSelected}
							options={this.state.secondOptions}
						></Select>
					</div>
				</div>
				<div>
					{this.state.result.map((r) => {
						return (
							<li key={r.value}>
								<a href={r.link}>{r.label}</a>
							</li>
						);
					})}
				</div>
			</div>
		);
	}
}
