export interface Book {
  isbn: string,
  retailPrice: {
    amount: number
    currencyCode: string,
  },
  pgaCount: number,
  title: string,
  subtitle: string,
  authors: string,
  publisher: string,
  publishedDate: Date,
  description: string,
  imageLinks: {
    smallThumbnail: string,
    thumbnail: string,
  },
}
