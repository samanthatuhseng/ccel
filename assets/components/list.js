import React, { Component } from 'react';
import { IconBook, IconFlag } from './icons';

export default class List extends Component {
	render() {
		return (
			<ul className="result-list">
				{this.props.content.map((r) => {
					return (
						<li key={r.value}>
							<a href={r.link}>
								<div className="result-list__title">
									{this.props.objectType ===
									this.props.objectTypeOptions[0] ? (
										<IconFlag />
									) : (
										<IconBook />
									)}
									{r.label}
								</div>
							</a>
							<ul className="result-list__tags">
								{r.tags.map((tag, index) => {
									return <li key={index}>{tag}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		);
	}
}
