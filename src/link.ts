/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

interface Item {
  icon: string,
  title: string,
}

export interface Link extends Item {
  url: string;
}

export interface Command extends Item {
  command: string;
}

export function isLink(item: Link | Command): item is Link {
  return (item as Link).url !== undefined;
}