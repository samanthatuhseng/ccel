/**
 * BLOCK: CCEL align with themes block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/align-with-themes', {
	title: __('Learning Outcome Align with Themes', 'ubc-ccel'),
	description: __(
		'List themes that current learning outcome align with.',
		'ubc-ccel'
	),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('align with themes', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
