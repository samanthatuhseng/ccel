<?php
/**
 * CCEL Core class.
 *
 * @since 1.0.0
 * @package ubc_ccel
 */

namespace UBC\CCEL;

/**
 * Class to initiate functionalities that powers the site
 */
class CCELCore {

	/**
	 * Actions and filters to set up the project.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_filter_assets' ) );
	}

	public function enqueue_filter_assets() {
		if( ! is_front_page() ) {
			return;
		}

		wp_enqueue_script(
			'ubc-ccel-filter-script',
			UBC_CCEL_PLUGIN_URL . 'dist/filter.js',
			array(),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/filter.js' ),
			true
		);

		wp_register_style(
			'ubc-h5p-ownership-transfer-css',
			UBC_CCEL_PLUGIN_URL . 'dist/filter.css',
			array(),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/filter.css' )
		);
		wp_enqueue_style( 'ubc-h5p-ownership-transfer-css' );
	}

}

new CCELCore();

