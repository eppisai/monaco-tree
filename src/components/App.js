import React, { useState, useEffect, useMemo } from "react";
import {
  MonacoTree,
  TreeDnD,
  generateDirectoryTree,
  FileTemplate,
  directoryListing,
  Files,
  TempFiles,
  Action,
  Separator,
} from "../monaco-tree";
import { Sandpack } from "@codesandbox/sandpack-react";

const obj = directoryListing.map((o, key) => ({ ...o, [key]: "heyy" }), {});

function App() {
  const rootDirectoryName = "demo";
  const [config, setConfig] = useState({
    rootNode: null,
    treeConfig: null,
  });
  const [test, setTest] = useState(false);
  let NewFiles = TempFiles;
  const [userFiles, setUserFiles] = useState(Files);
  console.log(userFiles)
  function getActions(file, event) {
    const actions = [];

    // Directory options
    if (file.isDirectory) {
      actions.push(
        new Action("1", "New File", "", true, () => {
          console.log("action New File on " + file.name);
        })
      );

      //menu separator
      actions.push(new Separator());

      actions.push(
        new Action("2", "New Directory", "", true, () => {
          console.log("action New Directory on " + file.name);
        })
      );

      actions.push(
        new Action("3", "Upload Files", "", true, () => {
          console.log("action Upload Files on " + file.name);
        })
      );
    }

    actions.push(
      new Action("4", "Download", "", true, () => {
        console.log("action Download on " + file.name);
      })
    );

    actions.push(
      new Action("5", "Delete", "", true, () => {
        console.log("action Delete on " + file.name);
      })
    );

    return actions;
  }
  function onDoubleClickFile(file) {
    console.log(file.name + " double clicked");
  }
  //modify this
  let lastClickedFile;
  let lastClickedTime;
  function onClickFile(file, path){
    if (file.isDirectory) {
      return;
    }
    if (Date.now() - lastClickedTime < 500 && lastClickedFile === file) {
      onDoubleClickFile(file);
    } else {
      console.log(file.name + " clicked");
      console.log(file);
      setUserFiles((currentFiles) => {
        let NewFiles = { ...currentFiles };
        NewFiles[path].hidden = !NewFiles[path].hidden;
        console.log(NewFiles);
        return NewFiles;
      });
    }

    lastClickedTime = Date.now();
    lastClickedFile = file;
  }

  useEffect(() => {
    setConfig({
      rootNode: generateDirectoryTree(directoryListing, rootDirectoryName),
      treeConfig: {
        dataSource: {
          /**
           * Returns the unique identifier of the given element.
           * No more than one element may use a given identifier.
           */
          getId: function (tree, element) {
            return element.key;
          },

          /**
           * Returns a boolean value indicating whether the element has children.
           */
          hasChildren: function (tree, element) {
            return element.isDirectory;
          },

          /**
           * Returns the element's children as an array in a promise.
           */
          getChildren: function (tree, element) {
            return Promise.resolve(element.children);
          },

          /**
           * Returns the element's parent in a promise.
           */
          getParent: function (tree, element) {
            return Promise.resolve(element.parent);
          },
        },
        renderer: {
          getHeight: function (tree, element) {
            return 24;
          },
          renderTemplate: function (tree, templateId, container) {
            return new FileTemplate(container);
          },
          renderElement: function (tree, element, templateId, templateData) {
            templateData.set(element);
          },
          disposeTemplate: function (tree, templateId, templateData) {
            FileTemplate.dispose();
          },
        },

        //tree config requires a controller property but we would defer its initialisation
        //to be done by the MonacoTree component
        //controller: createController(this, this.getActions.bind(this), true),
        dnd: new TreeDnD(),
      },
    });
  },[userFiles]);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className="vs-dark show-file-icons show-folder-icons"
          style={{
            width: "15vw",
            height: "100vh",
            position: "relative",
            margin: "0px auto",
          }}
        >
          <div className="workspaceContainer">
            {!config.rootNode ? null : (
              <MonacoTree
                directory={config.rootNode}
                treeConfig={config.treeConfig}
                getActions={getActions}
                onClickFile={onClickFile}
              /> 
          )}
          </div>
        </div>
        <div           style={{
            width: "85vw",
            height: "100vh",
            position: "relative",
            margin: "0px auto",
          }}>
        <Sandpack
          template="react"
          key={JSON.stringify(userFiles)}
          files={userFiles}
          options={{
            showTabs: true,
            closableTabs: true,
          }}
        />
        </div>
      </div>
    </>
  );
}

export default App;
