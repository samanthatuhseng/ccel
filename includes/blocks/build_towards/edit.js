/**
 * BLOCK: CCEL Prerequisites
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="ccel/build-towards"
			attributes={{ ...attributes }}
		/>
	);
};

export default Edit;
