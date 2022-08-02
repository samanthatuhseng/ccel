<?php
/**
 * CCEL registered blocks.
 *
 * @since 1.0.5
 * @package ubc_ccel
 */

namespace UBC\CCEL;

/**
 * Class to register blocks for the project.
 */
class CCEL_Block {

	/**
	 * Actions and filters.
	 *
	 * @since    1.0.5
	 */
	public function __construct() {

		add_filter( 'block_categories_all', array( $this, 'create_block_category' ), 10, 2 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_assets' ) );

		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/prerequisites/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/build_towards/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/achieve_by_lesson/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/align_with_themes/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/related_lessons/register.php';
		require_once UBC_CCEL_PLUGIN_DIR . 'includes/blocks/ccel_filter/register.php';
	}

	/**
	 * Create CCEL block category
	 *
	 * @param array                   $block_categories Array of categories for block types.
	 * @param WP_Block_Editor_Context $block_editor_context The current block editor context.
	 *
	 * @return array new array of categories for block types.
	 */
	public function create_block_category( $block_categories, $block_editor_context ) {
		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'ccel',
					'title' => esc_html__( 'CCEL', 'ubc-ccel' ),
					'icon'  => 'dashicons-admin-page',
				),
			)
		);
	}

	/**
	 * Enqueue assets required for registered blocks
	 */
	public function enqueue_block_assets() {

		wp_enqueue_script(
			'ubc-ccel-block-scripts',
			UBC_CCEL_PLUGIN_URL . 'dist/blocks.js',
			array(
				'wp-blocks',
				'wp-i18n',
			),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/blocks.js' ),
			true
		);
	}
}

new CCEL_Block();

