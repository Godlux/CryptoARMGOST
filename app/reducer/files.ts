import * as fs from "fs";
import { OrderedMap, Record } from "immutable";
import {
  ACTIVE_FILE, DELETE_FILE, DOCUMENTS_REVIEWED, PACKAGE_DELETE_FILE,
  PACKAGE_SELECT_FILE, REMOVE_ALL_FILES, SELECT_FILE,
  SELECT_TEMP_CONTENT_OF_SIGNED_FILES, START, SUCCESS,
} from "../constants";
import { arrayToMap, fileExists } from "../utils";

const FileModel = Record({
  active: true,
  extension: null,
  extra: null,
  filename: null,
  filesize: null,
  fullpath: null,
  id: null,
  mtime: null,
  remoteId: null,
});

const DefaultReducerState = Record({
  documentsReviewed: false,
  entities: OrderedMap({}),
  selectedFilesPackage: false,
  selectingFilesPackage: false,
  tempContentOfSignedFiles: [],
});

export default (files = new DefaultReducerState(), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case PACKAGE_SELECT_FILE + START:
      return files
        .set("selectedFilesPackage", false)
        .set("selectingFilesPackage", true)
        .set("documentsReviewed", false);

    case PACKAGE_SELECT_FILE + SUCCESS:
      return files
        .update("entities", (entities) => arrayToMap(payload.filePackage, FileModel).merge(entities))
        .set("selectedFilesPackage", true)
        .set("selectingFilesPackage", false);

    case SELECT_FILE:
      return files
        .setIn(["entities", randomId], new FileModel({
          ...payload.file,
          id: randomId,
        }))
        .set("documentsReviewed", false);

    case ACTIVE_FILE:
      if (!files.getIn(["entities", payload.fileId])) {
        return files;
      }

      return files.setIn(["entities", payload.fileId, "active"], payload.isActive);

    case DELETE_FILE:
      return files.deleteIn(["entities", payload.fileId]);

    case PACKAGE_DELETE_FILE:
      let newFiles = files;
      payload.filePackage.forEach((id: number) => {
        newFiles = newFiles.deleteIn(["entities", id]);
      });

      return newFiles;

    case REMOVE_ALL_FILES:
      return files = new DefaultReducerState();

    case DOCUMENTS_REVIEWED:
      return files.set("documentsReviewed", payload.reviewed);

    case SELECT_TEMP_CONTENT_OF_SIGNED_FILES:
      return files.set("tempContentOfSignedFiles", [...files.get("tempContentOfSignedFiles"), payload.tempContentOfSignedFiles]);
  }

  return files;
};
