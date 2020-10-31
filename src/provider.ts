/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Event, EventEmitter, ExtensionContext, TreeDataProvider, TreeItem } from "vscode";
import { Command, isLink, Link } from "./link";
import { Node } from "./node";

export class DataProvider implements TreeDataProvider<Node> {
  context: ExtensionContext;
  items: Array<Link | Command>;

  private _onDidChangeTreeData: EventEmitter<Node | undefined> = new EventEmitter<Node | undefined>();
	readonly onDidChangeTreeData: Event<Node | undefined> = this._onDidChangeTreeData.event;


  constructor(context: ExtensionContext, items: Array<Link | Command>) {
    this.context = context;
    this.items = items;
  }
  
  getTreeItem(element: Node): TreeItem | Thenable<TreeItem> {
    return element;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildren(element?: Node): Thenable<Node[]> {
    return new Promise(resolve => {
      const links: Node[] = [];
      this.items.forEach(item => {
        if (isLink(item)) {
          links.push(new Node(item.title, item.icon, {title: item.title, command: 'openHelpLink', arguments: [item.url]}));
        } else {
          links.push(new Node(item.title, item.icon, {title: item.title, command: item.command}));
        }
      });
      resolve(links);
    });
  }

	refresh(): void {
		this._onDidChangeTreeData.fire(undefined);
	}
}