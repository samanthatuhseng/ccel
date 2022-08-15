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

		//set the initial state of the component by assigning an object to this.state
		this.state = {
			secondOptions: [],
			text: 'that aligns with the theme of',
		};
	}

	componentDidMount() {
		this.onChangeObjectType();
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.objectType !== prevProps.objectType) {
			const text =
				this.props.objectType === this.props.objectTypeOptions[0]
					? 'that aligns with the theme of'
					: 'that achieves the learning outcome';
			this.setState({
				text,
			});

			this.onChangeObjectType(this.props.objectType);
			this.props.setSecondDropdown(null);
		}
	}

	onChangeObjectType(e) {
		// eslint-disable-next-line camelcase, prettier/prettier, no-undef
		const requestURL = this.props.objectType === this.props.objectTypeOptions[0] ? ubc_ccel.api_endpoint.all_themes : ubc_ccel.api_endpoint.all_learning_outcomes;
		// eslint-disable-next-line prettier/prettier

		// eslint-disable-next-line
		this.props.getData(requestURL, (response) => {
			response = response.map((theme) => {
				return {
					value: theme.id,
					label: decodeEntities(theme.title.rendered),
				};
			});

			this.setState({
				secondOptions: response,
			});

			if (
				this.props.searchParams.has('second_dropdown') &&
				this.props.isLoading &&
				!isNaN(this.props.searchParams.get('second_dropdown'))
			) {
				this.props.setSecondDropdown(
					response.filter((option) => {
						return (
							option.value ===
							parseInt(
								this.props.searchParams.get('second_dropdown')
							)
						);
					})[0]
				);
			}
		});
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
							onChange={this.props.setObjectType}
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
							value={this.props.secondDropdown}
							clearable={this.state.clearable}
							searchable={this.state.searchable}
							onChange={(e) => {
								this.props.setSecondDropdown(e);
							}}
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
