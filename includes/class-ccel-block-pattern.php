<?php
/**
 * CCEL block patterns.
 *
 * @since 1.0.4
 * @package ubc_ccel
 */

namespace UBC\CCEL;

/**
 * Class to generate block patterns for the project.
 */
class CCEL_Block_Pattern {

	/**
	 * Actions and filters.
	 *
	 * @since    1.0.4
	 */
	public function __construct() {

		add_action( 'enqueue_block_assets', array( $this, 'enqueue_script_styles' ) );

		register_block_pattern_category(
			'ubcccel_theme',
			array( 'label' => __( 'CCEL - Theme', 'ubc-block-patterns' ) )
		);

		register_block_pattern_category(
			'ubcccel_lo',
			array( 'label' => __( 'CCEL - Learning Outcome', 'ubc-block-patterns' ) )
		);

		register_block_pattern_category(
			'ubcccel_lesson',
			array( 'label' => __( 'CCEL - Lesson', 'ubc-block-patterns' ) )
		);

		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/theme-v1/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/theme-v2/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/theme-v3/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lo-v1/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lo-v2/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lo-v3/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lo-v4/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lesson-v1/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lesson-v2/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/block-patterns/lesson-v3/register.php';
	}

	/**
	 * Enqueue assets required for block patterns
	 */
	public function enqueue_script_styles() {
		wp_enqueue_style(
			'ubc-ccel-filter-patterns-style',
			UBC_CCEL_PLUGIN_URL . 'dist/patterns.css',
			array(),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/patterns.css' )
		);

		wp_enqueue_script(
			'ubc-ccel-filter-patterns-scripts',
			UBC_CCEL_PLUGIN_URL . 'dist/patterns.js',
			array(
				'jquery',
			),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/patterns.js' ),
			true
		);
	}
}

new CCEL_Block_Pattern();

