/**
 * BLOCK: CCEL Prerequisites block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/prerequisites', {
	title: __('Learning Outcome Prerequisites', 'ubc-ccel'),
	description: __(
		'List CCEL Learning Outcome prerequisites list',
		'ubc-ccel'
	),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('prerequisites', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
