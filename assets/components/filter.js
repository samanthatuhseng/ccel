import React, { Component } from 'react';
import Select from 'react-select';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * The Filter component.
 */

export default class Filter extends Component {
	constructor(props) {
		super(props);

		this.onChangeObjectType = this.onChangeObjectType.bind(this);
		this.onChangeSecondSelected = this.onChangeSecondSelected.bind(this);

		//set the initial state of the component by assigning an object to this.state
		this.state = {
			secondSelected: '',
			secondOptions: [],
			text: 'that aligns with the theme of',
		};
	}

	componentDidMount() {
		this.onChangeObjectType(this.props.objectTypeOptions[0]);
	}

	onChangeObjectType(newObjectType) {
		// eslint-disable-next-line camelcase, prettier/prettier, no-undef
		const requestURL = newObjectType === this.props.objectTypeOptions[0] ? ubc_ccel.api_endpoint.all_themes : ubc_ccel.api_endpoint.all_learning_outcomes;
		// eslint-disable-next-line prettier/prettier
		const text = newObjectType === this.props.objectTypeOptions[0] ? 'that aligns with the theme of' : 'that achieves the learning outcome';

		// eslint-disable-next-line
		this.props.getData(requestURL, (response) => {
			response = response.map((theme) => {
				return {
					value: theme.id,
					label: decodeEntities(theme.title.rendered),
				};
			});

			this.props.setObjectType(newObjectType);

			this.setState({
				secondOptions: response,
				text,
				secondSelected: null,
			});
		});
	}

	onChangeSecondSelected(newSecondDropdownValue) {
		this.setState({
			secondSelected: newSecondDropdownValue,
		});

		if (newSecondDropdownValue) {
			this.props.getFilteredList(
				(this.props.objectType === this.props.objectTypeOptions[0]
					? ubc_ccel.api_endpoint['learning-outcomes-themes']
					: ubc_ccel.api_endpoint['learning-outcomes-lessons']) +
					'/' +
					newSecondDropdownValue.value
			);
		}
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
							value={this.props.objectType}
							clearable={this.state.clearable}
							onChange={this.onChangeObjectType}
							options={this.props.objectTypeOptions}
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
			</div>
		);
	}
}
