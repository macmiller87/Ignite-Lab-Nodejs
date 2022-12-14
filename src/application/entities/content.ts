export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenthValid = this.validateContentLength(content);

    if (!isContentLenthValid) {
      throw new Error('Content length error');
    }

    this.content = content;
  }
}
