/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands, env, Uri } from "vscode";

export function registerOpenUrlCommand() {
  commands.registerCommand("openHelpLink", (url: string) => {
    env.openExternal(Uri.parse(url));
})}