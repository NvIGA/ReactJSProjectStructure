class ApiClient {
  apiName = 'Example'
  example = `/`

  async exampleRequest(data: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 150)
    })
  }
}

export const DataProvider = new ApiClient()
