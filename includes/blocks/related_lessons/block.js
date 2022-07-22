/**
 * BLOCK: CCEL Related Lesson block.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ccel/related-lesson', {
	title: __('Related Lesson', 'ubc-ccel'),
	description: __('List related lessons.', 'ubc-ccel'),
	icon: 'book',
	keywords: [__('ccel', 'ubc-ccel'), __('related lessons', 'ubc-ccel')],
	category: 'ccel',
	edit: Edit,
	save: () => null,
});
