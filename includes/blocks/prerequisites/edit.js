/**
 * BLOCK: CCEL Prerequisites
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="ccel/prerequisites"
			attributes={{ ...attributes }}
		/>
	);
};

export default Edit;
