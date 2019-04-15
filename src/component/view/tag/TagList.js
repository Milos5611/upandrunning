import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
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

    handleChangeFileName = () => {

    };

    render() {
        const {tagList, fileList} = this.props;
        return (
            <section className="tag-wrapper">
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
                <div>
                    <h3>{"Search Result"}</h3>
                    {
                        fileList && fileList.files.map(file => (
                            <Link
                                key={uuid.v4()}
                                to="/editTag"
                                onClick={this.handleChangeFileName}>{file.name}</Link>
                        ))
                    }
                </div>
            </section>
        );
    }
}
