export class Blog {
  constructor({ id, title, content, img, tags, date, author }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.img = img;
    this.tags = tags || [];
    this.date = date;
    this.author = author;
  }
}
