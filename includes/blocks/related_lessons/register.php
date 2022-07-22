<?php
/**
 * CCEL block for related lessons.
 *
 * @since 1.0.5
 * @package ubc_ccel
 */

namespace UBC\CCEL\BLOCKS\RelatedLessons;

register_block_type(
	'ccel/related-lesson',
	array(
		'render_callback' => __NAMESPACE__ . '\\render_block',
	)
);
/**
 * Render the content of the block from the server side.
 */
function render_block() {
	return do_shortcode( '[p2p_connected type=related_lessons]' );
}

