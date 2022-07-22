/**
 * BLOCK: CCEL Align with Themes
 */

const ServerSideRender = wp.serverSideRender;

const Edit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="ccel/align-with-themes"
			attributes={{ ...attributes }}
		/>
	);
};

export default Edit;
