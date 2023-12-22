import { MOCK_DATA } from "../mock/data"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_DATA)
        console.log("mock",MOCK_DATA)
      }, 0)
    })
  }