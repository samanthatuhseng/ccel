<?php
/**
 * CCEL block for relationship between learning outcome to learning outcome.
 *
 * @since 1.0.5
 * @package ubc_ccel
 */

namespace UBC\CCEL\BLOCKS\BUILD_TOWARDS;

register_block_type(
	'ccel/build-towards',
	array(
		'render_callback' => __NAMESPACE__ . '\\render_block',
	)
);
/**
 * Render the content of the block from the server side.
 */
function render_block() {
	return do_shortcode( '[p2p_connected_to type=learning_outcome_prerequisites]' );
}

