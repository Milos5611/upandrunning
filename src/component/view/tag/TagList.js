import React, {Fragment} from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

export default class TagList extends React.Component {
    static propTypes = {
        loadListOfTags: PropTypes.func,
        loadListOfFiles: PropTypes.func,
        tagList: PropTypes.array,
        fileList: PropTypes.object,
    };

    state = {
        page: 1
    };

    componentDidMount() {
        const {loadListOfTags} = this.props;
        loadListOfTags();
    }

    handleDisplayFilesFromTag = (event) => {
        const {loadListOfFiles} = this.props;
        const {page} = this.state;
        loadListOfFiles(page, event.target.id);
    };

    render() {
        const {tagList, fileList} = this.props;
        return (
            <Fragment>
                <aside>
                    <ul>
                        <h2>{"Tags"}</h2>
                        {
                            tagList && tagList.map(item => (
                                <li
                                    key={uuid.v4()}
                                    id={item.tag}
                                    onClick={this.handleDisplayFilesFromTag}>
                                    {`${item.tag} (${item.files})`}
                                </li>
                            ))
                        }
                    </ul>
                </aside>
                <section>
                    <h3>{"Search Result"}</h3>
                    {
                        fileList && fileList.files.map(file => (
                            <span key={uuid.v4()}>{file.name}</span>
                        ))
                    }
                </section>
            </Fragment>
        );
    }
}
