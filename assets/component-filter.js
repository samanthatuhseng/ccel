import React, { Component } from 'react';
import Select from 'react-select';
import './filter.scss';
import { IconBook, IconFlag } from './icons';
import { decodeEntities } from '@wordpress/html-entities';

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
		this.getSecondDropdownOptions();
	}

	// dispatching an action based on state change
	componentDidUpdate(_prevProps, prevState) {
		if (prevState.objectType !== this.state.objectType) {
			this.setState({ secondSelected: null, result: [] });
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
						text: 'that achieves the learning outcome',
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

	// get the filtered results list based on selected first and second dropdown
	getFilteredList() {
		if (!this.state.secondSelected) {
			return;
		}
		this.getData(
			// eslint-disable-next-line
			(this.state.objectType === objectTypeOptions[0] ? ubc_ccel.api_endpoint['learning-outcomes-themes'] : ubc_ccel.api_endpoint['learning-outcomes-lessons']) +
			'/' +
			this.state.secondSelected.value,
			(response) => {
				response = response.map((so) => {
					console.log(so);
					return {
						value: so.ID,
						label: decodeEntities(so.post_title),
						link: decodeEntities(so.guid),
					};
				});
				this.setState({
					result: response,
				});
			}
		);
	}

	render() {
		const selectStyles = {
			control: (provided) => ({
				...provided,
				boxShadow: 'none',
				border: 'none',
				backgroundColor: '#2F5D7C',
			}),

			menu: (provided) => ({
				...provided,
				border: 'none',
				boxShadow: 'none',
				backgroundColor: '#FFFFFF',
			}),

			option: (provided, state) => ({
				...provided,
				backgroundColor: state.isFocused && '#2F5D7C',
				color: state.isFocused && '#FFFFFF',
			}),

			singleValue: (provided) => ({
				...provided,
				color: '#FFFFFF',
			}),

			placeholder: (provided) => ({
				...provided,
				color: '#FFFFFF',
			}),

			input: (provided) => ({
				...provided,
				color: '#FFFFFF',
			}),

			dropdownIndicator: (provided) => ({
				...provided,
				svg: {
					fill: 'hsl(0deg 0% 80%)',
				},
				'svg:hover': {
					fill: '#FFFFFF',
				},
			}),
		};

		return (
			<div>
				<div className="overall-styling">
					<span className="text-lining">I am looking for a</span>
					<div className="inline-select-dropdown">
						<Select
							required
							placeholder="Select Object Type"
							value={this.state.objectType}
							clearable={this.state.clearable}
							onChange={this.onChangeObjectType}
							options={objectTypeOptions}
							components={{
								IndicatorSeparator: () => null,
							}}
							styles={selectStyles}
						></Select>
					</div>
					<span className="text-lining">{this.state.text}</span>
					<div className="inline-select-dropdown">
						<Select
							className="dropdown-width"
							required
							placeholder="Select..."
							value={this.state.secondSelected}
							clearable={this.state.clearable}
							searchable={this.state.searchable}
							onChange={this.onChangeSecondSelected}
							options={this.state.secondOptions}
							components={{
								IndicatorSeparator: () => null,
							}}
							styles={selectStyles}
						></Select>
					</div>
				</div>
				<div>
					{this.state.result.map((r) => {
						return (
							<li className="result-list-styling" key={r.value}>
								{this.state.objectType ===
									objectTypeOptions[0] ? (
									<IconFlag />
								) : (
									<IconBook />
								)}
								<a href={r.link}>{r.label}</a>
							</li>
						);
					})}
				</div>
			</div>
		);
	}
}
