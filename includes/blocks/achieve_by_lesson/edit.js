/**
 * BLOCK: CCEL Achieve by lessons
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="ccel/achieve-by-lessons"
			attributes={{ ...attributes }}
		/>
	);
};

export default Edit;
