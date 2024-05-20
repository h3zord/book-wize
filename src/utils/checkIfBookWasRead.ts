export function checkIfBookWasRead(bookId: string, bookIdList: string[]) {
  return bookIdList.includes(bookId)
}
