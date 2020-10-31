/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TreeView, ExtensionContext, window } from "vscode";
import { Command, Link } from "./items";
import { Node } from "./node";
import { registerOpenUrlCommand } from "./openUrl";
import { DataProvider } from "./provider";

export class HelpAndFeedbackView {

  private helpViewer: TreeView<Node>;
  private treeDataProvider: DataProvider;

  constructor(context: ExtensionContext, viewId: string, items: Array<Link | Command>) {
    registerOpenUrlCommand();
    this.treeDataProvider = new DataProvider(context, items);
    this.helpViewer = window.createTreeView(viewId, { 
      treeDataProvider: this.treeDataProvider, 
      showCollapseAll: false } );
  }

  getProvider() {
    return this.treeDataProvider;
  }  
}