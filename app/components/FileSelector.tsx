import {is} from "immutable";
import PropTypes from "prop-types";
import * as React from "react";
import { connect } from "react-redux";
import { List } from "react-virtualized";
import { activeFile, deleteFile, filePackageSelect, selectFile } from "../AC";
import { dlg } from "../module/global_app";
import { mapToArr } from "../utils";
import FileListItem from "./FileListItem";
import ProgressBars from "./ProgressBars";

const dialog = window.electron.remote.dialog;

const appBarStyle = {
  width: "calc(100% - 85px)",
};

interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  path: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

interface IFileRedux {
  active: boolean;
  extension: string;
  filename: string;
  fullpath: string;
  id: string;
  lastModifiedDate: Date;
}

interface IFileSelectorProps {
  activeFile: (id: string, active?: boolean) => void;
  deleteFile: (fileId: string) => void;
  operation: string;
  files: IFileRedux[];
  selectFile: (fullpath: string, name?: string, lastModifiedDate?: Date, size?: number) => void;
  selectedFilesPackage: boolean;
  selectingFilesPackage: boolean;
  filePackageSelect: (files: string[]) => void;
}

class FileSelector extends React.Component<IFileSelectorProps, {}> {
  static contextTypes = {
    locale: PropTypes.string,
    localize: PropTypes.func,
  };

  componentDidMount() {
    $(".nav-small-btn, .file-setting-item").dropdown({
      alignment: "left",
      belowOrigin: false,
      gutter: 0,
      inDuration: 300,
      outDuration: 225,
    });
  }

  shouldComponentUpdate(nextProps: IFileSelectorProps) {
    const { files, selectedFilesPackage, selectingFilesPackage } = this.props;

    if (selectingFilesPackage !== nextProps.selectingFilesPackage) {
      return true;
    }

    if (selectingFilesPackage || nextProps.selectingFilesPackage) {
      return false;
    }

    if (!selectingFilesPackage && !nextProps.selectingFilesPackage && nextProps.files.length !== this.props.files.length) {
      return true;
    }

    if (files.length ===  nextProps.files.length) {
      for (let i = 0; i <= files.length; i++) {
        if (is(files[i], nextProps.files[i])) {
          continue;
        } else {
          return true;
        }
      }
    }

    return false;
  }

   addFiles() {
    // tslint:disable-next-line:no-shadowed-variable
    const { selectFile, filePackageSelect } = this.props;

    dialog.showOpenDialog(null, { properties: ["openFile", "multiSelections"] }, (selectedFiles: string[]) => {
      if (selectedFiles) {
        filePackageSelect(selectedFiles);
      }
    });
  }

  dragLeaveHandler(event: any) {
    event.target.classList.remove("draggedOver");

    const zone = document.querySelector("#droppableZone");
    if (zone) {
      zone.classList.remove("droppableZone-active");
    }
  }

  dragEnterHandler(event: any) {
    event.target.classList.add("draggedOver");
  }

  dragOverHandler(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  directoryReader = (reader: any) => {
    reader.readEntries((entries: any) => {
      entries.forEach((entry: any) => {
        this.scanFiles(entry);
      });

      if (entries.length === 100) {
        this.directoryReader(reader);
      }
    });
  }

  scanFiles = (item: any) => {
    // tslint:disable-next-line:no-shadowed-variable
    const { selectFile } = this.props;

    if (item.isDirectory) {
      const reader = item.createReader();

      this.directoryReader(reader);
    } else {
      item.file((dropfile: IFile) => {
        selectFile(dropfile.path, dropfile.name, dropfile.lastModifiedDate, dropfile.size);
      });
    }
  }

  dropHandler = (event: any) => {
    const { localize, locale } = this.context;

    event.stopPropagation();
    event.preventDefault();
    event.target.classList.remove("draggedOver");

    const zone = document.querySelector("#droppableZone");
    if (zone) {
      zone.classList.remove("droppableZone-active");
    }

    const items = event.dataTransfer.items;

    for (const item of items) {
      const entry = item.webkitGetAsEntry();

      if (entry) {
        this.scanFiles(entry);
      }
    }
  }

  dropZoneActive() {
    const zone = document.querySelector("#droppableZone");
    if (zone) {
      zone.classList.add("droppableZone-active");
    }
  }

  toggleActive(file: any) {
    // tslint:disable-next-line:no-shadowed-variable
    const { activeFile } = this.props;

    activeFile(file.id, !file.active);
  }

  selectedAll() {
    // tslint:disable-next-line:no-shadowed-variable
    const { files, activeFile } = this.props;

    for (const file of files) {
      activeFile(file.id);
    }
  }

  removeSelectedAll() {
    // tslint:disable-next-line:no-shadowed-variable
    const { files, activeFile } = this.props;

    for (const file of files) {
      activeFile(file.id, false);
    }
  }

  removeFile = (id: string) => {
    // tslint:disable-next-line:no-shadowed-variable
    const { deleteFile } = this.props;

    deleteFile(id);
  }

  removeAllFiles() {
    // tslint:disable-next-line:no-shadowed-variable
    const { files, deleteFile } = this.props;

    for (const file of files) {
      deleteFile(file.id);
    }
  }

  rowRenderer = ({ index, key, style }) => {
    return (
      <FileListItem
        removeFiles={() => this.removeFile(this.props.files[index].id)}
        onClickBtn={() => this.toggleActive(this.props.files[index])}
        file={this.props.files[index]}
        operation={this.props.operation}
        key={key}
        index={index}
        style={style}
      />
    );
  }

  render() {
    // tslint:disable-next-line:no-shadowed-variable
    const { files } = this.props;

    const active = files.length > 0 ? "active" : "not-active";

    return (
      <div className={"file-content-height " + active}>
        <div id="file-content" className="content-wrapper z-depth-1">
          {this.getHeader()}
          {this.getBody()}
        </div>
      </div>
    );
  }

  getHeader() {
    const { localize, locale } = this.context;
    const { files } = this.props;

    const active = files.length > 0 ? "active" : "not-active";
    const collection = files.length > 0 ? "collection" : "";
    const disabled = files.length > 0 ? "" : "disabled";

    return (
      <nav className="app-bar-content">
        <ul className="app-bar-items">
          <li className="app-bar-item" style={appBarStyle}><span>{localize("Settings.add_files", locale)}</span></li>
          <li className="right">
            <a className={"nav-small-btn waves-effect waves-light " + active} onClick={this.addFiles.bind(this)}>
              <i className="material-icons nav-small-icon">add</i>
            </a>
            <a className={"nav-small-btn waves-effect waves-light " + disabled} data-activates="dropdown-btn-set-add-files">
              <i className="nav-small-icon material-icons">more_vert</i>
            </a>
            <ul id="dropdown-btn-set-add-files" className="dropdown-content">
              <li><a onClick={this.selectedAll.bind(this)}>{localize("Settings.selected_all", locale)}</a></li>
              <li><a onClick={this.removeSelectedAll.bind(this)}>{localize("Settings.remove_selected", locale)}</a></li>
              <li><a onClick={this.removeAllFiles.bind(this)}>{localize("Settings.remove_all_files", locale)}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }

  getBody() {
    const { localize, locale } = this.context;
    const { files, selectingFilesPackage } = this.props;

    if (selectingFilesPackage) {
      return <ProgressBars />;
    }

    const active = files.length > 0 ? "active" : "not-active";
    const collection = files.length > 0 ? "collection" : "";

    return (
      <div className="add">
      <div id="droppableZone" onDragEnter={(event: any) => this.dragEnterHandler(event)}
        onDrop={(event: any) => this.dropHandler(event)}
        onDragOver={(event: any) => this.dragOverHandler(event)}
        onDragLeave={(event: any) => this.dragLeaveHandler(event)}>
      </div>

      {files.length ?
        (
          <div className={collection}>
            <List
              rowCount={this.props.files.length}
              height={427}
              width={377}
              overscanRowCount={5}
              rowHeight={64}
              rowRenderer={this.rowRenderer}
              files={files}
            />
          </div>
        ) :
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div onDragEnter={this.dropZoneActive.bind(this)}>
            <div className={"add-file-item " + active} id="items-hidden">
              <a className="add-file-but waves-effect waves-light btn-large" id="fileSelect" onClick={this.addFiles.bind(this)}>{localize("Settings.choose_files", locale)}</a>
              <div className="add-file-item-text">{localize("Settings.drag_drop", locale)}</div>
              <i className="material-icons large fullscreen">fullscreen</i>
            </div>
          </div>
        </div>}
    </div>
    );
  }
}

export default connect((state) => {
  return {
    files: mapToArr(state.files.entities),
    selectedFilesPackage: state.files.selectedFilesPackage,
    selectingFilesPackage: state.files.selectingFilesPackage,
  };
}, { activeFile, deleteFile, filePackageSelect, selectFile })(FileSelector);
