/**
 * BLOCK: CCEL Build Towards block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/build-towards', {
	title: __('Learning Outcome Build Towards', 'ubc-ccel'),
	description: __(
		'List CCEL Learning Outcome build towards list',
		'ubc-ccel'
	),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('build towards', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
