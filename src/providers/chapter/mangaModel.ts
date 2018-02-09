export interface MangaModel {
  title: string,
  author: string,
  categories: string[],
  description: string,
  imageLink: string,
  isOnGoing: boolean,
  chapters: {
    num: string,
    releasedDate: Date,
    name: string,
    id: string,
  }[],
}
