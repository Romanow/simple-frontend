const baseURL = process.env.REACT_APP_BACKEND_IP;

export const Api = {
  message: async (): Promise<String> => {
    return await fetch(`${baseURL}?person=docker`)
    .then((response) => response.text())
  }
}