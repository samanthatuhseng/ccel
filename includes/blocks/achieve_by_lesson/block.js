/**
 * BLOCK: CCEL Achieve by lesson block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/achieve-by-lessons', {
	title: __('Learning Outcome Achieve By Lessons', 'ubc-ccel'),
	description: __(
		'List lessons that achieves current learning outcome.',
		'ubc-ccel'
	),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('achieve by lessons', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
