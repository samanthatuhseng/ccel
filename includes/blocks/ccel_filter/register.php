<?php
/**
 * CCEL block for Filter.
 *
 * @since 1.0.5
 * @package ubc_ccel
 */

namespace UBC\CCEL\BLOCKS\Filter;

register_block_type(
	'ccel/filter',
	array(
		'render_callback' => __NAMESPACE__ . '\\render_block',
	)
);
/**
 * Render the content of the block from the server side.
 */
function render_block() {
	return do_shortcode( '[ccel_filter]' );
}

