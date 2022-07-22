<?php
/**
 * Load individual block patterns
 *
 * @package ubc-block-patterns
 */

namespace UBC\BLOCKPATTERNS\CCEL;

$content = file_get_contents( __DIR__ . '/pattern.html', 'r' );

register_block_pattern(
	UBC_CCEL_BLOCKPATTERNS_NAMESPACE . '/lo-v4',
	array(
		'title'      => __( 'Learning Outcome V4', 'ubc-block-patterns' ),
		'categories' => array( 'ubcccel_lo' ),
		'blockTypes' => array( 'core/paragraph', 'core/post-content' ),
		'postTypes'  => array( 'ccel_lo' ),
		'content'    => $content ? $content : '',
	)
);
