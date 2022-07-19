<?php
/**
 * Load individual block patterns
 *
 * @package ubc-block-patterns
 */

namespace UBC\BLOCKPATTERNS\CCEL;

$content = file_get_contents( __DIR__ . '/pattern.html', 'r' );

register_block_pattern(
	UBC_CCEL_BLOCKPATTERNS_NAMESPACE . '/theme-v3',
	array(
		'title'      => __( 'Theme V3', 'ubc-block-patterns' ),
		'categories' => array( 'ubcccel_theme' ),
		'blockTypes' => array( 'core/paragraph', 'core/post-content' ),
		'postTypes'  => array( 'ccel_theme' ),
		'content'    => $content ? $content : '',
	)
);
