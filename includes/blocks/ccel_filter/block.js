/**
 * BLOCK: CCEL filter block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/filter', {
	title: __('CCEL Filter', 'ubc-ccel'),
	description: __('CCEL filtering system on the frontpage.', 'ubc-ccel'),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('filter', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
