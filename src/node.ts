/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Command, ThemeIcon, TreeItem } from "vscode";

export class Node extends TreeItem {

  constructor(
    public readonly label: string,
    public readonly icon: string,
    public readonly command?: Command
  ) {
    super(label);

    this.command = command;
    this.iconPath = new ThemeIcon(icon);
  }
}