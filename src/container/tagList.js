import {FILE_LIST, TAG_LIST} from "../service/reducer";
import {loadListOfFiles, loadListOfTags} from "../service/actionCreator";
import TagList from "../component/view/tag/TagList";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [TAG_LIST]: state.tagList[TAG_LIST],
        [FILE_LIST]: state.tagList[FILE_LIST],
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadListOfFiles, loadListOfTags}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
