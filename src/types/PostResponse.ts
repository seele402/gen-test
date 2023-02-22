export type PostResponse = {
  _embedded: {
    [entity: string]: [
      {
        id: number,
        request_id: string,
      }
    ]
  }
}