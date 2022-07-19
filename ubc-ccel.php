<?php
/**
 * Plugin Name:       UBC CCEL
 * Plugin URI:        https://github.com/ubc/ccel
 * Description:       The plugin powers the CCEL project with lesson, learning objective and theme custom post types. Create block templates for each custom post types. Create filtering system to optimize the user experience to find what user needs.
 * Version:           1.0.4
 * Author:            Samantha Tseng, Richard Tape, Kelvin Xu
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ubc-ccel
 *
 * @package ubc_ccel
 */

namespace UBC\CCEL;

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

define( 'UBC_CCEL_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'UBC_CCEL_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'UBC_CCEL_BLOCKPATTERNS_NAMESPACE', 'ccel' );

/**
 * Plugin initialization
 *
 * @return void
 */
function init() {
	require_once UBC_CCEL_PLUGIN_DIR . 'includes/class-ccel-core.php';
	require_once UBC_CCEL_PLUGIN_DIR . 'includes/class-ccel-block-pattern.php';
}

add_action( 'plugin_loaded', __NAMESPACE__ . '\\init' );
