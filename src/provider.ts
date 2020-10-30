/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Event, EventEmitter, ExtensionContext, TreeDataProvider, TreeItem } from "vscode";
import { Link } from "./link";
import { Node } from "./node";

export class DataProvider implements TreeDataProvider<Node> {
  context: ExtensionContext;
  links: Link[];

  private _onDidChangeTreeData: EventEmitter<Node | undefined> = new EventEmitter<Node | undefined>();
	readonly onDidChangeTreeData: Event<Node | undefined> = this._onDidChangeTreeData.event;


  constructor(context: ExtensionContext, links: Link[]) {
    this.context = context;
    this.links = links;
  }
  
  getTreeItem(element: Node): TreeItem | Thenable<TreeItem> {
    return element;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildren(element?: Node): Thenable<Node[]> {
    return new Promise(resolve => {
      const links: Node[] = [];
      this.links.forEach(link => {
        links.push(new Node(link.title, link.icon, {title: link.title, command: 'openHelpLink', arguments: [link.url]}));
      });
      resolve(links);
    });
  }

	refresh(): void {
		this._onDidChangeTreeData.fire(undefined);
	}
}