<?php
/**
 * CCEL block for relationship between learning outcome to lessons.
 *
 * @since 1.0.5
 * @package ubc_ccel
 */

namespace UBC\CCEL\BLOCKS\ACHIEVE_BY_LESSONS;

register_block_type(
	'ccel/achieve-by-lessons',
	array(
		'render_callback' => __NAMESPACE__ . '\\render_block',
	)
);
/**
 * Render the content of the block from the server side.
 */
function render_block() {
	return do_shortcode( '[p2p_connected type=learning_outcome_lesson]' );
}

