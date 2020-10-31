/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Link } from "./link"

class PredefinedLink implements Link {
  constructor (public icon: string, public title: string, public url: string) { }
}

export class GetStartedLink extends PredefinedLink {
  constructor (url: string) {
    super('star', 'Get Started', url)
  }
}

export class ReadDocumentationLink extends PredefinedLink {
  constructor (url: string) {
    super('book', 'Read Documentation', url)
  }
}

export class ProvideFeedbackLink extends PredefinedLink {
  constructor (url: string) {
    super('twitter', 'Provide Feedback', 
    `https://twitter.com/intent/tweet?hashtags=${url}&text=%40code`)
  }
}

export class ReviewIssuesLink extends PredefinedLink {
  constructor (url: string) {
    super('info', 'Read Issues', url)
  }
}

export class ReportIssueLink extends PredefinedLink {
  constructor (public url: string) {
    super('comment', 'Report Issue', url)
  }
}

export class SupportLink extends PredefinedLink {
  constructor (public url: string) {
    super('heart', 'Support', url)
  }
}