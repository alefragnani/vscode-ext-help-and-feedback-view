/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Extension, extensions } from "vscode"
import { Link } from "./items"

class StandardLink implements Link {
  constructor (public icon: string, public title: string, public url: string) { }
}

export class GetStartedLink extends StandardLink {
  constructor (url: string) {
    super('star', 'Get Started', url)
  }
}

export class ReadDocumentationLink extends StandardLink {
  constructor (url: string) {
    super('book', 'Read Documentation', url)
  }
}

export class ProvideFeedbackLink extends StandardLink {
  constructor (url: string) {
    super('twitter', 'Provide Feedback', 
    `https://twitter.com/intent/tweet?hashtags=${url}&text=%40code`)
  }
}

export class ReviewIssuesLink extends StandardLink {
  constructor (url: string) {
    super('info', 'Review Issues', url)
  }
}

export class ReportIssueLink extends StandardLink {
  constructor (public url: string) {
    super('comment', 'Report Issue', url)
  }
}

export class SupportLink extends StandardLink {
  constructor (public url: string) {
    super('heart', 'Support', url)
  }
}

export class StandardLinksProvider {

  private extension: Extension<any>;

  constructor (public extensionId: string) {  
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.extension = extensions.getExtension(this.extensionId)!;
  }

  public getGetStartedLink(): Link {
    return new GetStartedLink(this.extension.packageJSON.homepage);
  }

  public getReadDocumentation(): Link {
    return new ReadDocumentationLink(this.extension.packageJSON.homepage);
  }

  public getReviewIssuesLink(): Link {
    return new ReviewIssuesLink(this.extension.packageJSON.bugs.url);
  }
  public getReportIssueLink(): Link {
    return new ReportIssueLink(`${this.extension.packageJSON.bugs.url}/new/choose`);
  }
}