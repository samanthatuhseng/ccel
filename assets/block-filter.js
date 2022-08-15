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
		// eslint-disable-next-line camelcase, prettier/prettier, no-undef
		const requestURL = this.state.objectType === objectTypeOptions[0] ? ubc_ccel.api_endpoint.all_themes : ubc_ccel.api_endpoint.all_learning_outcomes;
		// eslint-disable-next-line prettier/prettier
		const text = this.state.objectType === objectTypeOptions[0] ? 'that aligns with the theme of' : 'that achieves the learning outcome';

		// eslint-disable-next-line
		this.getData(requestURL, (response) => {
			response = response.map((theme) => {
				return {
					value: theme.id,
					label: decodeEntities(theme.title.rendered),
				};
			});
			this.setState({
				secondOptions: response,
				text,
			});
		});
	}

	getData(url, callback) {
		fetch(url)
			.then((res) => res.json())
			.then((response) => callback(response));
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
